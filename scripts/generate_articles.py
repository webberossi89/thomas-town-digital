#!/usr/bin/env python3
"""
Thomas Town Digital — Article Generation Script

Usage:
  python scripts/generate_articles.py

Reads rows with Status="pending" from the Google Sheet,
generates articles via Claude API (with web search),
commits drafts to GitHub, and posts to Slack for approval.

Required env vars (see scripts/SETUP.md):
  ANTHROPIC_API_KEY
  GOOGLE_SHEET_ID
  GOOGLE_CREDENTIALS_PATH   (path to service account JSON)
  SLACK_BOT_TOKEN
  SLACK_CHANNEL_ID
  GITHUB_TOKEN
  GITHUB_REPO               (e.g. "webberossi89/thomas-town-digital")
"""

import os
import json
import re
import time
import base64
from datetime import datetime

import gspread
from google.oauth2.service_account import Credentials
import anthropic
from slack_sdk import WebClient
import requests

# ── Config ────────────────────────────────────────────────────────────────────

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.readonly",
]

SHEET_ID          = os.environ["GOOGLE_SHEET_ID"]
CREDENTIALS_PATH  = os.environ.get("GOOGLE_CREDENTIALS_PATH", "scripts/service-account.json")
SLACK_TOKEN       = os.environ["SLACK_BOT_TOKEN"]
SLACK_CHANNEL     = os.environ["SLACK_CHANNEL_ID"]
ANTHROPIC_KEY     = os.environ["ANTHROPIC_API_KEY"]
GITHUB_TOKEN      = os.environ["GITHUB_TOKEN"]
GITHUB_REPO       = os.environ.get("GITHUB_REPO", "webberossi89/thomas-town-digital")
SITE_URL          = os.environ.get("SITE_URL", "https://thomastowndigital.com")

# Sheet columns (0-based)
COL_TOPIC    = 0
COL_KEYWORD  = 1
COL_CATEGORY = 2
COL_STATUS   = 3
COL_SLUG     = 4
COL_TITLE    = 5
COL_SLACK_TS = 6


# ── Helpers ───────────────────────────────────────────────────────────────────

def get_sheet():
    creds = Credentials.from_service_account_file(CREDENTIALS_PATH, scopes=SCOPES)
    gc = gspread.authorize(creds)
    return gc.open_by_key(SHEET_ID).sheet1


def slugify(text: str) -> str:
    s = text.lower()
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"-+", "-", s)
    return s.strip("-")[:60]


def github_request(method: str, path: str, data: dict = None):
    url = f"https://api.github.com/repos/{GITHUB_REPO}/{path}"
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    resp = requests.request(method, url, headers=headers, json=data)
    resp.raise_for_status()
    return resp.json() if resp.content else {}


def github_put_file(file_path: str, content: str, message: str, sha: str = None):
    """Create or update a file in the GitHub repo."""
    encoded = base64.b64encode(content.encode()).decode()
    payload = {"message": message, "content": encoded}
    if sha:
        payload["sha"] = sha
    github_request("PUT", f"contents/{file_path}", payload)


def github_get_file(file_path: str):
    """Returns (content_str, sha) or (None, None) if not found."""
    try:
        data = github_request("GET", f"contents/{file_path}")
        content = base64.b64decode(data["content"]).decode()
        return content, data["sha"]
    except requests.HTTPError as e:
        if e.response.status_code == 404:
            return None, None
        raise


# ── Article generation ────────────────────────────────────────────────────────

def generate_article(topic: str, keyword: str, category: str) -> dict:
    client = anthropic.Anthropic(api_key=ANTHROPIC_KEY)
    today = datetime.now()
    date_display = today.strftime("%B %-d, %Y")
    date_iso = today.strftime("%Y-%m-%d")

    system = (
        "You are a senior content writer for Thomas Town Digital, a home services digital marketing agency. "
        "Write authoritative, practical articles for home service business owners (HVAC, roofing, plumbing, electrical, etc.). "
        "Style: Direct, no-nonsense, specific — use real numbers and concrete advice. Write like a practitioner. "
        "Avoid: 'In conclusion', 'In today's digital landscape', generic filler."
    )

    prompt = f"""Research and write a complete SEO-optimized blog article.

Topic: {topic}
Target keyword: {keyword}
Category: {category}

First use web search to research current data, benchmarks, and what's working in {today.year}.

Return ONLY a valid JSON object (no markdown, no code blocks) with these fields:
{{
  "title": "article title, 60-70 chars, includes keyword naturally",
  "slug": "url-slug-from-title",
  "summary": "2-3 sentence summary for blog listing, under 200 chars",
  "readTime": "X min read",
  "body": "full article HTML — use only <p>, <h2>, <h3>, <ul>, <li>, <strong>, <em> tags. 1200-1800 words. No wrapper tags. Escape any double quotes as &quot;"
}}

Body requirements:
- Strong opening hook addressing the reader's specific problem
- 4-6 H2 sections with practical, numbered/specific content
- Real benchmarks and examples from home services
- Final section mentioning Thomas Town Digital naturally"""

    message = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=5000,
        system=system,
        tools=[{"type": "web_search_20250305", "name": "web_search"}],
        messages=[{"role": "user", "content": prompt}],
    )

    text = next((b.text for b in message.content if b.type == "text"), "")

    # Strip markdown code fences if present
    text = re.sub(r"^```(?:json)?\s*", "", text.strip())
    text = re.sub(r"\s*```$", "", text.strip())

    data = json.loads(text)
    slug = data.get("slug") or slugify(data["title"])

    return {
        "slug": slug,
        "title": data["title"],
        "summary": data["summary"],
        "readTime": data["readTime"],
        "body": data["body"],
        "category": category,
        "date": date_display,
        "dateISO": date_iso,
    }


# ── Draft storage ─────────────────────────────────────────────────────────────

def save_draft_to_github(article: dict):
    """Save article JSON to drafts/ folder in the repo."""
    path = f"drafts/{article['slug']}.json"
    content = json.dumps(article, indent=2)
    _, sha = github_get_file(path)
    github_put_file(
        path,
        content,
        f"draft: {article['title']}",
        sha=sha,
    )
    return path


# ── Slack ─────────────────────────────────────────────────────────────────────

def post_to_slack(slack: WebClient, article: dict, topic: str) -> str:
    resp = slack.chat_postMessage(
        channel=SLACK_CHANNEL,
        text=f"📝 New article ready: *{article['title']}*",
        blocks=[
            {
                "type": "header",
                "text": {"type": "plain_text", "text": "📝 New Article Ready for Approval"},
            },
            {
                "type": "section",
                "fields": [
                    {"type": "mrkdwn", "text": f"*Title:*\n{article['title']}"},
                    {"type": "mrkdwn", "text": f"*Category:*\n{article['category']}"},
                    {"type": "mrkdwn", "text": f"*Read Time:*\n{article['readTime']}"},
                    {"type": "mrkdwn", "text": f"*Slug:*\n`{article['slug']}`"},
                ],
            },
            {
                "type": "section",
                "text": {"type": "mrkdwn", "text": f"*Summary:*\n_{article['summary']}_"},
            },
            {
                "type": "section",
                "text": {"type": "mrkdwn", "text": f"*Topic:* {topic}"},
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {"type": "plain_text", "text": "✅ Approve & Publish"},
                        "style": "primary",
                        "action_id": "approve_article",
                        "value": article["slug"],
                    },
                    {
                        "type": "button",
                        "text": {"type": "plain_text", "text": "❌ Reject"},
                        "style": "danger",
                        "action_id": "reject_article",
                        "value": article["slug"],
                    },
                ],
            },
        ],
    )
    return resp["ts"]


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print("🚀 Thomas Town Digital — Article Generator")
    sheet = get_sheet()
    slack = WebClient(token=SLACK_TOKEN)
    rows = sheet.get_all_values()

    pending = [
        (i + 2, row)  # i+2 = 1-based sheet row (row 1 is header)
        for i, row in enumerate(rows[1:])
        if len(row) > COL_STATUS and row[COL_STATUS].strip().lower() == "pending"
    ]

    if not pending:
        print("No pending articles found.")
        return

    print(f"Found {len(pending)} pending article(s).")

    for sheet_row, row in pending:
        topic    = row[COL_TOPIC].strip()
        keyword  = row[COL_KEYWORD].strip() if len(row) > COL_KEYWORD else topic
        category = row[COL_CATEGORY].strip() if len(row) > COL_CATEGORY else "Blog"

        print(f"\n✍️  Generating: {topic}")
        sheet.update_cell(sheet_row, COL_STATUS + 1, "generating")

        try:
            article = generate_article(topic, keyword, category)

            # Save draft to GitHub
            save_draft_to_github(article)

            # Post to Slack
            ts = post_to_slack(slack, article, topic)

            # Update sheet
            sheet.update_cell(sheet_row, COL_SLUG + 1, article["slug"])
            sheet.update_cell(sheet_row, COL_TITLE + 1, article["title"])
            sheet.update_cell(sheet_row, COL_SLACK_TS + 1, ts)
            sheet.update_cell(sheet_row, COL_STATUS + 1, "draft_sent")

            print(f"✅ Posted to Slack: {article['title']}")

        except Exception as e:
            print(f"❌ Error: {e}")
            sheet.update_cell(sheet_row, COL_STATUS + 1, "error")

        time.sleep(3)


if __name__ == "__main__":
    main()
