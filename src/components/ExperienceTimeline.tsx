"use client";

import { useContext, useState, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";

type RoleCategory = "all" | "environmental" | "initiatives" | "documentation";

type RoleItem = {
  id: string;
  category: "environmental" | "initiatives" | "documentation";
  period: { en: string; ar: string };
  role: { en: string; ar: string };
  org: { en: string; ar: string };
  location: { en: string; ar: string };
  badge?: { en: string; ar: string };
  bullets: { en: string[]; ar: string[] };
};

const experienceList: RoleItem[] = [
  {
    id: "rehla-po",
    category: "environmental",
    period: { en: "Jul 2026 – Present", ar: "يوليو 2026 – حتى الآن" },
    role: { en: "Project Officer — Gharsa Project", ar: "مسؤول مشاريع — مشروع غرسة" },
    org: { en: "Rehla for Sustainable Development", ar: "رحلة للتنمية المستدامة" },
    location: { en: "Tripoli, Libya (Full-Time)", ar: "طرابلس، ليبيا (دوام كامل)" },
    badge: {
      en: "Direct Promotion After 1st Place Volunteer Award",
      ar: "ترقية مباشرة إثر الفوز بجائزة المتطوع المتميز (المرتبة الأولى)",
    },
    bullets: {
      en: [
        "Direct end-to-end operational planning, field execution, and stakeholder reporting for the Gharsa project across multiple municipalities.",
        "Manage cross-functional collaboration between field volunteer teams, local municipal councils, and institutional partners.",
        "Promoted directly following Season 1 field leadership: 4,589 trees planted across 11 municipalities and 1,508 students educated.",
      ],
      ar: [
        "إدارة التخطيط التشغيلي الشامل، والتنفيذ الميداني، وإعداد التقارير لمشروع غرسة عبر مختلف البلديات الليبية.",
        "قيادة التنسيق متعدد الأطراف بين فرق المتطوعين، والمجالس البلدية، والشركاء المؤسسيين.",
        "ترقية مباشرة بعد قيادة الموسم الأول بنجاح: زراعة 4,589 شجرة في 11 بلدية وتوعية 1,508 طالب وطالبة.",
      ],
    },
  },
  {
    id: "blue-horizon-lead",
    category: "initiatives",
    period: { en: "Jan 2026 – Present", ar: "يناير 2026 – حتى الآن" },
    role: { en: "Founder & Program Lead", ar: "المؤسس وقائد البرنامج" },
    org: { en: "Blue Horizon (أفق أزرق)", ar: "مبادرة أفق أزرق لحماية البيئة البحرية" },
    location: { en: "Tripoli, Libya", ar: "طرابلس، ليبيا" },
    badge: { en: "Community Marine Initiative", ar: "مبادرة بيئية بحرية مجتمعية" },
    bullets: {
      en: [
        "Conceived, planned, and launched Blue Horizon to conserve and protect the Mediterranean coastal ecosystem along the Libyan shoreline.",
        "Coordinate an active network of volunteers, freedivers, and environmental advocates on targeted coastal cleanups.",
        "Established direct working partnerships with local artisanal fishermen communities to align conservation goals with coastal livelihoods.",
      ],
      ar: [
        "تأسيس وإطلاق مبادرة 'أفق أزرق' لحماية النظم البيئية الساحلية والتنوع الحيوي على امتداد الشاطئ الليبي.",
        "تنسيق شبكة نشطة من المتطوعين وغواصي المياه المفتوحة في حملات تنظيف الشواطئ والمناصرة البيئية.",
        "بناء شراكات عمل مباشرة مع مجتمعات الصيادين الحرفيين لتوحيد جهود حماية المخزون السمكي.",
      ],
    },
  },
  {
    id: "manarah-lead",
    category: "initiatives",
    period: { en: "2026 – Present", ar: "2026 – حتى الآن" },
    role: { en: "Founder & Product Lead", ar: "المؤسس وقائد المنتج" },
    org: { en: "Manarah Platform (مَنارة)", ar: "منصة مَنارة للتقنية التعليمية" },
    location: { en: "Tripoli, Libya", ar: "طرابلس، ليبيا" },
    badge: { en: "Civic EdTech SaaS", ar: "حل برمجي سحابي تعليمي" },
    bullets: {
      en: [
        "Conducted field user research, product design, and system architecture for a cloud SaaS application digitizing Quranic circles administration.",
        "Modernized student attendance tracking, curriculum progression logs, and administrative reporting.",
      ],
      ar: [
        "إجراء أبحاث المستخدمين الميدانية وتصميم تجربة المستخدم وبناء المنصة السحابية لرقمنة إدارة حلقات القرآن الكريم.",
        "تحديث وميكنة سجلات الحضور، وتتبع تقدم الطلاب الدراسي، وإصدار التقارير الدورية للمراكز.",
      ],
    },
  },
  {
    id: "gharsa-supervisor",
    category: "environmental",
    period: { en: "Nov 2025 – Jul 2026", ar: "نوفمبر 2025 – يوليو 2026" },
    role: { en: "Team Supervisor & Volunteer — Gharsa Season 1", ar: "مشرف فريق ومتطوع — غرسة (الموسم الأول)" },
    org: { en: "Rehla for Sustainable Development", ar: "رحلة للتنمية المستدامة" },
    location: { en: "Tripoli, Libya", ar: "طرابلس، ليبيا" },
    badge: {
      en: "Outstanding Volunteer Award (1st Place) · 100+ Hours",
      ar: "جائزة المتطوع المتميز (المرتبة الأولى) · +100 ساعة تطوع موثقة",
    },
    bullets: {
      en: [
        "Supervised and organized on-site planting and community campaigns with 60+ volunteers across 11 municipalities (including Tripoli, Zliten, Zawiya, and Sebha).",
        "Directly delivered 4,589 trees planted and conducted environmental awareness workshops for 1,508 male and female students.",
        "Awarded 1st Place Outstanding Volunteer Award and certified for completing 100+ verified service hours, leading directly to promotion as Project Officer.",
      ],
      ar: [
        "الإشراف الميداني وتنسيق 60+ متطوعاً في حملات الزراعة والتوعية عبر 11 بلدية ليبية (تشمل طرابلس وزليتن والزاوية وسبها).",
        "المساهمة المباشرة في زراعة 4,589 شجرة وإقامة ورش توعية بيئية وتفاعلية لـ 1,508 طالب وطالبة.",
        "نيل جائزة المتطوع المتميز بالمرتبة الأولى وتوثيق +100 ساعة تطوعية معتمدة، مما أثمر الترقية لمنصب مسؤول مشاريع.",
      ],
    },
  },
  {
    id: "freelance-doc",
    category: "documentation",
    period: { en: "Oct 2023 – Present", ar: "أكتوبر 2023 – حتى الآن" },
    role: { en: "Freelance Documentation & Project Coordinator", ar: "منسق توثيق ومشاريع مستقل" },
    org: { en: "Self-Employed", ar: "عمل مهني حر" },
    location: { en: "Tripoli, Libya", ar: "طرابلس، ليبيا" },
    bullets: {
      en: [
        "Manage the full lifecycle of documentation and research coordination projects for academic, administrative, and institutional clients.",
        "Handle competing deadlines with high accuracy, establishing an enduring referral-based professional portfolio.",
      ],
      ar: [
        "إدارة دورة حياة مشاريع التوثيق والتنسيق البحثي والإداري للعملاء من المؤسسات والأفراد والأكاديميين.",
        "إنجاز المهام المتزامنة بدقة عالية والالتزام بالمواعيد النهائية الصارمة وبناء قاعدة عملاء تعتمد على التوصيات.",
      ],
    },
  },
  {
    id: "doc-specialist",
    category: "documentation",
    period: { en: "2015 – Sep 2023", ar: "2015 – سبتمبر 2023" },
    role: { en: "Professional Writing & Documentation Specialist", ar: "أخصائي كتابة وتوثيق مهني" },
    org: {
      en: "Multiple Organizations (Awraq Center, Alam Al-Tasweer, Friends Center, Al-Bidaya)",
      ar: "مؤسسات متعددة (مركز أوراق، مكتب عالم التصوير، مركز أصدقاء، شركة البداية)",
    },
    location: { en: "Tripoli, Libya", ar: "طرابلس، ليبيا" },
    badge: { en: "8+ Years Cumulative Experience", ar: "+8 سنوات خبرة تراكمية في التوثيق" },
    bullets: {
      en: [
        "Delivered structured organizational reports and comprehensive documentation over an 8-year span across diverse professional workflows.",
        "Streamlined document organization, review cycles, and team turnaround times on critical client deliverables.",
      ],
      ar: [
        "إعداد وتقديم التقارير المنظمة والتوثيق الإداري على مدار 8 سنوات عبر 4 مؤسسات مختلفة بسلاسة وكفاءة.",
        "تطوير منظومات حفظ الوثائق ومراجعتها مما أسهم في تسريع دورة العمل وتقليل وقت تسليم المخرجات.",
      ],
    },
  },
];

export default function ExperienceTimeline() {
  const { lang } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState<RoleCategory>("all");

  const filteredRoles = experienceList.filter((item) => {
    if (selectedFilter === "all") return true;
    return item.category === selectedFilter;
  });

  const filterTabs = [
    { id: "all", label: { en: "All Experience", ar: "جميع الخبرات" } },
    { id: "environmental", label: { en: "Environmental & Field", ar: "الميدان والبيئة" } },
    { id: "initiatives", label: { en: "Ventures & Tech", ar: "المبادرات والتقنية" } },
    { id: "documentation", label: { en: "Documentation & Operations", ar: "التوثيق والإدارة" } },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="section-gap"
      style={{ background: "var(--canvas)" }}
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
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <p className="text-section-label" style={{ marginBottom: "0.75rem" }}>
              {lang === "en" ? "Interactive Career Journey" : "المسيرة المهنية التفاعلية"}
            </p>
            <h2 className="text-section-title">
              {lang === "en" ? "Experience & Field Leadership" : "الخبرة والقيادة الميدانية"}
            </h2>
          </div>

          {/* Filter Pills (Clint Balcom style) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id as RoleCategory)}
                  style={{
                    padding: "0.4rem 0.95rem",
                    borderRadius: "99px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid",
                    borderColor: active ? "var(--teal)" : "var(--line)",
                    background: active ? "var(--teal)" : "var(--surface)",
                    color: active ? "#FFFFFF" : "var(--ink-soft)",
                    transition: "all 0.2s",
                  }}
                >
                  {tab.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {filteredRoles.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                padding: "clamp(1.5rem, 3vw, 2.25rem)",
                boxShadow: "0 2px 6px rgba(17,18,22,0.02)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--teal-border)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,88,78,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(17,18,22,0.02)";
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "220px 1fr",
                  gap: "clamp(1.5rem, 4vw, 3rem)",
                  alignItems: "flex-start",
                }}
                className="grid-cols-1 md:grid-cols-[220px_1fr]"
              >
                {/* Meta Column */}
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--teal)",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <Calendar size={14} />
                    <span>{role.period[lang]}</span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--ink-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <MapPin size={13} />
                    <span>{role.location[lang]}</span>
                  </p>
                </div>

                {/* Role Details */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "var(--ink)",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {role.role[lang]}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      color: "var(--teal)",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {role.org[lang]}
                  </p>

                  {/* Highlight Badge */}
                  {role.badge && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "6px",
                        background: "var(--amber-light)",
                        border: "1px solid var(--amber-border)",
                        color: "var(--amber)",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        marginBottom: "1rem",
                      }}
                    >
                      <Award size={14} />
                      <span>{role.badge[lang]}</span>
                    </div>
                  )}

                  {/* Outcomes List */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {role.bullets[lang].map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          color: "var(--ink-soft)",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--teal)"
                          style={{ flexShrink: 0, marginTop: "0.22rem" }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
