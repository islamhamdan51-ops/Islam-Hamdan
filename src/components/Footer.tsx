"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { lang } = useContext(LanguageContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        paddingBlock: "2rem",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.25rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.85)",
              marginBottom: "0.2rem",
            }}
          >
            {lang === "en" ? "Islam Hamdan" : "إسلام حمدان"}
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)" }}>
            {lang === "en"
              ? "© 2026 Islam Hamdan. All rights reserved. Tripoli, Libya."
              : "© 2026 إسلام حمدان. جميع الحقوق محفوظة. طرابلس، ليبيا."}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.75rem",
          }}
        >
          <a
            href="https://www.linkedin.com/in/islam-hamdan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.5)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)")}
          >
            LinkedIn
          </a>
          <a
            href="https://gharsa.ly/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.5)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)")}
          >
            Gharsa.ly
          </a>
          <a
            href="https://www.rehlaa.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.5)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)")}
          >
            Rehlaa.org
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--teal)";
              e.currentTarget.style.borderColor = "var(--teal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
