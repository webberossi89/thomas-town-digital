import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Two-Phase Google Ads Strategy for Contractors (Free Guide)",
  description:
    "Step-by-step guide to running Google Ads for home service businesses. Start with exact match to build conversion data, then layer in AI Max to scale.",
};

const phases = [
  {
    num: "01",
    title: "Phase 1 — Exact Match Foundation",
    subtitle: "Weeks 1–6: Build clean conversion data before touching AI",
    bullets: [
      "Why exact match keywords are the only starting point that works for contractors",
      "The three keyword intent types: service + location, emergency, and transactional",
      "Example keyword lists for roofing, HVAC, plumbing, and electrical",
      "How to set up call tracking so every lead is tied to the keyword that generated it",
      "Structuring campaigns by intent: emergency vs. replacement vs. maintenance",
      "What to track and tag during Phase 1 — and how long to run it before moving on",
    ],
  },
  {
    num: "02",
    title: "Phase 2 — AI Max at Half Budget",
    subtitle: "Weeks 6–10: Let Google's AI learn from real conversion data",
    bullets: [
      "Why AI Max only works after you have conversion signals (and what happens when you skip Phase 1)",
      "How to launch AI Max alongside your exact match campaigns — not instead of them",
      "Budget allocation: 50% of Phase 1 budget on AI Max, keep both running",
      "What AI Max does with your data — adjacent search terms, phrasing variations, behavioral matching",
      "When to scale AI Max budget vs. when to pull back",
      "The signals that tell you it's working (and the red flags that say it's not)",
    ],
  },
  {
    num: "03",
    title: "Keyword Framework by Trade",
    subtitle: "Copy-paste keyword lists built for home service verticals",
    bullets: [
      "Roofing: roof replacement, storm damage repair, emergency leak, new roof estimate",
      "HVAC: AC repair, furnace installation, HVAC tune-up, emergency heating",
      "Plumbing: drain repair, water heater install, emergency plumber, pipe repair",
      "Electrical: panel upgrade, outlet repair, emergency electrician, whole house rewire",
      "How to adapt these for your specific city and service area",
      "Negative keyword starter list to block non-buyers from day one",
    ],
  },
  {
    num: "04",
    title: "Budget Benchmarks and Timeline",
    subtitle: "What to expect by trade — CPCs, CPL, and realistic timelines",
    bullets: [
      "Cost benchmarks: roofing ($50–$150 CPC), HVAC/plumbing ($20–$40 CPC), electrical ($15–$35 CPC)",
      "Recommended starting budgets by trade and market size",
      "Timeline: weeks 1–2 (calibration), weeks 3–4 (consistent volume), weeks 6–10 (AI expansion)",
      "How to calculate your actual cost per acquired customer — not just cost per lead",
      "When to increase budget and when to cut — based on data, not gut feel",
      "The reporting cadence that keeps you in control without micromanaging",
    ],
  },
  {
    num: "05",
    title: "Campaign Setup Checklist",
    subtitle: "Everything you need configured before the first dollar is spent",
    bullets: [
      "Google Ads account structure: one campaign per intent type, exact match only",
      "Conversion tracking setup: calls, forms, and booked jobs as separate conversion actions",
      "Call tracking integration (CallRail, WhatConverts) with dynamic number insertion",
      "Landing page requirements: click-to-call, trust signals, mobile-first, sub-2s load time",
      "Negative keyword list pre-loaded before launch",
      "AI Max campaign configuration: audience signals, asset groups, and bid strategy",
    ],
  },
];

export default function GoogleAdsAiMaxGuidePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "120px", paddingBottom: "80px", background: "#0a0a0a" }}>
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
              Guide · Free
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 5.5vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            The Two-Phase<br />Google Ads Strategy<br />for Contractors
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "580px", marginBottom: "40px" }}>
            Most contractors launch Google Ads and let AI run wild from day one. That&apos;s why they burn budget. This guide walks you through the exact two-phase approach — start with exact match keywords, build real conversion data, then let AI Max expand on what&apos;s already working.
          </p>
          <a
            href="/api/resources?slug=google-ads-ai-max-guide"
            download
            className="btn-yellow"
            style={{ fontSize: "15px", padding: "16px 36px" }}
          >
            Download Free Guide →
          </a>
        </div>
      </section>

      {/* Key stats */}
      <section style={{ background: "#2D8A45", padding: "48px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", textAlign: "center" }} className="guide-stats">
            {[
              { val: "Phase 1", label: "Exact match keywords only — build clean conversion data first" },
              { val: "Phase 2", label: "AI Max at 50% budget — scale what's already converting" },
              { val: "6–10 Weeks", label: "From launch to a fully optimized two-phase campaign" },
            ].map((s) => (
              <div key={s.val}>
                <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "28px", color: "#fff", lineHeight: 1.1, marginBottom: "8px" }}>
                  {s.val}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">What&apos;s inside</p>
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
            Five Sections. Exact Match to AI Max.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {phases.map((phase) => (
              <div
                key={phase.num}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "14px",
                  padding: "28px 32px",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#2D8A45",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 900, fontSize: "13px", color: "#fff" }}>{phase.num}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 800,
                        fontSize: "16px",
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                        color: "#0a0a0a",
                        marginBottom: "4px",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.45)", marginBottom: "14px" }}>{phase.subtitle}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {phase.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
                          <span style={{ color: "#2D8A45", fontWeight: 700, flexShrink: 0 }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade callout */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="section-label">Who this is for</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(24px, 3vw, 34px)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              marginBottom: "32px",
            }}
          >
            Built for Home Service Businesses
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="trade-grid">
            {[
              {
                trade: "Roofing",
                detail: "CPCs run $50–$150 in most markets. You can't afford to waste a single click on a non-buyer. Phase 1 exact match targeting locks in only high-intent searches like [roof replacement contractor] and [storm damage repair near me].",
              },
              {
                trade: "HVAC",
                detail: "Seasonal demand makes timing critical. Phase 1 captures emergency and replacement intent during peak months. Phase 2 AI Max expands into adjacent searches like maintenance and tune-ups once it knows your buyer profile.",
              },
              {
                trade: "Plumbing",
                detail: "Emergency plumbing searches convert fast but competition is fierce. Exact match keywords like [emergency plumber near me] and [burst pipe repair] filter out the noise. AI Max then finds similar high-intent patterns you'd never target manually.",
              },
              {
                trade: "Electrical",
                detail: "Lower CPCs ($15–$35) give you room to build data faster. The two-phase approach works especially well because you can accumulate conversion signals in weeks 2–3 instead of waiting a full month.",
              },
            ].map((t) => (
              <div
                key={t.trade}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#2D8A45",
                    marginBottom: "10px",
                  }}
                >
                  {t.trade}
                </p>
                <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.6)", lineHeight: 1.7 }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section style={{ paddingTop: "72px", paddingBottom: "96px", background: "#0a0a0a", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "560px" }}>
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
            Get the Strategy — Free
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            No email required. Download, follow the two phases, and stop burning budget on AI campaigns that don&apos;t have a foundation.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/api/resources?slug=google-ads-ai-max-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{ fontSize: "14px", padding: "15px 32px" }}
            >
              Download Free →
            </a>
            <Link href="/contact" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .trade-grid { grid-template-columns: 1fr !important; }
          .guide-stats { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </>
  );
}
