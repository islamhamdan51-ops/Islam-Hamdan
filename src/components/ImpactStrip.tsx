"use client";

import { useContext, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useInView, useReducedMotion } from "framer-motion";

const metrics = {
  en: [
    {
      value: "4,589",
      label: "Trees Planted",
      sub: "Season 1 · 11 Libyan Municipalities",
    },
    {
      value: "1,508",
      label: "Students Educated",
      sub: "Hands-on environmental workshops",
    },
    {
      value: "60+",
      label: "Volunteers Coordinated",
      sub: "Field supervision & on-site teams",
    },
    {
      value: "100+",
      label: "Hours of Service",
      sub: "Verified volunteer fieldwork record",
    },
    {
      value: "1st",
      label: "Place Award",
      sub: "Outstanding Volunteer Award (Rehla)",
    },
  ],
  ar: [
    {
      value: "4,589",
      label: "شجرة مزروعة",
      sub: "الموسم الأول · 11 بلدية ليبية",
    },
    {
      value: "1,508",
      label: "طالب وطالبة",
      sub: "ورش توعية بيئية ميدانية",
    },
    {
      value: "+60",
      label: "متطوعاً قُدتهم",
      sub: "إشراف ميداني وتنسيق فرق",
    },
    {
      value: "+100",
      label: "ساعة تطوع",
      sub: "سجل خدمة ميدانية موثقة",
    },
    {
      value: "الأولى",
      label: "المرتبة وجائزة التميز",
      sub: "جائزة المتطوع المتميز (رحلة)",
    },
  ],
};

export default function ImpactStrip() {
  const { lang } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const list = metrics[lang];

  return (
    <section
      id="impact"
      ref={ref}
      style={{
        background: "var(--ink)",
        color: "#FFFFFF",
        paddingBlock: "clamp(4.5rem, 8vw, 6.5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-wide">
        <div style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--teal-border)",
              marginBottom: "0.5rem",
            }}
          >
            {lang === "en" ? "Field Track Record" : "سجل الأثر الميداني"}
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            {lang === "en"
              ? "Measurable Environmental & Community Impact"
              : "أثر بيئي ومجتمعي ملموس بالأرقام"}
          </h2>
        </div>

        {/* 5-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.14)",
                paddingTop: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2.75rem, 5vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  marginBottom: "0.6rem",
                }}
              >
                {item.value}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 0.92)",
                  marginBottom: "0.3rem",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255, 255, 255, 0.55)",
                  lineHeight: 1.45,
                }}
              >
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
