import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Services Ads Management for Home Service Businesses — Thomas Town Digital",
  description: "We manage Local Services Ads (LSA) and the Google Guaranteed badge for home service contractors. Setup, bid management, lead dispute filing, and monthly reporting included.",
};

const results = [
  { stat: "Google\nGuaranteed", label: "Badge setup & verification included" },
  { stat: "Pay Per\nLead", label: "Never pay per click — only for real leads" },
  { stat: "Disputes\nFiled", label: "Bad leads disputed and credited back" },
];

const managementServices = [
  {
    name: "GBP Verification & Badge Setup",
    desc: "Getting Google Guaranteed requires background checks, licence verification, and insurance confirmation. We manage the entire setup process so you don't get stuck in the approval queue.",
  },
  {
    name: "Weekly Bid Optimisation",
    desc: "LSA bids determine how often your profile shows in the top positions. We adjust bids weekly based on lead volume, lead quality, and your target cost per booked job.",
  },
  {
    name: "Lead Dispute Management",
    desc: "Not every LSA lead is legitimate — wrong service area, wrong trade, spam calls. We review every lead and file disputes for credits on leads that don't qualify under Google's guarantee policy.",
  },
  {
    name: "Budget Pacing & Allocation",
    desc: "LSA budgets can burn fast in competitive markets. We monitor daily spend, pause campaigns during low-quality windows, and reallocate budget to your highest-converting service types.",
  },
  {
    name: "Monthly Reporting",
    desc: "Every month we send a full LSA report: leads received, disputes filed and won, cost per lead, and recommendations for the next 30 days.",
  },
];

const faqs = [
  {
    q: "What does the Google Guaranteed badge actually mean?",
    a: "Google Guaranteed means Google has verified your business — background checks, licence, and insurance — and will refund a customer up to $2,000 if they're unsatisfied with work booked through Local Services Ads. For homeowners, it's a trust signal. For contractors, it means you show up above everything else in search results, including regular Google Ads.",
  },
  {
    q: "How much do LSA leads typically cost?",
    a: "Lead costs vary by trade and market. Roofing leads typically run $40–$120. HVAC and plumbing leads are $25–$80. Electrical is often $30–$70. These are rough ranges — your actual cost per lead depends on your market's competitiveness and how well your bids and profile are managed. We'll give you market-specific estimates on the strategy call.",
  },
  {
    q: "Can you dispute fake or low-quality leads?",
    a: "Yes — and this is one of the most underused features of LSA. If a lead is for a service you don't offer, outside your service area, a spam call, or a duplicate, you can dispute it and receive a credit. Most contractors never dispute leads and overpay as a result. We review every lead and dispute everything that qualifies.",
  },
  {
    q: "How long does it take to get Google Guaranteed verified?",
    a: "The verification process typically takes 2–4 weeks from application to approval, depending on how quickly your background check and licence documents clear. We manage the process and follow up with Google's support team if anything gets stuck.",
  },
  {
    q: "What's the difference between LSA and regular Google Ads?",
    a: "Google Ads are pay-per-click — you pay every time someone clicks your ad, whether they contact you or not. LSA is pay-per-lead — you only pay when a homeowner calls or messages you directly through the ad. LSA also shows above regular Google Ads in search results. The tradeoff is less control over targeting; LSA uses your profile and location rather than keyword bidding.",
  },
];

export default function LocalServicesAdsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          background: "#0a0a0a",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label" style={{ color: "#2D8A45" }}>Google Guaranteed</p>
          <h1
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 68px)",
              lineHeight: 1.0,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Local Services Ads<br />Management for Home<br />Service Businesses.
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "580px", marginBottom: "40px" }}>
            Local Services Ads put your business above Google Ads, above the map pack, and above organic results — with a Google Guaranteed badge. We handle setup, bid management, dispute filing, and reporting so you get the leads without the admin.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
              Book a Free Strategy Call →
            </Link>
            <Link href="/services" className="btn-outline" style={{ fontSize: "14px", padding: "15px 32px", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* What is LSA */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <p className="section-label">What Is LSA?</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Google Guaranteed: The Most Trusted Spot in Search
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
            Local Services Ads (LSA) are Google&apos;s pay-per-lead ad format for home service businesses. Unlike regular Google Ads where you pay per click, with LSA you only pay when a homeowner calls or messages you directly through the ad.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
            Businesses that pass Google&apos;s background check, licence verification, and insurance review earn the Google Guaranteed badge — a green checkmark displayed on your profile. This badge sits above all other search results, including paid Google Ads and the Google Maps pack, and signals to homeowners that Google has vetted and stands behind your business.
          </p>
        </div>
      </section>

      {/* Results bar */}
      <section style={{ background: "#2D8A45", padding: "40px 0" }}>
        <div className="container">
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", textAlign: "center" }}
            className="results-bar"
          >
            {results.map((r) => (
              <div key={r.label}>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 900,
                    fontSize: "28px",
                    color: "#fff",
                    lineHeight: 1.1,
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ whiteSpace: "pre-line" }}>{r.stat}</span>
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why management matters */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="pain-grid">
            <div>
              <p className="section-label">The Problem</p>
              <h2
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                }}
              >
                Unmanaged LSA Campaigns Burn Budget on Junk Leads
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
                Most contractors set up their LSA profile once and never touch it again. Without active bid management, you either overpay during low-demand windows or get outbid during peak season when leads are most valuable.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>
                Worse, Google charges for leads that don&apos;t qualify — wrong service area, spam calls, calls for services you don&apos;t offer. Those leads are fully disputable and creditable. Most contractors never file a single dispute and lose hundreds of dollars a month as a result.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Set-and-forget LSA", bad: true, detail: "Overpaying on bids with no weekly optimisation" },
                { label: "No dispute management", bad: true, detail: "Paying for spam calls and out-of-area leads" },
                { label: "No budget pacing", bad: true, detail: "Budget burns out before high-value time windows" },
                { label: "Weekly bid optimisation", bad: false, detail: "Bids adjusted to target cost per booked job" },
                { label: "Every lead reviewed and disputed", bad: false, detail: "Credits recovered for every non-qualifying lead" },
                { label: "Active budget pacing", bad: false, detail: "Spend focused on your best-converting windows" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 18px",
                    background: item.bad ? "rgba(224,82,82,0.06)" : "rgba(45,138,69,0.07)",
                    border: `1px solid ${item.bad ? "rgba(224,82,82,0.15)" : "rgba(45,138,69,0.2)"}`,
                    borderRadius: "10px",
                  }}
                >
                  <span style={{ fontSize: "16px", flexShrink: 0 }}>{item.bad ? "✕" : "✓"}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#0a0a0a" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.45)" }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management services */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container">
          <p className="section-label">Our LSA Management</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "48px",
              maxWidth: "520px",
            }}
          >
            Everything Included in LSA Management
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
            className="services-grid"
          >
            {managementServices.map((s) => (
              <div
                key={s.name}
                style={{
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 800,
                    fontSize: "16px",
                    color: "#0a0a0a",
                    marginBottom: "10px",
                  }}
                >
                  {s.name}
                </p>
                <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How LSA fits */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "#f7f7f7" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="section-label">The Full Picture</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            LSA Works Best as Part of a Layered Marketing Stack
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "16px" }}>
            LSA is one layer in a complete search presence. Think of it in three tiers: SEO builds your long-term map pack ranking so you appear in the local 3-pack for free. LSA sits above that with the Google Guaranteed badge. Google Search Ads run alongside both, capturing high-intent searches that LSA misses.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.75, marginBottom: "32px" }}>
            Most contractors start with LSA for immediate lead volume while their SEO builds. As map pack rankings improve, some ad spend shifts from paid to owned traffic. The goal is maximum search real estate across all three layers.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { number: "1", name: "SEO & Map Pack", desc: "Long-term organic visibility. Free traffic from the Google Maps 3-pack for your most valuable keywords." },
              { number: "2", name: "Local Services Ads (LSA)", desc: "Google Guaranteed badge above all other results. Pay per lead, not per click. Highest trust signal in search." },
              { number: "3", name: "Google Ads", desc: "Keyword-targeted search ads for high-intent queries LSA doesn't capture. Maximum coverage of the search results page." },
            ].map((tier) => (
              <div
                key={tier.number}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  padding: "20px 24px",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#2D8A45",
                    color: "#fff",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 900,
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {tier.number}
                </span>
                <div>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "15px", color: "#0a0a0a", marginBottom: "4px" }}>
                    {tier.name}
                  </p>
                  <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.65 }}>
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: "72px", paddingBottom: "80px", background: "#fff" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="section-label">FAQ</p>
          <h2
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 3.5vw, 38px)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "40px",
            }}
          >
            Local Services Ads — Common Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "22px 0" }}>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0a0a0a", marginBottom: "8px" }}>{faq.q}</p>
                <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.55)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            Ready to Get Google Guaranteed?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "36px", lineHeight: 1.7 }}>
            Book a free strategy call. We&apos;ll walk you through the LSA verification process, give you market-specific lead cost estimates for your trade, and show you how LSA fits into a full search marketing stack.
          </p>
          <Link href="/contact" className="btn-yellow" style={{ fontSize: "14px", padding: "15px 32px" }}>
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .pain-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .results-bar { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </>
  );
}
