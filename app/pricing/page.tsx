import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Thomas Town Digital",
  description: "Transparent, flat-fee pricing for home service marketing. No percentage of ad spend. No hidden fees. Three tiers built for businesses doing $500K to $10M+.",
};

const tiers = [
  {
    name: "Grow",
    price: "$999",
    target: "Best for businesses doing $500K–$2M/year",
    description: "The essentials to start capturing high-intent leads from Google and converting them into booked jobs.",
    features: [
      "Google Ads management",
      "Keyword research & optimization",
      "Ad copy creation & testing",
      "Local Services Ads (LSA) setup & management",
      "Custom landing pages",
      "Lead tracking & call monitoring",
      "Monthly performance reports",
      "Landing page optimization",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Scale",
    price: "$1,999",
    target: "Best for businesses doing $2M–$5M/year",
    description: "Everything in Grow, plus local SEO and conversion optimization to dominate your market across paid and organic.",
    features: [
      "Everything in Grow",
      "Local SEO optimization",
      "Google Business Profile management",
      "Citation building & cleanup",
      "Review generation strategy",
      "Content marketing support",
      "Conversion rate optimization",
      "Monthly strategy calls",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Conquer",
    price: "$2,999",
    target: "Best for businesses doing $5M–$15M/year",
    description: "The full system — paid, SEO, and a high-converting website all working together with a dedicated account manager.",
    features: [
      "Everything in Scale",
      "Custom website design & development",
      "Mobile-first, sub-2s load times",
      "SEO-optimized service & location pages",
      "Lead capture forms optimized for conversion",
      "Advanced analytics & revenue reporting",
      "Dedicated account manager",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is ad spend included?",
    a: "No — ad spend is separate and goes directly to Google or Meta. We charge a flat management fee only. Most clients budget $2,000–$8,000/month in ad spend depending on market size.",
  },
  {
    q: "Do you take a percentage of ad spend?",
    a: "Never. Flat fee only. That means our incentives are aligned with your results, not with inflating your budget.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. All plans are month-to-month. We keep clients by delivering results, not by locking them in.",
  },
  {
    q: "How fast will I see results?",
    a: "Google Ads typically drives leads within 30 days. SEO results usually appear within 60–90 days as rankings build.",
  },
  {
    q: "What if I'm not sure which plan is right for me?",
    a: "Book a strategy call. We'll look at your current setup and recommend exactly what makes sense for your market and budget — no upsell, no obligation.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "72px", background: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "680px" }}>
          <p className="section-label">Pricing</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.0,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              marginBottom: "20px",
            }}
          >
            Simple, Flat-Fee Pricing
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7, marginBottom: "12px" }}>
            No percentage of ad spend. No hidden fees. No 12-month lock-ins. Just a flat monthly fee tied to real results.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section style={{ paddingBottom: "80px", background: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              alignItems: "stretch",
            }}
            className="pricing-grid"
          >
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlighted ? "#0a0a0a" : "#f7f7f7",
                  border: tier.highlighted ? "2px solid #2D8A45" : "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  padding: "40px 36px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {tier.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-13px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#2D8A45",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "4px 16px",
                      borderRadius: "100px",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div style={{ marginBottom: "28px" }}>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 800,
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: tier.highlighted ? "#2D8A45" : "rgba(0,0,0,0.4)",
                      marginBottom: "8px",
                    }}
                  >
                    {tier.name}
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 900,
                        fontSize: "48px",
                        lineHeight: 1,
                        color: tier.highlighted ? "#fff" : "#0a0a0a",
                      }}
                    >
                      {tier.price}
                    </span>
                    <span style={{ fontSize: "14px", color: tier.highlighted ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)", fontWeight: 500 }}>
                      /month
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: tier.highlighted ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {tier.target}
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: tier.highlighted ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.6)",
                    marginBottom: "28px",
                  }}
                >
                  {tier.description}
                </p>

                <ul style={{ listStyle: "none", marginBottom: "36px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "14px",
                        color: tier.highlighted ? "rgba(255,255,255,0.75)" : "#0a0a0a",
                      }}
                    >
                      <span style={{ color: "#2D8A45", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={tier.highlighted ? "btn-yellow" : "btn-outline"}
                  style={{
                    justifyContent: "center",
                    fontSize: "13px",
                    padding: "13px 24px",
                    ...(tier.highlighted ? {} : { borderColor: "rgba(0,0,0,0.2)", color: "#0a0a0a" }),
                  }}
                >
                  {tier.cta} →
                </Link>
              </div>
            ))}
          </div>

          {/* Ad spend note */}
          <p
            style={{
              textAlign: "center",
              marginTop: "32px",
              fontSize: "13px",
              color: "rgba(0,0,0,0.4)",
            }}
          >
            Ad spend is separate and billed directly by Google/Meta. We never take a cut of your ad budget.
          </p>
        </div>
      </section>

      {/* Comparison row */}
      <section style={{ paddingTop: "64px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label" style={{ textAlign: "center" }}>Why flat-fee</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 40px)",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "48px",
              letterSpacing: "-0.01em",
            }}
          >
            Your Budget Works For You, Not Us
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="compare-grid">
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <p style={{ fontWeight: 800, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.35)", marginBottom: "20px" }}>
                % of ad spend model
              </p>
              {[
                "Agency earns more when you spend more",
                "Incentive to inflate your budget",
                "Hidden markup on ad costs",
                "Fee grows even if results don't",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "14px", color: "rgba(0,0,0,0.55)" }}>
                  <span style={{ color: "#e05252", fontWeight: 700, flexShrink: 0 }}>✕</span>
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#0a0a0a",
                border: "2px solid #2D8A45",
                borderRadius: "14px",
                padding: "28px",
              }}
            >
              <p style={{ fontWeight: 800, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#2D8A45", marginBottom: "20px" }}>
                Thomas Town flat-fee
              </p>
              {[
                "Fixed monthly fee, no surprises",
                "Incentive aligned with your results",
                "100% of ad spend goes to ads",
                "Fee only grows when you upgrade",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "10px", marginBottom: "12px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "#2D8A45", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="section-label" style={{ textAlign: "center" }}>FAQ</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4vw, 40px)",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "48px",
              letterSpacing: "-0.01em",
            }}
          >
            Common Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                  padding: "24px 0",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#0a0a0a",
                    marginBottom: "10px",
                  }}
                >
                  {faq.q}
                </p>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
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
            Not Sure Which Plan?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a strategy call. We&apos;ll look at your market, your current setup, and tell you exactly what would move the needle.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
            Get Your Phone Ringing →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
