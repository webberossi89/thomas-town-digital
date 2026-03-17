import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Marketing Agency — Thomas Town Digital",
  description: "SEO, Google Ads, LSA, websites, and AI automations for HVAC companies. We help HVAC contractors generate more repair and replacement leads year-round.",
};

const results = [
  { stat: "3.2×", label: "Average return on ad spend" },
  { stat: "47%", label: "Average reduction in cost per lead" },
  { stat: "60–90 days", label: "Typical map pack visibility improvement" },
];

const services = [
  {
    name: "SEO & Map Pack",
    desc: "The Google Map Pack drives a massive volume of HVAC calls year-round. We optimize your GBP, build local citations, and develop a review strategy that puts you in the top 3 in your market.",
  },
  {
    name: "PPC — Google Ads & LSA",
    desc: "When a homeowner's AC breaks at 8pm in July, they search immediately. We make sure your number is the first they call — with Search campaigns and LSAs built around emergency and seasonal HVAC intent.",
  },
  {
    name: "Websites",
    desc: "Fast, mobile-first landing pages for AC repair, furnace replacement, and tune-up campaigns. Each page is built to convert mobile traffic into phone calls and booked service appointments.",
  },
  {
    name: "AI Automations",
    desc: "Seasonal demand spikes mean missed calls cost real money. Our AI automation workflows respond to leads instantly, follow up with unconverted prospects, and trigger review requests after every job.",
  },
];

const faqs = [
  {
    q: "How much should an HVAC company budget for Google Ads?",
    a: "Most HVAC companies in mid-to-large markets see strong results with $3,000–$6,000/month in ad spend. Smaller markets can start at $1,500–$2,500/month. We'll assess your specific market on the strategy call.",
  },
  {
    q: "How do you handle both emergency/repair leads and replacement leads?",
    a: "We build separate campaign structures for each intent — emergency repair (high urgency, lower ticket) vs. replacement (higher ticket, 2-3 day decision window). Each gets its own landing page, bidding strategy, and tracking.",
  },
  {
    q: "Can you help us stay booked during shoulder months?",
    a: "Yes. We use tune-up and maintenance campaigns, Meta retargeting, and SEO content to drive demand during spring and fall when emergency call volume drops.",
  },
  {
    q: "Do you manage Local Services Ads (LSAs) separately from Google Ads?",
    a: "Yes. LSAs are a distinct product — we handle setup, Google Guaranteed verification, lead review, and dispute management (flagging junk leads for credit). Both are included depending on your plan.",
  },
  {
    q: "How fast will we see results from SEO?",
    a: "Map pack visibility typically improves within 60–90 days. Full organic ranking improvements take 4–6 months but compound significantly over time — and unlike paid ads, they don't stop when you stop spending.",
  },
];

export default function HvacPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px", background: "#0a0a0a" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label" style={{ color: "#2D8A45" }}>HVAC Marketing</p>
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
            Be the First Call When the AC Goes Out.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
            HVAC is one of the highest-intent verticals in home services. When a homeowner needs you, they need you now. We make sure your number is the first they find — and the one they call.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
              Book a Strategy Call →
            </Link>
            <Link href="/pricing" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section style={{ background: "#2D8A45", padding: "40px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "center" }} className="results-bar">
            {results.map((r) => (
              <div key={r.stat}>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "42px", color: "#fff", lineHeight: 1, marginBottom: "6px" }}>
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

      {/* Why HVAC needs a specialist */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="pain-grid">
            <div>
              <p className="section-label">Why it matters</p>
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
                HVAC Marketing Has Two Different Games
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                Emergency repair and system replacement require completely different marketing strategies. A homeowner searching "AC not cooling" at 9pm is ready to spend $150 right now. A homeowner researching "new HVAC system cost" is 3 days from a $12,000 decision.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
                We build separate campaign structures for each intent — so you&apos;re capturing both without wasting budget mixing them together.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { title: "Emergency / Repair", items: ["High urgency, same-day need", "Lower ticket ($150–$600 avg)", "Short decision window (<2 hours)", "Search + LSA = dominant channels"] },
                { title: "Replacement / Install", items: ["3–7 day decision window", "Higher ticket ($5K–$15K avg)", "Comparison shopping behavior", "SEO + retargeting = strong ROI"] },
              ].map((block) => (
                <div
                  key={block.title}
                  style={{
                    background: "#f7f7f7",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "14px",
                    padding: "24px",
                  }}
                >
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#2D8A45", marginBottom: "14px" }}>
                    {block.title}
                  </p>
                  {block.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "10px", marginBottom: "8px", fontSize: "14px", color: "rgba(0,0,0,0.6)" }}>
                      <span style={{ color: "#2D8A45", fontWeight: 700, flexShrink: 0 }}>→</span>
                      {item}
                    </div>
                  ))}
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
            Every Channel That Drives HVAC Calls
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="services-grid">
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
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "16px", color: "#0a0a0a", marginBottom: "10px" }}>{s.name}</p>
                <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#fff" }}>
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
            HVAC Marketing Questions
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
            Ready to Stay Booked Year-Round?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a strategy call. We&apos;ll audit your current setup and show you exactly where the lead flow is dropping off.
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
        }
      `}</style>
    </>
  );
}
