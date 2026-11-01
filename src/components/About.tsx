"use client";

import { useContext, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Compass, Waves, Users2, Code2 } from "lucide-react";

export default function About() {
  const { lang } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const c = {
    en: {
      label: "About Me",
      title: "From Coastlines to Canopies",
      lead: "I connect scientific research, practical field coordination, and digital solutions to turn environmental initiatives into measurable, lasting impact.",
      p1: "Currently serving as Project Officer at Rehla for Sustainable Development, I oversee the planning and execution of the Gharsa Project across Libyan municipalities. I was promoted directly into this position following Season 1 field leadership, where I supervised 60+ volunteers to plant 4,589 trees and reached 1,508 students.",
      p2: "In parallel, I am pursuing an MSc in Marine Biology and Oceanography at the University of Tripoli. As founder of Blue Horizon (marine conservation) and Manarah (EdTech SaaS), I bring together environmental fieldwork, academic rigour, and digital product design.",
      pillars: [
        {
          title: "Environmental Project Delivery",
          desc: "Full-lifecycle field coordination, municipal partnerships, and strict milestone tracking.",
          icon: <Compass size={20} />,
        },
        {
          title: "Marine Science & Conservation",
          desc: "Postgraduate research, coastal ecosystem advocacy, and active open-water diving.",
          icon: <Waves size={20} />,
        },
        {
          title: "Community & Youth Leadership",
          desc: "Supervising volunteer teams, environmental workshops, and municipal youth council representation.",
          icon: <Users2 size={20} />,
        },
        {
          title: "Digital & Civic Tech",
          desc: "Designing EdTech SaaS and modern digital documentation workflows for organizational efficiency.",
          icon: <Code2 size={20} />,
        },
      ],
    },
    ar: {
      label: "نبذة عني",
      title: "من الشواطئ إلى الغابات",
      lead: "أربط بين البحث العلمي، والتنسيق الميداني العملي، والحلول الرقمية لتحويل المبادرات البيئية إلى أثر ملموس ومستدام.",
      p1: "أعمل حالياً كمسؤول مشاريع في منظمة رحلة للتنمية المستدامة، حيث أتولى تنسيق وتنفيذ مشروع غرسة البيئي عبر البلديات الليبية. تمت ترقيتي مباشرةً لهذا المنصب بعد قيادتي الميدانية في الموسم الأول، حيث أشرفت على أكثر من 60 متطوعاً لزراعة 4,589 شجرة وتوعية 1,508 طالب وطالبة.",
      p2: "بالتوازي مع ذلك، أتابع دراساتي العليا للحصول على الماجستير في علم الأحياء البحرية والأوقيانوغرافيا بجامعة طرابلس. وبصفتي مؤسساً لمبادرة 'أفق أزرق' لحماية البيئة البحرية ومنصة 'منارة' التقنية، أجمع بين العمل الميداني والرصانة الأكاديمية والابتكار الرقمي.",
      pillars: [
        {
          title: "إدارة المشاريع البيئية",
          desc: "التنسيق الميداني الشامل، والشراكات مع البلديات، وضمان الجودة وتحقيق المستهدفات.",
          icon: <Compass size={20} />,
        },
        {
          title: "علوم البحار والاستدامة",
          desc: "أبحاث الدراسات العليا، وحماية النظم الساحلية، وممارسة غوص المياه المفتوحة.",
          icon: <Waves size={20} />,
        },
        {
          title: "القيادة المجتمعية والشبابية",
          desc: "إدارة الفرق الميدانية، والورش البيئية، والتمثيل الشبابي في بلدية طرابلس المركز.",
          icon: <Users2 size={20} />,
        },
        {
          title: "الابتكار الرقمي والتقني",
          desc: "تصميم منصات SaaS التعليمية وتحديث منظومات التوثيق والمتابعة للمؤسسات.",
          icon: <Code2 size={20} />,
        },
      ],
    },
  }[lang];

  const anim = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="about"
      ref={ref}
      className="section-gap"
      style={{ background: "var(--canvas)" }}
    >
      <div className="container-wide">
        {/* Top Header */}
        <div style={{ maxWidth: "760px", marginBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
          <motion.p className="text-section-label" {...anim(0.1)} style={{ marginBottom: "0.75rem" }}>
            {c.label}
          </motion.p>
          <motion.h2 className="text-section-title" {...anim(0.2)} style={{ marginBottom: "1.25rem" }}>
            {c.title}
          </motion.h2>
          <motion.p
            {...anim(0.3)}
            style={{
              fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
              fontWeight: 500,
              color: "var(--ink-soft)",
              lineHeight: 1.55,
            }}
          >
            {c.lead}
          </motion.p>
        </div>

        {/* Narrative + Photo Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(2.5rem, 5vw, 4.5rem)",
            alignItems: "center",
            marginBottom: "clamp(3.5rem, 7vw, 5.5rem)",
          }}
          className="grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Text Paragraphs */}
          <div>
            <motion.p
              {...anim(0.35)}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--ink-soft)",
                marginBottom: "1.5rem",
              }}
            >
              {c.p1}
            </motion.p>
            <motion.p
              {...anim(0.4)}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--ink-soft)",
              }}
            >
              {c.p2}
            </motion.p>
          </div>

          {/* 2 Authentic Photos in Editorial Layout */}
          <motion.div
            {...anim(0.4)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
          >
            {/* Award Ceremony Photo */}
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                boxShadow: "0 10px 30px rgba(17,18,22,0.06)",
              }}
            >
              <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <img
                  src="/images/award-volunteer-first-place.jpg"
                  alt="Islam Hamdan receiving 1st Place Award"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ padding: "0.85rem 1rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)" }}>
                  {lang === "en" ? "1st Place Award" : "المرتبة الأولى"}
                </p>
                <p style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                  {lang === "en" ? "Rehla Honor" : "تكريم رحلة"}
                </p>
              </div>
            </div>

            {/* Field Action Photo */}
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                boxShadow: "0 10px 30px rgba(17,18,22,0.06)",
                marginTop: "1.5rem",
              }}
            >
              <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <img
                  src="/images/gharsa-field-irrigation.jpg"
                  alt="Field irrigation in Gharsa Project"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ padding: "0.85rem 1rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--teal)" }}>
                  {lang === "en" ? "Field Operations" : "عمليات الميدان"}
                </p>
                <p style={{ fontSize: "0.68rem", color: "var(--ink-muted)" }}>
                  {lang === "en" ? "Gharsa Reforestation" : "مشروع غرسة"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Bento-Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {c.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              {...anim(0.45 + idx * 0.08)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "12px",
                padding: "1.75rem",
                boxShadow: "0 2px 8px rgba(17,18,22,0.03)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--teal-border)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(20,88,78,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(17,18,22,0.03)";
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--teal-light)",
                  color: "var(--teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                {pillar.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.55,
                }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
