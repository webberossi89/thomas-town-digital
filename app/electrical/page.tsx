import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Marketing Agency — Thomas Town Digital",
  description: "SEO, Google Ads, LSA, websites, and AI automations for electrical contractors. We help electricians generate more residential and commercial service leads.",
};

const results = [
  { stat: "3.2×", label: "Average return on ad spend" },
  { stat: "47%", label: "Average reduction in cost per lead" },
  { stat: "Top 3", label: "Map pack placement for electricians we manage" },
];

const services = [
  {
    name: "SEO & Map Pack",
    desc: "Electrical searches are dominated by the Google Map Pack. We optimize your GBP, build citations, and develop a review strategy that puts you in the top 3 — so homeowners and property managers call you first.",
  },
  {
    name: "PPC — Google Ads & LSA",
    desc: "Electrical repairs and panel upgrades are high-ticket, high-intent searches. We build Google Search and Local Services Ad campaigns that put your number at the top when homeowners need an electrician now.",
  },
  {
    name: "Websites",
    desc: "Fast, mobile-first websites and landing pages built for electrical contractors. Clear CTAs, click-to-call above the fold, and service pages optimized for every job type you want more of.",
  },
  {
    name: "AI Automations",
    desc: "Respond to every electrical lead in minutes automatically. We build workflows that follow up with unconverted leads, request reviews after every job, and re-engage past customers for panel upgrades and rewires.",
  },
];

const faqs = [
  {
    q: "How much should an electrical company spend on Google Ads?",
    a: "Most electrical contractors see strong results starting at $2,000–$4,000/month in ad spend. Larger metro markets may need $5,000–$7,000/month. We'll give you a market-specific number on the strategy call.",
  },
  {
    q: "Do you work with both residential and commercial electricians?",
    a: "Primarily residential service and repair — that's where paid search and local SEO drive the most volume. We can run commercial campaigns but the targeting and strategy look different. Let's talk on the call.",
  },
  {
    q: "What electrical services generate the best leads from Google Ads?",
    a: "Panel upgrades, EV charger installation, whole-home rewires, and emergency electrical repairs all convert well. We build separate campaigns for each intent so you're not mixing high-ticket and low-ticket leads.",
  },
  {
    q: "How long until we see leads from Google Ads?",
    a: "Typically within 30 days of launch. We build the campaign, get it live, and optimize based on actual call data from the start.",
  },
  {
    q: "What makes you different from a general marketing agency?",
    a: "We only work with home service businesses. We understand the difference between a $200 outlet repair and a $12,000 panel upgrade — and we build campaigns to attract the latter.",
  },
];

export default function ElectricalPage() {
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
          <p className="section-label" style={{ color: "#2D8A45" }}>Electrical Marketing</p>
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
            MORE ELECTRICAL<br />LEADS. LESS WASTE.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
            SEO, PPC, websites, and AI automations built specifically for electrical contractors. Stop sharing leads with HomeAdvisor — own your market.
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
                { label: "Shared lead platforms", bad: true, detail: "Sold to 3–5 electricians simultaneously" },
                { label: "No visibility into ROI", bad: true, detail: "You don't know which spend drives jobs" },
                { label: "Inconsistent call volume", bad: true, detail: "Busy one week, quiet the next" },
                { label: "Exclusive inbound leads", bad: false, detail: "Homeowners call you directly from search" },
                { label: "Revenue-tied reporting", bad: false, detail: "Every dollar tracked to booked jobs" },
                { label: "Consistent year-round pipeline", bad: false, detail: "High-ticket campaigns + evergreen SEO" },
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
            HOW WE GROW<br />ELECTRICAL BUSINESSES
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
                Who it&apos;s for
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
                Built for Electrical Contractors Who Want to Scale
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                We work best with electrical businesses that are ready to invest in marketing that compounds — not just buy leads month to month.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Residential electricians ready to stop relying on referrals",
                "Electrical contractors running Google Ads with inconsistent results",
                "Businesses that want more panel upgrade and EV charger leads",
                "Any electrical company spending on marketing without predictable ROI",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "#2D8A45", fontWeight: 900, fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item}</div>
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
            Electrical Marketing Questions
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
            Ready to Fill Your Electrical Pipeline?
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
