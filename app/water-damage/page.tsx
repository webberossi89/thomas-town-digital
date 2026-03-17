import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Damage & Restoration Marketing Agency — Thomas Town Digital",
  description: "SEO, Google Ads, LSA, websites, and AI automations for water damage and restoration companies. We help restoration contractors dominate emergency search and generate more insurance-backed jobs.",
};

const results = [
  { stat: "#1", label: "Highest-performing LSA category in home services" },
  { stat: "3.2×", label: "Average return on ad spend" },
  { stat: "< 5 min", label: "Lead response time with our AI automation" },
];

const services = [
  {
    name: "SEO & Map Pack",
    desc: "Emergency restoration searches spike after weather events — and homeowners click the first result they see. We get you into the top 3 of the Google Map Pack so you're there when disaster strikes, 24/7.",
  },
  {
    name: "PPC — Google Ads & LSA",
    desc: "Water damage and restoration is the highest-converting LSA category in home services. The Google Guaranteed badge carries enormous weight when a homeowner has a flooded basement at midnight. We run both LSA and Google Ads to maximize your coverage.",
  },
  {
    name: "Websites",
    desc: "Your website needs to convert panic-mode homeowners in seconds. We build fast, trust-heavy restoration landing pages with emergency CTAs, before/after social proof, and click-to-call front and center.",
  },
  {
    name: "AI Automations",
    desc: "Speed wins restoration jobs. Our AI responds to every inbound lead in under 5 minutes — day or night — with follow-up sequences that keep you top-of-mind while the homeowner is still deciding. Faster response = more jobs.",
  },
];

const faqs = [
  {
    q: "How much should a restoration company spend on Google Ads?",
    a: "Water damage is competitive because the ROI is exceptional. Most restoration companies see strong results at $3,000–$6,000/month. In high-competition markets, $7,000–$12,000/month captures dominant share. We'll assess your market on the call.",
  },
  {
    q: "Is LSA the best channel for water damage restoration?",
    a: "LSA is the single highest-performing paid channel for restoration. Emergency intent plus the Google Guaranteed trust badge plus pay-per-lead pricing = exceptional ROI. We set it up, manage the verification, and handle every dispute.",
  },
  {
    q: "Do you work with mold remediation and fire damage companies too?",
    a: "Yes. Water damage, mold remediation, fire damage, and full restoration companies all benefit from the same channel strategy. Emergency intent drives all of them.",
  },
  {
    q: "How do you handle leads that come in after hours?",
    a: "That's exactly what our AI automation is built for. Leads that come in at 2am get an immediate text response that books them into your schedule or escalates to your on-call team — so you never lose a job to slow response time.",
  },
  {
    q: "Can you help during storm season spikes?",
    a: "Yes. We can rapidly scale budgets and activate geo-targeted campaigns after weather events to capture the surge in demand while it's happening.",
  },
];

export default function WaterDamagePage() {
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
          <p className="section-label" style={{ color: "#2D8A45" }}>Water Damage Marketing</p>
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
            MORE RESTORATION<br />JOBS. FASTER.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
            Water damage is the highest-ROI paid channel in home services. We help restoration companies dominate emergency search, respond faster, and close more insurance-backed jobs.
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
                Slow Response Loses Restoration Jobs
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                When a homeowner has a flooded basement at midnight, they call the first restoration company they find. If you&apos;re not ranking and not responding instantly, that job goes to a competitor.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
                We build systems that put you at the top of emergency search and respond to every lead in minutes — so you capture jobs before anyone else even picks up the phone.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Invisible in emergency search", bad: true, detail: "Competitors take the top Map Pack spots" },
                { label: "Slow lead response", bad: true, detail: "Homeowners call the next company in minutes" },
                { label: "No after-hours coverage", bad: true, detail: "Lose jobs while your team is off the clock" },
                { label: "Dominant Map Pack presence", bad: false, detail: "Top 3 placement for emergency searches" },
                { label: "Under-5-minute AI response", bad: false, detail: "Every lead contacted before they move on" },
                { label: "24/7 lead coverage", bad: false, detail: "Automated follow-up day, night, and weekends" },
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
            HOW WE GROW<br />RESTORATION BUSINESSES
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

      {/* Who it's for */}
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
                Built for Restoration Contractors
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                We work exclusively with home service businesses. We understand emergency intent, insurance-backed jobs, and what it takes to win in the restoration market.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Water damage and restoration companies ready to scale beyond referrals",
                "Restoration contractors running LSA or Google Ads with inconsistent results",
                "Mold remediation and fire damage companies that want more inbound jobs",
                "Any restoration business that loses jobs to slow response time",
              ].map((item) => (
                <div key={item} style={{ borderLeft: "3px solid #2D8A45", paddingLeft: "16px" }}>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{item}</div>
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
            Restoration Marketing Questions
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
            Ready to Dominate Emergency Search?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a strategy call. We&apos;ll assess your market, review your current setup, and show you exactly what it would take to own the top of emergency restoration search.
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
