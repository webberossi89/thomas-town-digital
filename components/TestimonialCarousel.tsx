"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    initial: "H",
    quote: "Working with this crew has been key for us hitting our revenue goals. We were able to scale from $3k/month ad spend to over $15k without losing profitability.",
    name: "Hugh Salisbury",
    title: "Owner, Salisbury Solar & Electrical",
  },
  {
    initial: "A",
    quote: "Jared changed the way I approached my online advertising. We stripped everything back, changed our offer and immediately started seeing results.",
    name: "Angus Timms",
    title: "Owner, The Health Cove",
  },
  {
    initial: "J",
    quote: "The guys at Thomas Town were able to help me generate quality leads from my limited PPC budget. We had a 50% close rate on these leads which was higher than other sources.",
    name: "Jesse Malivanek",
    title: "Owner, JSE Electrical",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <div
      style={{
        background: "#0a0a0a",
        borderRadius: "16px",
        padding: "56px 48px",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontSize: "80px",
          lineHeight: 0.7,
          color: "#2D8A45",
          marginBottom: "24px",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <blockquote
        key={active}
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(20px, 3vw, 28px)",
          lineHeight: 1.4,
          color: "#fff",
          marginBottom: "36px",
          fontStyle: "normal",
          animation: "fadeIn 0.5s ease",
        }}
      >
        {t.quote}
      </blockquote>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#2D8A45",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "18px",
              color: "#fff",
              flexShrink: 0,
            }}
          >
            {t.initial}
          </div>
          <div key={active} style={{ animation: "fadeIn 0.5s ease" }}>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: "15px", color: "#fff" }}>
              {t.name}
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
              {t.title}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                borderRadius: "100px",
                background: i === active ? "#2D8A45" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
