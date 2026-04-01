import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";
import path from "path";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const LOGO_PATH = path.join(process.cwd(), "public/logos/TT-Logo_Stacked-Black.png");

// ─── Styles ───────────────────────────────────────────────────────────────────

const GREEN = "#2D8A45";
const BLACK = "#0a0a0a";
const MUTED = "#666";
const LIGHT_BG = "#f7f7f7";
const BORDER = "#e5e5e5";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 80,
    paddingBottom: 72,
    paddingHorizontal: 52,
    fontFamily: "Helvetica",
  },
  // Fixed per-page logo header
  pageHeader: {
    position: "absolute",
    top: 20,
    left: 52,
    right: 52,
  },
  pageHeaderLogo: {
    width: 80,
  },
  // Header
  header: {
    marginBottom: 36,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: GREEN,
    borderBottomStyle: "solid",
  },
  logo: {
    width: 140,
    marginBottom: 16,
  },
  brandName: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: GREEN,
    marginBottom: 14,
  },
  docTitle: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: BLACK,
    lineHeight: 1.15,
    marginBottom: 10,
  },
  docSubtitle: {
    fontSize: 12,
    color: MUTED,
    lineHeight: 1.6,
  },
  // Section headings
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: BLACK,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 28,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    borderBottomStyle: "solid",
  },
  subHeading: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: GREEN,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 16,
    marginBottom: 6,
  },
  // Body text
  body: {
    fontSize: 11,
    color: MUTED,
    lineHeight: 1.7,
    marginBottom: 10,
  },
  // Bullet
  bulletRow: {
    flexDirection: "row",
    marginBottom: 6,
    paddingLeft: 4,
  },
  bulletArrow: {
    fontSize: 10,
    color: GREEN,
    fontFamily: "Helvetica-Bold",
    marginRight: 8,
    lineHeight: 1.7,
    width: 12,
  },
  bulletText: {
    fontSize: 11,
    color: MUTED,
    lineHeight: 1.65,
    flex: 1,
  },
  // Chapter / step card
  card: {
    backgroundColor: LIGHT_BG,
    borderRadius: 6,
    padding: 16,
    marginBottom: 14,
  },
  cardNumber: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: GREEN,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: BLACK,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 28,
    left: 52,
    right: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: BORDER,
    borderTopStyle: "solid",
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    color: "#aaa",
  },
  footerGreen: {
    fontSize: 8,
    color: GREEN,
  },
  // Tag pill
  tag: {
    backgroundColor: "#e8f5ed",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  tagText: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GREEN,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  // Divider
  divider: {
    height: 1,
    backgroundColor: BORDER,
    marginVertical: 18,
  },
  // CTA box at end
  ctaBox: {
    backgroundColor: BLACK,
    borderRadius: 8,
    padding: 24,
    marginTop: 32,
  },
  ctaTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  ctaBody: {
    fontSize: 10,
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.6,
    marginBottom: 12,
  },
  ctaUrl: {
    fontSize: 10,
    color: GREEN,
    fontFamily: "Helvetica-Bold",
  },
});

// ─── Helper components ────────────────────────────────────────────────────────

function Bullet({ text }: { text: string }) {
  return createElement(
    View,
    { style: styles.bulletRow },
    createElement(Text, { style: styles.bulletArrow }, "→"),
    createElement(Text, { style: styles.bulletText }, text)
  );
}

function PageHeader() {
  return createElement(
    View,
    { style: styles.pageHeader, fixed: true },
    createElement(Image, { style: styles.pageHeaderLogo, src: LOGO_PATH })
  );
}

function PageFooter({ title }: { title: string }) {
  return createElement(
    View,
    { style: styles.footer, fixed: true },
    createElement(Text, { style: styles.footerText }, `Thomas Town Digital · ${title}`),
    createElement(Text, { style: styles.footerGreen }, "thomastowndigital.com")
  );
}

function CtaBox() {
  return createElement(
    View,
    { style: styles.ctaBox },
    createElement(Text, { style: styles.ctaTitle }, "Ready to Fill Your Pipeline?"),
    createElement(
      Text,
      { style: styles.ctaBody },
      "Book a free 30-minute strategy call. We\u2019ll assess your market, audit your current setup, and show you exactly what it would take to cut your cost per lead."
    ),
    createElement(Text, { style: styles.ctaUrl }, "thomastowndigital.com/contact")
  );
}

// ─── PDF Documents ────────────────────────────────────────────────────────────

function GrowthPlaybookPdf() {
  const chapters = [
    {
      num: "Chapter 01",
      title: "Building Your Google Business Profile Foundation",
      bullets: [
        "How to set your primary category for maximum LSA eligibility",
        "Service area configuration that won\u2019t dilute your budget",
        "The review generation system that produces 3\u20135 new reviews per month",
        "Why a physical address beats service-area-only every time",
        "Photo strategy: real job photos vs. stock images (and why it matters)",
      ],
    },
    {
      num: "Chapter 02",
      title: "Launching and Optimizing Local Services Ads",
      bullets: [
        "Complete pre-launch checklist: license, insurance, background check",
        "Budget settings that generate enough volume to optimize",
        "The one setting to disable before you go live (direct business search)",
        "How to dispute leads correctly without hurting your ranking",
        "Response time SLAs \u2014 how fast Google expects you to answer",
      ],
    },
    {
      num: "Chapter 03",
      title: "Google Ads: The Two-Phase Strategy",
      bullets: [
        "Phase 1: Exact match keyword framework for high-intent local searches",
        "Separate campaigns for emergency vs. replacement intent",
        "Phase 2: Layering AI Max after you have conversion data",
        "Cost benchmarks: roofing ($50\u2013$150 CPC), HVAC/plumbing ($20\u2013$40 CPC)",
        "Negative keyword list to stop wasting budget on non-buyers",
      ],
    },
    {
      num: "Chapter 04",
      title: "Landing Pages That Convert Calls",
      bullets: [
        "The 5 elements every home service landing page needs above the fold",
        "Why sending paid traffic to your homepage kills conversion rate",
        "Mobile-first design: 87% of home service searches happen on phones",
        "Click-to-call placement and trust signal hierarchy",
        "Page speed requirements: under 2 seconds on mobile",
      ],
    },
    {
      num: "Chapter 05",
      title: "Call Tracking and Pipeline Visibility",
      bullets: [
        "Setting up dynamic number insertion across every channel",
        "How to connect calls to booked jobs in your CRM",
        "The monthly reporting cadence that surfaces what\u2019s actually working",
        "When to increase budget and when to cut \u2014 based on data, not gut feel",
        "Cost-per-acquired-customer calculation by channel",
      ],
    },
  ];

  return createElement(
    Document,
    { title: "Home Services Growth Playbook \u2014 Thomas Town Digital" },
    createElement(
      Page,
      { size: "A4", style: styles.page },
      createElement(PageHeader, null),
      createElement(
        View,
        { style: styles.header },
        createElement(Text, { style: styles.docTitle }, "Home Services Growth Playbook"),
        createElement(
          Text,
          { style: styles.docSubtitle },
          "The complete digital marketing playbook for roofing, HVAC, plumbing, and water damage businesses. Five chapters covering every component of a lead generation system that actually works."
        )
      ),
      createElement(View, { style: styles.tag }, createElement(Text, { style: styles.tagText }, "Free Guide")),
      ...chapters.map((ch) =>
        createElement(
          View,
          { style: styles.card, key: ch.num },
          createElement(Text, { style: styles.cardNumber }, ch.num),
          createElement(Text, { style: styles.cardTitle }, ch.title),
          ...ch.bullets.map((b) => createElement(Bullet, { key: b, text: b }))
        )
      ),
      createElement(CtaBox, null),
      createElement(PageFooter, { title: "Home Services Growth Playbook" })
    )
  );
}

function LocalSeoPdf() {
  const sections = [
    {
      title: "Google Business Profile Optimization",
      bullets: [
        "Primary category: the single choice that determines your map pack eligibility",
        "Service area vs. physical address \u2014 wrong choice kills LSA visibility",
        "Complete every GBP field: hours, phone, website, services, description",
        "Photo cadence: upload real job photos monthly (trucks, team, completed work)",
        "Review velocity target: 3\u20135 new reviews per month minimum to stay competitive",
        "Respond to every review within 24 hours \u2014 Google tracks response rate",
        "Publish at least one Google Post per week to signal active profile",
      ],
    },
    {
      title: "On-Page Local SEO",
      bullets: [
        "Title tag format: [Service] in [City] \u2014 [Company Name]",
        "H1 matches title tag; H2s target secondary services and cities",
        "Dedicated service pages for each major service type (not one generic page)",
        "NAP consistency: name, address, phone must match across every page and directory",
        "LocalBusiness and Service schema markup on every service page",
        "Core Web Vitals: Largest Contentful Paint under 2.5s on mobile",
      ],
    },
    {
      title: "Citations and Local Link Building",
      bullets: [
        "Priority directories: Google, Yelp, BBB, HomeAdvisor, Angi, Houzz, Nextdoor",
        "Industry citations: trade association directories, supplier/manufacturer locators",
        "NAP audit: find and fix mismatches using BrightLocal or similar tool",
        "Local links: chamber of commerce, city business directory, local press coverage",
        "Sponsorships and community involvement generate real local backlinks",
      ],
    },
    {
      title: "Review Generation System",
      bullets: [
        "Step 1: Ask in person immediately after job completion while satisfaction is highest",
        "Step 2: Text follow-up within 2 hours with a direct one-click GBP review link",
        "Step 3: Email follow-up 24 hours later if no review yet",
        "Negative review response framework: acknowledge, apologize, offer to resolve",
        "Never incentivize reviews \u2014 violates Google policy and can result in removal",
        "Respond to all reviews to signal engagement to Google",
      ],
    },
  ];

  return createElement(
    Document,
    { title: "Ultimate Local SEO Cheat Sheet 2025 \u2014 Thomas Town Digital" },
    createElement(
      Page,
      { size: "A4", style: styles.page },
      createElement(PageHeader, null),
      createElement(
        View,
        { style: styles.header },
        createElement(Text, { style: styles.docTitle }, "Ultimate Local SEO Cheat Sheet 2025"),
        createElement(
          Text,
          { style: styles.docSubtitle },
          "Every local SEO lever that matters for home service businesses. GBP optimization, citations, reviews, and on-page strategy in one actionable reference."
        )
      ),
      createElement(View, { style: styles.tag }, createElement(Text, { style: styles.tagText }, "Free Cheat Sheet")),
      ...sections.map((s) =>
        createElement(
          View,
          { key: s.title },
          createElement(Text, { style: styles.sectionHeading }, s.title),
          ...s.bullets.map((b) => createElement(Bullet, { key: b, text: b }))
        )
      ),
      createElement(CtaBox, null),
      createElement(PageFooter, { title: "Local SEO Cheat Sheet 2025" })
    )
  );
}

function LsaGuidePdf() {
  const steps = [
    {
      num: "Step 01",
      title: "Pre-Launch Requirements",
      bullets: [
        "Google Business Profile: physical address (not service area), correct primary category, accurate service areas",
        "Review threshold: minimum 15\u201320 reviews with activity in the last 90 days",
        "Business license: submit verification documents for your state and trade",
        "Insurance: current general liability certificate uploaded to LSA account",
        "Background check: completed for all owner and operator profiles",
        "Disable \u201cdirect business search\u201d before going live to avoid paying for branded searches",
      ],
    },
    {
      num: "Step 02",
      title: "Account Configuration",
      bullets: [
        "Configure services to match only what you want calls for \u2014 not everything you offer",
        "Set budget to support 5\u201310 leads per week minimum for optimization signal",
        "Geographic targeting: LSA uses your GBP service areas \u2014 make them precise",
        "Business hours: include emergency availability if you offer it \u2014 affects peak visibility",
        "Verify all license and insurance documents are current and uploaded",
      ],
    },
    {
      num: "Step 03",
      title: "Ranking Factors",
      bullets: [
        "Proximity: distance from searcher to your listed address",
        "Review quality and velocity: recent, detailed reviews outperform old, sparse ones",
        "Response time: Google tracks time-to-respond; slow responses reduce placement",
        "Dispute rate: excessive disputes signal low quality and suppress visibility",
        "GBP completeness and activity: active profiles rank above stagnant ones",
        "Business hours match: being available during high-search-volume periods improves placement",
      ],
    },
    {
      num: "Step 04",
      title: "Lead Management and Disputes",
      bullets: [
        "Respond to every lead within 15 minutes during business hours",
        "Mark calls as \u201cbooked\u201d or \u201cnot booked\u201d in the LSA dashboard consistently",
        "Disputable leads: wrong geography, wrong service type, spam/hang-up calls",
        "Do NOT dispute leads because the customer went with another company or price",
        "Excessive disputes hurt ranking \u2014 dispute only clear violations",
        "Connect call tracking (CallRail / WhatConverts) to attribute LSA leads to booked jobs",
      ],
    },
    {
      num: "Step 05",
      title: "Ongoing Optimization",
      bullets: [
        "Monthly GBP update: new photos, fresh post, check categories and service areas",
        "Review generation: maintain 3\u20135 new reviews per month to stay competitive",
        "Budget review: increase when lead volume is consistent and quality is strong",
        "Run LSA alongside Google Ads \u2014 they complement, not replace, each other",
        "Check dispute credits monthly: Google doesn\u2019t automatically credit disputable leads",
      ],
    },
  ];

  return createElement(
    Document,
    { title: "Complete Guide to Dominating Google Local Service Ads \u2014 Thomas Town Digital" },
    createElement(
      Page,
      { size: "A4", style: styles.page },
      createElement(PageHeader, null),
      createElement(
        View,
        { style: styles.header },
        createElement(Text, { style: styles.docTitle }, "Complete Guide to Dominating Google Local Service Ads"),
        createElement(
          Text,
          { style: styles.docSubtitle },
          "Setup, rankings, lead management, and scaling \u2014 everything you need to run LSA campaigns that generate consistent, qualified home service leads."
        )
      ),
      createElement(View, { style: styles.tag }, createElement(Text, { style: styles.tagText }, "Free Guide")),
      ...steps.map((step) =>
        createElement(
          View,
          { style: styles.card, key: step.num },
          createElement(Text, { style: styles.cardNumber }, step.num),
          createElement(Text, { style: styles.cardTitle }, step.title),
          ...step.bullets.map((b) => createElement(Bullet, { key: b, text: b }))
        )
      ),
      createElement(CtaBox, null),
      createElement(PageFooter, { title: "Google LSA Guide" })
    )
  );
}

function LeadManagementPdf() {
  const templateSets = [
    {
      title: "New Lead Follow-Up Sequence",
      templates: [
        {
          type: "TEXT \u2014 Immediate (within 5 min)",
          content:
            "Hi [Name]! This is [Your Name] from [Company]. I saw your request for [service] \u2014 happy to help. When works best for a quick call to walk through what you need? We can usually get out within [timeframe].",
        },
        {
          type: "EMAIL \u2014 Same-day follow-up",
          content:
            "Subject: Your [service] request \u2014 next steps\n\nHi [Name],\n\nThanks for reaching out to [Company]. Based on what you shared, here\u2019s what we\u2019d recommend:\n\n[Brief service description]\n\nOur typical timeline for this type of job is [X]. I\u2019d love to schedule a quick call or come take a look. What does your schedule look like this week?\n\n[Your Name]\n[Company] \u2014 [Phone]",
        },
        {
          type: "TEXT \u2014 24-hour follow-up",
          content:
            "Hi [Name], following up on your [service] request. We still have availability this week if you\u2019d like to get on the schedule. Reply here or call us at [phone] \u2014 happy to answer any questions.",
        },
      ],
    },
    {
      title: "Post-Job Review Request",
      templates: [
        {
          type: "IN-PERSON SCRIPT",
          content:
            "[At job completion] \u201c[Name], really glad we could take care of this for you. If you\u2019re happy with the work, would you mind leaving us a quick Google review? It makes a huge difference for our business. I can text you a direct link right now so it only takes a minute.\u201d",
        },
        {
          type: "TEXT \u2014 Within 2 hours",
          content:
            "Hi [Name]! Thanks for choosing [Company] today. If you have 60 seconds, a Google review would mean a lot to us: [direct review link]. No pressure at all \u2014 hope everything is working perfectly!",
        },
        {
          type: "EMAIL \u2014 24-hour follow-up",
          content:
            "Subject: How did we do?\n\nHi [Name],\n\nIt was great working with you yesterday. We\u2019d really appreciate it if you\u2019d share your experience \u2014 it helps other homeowners find us and takes less than a minute:\n\n[Google Review Link]\n\nIf anything isn\u2019t right with the work, please reply here and we\u2019ll make it right.\n\nThanks, [Your Name]",
        },
      ],
    },
    {
      title: "Quote / Estimate Follow-Up",
      templates: [
        {
          type: "EMAIL \u2014 Same-day quote delivery",
          content:
            "Subject: Your [service] estimate from [Company]\n\nHi [Name],\n\nAttached is the estimate we discussed. Here\u2019s a quick summary:\n\nScope: [Brief description]\nEstimate: $[Amount]\nTimeline: [Timeframe]\n\nTo move forward, just reply to this email or call us at [phone]. We have availability [timeframe] if you\u2019d like to get on the schedule.\n\n[Your Name]",
        },
        {
          type: "TEXT \u2014 3-day follow-up",
          content:
            "Hi [Name], just checking in on the estimate we sent over for your [service]. We still have openings this [week/month] if you\u2019d like to move forward. Any questions? Happy to jump on a quick call.",
        },
        {
          type: "EMAIL \u2014 Price objection response",
          content:
            "Subject: Re: [service] estimate\n\nHi [Name],\n\nI understand \u2014 it\u2019s a real investment. Here\u2019s what our price reflects: [2-3 specific value points: warranty, materials, licensed crew, etc.].\n\nWe also offer [financing / payment options if applicable].\n\nWould it help to jump on a 10-minute call so I can walk you through exactly what we\u2019re doing and why?\n\n[Your Name]",
        },
      ],
    },
    {
      title: "Re-Engagement: Past Customers",
      templates: [
        {
          type: "EMAIL \u2014 Seasonal reminder",
          content:
            "Subject: [Season] [service] reminder \u2014 [Company]\n\nHi [Name],\n\nJust a quick heads up \u2014 [spring/fall] is the best time to [service description] before [seasonal issue]. We\u2019re booking out [timeframe] right now.\n\nWant me to check your availability? Just reply or call [phone].\n\n[Your Name]",
        },
        {
          type: "TEXT \u2014 Referral ask (post 5-star review)",
          content:
            "Hi [Name]! Thanks so much for the kind words on Google \u2014 that means a lot. If you know anyone else who needs [service], we\u2019d love to help them too. Feel free to pass along our number: [phone].",
        },
      ],
    },
  ];

  return createElement(
    Document,
    { title: "Complete Lead Management System \u2014 Thomas Town Digital" },
    createElement(
      Page,
      { size: "A4", style: styles.page },
      createElement(PageHeader, null),
      createElement(
        View,
        { style: styles.header },
        createElement(Text, { style: styles.docTitle }, "Complete Lead Management System"),
        createElement(
          Text,
          { style: styles.docSubtitle },
          "Pre-written email and text templates for every stage of the customer journey. Copy them, add your name and number, and start using today."
        )
      ),
      createElement(View, { style: styles.tag }, createElement(Text, { style: styles.tagText }, "Free Templates")),

      ...templateSets.flatMap((set) => [
        createElement(Text, { style: styles.sectionHeading, key: `h-${set.title}` }, set.title),
        ...set.templates.map((t, i) =>
          createElement(
            View,
            { style: styles.card, key: `${set.title}-${i}` },
            createElement(Text, { style: styles.subHeading }, t.type),
            createElement(Text, { style: { ...styles.body, marginBottom: 0, color: "#444", fontFamily: "Courier", fontSize: 10, lineHeight: 1.6 } }, t.content)
          )
        ),
      ]),

      createElement(CtaBox, null),
      createElement(PageFooter, { title: "Lead Management System" })
    )
  );
}

function GoogleAdsAiMaxGuidePdf() {
  const sections = [
    {
      num: "Section 01",
      title: "Phase 1 — Exact Match Foundation (Weeks 1–6)",
      bullets: [
        "Start with exact match keywords only — no broad match, no AI features",
        "Target three intent types: service + location, emergency, and transactional",
        "Example roofing keywords: [roofing contractor near me], [roof replacement cost], [storm damage roof repair], [emergency roof leak repair]",
        "Example HVAC keywords: [AC repair near me], [furnace installation cost], [emergency heating repair], [HVAC tune-up service]",
        "Example plumbing keywords: [emergency plumber near me], [water heater installation], [drain repair service], [burst pipe repair]",
        "Example electrical keywords: [electrician near me], [panel upgrade cost], [emergency electrician], [outlet repair service]",
        "Set up call tracking (CallRail or WhatConverts) with dynamic number insertion on every landing page",
        "Tag every conversion: which keyword triggered the call, did it become a booked job, service type, and revenue",
        "Structure campaigns by intent: separate campaigns for emergency vs. replacement vs. maintenance",
        "Run Phase 1 for 4\u20136 weeks — you need enough conversion volume for AI to learn from",
      ],
    },
    {
      num: "Section 02",
      title: "Phase 2 — AI Max at Half Budget (Week 6+)",
      bullets: [
        "Launch a secondary AI Max campaign at 50% of your Phase 1 budget",
        "Keep exact match campaigns running alongside AI Max — don\u2019t replace them",
        "AI Max uses your conversion data to find adjacent search terms real buyers use",
        "It discovers phrasing variations that correlate with high-quality leads",
        "Optimizes bids based on buyer behavioral patterns from Phase 1",
        "Expands into searches with similar profiles to your best-converting keywords",
        "Monitor for 2\u20134 weeks before adjusting budget allocation",
        "Scale AI Max budget only when cost per acquired customer stays flat or decreases",
        "Red flags to watch: rising CPC without proportional conversion increase, lead quality drop, CPL above your threshold",
      ],
    },
    {
      num: "Section 03",
      title: "Budget Benchmarks by Trade",
      bullets: [
        "Roofing: $50\u2013$150 CPC, recommend $3,000\u2013$5,000/month starting budget",
        "HVAC: $20\u2013$40 CPC, recommend $2,000\u2013$4,000/month starting budget",
        "Plumbing: $20\u2013$40 CPC, recommend $2,000\u2013$3,500/month starting budget",
        "Electrical: $15\u2013$35 CPC, recommend $1,500\u2013$3,000/month starting budget",
        "Water Damage Restoration: $30\u2013$80 CPC, recommend $2,500\u2013$5,000/month",
        "Phase 1 budget: 100% on exact match for 4\u20136 weeks",
        "Phase 2 budget: split 65% exact match / 35% AI Max, then adjust based on performance",
        "Calculate true cost per acquired customer: total ad spend \u00F7 booked jobs (not leads)",
      ],
    },
    {
      num: "Section 04",
      title: "Campaign Setup Checklist",
      bullets: [
        "Google Ads account: one campaign per intent type (emergency, replacement, maintenance)",
        "Ad groups: tightly themed, 5\u201310 exact match keywords per group",
        "Conversion actions: phone calls (60s+), form submissions, and booked jobs as separate conversions",
        "Call tracking: dynamic number insertion on all landing pages and ads",
        "Landing pages: mobile-first, click-to-call above fold, trust signals, sub-2s load time",
        "Negative keyword list loaded before launch: DIY, jobs, salary, free, how to, YouTube, reviews",
        "Ad extensions: call, location, sitelink, callout, structured snippet",
        "Bid strategy: start with manual CPC or maximize conversions with target CPA after 15+ conversions",
      ],
    },
    {
      num: "Section 05",
      title: "Timeline and Milestones",
      bullets: [
        "Week 1\u20132: Campaigns calibrate \u2014 costs will be higher than average, this is normal",
        "Week 3\u20134: Consistent call volume, identify top-performing keywords and pause underperformers",
        "Week 5\u20136: Enough conversion data (15\u201330 conversions) to launch Phase 2",
        "Week 7\u20138: AI Max learning period \u2014 monitor but don\u2019t change settings",
        "Week 9\u201310: Evaluate AI Max performance vs. exact match, adjust budget allocation",
        "Month 3+: Ongoing optimization \u2014 add new keyword variations, refine negative list, scale winners",
        "Monthly reporting cadence: review cost per lead, cost per booked job, and ROAS by campaign",
      ],
    },
  ];

  return createElement(
    Document,
    { title: "The Two-Phase Google Ads Strategy for Contractors \u2014 Thomas Town Digital" },
    createElement(
      Page,
      { size: "A4", style: styles.page },
      createElement(PageHeader, null),
      createElement(
        View,
        { style: styles.header },
        createElement(Text, { style: styles.docTitle }, "The Two-Phase Google Ads Strategy for Contractors"),
        createElement(
          Text,
          { style: styles.docSubtitle },
          "How to run Google Ads for home service businesses. Start with exact match keywords to build clean conversion data, then layer in AI Max to scale what\u2019s already converting. Includes keyword lists, budget benchmarks, and a complete setup checklist."
        )
      ),
      createElement(View, { style: styles.tag }, createElement(Text, { style: styles.tagText }, "Free Guide")),
      ...sections.map((s) =>
        createElement(
          View,
          { style: styles.card, key: s.num },
          createElement(Text, { style: styles.cardNumber }, s.num),
          createElement(Text, { style: styles.cardTitle }, s.title),
          ...s.bullets.map((b) => createElement(Bullet, { key: b, text: b }))
        )
      ),
      createElement(CtaBox, null),
      createElement(PageFooter, { title: "Two-Phase Google Ads Strategy" })
    )
  );
}

// ─── LinkedIn Carousel ───────────────────────────────────────────────────────

const SLIDE_SIZE = { width: 1080, height: 1080 };

const cs = StyleSheet.create({
  slide: {
    width: 1080,
    height: 1080,
    paddingHorizontal: 80,
    paddingVertical: 80,
    justifyContent: "center",
    fontFamily: "Helvetica",
  },
  slideDark: {
    backgroundColor: "#0a0a0a",
  },
  slideWhite: {
    backgroundColor: "#ffffff",
  },
  slideGreen: {
    backgroundColor: "#2D8A45",
  },
  topTag: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: GREEN,
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 40,
  },
  topTagWhite: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 40,
  },
  bigTitle: {
    fontSize: 72,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.1,
    marginBottom: 32,
  },
  medTitle: {
    fontSize: 54,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.15,
    marginBottom: 28,
  },
  smTitle: {
    fontSize: 40,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.2,
    marginBottom: 24,
  },
  bodyLarge: {
    fontSize: 28,
    lineHeight: 1.6,
    marginBottom: 20,
  },
  bodyMed: {
    fontSize: 24,
    lineHeight: 1.6,
    marginBottom: 14,
  },
  slideBulletRow: {
    flexDirection: "row",
    marginBottom: 18,
    paddingLeft: 4,
  },
  slideBulletArrow: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    marginRight: 16,
    lineHeight: 1.5,
    width: 28,
  },
  slideBulletText: {
    fontSize: 26,
    lineHeight: 1.5,
    flex: 1,
  },
  slideFooter: {
    position: "absolute",
    bottom: 50,
    left: 80,
    right: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerBrand: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
  },
  slideNumber: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
  },
  greenBar: {
    width: 60,
    height: 6,
    backgroundColor: GREEN,
    borderRadius: 3,
    marginBottom: 32,
  },
  greenBarWhite: {
    width: 60,
    height: 6,
    backgroundColor: "#ffffff",
    borderRadius: 3,
    marginBottom: 32,
  },
  benchmarkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  benchmarkLabel: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
  },
  benchmarkValue: {
    fontSize: 28,
  },
  keywordBox: {
    backgroundColor: "rgba(45,138,69,0.1)",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 12,
  },
  keywordBoxDark: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 12,
  },
  keywordText: {
    fontSize: 24,
    fontFamily: "Courier",
  },
});

function SlideBullet({ text, color = GREEN, textColor = "#444" }: { text: string; color?: string; textColor?: string }) {
  return createElement(
    View,
    { style: cs.slideBulletRow },
    createElement(Text, { style: { ...cs.slideBulletArrow, color } }, "\u2192"),
    createElement(Text, { style: { ...cs.slideBulletText, color: textColor } }, text)
  );
}

function SlideFooter({ num, total = 8, light = false }: { num: number; total?: number; light?: boolean }) {
  const color = light ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.25)";
  const brandColor = light ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)";
  return createElement(
    View,
    { style: cs.slideFooter },
    createElement(Text, { style: { ...cs.footerBrand, color: brandColor } }, "THOMAS TOWN DIGITAL"),
    createElement(Text, { style: { ...cs.slideNumber, color } }, `${num} / ${total}`)
  );
}

function AiMaxCarouselPdf() {
  return createElement(
    Document,
    { title: "The Two-Phase Google Ads Strategy — Thomas Town Digital" },

    // Slide 1 — Title
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideDark } },
      createElement(View, { style: cs.greenBar }),
      createElement(
        Text,
        { style: { ...cs.bigTitle, color: "#ffffff" } },
        "THE TWO-PHASE\nGOOGLE ADS\nSTRATEGY"
      ),
      createElement(
        Text,
        { style: { ...cs.bodyLarge, color: "rgba(255,255,255,0.5)" } },
        "Why AI Max doesn\u2019t work\nwithout this step first."
      ),
      createElement(SlideFooter, { num: 1, light: true })
    ),

    // Slide 2 — The Problem
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideWhite } },
      createElement(Text, { style: { ...cs.topTag } }, "THE PROBLEM"),
      createElement(
        Text,
        { style: { ...cs.medTitle, color: BLACK } },
        "Most contractors turn on AI\nfrom day one."
      ),
      createElement(
        Text,
        { style: { ...cs.bodyLarge, color: MUTED, marginBottom: 36 } },
        "Here\u2019s what happens:"
      ),
      createElement(SlideBullet, { text: "Google\u2019s AI has zero conversion data" }),
      createElement(SlideBullet, { text: "It optimizes for clicks, not calls" }),
      createElement(SlideBullet, { text: "Budget burns on non-buyers" }),
      createElement(SlideBullet, { text: "You blame Google Ads" }),
      createElement(
        Text,
        { style: { ...cs.bodyMed, color: GREEN, fontFamily: "Helvetica-Bold", marginTop: 32 } },
        "The issue isn\u2019t AI. It\u2019s the order of operations."
      ),
      createElement(SlideFooter, { num: 2 })
    ),

    // Slide 3 — Phase 1
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideGreen } },
      createElement(Text, { style: { ...cs.topTagWhite } }, "PHASE 1 \u2014 WEEKS 1\u20136"),
      createElement(
        Text,
        { style: { ...cs.medTitle, color: "#ffffff" } },
        "Exact Match\nKeywords Only"
      ),
      createElement(
        Text,
        { style: { ...cs.bodyLarge, color: "rgba(255,255,255,0.75)", marginBottom: 36 } },
        "Target only high-intent searchers:"
      ),
      createElement(View, { style: cs.keywordBoxDark },
        createElement(Text, { style: { ...cs.keywordText, color: "#ffffff" } }, "[roofing contractor near me]")
      ),
      createElement(View, { style: cs.keywordBoxDark },
        createElement(Text, { style: { ...cs.keywordText, color: "#ffffff" } }, "[emergency plumber + city]")
      ),
      createElement(View, { style: cs.keywordBoxDark },
        createElement(Text, { style: { ...cs.keywordText, color: "#ffffff" } }, "[AC repair service]")
      ),
      createElement(View, { style: cs.keywordBoxDark },
        createElement(Text, { style: { ...cs.keywordText, color: "#ffffff" } }, "[roof replacement cost]")
      ),
      createElement(
        Text,
        { style: { ...cs.bodyMed, color: "rgba(255,255,255,0.7)", marginTop: 28 } },
        "Every click = a real buyer.\nEvery conversion = data for Phase 2."
      ),
      createElement(SlideFooter, { num: 3, light: true })
    ),

    // Slide 4 — What to Track
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideDark } },
      createElement(Text, { style: { ...cs.topTagWhite } }, "DURING PHASE 1"),
      createElement(
        Text,
        { style: { ...cs.medTitle, color: "#ffffff" } },
        "Tag Everything."
      ),
      createElement(View, { style: { marginTop: 16 } },
        createElement(SlideBullet, { text: "Which keyword triggered the call", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
        createElement(SlideBullet, { text: "Did it become a booked job", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
        createElement(SlideBullet, { text: "What was the service type", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
        createElement(SlideBullet, { text: "What was the revenue", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
      ),
      createElement(
        Text,
        { style: { ...cs.bodyLarge, color: "rgba(255,255,255,0.45)", marginTop: 40 } },
        "This is the data that makes Phase 2 work.\nWithout it, AI Max is just guessing."
      ),
      createElement(SlideFooter, { num: 4, light: true })
    ),

    // Slide 5 — Phase 2
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideGreen } },
      createElement(Text, { style: { ...cs.topTagWhite } }, "PHASE 2 \u2014 WEEK 6+"),
      createElement(
        Text,
        { style: { ...cs.medTitle, color: "#ffffff" } },
        "Launch AI Max\nat 50% Budget"
      ),
      createElement(
        Text,
        { style: { ...cs.bodyLarge, color: "rgba(255,255,255,0.8)", marginBottom: 24 } },
        "Keep exact match campaigns running."
      ),
      createElement(SlideBullet, { text: "AI Max uses YOUR data to find similar buyers", color: "#ffffff", textColor: "rgba(255,255,255,0.75)" }),
      createElement(SlideBullet, { text: "Discovers search patterns you\u2019d never target manually", color: "#ffffff", textColor: "rgba(255,255,255,0.75)" }),
      createElement(SlideBullet, { text: "Optimizes bids based on your best conversions", color: "#ffffff", textColor: "rgba(255,255,255,0.75)" }),
      createElement(
        Text,
        { style: { ...cs.bodyMed, color: "rgba(255,255,255,0.6)", marginTop: 32 } },
        "Now the AI has something to learn from."
      ),
      createElement(SlideFooter, { num: 5, light: true })
    ),

    // Slide 6 — Benchmarks
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideWhite } },
      createElement(Text, { style: { ...cs.topTag } }, "BENCHMARKS"),
      createElement(
        Text,
        { style: { ...cs.smTitle, color: BLACK, marginBottom: 40 } },
        "Cost Per Click by Trade"
      ),
      ...[
        { trade: "Roofing", cpc: "$50 \u2013 $150" },
        { trade: "HVAC", cpc: "$20 \u2013 $40" },
        { trade: "Plumbing", cpc: "$20 \u2013 $40" },
        { trade: "Electrical", cpc: "$15 \u2013 $35" },
        { trade: "Water Damage", cpc: "$30 \u2013 $80" },
      ].map((b, i, arr) =>
        createElement(
          View,
          { style: { ...cs.benchmarkRow, borderBottomColor: i < arr.length - 1 ? BORDER : "transparent" }, key: b.trade },
          createElement(Text, { style: { ...cs.benchmarkLabel, color: BLACK } }, b.trade),
          createElement(Text, { style: { ...cs.benchmarkValue, color: GREEN, fontFamily: "Helvetica-Bold" } }, b.cpc)
        )
      ),
      createElement(
        Text,
        { style: { ...cs.bodyMed, color: MUTED, marginTop: 36 } },
        "At these prices, you can\u2019t afford to let AI guess.\nBuild the data first."
      ),
      createElement(SlideFooter, { num: 6 })
    ),

    // Slide 7 — Timeline
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideDark } },
      createElement(Text, { style: { ...cs.topTagWhite } }, "TIMELINE"),
      createElement(
        Text,
        { style: { ...cs.smTitle, color: "#ffffff", marginBottom: 40 } },
        "6\u201310 Weeks to a Fully\nOptimized System"
      ),
      ...[
        { week: "Week 1\u20132", desc: "Campaigns calibrate (costs higher)" },
        { week: "Week 3\u20134", desc: "Consistent call volume, best keywords emerge" },
        { week: "Week 5\u20136", desc: "Enough data to launch Phase 2" },
        { week: "Week 7\u201310", desc: "AI Max expands on proven conversions" },
      ].map((t) =>
        createElement(
          View,
          { style: { flexDirection: "row", marginBottom: 24, alignItems: "flex-start" }, key: t.week },
          createElement(
            View,
            { style: { backgroundColor: GREEN, borderRadius: 6, paddingHorizontal: 14, paddingVertical: 8, marginRight: 20, width: 130 } },
            createElement(Text, { style: { fontSize: 20, fontFamily: "Helvetica-Bold", color: "#ffffff", textAlign: "center" } }, t.week)
          ),
          createElement(
            Text,
            { style: { fontSize: 26, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, flex: 1, paddingTop: 4 } },
            t.desc
          )
        )
      ),
      createElement(SlideFooter, { num: 7, light: true })
    ),

    // Slide 8 — CTA
    createElement(
      Page,
      { size: SLIDE_SIZE, style: { ...cs.slide, ...cs.slideDark } },
      createElement(View, { style: cs.greenBar }),
      createElement(
        Text,
        { style: { ...cs.medTitle, color: "#ffffff" } },
        "Want the\nFull Guide?"
      ),
      createElement(
        Text,
        { style: { ...cs.bodyLarge, color: "rgba(255,255,255,0.55)", marginBottom: 36 } },
        "Free PDF \u2014 no email required:"
      ),
      createElement(SlideBullet, { text: "Copy-paste keyword lists by trade", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
      createElement(SlideBullet, { text: "Campaign setup checklist", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
      createElement(SlideBullet, { text: "Budget benchmarks and calculator", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
      createElement(SlideBullet, { text: "AI Max configuration walkthrough", color: GREEN, textColor: "rgba(255,255,255,0.7)" }),
      createElement(
        Text,
        { style: { fontSize: 24, color: GREEN, fontFamily: "Helvetica-Bold", marginTop: 40 } },
        "thomastowndigital.com/free-content/google-ads-ai-max-guide"
      ),
      createElement(SlideFooter, { num: 8, light: true })
    )
  );
}

// ─── Route handler ────────────────────────────────────────────────────────────

const DOCS: Record<string, { doc: () => React.ReactElement; filename: string }> = {
  "home-services-growth-playbook": {
    doc: GrowthPlaybookPdf,
    filename: "TTD-Home-Services-Growth-Playbook.pdf",
  },
  "local-seo-cheat-sheet": {
    doc: LocalSeoPdf,
    filename: "TTD-Local-SEO-Cheat-Sheet-2025.pdf",
  },
  "google-lsa-guide": {
    doc: LsaGuidePdf,
    filename: "TTD-Google-LSA-Guide.pdf",
  },
  "lead-management-system": {
    doc: LeadManagementPdf,
    filename: "TTD-Lead-Management-System.pdf",
  },
  "google-ads-ai-max-guide": {
    doc: GoogleAdsAiMaxGuidePdf,
    filename: "TTD-Two-Phase-Google-Ads-Strategy.pdf",
  },
  "google-ads-ai-max-carousel": {
    doc: AiMaxCarouselPdf,
    filename: "TTD-Two-Phase-Google-Ads-Carousel.pdf",
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug || !DOCS[slug]) {
    return new NextResponse("Resource not found", { status: 404 });
  }

  const { doc, filename } = DOCS[slug];

  try {
    const buffer = await renderToBuffer(createElement(doc));
    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}
