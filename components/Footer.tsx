import Link from "next/link";

const services = ["Google Ads", "Meta Ads", "Local SEO", "Web Design"];
const company = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "22px",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                  color: "#fff",
                }}
              >
                THOMAS TOWN
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Digital
              </div>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Digital lead generation and SMB marketing for home service businesses. More leads. More jobs. More revenue.
            </p>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "16px",
              }}
            >
              Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((s) => (
                <Link
                  key={s}
                  href="/services"
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                    transition: "color 0.15s",
                  }}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "16px",
              }}
            >
              Company
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {company.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                    transition: "color 0.15s",
                  }}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "16px",
              }}
            >
              Ready to grow?
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "20px",
                lineHeight: 1.6,
              }}
            >
              Book a free strategy call and let&apos;s talk leads.
            </p>
            <Link href="/contact" className="btn-yellow" style={{ fontSize: "12px", padding: "11px 22px" }}>
              Book a Call →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Thomas Town Digital. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            Charlotte, NC
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
