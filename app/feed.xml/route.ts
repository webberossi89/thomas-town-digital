import { NextResponse } from "next/server";

const SITE_URL = "https://www.thomastowndigital.com";
const SITE_TITLE = "Thomas Town Digital | Home Services Marketing";
const SITE_DESCRIPTION =
  "We help home service businesses grow with paid search, paid social, and local SEO.";

const posts = [
  {
    category: "Marketing",
    title: "Google Guaranteed vs LSA Ads: What's the Difference in 2026?",
    summary: "Google Guaranteed and LSA ads aren't the same thing. Learn how each works, what they cost, and which one actually drives quality leads for contractors.",
    date: "March 26, 2026",
    dateISO: "2026-03-26",
    readTime: "10 min read",
    slug: "google-guaranteed-vs-lsa-ads",
  },
  {
    category: "Services",
    title: "HVAC Marketing Agency Services: What We Do for Heating & Cooling Companies",
    summary: "Thomas Town Digital helps HVAC companies generate better leads, fill their schedule, and cut wasted ad spend. See what a real HVAC marketing partner does.",
    date: "March 26, 2026",
    dateISO: "2026-03-26",
    readTime: "9 min read",
    slug: "hvac-marketing-agency-services",
  },
  {
    category: "SEO",
    title: "Frequently Asked Questions About SEO for Contractors in 2026",
    summary: "Get straight answers on SEO for contractors — how it works, what it costs, and what actually drives leads. Book a free audit with Thomas Town Digital.",
    date: "March 19, 2026",
    dateISO: "2026-03-19",
    readTime: "9 min read",
    slug: "seo-for-contractors-faq",
  },
  {
    category: "Marketing",
    title: "How Does Home Service Lead Generation Actually Work in 2026?",
    summary: "Learn how lead generation for contractors really works in 2026 — from search intent to booked jobs. Straight talk from a home service lead generation agency.",
    date: "March 19, 2026",
    dateISO: "2026-03-19",
    readTime: "10 min read",
    slug: "home-service-lead-generation-agency",
  },
  {
    category: "Google Ads",
    title: "How Much Do Google Ads Cost for Roofers in 2026? (CPC, CPL & Budget Breakdown)",
    summary: "What does it actually cost to run Google Ads for roofers? Real CPC, CPL, and budget data — plus how to tell if your spend is working. Get the full breakdown.",
    date: "March 12, 2026",
    dateISO: "2026-03-12",
    readTime: "10 min read",
    slug: "google-ads-for-roofers-cost",
  },
  {
    category: "Services",
    title: "Google Ads Management for Contractors: How to Turn Ad Spend Into Booked Jobs",
    summary: "Stop wasting budget on clicks that don't convert. Thomastown Digital builds Google Ads systems for contractors that drive real calls and booked jobs. Free audit.",
    date: "March 5, 2026",
    dateISO: "2026-03-05",
    readTime: "10 min read",
    slug: "google-ads-management-for-contractors",
  },
  {
    category: "Marketing",
    title: "What Is a Home Services Marketing Agency? (And What Do They Actually Do in 2026)",
    summary: "A home services marketing agency helps contractors get more qualified leads through SEO, Google Ads, and LSAs. Learn what they actually do and if you need one.",
    date: "March 5, 2026",
    dateISO: "2026-03-05",
    readTime: "8 min read",
    slug: "home-services-marketing-agency",
  },
  {
    category: "Services",
    title: "Local Services Ads Management That Fills Your Calendar, Not Just Your Dashboard",
    summary: "Poor LSA management wastes budget on bad leads. See how Thomas Town Digital tightens targeting, improves lead quality, and builds a predictable pipeline.",
    date: "March 12, 2026",
    dateISO: "2026-03-12",
    readTime: "8 min read",
    slug: "local-services-ads-management-home-services",
  },
  {
    category: "Marketing",
    title: "How to Choose a Home Service Lead Generation Agency in 2026",
    summary: "Most agencies talk a good game but deliver junk leads. Here's how to pick a home service lead generation agency that actually understands your business.",
    date: "March 25, 2026",
    dateISO: "2026-03-25",
    readTime: "8 min read",
    slug: "choose-home-service-lead-generation-agency",
  },
  {
    category: "Services",
    title: "Charlotte Google Ads Agency for Contractors: Why Location Matters in 2026",
    summary: "Most Charlotte Google Ads agencies waste contractor budgets on broad targeting. Here's why working with a local partner who understands home service search intent matters.",
    date: "March 25, 2026",
    dateISO: "2026-03-25",
    readTime: "8 min read",
    slug: "charlotte-google-ads-agency-contractors",
  },
  {
    category: "LSA",
    title: "What Are Google Local Services Ads and How Do They Work in 2026?",
    summary: "Local Services Ads put your home service business at the very top of Google with a green checkmark. Learn how LSAs work, what they cost, and if they're worth it.",
    date: "March 25, 2026",
    dateISO: "2026-03-25",
    readTime: "9 min read",
    slug: "what-are-local-services-ads",
  },
  {
    category: "Google Ads",
    title: "How to Use Google Ads for Contractors: The Two-Phase AI Max Strategy That Actually Works",
    summary: "Most contractors running Google Ads are leaving money on the table — not because of budget, but because they skip the foundational step before layering in AI. Here's the exact two-phase approach we use.",
    date: "February 25, 2026",
    dateISO: "2026-02-25",
    readTime: "7 min read",
    slug: "google-ads-contractors-two-phase-ai-max",
  },
  {
    category: "LSA",
    title: "Local Services Ads for Home Service Businesses: What's Actually Working in 2026",
    summary: "LSA has moved from a secondary option to the primary paid channel for most home service businesses. A complete breakdown of how it works, what's changed, and how to set it up for consistent qualified leads.",
    date: "February 18, 2026",
    dateISO: "2026-02-18",
    readTime: "9 min read",
    slug: "local-services-ads-home-service-2026",
  },
  {
    category: "Google Ads",
    title: "The 2026 Home Services Marketing Stack: What's Working Right Now",
    summary: "The contractors winning in 2026 aren't chasing trends — they're building their stack in the right order. Local SEO, then LSA, then paid search. Here's the full breakdown.",
    date: "February 18, 2026",
    dateISO: "2026-02-18",
    readTime: "8 min read",
    slug: "2026-home-services-marketing-stack",
  },
  {
    category: "LSA",
    title: "How to Optimize Your Google Business Profile for Local Services Ads Success",
    summary: "Your GBP isn't just about map pack rankings anymore — it's your LSA application. One mistake kills your entire campaign before it starts. Here's how to get it right.",
    date: "February 6, 2026",
    dateISO: "2026-02-06",
    readTime: "8 min read",
    slug: "optimize-google-business-profile-lsa",
  },
  {
    category: "Google Ads",
    title: "Google Ads for Roofing Companies: Complete Budget Guide and ROI Analysis",
    summary: "How much should a roofing company actually spend on Google Ads? Real benchmarks, cost per lead breakdowns by service type, and ROI projections for competitive metro markets.",
    date: "January 2, 2026",
    dateISO: "2026-01-02",
    readTime: "10 min read",
    slug: "google-ads-roofing-budget-guide",
  },
  {
    category: "LSA",
    title: "Google Local Services Ads for Contractors: Why Playing the Long Game Wins More Leads",
    summary: "LSA isn't a sprint — it's a credit score. The contractors who dominate aren't outspending competitors, they're out-trusting them. Here's what that looks like in practice.",
    date: "December 12, 2025",
    dateISO: "2025-12-12",
    readTime: "8 min read",
    slug: "google-local-services-ads-contractors-long-game",
  },
  {
    category: "Google Ads",
    title: "Stop Chasing Google's Recommendations: Why Their \"Best Practices\" Don't Always Work",
    summary: "That \"Ad Strength: Poor\" notification doesn't mean your campaign is failing. Google's algorithm optimizes for Google's revenue. Here's how to evaluate recommendations like a strategist.",
    date: "June 6, 2025",
    dateISO: "2025-06-06",
    readTime: "7 min read",
    slug: "stop-chasing-google-recommendations",
  },
  {
    category: "SMB Marketing",
    title: "Top 5 Marketing Mistakes Contractors Make — And How to Fix Them Fast",
    summary: "Most contractor marketing failures come down to the same five mistakes. If your marketing spend isn't producing consistent results, you're probably making at least two of them.",
    date: "May 23, 2025",
    dateISO: "2025-05-23",
    readTime: "6 min read",
    slug: "top-5-marketing-mistakes-contractors",
  },
  {
    category: "Google Ads",
    title: "How Successful Contractors Are Using Google Ads to Book More Jobs",
    summary: "The top-performing contractors in 2025 aren't relying on word-of-mouth alone. They've built Google Ads systems that fill their schedule with high-quality jobs. Here's how.",
    date: "April 29, 2025",
    dateISO: "2025-04-29",
    readTime: "7 min read",
    slug: "contractors-google-ads-book-more-jobs",
  },
  {
    category: "LSA",
    title: "The Complete Marketing Stack for Home Service Businesses in 2026",
    summary: "If you're in HVAC, plumbing, roofing, or water damage, your marketing stack needs to work together. GBP, LSA, Google Ads, and call tracking — in the right order. Here's the full playbook.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    readTime: "9 min read",
    slug: "complete-marketing-stack-home-service",
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );

  const items = sortedPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.summary)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.dateISO).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(sortedPosts[0].dateISO).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
