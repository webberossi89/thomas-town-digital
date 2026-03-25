import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Services Marketing Agency — Thomas Town Digital",
  description: "Thomas Town Digital is a home services marketing agency in Charlotte, NC. We build exclusive lead pipelines for contractors using Google Ads, LSA, SEO, and websites.",
};

const results = [
  { stat: "47%", label: "Average reduction in cost per lead" },
  { stat: "3.2×", label: "Average return on ad spend" },
  { stat: "10 days", label: "Typical time to campaign launch" },
];

const services = [
  {
    name: "SEO & Map Pack",
    desc: "Rank in the top 3 Google Maps results for your highest-value service keywords. We handle GBP optimisation, citation building, and a review velocity strategy that keeps you there.",
  },
  {
    name: "Google Ads",
    desc: "Capture homeowners the exact moment they search for your service. We build, manage, and optimise Google Search campaigns focused on booked jobs — not just clicks.",
  },
  {
    name: "Local Services Ads (LSA)",
    desc: "The Google Guaranteed badge sits above everything else in search results. We handle LSA setup, verification, bid management, and dispute filing so you only pay for real leads.",
  },
  {
    name: "Website Design",
    desc: "Fast, mobile-first landing pages and full websites built to convert visitors into calls. Clear CTAs, trust signals, and service-specific pages that close leads before they bounce.",
  },
  {
    name: "AI Automations",
    desc: "Every lead followed up in minutes. We build automated SMS and email sequences, review request workflows, and re-engagement campaigns that keep your pipeline active 24/7.",
  },
];

const faqs = [
  {
    q: "What does a home services marketing agency actually do?",
    a: "We build and manage the digital channels that bring homeowners to you — Google Ads, Local Services Ads, local SEO, and your website. Unlike general agencies, we work exclusively with contractors, so every strategy is built around how homeowners actually find and hire home service businesses.",
  },
  {
    q: "How is Thomas Town Digital different from Angi or HomeAdvisor?",
    a: "Shared lead platforms sell the same lead to 3–5 companies simultaneously. We build owned inbound systems — your Google Ads, your map pack ranking, your website — so leads call you directly and you never compete on price before the conversation starts.",
  },
  {
    q: "How much does home services marketing cost?",
    a: "Our management fees start at $1,200/month, separate from ad spend. Most clients run $2,000–$6,000/month in Google Ads depending on market and service volume. We'll give you a specific recommendation on the strategy call after reviewing your market.",
  },
  {
    q: "How long until I see results?",
    a: "Google Ads and LSA can generate leads within the first 30 days. SEO is a longer play — meaningful map pack movement typically takes 60–120 days. We usually start clients on paid channels for immediate volume while SEO compounds in the background.",
  },
  {
    q: "Do you work with all types of home service businesses?",
    a: "We work with roofing, HVAC, plumbing, electrical, landscaping, pest control, window and door, and other residential trade contractors. If homeowners hire you for something related to their home, we can build a lead pipeline for it.",
  },
];

export default function HomeServicesMarketingAgencyPage() {
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
          <p className="section-label" style={{ color: "#2D8A45" }}>Home Services Marketing</p>
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
            The Home Services<br />Marketing Agency<br />Built for Contractors.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
            We help roofing companies, HVAC contractors, plumbers, and electricians generate exclusive inbound leads through Google Ads, Local Services Ads, SEO, and conversion-focused websites. No shared leads. No Angi. Just homeowners who call you.
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

      {/* Problem / Solution */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="pain-grid">
            <div>
              <p className="section-label">The Problem</p>
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
                Contractors Waste Thousands on Platforms That Don&apos;t Work
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                Most contractors start with Angi, Thumbtack, or a local SEO company that sends monthly PDFs. The leads are shared with competitors, the rankings take forever, and you have no idea what&apos;s actually driving jobs.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
                We build owned inbound systems — your Google Ads account, your map pack position, your website — that compound over time. When a homeowner searches for your service in your area, they find you. Not a lead marketplace.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Shared lead platforms", bad: true, detail: "The same lead sold to 3–5 competitors" },
                { label: "No attribution or reporting", bad: true, detail: "You can't tell which spend drives booked jobs" },
                { label: "Inconsistent pipeline", bad: true, detail: "Busy seasons spike, quiet seasons kill cash flow" },
                { label: "Exclusive inbound leads", bad: false, detail: "Homeowners call you directly from search" },
                { label: "Full-funnel attribution", bad: false, detail: "Every dollar tracked to calls, leads, and revenue" },
                { label: "Year-round lead flow", bad: false, detail: "Paid ads for volume + SEO for compounding returns" },
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
            Every Channel That Drives Home Service Leads
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

      {/* Who We Help */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <p className="section-label">Who We Work With</p>
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
            Built for Residential Trade Contractors
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "560px" }}>
            We work exclusively with home service businesses. If homeowners hire you to work on their home, we know how to fill your pipeline.
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
            Home Services Marketing Agency — Common Questions
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
            Ready to Fill Your Pipeline?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a free strategy call. We&apos;ll review your market, your current lead sources, and show you exactly what an owned inbound system would look like for your business.
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
