import Link from "next/link";

const services = [
  {
    id: "google-ads",
    icon: "⚡",
    title: "Google Ads",
    tagline: "Be there when homeowners are ready to buy",
    color: "#FFD100",
    body: "Google Ads is the highest-intent channel in home services. When a homeowner searches \"AC repair near me\" at 7pm in July, they need someone now — and that someone should be you. We build, manage, and optimize Google Search and Local Services Ad campaigns specifically for home service businesses.",
    bullets: [
      "Search campaigns targeting high-intent buyer keywords",
      "Local Services Ads (Google Guaranteed) setup and management",
      "Negative keyword management to cut wasted spend",
      "Call tracking and lead attribution",
      "Competitor conquest targeting",
      "Monthly performance reporting with actionable insights",
    ],
    result: "Average 3.2× return on ad spend for home service clients",
  },
  {
    id: "meta-ads",
    icon: "📣",
    title: "Meta Ads",
    tagline: "Reach homeowners before your competitors do",
    color: "#FFD100",
    body: "Facebook and Instagram let you get in front of homeowners in your service area before they even start searching. Great for building brand awareness, promoting seasonal offers, and retargeting website visitors who didn't convert. We create ad creative, manage campaigns, and optimize for booked jobs — not vanity metrics.",
    bullets: [
      "Audience targeting by location, homeownership, and income",
      "Creative production: copy, static ads, video scripts",
      "Retargeting campaigns for website visitors",
      "Seasonal and promotional campaign management",
      "Lead form ads for low-friction conversions",
      "Full funnel reporting tied to revenue",
    ],
    result: "Home service clients see 40–60% lower CPL vs. Google Ads alone when combining both channels",
  },
  {
    id: "local-seo",
    icon: "📍",
    title: "Local SEO",
    tagline: "Own your market on Google Maps and organic",
    color: "#2D8A45",
    body: "When homeowners search \"HVAC company near me,\" the Google Map Pack is the first thing they see. Getting into those top 3 positions drives a massive volume of calls without paying per click. We optimize your Google Business Profile, build local citations, and create content that earns you organic rankings across your service area.",
    bullets: [
      "Google Business Profile optimization and management",
      "Local citation building and cleanup",
      "On-page SEO for service and location pages",
      "Review generation strategy and monitoring",
      "Local link building",
      "Monthly rank tracking and reporting",
    ],
    result: "Clients typically see map pack visibility improvements within 60–90 days",
  },
  {
    id: "web-design",
    icon: "🖥️",
    title: "Web Design",
    tagline: "A website that converts, not just looks good",
    color: "#2D8A45",
    body: "Your website is where paid traffic goes to die — or convert. Most home service websites are slow, confusing, and don't make it easy to call or book. We build fast, mobile-first websites with one job: turning visitors into phone calls and form submissions. Every element is designed around conversion, not awards.",
    bullets: [
      "Custom Next.js or WordPress builds",
      "Mobile-first, sub-2 second load times",
      "Clear CTAs on every page",
      "Click-to-call and contact forms optimized for conversions",
      "Service and location page architecture for SEO",
      "Google Analytics 4 and conversion tracking setup",
    ],
    result: "New sites typically see 30–50% improvement in conversion rate vs. old sites",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "160px 0 100px",
          background: "#0f0f0f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255,209,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
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
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            SERVICES BUILT<br />
            FOR <span style={{ color: "#FFD100" }}>HOME SERVICES</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.55)",
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
            background: i % 2 === 0 ? "#0a0a0a" : "#0f0f0f",
            borderTop: "1px solid rgba(255,255,255,0.04)",
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
                    background: "#161616",
                    border: "1px solid rgba(255,255,255,0.07)",
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
                      color: s.color,
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
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  {s.tagline.toUpperCase()}
                </h2>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                  {s.body}
                </p>

                <div
                  style={{
                    marginTop: "32px",
                    background: "#161616",
                    borderLeft: `3px solid ${s.color}`,
                    borderRadius: "0 6px 6px 0",
                    padding: "20px 24px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: s.color,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Typical result
                  </p>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
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
                    color: "rgba(255,255,255,0.3)",
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
                        background: "#161616",
                      }}
                    >
                      <span
                        style={{
                          color: s.color,
                          fontSize: "14px",
                          flexShrink: 0,
                          marginTop: "1px",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
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
      <section style={{ padding: "100px 0", background: "#000", textAlign: "center" }}>
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
            <span style={{ color: "#FFD100" }}>YOU NEED?</span>
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: 1.7 }}>
            Book a free call. We&apos;ll look at your current setup and tell you exactly what would move the needle — no upsell, no obligation.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "16px 36px" }}>
            Book a Free Strategy Call →
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
