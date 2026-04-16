import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Thomas Town Digital",
  description: "Marketing insights, strategy guides, and growth playbooks built specifically for home service businesses — roofing, HVAC, plumbing, and more.",
};

const posts = [
  {
    category: "Google Ads",
    title: "Google Ads for Contractors: Straight Answers to the Questions That Actually Matter",
    summary: "Get straight answers on Google Ads for contractors: costs, setup, lead quality, and ROI. No fluff. See how it actually works for home service businesses.",
    date: "April 16, 2026",
    dateISO: "2026-04-16",
    readTime: "9 min read",
    slug: "google-ads-for-contractors-faq",
  },
  {
    category: "Services",
    title: "Contractor PPC Management: What to Expect When You Hire an Agency",
    summary: "Hiring an agency for contractor PPC management? Here's what good looks like, what to watch for, and how to know if your spend is working. Get the breakdown.",
    date: "April 14, 2026",
    dateISO: "2026-04-14",
    readTime: "8 min read",
    slug: "contractor-ppc-management",
  },
  {
    category: "Google Ads",
    title: "How Much Do Google Ads Cost for Roofing Companies? CPC, CPL & Budget Breakdown",
    summary: "What do Google Ads actually cost for roofers? Get real CPC, CPL, and monthly budget benchmarks, plus how to judge if your spend is working. Find out.",
    date: "April 9, 2026",
    dateISO: "2026-04-09",
    readTime: "12 min read",
    slug: "google-ads-cost-roofing-companies",
  },
  {
    category: "Google Ads",
    title: "Google Ads for Roofing Companies: Complete Budget Guide and ROI Analysis",
    summary:
      "How much should a roofing company actually spend on Google Ads? Real benchmarks, cost per lead breakdowns by service type, and ROI projections for competitive metro markets.",
    date: "January 2, 2026",
    dateISO: "2026-01-02",
    readTime: "10 min read",
    slug: "google-ads-roofing-budget-guide",
  },
  {
    category: "Google Ads",
    title: "Google Ads for Roofing Companies: How to Generate High Quality Leads",
    summary: "Learn how Google Ads for roofing companies actually works — campaign structure, budgets, bidding, and how to turn clicks into booked jobs. Get the breakdown.",
    date: "April 4, 2026",
    dateISO: "2026-04-05",
    readTime: "14 min read",
    slug: "google-ads-for-roofing-companies",
  },
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
    category: "Services",
    title: "Charlotte Google Ads Agency for Contractors: Why Location Matters in 2026",
    summary: "Most Charlotte Google Ads agencies waste contractor budgets on broad targeting. Here's why working with a local partner who understands home service search intent matters.",
    date: "March 25, 2026",
    dateISO: "2026-03-25",
    readTime: "8 min read",
    slug: "charlotte-google-ads-agency-contractors",
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
    category: "LSA",
    title: "What Are Google Local Services Ads and How Do They Work in 2026?",
    summary: "Local Services Ads put your home service business at the very top of Google with a green checkmark. Learn how LSAs work, what they cost, and if they're worth it.",
    date: "March 25, 2026",
    dateISO: "2026-03-25",
    readTime: "9 min read",
    slug: "what-are-local-services-ads",
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
    title: "Local Services Ads Management That Fills Your Calendar, Not Just Your Dashboard",
    summary: "Poor LSA management wastes budget on bad leads. See how Thomas Town Digital tightens targeting, improves lead quality, and builds a predictable pipeline.",
    date: "March 12, 2026",
    dateISO: "2026-03-12",
    readTime: "8 min read",
    slug: "local-services-ads-management-home-services",
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
    category: "Google Ads",
    title: "How to Use Google Ads for Contractors: The Two-Phase AI Max Strategy That Actually Works",
    summary:
      "Most contractors running Google Ads are leaving money on the table — not because of budget, but because they skip the foundational step before layering in AI. Here's the exact two-phase approach we use.",
    date: "February 25, 2026",
    dateISO: "2026-02-25",
    readTime: "7 min read",
    slug: "google-ads-contractors-two-phase-ai-max",
  },
  {
    category: "LSA",
    title: "Local Services Ads for Home Service Businesses: What's Actually Working in 2026",
    summary:
      "LSA has moved from a secondary option to the primary paid channel for most home service businesses. A complete breakdown of how it works, what's changed, and how to set it up for consistent qualified leads.",
    date: "February 18, 2026",
    dateISO: "2026-02-18",
    readTime: "9 min read",
    slug: "local-services-ads-home-service-2026",
  },
  {
    category: "Google Ads",
    title: "The 2026 Home Services Marketing Stack: What's Working Right Now",
    summary:
      "The contractors winning in 2026 aren't chasing trends — they're building their stack in the right order. Local SEO, then LSA, then paid search. Here's the full breakdown.",
    date: "February 18, 2026",
    dateISO: "2026-02-18",
    readTime: "8 min read",
    slug: "2026-home-services-marketing-stack",
  },
  {
    category: "LSA",
    title: "How to Optimize Your Google Business Profile for Local Services Ads Success",
    summary:
      "Your GBP isn't just about map pack rankings anymore — it's your LSA application. One mistake kills your entire campaign before it starts. Here's how to get it right.",
    date: "February 6, 2026",
    dateISO: "2026-02-06",
    readTime: "8 min read",
    slug: "optimize-google-business-profile-lsa",
  },
  {
    category: "LSA",
    title: "The Complete Marketing Stack for Home Service Businesses in 2026",
    summary:
      "If you're in HVAC, plumbing, roofing, or water damage, your marketing stack needs to work together. GBP, LSA, Google Ads, and call tracking — in the right order. Here's the full playbook.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    readTime: "9 min read",
    slug: "complete-marketing-stack-home-service",
  },
  {
    category: "LSA",
    title: "Google Local Services Ads for Contractors: Why Playing the Long Game Wins More Leads",
    summary:
      "LSA isn't a sprint — it's a credit score. The contractors who dominate aren't outspending competitors, they're out-trusting them. Here's what that looks like in practice.",
    date: "December 12, 2025",
    dateISO: "2025-12-12",
    readTime: "8 min read",
    slug: "google-local-services-ads-contractors-long-game",
  },
  {
    category: "Google Ads",
    title: "Stop Chasing Google's Recommendations: Why Their \"Best Practices\" Don't Always Work",
    summary:
      "That \"Ad Strength: Poor\" notification doesn't mean your campaign is failing. Google's algorithm optimizes for Google's revenue. Here's how to evaluate recommendations like a strategist.",
    date: "June 6, 2025",
    dateISO: "2025-06-06",
    readTime: "7 min read",
    slug: "stop-chasing-google-recommendations",
  },
  {
    category: "SMB Marketing",
    title: "Top 5 Marketing Mistakes Contractors Make — And How to Fix Them Fast",
    summary:
      "Most contractor marketing failures come down to the same five mistakes. If your marketing spend isn't producing consistent results, you're probably making at least two of them.",
    date: "May 23, 2025",
    dateISO: "2025-05-23",
    readTime: "6 min read",
    slug: "top-5-marketing-mistakes-contractors",
  },
  {
    category: "Google Ads",
    title: "How Successful Contractors Are Using Google Ads to Book More Jobs",
    summary:
      "The top-performing contractors in 2025 aren't relying on word-of-mouth alone. They've built Google Ads systems that fill their schedule with high-quality jobs. Here's how.",
    date: "April 29, 2025",
    dateISO: "2025-04-29",
    readTime: "7 min read",
    slug: "contractors-google-ads-book-more-jobs",
  }
];

const categoryColor = (cat: string) => {
  if (cat === "Google Ads") return { bg: "rgba(45,138,69,0.1)", text: "#2D8A45" };
  if (cat === "LSA") return { bg: "rgba(0,90,200,0.08)", text: "#0057c8" };
  return { bg: "rgba(0,0,0,0.07)", text: "rgba(0,0,0,0.5)" };
};

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "64px", background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="container">
          <p className="section-label">Blog</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 80px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#0a0a0a",
              marginBottom: "20px",
            }}
          >
            Marketing for<br />
            <span style={{ color: "#2D8A45" }}>Home Services</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(0,0,0,0.5)",
              lineHeight: 1.75,
              maxWidth: "540px",
            }}
          >
            Google Ads, Local SEO, and LSA strategy for roofing, HVAC, and plumbing companies — written by practitioners, not theorists.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ paddingTop: "56px", paddingBottom: "100px", background: "#f7f7f7" }}>
        <div className="container">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "24px" }}
            className="featured-card-link"
          >
            <div
              className="featured-card"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "16px",
                padding: "48px",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "18px" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: categoryColor(featured.category).text,
                    background: categoryColor(featured.category).bg,
                    padding: "4px 10px",
                    borderRadius: "100px",
                  }}
                >
                  {featured.category}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "#0a0a0a",
                    padding: "4px 10px",
                    borderRadius: "100px",
                  }}
                >
                  Featured
                </span>
                <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)" }}>
                  {featured.date} · {featured.readTime}
                </p>
              </div>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(22px, 2.8vw, 34px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: "#0a0a0a",
                  marginBottom: "14px",
                }}
              >
                {featured.title}
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)", lineHeight: 1.75, maxWidth: "680px", marginBottom: "24px" }}>
                {featured.summary}
              </p>
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#2D8A45",
                }}
              >
                Read article →
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
            className="blog-grid"
          >
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
                className="post-card-link"
              >
                <div
                  className="post-card"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "14px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    height: "100%",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: categoryColor(post.category).text,
                        background: categoryColor(post.category).bg,
                        padding: "3px 8px",
                        borderRadius: "100px",
                      }}
                    >
                      {post.category}
                    </span>
                    <p style={{ fontSize: "11px", color: "rgba(0,0,0,0.4)" }}>{post.readTime}</p>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 800,
                      fontSize: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      color: "#0a0a0a",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)", lineHeight: 1.7, flexGrow: 1 }}>
                    {post.summary}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.04em", textTransform: "uppercase", color: "#2D8A45" }}>
                      Read article →
                    </span>
                    <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.35)" }}>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px 0", background: "#0a0a0a", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "520px" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "16px",
            }}
          >
            Ready to Apply This?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "32px" }}>
            Book a strategy call. We&apos;ll show you exactly what it would take to build a pipeline that converts.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "14px 30px" }}>
            Get Your Phone Ringing →
          </Link>
        </div>
      </section>

      <style>{`
        .featured-card:hover {
          border-color: rgba(45,138,69,0.3) !important;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07) !important;
        }
        .post-card:hover {
          border-color: rgba(45,138,69,0.3) !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06) !important;
        }
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
