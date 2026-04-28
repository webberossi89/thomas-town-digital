import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ultimate Local SEO Cheat Sheet 2025 — Free Download",
  description:
    "Proven strategies to dominate local search, optimize your Google Business Profile, and rank in the map pack. One page. No fluff. Free.",
};

const sections = [
  {
    title: "Google Business Profile Optimization",
    items: [
      "Primary category selection: the one choice that determines your map pack eligibility",
      "Service area vs. physical address — and why the wrong choice kills your LSA visibility",
      "The exact GBP sections Google weights most heavily for local rankings",
      "Photo strategy: what types of images improve engagement and trust signals",
      "Review velocity targets by trade vertical",
    ],
  },
  {
    title: "On-Page Local SEO Essentials",
    items: [
      "Title tag and H1 structure for local service pages",
      "How to structure city/service pages without creating duplicate content",
      "NAP consistency: why mismatched info across directories tanks your rankings",
      "Schema markup for local service businesses (ServiceSchema, LocalBusiness)",
      "Core Web Vitals targets that affect mobile search rankings",
    ],
  },
  {
    title: "Local Link Building and Citations",
    items: [
      "The 10 directories that actually move the needle for home service contractors",
      "Industry-specific citation sources: BBB, HomeAdvisor, Angi (for citations, not leads)",
      "How to spot and fix NAP inconsistencies across your existing citations",
      "Local link acquisition: chamber of commerce, supplier pages, local press",
    ],
  },
  {
    title: "Review Generation System",
    items: [
      "The ask: in-person vs. text follow-up vs. email (and what converts best)",
      "Direct review link setup so customers click once and land on the review form",
      "Responding to negative reviews: the exact framework that turns them into trust signals",
      "Review velocity benchmarks to beat competitors in the map pack",
    ],
  },
];

export default function LocalSeoCheatSheetPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px", background: "#0a0a0a" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <Link href="/free-content" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Free Resources
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>→</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2D8A45",
                background: "rgba(45,138,69,0.15)",
                padding: "3px 10px",
                borderRadius: "4px",
              }}
            >
              Cheat Sheet · Free
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(38px, 5.5vw, 68px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Ultimate Local SEO<br />Cheat Sheet 2025
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "580px", marginBottom: "40px" }}>
            Every local SEO lever that matters for home service businesses — condensed into one actionable reference. GBP optimization, citations, reviews, on-page strategy, and more.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <a
              href="https://www.notion.so/Ultimate-Local-SEO-Cheat-Sheet-2025-3505e52bc8e781a299e6d9b56c307106"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "15px", padding: "16px 36px" }}
            >
              Read in Notion →
            </a>
            <a
              href="/api/resources?slug=local-seo-cheat-sheet"
              download
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              or download as PDF
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#2D8A45", padding: "36px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "center" }} className="stats-bar">
            {[
              { stat: "46%", label: "Of Google searches are local" },
              { stat: "76%", label: "Of local searches result in a call or visit within 24 hours" },
              { stat: "Top 3", label: "Map pack results get 75%+ of local clicks" },
            ].map((s) => (
              <div key={s.stat}>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "36px", color: "#fff", lineHeight: 1, marginBottom: "6px" }}>
                  {s.stat}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">What&apos;s covered</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px, 3.5vw, 38px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#0a0a0a",
              marginBottom: "44px",
            }}
          >
            Every Local SEO Lever That Matters
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="sections-grid">
            {sections.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "14px",
                  padding: "28px",
                  borderTop: "3px solid #2D8A45",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#0a0a0a",
                    marginBottom: "16px",
                  }}
                >
                  {s.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
                      <span style={{ color: "#2D8A45", fontWeight: 700, flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section style={{ paddingTop: "72px", paddingBottom: "96px", background: "#0a0a0a", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(30px, 4vw, 46px)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Get the Cheat Sheet — Free
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            No email required. Open it, save it, use it as your local SEO reference.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.notion.so/Ultimate-Local-SEO-Cheat-Sheet-2025-3505e52bc8e781a299e6d9b56c307106"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "14px", padding: "15px 32px" }}
            >
              Read in Notion →
            </a>
            <Link href="/contact" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              Book a Strategy Call
            </Link>
          </div>
          <div style={{ marginTop: "20px" }}>
            <a
              href="/api/resources?slug=local-seo-cheat-sheet"
              download
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              or download as PDF
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .sections-grid { grid-template-columns: 1fr !important; }
          .stats-bar { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </>
  );
}
