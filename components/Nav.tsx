"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const verticals = [
  { href: "/roofing", label: "Roofing Marketing" },
  { href: "/hvac", label: "HVAC Marketing" },
  { href: "/plumbing", label: "Plumbing Marketing" },
];

const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/free-content", label: "Free Content" },
];

const links = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const isServicesActive =
    pathname === "/services" ||
    verticals.some((v) => pathname === v.href);

  const isResourcesActive = resources.some((r) => pathname === r.href);

  const navLinkStyle = (active: boolean) => ({
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 600,
    fontSize: "13px",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: active ? "#000" : "rgba(0,0,0,0.5)",
    borderBottom: active ? "2px solid #2D8A45" : "2px solid transparent",
    paddingBottom: "2px",
    transition: "color 0.15s",
    cursor: "pointer",
  });

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
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logos/TT-Logo_01-Black.png"
            alt="Thomas Town Digital"
            height={36}
            width={160}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "36px" }}
          className="desktop-nav"
        >
          {/* Services dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span style={{ ...navLinkStyle(isServicesActive), display: "flex", alignItems: "center", gap: "4px" }}>
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                style={{
                  transition: "transform 0.15s",
                  transform: dropdownOpen ? "rotate(180deg)" : "none",
                  opacity: 0.5,
                  marginTop: "1px",
                }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-16px",
                  paddingTop: "14px",
                  minWidth: "220px",
                  zIndex: 200,
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    padding: "8px 0",
                  }}
                >
                  {/* All Services */}
                  <Link
                    href="/services"
                    style={{
                      display: "block",
                      padding: "10px 18px",
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 700,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: pathname === "/services" ? "#2D8A45" : "rgba(0,0,0,0.55)",
                    }}
                    className="dropdown-link"
                  >
                    All Services →
                  </Link>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", margin: "4px 0" }} />

                  {/* Verticals */}
                  {verticals.map((v) => (
                    <Link
                      key={v.href}
                      href={v.href}
                      style={{
                        display: "block",
                        padding: "10px 18px",
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 700,
                        fontSize: "13px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: pathname === v.href ? "#2D8A45" : "#0a0a0a",
                      }}
                      className="dropdown-link"
                    >
                      {v.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* About + Pricing links */}
          {links.filter(l => l.href !== "/contact").map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={navLinkStyle(pathname === l.href)}
            >
              {l.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <span style={{ ...navLinkStyle(isResourcesActive), display: "flex", alignItems: "center", gap: "4px" }}>
              Resources
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                style={{
                  transition: "transform 0.15s",
                  transform: resourcesOpen ? "rotate(180deg)" : "none",
                  opacity: 0.5,
                  marginTop: "1px",
                }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            {resourcesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-16px",
                  paddingTop: "14px",
                  minWidth: "180px",
                  zIndex: 200,
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    padding: "8px 0",
                  }}
                >
                {resources.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    style={{
                      display: "block",
                      padding: "10px 18px",
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: pathname === r.href ? "#2D8A45" : "#0a0a0a",
                    }}
                    className="dropdown-link"
                  >
                    {r.label}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

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
          {/* Services header */}
          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: isServicesActive ? "#000" : "rgba(0,0,0,0.7)",
              padding: "10px 0",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <Link href="/services">Services</Link>
          </div>

          {/* Vertical sub-links */}
          {verticals.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              style={{
                display: "block",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: pathname === v.href ? "#2D8A45" : "rgba(0,0,0,0.5)",
                padding: "8px 0 8px 20px",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              → {v.label}
            </Link>
          ))}

          {/* Resources header */}
          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: isResourcesActive ? "#000" : "rgba(0,0,0,0.7)",
              padding: "10px 0",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            Resources
          </div>

          {/* Resources sub-links */}
          {resources.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              style={{
                display: "block",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: pathname === r.href ? "#2D8A45" : "rgba(0,0,0,0.5)",
                padding: "8px 0 8px 20px",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              → {r.label}
            </Link>
          ))}

          {/* Other links */}
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
        .dropdown-link:hover { color: #2D8A45 !important; background: rgba(45,138,69,0.05); }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
