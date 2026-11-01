"use client";

import { useContext, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, Waves, Globe, BookOpen } from "lucide-react";

export default function EducationAndCredentials() {
  const { lang } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const c = {
    en: {
      label: "Qualifications & Foundation",
      title: "Academic Background & Certifications",
      degreesTitle: "Higher Education",
      certsTitle: "Verified Certifications & Training",
      langsTitle: "Language Proficiencies",
      degrees: [
        {
          period: "Mar 2025 – Present (In Progress)",
          degree: "Master of Science (MSc) in Marine Biology & Oceanography",
          inst: "University of Tripoli — Faculty of Science",
          location: "Tripoli, Libya",
          note: "Advanced oceanographic studies and marine research methodology. Thesis topic kept confidential by author decision.",
          status: "In Progress",
        },
        {
          period: "Completed Nov 2024",
          degree: "Bachelor of Science (BSc) in Zoology (Marine Science Track)",
          inst: "University of Tripoli — Faculty of Science",
          location: "Tripoli, Libya",
          note: "Capstone Research: Assessed marine species biodiversity across local fish markets as an indicator model for fish stock assessment and Mediterranean ecosystem health.",
          status: "Graduated",
        },
      ],
      certs: [
        { title: "Certificate of Appreciation (Local Youth Camp)", org: "Local Youth Council — Tripoli Center Municipality", year: "2026" },
        { title: "Leadership Skills in the Work Environment", org: "Professional Training", year: "Feb 2026" },
        { title: "Risk Management & Debate Skills", org: "Professional Training", year: "Feb 2026" },
        { title: "Creative Thinking & Problem-Solving", org: "Professional Training", year: "Jan 2026" },
        { title: "3ZERO Objectives (Zero Carbon & Sustainability)", org: "Sustainability Program", year: "Jan 2026" },
        { title: "Radiation Protection & Measurements", org: "Radiation Measurements & Training Center", year: "Nov 2025" },
        { title: "Open Water Diver Qualification", org: "Professional Diving Accreditation", year: "Active" },
        { title: "Marine Biology & General Biology", org: "Coursera & edX Certifications", year: "2018" },
      ],
      languages: [
        { name: "Arabic", level: "Native Proficiency", badge: "اللغة الأم", pct: 100 },
        { name: "English", level: "Professional Working Proficiency", badge: "كفاءة مهنية عاملة", pct: 80 },
        { name: "French", level: "Elementary Proficiency", badge: "كفاءة أولية", pct: 35 },
      ],
    },
    ar: {
      label: "المؤهلات والأساس العلمي",
      title: "الخلفية الأكاديمية والشهادات المهنية",
      degreesTitle: "التعليم العالي",
      certsTitle: "الشهادات والبرامج التدريبية المعتمدة",
      langsTitle: "اللغات والكفاءة اللغوية",
      degrees: [
        {
          period: "مارس 2025 – حتى الآن (قيد الدراسة)",
          degree: "ماجستير العلوم (MSc) في علم الأحياء البحرية والأوقيانوغرافيا",
          inst: "جامعة طرابلس — كلية العلوم",
          location: "طرابلس، ليبيا",
          note: "دراسات وبحوث متقدمة في علوم المحيطات والبيئة البحرية. موضوع الرسالة محفوظ بقرار من الباحث.",
          status: "قيد الدراسة",
        },
        {
          period: "تخرج نوفمبر 2024",
          degree: "بكالوريوس العلوم (BSc) في علم الحيوان (مسار علوم البحار)",
          inst: "جامعة طرابلس — كلية العلوم",
          location: "طرابلس، ليبيا",
          note: "بحث التخرج: تقييم التنوع البيولوجي للأنواع البحرية في أسواق الأسماك المحلية كنموذج استدلالي لتقييم المخزون السمكي وصحة النظام البيئي للبحر الأبيض المتوسط.",
          status: "مُنجز",
        },
      ],
      certs: [
        { title: "شهادة تقدير (مخيم القيادة الشبابية المحلية)", org: "المجلس المحلي للشباب — بلدية طرابلس المركز", year: "2026" },
        { title: "مهارات القيادة في بيئة العمل", org: "تدريب مهني معتمد", year: "فبراير 2026" },
        { title: "إدارة المخاطر ومهارات المناظرة", org: "تدريب مهني معتمد", year: "فبراير 2026" },
        { title: "التفكير الإبداعي وحل المشكلات", org: "تدريب مهني معتمد", year: "يناير 2026" },
        { title: "برنامج أهداف 3ZERO (الصفر الكربوني والاستدامة)", org: "برنامج استدامة معتمد", year: "يناير 2026" },
        { title: "الحماية من الإشعاع والقياسات الإشعاعية", org: "مركز قياسات وتدريب الإشعاع", year: "نوفمبر 2025" },
        { title: "مؤهل غواص مياه مفتوحة (Open Water Diver)", org: "رخصة غوص دولية معتمدة", year: "ساري وممارس" },
        { title: "علم الأحياء البحرية والبيولوجيا العامة", org: "شهادات Coursera و edX", year: "2018" },
      ],
      languages: [
        { name: "العربية", level: "اللغة الأم", badge: "Native", pct: 100 },
        { name: "الإنجليزية", level: "كفاءة مهنية عاملة", badge: "Professional Working Proficiency", pct: 80 },
        { name: "الفرنسية", level: "كفاءة أولية", badge: "Elementary Proficiency", pct: 35 },
      ],
    },
  }[lang];

  const anim = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay },
        };

  return (
    <section
      id="credentials"
      ref={ref}
      className="section-gap"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-wide">
        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
          <motion.p className="text-section-label" {...anim(0.1)} style={{ marginBottom: "0.75rem" }}>
            {c.label}
          </motion.p>
          <motion.h2 className="text-section-title" {...anim(0.2)}>
            {c.title}
          </motion.h2>
        </div>

        {/* 2-Column Main Layout: Left: Degrees & Languages / Right: Certifications */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* ── Left Column: Degrees & Languages ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Degrees Group */}
            <div>
              <p
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <GraduationCap size={18} />
                <span>{c.degreesTitle}</span>
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {c.degrees.map((deg, i) => (
                  <motion.div
                    key={i}
                    {...anim(0.25 + i * 0.1)}
                    style={{
                      background: "var(--canvas)",
                      border: "1px solid var(--line)",
                      borderRadius: "14px",
                      padding: "1.75rem",
                      boxShadow: "0 2px 6px rgba(17,18,22,0.02)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span className="tag-teal" style={{ fontSize: "0.72rem" }}>
                        {deg.period}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "var(--ink)",
                        lineHeight: 1.3,
                        marginBottom: "0.35rem",
                      }}
                    >
                      {deg.degree}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--teal)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {deg.inst} · {deg.location}
                    </p>

                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.55,
                      }}
                    >
                      {deg.note}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Group */}
            <div>
              <p
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Globe size={18} />
                <span>{c.langsTitle}</span>
              </p>

              <div
                style={{
                  background: "var(--canvas)",
                  border: "1px solid var(--line)",
                  borderRadius: "14px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {c.languages.map((l, i) => (
                  <div key={i}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.45rem",
                      }}
                    >
                      <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)" }}>
                        {l.name}
                      </span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--teal)" }}>
                        {l.level}
                      </span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: "5px",
                        background: "var(--line)",
                        borderRadius: "99px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${l.pct}%`,
                          height: "100%",
                          background: "var(--teal)",
                          borderRadius: "99px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Certified Training & Programs ── */}
          <div>
            <p
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Award size={18} />
              <span>{c.certsTitle}</span>
            </p>

            <div
              style={{
                background: "var(--canvas)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {c.certs.map((cert, i) => (
                <motion.div
                  key={i}
                  {...anim(0.3 + i * 0.05)}
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--amber-border)";
                    e.currentTarget.style.transform = "translateX(3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {cert.title}
                    </h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}>
                      {cert.org}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--amber)",
                      background: "var(--amber-light)",
                      padding: "0.2rem 0.55rem",
                      borderRadius: "6px",
                      flexShrink: 0,
                    }}
                  >
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
