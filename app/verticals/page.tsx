import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve — Home Service Marketing | Thomas Town Digital",
  description:
    "Thomas Town Digital works with home service businesses across every major trade. SEO, PPC, websites, and AI automations for roofing, HVAC, plumbing, electrical, restoration, and more.",
};

const featuredVerticals = [
  {
    name: "Roofing",
    desc: "Storm leads, replacement jobs, and repairs. The highest-ticket trade in home services.",
    href: "/roofing",
  },
  {
    name: "HVAC",
    desc: "Year-round demand with massive seasonal spikes. Emergency and replacement both convert.",
    href: "/hvac",
  },
  {
    name: "Plumbing",
    desc: "High emergency intent, consistent call volume, strong LSA performance.",
    href: "/plumbing",
  },
  {
    name: "Electrical",
    desc: "Panel upgrades, EV chargers, rewires. High-ticket searches with strong local intent.",
    href: "/electrical",
  },
  {
    name: "Water Damage",
    desc: "The highest-performing LSA category. Emergency intent at its peak.",
    href: "/water-damage",
  },
];

const alsoServe = [
  "Landscaping",
  "Pest Control",
  "Painting",
  "Cleaning",
  "Gutters",
  "Solar",
  "Windows",
  "Concrete",
  "Fencing",
  "Pool Repair",
  "Custom Pools",
  "Deck Builders",
  "Moving Companies",
  "Land Clearing",
  "Dumpster Rental",
  "General Contractors",
];

export default function VerticalsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "80px",
          background: "#0a0a0a",
        }}
      >
        <div className="container" style={{ maxWidth: "820px" }}>
          <p
            className="section-label"
            style={{ color: "#2D8A45" }}
          >
            Industries
          </p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 88px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "28px",
            }}
          >
            EVERY TRADE.<br />
            <span style={{ color: "#2D8A45" }}>ONE AGENCY.</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              maxWidth: "560px",
            }}
          >
            We work exclusively with home service businesses. Whether you&apos;re a
            roofer, electrician, or restoration contractor, we know your market,
            your customers, and what it takes to generate consistent leads.
          </p>
        </div>
      </section>

      {/* Featured Verticals */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: "#f7f7f7",
        }}
      >
        <div className="container" style={{ maxWidth: "1040px" }}>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#2D8A45",
              marginBottom: "12px",
            }}
          >
            Core Verticals
          </p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              lineHeight: 1.05,
              marginBottom: "48px",
            }}
          >
            Our Featured Trades
          </h2>

          <div className="featured-grid">
            {featuredVerticals.map((v) => (
              <div
                key={v.href}
                className="featured-card"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "14px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 900,
                      fontSize: "22px",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      color: "#0a0a0a",
                      marginBottom: "10px",
                      lineHeight: 1.1,
                    }}
                  >
                    {v.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(0,0,0,0.55)",
                      lineHeight: 1.7,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
                <Link
                  href={v.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#2D8A45",
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                  className="card-link"
                >
                  View page <span style={{ fontSize: "16px" }}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Serve */}
      <section
        style={{
          paddingTop: "72px",
          paddingBottom: "88px",
          background: "#fff",
        }}
      >
        <div className="container" style={{ maxWidth: "1040px" }}>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#2D8A45",
              marginBottom: "12px",
            }}
          >
            More Verticals
          </p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(26px, 3vw, 38px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              lineHeight: 1.05,
              marginBottom: "12px",
            }}
          >
            We Also Work With
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(0,0,0,0.5)",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginBottom: "40px",
            }}
          >
            No dedicated page yet — but we&apos;ve run campaigns in all of these
            trades. Get in touch and we&apos;ll tell you what the opportunity looks
            like.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {alsoServe.map((trade) => (
              <Link
                key={trade}
                href="/contact"
                className="pill-tag"
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2px",
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: "8px",
                  padding: "12px 18px",
                  textDecoration: "none",
                  background: "#fff",
                  transition: "border-color 0.18s, background 0.18s",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "#0a0a0a",
                  }}
                >
                  {trade}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#2D8A45",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                  }}
                >
                  Get in touch →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "104px",
          background: "#0a0a0a",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(30px, 4vw, 50px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              lineHeight: 1.0,
              marginBottom: "20px",
            }}
          >
            DON&apos;T SEE YOUR TRADE?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              marginBottom: "40px",
            }}
          >
            If you run a home service business, we can help. Book a call and
            we&apos;ll tell you exactly what the opportunity looks like in your
            market.
          </p>
          <Link
            href="/contact"
            className="btn-yellow"
            style={{ fontSize: "14px", padding: "15px 34px" }}
          >
            Book a Strategy Call →
          </Link>
        </div>
      </section>

      <style>{`
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .featured-card:hover {
          box-shadow: 0 6px 28px rgba(0,0,0,0.09) !important;
          border-color: rgba(45,138,69,0.3) !important;
        }
        .card-link:hover {
          color: #1f6b33 !important;
        }
        .pill-tag:hover {
          border-color: rgba(45,138,69,0.4) !important;
          background: rgba(45,138,69,0.04) !important;
        }
        @media (max-width: 640px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
