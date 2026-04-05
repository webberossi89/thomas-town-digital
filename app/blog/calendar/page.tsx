import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Calendar — Thomastown Digital",
  description: "Upcoming blog content scheduled for March 2026. See what's coming next.",
};

const posts = [
  {
    "title": "Google Ads for Roofing Companies: The Complete Guide to Generating Quality Leads",
    "publishDate": "2026-04-07",
    "publishDateFormatted": "Tue, Apr 7",
    "status": "pending",
    "slug": "google-ads-for-roofing-companies"
  },
  {
    "title": "How Much Do Google Ads Cost for Roofing Companies? CPC, CPL & Budget Breakdown",
    "publishDate": "2026-04-09",
    "publishDateFormatted": "Thu, Apr 9",
    "status": "pending",
    "slug": "google-ads-cost-roofing-companies"
  },
  {
    "title": "Google Ads for Contractors: Straight Answers to the Questions That Actually Matter",
    "publishDate": "2026-04-16",
    "publishDateFormatted": "Thu, Apr 16",
    "status": "pending",
    "slug": "google-ads-for-contractors-faq"
  },
  {
    "title": "Contractor PPC Management: What to Expect When You Hire an Agency",
    "publishDate": "2026-04-14",
    "publishDateFormatted": "Tue, Apr 14",
    "status": "pending",
    "slug": "contractor-ppc-management"
  },
  {
    "title": "What Is a Good ROAS for Roofing Google Ads? Industry Benchmarks Explained",
    "publishDate": "2026-04-17",
    "publishDateFormatted": "Fri, Apr 17",
    "status": "pending",
    "slug": "average-roas-roofing-google-ads"
  },
  {
    "title": "SEO vs Google Ads for Contractors: Which Generates Better Leads?",
    "publishDate": "2026-04-21",
    "publishDateFormatted": "Tue, Apr 21",
    "status": "pending",
    "slug": "seo-vs-google-ads-contractors"
  },
  {
    "title": "Roofing Lead Generation: 7 Proven Strategies That Actually Work in 2025",
    "publishDate": "2026-04-24",
    "publishDateFormatted": "Fri, Apr 24",
    "status": "pending",
    "slug": "roofing-lead-generation-strategies"
  },
  {
    "title": "How Much Should Roofing Companies Spend on Marketing? A Practical Budget Guide",
    "publishDate": "2026-04-28",
    "publishDateFormatted": "Tue, Apr 28",
    "status": "pending",
    "slug": "average-marketing-budget-roofing-companies"
  }
];

const statusLabel = (s: string) => {
  if (s === "published") return { text: "Published", bg: "rgba(45,138,69,0.1)", color: "#2D8A45" };
  if (s === "pending") return { text: "Scheduled", bg: "rgba(37,99,235,0.08)", color: "#2563eb" };
  if (s === "pending_review") return { text: "In Review", bg: "rgba(245,158,11,0.1)", color: "#d97706" };
  return { text: s, bg: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.5)" };
};

export default function ContentCalendar() {
  return (
    <>
      <section style={{ paddingTop: "120px", paddingBottom: "48px", background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="container">
          <p className="section-label">Content Calendar</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#0a0a0a",
              marginBottom: "16px",
            }}
          >
            What&apos;s Coming<br />
            <span style={{ color: "#2D8A45" }}>March 2026</span>
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(0,0,0,0.5)", lineHeight: 1.7, maxWidth: "520px" }}>
            Our content roadmap for the month — new articles rolling out on a regular schedule.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "48px", paddingBottom: "100px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          {posts.map((post) => {
            const st = statusLabel(post.status);
            const isLive = post.status === "published";
            const Wrapper = isLive ? Link : "div";
            const wrapperProps = isLive ? { href: `/blog/${post.slug}` } : {};
            return (
              <Wrapper
                key={post.slug}
                {...wrapperProps}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ minWidth: "80px", textAlign: "center", paddingTop: "2px" }}>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "14px", color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                    {post.publishDateFormatted}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "16px", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.25, color: "#0a0a0a", marginBottom: "6px" }}>
                    {post.title}
                  </h3>
                  <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: st.color, background: st.bg, padding: "3px 8px", borderRadius: "100px" }}>
                    {st.text}
                  </span>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>
    </>
  );
}
