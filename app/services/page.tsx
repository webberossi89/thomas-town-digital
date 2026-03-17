import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — SEO, PPC, Websites & AI Automations | Thomas Town Digital",
  description: "Four core services built for home service businesses: local SEO, PPC (Google Ads & LSA), high-converting websites, and AI automation workflows.",
};

const services = [
  {
    id: "seo",
    icon: "📍",
    title: "SEO",
    tagline: "Own your local market on Google Maps and organic search",
    body: "When homeowners search for your trade, the Google Map Pack is the first thing they see — and the top 3 positions capture the majority of clicks and calls. We optimize your Google Business Profile, build local citations, create geo-targeted content, and develop a review strategy that puts you at the top and keeps you there.",
    bullets: [
      "Google Business Profile optimization and active management",
      "Local citation building, cleanup, and NAP consistency",
      "On-page SEO for service and location pages",
      "Review generation strategy and monitoring",
      "Local link building and authority signals",
      "Monthly rank tracking and performance reporting",
    ],
    result: "Clients typically see map pack visibility improvements within 60–90 days",
  },
  {
    id: "ppc",
    icon: "⚡",
    title: "PPC",
    tagline: "Be there the moment homeowners are ready to hire",
    body: "Google Ads and Local Services Ads put your business at the very top of search results the moment someone needs your trade. We build, manage, and continuously optimize campaigns built specifically for home service businesses — with call tracking, negative keyword management, and LSA dispute handling built in from day one.",
    bullets: [
      "Google Search campaigns targeting high-intent buyer keywords",
      "Local Services Ads (Google Guaranteed) setup and management",
      "Negative keyword management to eliminate wasted spend",
      "Call tracking and lead attribution across every campaign",
      "LSA dispute management — flag junk leads for credit",
      "Monthly performance reporting with actionable insights",
    ],
    result: "Average 3.2× return on ad spend across home service clients",
  },
  {
    id: "websites",
    icon: "🖥️",
    title: "Websites",
    tagline: "A website that converts visitors into booked jobs",
    body: "Your website is where paid traffic either converts or dies. Most home service websites are slow, confusing on mobile, and don't make it obvious how to call or book. We build fast, mobile-first websites with one job: turning visitors into phone calls. Every element — layout, copy, CTAs — is designed around conversion.",
    bullets: [
      "Custom Next.js builds optimized for speed and conversion",
      "Mobile-first design — 87% of home service searches are on phones",
      "Click-to-call and lead form placement above the fold",
      "Service and location page architecture for local SEO",
      "Google Analytics 4, call tracking, and conversion setup",
      "Ongoing CRO — we test and improve after launch",
    ],
    result: "New sites typically see 30–50% improvement in conversion rate vs. old sites",
  },
  {
    id: "ai-automations",
    icon: "🤖",
    title: "AI Automations",
    tagline: "Automate your follow-up and close more jobs on autopilot",
    body: "The fastest response wins the job — but most home service businesses don't have time to follow up with every lead instantly. We build AI-powered automation workflows that respond to new leads within minutes, re-engage past customers, request reviews automatically, and keep your pipeline moving without adding headcount.",
    bullets: [
      "Instant AI-powered lead response via text and email",
      "Automated follow-up sequences for unconverted leads",
      "Post-job review request automation (Google, GBP)",
      "Past customer re-engagement campaigns by season",
      "CRM integration and lead routing",
      "Reporting on response time, conversion rate, and pipeline health",
    ],
    result: "Automated follow-up increases lead-to-booked-job rate by 30–40% on average",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "160px 0 100px",
          background: "#fff",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div className="container">
          <p className="section-label">What we do</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 96px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
              color: "#0a0a0a",
              marginBottom: "24px",
            }}
          >
            SERVICES BUILT<br />
            FOR HOME SERVICES
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(0,0,0,0.5)",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Every service we offer is designed specifically for home service businesses. No fluff, no guesswork — just the channels that drive calls and booked jobs.
          </p>
        </div>
      </section>

      {/* Services detail */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            padding: "100px 0",
            background: i % 2 === 0 ? "#fff" : "#f7f7f7",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                gap: "80px",
                alignItems: "start",
              }}
              className="service-detail-grid"
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#f2f2f2",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    marginBottom: "24px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>{s.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                    }}
                  >
                    {s.title}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.025em",
                    lineHeight: 0.95,
                    color: "#0a0a0a",
                    marginBottom: "20px",
                  }}
                >
                  {s.tagline.toUpperCase()}
                </h2>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)", lineHeight: 1.8 }}>
                  {s.body}
                </p>

                <div
                  style={{
                    marginTop: "32px",
                    background: "rgba(45,138,69,0.12)",
                    borderLeft: "3px solid #2D8A45",
                    borderRadius: "0 6px 6px 0",
                    padding: "20px 24px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#0a0a0a",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      opacity: 0.5,
                      marginBottom: "6px",
                    }}
                  >
                    Typical result
                  </p>
                  <p style={{ fontSize: "14px", color: "#0a0a0a", lineHeight: 1.6, fontWeight: 600 }}>
                    {s.result}
                  </p>
                </div>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.35)",
                    marginBottom: "20px",
                  }}
                >
                  What&apos;s included
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {s.bullets.map((b) => (
                    <div
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        padding: "16px 20px",
                        background: "#f2f2f2",
                      }}
                    >
                      <span
                        style={{
                          color: "#0a0a0a",
                          fontSize: "14px",
                          flexShrink: 0,
                          marginTop: "1px",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: "15px", color: "rgba(0,0,0,0.7)", lineHeight: 1.5 }}>
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ padding: "100px 0", background: "#0a0a0a", textAlign: "center" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "-0.025em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            NOT SURE WHAT<br />
            <span style={{ color: "#2D8A45" }}>YOU NEED?</span>
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: 1.7 }}>
            Book a strategy call. We&apos;ll look at your current setup and tell you exactly what would move the needle — no upsell, no obligation.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "16px 36px" }}>
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}
