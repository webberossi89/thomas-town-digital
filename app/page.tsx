import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GoogleAdsIcon from "@/public/icons/google-ads";
import MicrosoftIcon from "@/public/icons/microsoft";
import HubSpotIcon from "@/public/icons/hubspot";
import MetaIcon from "@/public/icons/meta";
import TikTokIcon from "@/public/icons/tiktok";
import RedditIcon from "@/public/icons/reddit";

export const metadata: Metadata = {
  title: "Home Services Marketing Agency | Thomas Town Digital",
  description: "Thomas Town Digital is a home services marketing agency helping contractors get more leads with Google Ads, Local Services Ads, and SEO. More calls. More booked jobs.",
  openGraph: {
    title: "Home Services Marketing Agency | Thomas Town Digital",
    description: "We help home service businesses grow with paid search, paid social, and local SEO. More leads. More jobs. More revenue.",
  },
};

const stats = [
  { value: "10 DAY", label: "LAUNCH" },
  { value: "EXCLUSIVE", label: "LEADS" },
  { value: "24/7", label: "LEAD FLOW" },
  { value: "NO", label: "CONTRACT" },
];

const services = [
  {
    num: "01",
    icon: "📍",
    title: "SEO",
    body: "Dominate Google Maps and organic search in your local market. We get you found by the right homeowners at the right moment — before your competitors.",
    bullets: ["Map Pack top-3 placement", "GBP optimization & review strategy", "Local citation building"],
    href: "/services#seo",
  },
  {
    num: "02",
    icon: "⚡",
    title: "PPC",
    body: "High-intent leads the moment homeowners search. We build and manage Google Ads and LSA campaigns that drive real calls, not just clicks.",
    bullets: ["Google Search & LSA campaigns", "Call tracking & attribution", "LSA dispute management"],
    href: "/services#ppc",
  },
  {
    num: "03",
    icon: "🖥️",
    title: "Websites",
    body: "High-converting websites built to turn visitors into booked jobs. Fast, mobile-first, and engineered to generate calls from day one.",
    bullets: ["Mobile-first, built to convert", "Click-to-call above the fold", "Speed & conversion optimized"],
    href: "/services#websites",
  },
  {
    num: "04",
    icon: "🤖",
    title: "AI Automations",
    body: "Automate your follow-up, lead response, and review generation so nothing falls through the cracks — and you close more jobs without more effort.",
    bullets: ["< 5 min lead response, 24/7", "Review generation after every job", "Re-engagement sequences"],
    href: "/services#ai-automations",
  },
];

const verticalsRow1 = [
  "HVAC", "Plumbing", "Roofing", "Electrical", "Landscaping",
  "Pest Control", "Painting", "Cleaning", "Gutters", "Solar",
  "Garage Door", "Appliance Repair", "Generator Installation", "EV Charger Installation", "Air Duct Cleaning",
  "Siding", "Foundation Repair", "Waterproofing", "Stucco",
];

const verticalsRow2 = [
  "Windows", "Concrete", "Fencing", "Interior Demolition",
  "Pool Repair", "Pool Builders", "Deck Builders", "Moving Companies",
  "Land Clearing", "Dumpster Rental",
  "Masonry", "Pressure Washing", "Bathroom Remodeling", "Kitchen Remodeling",
  "Cabinet Refacing", "Countertop Installation", "Epoxy Flooring",
  "Junk Removal", "Tree Service", "Irrigation", "Mold Remediation", "Fire & Water Restoration",
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
          className="hidden md:block md:w-[42%]"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
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
              Home Services Marketing Agency
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
              We help home service businesses build a steady pipeline of high-quality leads through paid and organic channels, so you&apos;re never chasing leads, you&apos;re choosing the best ones. More control. More growth. More freedom.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "16px 32px" }}>
                Book a Strategy Call →
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

      {/* ── Partner Badges ── */}
      <section style={{ background: "#0a0a0a", paddingBottom: "80px" }}>
        <div className="container">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              textAlign: "center",
              marginBottom: "28px",
            }}
          >
            Certified Partner
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            {[
              { Icon: GoogleAdsIcon, label: "Google Ads" },
              { Icon: MicrosoftIcon, label: "Microsoft Advertising" },
              { Icon: MetaIcon, label: "Meta" },
              { Icon: HubSpotIcon, label: "HubSpot" },
              { Icon: TikTokIcon, label: "TikTok" },
              { Icon: RedditIcon, label: "Reddit" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  opacity: 0.45,
                  transition: "opacity 0.2s",
                }}
                className="partner-badge"
              >
                <Icon style={{ width: "28px", height: "28px", fill: "#fff" }} />
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .partner-badge:hover { opacity: 1 !important; }
        `}</style>
      </section>

      {/* ── Services ── */}
      <section style={{ padding: "120px 0", background: "#0a0a0a" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "64px",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#2D8A45", marginBottom: "16px" }}>
                What we do
              </p>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.95,
                  color: "#fff",
                }}
              >
                EVERYTHING YOU NEED<br />
                TO STAY FULLY BOOKED
              </h2>
            </div>
            <Link href="/services" style={{ flexShrink: 0, fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", padding: "12px 24px", borderRadius: "6px", transition: "color 0.15s, border-color 0.15s" }} className="services-all-link">
              All Services →
            </Link>
          </div>

          <div className="service-rows">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="service-row"
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  textDecoration: "none",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  transition: "background 0.2s",
                  position: "relative",
                }}
              >
                {/* Left — number + separator + icon/title */}
                <div className="service-row-left" style={{ display: "flex", alignItems: "center", gap: "28px", padding: "52px 48px 52px 0", flexShrink: 0, width: "38%" }}>
                  {/* Ghost number */}
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "clamp(72px, 8vw, 108px)", color: "rgba(255,255,255,0.04)", lineHeight: 1, letterSpacing: "-0.05em", userSelect: "none", flexShrink: 0 }}>
                    {s.num}
                  </div>
                  {/* Green vertical line */}
                  <div style={{ width: "2px", alignSelf: "stretch", background: "#2D8A45", flexShrink: 0, margin: "16px 0" }} />
                  {/* Icon + Title */}
                  <div>
                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>{s.icon}</div>
                    <h3 className="service-row-title" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "clamp(22px, 3vw, 34px)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#fff", lineHeight: 1, transition: "color 0.2s" }}>
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Right — description + bullets + CTA */}
                <div style={{ flex: 1, padding: "52px 0 52px 48px", borderLeft: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: "24px", maxWidth: "520px" }}>
                    {s.body}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {s.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.65)", fontFamily: "'Barlow', sans-serif", fontWeight: 600, letterSpacing: "0.02em" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2D8A45", flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2D8A45" }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .service-row:hover { background: #0f0f0f !important; }
          .service-row:hover .service-row-title { color: #2D8A45 !important; }
          .services-all-link:hover { color: #fff !important; border-color: rgba(255,255,255,0.35) !important; }
          @media (max-width: 700px) {
            .service-row { flex-direction: column !important; }
            .service-row-left { width: 100% !important; padding: 36px 0 20px !important; border-right: none !important; }
            .service-row > div:last-child { padding: 0 0 36px !important; border-left: none !important; border-top: 1px solid rgba(255,255,255,0.06) !important; }
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

          {/* Animated ticker — row 1 scrolls right, row 2 scrolls left */}
          <div style={{ overflow: "hidden", marginLeft: "-40px", marginRight: "-40px" }}>
            {/* Row 1 — scrolls right */}
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <div className="ticker-right" style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                {[...verticalsRow1, ...verticalsRow1].map((v, i) => (
                  <span
                    key={i}
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
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
            {/* Row 2 — scrolls left */}
            <div style={{ display: "flex" }}>
              <div className="ticker-left" style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                {[...verticalsRow2, ...verticalsRow2].map((v, i) => (
                  <span
                    key={i}
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
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
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
                IF YOUR PHONE ISN&apos;T RINGING,<br />
                WE CAN FIX THAT.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)" }}>
                30 minutes. No pitch. Just a straight look at what&apos;s holding your growth back.
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

      {/* ── Testimonial ── */}
      <section style={{ padding: "100px 0", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">What clients say</p>
          <TestimonialCarousel />
        </div>
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
            Book a strategy call. 30 minutes, no pressure — just a straight conversation about your pipeline.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "15px", padding: "18px 40px" }}>
            Book Your Strategy Call →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes tickerRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0%); }
        }
        @keyframes tickerLeft {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        .ticker-right {
          animation: tickerRight 45s linear infinite;
        }
        .ticker-left {
          animation: tickerLeft 52s linear infinite;
        }
        .ticker-right:hover,
        .ticker-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
