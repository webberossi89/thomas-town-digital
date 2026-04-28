import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Resources — Thomas Town Digital",
  description: "Free guides, checklists, and templates built for home service businesses. Download tools to improve your Google Ads, Local SEO, and lead generation.",
};

const resources = [
  {
    tag: "Newsletter",
    title: "The Home Services Playbook",
    desc: "Your monthly no-BS guide to marketing that actually works. Expert tips, ad breakdowns, and growth tactics — delivered straight to your inbox.",
    detail: "Monthly · Free",
    cta: "Subscribe Free",
    href: "/free-content/home-services-playbook-newsletter",
    accent: false,
  },
  {
    tag: "Guide",
    title: "Home Services Growth Playbook",
    desc: "A comprehensive guide to growing your home services business with proven digital marketing strategies. GBP, LSA, Google Ads — the full stack explained.",
    detail: "PDF · Free",
    cta: "Get the Playbook",
    href: "/free-content/home-services-growth-playbook",
    accent: true,
  },
  {
    tag: "Cheat Sheet",
    title: "Ultimate Local SEO Cheat Sheet 2025",
    desc: "Proven strategies to boost your local rankings, optimize your Google Business Profile, and get into the map pack. One page. No fluff.",
    detail: "PDF · Free",
    cta: "Download Free",
    href: "/free-content/local-seo-cheat-sheet",
    accent: false,
  },
  {
    tag: "Guide",
    title: "Complete Guide to Dominating Google Local Service Ads",
    desc: "How to set up, optimize, and manage Google Local Service Ads for maximum lead flow. Covers setup, GBP requirements, budgeting, and dispute management.",
    detail: "PDF · Free",
    cta: "Download Free",
    href: "/free-content/google-lsa-guide",
    accent: false,
  },
  {
    tag: "Guide",
    title: "The Two-Phase Google Ads Strategy for Contractors",
    desc: "Start with exact match keywords, build clean conversion data, then layer in AI Max to scale. Includes keyword lists by trade, budget benchmarks, and a step-by-step setup checklist.",
    detail: "PDF · Free",
    cta: "Download Free",
    href: "/free-content/google-ads-ai-max-guide",
    accent: false,
  },
  {
    tag: "Templates",
    title: "Complete Lead Management System",
    desc: "Pre-written email and text message templates to follow up with leads, re-engage past customers, and book more jobs without writing from scratch.",
    detail: "Doc · Free",
    cta: "Get the Templates",
    href: "/free-content/lead-management-system",
    accent: false,
  },
];

export default function FreeContentPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "72px", background: "#0a0a0a" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label" style={{ color: "#2D8A45" }}>Free Resources</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(42px, 6vw, 76px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Tools to Grow<br />
            <span style={{ color: "#2D8A45" }}>Your Pipeline</span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: "520px" }}>
            Free guides, cheat sheets, and templates built specifically for home service businesses. Read every magnet online in Notion, or download a PDF copy. No email walls.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section style={{ paddingTop: "72px", paddingBottom: "100px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {resources.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="resource-row"
                  style={{
                    background: r.accent ? "#0a0a0a" : "#fff",
                    border: r.accent ? "1px solid rgba(45,138,69,0.4)" : "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "14px",
                    padding: "32px 36px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "32px",
                    alignItems: "center",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 700,
                          fontSize: "11px",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "#2D8A45",
                          background: r.accent ? "rgba(45,138,69,0.15)" : "rgba(45,138,69,0.1)",
                          padding: "3px 10px",
                          borderRadius: "4px",
                        }}
                      >
                        {r.tag}
                      </span>
                      <span style={{ fontSize: "12px", color: r.accent ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }}>
                        {r.detail}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 800,
                        fontSize: "19px",
                        color: r.accent ? "#fff" : "#0a0a0a",
                        marginBottom: "8px",
                        lineHeight: 1.2,
                      }}
                    >
                      {r.title}
                    </h2>
                    <p style={{ fontSize: "14px", color: r.accent ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>
                      {r.desc}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <span
                      className="btn-yellow"
                      style={{ fontSize: "13px", padding: "12px 24px", whiteSpace: "nowrap", display: "inline-block" }}
                    >
                      {r.cta} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ paddingTop: "72px", paddingBottom: "96px", background: "#0a0a0a", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "520px" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(30px, 4vw, 46px)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Want a Custom Strategy?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            The free tools are a start. Book a call and we&apos;ll build a market-specific plan for your business.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      <style>{`
        .resource-row:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.08) !important;
          border-color: rgba(45,138,69,0.3) !important;
        }
        @media (max-width: 600px) {
          .resource-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
