import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Article {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  body: string;
  category: string;
  date: string;
  dateISO: string;
}

// ── Config ────────────────────────────────────────────────────────────────────

const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET!;
const SLACK_BOT_TOKEN      = process.env.SLACK_BOT_TOKEN!;
const GITHUB_TOKEN         = process.env.GITHUB_TOKEN!;
const GITHUB_REPO          = process.env.GITHUB_REPO ?? "webberossi89/thomas-town-digital";

// ── Slack signature verification ──────────────────────────────────────────────

async function verifySlackSignature(req: NextRequest, rawBody: string): Promise<boolean> {
  const timestamp = req.headers.get("x-slack-request-timestamp") ?? "";
  const slackSig  = req.headers.get("x-slack-signature") ?? "";

  // Reject requests older than 5 minutes
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false;

  const sigBase = `v0:${timestamp}:${rawBody}`;
  const hmac    = crypto.createHmac("sha256", SLACK_SIGNING_SECRET);
  hmac.update(sigBase);
  const computed = `v0=${hmac.digest("hex")}`;

  return crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(slackSig));
}

// ── GitHub helpers ────────────────────────────────────────────────────────────

async function githubRequest(method: string, path: string, body?: object) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub ${method} ${path} → ${res.status}: ${err}`);
  }

  return res.status === 204 ? {} : res.json();
}

async function getFile(path: string): Promise<{ content: string; sha: string } | null> {
  try {
    const data = await githubRequest("GET", `contents/${path}`) as { content: string; sha: string };
    return {
      content: Buffer.from(data.content, "base64").toString("utf-8"),
      sha: data.sha,
    };
  } catch {
    return null;
  }
}

async function putFile(path: string, content: string, message: string, sha?: string) {
  await githubRequest("PUT", `contents/${path}`, {
    message,
    content: Buffer.from(content).toString("base64"),
    ...(sha ? { sha } : {}),
  });
}

async function deleteFile(path: string, sha: string, message: string) {
  await githubRequest("DELETE", `contents/${path}`, { message, sha });
}

// ── Article page generator ────────────────────────────────────────────────────

function buildPageTsx(article: Article): string {
  // Escape backticks and template literal syntax in body HTML
  const safeBody = article.body
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");

  return `import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "${article.title.replace(/"/g, '\\"')} — Thomas Town Digital",
  description:
    "${article.summary.replace(/"/g, '\\"')}",
  openGraph: {
    title: "${article.title.replace(/"/g, '\\"')}",
    description: "${article.summary.replace(/"/g, '\\"')}",
    type: "article",
    publishedTime: "${article.dateISO}T00:00:00Z",
  },
};

const meta = {
  title: "${article.title.replace(/"/g, '\\"')}",
  description:
    "${article.summary.replace(/"/g, '\\"')}",
  category: "${article.category}",
  date: "${article.date}",
  dateISO: "${article.dateISO}",
  readTime: "${article.readTime}",
  slug: "${article.slug}",
};

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <div dangerouslySetInnerHTML={{ __html: \`${safeBody}\` }} />
    </ArticleLayout>
  );
}
`;
}

// ── Blog listing updater ──────────────────────────────────────────────────────

function prependPostToBlogListing(current: string, article: Article): string {
  const newPost = `  {
    category: "${article.category}",
    title: "${article.title.replace(/"/g, '\\"')}",
    summary:
      "${article.summary.replace(/"/g, '\\"')}",
    date: "${article.date}",
    dateISO: "${article.dateISO}",
    readTime: "${article.readTime}",
    slug: "${article.slug}",
  },`;

  // Insert as first item in the posts array
  return current.replace(
    /^(const posts = \[)/m,
    `$1\n${newPost}`
  );
}

// ── Slack helpers ─────────────────────────────────────────────────────────────

async function updateSlackMessage(channel: string, ts: string, text: string, blocks: object[]) {
  await fetch("https://slack.com/api/chat.update", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ channel, ts, text, blocks }),
  });
}

// ── Main handler ──────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  if (!(await verifySlackSignature(req, rawBody))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Parse Slack payload (URL-encoded form with a "payload" key)
  const params  = new URLSearchParams(rawBody);
  const payload = JSON.parse(params.get("payload") ?? "{}");

  const action     = payload.actions?.[0];
  const actionId   = action?.action_id as string;
  const slug       = action?.value as string;
  const channelId  = payload.channel?.id as string;
  const messageTs  = payload.message?.ts as string;

  if (!actionId || !slug) {
    return NextResponse.json({ ok: true });
  }

  // Acknowledge immediately (Slack requires < 3s response)
  // We do the heavy work after responding — use waitUntil in production
  // For simplicity here we run inline (Vercel Functions have 60s limit)

  if (actionId === "reject_article") {
    await deleteFile(
      `drafts/${slug}.json`,
      (await getFile(`drafts/${slug}.json`))?.sha ?? "",
      `reject: ${slug}`
    ).catch(() => {});

    await updateSlackMessage(channelId, messageTs, `❌ Article rejected: ${slug}`, [
      {
        type: "section",
        text: { type: "mrkdwn", text: `❌ *Rejected:* \`${slug}\`` },
      },
    ]);

    return NextResponse.json({ ok: true });
  }

  if (actionId === "approve_article") {
    try {
      // 1. Read draft from GitHub
      const draftFile = await getFile(`drafts/${slug}.json`);
      if (!draftFile) throw new Error(`Draft not found: drafts/${slug}.json`);
      const article: Article = JSON.parse(draftFile.content);

      // 2. Generate article page.tsx
      const pageTsx = buildPageTsx(article);

      // 3. Get current blog listing page
      const blogListing = await getFile("app/blog/page.tsx");
      if (!blogListing) throw new Error("Could not read app/blog/page.tsx");

      const updatedListing = prependPostToBlogListing(blogListing.content, article);

      // 4. Commit everything
      await putFile(
        `app/blog/${article.slug}/page.tsx`,
        pageTsx,
        `publish: ${article.title}`
      );

      await putFile(
        "app/blog/page.tsx",
        updatedListing,
        `blog listing: add ${article.slug}`,
        blogListing.sha
      );

      // 5. Delete draft
      await deleteFile(
        `drafts/${slug}.json`,
        draftFile.sha,
        `cleanup draft: ${slug}`
      );

      // 6. Update Slack message
      await updateSlackMessage(channelId, messageTs, `✅ Published: ${article.title}`, [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `✅ *Published:* <https://thomastowndigital.com/blog/${article.slug}|${article.title}>`,
          },
        },
      ]);

    } catch (err) {
      console.error("Approval error:", err);
      await updateSlackMessage(channelId, messageTs, `⚠️ Error publishing ${slug}`, [
        {
          type: "section",
          text: { type: "mrkdwn", text: `⚠️ *Error publishing* \`${slug}\`:\n${err}` },
        },
      ]);
    }
  }

  return NextResponse.json({ ok: true });
}
