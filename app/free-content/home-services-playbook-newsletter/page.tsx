import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Home Services Playbook — Monthly Newsletter",
  description:
    "Your monthly no-BS guide to marketing that works. Google Ads breakdowns, LSA updates, and growth tactics for home service businesses — delivered monthly.",
};

const whatYouGet = [
  {
    icon: "📊",
    title: "Ad Campaign Breakdowns",
    desc: "Real Google Ads and LSA campaign walkthroughs — what we changed, why, and what happened to lead volume and cost per lead.",
  },
  {
    icon: "📈",
    title: "Market Trend Updates",
    desc: "What&apos;s shifting in home service marketing: Google algorithm changes, LSA policy updates, CPC trends by trade vertical.",
  },
  {
    icon: "🔧",
    title: "Tactical Growth Tips",
    desc: "One actionable thing you can do this month to improve your GBP, reduce wasted ad spend, or generate more qualified reviews.",
  },
  {
    icon: "🎯",
    title: "Case Studies",
    desc: "Real results from real home service businesses — roofing, HVAC, plumbing, water damage. What worked, what didn&apos;t, and why.",
  },
];

export default function HomeServicesPlaybookNewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px", background: "#0a0a0a" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <Link href="/free-content" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Free Resources
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>→</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2D8A45",
                background: "rgba(45,138,69,0.15)",
                padding: "3px 10px",
                borderRadius: "4px",
              }}
            >
              Newsletter · Free · Monthly
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(38px, 5.5vw, 68px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            The Home Services<br />Playbook
          </h1>
          <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "12px" }}>
            Your monthly no-BS guide to marketing that actually works.
          </p>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.35)", marginBottom: "48px" }}>
            Expert tips, ad breakdowns, and growth tactics — delivered once a month. No filler.
          </p>

          {/* Subscribe card */}
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "40px 48px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 800,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#2D8A45",
                marginBottom: "12px",
              }}
            >
              Join free — cancel anytime
            </p>
            <h2
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px, 3vw, 30px)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#0a0a0a",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Get the Next Issue in Your Inbox
            </h2>
            <a
              href="https://thomas-town-digital.kit.com/home-services-playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "15px", padding: "16px 40px", display: "inline-block" }}
            >
              Subscribe Free →
            </a>
            <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.35)", marginTop: "16px" }}>
              Delivered monthly. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">What&apos;s in each issue</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px, 3.5vw, 38px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#0a0a0a",
              marginBottom: "44px",
            }}
          >
            Practical. Specific. Worth Reading.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="features-grid">
            {whatYouGet.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "14px",
                  padding: "28px",
                }}
              >
                <span style={{ fontSize: "28px", display: "block", marginBottom: "14px" }}>{item.icon}</span>
                <h3
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "#0a0a0a",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "760px", textAlign: "center" }}>
          <p className="section-label" style={{ textAlign: "center" }}>Who reads it</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px, 3.5vw, 38px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              marginBottom: "16px",
            }}
          >
            For Owners Who Want to Get Better
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(0,0,0,0.55)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 48px" }}>
            Roofing, HVAC, plumbing, and water damage business owners who are serious about building a pipeline they control — not one dependent on lead gen platforms or word-of-mouth alone.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Roofing Companies", "HVAC Contractors", "Plumbers", "Water Damage Restoration", "General Contractors", "Home Service Owners"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#0a0a0a",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.1)",
                  padding: "8px 16px",
                  borderRadius: "100px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ paddingTop: "72px", paddingBottom: "96px", background: "#0a0a0a", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "520px" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 44px)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Subscribe — It&apos;s Free
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Monthly. No filler. Unsubscribe any time.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://thomas-town-digital.kit.com/home-services-playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "14px", padding: "15px 32px" }}
            >
              Subscribe Free →
            </a>
            <Link href="/contact" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
