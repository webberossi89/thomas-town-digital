"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";

const TOTAL_STEPS = 4;

const CHALLENGE_OPTIONS = [
  "We're struggling to get consistent, high-quality leads",
  "Our ads are getting clicks, but they're not converting into actual customers",
  "Our cost per lead is too high, and we need a more efficient strategy",
  "Current agency not delivering",
];

const SERVICE_OPTIONS = [
  "Google Ads",
  "Facebook Ads",
  "SEO",
  "Just Give Me More Leads",
];

export default function TypeformContact() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Step 1 fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");

  // Step 2
  const [challenge, setChallenge] = useState("");
  const [customChallenge, setCustomChallenge] = useState("");

  // Step 3
  const [service, setService] = useState("");

  // Step 4
  const [message, setMessage] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const customChallengeRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const progress = ((step + (submitted ? 1 : 0)) / TOTAL_STEPS) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) nameRef.current?.focus();
      if (step === 1 && challenge === "other") customChallengeRef.current?.focus();
      if (step === 3) messageRef.current?.focus();
    }, 120);
    return () => clearTimeout(timer);
  }, [step, challenge]);

  function validateStep(): boolean {
    if (step === 0) {
      if (!name.trim()) { setError("Name is required"); return false; }
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email"); return false; }
      if (!phone.trim()) { setError("Phone is required"); return false; }
      if (!business.trim()) { setError("Business name is required"); return false; }
    }
    if (step === 1) {
      const val = challenge === "other" ? customChallenge.trim() : challenge;
      if (!val) { setError("Please select or enter your challenge"); return false; }
    }
    return true;
  }

  function goNext() {
    setError("");
    if (!validateStep()) return;
    if (step === TOTAL_STEPS - 1) {
      handleSubmit();
    } else {
      setDirection("forward");
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    if (step > 0) {
      setDirection("back");
      setStep((s) => s - 1);
      setError("");
    }
  }

  function selectService(s: string) {
    setService(s);
    // Auto-advance after selecting a service
    setTimeout(() => {
      setDirection("forward");
      setStep(3);
    }, 200);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && step !== 3) {
      e.preventDefault();
      goNext();
    }
  }

  async function handleSubmit() {
    if (!validateStep()) return;
    setSubmitting(true);
    setError("");

    const challengeValue = challenge === "other" ? customChallenge : challenge;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          business,
          challenge: challengeValue,
          service,
          message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const optionStyle = (selected: boolean) => ({
    width: "100%",
    textAlign: "left" as const,
    fontFamily: "'Barlow', sans-serif",
    fontSize: 15,
    padding: "16px 20px",
    borderRadius: 8,
    border: `2px solid ${selected ? "#2D8A45" : "rgba(0,0,0,0.1)"}`,
    background: selected ? "rgba(45,138,69,0.06)" : "#fff",
    color: "#0a0a0a",
    cursor: "pointer",
    transition: "all 0.15s",
  });

  const inputStyle = (hasError?: boolean) => ({
    width: "100%",
    fontFamily: "'Barlow', sans-serif",
    fontSize: 16,
    padding: "12px 0",
    border: "none",
    borderBottom: `2px solid ${hasError ? "#d94040" : "rgba(0,0,0,0.15)"}`,
    outline: "none",
    background: "transparent",
    color: "#0a0a0a",
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    fontSize: 12,
    fontWeight: 600 as const,
    color: "rgba(0,0,0,0.4)",
    marginBottom: 4,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 500 }}>
      {/* Cover page */}
      {!started ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <img
            src="/logos/TT-Logo_01-Black.png"
            alt="Thomas Town Digital"
            style={{ height: 32, marginBottom: 32 }}
          />

          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "#0a0a0a",
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            Let&apos;s make your phone ring.
          </h2>
          <p style={{ fontSize: 15, color: "rgba(0,0,0,0.45)", lineHeight: 1.7, maxWidth: 340, marginBottom: 32 }}>
            4 quick questions.
          </p>

          <button
            onClick={() => setStarted(true)}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: "#fff",
              background: "#2D8A45",
              border: "none",
              borderRadius: 6,
              padding: "14px 40px",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              transition: "opacity 0.15s, transform 0.15s",
            }}
          >
            Get Started &rarr;
          </button>
        </div>
      ) : (
      <>
      {/* Progress bar */}
      <div style={{ height: 4, background: "rgba(0,0,0,0.06)", flexShrink: 0 }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#2D8A45",
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* Main area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {submitted ? (
          <div key="done" style={{ animation: "tf-slide-in-forward 0.35s ease both" }}>
            <div
              style={{
                width: 48, height: 48, borderRadius: "50%", background: "#2D8A45",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: 28, color: "#0a0a0a", marginBottom: 8 }}>
              You&apos;re all set, {name.split(" ")[0] || "there"}!
            </h2>
            <p style={{ fontSize: 15, color: "rgba(0,0,0,0.5)", lineHeight: 1.7 }}>
              We&apos;ll reach out and show you how we can help dominate your market.
            </p>
          </div>
        ) : (
          <div key={step} style={{ animation: `tf-slide-in-${direction} 0.3s ease both` }}>
            {/* Step counter */}
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#2D8A45", marginBottom: 12, textTransform: "uppercase" }}>
              {step + 1} of {TOTAL_STEPS}
            </p>

            {/* ---- Step 1: Contact Info ---- */}
            {step === 0 && (
              <div>
                <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3.5vw, 28px)", color: "#0a0a0a", marginBottom: 28, lineHeight: 1.2 }}>
                  Tell us about yourself
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <p style={labelStyle}>Name</p>
                    <input ref={nameRef} type="text" value={name} onChange={(e) => { setName(e.target.value); setError(""); }} onKeyDown={handleKeyDown} placeholder="John Smith" style={inputStyle()} />
                  </div>
                  <div>
                    <p style={labelStyle}>Email</p>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} onKeyDown={handleKeyDown} placeholder="john@smithplumbing.com" style={inputStyle()} />
                  </div>
                  <div>
                    <p style={labelStyle}>Phone</p>
                    <input type="tel" value={phone} onChange={(e) => { const digits = e.target.value.replace(/\D/g, "").slice(0, 10); let formatted = digits; if (digits.length > 6) formatted = `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`; else if (digits.length > 3) formatted = `${digits.slice(0,3)}-${digits.slice(3)}`; setPhone(formatted); setError(""); }} onKeyDown={handleKeyDown} placeholder="555-123-4567" style={inputStyle()} />
                  </div>
                  <div>
                    <p style={labelStyle}>Business</p>
                    <input type="text" value={business} onChange={(e) => { setBusiness(e.target.value); setError(""); }} onKeyDown={handleKeyDown} placeholder="Smith's Plumbing" style={inputStyle()} />
                  </div>
                </div>
              </div>
            )}

            {/* ---- Step 2: Challenge ---- */}
            {step === 1 && (
              <div>
                <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3.5vw, 28px)", color: "#0a0a0a", marginBottom: 28, lineHeight: 1.2 }}>
                  What&apos;s the biggest challenge in your business right now?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {CHALLENGE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setChallenge(opt); setError(""); setTimeout(() => { setDirection("forward"); setStep(2); }, 200); }}
                      style={optionStyle(challenge === opt)}
                    >
                      {opt}
                    </button>
                  ))}
                  <button
                    onClick={() => { setChallenge("other"); setError(""); setTimeout(() => customChallengeRef.current?.focus(), 50); }}
                    style={optionStyle(challenge === "other")}
                  >
                    Something else...
                  </button>
                  {challenge === "other" && (
                    <input
                      ref={customChallengeRef}
                      type="text"
                      value={customChallenge}
                      onChange={(e) => { setCustomChallenge(e.target.value); setError(""); }}
                      onKeyDown={handleKeyDown}
                      placeholder="Tell us your challenge..."
                      style={{ ...inputStyle(), marginTop: 4 }}
                    />
                  )}
                </div>
              </div>
            )}

            {/* ---- Step 3: Services ---- */}
            {step === 2 && (
              <div>
                <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3.5vw, 28px)", color: "#0a0a0a", marginBottom: 8, lineHeight: 1.2 }}>
                  Which of our services are you interested in?
                </h2>
                <p style={{ fontSize: 14, color: "rgba(0,0,0,0.4)", marginBottom: 28 }}>
                  Select one to continue.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectService(opt)}
                      style={optionStyle(service === opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ---- Step 4: Anything else ---- */}
            {step === 3 && (
              <div>
                <h2 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3.5vw, 28px)", color: "#0a0a0a", marginBottom: 28, lineHeight: 1.2 }}>
                  Anything else we should know?
                </h2>
                <textarea
                  ref={messageRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); goNext(); } }}
                  placeholder="Budget, timeline, goals — whatever helps us prepare for our conversation..."
                  rows={4}
                  style={{
                    width: "100%",
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 16,
                    padding: "14px 0",
                    border: "none",
                    borderBottom: "2px solid rgba(0,0,0,0.15)",
                    outline: "none",
                    background: "transparent",
                    color: "#0a0a0a",
                    resize: "none",
                    transition: "border-color 0.2s",
                  }}
                />
                <p style={{ fontSize: 12, color: "rgba(0,0,0,0.3)", marginTop: 12 }}>
                  Optional — press Submit when ready
                </p>
              </div>
            )}

            {/* Error */}
            {error && <p style={{ color: "#d94040", fontSize: 13, marginTop: 12 }}>{error}</p>}
          </div>
        )}
      </div>

      {/* Footer nav */}
      {!submitted && step !== 2 && !(step === 1 && challenge !== "other") && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 40px 28px",
            flexShrink: 0,
          }}
        >
          <button
            onClick={goBack}
            disabled={step === 0}
            style={{
              fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 13,
              color: step === 0 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.5)",
              background: "none", border: "none",
              cursor: step === 0 ? "default" : "pointer",
              padding: "8px 0", transition: "color 0.15s",
            }}
          >
            &larr; Back
          </button>
          <button
            onClick={goNext}
            disabled={submitting}
            style={{
              fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: 14,
              color: "#fff", background: "#2D8A45", border: "none", borderRadius: 6,
              padding: "12px 28px", cursor: submitting ? "wait" : "pointer",
              opacity: submitting ? 0.7 : 1, transition: "opacity 0.15s, transform 0.15s",
              textTransform: "uppercase", letterSpacing: "0.02em",
            }}
          >
            {submitting ? "Sending\u2026" : step === TOTAL_STEPS - 1 ? "Submit" : "Next \u2192"}
          </button>
        </div>
      )}

      {/* Show back button only on auto-advance steps (challenge preset + services) */}
      {!submitted && (step === 2 || (step === 1 && challenge !== "other")) && (
        <div style={{ padding: "16px 40px 28px", flexShrink: 0 }}>
          <button
            onClick={goBack}
            style={{
              fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 13,
              color: "rgba(0,0,0,0.5)", background: "none", border: "none",
              cursor: "pointer", padding: "8px 0", transition: "color 0.15s",
            }}
          >
            &larr; Back
          </button>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes tf-slide-in-forward {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tf-slide-in-back {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </>
      )}
    </div>
  );
}
