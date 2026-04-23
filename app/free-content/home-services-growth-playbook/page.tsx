import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Services Growth Playbook — Free Download",
  description:
    "A comprehensive guide to growing your home services business with proven digital marketing strategies. GBP, LSA, Google Ads, and call tracking — the full stack.",
};

const chapters = [
  {
    num: "01",
    title: "Building Your Google Business Profile Foundation",
    bullets: [
      "How to set your primary category for maximum LSA eligibility",
      "Service area configuration that won't dilute your budget",
      "The review generation system that produces 3–5 new reviews per month",
      "Why a physical address beats service-area-only every time",
    ],
  },
  {
    num: "02",
    title: "Launching and Optimizing Local Services Ads",
    bullets: [
      "Complete pre-launch checklist: license, insurance, background check",
      "Budget settings that generate enough volume to optimize",
      "The one setting to disable before you go live (direct business search)",
      "How to dispute leads correctly without hurting your ranking",
    ],
  },
  {
    num: "03",
    title: "Google Ads: The Two-Phase Strategy",
    bullets: [
      "Phase 1: Exact match keyword framework for high-intent local searches",
      "How to structure separate campaigns for emergency vs. replacement intent",
      "Phase 2: Layering AI Max after you have conversion data",
      "Cost benchmarks by trade: roofing, HVAC, plumbing, water damage",
    ],
  },
  {
    num: "04",
    title: "Landing Pages That Convert Calls",
    bullets: [
      "The 5 elements every home service landing page needs above the fold",
      "Why your homepage kills paid traffic conversion rates",
      "Mobile-first design: 87% of home service searches happen on phones",
      "Click-to-call placement and trust signal hierarchy",
    ],
  },
  {
    num: "05",
    title: "Call Tracking and Pipeline Visibility",
    bullets: [
      "Setting up dynamic number insertion across every channel",
      "How to connect calls to booked jobs in your CRM",
      "The monthly reporting cadence that surfaces what's actually working",
      "When to increase budget and when to cut — based on data, not gut feel",
    ],
  },
];

export default function HomeServicesGrowthPlaybookPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px", background: "#0a0a0a" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <Link
              href="/free-content"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
            >
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
              Guide · Free
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
            Home Services<br />Growth Playbook
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "580px", marginBottom: "40px" }}>
            The complete digital marketing playbook for roofing, HVAC, plumbing, and water damage businesses. Five chapters covering every component of a lead generation system that actually works.
          </p>
          <a
            href="/api/resources?slug=home-services-growth-playbook"
            download
            className="btn-yellow"
            style={{ fontSize: "15px", padding: "16px 36px" }}
          >
            Download Free PDF →
          </a>
        </div>
      </section>

      {/* What's inside */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">What&apos;s inside</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#0a0a0a",
              marginBottom: "48px",
            }}
          >
            Five Chapters. One Complete System.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {chapters.map((ch) => (
              <div
                key={ch.num}
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "14px",
                  padding: "28px 32px",
                  background: "#f7f7f7",
                }}
              >
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 900,
                      fontSize: "13px",
                      color: "#2D8A45",
                      letterSpacing: "0.08em",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  >
                    {ch.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 800,
                        fontSize: "17px",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        color: "#0a0a0a",
                        marginBottom: "14px",
                      }}
                    >
                      {ch.title}
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {ch.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
                          <span style={{ color: "#2D8A45", fontWeight: 700, flexShrink: 0 }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="who-grid">
            <div>
              <p className="section-label">Who it&apos;s for</p>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(26px, 3vw, 36px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: "#0a0a0a",
                  marginBottom: "20px",
                }}
              >
                Built for Home Service Owners Ready to Scale
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                Whether you&apos;re just starting to invest in digital marketing or you&apos;ve been running campaigns with inconsistent results, this playbook gives you the framework to build a system that generates predictable, high-quality leads.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Roofing companies ready to move past shared lead gen",
                "HVAC businesses that want to own their peak season",
                "Plumbers tired of inconsistent call volume",
                "Water damage contractors scaling beyond referrals",
                "Any home service business spending on ads without consistent ROI",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    padding: "14px 18px",
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "10px",
                  }}
                >
                  <span style={{ color: "#2D8A45", fontWeight: 800, fontSize: "14px", flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: "13px", color: "#0a0a0a", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
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
            Get the Playbook — Free
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            No email required. No gated PDF. Just open it and start reading.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/api/resources?slug=home-services-growth-playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "14px", padding: "15px 32px" }}
            >
              Download Free Playbook →
            </a>
            <Link href="/contact" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .who-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}
