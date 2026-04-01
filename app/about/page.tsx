import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Results or nothing",
    body: "We don't measure success in impressions or clicks. We measure it in calls, jobs, and revenue. That's how we report, that's how we think.",
  },
  {
    title: "Industry depth, not breadth",
    body: "We've chosen to go deep on home services instead of spreading thin across every vertical. That specialization is your competitive advantage.",
  },
  {
    title: "No dependency model",
    body: "You own your accounts, your data, and your creative. We build systems that work for you — not ones that require us to function.",
  },
  {
    title: "Straight talk",
    body: "We'll tell you if a channel isn't working. We'll tell you when your budget is too small to get results. We'd rather lose a client than take their money for nothing.",
  },
];

const vsRows = [
  { metric: "Industry focus", tt: "Home services only", agency: "All industries" },
  { metric: "Account ownership", tt: "You own everything", agency: "Often locked in" },
  { metric: "Reporting", tt: "Revenue-focused", agency: "Vanity metrics" },
  { metric: "Point of contact", tt: "Direct to strategist", agency: "Account manager queue" },
  { metric: "Contract", tt: "Month-to-month", agency: "12-month lock-in" },
];

export default function AboutPage() {
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
          <p className="section-label">About us</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 96px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
              color: "#0a0a0a",
              marginBottom: "32px",
            }}
          >
            WE EXIST TO HELP<br />
            LOCAL BUSINESSES WIN
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(0,0,0,0.5)",
              maxWidth: "600px",
              lineHeight: 1.8,
            }}
          >
            Thomas Town Digital was built with one focus: growing small and medium home service businesses through digital marketing that actually converts. Not vanity metrics. Not impressions. Jobs.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "100px 0", background: "#f7f7f7" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="story-grid"
          >
            <div>
              <p className="section-label">Our story</p>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(30px, 4vw, 48px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.95,
                  color: "#0a0a0a",
                  marginBottom: "24px",
                }}
              >
                BUILT BY PEOPLE WHO&apos;VE<br />
                BEEN IN THE TRENCHES
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontSize: "16px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                  We&apos;ve worked inside home service businesses — seen the frustration of paying agencies that don&apos;t understand the difference between a $400 HVAC tune-up lead and a $12,000 system replacement. That experience shaped everything about how Thomas Town operates.
                </p>
                <p style={{ fontSize: "16px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                  We started with one goal: be the agency we wish existed when we were managing digital for home service brands. Focused, direct, and relentlessly focused on revenue.
                </p>
                <p style={{ fontSize: "16px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                  Based in Charlotte, NC. Working with home service businesses across the US.
                </p>
              </div>
            </div>

            {/* Stats block */}
            <div
              style={{
                background: "#2D8A45",
                borderRadius: "8px",
                padding: "48px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
              }}
            >
              {[
                { value: "75+", label: "Clients served" },
                { value: "5+", label: "Years in home services" },
                { value: "$12M+", label: "Pipeline generated" },
                { value: "4", label: "Core services" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(32px, 4vw, 48px)",
                      letterSpacing: "-0.03em",
                      color: "#fff",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* Founder */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div className="container">
          <p className="section-label">Who&apos;s behind it</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "64px",
              alignItems: "center",
              maxWidth: "900px",
            }}
            className="founder-grid"
          >
            <div style={{ position: "relative" }}>
              <Image
                src="/jared-webber.jpg"
                alt="Jared Webber — Founder, Thomas Town Digital"
                width={320}
                height={380}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(30px, 3.5vw, 44px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.0,
                  color: "#0a0a0a",
                  marginBottom: "8px",
                }}
              >
                Jared Webber
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#2D8A45",
                  marginBottom: "24px",
                }}
              >
                Founder
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                  Jared has a background in marketing, demand generation, and agency-side work across both B2B and home services. He started Thomas Town Digital to build the kind of focused, accountable agency he kept wishing existed when managing digital for home service brands.
                </p>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                  The approach is simple: go deep on one industry, stay relentlessly focused on revenue outcomes, and never take money from a client you can&apos;t actually help.
                </p>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.8 }}>
                  Based in Charlotte, NC.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .founder-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 0", background: "#fff" }}>
        <div className="container">
          <p className="section-label">How we operate</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4.5vw, 52px)",
              textTransform: "uppercase",
              letterSpacing: "-0.025em",
              lineHeight: 0.95,
              color: "#0a0a0a",
              marginBottom: "56px",
            }}
          >
            WHAT WE BELIEVE<br />
            IN PRACTICE
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
            }}
            className="values-grid"
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  background: "#f2f2f2",
                  padding: "36px",
                  borderTop: "3px solid #2D8A45",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "rgba(0,0,0,0.35)",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    color: "#0a0a0a",
                    marginBottom: "12px",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.75 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "100px 0", background: "#f7f7f7" }}>
        <div className="container">
          <p className="section-label">The difference</p>
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
            THOMAS TOWN VS<br />
            TYPICAL AGENCIES
          </h2>

          <div
            style={{
              border: "1px solid rgba(0,0,0,0.09)",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                background: "#f2f2f2",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ padding: "16px 24px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
                What matters
              </div>
              <div style={{ padding: "16px 24px", fontSize: "12px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", background: "#2D8A45" }}>
                Thomas Town
              </div>
              <div style={{ padding: "16px 24px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
                Typical agency
              </div>
            </div>

            {vsRows.map((r, i) => (
              <div
                key={r.metric}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom: i < vsRows.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}
              >
                <div style={{ padding: "18px 24px", fontSize: "14px", fontWeight: 600, color: "rgba(0,0,0,0.5)" }}>
                  {r.metric}
                </div>
                <div style={{ padding: "18px 24px", fontSize: "14px", fontWeight: 700, color: "#0a0a0a", background: "rgba(45,138,69,0.08)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#2D8A45", fontSize: "12px", fontWeight: 800 }}>✓</span> {r.tt}
                </div>
                <div style={{ padding: "18px 24px", fontSize: "14px", color: "rgba(0,0,0,0.4)" }}>
                  {r.agency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            SOUND LIKE THE<br />
            <span style={{ color: "#2D8A45" }}>RIGHT FIT?</span>
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", marginBottom: "40px" }}>
            Let&apos;s talk. Book a strategy call.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "16px 36px" }}>
            Book a Strategy Call →
          </Link>
        </div>
      </section>
    </>
  );
}
