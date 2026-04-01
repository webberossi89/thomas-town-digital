import Link from "next/link";
import Image from "next/image";
import GoogleAdsIcon from "@/public/icons/google-ads";
import MicrosoftIcon from "@/public/icons/microsoft";
import MetaIcon from "@/public/icons/meta";
import HubSpotIcon from "@/public/icons/hubspot";
import TiktokIcon from "@/public/icons/tiktok";
import RedditIcon from "@/public/icons/reddit";

const services = ["SEO", "PPC", "Websites", "AI Automations"];
const verticals = [
  { label: "Roofing Marketing", href: "/roofing" },
  { label: "HVAC Marketing", href: "/hvac" },
  { label: "Plumbing Marketing", href: "/plumbing" },
  { label: "Electrical Marketing", href: "/electrical" },
  { label: "View All Industries →", href: "/verticals" },
];
const company: { label: string; href: string; hidden?: boolean }[] = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "RSS Feed", href: "/feed.xml", hidden: true },
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
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1.5fr",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src="/logos/TT-Logo_Stacked-White.png"
                alt="Thomas Town Digital"
                height={52}
                width={110}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              SEO, PPC, websites, and AI automations for home service businesses. More leads. More jobs. More revenue.
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

          {/* Verticals */}
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
              Verticals
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {verticals.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  style={{
                    fontSize: v.href === "/verticals" ? "12px" : "14px",
                    color: v.href === "/verticals" ? "#2D8A45" : "rgba(255,255,255,0.55)",
                    transition: "color 0.15s",
                    marginTop: v.href === "/verticals" ? "4px" : "0",
                  }}
                >
                  {v.label}
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
                  style={c.hidden ? {
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0,0,0,0)",
                    whiteSpace: "nowrap",
                    border: 0,
                  } : {
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              {[
                { Icon: GoogleAdsIcon, label: "Google Ads" },
                { Icon: MicrosoftIcon, label: "Microsoft" },
                { Icon: MetaIcon, label: "Meta" },
                { Icon: HubSpotIcon, label: "HubSpot" },
                { Icon: TiktokIcon, label: "TikTok" },
                { Icon: RedditIcon, label: "Reddit" },
              ].map(({ Icon, label }) => (
                <Icon
                  key={label}
                  aria-label={label}
                  style={{ width: "18px", height: "18px", fill: "rgba(255,255,255,0.35)" }}
                />
              ))}
            </div>
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
