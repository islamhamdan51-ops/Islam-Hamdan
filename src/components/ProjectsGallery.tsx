"use client";

import { useContext, useRef, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Trees, Waves, Sparkles, BookOpen } from "lucide-react";

type ProjectItem = {
  id: string;
  category: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  desc: { en: string; ar: string };
  image: string;
  href?: string;
  metrics: { en: string; ar: string }[];
  tagColor: "teal" | "amber" | "neutral";
};

const projectData: ProjectItem[] = [
  {
    id: "gharsa",
    category: { en: "Environmental Project Coordination", ar: "تنسيق المشاريع البيئية" },
    title: { en: "Gharsa Project", ar: "مشروع غرسة" },
    subtitle: {
      en: "Multi-Municipality Reforestation & Environmental Awareness",
      ar: "مبادرة التشجير والتوعية البيئية عبر البلديات الليبية",
    },
    desc: {
      en: "Supervised field operations and volunteer coordination across 11 Libyan municipalities in Season 1, resulting in 4,589 planted trees and 1,508 students educated, with 6,000+ seedlings tracked via QR records.",
      ar: "الإشراف على العمليات الميدانية وتنسيق المتطوعين عبر 11 بلدية ليبية في الموسم الأول، مما أسفر عن زراعة 4,589 شجرة وتوعية 1,508 طالب وطالبة، وتوثيق أكثر من 6,000 شتلة بنظام QR.",
    },
    image: "/images/gharsa-students-planting.jpg",
    href: "https://gharsa.ly/",
    metrics: [
      { en: "4,589 Trees Planted", ar: "4,589 شجرة مزروعة" },
      { en: "11 Municipalities", ar: "11 بلدية" },
      { en: "1,508 Students Reached", ar: "1,508 طالب وطالبة" },
    ],
    tagColor: "teal",
  },
  {
    id: "blue-horizon",
    category: { en: "Marine Conservation & Advocacy", ar: "حفظ البيئة البحرية والمناصرة" },
    title: { en: "Blue Horizon", ar: "مبادرة أفق أزرق" },
    subtitle: {
      en: "Mediterranean Coastal Ecosystem Conservation",
      ar: "حماية النظم البيئية لساحل البحر الأبيض المتوسط",
    },
    desc: {
      en: "Community-driven marine sustainability initiative founded to protect Libya's coastal biodiversity. Mobilizes volunteer divers, freedivers, and builds direct alliances with local artisanal fishermen.",
      ar: "مبادرة مجتمعية للاستدامة البحرية تأسست لحماية التنوع الحيوي للسواحل الليبية. تحشد المتطوعين والغواصين، وتبني شراكات مباشرة مع مجتمعات الصيادين المحليين.",
    },
    image: "/images/blue-horizon-logo.png",
    metrics: [
      { en: "Coastal Cleanups", ar: "تنظيف السواحل" },
      { en: "Diver Network", ar: "شبكة الغواصين" },
      { en: "Fishermen Alliances", ar: "شراكات الصيادين" },
    ],
    tagColor: "teal",
  },
  {
    id: "rehla",
    category: { en: "Sustainable Development", ar: "التنمية المستدامة" },
    title: { en: "Rehla Programs", ar: "برامج رحلة للتنمية المستدامة" },
    subtitle: {
      en: "Full-Time Project Officer & Operational Delivery",
      ar: "إدارة وتنسيق البرامج الميدانية المستدامة",
    },
    desc: {
      en: "Managing end-to-end program delivery, field timelines, quality standards, and cross-functional collaboration between local municipal councils and community stakeholders.",
      ar: "إدارة التخطيط والتنفيذ الميداني الشامل، ومتابعة الجداول الزمنية، ومعايير الجودة، والتنسيق متعدد الأطراف مع المجالس البلدية والشركاء المحليين.",
    },
    image: "/images/rehla-volunteers-team.jpg",
    href: "https://www.rehlaa.org/",
    metrics: [
      { en: "Project Officer Role", ar: "مسؤول مشاريع رسمي" },
      { en: "60+ Volunteers Led", ar: "قيادة +60 متطوعاً" },
      { en: "1st Place Award", ar: "جائزة التميز الأولى" },
    ],
    tagColor: "amber",
  },
  {
    id: "manarah",
    category: { en: "Civic Tech & EdTech SaaS", ar: "الابتكار الرقمي والتقنية التعليمية" },
    title: { en: "Manarah Platform", ar: "منصة مَنارة" },
    subtitle: {
      en: "Cloud SaaS for Quranic Circles Administration",
      ar: "منصة سحابية لإدارة ومتابعة حلقات القرآن الكريم",
    },
    desc: {
      en: "Conceived, designed, and launched a specialized cloud platform to digitize attendance, student progress tracking, and administrative reporting for educational circles.",
      ar: "ابتكار وتصميم وإطلاق منصة سحابية متخصصة لرقمنة الحضور ومتابعة تقدم الطلاب وإعداد التقارير الإدارية للحلقات والمراكز التعليمية.",
    },
    image: "/images/academic-uot-meeting.jpg",
    metrics: [
      { en: "Founder & Lead", ar: "المؤسس ومطور الفكرة" },
      { en: "Cloud Platform", ar: "منصة سحابية" },
      { en: "Process Modernization", ar: "تحديث العمليات" },
    ],
    tagColor: "neutral",
  },
];

export default function ProjectsGallery() {
  const { lang } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      ref={ref}
      className="section-gap"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 6vw, 4.5rem)",
          }}
        >
          <div style={{ maxWidth: "620px" }}>
            <p className="text-section-label" style={{ marginBottom: "0.75rem" }}>
              {lang === "en" ? "Selected Work" : "أبرز الأعمال والمبادرات"}
            </p>
            <h2 className="text-section-title">
              {lang === "en"
                ? "Initiatives That Drive Real Change"
                : "مبادرات ومشاريع تصنع أثراً حقيقياً"}
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--ink-muted)",
              maxWidth: "380px",
              lineHeight: 1.55,
            }}
          >
            {lang === "en"
              ? "From Mediterranean coastal waters to city canopies and cloud platforms."
              : "من مياه البحر المتوسط إلى أشجار المدن والمنصات السحابية."}
          </p>
        </div>

        {/* 2x2 Grid of Featured Case Studies */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 540px), 1fr))",
            gap: "clamp(1.75rem, 3.5vw, 2.5rem)",
          }}
        >
          {projectData.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              lang={lang}
              inView={inView}
              shouldReduce={!!shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  lang,
  inView,
  shouldReduce,
}: {
  project: ProjectItem;
  index: number;
  lang: "en" | "ar";
  inView: boolean;
  shouldReduce: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--canvas)",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid var(--line)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 18px 45px rgba(17, 18, 22, 0.08)"
          : "0 2px 8px rgba(17, 18, 22, 0.02)",
      }}
    >
      {/* Visual Canvas */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/10",
          position: "relative",
          overflow: "hidden",
          background: "var(--surface-alt)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={project.image}
          alt={project.title[lang]}
          style={{
            width: "100%",
            height: "100%",
            objectFit: project.id === "blue-horizon" ? "contain" : "cover",
            padding: project.id === "blue-horizon" ? "2.5rem" : 0,
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
          onError={(e) => {
            e.currentTarget.src = "/images/islam-portrait.png";
          }}
        />

        {/* Category Tag Overlay */}
        <div
          style={{
            position: "absolute",
            top: "1.25rem",
            left: lang === "ar" ? "auto" : "1.25rem",
            right: lang === "ar" ? "1.25rem" : "auto",
          }}
        >
          <span
            className={
              project.tagColor === "teal"
                ? "tag-teal"
                : project.tagColor === "amber"
                ? "tag-amber"
                : "tag-neutral"
            }
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.94)",
            }}
          >
            {project.category[lang]}
          </span>
        </div>

        {/* External Link Pill (if link exists) */}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title[lang]}`}
            style={{
              position: "absolute",
              top: "1.25rem",
              right: lang === "ar" ? "auto" : "1.25rem",
              left: lang === "ar" ? "1.25rem" : "auto",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.95)",
              color: "var(--ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(17,18,22,0.1)",
              transition: "transform 0.2s, background 0.2s, color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--teal)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            <ArrowUpRight size={18} />
          </a>
        )}
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: "1.75rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div style={{ marginBottom: "0.85rem" }}>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "var(--ink)",
              letterSpacing: "-0.015em",
              marginBottom: "0.25rem",
            }}
          >
            {project.title[lang]}
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--teal)",
            }}
          >
            {project.subtitle[lang]}
          </p>
        </div>

        <p
          style={{
            fontSize: "0.92rem",
            color: "var(--ink-soft)",
            lineHeight: 1.65,
            marginBottom: "1.5rem",
            flexGrow: 1,
          }}
        >
          {project.desc[lang]}
        </p>

        {/* Metrics Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--line)",
          }}
        >
          {project.metrics.map((m, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.76rem",
                fontWeight: 600,
                color: "var(--ink-soft)",
                background: "var(--surface)",
                padding: "0.25rem 0.65rem",
                borderRadius: "6px",
                border: "1px solid var(--line)",
              }}
            >
              {m[lang]}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
