import Link from "next/link";

const stats = [
  { value: "3.2×", label: "Average ROAS" },
  { value: "47%", label: "Lower cost per lead" },
  { value: "200+", label: "Home service clients" },
  { value: "$12M+", label: "Pipeline generated" },
];

const services = [
  {
    icon: "⚡",
    title: "Google Ads",
    body: "Capture high-intent leads the moment homeowners search. We build and manage campaigns that bring real calls, not just clicks.",
    color: "#2D8A45",
  },
  {
    icon: "📣",
    title: "Meta Ads",
    body: "Reach homeowners before they search. Facebook and Instagram campaigns that build awareness and drive inbound inquiries.",
    color: "#2D8A45",
  },
  {
    icon: "📍",
    title: "Local SEO",
    body: "Dominate your local market on Google Maps and organic search. We get you found when it matters most.",
    color: "#2D8A45",
  },
  {
    icon: "🖥️",
    title: "Web Design",
    body: "High-converting websites built to turn visitors into leads. Fast, mobile-first, and optimized for calls.",
    color: "#2D8A45",
  },
];

const verticals = [
  "HVAC", "Plumbing", "Roofing", "Electrical",
  "Landscaping", "Pest Control", "Painting", "Cleaning",
  "Gutters", "Windows", "Concrete", "Fencing",
];

const reasons = [
  {
    title: "We only work with home service businesses",
    body: "No generalist agencies here. We know your industry, your customer, and what it takes to book jobs — not just generate clicks.",
  },
  {
    title: "You own everything",
    body: "Ad accounts, creative assets, data. It's yours. We never hold your account hostage or create dependency.",
  },
  {
    title: "Full transparency on results",
    body: "Live dashboards, monthly reporting, and a direct line to your strategist. You always know exactly what's happening.",
  },
  {
    title: "Aligned on performance",
    body: "We win when you win. Performance-aligned pricing on select engagements means our incentives match yours.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "#fff",
          paddingTop: "68px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Yellow accent shape */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "42%",
            height: "100%",
            background: "#2D8A45",
            clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ paddingTop: "80px", paddingBottom: "100px", position: "relative" }}>
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.45)",
                marginBottom: "24px",
              }}
            >
              Digital Lead Gen & SMB Marketing
            </p>

            <h1
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(52px, 9vw, 108px)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                marginBottom: "32px",
              }}
            >
              MORE LEADS.<br />
              MORE JOBS.<br />
              MORE REVENUE.
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "rgba(0,0,0,0.55)",
                lineHeight: 1.7,
                maxWidth: "500px",
                marginBottom: "44px",
                fontWeight: 400,
              }}
            >
              We help home service businesses build a steady pipeline of high-quality leads through paid search, paid social, and local SEO — so you&apos;re always booked, never chasing.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "16px 32px" }}>
                Book a Free Strategy Call →
              </Link>
              <Link href="/services" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px" }}>
                See How We Do It
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ background: "#0a0a0a", padding: "44px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              textAlign: "center",
            }}
            className="stats-grid"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "0 24px",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
                className="stat-item"
              >
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(28px, 4vw, 48px)",
                    letterSpacing: "-0.03em",
                    color: "#2D8A45",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
            .stat-item { border-right: none !important; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); }
          }
        `}</style>
      </section>

      {/* ── Services ── */}
      <section style={{ padding: "120px 0", background: "#fff" }}>
        <div className="container">
          <p className="section-label">What we do</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "56px",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 5vw, 56px)",
                textTransform: "uppercase",
                letterSpacing: "-0.025em",
                lineHeight: 0.95,
                color: "#0a0a0a",
              }}
            >
              EVERYTHING YOU NEED<br />
              TO FILL YOUR PIPELINE
            </h2>
            <Link href="/services" className="btn-outline" style={{ flexShrink: 0 }}>
              All Services →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
            }}
            className="services-grid"
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#f2f2f2",
                  padding: "40px",
                  position: "relative",
                  cursor: "default",
                  transition: "background 0.15s",
                }}
                className="service-card"
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "100%",
                    background: s.color,
                  }}
                />
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "22px",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    color: "#0a0a0a",
                    marginBottom: "12px",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .service-card:hover { background: #ebebeb !important; }
          @media (max-width: 640px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Who we help ── */}
      <section style={{ padding: "100px 0", background: "#f7f7f7" }}>
        <div className="container">
          <p className="section-label">Who we serve</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4.5vw, 52px)",
              textTransform: "uppercase",
              letterSpacing: "-0.025em",
              lineHeight: 0.95,
              color: "#0a0a0a",
              marginBottom: "48px",
            }}
          >
            BUILT FOR HOME<br />
            SERVICE BUSINESSES
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {verticals.map((v) => (
              <span
                key={v}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.1)",
                  color: "rgba(0,0,0,0.7)",
                }}
              >
                {v}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: "64px",
              background: "#2D8A45",
              borderRadius: "8px",
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "32px",
              alignItems: "center",
            }}
            className="cta-banner"
          >
            <div>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(20px, 3vw, 32px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "8px",
                }}
              >
                IF YOU TURN LEADS INTO JOBS,<br />
                WE CAN GET YOU MORE LEADS.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)" }}>
                Book a free 30-minute strategy call — no pitch, just a real look at your pipeline.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 800,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "16px 32px",
                background: "#fff",
                color: "#2D8A45",
                borderRadius: "6px",
                whiteSpace: "nowrap",
                flexShrink: 0,
                display: "inline-block",
              }}
            >
              Book a Call →
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .cta-banner { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Why Thomas Town ── */}
      <section style={{ padding: "120px 0", background: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
            className="why-grid"
          >
            <div>
              <p className="section-label">Why Thomas Town</p>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.95,
                  color: "#0a0a0a",
                  marginBottom: "28px",
                }}
              >
                NOT ANOTHER<br />
                GENERALIST AGENCY
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(0,0,0,0.55)", lineHeight: 1.8 }}>
                Most agencies spread themselves thin across every industry. We go deep on one: home services. That means faster results, fewer wasted dollars, and a team that speaks your language.
              </p>
              <Link href="/about" className="btn-outline" style={{ marginTop: "32px", display: "inline-flex" }}>
                Our Story →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  style={{
                    background: "#f2f2f2",
                    padding: "28px 32px",
                    borderLeft: "3px solid #2D8A45",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 800,
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                      opacity: 0.35,
                      marginBottom: "8px",
                    }}
                  >
                    0{i + 1}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#0a0a0a",
                      marginBottom: "8px",
                    }}
                  >
                    {r.title}
                  </p>
                  <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)", lineHeight: 1.65 }}>
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        style={{
          padding: "120px 0",
          background: "#0a0a0a",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#2D8A45",
              marginBottom: "20px",
            }}
          >
            Let&apos;s grow your business
          </p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 7vw, 88px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "32px",
            }}
          >
            READY TO STOP<br />
            CHASING LEADS?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "480px",
              margin: "0 auto 44px",
              lineHeight: 1.7,
            }}
          >
            Book a free strategy call. 30 minutes, no pressure — just a straight conversation about your pipeline.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "15px", padding: "18px 40px" }}>
            Book Your Free Call →
          </Link>
        </div>
      </section>
    </>
  );
}
