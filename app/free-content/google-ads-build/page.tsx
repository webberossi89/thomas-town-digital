import type { Metadata } from "next";
import Link from "next/link";
import AdsBuildForm from "./AdsBuildForm";

export const metadata: Metadata = {
  title: "Free Custom Google Ads Account Build for Contractors — Thomas Town Digital",
  description:
    "Get a custom Google Ads account build for your contracting business in 30 minutes. Real keywords, ad copy, negatives, geo targets, GA4 tracking, and per-campaign budgets. Free.",
  alternates: {
    canonical: "https://www.thomastowndigital.com/free-content/google-ads-build",
  },
};

const inclusions: { tag: string; title: string; body: string }[] = [
  {
    tag: "Tab 1",
    title: "Campaign architecture",
    body: "5–7 campaigns tuned to your service mix and ticket size, with monthly + daily budgets allocated automatically.",
  },
  {
    tag: "Tab 2",
    title: "Real keyword list",
    body: "Bucketed into emergency, general, replacement, and brand defense, with monthly search volume and suggested CPC for your metro.",
  },
  {
    tag: "Tab 3",
    title: "Negative keywords",
    body: "Universal contractor negatives plus vertical-specific filters so you don't waste spend on DIY queries, retailers, or job seekers.",
  },
  {
    tag: "Tab 4",
    title: "RSA ad copy drafts",
    body: "12 headlines and 4 descriptions per campaign, character-limit-safe, with your business name woven in.",
  },
  {
    tag: "Tab 5",
    title: "Geo targeting + schedule",
    body: "Recommended primary metro, secondary service areas, bid adjustments, and a dayparting schedule we know works for home services.",
  },
  {
    tag: "Tab 6",
    title: "GA4 conversion tracking",
    body: "An 18-step guide covering events, enhanced conversions, GA4-to-Google Ads linking, audiences, and a weekly review cadence.",
  },
  {
    tag: "Tab 7",
    title: "Pre-launch checklist",
    body: "The exact items you need to gather (account access, payment method, call tracking, landing page slugs) before you click publish.",
  },
];

export default function GoogleAdsBuildPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "72px", background: "#0a0a0a" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
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
              Custom Build · Free
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 5.5vw, 68px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.97,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            A Custom <span style={{ color: "#2D8A45" }}>Google Ads</span> Account Build, Free.
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: "640px",
              marginBottom: "0",
            }}
          >
            Tell us about your contracting business. In 30 minutes you&apos;ll get a real, market-specific Google Ads account build emailed to you: keywords, negatives, ad copy, geo targets, conversion tracking, and budgets. No sales call, no email wall after the fact, just the same starter framework we hand to paying clients on day one.
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section style={{ paddingTop: "72px", paddingBottom: "64px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <p className="section-label" style={{ color: "#2D8A45", marginBottom: "16px" }}>What you get</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "40px",
            }}
          >
            7 tabs. One spreadsheet.<br />
            <span style={{ color: "#2D8A45" }}>Built for your business.</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {inclusions.map((b) => (
              <div
                key={b.tag}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  padding: "24px 26px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#2D8A45",
                    background: "rgba(45,138,69,0.1)",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    marginBottom: "12px",
                  }}
                >
                  {b.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "17px",
                    color: "#0a0a0a",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: "13.5px", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, margin: 0 }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" style={{ paddingTop: "72px", paddingBottom: "100px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "16px",
              padding: "40px 44px",
            }}
          >
            <p className="section-label" style={{ color: "#2D8A45", marginBottom: "12px" }}>Build my account</p>
            <h2
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 900,
                fontSize: "28px",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginBottom: "8px",
                lineHeight: 1.1,
              }}
            >
              Tell us about your business
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.6, marginBottom: "32px" }}>
              Eight fields. ~90 seconds. Your full account build hits your inbox within 30 minutes.
            </p>
            <AdsBuildForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ paddingTop: "72px", paddingBottom: "96px", background: "#0a0a0a", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 42px)",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Want us to <span style={{ color: "#2D8A45" }}>run it</span>?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "32px", lineHeight: 1.7 }}>
            The build is the starter framework. The next 90 days of bid management, search-term review, landing page tuning, and conversion tracking lives in our paid engagement.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
            Book a Strategy Call →
          </Link>
        </div>
      </section>
    </>
  );
}
