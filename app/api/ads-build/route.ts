import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/ads-build
 *
 * Front door for the Google Ads Build lead magnet. The form on
 * /free-content/google-ads-build calls this. We validate, forward to the
 * Python build service on Railway (env: ADS_BUILD_SERVICE_URL), and return
 * the synchronous teaser JSON to the browser. The Python service is also
 * responsible for the async XLSX render + email + Notion + Smartlead.
 *
 * Env vars:
 *   ADS_BUILD_SERVICE_URL   e.g. https://ttd-ads-build.up.railway.app
 *   ADS_BUILD_SERVICE_TOKEN shared secret to authenticate this Vercel route
 *                           to the Railway service
 *   TURNSTILE_SECRET_KEY    optional; if present, /api/ads-build expects a
 *                           cf-turnstile-response in the JSON body and
 *                           verifies it before forwarding
 */

const VALID_VERTICALS = new Set([
  "hvac",
  "plumbing",
  "roofing",
  "garage_door",
  "electrical",
  "landscaping",
  "pest_control",
  "painting",
  "fencing",
  "concrete",
]);

interface AdsBuildPayload {
  business_name: string;
  website_url: string;
  contact_email: string;
  contact_phone: string;
  vertical: string;
  primary_city: string;
  primary_state: string;
  secondary_service_areas: string[];
  monthly_budget_usd: number;
  avg_job_ticket_usd: number;
  cf_turnstile_response?: string;
}

function badRequest(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // skip when not configured (dev / staging)

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return badRequest("Invalid JSON body");
  }

  const body = raw as Partial<AdsBuildPayload>;

  // Required fields
  const businessName = (body.business_name ?? "").toString().trim();
  const email = (body.contact_email ?? "").toString().trim();
  const vertical = (body.vertical ?? "").toString().trim();
  const primaryCity = (body.primary_city ?? "").toString().trim();
  const primaryState = (body.primary_state ?? "").toString().trim().toUpperCase();
  const websiteUrl = (body.website_url ?? "").toString().trim();
  const monthlyBudget = Number(body.monthly_budget_usd ?? 0);

  if (!businessName) return badRequest("business_name is required");
  if (!email || !isValidEmail(email)) return badRequest("A valid contact_email is required");
  if (!vertical || !VALID_VERTICALS.has(vertical)) return badRequest("vertical is invalid");
  if (!primaryCity) return badRequest("primary_city is required");
  if (!primaryState || primaryState.length !== 2) return badRequest("primary_state must be a 2-letter US state code");
  if (!websiteUrl || !isValidUrl(websiteUrl)) return badRequest("website_url must be a valid http(s) URL");
  if (!Number.isFinite(monthlyBudget) || monthlyBudget < 100 || monthlyBudget > 200000) {
    return badRequest("monthly_budget_usd is out of range");
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  const userAgent = req.headers.get("user-agent") ?? "";

  // Turnstile check (no-op when secret not configured)
  if (body.cf_turnstile_response) {
    const ok = await verifyTurnstile(body.cf_turnstile_response, ip);
    if (!ok) return badRequest("Turnstile verification failed", 403);
  }

  const serviceUrl = process.env.ADS_BUILD_SERVICE_URL;
  const serviceToken = process.env.ADS_BUILD_SERVICE_TOKEN;
  if (!serviceUrl || !serviceToken) {
    console.error("ADS_BUILD_SERVICE_URL or ADS_BUILD_SERVICE_TOKEN missing");
    return NextResponse.json({ error: "Service not configured" }, { status: 503 });
  }

  const forwarded = {
    business_name: businessName,
    website_url: websiteUrl,
    contact_email: email,
    contact_phone: (body.contact_phone ?? "").toString().trim(),
    vertical,
    primary_metro: `${primaryCity}, ${primaryState}`,
    primary_city: primaryCity,
    primary_state: primaryState,
    secondary_service_areas: Array.isArray(body.secondary_service_areas)
      ? body.secondary_service_areas.map((s) => String(s).trim()).filter(Boolean)
      : [],
    monthly_budget_usd: monthlyBudget,
    avg_job_ticket_usd: Number(body.avg_job_ticket_usd ?? 0) || 0,
    submission_meta: {
      ip,
      user_agent: userAgent,
      received_at: new Date().toISOString(),
    },
  };

  let upstream: Response;
  try {
    upstream = await fetch(`${serviceUrl.replace(/\/$/, "")}/build`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Build-Service-Token": serviceToken,
      },
      body: JSON.stringify(forwarded),
      cache: "no-store",
    });
  } catch (err) {
    console.error("ads-build upstream fetch error:", err);
    return NextResponse.json({ error: "Build service unreachable" }, { status: 502 });
  }

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    console.error(`ads-build upstream ${upstream.status}:`, text.slice(0, 500));
    if (upstream.status === 429) {
      return NextResponse.json(
        { error: "You've already requested a build recently. Check your inbox or try again later." },
        { status: 429 }
      );
    }
    return NextResponse.json({ error: "Build service error" }, { status: 502 });
  }

  const teaser = await upstream.json();
  return NextResponse.json(teaser, { status: 200 });
}
