"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(15,15,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.25s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: "0px", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 900,
              fontSize: "20px",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
            }}
          >
            THOMAS TOWN
          </span>
          <span
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Digital
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "36px" }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: pathname === l.href ? "#FFD100" : "rgba(255,255,255,0.65)",
                transition: "color 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-yellow" style={{ padding: "10px 22px", fontSize: "12px" }}>
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#0f0f0f",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "20px 24px 28px",
          }}
          className="mobile-menu"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: "block",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: pathname === l.href ? "#FFD100" : "#fff",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-yellow" style={{ marginTop: "20px", width: "100%", justifyContent: "center" }}>
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
