"use client";

import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";

const navItems = {
  en: [
    { label: "Work",       href: "#projects" },
    { label: "Impact",     href: "#impact" },
    { label: "About",      href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials",href: "#credentials" },
    { label: "Contact",    href: "#contact" },
  ],
  ar: [
    { label: "الأعمال",    href: "#projects" },
    { label: "الأثر",      href: "#impact" },
    { label: "عني",        href: "#about" },
    { label: "المسيرة",    href: "#experience" },
    { label: "المؤهلات",   href: "#credentials" },
    { label: "تواصل",      href: "#contact" },
  ],
};

export default function Navbar() {
  const { lang, toggleLang } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = navItems[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled ? "rgba(251, 249, 245, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo / Monogram */}
          <a
            href="#top"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              color: "var(--ink)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "var(--teal)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "0.85rem",
                letterSpacing: "-0.03em",
                boxShadow: "0 2px 8px rgba(20, 88, 78, 0.25)",
              }}
            >
              IH
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                {lang === "en" ? "Islam Hamdan" : "إسلام حمدان"}
              </p>
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--ink-muted)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {lang === "en" ? "Tripoli, Libya" : "طرابلس، ليبيا"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: "2.25rem",
            }}
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: "var(--ink-soft)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-soft)")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
            }}
          >
            {/* Language toggle button */}
            <button
              onClick={toggleLang}
              aria-label="Switch Language"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 0.85rem",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "99px",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--ink)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--teal)";
                e.currentTarget.style.color = "var(--teal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              <Globe size={14} />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Direct contact CTA (desktop) */}
            <a
              href="#contact"
              className="btn-primary hidden sm:inline-flex"
              style={{
                padding: "0.55rem 1.25rem",
                fontSize: "0.82rem",
              }}
            >
              <span>{lang === "en" ? "Let's Talk" : "تواصل معي"}</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile menu toggle */}
            <button
              className="flex md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                padding: "0.5rem",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "8px",
                color: "var(--ink)",
                cursor: "pointer",
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(251, 249, 245, 0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            gap: "1.75rem",
          }}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "var(--ink)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleLang();
              setMobileOpen(false);
            }}
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "99px",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Globe size={16} />
            <span>{lang === "en" ? "التبديل إلى العربية" : "Switch to English"}</span>
          </button>
        </div>
      )}
    </>
  );
}
