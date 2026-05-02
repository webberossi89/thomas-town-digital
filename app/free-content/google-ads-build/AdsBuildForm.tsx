"use client";

import { useState, type FormEvent } from "react";

const VERTICALS: { value: string; label: string }[] = [
  { value: "hvac", label: "HVAC (Heating + Air Conditioning)" },
  { value: "plumbing", label: "Plumbing" },
  { value: "roofing", label: "Roofing" },
  { value: "garage_door", label: "Garage Door" },
  { value: "electrical", label: "Electrical" },
  { value: "landscaping", label: "Landscaping + Lawn Care" },
  { value: "pest_control", label: "Pest Control" },
  { value: "painting", label: "Painting" },
  { value: "fencing", label: "Fencing" },
  { value: "concrete", label: "Concrete + Masonry" },
];

const BUDGET_OPTIONS: { value: number; label: string }[] = [
  { value: 1000, label: "Under $1,000 / month" },
  { value: 2000, label: "$1,000 – $3,000 / month" },
  { value: 4000, label: "$3,000 – $5,000 / month" },
  { value: 7500, label: "$5,000 – $10,000 / month" },
  { value: 15000, label: "$10,000 – $20,000 / month" },
  { value: 30000, label: "$20,000+ / month" },
];

interface TeaserKeyword {
  keyword: string;
  match_type: string;
  monthly_searches: number;
  suggested_cpc_high: number;
  campaign: string;
  priority: number;
}

interface TeaserResponse {
  submission_id: string;
  business_name: string;
  vertical: string;
  metro: string;
  preview: {
    top_keywords: TeaserKeyword[];
    campaign_count: number;
    biggest_budget_campaign: { name: string; monthly_usd: number; daily_usd: number };
    estimated_total_keywords: number;
  };
  next_step: string;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function AdsBuildForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [teaser, setTeaser] = useState<TeaserResponse | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const data = new FormData(e.currentTarget);
    const payload = {
      business_name: String(data.get("business_name") ?? "").trim(),
      website_url: String(data.get("website_url") ?? "").trim(),
      contact_email: String(data.get("contact_email") ?? "").trim(),
      contact_phone: String(data.get("contact_phone") ?? "").trim(),
      vertical: String(data.get("vertical") ?? "").trim(),
      primary_city: String(data.get("primary_city") ?? "").trim(),
      primary_state: String(data.get("primary_state") ?? "").trim().toUpperCase(),
      secondary_service_areas: String(data.get("secondary_service_areas") ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      monthly_budget_usd: Number(data.get("monthly_budget_usd") ?? 0),
      avg_job_ticket_usd: data.get("avg_job_ticket_usd")
        ? Number(data.get("avg_job_ticket_usd"))
        : 0,
    };

    if (!payload.business_name || !payload.contact_email || !payload.vertical || !payload.primary_city) {
      setError("Please fill in business name, email, vertical, and primary city.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/ads-build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || `Request failed (${res.status})`);
      }
      const json: TeaserResponse = await res.json();
      setTeaser(json);

      // GA4 conversion event via GTM dataLayer.
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "ads_build_request",
          form_id: "ads-build",
          vertical: payload.vertical,
          metro: `${payload.primary_city}, ${payload.primary_state}`,
          monthly_budget_usd: payload.monthly_budget_usd,
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  if (teaser) {
    return <Teaser teaser={teaser} />;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
      <Field label="Business name" required>
        <input
          name="business_name"
          required
          autoComplete="organization"
          placeholder="Acme HVAC"
          style={inputStyle}
        />
      </Field>

      <Field label="Website URL" required>
        <input
          name="website_url"
          type="url"
          required
          autoComplete="url"
          placeholder="https://acmehvac.com"
          style={inputStyle}
        />
      </Field>

      <Field label="Service vertical" required>
        <select name="vertical" required defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Choose your trade
          </option>
          {VERTICALS.map((v) => (
            <option key={v.value} value={v.value}>
              {v.label}
            </option>
          ))}
        </select>
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: "16px" }}>
        <Field label="Primary city" required>
          <input
            name="primary_city"
            required
            placeholder="Houston"
            autoComplete="address-level2"
            style={inputStyle}
          />
        </Field>
        <Field label="State" required>
          <input
            name="primary_state"
            required
            maxLength={2}
            placeholder="TX"
            autoComplete="address-level1"
            style={{ ...inputStyle, textTransform: "uppercase" }}
          />
        </Field>
      </div>

      <Field
        label="Secondary service areas"
        hint="Optional. Comma-separated. e.g. Sugar Land TX, Pearland TX"
      >
        <input
          name="secondary_service_areas"
          placeholder="Sugar Land TX, Pearland TX"
          style={inputStyle}
        />
      </Field>

      <Field label="Monthly Google Ads budget" required>
        <select name="monthly_budget_usd" required defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Pick a range
          </option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Average closed-job revenue" hint="Optional. Used to recommend conversion values.">
        <input
          name="avg_job_ticket_usd"
          type="number"
          min={0}
          inputMode="numeric"
          placeholder="850"
          style={inputStyle}
        />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <Field label="Email" required>
          <input
            name="contact_email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@business.com"
            style={inputStyle}
          />
        </Field>
        <Field label="Phone" hint="Optional">
          <input
            name="contact_phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 555-5555"
            style={inputStyle}
          />
        </Field>
      </div>

      {error ? (
        <p
          role="alert"
          style={{
            color: "#a83232",
            fontSize: "13px",
            background: "rgba(168,50,50,0.08)",
            padding: "10px 14px",
            borderRadius: "6px",
            marginTop: "4px",
          }}
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="btn-yellow"
        style={{
          marginTop: "8px",
          padding: "16px 28px",
          fontSize: "14px",
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          border: "none",
          borderRadius: "8px",
          cursor: submitting ? "not-allowed" : "pointer",
          opacity: submitting ? 0.6 : 1,
        }}
      >
        {submitting ? "Building your preview…" : "Build My Account →"}
      </button>

      <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.45)", textAlign: "center", marginTop: "4px" }}>
        We&apos;ll never sell your info. Unsubscribe in one click.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "block" }}>
      <span
        style={{
          display: "block",
          fontFamily: "'Barlow', sans-serif",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#0a0a0a",
          marginBottom: "6px",
        }}
      >
        {label}
        {required ? <span style={{ color: "#2D8A45", marginLeft: "4px" }}>*</span> : null}
      </span>
      {children}
      {hint ? (
        <span
          style={{
            display: "block",
            fontSize: "11.5px",
            color: "rgba(0,0,0,0.45)",
            marginTop: "4px",
          }}
        >
          {hint}
        </span>
      ) : null}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: "14px",
  fontFamily: "inherit",
  border: "1px solid rgba(0,0,0,0.15)",
  borderRadius: "8px",
  background: "#fff",
  color: "#0a0a0a",
};

function Teaser({ teaser }: { teaser: TeaserResponse }) {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      <div
        style={{
          background: "rgba(45,138,69,0.08)",
          border: "1px solid rgba(45,138,69,0.3)",
          borderRadius: "10px",
          padding: "16px 20px",
        }}
      >
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#2D8A45",
            margin: "0 0 6px",
          }}
        >
          Preview generated
        </p>
        <p style={{ fontSize: "14px", color: "#0a0a0a", margin: 0, lineHeight: 1.6 }}>
          {teaser.next_step}
        </p>
      </div>

      <div>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            marginBottom: "10px",
          }}
        >
          Top keywords for {teaser.business_name} ({teaser.metro})
        </p>
        <div style={{ display: "grid", gap: "8px" }}>
          {teaser.preview.top_keywords.map((k, idx) => (
            <div
              key={`${k.keyword}-${idx}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "12px",
                alignItems: "center",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                padding: "10px 14px",
              }}
            >
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "14px", color: "#0a0a0a" }}>
                  {k.keyword}
                </p>
                <p style={{ margin: "2px 0 0", fontSize: "11.5px", color: "rgba(0,0,0,0.5)" }}>
                  {k.match_type} match · {k.campaign} · ~{k.monthly_searches.toLocaleString()} searches/mo
                </p>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  color: "#2D8A45",
                  fontSize: "13px",
                }}
              >
                ${k.suggested_cpc_high.toFixed(2)} max CPC
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#0a0a0a",
          borderRadius: "10px",
          padding: "20px 22px",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#2D8A45",
            margin: "0 0 8px",
          }}
        >
          Where your budget will go
        </p>
        <p style={{ margin: "0 0 4px", fontSize: "14px", lineHeight: 1.5 }}>
          Largest campaign:{" "}
          <strong>{teaser.preview.biggest_budget_campaign.name}</strong> (~$
          {teaser.preview.biggest_budget_campaign.monthly_usd.toLocaleString()} / mo, $
          {teaser.preview.biggest_budget_campaign.daily_usd.toFixed(0)} / day).
        </p>
        <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
          {teaser.preview.campaign_count} campaigns · {teaser.preview.estimated_total_keywords} keywords total. Full
          spreadsheet emailed within 30 minutes.
        </p>
      </div>
    </div>
  );
}
