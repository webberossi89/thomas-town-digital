import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Lead Management System for Home Services — Free",
  description:
    "Pre-written email and text templates to follow up with leads, re-engage past customers, and book more jobs. Ready to copy and use today.",
};

const templateSets = [
  {
    title: "New Lead Follow-Up Sequence",
    icon: "📞",
    templates: [
      { label: "Immediate text reply (within 5 min of inquiry)", type: "Text" },
      { label: "Same-day email confirmation with quote details", type: "Email" },
      { label: "24-hour follow-up if no response", type: "Text" },
      { label: "72-hour final follow-up with urgency hook", type: "Email" },
    ],
  },
  {
    title: "Post-Job Review Request",
    icon: "⭐",
    templates: [
      { label: "In-person ask script (what to say before you leave the job)", type: "Script" },
      { label: "Text follow-up with direct GBP review link", type: "Text" },
      { label: "Email follow-up with review instructions", type: "Email" },
      { label: "Negative experience recovery message", type: "Text" },
    ],
  },
  {
    title: "Past Customer Re-Engagement",
    icon: "🔄",
    templates: [
      { label: "Seasonal maintenance reminder (HVAC / roofing inspection)", type: "Email" },
      { label: "Annual anniversary follow-up", type: "Text" },
      { label: "Storm event outreach for past roofing / restoration customers", type: "Text" },
      { label: "Referral ask — for customers who gave 5-star reviews", type: "Email" },
    ],
  },
  {
    title: "Estimate / Quote Follow-Up",
    icon: "📋",
    templates: [
      { label: "Same-day quote delivery email with next steps", type: "Email" },
      { label: "3-day follow-up for pending estimates", type: "Text" },
      { label: "Price objection response — value reinforcement", type: "Email" },
      { label: "Quote expiry reminder — create urgency to close", type: "Text" },
    ],
  },
];

export default function LeadManagementSystemPage() {
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
              Templates · Free
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
            Complete Lead<br />Management System
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "580px", marginBottom: "16px" }}>
            Pre-written email and text templates for every stage of the customer journey — from first inquiry to repeat business and referrals.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.35)", marginBottom: "40px" }}>
            Copy them. Customize your business name and number. Start using today.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <a
              href="https://www.notion.so/Complete-Lead-Management-System-3505e52bc8e7819c9378f99073c49978"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "15px", padding: "16px 36px" }}
            >
              Read in Notion →
            </a>
            <a
              href="/api/resources?slug=lead-management-system"
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

      {/* The problem */}
      <section style={{ paddingTop: "72px", paddingBottom: "72px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="problem-grid">
            <div>
              <p className="section-label">The problem</p>
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
                Most Leads Go Cold Because Nobody Follows Up Fast Enough
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8, marginBottom: "16px" }}>
                A homeowner searches for an HVAC repair at 11am on a Tuesday. They contact three companies. The one that responds within five minutes wins the job the majority of the time. The other two never hear back.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                The problem isn&apos;t that contractors don&apos;t want to follow up. It&apos;s that they don&apos;t have a system — so it only happens when someone remembers to do it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { stat: "78%", label: "Of customers buy from the first business that responds" },
                { stat: "5 min", label: "Response time that maximizes your lead conversion rate" },
                { stat: "5×", label: "More likely to qualify a lead if you respond within the hour vs. 24 hours" },
              ].map((s) => (
                <div
                  key={s.stat}
                  style={{
                    background: "#f7f7f7",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    borderLeft: "3px solid #2D8A45",
                  }}
                >
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "32px", color: "#0a0a0a", lineHeight: 1 }}>
                    {s.stat}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)", marginTop: "4px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Template sets */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">What&apos;s included</p>
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
            16 Ready-to-Use Templates
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="template-grid">
            {templateSets.map((set) => (
              <div
                key={set.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "14px",
                  padding: "28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "24px" }}>{set.icon}</span>
                  <h3
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 800,
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "#0a0a0a",
                      lineHeight: 1.2,
                    }}
                  >
                    {set.title}
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {set.templates.map((t) => (
                    <div key={t.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 700,
                          fontSize: "10px",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "#2D8A45",
                          background: "rgba(45,138,69,0.08)",
                          padding: "2px 6px",
                          borderRadius: "3px",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        {t.type}
                      </span>
                      <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.6)", lineHeight: 1.5 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
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
            Get the Templates — Free
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Copy them. Drop in your business name and number. Start using them today.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.notion.so/Complete-Lead-Management-System-3505e52bc8e7819c9378f99073c49978"
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
              href="/api/resources?slug=lead-management-system"
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
          .problem-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .template-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
