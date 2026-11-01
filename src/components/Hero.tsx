"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight, Award, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const { lang } = useContext(LanguageContext);
  const shouldReduceMotion = useReducedMotion();

  const c = {
    en: {
      status: "Available for environmental & sustainable development projects",
      role: "Environmental & Sustainable Development Project Officer · Marine Science Postgraduate",
      greeting: "Hello, I'm",
      name: "Islam Hamdan",
      nameAr: "إسلام حمدان",
      tagline: "Connecting Field Science, Environmental Action & Civic Innovation",
      summary:
        "Leading high-impact environmental restoration across Libya, from Mediterranean marine conservation to multi-municipality reforestation programs.",
      awardBadge: "Outstanding Volunteer Award — 1st Place (Gharsa Project)",
      awardSub: "Rehla for Sustainable Development",
      statNumber: "4,589",
      statLabel: "Trees planted across 11 Libyan municipalities in Season 1",
      ctaProjects: "Explore Selected Work",
      ctaCv: "Download CV",
      location: "Tripoli, Libya",
    },
    ar: {
      status: "متاح لمشاريع البيئة والتنمية المستدامة والمبادرات المجتمعية",
      role: "مسؤول مشاريع البيئة والتنمية المستدامة · طالب دراسات عليا في علوم البحار",
      greeting: "أهلاً بك، أنا",
      name: "إسلام حمدان",
      nameAr: "Islam Hamdan",
      tagline: "الربط بين العلم الميداني والعمل البيئي والابتكار المجتمعي",
      summary:
        "قيادة مشاريع بيئية ذات أثر ملموس عبر ليبيا، من حماية البيئة البحرية للبحر الأبيض المتوسط إلى مبادرات التشجير الكبرى متعددة البلديات.",
      awardBadge: "جائزة المتطوع المتميز — المرتبة الأولى (مشروع غرسة)",
      awardSub: "رحلة للتنمية المستدامة",
      statNumber: "4,589",
      statLabel: "شجرة مزروعة عبر 11 بلدية ليبية في الموسم الأول",
      ctaProjects: "استعراض أبرز الأعمال",
      ctaCv: "تحميل السيرة الذاتية",
      location: "طرابلس، ليبيا",
    },
  }[lang];

  const anim = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="top"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "90px",
        paddingBottom: "3rem",
        position: "relative",
        background: "var(--canvas)",
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "center",
          }}
          className="grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]"
        >
          {/* ── Left Column: Editorial Bio ── */}
          <div style={{ paddingBlock: "clamp(1.5rem, 4vh, 3rem)" }}>
            {/* Live Availability Status */}
            <motion.div
              {...anim(0.1)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.35rem 0.95rem",
                borderRadius: "99px",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                marginBottom: "1.75rem",
                boxShadow: "0 1px 3px rgba(17,18,22,0.03)",
              }}
            >
              <span className="pulse-dot" />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--ink-soft)",
                }}
              >
                {c.status}
              </span>
            </motion.div>

            {/* Display Name */}
            <motion.h1
              {...anim(0.2)}
              className="text-display"
              style={{ marginBottom: "0.5rem" }}
            >
              {c.name}
            </motion.h1>

            {/* Sub-headline / Tagline */}
            <motion.p
              {...anim(0.3)}
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                fontWeight: 600,
                color: "var(--teal)",
                lineHeight: 1.35,
                letterSpacing: "-0.015em",
                marginBottom: "1.5rem",
              }}
            >
              {c.tagline}
            </motion.p>

            {/* Concise Editorial Summary */}
            <motion.p
              {...anim(0.4)}
              className="text-hero-sub"
              style={{
                maxWidth: "540px",
                marginBottom: "2rem",
              }}
            >
              {c.summary}
            </motion.p>

            {/* Location & Key Identity Tags */}
            <motion.div
              {...anim(0.45)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.82rem",
                  color: "var(--ink-muted)",
                  fontWeight: 500,
                }}
              >
                <MapPin size={15} color="var(--teal)" />
                <span>{c.location}</span>
              </div>
              <span style={{ color: "var(--line-strong)" }}>•</span>
              <span className="tag-teal">
                {lang === "en" ? "Rehla Project Officer" : "مسؤول مشاريع رحلة"}
              </span>
              <span className="tag-neutral">
                {lang === "en" ? "MSc Marine Biology (In Progress)" : "ماجستير علم الأحياء البحرية"}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...anim(0.5)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>{c.ctaProjects}</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/cv/Islam_Hamdan_CV.pdf"
                download
                className="btn-secondary"
              >
                <Download size={16} />
                <span>{c.ctaCv}</span>
              </a>
            </motion.div>
          </div>

          {/* ── Right Column: Portrait & Visual Focus ── */}
          <motion.div
            {...anim(0.35)}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Main Portrait Frame */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "420px",
                borderRadius: "16px",
                overflow: "hidden",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                boxShadow: "0 20px 60px rgba(17, 18, 22, 0.08)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  position: "relative",
                  overflow: "hidden",
                  background: "var(--surface-alt)",
                }}
              >
                <img
                  src="/images/islam-portrait.png"
                  alt="Islam Hamdan — إسلام حمدان"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                  }}
                />
              </div>

              {/* Bottom Caption Inside Card */}
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  background: "var(--surface)",
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                      }}
                    >
                      {lang === "en" ? "Islam Hamdan" : "إسلام حمدان"}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--ink-muted)",
                      }}
                    >
                      {lang === "en"
                        ? "Environmental & Sustainable Development"
                        : "البيئة والتنمية المستدامة"}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "var(--teal-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--teal)",
                    }}
                  >
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Award Pill (Clint Balcom style highlight) */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9, y: 15 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-1.25rem",
                left: lang === "ar" ? "auto" : "-1rem",
                right: lang === "ar" ? "-1rem" : "auto",
                background: "var(--surface)",
                border: "1px solid var(--amber-border)",
                borderRadius: "12px",
                padding: "0.9rem 1.25rem",
                boxShadow: "0 10px 30px rgba(189, 119, 43, 0.12)",
                maxWidth: "280px",
                zIndex: 2,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "var(--amber-light)",
                    color: "var(--amber)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Award size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      lineHeight: 1.25,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {c.awardBadge}
                  </p>
                  <p style={{ fontSize: "0.7rem", color: "var(--ink-muted)" }}>
                    {c.awardSub}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle scroll down indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <a
            href="#impact"
            aria-label="Scroll to Impact"
            style={{
              color: "var(--ink-faint)",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-faint)")}
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
