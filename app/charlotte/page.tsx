import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charlotte Marketing Agency for Contractors — Thomas Town Digital",
  description: "Home services marketing agency based in Charlotte, NC. Google Ads, LSA, SEO, and websites for roofing, HVAC, plumbing, and electrical contractors across the Charlotte metro.",
};

const results = [
  { stat: "47%", label: "Average reduction in cost per lead" },
  { stat: "3.2×", label: "Average return on ad spend" },
  { stat: "10 days", label: "Typical time to campaign launch" },
];

const services = [
  {
    name: "Google Ads",
    desc: "We build and manage Google Search campaigns targeting Charlotte homeowners searching for your service right now. Every campaign is structured around booked jobs, not vanity metrics.",
  },
  {
    name: "Local Services Ads (LSA)",
    desc: "The Google Guaranteed badge puts your business above the search results for Charlotte homeowners. We handle setup, verification, bid optimisation, and dispute management.",
  },
  {
    name: "SEO & Map Pack",
    desc: "Ranking in the Charlotte map pack is the highest-leverage long-term play for local contractors. We optimise your GBP, build local citations, and run a review strategy tuned to the Charlotte market.",
  },
  {
    name: "Website Design",
    desc: "Charlotte homeowners make fast decisions on mobile. We build fast, conversion-focused websites that turn traffic into calls — with service pages for every Charlotte-area neighbourhood you target.",
  },
];

const faqs = [
  {
    q: "How competitive is the Charlotte market for home service contractors?",
    a: "Very competitive in roofing, HVAC, and plumbing — especially after storm seasons. Charlotte's population growth over the past decade has brought both more homeowners and more contractors chasing them. The contractors who win consistently are the ones with a strong map pack presence and active Google Ads, not just word of mouth.",
  },
  {
    q: "Do you serve the whole Charlotte metro or just the city?",
    a: "We target the full Charlotte metro including Huntersville, Cornelius, Mooresville, Concord, Kannapolis, Matthews, Ballantyne, Gastonia, Belmont, and Mint Hill. We build geo-targeted campaigns around the specific zip codes and suburbs where your jobs are most profitable.",
  },
  {
    q: "What's the difference between Thomas Town Digital and a national marketing agency?",
    a: "National agencies treat every market the same. We're based in Charlotte and work exclusively with home service contractors. We know the seasonal patterns here — how spring storm season affects roofing demand, how the summer heat drives HVAC search volume, and which neighbourhoods are high-value targets for different trades.",
  },
  {
    q: "How long does it take to see results from Google Ads in Charlotte?",
    a: "Most Charlotte clients see qualified calls within the first 30 days of campaign launch. We build campaigns that optimise on actual lead quality — not just clicks — so performance improves through the first 60–90 days as we gather conversion data.",
  },
  {
    q: "Do I need to be based in Charlotte to work with you?",
    a: "No — we work with contractors across the US. But if you serve the Charlotte metro, we bring specific local knowledge about the market, seasonality, and competitive landscape that a remote agency can't replicate.",
  },
];

export default function CharlottePage() {
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
          <p className="section-label" style={{ color: "#2D8A45" }}>Charlotte, NC</p>
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
            Charlotte&apos;s Marketing<br />Agency for Home<br />Service Contractors.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
            We help roofing companies, HVAC contractors, plumbers, and electricians across the Charlotte metro generate exclusive inbound leads. Based in Charlotte. Built for contractors.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
              Book a Free Strategy Call →
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

      {/* Why Charlotte */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="pain-grid">
            <div>
              <p className="section-label">Why Charlotte</p>
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
                Local Knowledge Is a Competitive Advantage
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                Charlotte is one of the fastest-growing metros in the Southeast. That means more homeowners — and more contractors competing for their attention. A national agency with a templated approach won&apos;t cut through.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                We know how spring hailstorms drive roofing search volume in south Charlotte. We know which suburbs — Ballantyne, Mooresville, Huntersville — have the highest household incomes and the most replacement-level jobs. We build campaigns around that knowledge.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
                Our campaigns are geo-targeted to the zip codes and corridors where your margins are highest, not just the whole DMA.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "National agency, generic strategy", bad: true, detail: "Same playbook for Charlotte and Cleveland" },
                { label: "No seasonal awareness", bad: true, detail: "Ad spend doesn't shift with Charlotte demand patterns" },
                { label: "Broad metro targeting", bad: true, detail: "Budget wasted on low-value zip codes" },
                { label: "Charlotte-specific campaigns", bad: false, detail: "Built around local search patterns and seasonality" },
                { label: "Neighbourhood-level targeting", bad: false, detail: "Focus spend on high-value Charlotte suburbs" },
                { label: "Local market expertise", bad: false, detail: "We know the Charlotte competitive landscape" },
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
          <p className="section-label">What We Do</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "48px",
              maxWidth: "520px",
            }}
          >
            Digital Marketing for Charlotte Contractors
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}
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

      {/* Trades served */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <p className="section-label">Trades We Serve</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Charlotte-Area Contractors We Work With
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "600px" }}>
            From roofing companies in south Charlotte to HVAC contractors in Mooresville and plumbers serving the Lake Norman corridor — we help residential trade contractors across the full Charlotte metro.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {["Roofing", "HVAC", "Plumbing", "Electrical", "Landscaping & Lawn", "Pest Control", "Gutters & Siding", "Windows & Doors", "Painting", "Concrete & Hardscape", "Tree Service", "Fencing"].map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "100px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#0a0a0a",
                }}
              >
                {tag}
              </span>
            ))}
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
            Charlotte Contractor Marketing — Common Questions
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

      {/* Final CTA */}
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
            Ready to Dominate Your Charlotte Market?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a free strategy call. We&apos;ll review the Charlotte competitive landscape for your trade, look at what your competitors are doing, and show you exactly where the lead opportunity is.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
            Book a Free Strategy Call →
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
