import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Marketing Agency — Thomas Town Digital",
  description: "SEO, Google Ads, LSA, websites, and AI automations for roofing companies. We help roofers generate more replacement and repair leads without shared lead gen platforms.",
};

const results = [
  { stat: "47%", label: "Average reduction in cost per lead" },
  { stat: "3.2×", label: "Average return on ad spend" },
  { stat: "30 days", label: "Typical time to first qualified leads" },
];

const services = [
  {
    name: "SEO & Map Pack",
    desc: "The top 3 Google Maps results capture the majority of roofing calls in any market. We optimize your GBP, build citations, and run a review strategy that gets you there and keeps you there.",
  },
  {
    name: "PPC — Google Ads & LSA",
    desc: "Capture homeowners the moment they search 'roof replacement near me' or 'emergency roof repair.' Google Search Ads and Local Services Ads are the highest-ROI paid channels in roofing — we run both.",
  },
  {
    name: "Websites",
    desc: "Dedicated roofing landing pages and full-site builds that convert mobile traffic into calls. Fast-loading, clear CTAs above the fold, and built to close both repair and replacement leads.",
  },
  {
    name: "AI Automations",
    desc: "Respond to every roofing lead in minutes — not hours. We build automated follow-up sequences, review request workflows, and re-engagement campaigns that keep your pipeline full without extra staff.",
  },
];

const faqs = [
  {
    q: "How much should a roofing company spend on Google Ads?",
    a: "Most roofing companies in competitive markets see strong results with $3,000–$7,000/month in ad spend. Smaller markets or less competitive areas can start at $1,500–$2,500/month. We'll assess your market on the strategy call.",
  },
  {
    q: "Do you work with both residential and commercial roofers?",
    a: "Primarily residential — that's where paid search and local SEO drive the most volume. We can run commercial campaigns but the strategy looks different. Let's talk on the call.",
  },
  {
    q: "Can you help after a storm event?",
    a: "Yes. We can spin up storm-response campaigns quickly — targeted by hail path or damage area — to capture insurance claim leads while demand is high.",
  },
  {
    q: "How long until I see leads from Google Ads?",
    a: "Typically within 30 days. We build the campaign, get it live, and optimize based on actual call data and lead quality from the start.",
  },
  {
    q: "What makes you different from a general marketing agency?",
    a: "We only work with home service businesses. We know the difference between a $2,000 repair lead and a $15,000 replacement lead — and we build campaigns to attract the latter.",
  },
];

export default function RoofingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          background: "#0a0a0a",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label" style={{ color: "#2D8A45" }}>Roofing Marketing</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 68px)",
              lineHeight: 1.0,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            More Roofing Jobs.<br />Less Chasing Leads.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
            We help roofing companies fill their pipeline with replacement and repair leads through Google Ads, Local SEO, and targeted Meta campaigns. No shared lead gen. No Angi. Just leads that call you.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
              Book a Strategy Call →
            </Link>
            <Link href="/services" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section style={{ background: "#2D8A45", padding: "40px 0" }}>
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "center" }}
            className="results-bar"
          >
            {results.map((r) => (
              <div key={r.stat}>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 900,
                    fontSize: "42px",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {r.stat}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="pain-grid">
            <div>
              <p className="section-label">The problem</p>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                }}
              >
                Shared Leads Are Killing Your Margins
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                Platforms like Angi and HomeAdvisor sell the same lead to 3–5 companies simultaneously. You&apos;re competing on price before you even pick up the phone.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
                We build systems that make homeowners call <em>you</em> — not the other way around. Exclusive leads from search, owned by your business, with full visibility into what&apos;s driving them.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Shared lead platforms", bad: true, detail: "Sold to 3–5 roofers simultaneously" },
                { label: "No visibility into ROI", bad: true, detail: "You don't know which spend drives jobs" },
                { label: "Feast or famine pipeline", bad: true, detail: "Busy in storm season, quiet otherwise" },
                { label: "Exclusive inbound leads", bad: false, detail: "Homeowners call you directly from search" },
                { label: "Revenue-tied reporting", bad: false, detail: "Every dollar tracked to booked jobs" },
                { label: "Consistent year-round pipeline", bad: false, detail: "Seasonal campaigns + evergreen SEO" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 18px",
                    background: item.bad ? "rgba(224,82,82,0.06)" : "rgba(45,138,69,0.07)",
                    border: `1px solid ${item.bad ? "rgba(224,82,82,0.15)" : "rgba(45,138,69,0.2)"}`,
                    borderRadius: "10px",
                  }}
                >
                  <span style={{ fontSize: "16px", flexShrink: 0 }}>{item.bad ? "✕" : "✓"}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#0a0a0a" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.45)" }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container">
          <p className="section-label">What we do</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "48px",
              maxWidth: "480px",
            }}
          >
            Every Channel That Drives Roofing Leads
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
            className="services-grid"
          >
            {services.map((s) => (
              <div
                key={s.name}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "16px",
                    color: "#0a0a0a",
                    marginBottom: "10px",
                  }}
                >
                  {s.name}
                </p>
                <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study callout */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            style={{
              background: "#0a0a0a",
              borderRadius: "20px",
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="case-study-card"
          >
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D8A45", marginBottom: "16px" }}>
                Real result
              </p>
              <h3
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 3vw, 34px)",
                  textTransform: "uppercase",
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "16px",
                }}
              >
                47% Reduction in Cost Per Lead
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                Roofing company, Anaheim CA. $16K/month ad budget. We rebuilt their Google Ads campaign architecture, added LSA management, and cut their cost per qualified lead nearly in half within 90 days.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { val: "47%", label: "Lower cost per lead" },
                { val: "$16K", label: "Monthly ad budget managed" },
                { val: "90 days", label: "To reach target CPL" },
              ].map((item) => (
                <div key={item.label} style={{ borderLeft: "3px solid #2D8A45", paddingLeft: "16px" }}>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "28px", color: "#fff", lineHeight: 1 }}>{item.val}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="section-label">FAQ</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 38px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "40px",
            }}
          >
            Roofing Marketing Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "22px 0" }}>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0a0a0a", marginBottom: "8px" }}>{faq.q}</p>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: "72px", paddingBottom: "96px", background: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 48px)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "20px",
              letterSpacing: "-0.01em",
            }}
          >
            Ready to Fill Your Roofing Pipeline?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a strategy call. We&apos;ll look at your market, your current setup, and tell you exactly what it would take to cut your cost per lead in half.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .pain-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .results-bar { grid-template-columns: 1fr !important; gap: 28px !important; }
          .case-study-card { grid-template-columns: 1fr !important; padding: 36px 28px !important; }
        }
      `}</style>
    </>
  );
}
