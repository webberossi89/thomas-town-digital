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
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
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
              color: "#0a0a0a",
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
              color: "rgba(0,0,0,0.4)",
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
                color: pathname === l.href ? "#000" : "rgba(0,0,0,0.5)",
                borderBottom: pathname === l.href ? "2px solid #FFD100" : "2px solid transparent",
                paddingBottom: "2px",
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
          <span style={{ display: "block", width: "22px", height: "2px", background: "#0a0a0a", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#0a0a0a", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#0a0a0a", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            padding: "20px 24px 28px",
          }}
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
                color: pathname === l.href ? "#000" : "rgba(0,0,0,0.7)",
                padding: "10px 0",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
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
