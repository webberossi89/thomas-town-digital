import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Marketing Agency — Thomas Town Digital",
  description: "SEO, Google Ads, LSA, websites, and AI automations for plumbing companies. We help plumbers generate more service and emergency leads without paying for",
};

const results = [
  { stat: "3.2×", label: "Average return on ad spend" },
  { stat: "47%", label: "Average reduction in cost per lead" },
  { stat: "$136", label: "Avg. cost per qualified plumbing lead" },
];

const services = [
  {
    name: "SEO & Map Pack",
    desc: "Most plumbing searches happen on mobile. The Map Pack gets the call before the website. We optimize your GBP, build local citations, and manage your review pipeline to dominate your local market.",
  },
  {
    name: "PPC — Google Ads & LSA",
    desc: "Plumbing has some of the highest-intent searches in home services — 'burst pipe,' 'water heater replacement,' 'drain clog near me.' We put you at the top when it matters most, with Google Ads and LSAs running together.",
  },
  {
    name: "Websites",
    desc: "Dedicated pages for emergency plumbing, water heater service, drain cleaning, and more. Built to convert mobile traffic into immediate phone calls — click-to-call front and center.",
  },
  {
    name: "AI Automations",
    desc: "Emergency plumbing leads go cold fast. Our AI automation responds within minutes, follows up on missed calls, and re-engages leads that didn't convert — so you close more jobs without more effort.",
  },
];

const faqs = [
  {
    q: "How much should a plumbing company spend on Google Ads?",
    a: "Most plumbing companies see strong results starting at $2,000–$4,000/month in ad spend. Larger metro markets may need $5,000–$8,000/month to stay competitive. We'll give you a market-specific number on the strategy call.",
  },
  {
    q: "Is plumbing too competitive for Google Ads to work?",
    a: "Competitive, yes — but that's because it works. The key is campaign structure, negative keywords, and landing page quality. Generalist campaigns waste budget. Ours don't.",
  },
  {
    q: "Do you handle both emergency and non-emergency plumbing campaigns?",
    a: "Yes. Emergency plumbing (burst pipes, clogs, leaks) and planned services (water heater replacement, repiping, bathroom remodels) require different bid strategies, messaging, and landing pages. We build them separately.",
  },
  {
    q: "How do LSAs work for plumbers?",
    a: "Local Services Ads show above regular Google Ads with a Google Guaranteed badge. You pay per lead, not per click. We handle the setup, contractor verification, and dispute process to flag unqualified leads for credit.",
  },
  {
    q: "Do we need a new website?",
    a: "Not always. If your current site is mobile-fast and converts reasonably well, we can work with it. If it's slow or confusing on mobile, we'll be honest about it — a bad landing page kills paid traffic regardless of how good the campaign is.",
  },
];

export default function PlumbingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px", background: "#0a0a0a" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label" style={{ color: "#2D8A45" }}>Plumbing Marketing</p>
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
            Be First When a Pipe Bursts at Midnight.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
            Plumbing emergencies don&apos;t wait. Neither should your pipeline. We help plumbing companies own the top of local search — paid and organic — so every urgent call in your market comes to you first.
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

      {/* Problem / Opportunity */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="pain-grid">
            <div>
              <p className="section-label">The opportunity</p>
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
                Plumbing Search Intent Is Immediate
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                When someone searches "plumber near me," they&apos;re not browsing. They have a problem, and they want it fixed today. The conversion window is minutes, not days.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
                That urgency is a massive opportunity if you&apos;re visible at the top of search. It&apos;s dead money if you&apos;re not. We make sure you&apos;re there — in the ads, in the map pack, and when they call.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "🔍", label: "\"Plumber near me\"", val: "High intent, ready to book" },
                { icon: "💧", label: "\"Emergency plumber\"", val: "Immediate need, price-insensitive" },
                { icon: "🚿", label: "\"Water heater replacement\"", val: "Planned, high-ticket ($1,200–$3,500)" },
                { icon: "🪠", label: "\"Drain clog service\"", val: "Repeat opportunity, fast conversion" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    background: "#f7f7f7",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "12px",
                  }}
                >
                  <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#0a0a0a", fontFamily: "'Barlow', sans-serif" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.45)", marginTop: "2px" }}>{item.val}</div>
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
            Every Channel That Drives Plumbing Jobs
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
            Plumbing Marketing Questions
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
            Ready to Own Your Local Market?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a strategy call. We&apos;ll look at your current search visibility and ad setup, and tell you exactly what&apos;s leaving calls on the table.
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
