"use client";

import { useState } from "react";

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
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#161616",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "6px",
    padding: "14px 16px",
    fontSize: "15px",
    color: "#fff",
    outline: "none",
    fontFamily: "'Barlow', sans-serif",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
    marginBottom: "8px",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "160px 0 80px", background: "#0f0f0f" }}>
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
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            LET&apos;S TALK<br />
            <span style={{ color: "#FFD100" }}>YOUR PIPELINE</span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", lineHeight: 1.7 }}>
            Book a free 30-minute strategy call. No pitch, no pressure — just a straight conversation about your business and where we can help.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "60px 0 120px", background: "#0f0f0f" }}>
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
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#FFD100", flexShrink: 0, marginTop: "2px", fontWeight: 700, fontSize: "14px" }}>→</span>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div
                style={{
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "28px",
                }}
              >
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
                  Prefer email?
                </p>
                <a
                  href="mailto:hello@thomastowndigital.com"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#FFD100",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  hello@thomastowndigital.com
                </a>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                  We reply within one business day.
                </p>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "20px", paddingTop: "20px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      marginBottom: "8px",
                    }}
                  >
                    Based in
                  </p>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Charlotte, NC</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                padding: "40px",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "#FFD100",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      fontSize: "22px",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 800,
                      fontSize: "22px",
                      textTransform: "uppercase",
                      color: "#fff",
                      marginBottom: "12px",
                    }}
                  >
                    Got it — talk soon
                  </h3>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
                    We&apos;ll reach out within one business day to schedule your strategy call.
                  </p>
                </div>
              ) : (
                <>
                  <h2
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 800,
                      fontSize: "20px",
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      color: "#fff",
                      marginBottom: "28px",
                    }}
                  >
                    Book a Free Strategy Call
                  </h2>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                      <div>
                        <label style={labelStyle}>Your name</label>
                        <input
                          type="text"
                          required
                          placeholder="First & last"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Phone</label>
                        <input
                          type="tel"
                          placeholder="(704) 555-0100"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Work email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Business name & type</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ABC HVAC — Heating & Cooling"
                        value={form.business}
                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Anything else we should know?</label>
                      <textarea
                        rows={4}
                        placeholder="Current monthly ad spend, what's not working, goals..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                      />
                    </div>

                    {error && (
                      <p style={{ fontSize: "13px", color: "#ff6b6b" }}>{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-yellow"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        fontSize: "14px",
                        padding: "16px",
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? "Sending…" : "Book Your Free Call →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        input:focus, textarea:focus { border-color: rgba(255,209,0,0.4) !important; }
      `}</style>
    </>
  );
}
