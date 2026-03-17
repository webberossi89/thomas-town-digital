# Article Generation Pipeline — Setup Guide

## How it works

1. Add topics to your Google Sheet (Status = "pending")
2. Run `python scripts/generate_articles.py`
3. Claude researches + writes each article, posts to Slack
4. Click **Approve** in Slack → publishes to GitHub → Vercel deploys in ~30s
5. Click **Reject** → draft is deleted, row stays for editing

---

## Google Sheet Setup

Create a sheet with these column headers in row 1:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Topic | Keyword | Category | Status | Slug | Title | SlackTS |

**Status values:**
- `pending` — ready to generate
- `generating` — in progress
- `draft_sent` — posted to Slack, awaiting approval
- `published` — live on site
- `error` — something went wrong

**Category options:** `Google Ads`, `SEO`, `LSA`, `Websites`, `AI Automations`

---

## Environment Variables

Add these to your shell profile (`~/.zshrc`) for running the script locally:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
export GOOGLE_SHEET_ID="1abc...xyz"          # from the sheet URL
export GOOGLE_CREDENTIALS_PATH="scripts/service-account.json"
export SLACK_BOT_TOKEN="xoxb-..."
export SLACK_CHANNEL_ID="C0123456789"
export GITHUB_TOKEN="ghp_..."
export GITHUB_REPO="webberossi89/thomas-town-digital"
```

Add these to **Vercel Environment Variables** (for the Slack webhook):

```
SLACK_SIGNING_SECRET   = your Slack app signing secret
SLACK_BOT_TOKEN        = xoxb-...
GITHUB_TOKEN           = ghp_...
GITHUB_REPO            = webberossi89/thomas-town-digital
```

---

## One-time Setup

### 1. Google Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a project → Enable **Google Sheets API**
3. Create a Service Account → download JSON key
4. Save the JSON as `scripts/service-account.json` (already in .gitignore)
5. Share your Google Sheet with the service account email

### 2. Slack App
1. Go to [api.slack.com/apps](https://api.slack.com/apps) → Create New App
2. Add these **Bot Token Scopes**: `chat:write`, `chat:update`
3. Enable **Interactivity & Shortcuts**
4. Set the **Request URL** to: `https://thomastowndigital.com/api/slack-approve`
5. Install to workspace, copy the Bot Token + Signing Secret

### 3. GitHub Token
1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
2. Generate a token with `repo` scope
3. Add to env vars

### 4. Install Python dependencies
```bash
cd "/Users/jaredwebber/Thomas Town Digital/thomas-town-digital"
python3 -m venv scripts/.venv
source scripts/.venv/bin/activate
pip install -r scripts/requirements.txt
```

---

## Running the script

```bash
source scripts/.venv/bin/activate
python scripts/generate_articles.py
```

---

## Adding topics

Just add rows to the Google Sheet with Status = `pending`. Leave Slug, Title, SlackTS blank — the script fills those in.

**Example rows:**
| Topic | Keyword | Category | Status |
|---|---|---|---|
| How to get more Google reviews for HVAC companies | google reviews hvac | SEO | pending |
| Google Ads budget guide for roofing contractors in 2026 | roofing google ads budget | Google Ads | pending |
| Why most contractor websites don't convert | contractor website conversion | Websites | pending |
