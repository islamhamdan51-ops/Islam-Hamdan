"use client";

import { useContext, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const capabilities = {
  en: [
    {
      category: "Project & Operations",
      items: [
        "Environmental Project Management",
        "Field Operations & Supervision",
        "Risk Mitigation & Problem-Solving",
        "Process Optimization",
        "Milestones & Quality Assurance",
      ],
    },
    {
      category: "Marine & Field Science",
      items: [
        "Marine Ecosystem Conservation",
        "Fish Stock Assessment Modeling",
        "Mediterranean Biodiversity Surveys",
        "Active Open Water Diving",
        "Zero Carbon & Sustainability (3ZERO)",
      ],
    },
    {
      category: "Stakeholder & Civic Leadership",
      items: [
        "Municipal Partnerships",
        "Volunteer Mobilization (60+ Led)",
        "Youth Leadership Representation",
        "Community Outreach & Workshops",
        "Multi-Party Conflict Resolution",
      ],
    },
    {
      category: "Digital & Technical",
      items: [
        "EdTech SaaS Product Architecture",
        "QR Tree Record Coordination (6,000+)",
        "Structured Research Documentation",
        "Administrative Systems Modernization",
        "Client Deliverable Lifecycle Management",
      ],
    },
  ],
  ar: [
    {
      category: "إدارة المشاريع والعمليات",
      items: [
        "إدارة مشاريع البيئة والتنمية المستدامة",
        "العمليات الميدانية والإشراف",
        "إدارة المخاطر وحل المشكلات",
        "تحسين الإجراءات وسير العمل",
        "متابعة المعالم وضمان الجودة",
      ],
    },
    {
      category: "علوم البحار والميدان",
      items: [
        "حماية النظم البيئية البحرية",
        "نمذجة تقييم المخزون السمكي",
        "مسوح التنوع الحيوي للبحر المتوسط",
        "ممارسة غوص المياه المفتوحة",
        "أهداف الصفر الكربوني والاستدامة (3ZERO)",
      ],
    },
    {
      category: "المشاركة المجتمعية والقيادة",
      items: [
        "الشراكات مع المجالس البلدية",
        "حشد وإدارة المتطوعين (+60 متطوعاً)",
        "التمثيل القيادي الشبابي المحلي",
        "الورش الميدانية والتوعية البيئية",
        "التنسيق متعدد الأطراف",
      ],
    },
    {
      category: "التقنية والابتكار الرقمي",
      items: [
        "بناء وتصميم منصات SaaS التعليمية",
        "تنسيق منظومة شتلات QR (+6,000 شتلة)",
        "التوثيق البحثي والأكاديمي المنظم",
        "تحديث وميكنة الأنظمة الإدارية",
        "إدارة دورة حياة مخرجات العملاء",
      ],
    },
  ],
};

export default function SkillsAndLanguages() {
  const { lang } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const domains = capabilities[lang];

  return (
    <section
      ref={ref}
      className="section-gap"
      style={{ background: "var(--canvas)" }}
    >
      <div className="container-wide">
        <div style={{ maxWidth: "600px", marginBottom: "clamp(2.5rem, 5vw, 3.5rem)" }}>
          <p className="text-section-label" style={{ marginBottom: "0.75rem" }}>
            {lang === "en" ? "Domain Mastery" : "مجالات التخصص والكفاءات"}
          </p>
          <h2 className="text-section-title">
            {lang === "en" ? "Core Competencies" : "القدرات والخبرات الأساسية"}
          </h2>
        </div>

        {/* 4-Domain Modern Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {domains.map((dom, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                padding: "1.75rem",
                boxShadow: "0 2px 6px rgba(17,18,22,0.02)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--teal)",
                  letterSpacing: "0.01em",
                  marginBottom: "1.25rem",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: "0.75rem",
                }}
              >
                {dom.category}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {dom.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--ink-soft)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      lineHeight: 1.45,
                    }}
                  >
                    <Check size={15} color="var(--teal)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
