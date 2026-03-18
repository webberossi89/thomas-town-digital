import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Thomas Town Digital",
  description:
    "Book a strategy call. No pitch, no pressure — just a straight conversation about your home service business and where we can help.",
};

const expectItems = [
  {
    title: "What to expect",
    body: "30 minutes. We look at your current paid channels, lead flow, and where the drop-offs are happening.",
  },
  {
    title: "What you get",
    body: "A clear picture of what's working, what isn't, and where the biggest opportunity is for your business.",
  },
  {
    title: "Who it's for",
    body: "Home service businesses with an existing operation and a real desire to grow. HVAC, plumbing, roofing, electrical, and more.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "160px 0 80px", background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="container">
          <p className="section-label">Get in touch</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 88px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
              color: "#0a0a0a",
              marginBottom: "20px",
            }}
          >
            LET&apos;S DOMINATE<br />
            YOUR LOCAL MARKET
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(0,0,0,0.5)", maxWidth: "500px", lineHeight: 1.7 }}>
            Ready to stop guessing and start growing? We&apos;ll show you exactly how to attract better leads, book more jobs, and scale your business — without wasting time or money.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "72px 0 120px", background: "#f7f7f7" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "80px",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
                {expectItems.map((item) => (
                  <div
                    key={item.title}
                    style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}
                  >
                    <span style={{ color: "#fff", flexShrink: 0, marginTop: "2px", fontWeight: 800, fontSize: "14px", background: "#2D8A45", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "3px" }}>→</span>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 700, color: "#0a0a0a", marginBottom: "4px" }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)", lineHeight: 1.65 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "8px",
                  padding: "28px",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "16px" }}>
                  Prefer email?
                </p>
                <a
                  href="mailto:jared@thomastowndigital.com"
                  style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0a0a0a", display: "block", marginBottom: "4px" }}
                >
                  jared@thomastowndigital.com
                </a>
                <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)" }}>We reply within one business day.</p>

                <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", marginTop: "20px", paddingTop: "20px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "8px" }}>
                    Based in
                  </p>
                  <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}>Charlotte, NC</p>
                </div>
              </div>
            </div>

            {/* YouForm embed */}
            <div
              className="contact-form-col"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                data-youform-embed
                data-form="8rgcffje"
                data-base-url="https://app.youform.com"
                data-width="100%"
                data-height="700"
              />
            </div>
          </div>
        </div>
      </section>

      <Script src="https://app.youform.com/embed.js" strategy="afterInteractive" />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-form-col { order: -1; }
        }
      `}</style>
    </>
  );
}
