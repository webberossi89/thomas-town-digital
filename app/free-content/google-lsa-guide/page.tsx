import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Guide to Dominating Google Local Service Ads — Free | Thomas Town Digital",
  description:
    "How to set up, optimize, and manage Google Local Service Ads for maximum lead flow. Covers GBP requirements, budgeting, rankings, and dispute management.",
};

const steps = [
  {
    num: "01",
    title: "Pre-Launch Requirements",
    desc: "Everything Google requires before your LSA account goes live — and the order it needs to happen in.",
    bullets: [
      "GBP setup: physical address, correct primary category, accurate service areas",
      "Minimum review threshold (15–20 with recent activity) before launch",
      "Business license submission and verification process",
      "Insurance documentation requirements by trade",
      "Background check completion for owner and operator profiles",
    ],
  },
  {
    num: "02",
    title: "Account Setup and Configuration",
    bullets: [
      "How to set up your LSA account correctly from day one",
      "Service configuration: matching what you want calls for, not everything you do",
      "Budget settings that generate enough weekly lead volume to optimize",
      "Geographic targeting: how LSA uses your service areas differently than Google Ads",
      "The direct business search setting — disable this before you go live",
    ],
  },
  {
    num: "03",
    title: "Ranking Factors and How to Improve Them",
    bullets: [
      "The 6 signals Google uses to rank LSA results (it's not just bids)",
      "How response time affects your placement — and what counts as a response",
      "Review velocity targets to outrank competitors in your market",
      "GBP activity signals that feed directly into LSA rankings",
      "Why your dispute rate matters and how to keep it clean",
    ],
  },
  {
    num: "04",
    title: "Lead Management and Dispute Process",
    bullets: [
      "How to respond to LSA leads correctly to protect your ranking",
      "What qualifies as a disputable lead vs. one you should pay for",
      "The dispute process step-by-step: how to flag and submit",
      "Response time SLAs — how fast is fast enough",
      "Call tracking integration so every LSA lead is attributed correctly",
    ],
  },
  {
    num: "05",
    title: "Optimization and Scaling",
    bullets: [
      "Monthly GBP maintenance routine that directly improves LSA performance",
      "How to interpret your LSA performance dashboard",
      "When to increase your budget — and what signal to look for",
      "Running LSA alongside Google Ads: how the two channels complement each other",
      "Trade-specific benchmarks: roofing, HVAC, plumbing, water damage",
    ],
  },
];

export default function GoogleLsaGuidePage() {
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
              Guide · Free
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5.5vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Complete Guide to<br />Dominating Google<br />Local Service Ads
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "580px", marginBottom: "40px" }}>
            LSA is the highest-performing paid channel for most home service businesses. This guide covers everything — setup, rankings, lead management, and scaling — so you can stop guessing and start dominating your market.
          </p>
          <a
            href="/api/resources?slug=google-lsa-guide"
            download
            className="btn-yellow"
            style={{ fontSize: "15px", padding: "16px 36px" }}
          >
            Download Free Guide →
          </a>
        </div>
      </section>

      {/* Why LSA callout */}
      <section style={{ background: "#2D8A45", padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", textAlign: "center" }} className="lsa-stats">
            {[
              { val: "#1", label: "Placement on Google — above all other ads" },
              { val: "Pay per lead", label: "Not per click — you only pay when someone calls" },
              { val: "Google Guaranteed", label: "Verified trust badge shown to every homeowner" },
            ].map((s) => (
              <div key={s.val}>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "28px", color: "#fff", lineHeight: 1.1, marginBottom: "8px" }}>
                  {s.val}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">What&apos;s inside</p>
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
            Five Sections. Setup to Scale.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {steps.map((step) => (
              <div
                key={step.num}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "14px",
                  padding: "28px 32px",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#2D8A45",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "13px", color: "#fff" }}>{step.num}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 800,
                        fontSize: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                        color: "#0a0a0a",
                        marginBottom: "4px",
                      }}
                    >
                      {step.title}
                    </h3>
                    {step.desc && (
                      <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.45)", marginBottom: "14px" }}>{step.desc}</p>
                    )}
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {step.bullets.map((b) => (
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

      {/* Trade callout */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">Trade-specific</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(24px, 3vw, 34px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              marginBottom: "32px",
            }}
          >
            LSA Performance by Vertical
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="trade-grid">
            {[
              {
                trade: "Roofing",
                detail: "Strong conversion in most markets. Requires 50+ reviews and consistent new activity to rank competitively. Lower CPL than traditional search where CPCs often exceed $80.",
              },
              {
                trade: "Water Damage",
                detail: "Highest-performing LSA category. Emergency intent is extreme and homeowners in crisis lean hard on the Google Guaranteed badge. Best ROI in all of home services paid advertising.",
              },
              {
                trade: "HVAC",
                detail: "Seasonal demand spikes align perfectly with the pay-per-lead model. Response speed during peak periods (summer, winter) directly impacts placement. Strong year-round with proper management.",
              },
              {
                trade: "Plumbing",
                detail: "Consistent year-round demand with high emergency intent. The Google Guaranteed trust signal carries significant weight for homeowners inviting contractors into their homes.",
              },
            ].map((t) => (
              <div
                key={t.trade}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#2D8A45",
                    marginBottom: "10px",
                  }}
                >
                  {t.trade}
                </p>
                <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.6)", lineHeight: 1.7 }}>{t.detail}</p>
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
              fontSize: "clamp(28px, 4vw, 44px)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Get the LSA Guide — Free
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            No email required. Open, read, and launch better LSA campaigns this week.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/api/resources?slug=google-lsa-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "14px", padding: "15px 32px" }}
            >
              Download Free →
            </a>
            <Link href="/contact" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .trade-grid { grid-template-columns: 1fr !important; }
          .lsa-stats { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </>
  );
}
