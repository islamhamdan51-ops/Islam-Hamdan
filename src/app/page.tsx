"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

function CountUp({ value, reduced }: { value: string; reduced: boolean }) {
  const host = useRef<HTMLSpanElement>(null);
  const inView = useInView(host, { once: true, amount: 0.65 });
  const numeric = Number(value.replace(/[^\d]/g, ""));
  const count = useMotionValue(numeric);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("en-US"));
  useEffect(() => {
    if (!inView || reduced) return;
    count.set(0);
    const controls = animate(count, numeric, { duration: 1.35, ease: [0.22, 0.7, 0.2, 1] });
    return controls.stop;
  }, [inView, numeric, count, reduced]);
  return <strong ref={host}><motion.span className="metric-value">{rounded}</motion.span>{value.includes("+") ? <span className="metric-suffix">+</span> : null}</strong>;
}

const copy = {
  en: {
    nav: ["Home", "About", "Experience", "Projects", "Research", "Contact"],
    role: "Environmental & Sustainable Development Project Officer",
    disciplines: "Marine Science  ·  Project Management  ·  Digital Innovation",
    intro: "Environmental project officer with a marine science background and experience in project coordination, field operations, professional documentation, and digital product development.",
    cv: "Download CV", work: "View projects", contact: "Contact",
    about: "About", aboutTitle: "Science, fieldwork and delivery.",
    aboutText: "I am Project Officer for the Gharsa Project at Rehla for Sustainable Development, based in Tripoli. My work spans environmental project delivery, marine science, and digital product development.",
    impact: "Season 1 · Gharsa", projects: "Selected work", gharsa: "Gharsa Project", gharsaRole: "Project Officer · Rehla for Sustainable Development", gharsaDesc: "Environmental education and tree planting across Libyan municipalities, supported by individual QR identification for planted seedlings.",
    qr: "6,000+ existing planted seedlings carry individual QR codes.", blue: "Blue Horizon", blueRole: "Founder & Program Lead", blueDesc: "A marine sustainability initiative focused on coastal conservation, community outreach, and beach cleanups in Libya.", manarah: "Manarah", manarahRole: "Founder & Product Lead", manarahDesc: "An educational technology product for Quranic circles. QR attendance and the core database are operational; evaluation reports are in development. No interface preview is available.",
    fieldCaptions: ["Field preparation", "Tree care", "Student participation"], experience: "Experience", current: "Project Officer — Gharsa Project", org: "Rehla for Sustainable Development", currentDate: "2026 — Present", previous: "Team Supervisor & Volunteer — Gharsa Season 1", previousDate: "2025 — 2026", youthTitle: "Youth Representative (Al-Mansoura District)", youthOrganization: "Local Youth Council | Tripoli Center Municipality", youthDate: "2026", award: "Outstanding Volunteer Award — First Place", research: "Research & education", degree: "BSc in Zoology — Marine Science Track", postgrad: "Postgraduate study in Marine Science · University of Tripoli · In progress", english: "English · Professional Working Proficiency", contactTitle: "Contact", location: "Tripoli, Libya",
  },
  ar: {
    nav: ["الرئيسية", "نبذة", "الخبرة", "المشاريع", "الدراسة", "التواصل"],
    role: "مسؤول مشاريع البيئة والتنمية المستدامة",
    disciplines: "علوم البحار  ·  إدارة المشاريع  ·  الابتكار الرقمي",
    intro: "مسؤول مشاريع بيئية بخلفية علمية في علوم البحار وخبرة في تنسيق المشاريع والتنفيذ الميداني والتوثيق المهني وتطوير المنتجات الرقمية.",
    cv: "تحميل السيرة الذاتية", work: "استعراض المشاريع", contact: "تواصل",
    about: "نبذة", aboutTitle: "العلم والعمل الميداني وإدارة المشاريع.",
    aboutText: "أعمل مسؤولَ مشاريع لمشروع غرسة في منظمة رحلة للتنمية المستدامة، ومقرّي طرابلس. يجمع عملي بين تنفيذ المشاريع البيئية وعلوم البحار وتطوير المنتجات الرقمية.",
    impact: "الموسم الأول · غرسة", projects: "أعمال مختارة", gharsa: "مشروع غرسة", gharsaRole: "مسؤول مشاريع · رحلة للتنمية المستدامة", gharsaDesc: "أنشطة التوعية البيئية وزراعة الأشجار في البلديات الليبية، مع تخصيص رموز QR للشتلات المزروعة.",
    qr: "أكثر من 6,000 شتلة مزروعة قائمة تحمل رموز QR فردية.", blue: "أفق أزرق", blueRole: "المؤسس وقائد البرنامج", blueDesc: "مبادرة للاستدامة البحرية تركز على حماية السواحل والتوعية المجتمعية وحملات تنظيف الشواطئ في ليبيا.", manarah: "منارة", manarahRole: "المؤسس وقائد المنتج", manarahDesc: "منتج تقني تعليمي لإدارة حلقات القرآن الكريم. قاعدة البيانات وتسجيل الحضور عبر QR يعملان، وتقارير التقييم قيد التطوير. لا تتوفر صورة لواجهة المنتج.",
    fieldCaptions: ["تجهيز موقع الزراعة", "العناية بالأشجار", "مشاركة الطلاب"], experience: "الخبرة", current: "مسؤول مشاريع — مشروع غرسة", org: "رحلة للتنمية المستدامة", currentDate: "2026 — الآن", previous: "مشرف فريق ومتطوع — الموسم الأول لغرسة", previousDate: "2025 — 2026", youthTitle: "\u0645\u0645\u062b\u0644 \u0627\u0644\u0634\u0628\u0627\u0628 (\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u0646\u0635\u0648\u0631\u0629)", youthOrganization: "\u0627\u0644\u0645\u062c\u0644\u0633 \u0627\u0644\u0645\u062d\u0644\u064a \u0644\u0644\u0634\u0628\u0627\u0628 | \u0628\u0644\u062f\u064a\u0629 \u0637\u0631\u0627\u0628\u0644\u0633 \u0627\u0644\u0645\u0631\u0643\u0632", youthDate: "2026", award: "جائزة المتطوع المتميز — المرتبة الأولى", research: "الدراسة والبحث", degree: "بكالوريوس العلوم في علم الحيوان — مسار علوم البحار", postgrad: "دراسات عليا في علوم البحار · جامعة طرابلس · مستمرة", english: "الإنجليزية · كفاءة مهنية عاملة", contactTitle: "التواصل", location: "طرابلس، ليبيا",
  },
};

export default function Home() {
  const { lang, toggleLang } = useContext(LanguageContext);
  const [activeAnchor, setActiveAnchor] = useState("top");
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(heroProgress, [0, 1], [0, 42]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const c = copy[lang];
  const anchors = ["top", "about", "experience", "projects", "research", "contact"];
  useEffect(() => {
    const sections = anchors.map((id) => document.getElementById(id)).filter((node): node is HTMLElement => !!node);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveAnchor(visible[0].target.id);
    }, { rootMargin: "-22% 0px -68% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const reveal = { opacity: 1, y: 0 };
  const enter = prefersReducedMotion ? false : { opacity: 0, y: 22 };
  return <main>
    <motion.div className={`scroll-progress${prefersReducedMotion ? " reduced" : ""}`} style={{ scaleX: progressScale }} aria-hidden="true" />
    <header className="site-header"><a className="wordmark" href="#top">IH<span> / </span>Islam Hamdan</a><nav aria-label={lang === "en" ? "Main navigation" : "التنقل الرئيسي"}>{c.nav.map((item, i) => <a className={activeAnchor === anchors[i] ? "active" : undefined} aria-current={activeAnchor === anchors[i] ? "location" : undefined} key={anchors[i]} href={`#${anchors[i]}`}>{item}</a>)}</nav><motion.button className="language" onClick={toggleLang} lang={lang === "en" ? "ar" : "en"} whileHover={prefersReducedMotion ? undefined : { y: -1 }} whileTap={prefersReducedMotion ? undefined : { scale: .97 }} transition={{ duration: .16 }}>{lang === "en" ? "العربية" : "English"}</motion.button></header>
    <motion.section ref={heroRef} initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .8, ease: [.22, .7, .2, 1] }} className="hero" id="top"><svg className="hero-contour" viewBox="0 0 700 700" fill="none" aria-hidden="true"><motion.path d="M719 21C567 15 618 115 492 135 363 156 381 230 268 251 165 270 212 354 97 371 5 385 35 467-44 495M713 63C581 56 626 151 508 171 392 190 401 262 289 282 197 299 233 380 121 398 39 411 61 479-20 516M711 108C598 101 634 190 523 207 420 225 423 294 311 314 229 329 251 408 144 426 72 438 85 493 0 538" stroke="currentColor" strokeWidth="1" strokeLinecap="round" initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }} animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: .28 }} transition={{ duration: 1.3, ease: "easeInOut", delay: .15 }}/></svg><div className="hero-copy"><motion.p className="eyebrow" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .08 }}>{lang === "en" ? "TRIPOLI, LIBYA" : "طرابلس، ليبيا"}</motion.p><motion.h1 initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .55, delay: .12 }}>{lang === "en" ? <>ISLAM<br/>HAMDAN</> : <>إسلام<br/>حمدان</>}</motion.h1><motion.h2 initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .55, delay: .2 }}>{c.role}</motion.h2><motion.p className="disciplines" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .28 }}>{c.disciplines}</motion.p><motion.p className="intro" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .34 }}>{c.intro}</motion.p><motion.div className="hero-actions" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .42 }}><a className="button button-dark" href="/cv/Islam_Hamdan_CV.pdf" download>{c.cv}<span aria-hidden="true">↗</span></a><a className="text-link" href="#projects">{c.work} <span aria-hidden="true">↘</span></a><a className="text-link" href="#contact">{c.contact}</a></motion.div></div><figure className="portrait"><motion.img style={prefersReducedMotion ? undefined : { y: portraitY, scale: 1.08 }} initial={prefersReducedMotion ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.12 }} animate={prefersReducedMotion ? undefined : { clipPath: "inset(0 0 0% 0)", scale: 1.04 }} transition={{ duration: 1.05, ease: [.22, .7, .2, 1], delay: .14 }} src="/images/islam-suit-portrait.webp" width={720} height={838} fetchPriority="high" decoding="async" alt={lang === "en" ? "Islam Hamdan in a dark business suit" : "إسلام حمدان ببدلة رسمية داكنة"}/><figcaption>ISLAM HAMDAN <span>·</span> TRIPOLI</figcaption></figure><div className="hero-index" aria-hidden="true">01 / 06</div></motion.section>
    <section className="about section" id="about"><div className="section-kicker"><span>01</span>{c.about}</div><div><h2>{c.aboutTitle}</h2><p>{c.aboutText}</p></div></section>
    <section className="impact section" id="impact"><div className="section-kicker"><span>02</span>{c.impact}</div><div className="metrics"><article><CountUp value="4,589" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Trees planted" : "شجرة مزروعة"}</span></article><article><CountUp value="11" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Municipalities" : "بلدية"}</span></article><article><CountUp value="1,508" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Students reached" : "طالباً وطالبة"}</span></article><article><CountUp value="60+" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Volunteers supervised" : "متطوعاً بإشراف"}</span></article><article><CountUp value="100+" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Verified volunteer hours" : "ساعة تطوعية موثقة"}</span></article><article className="award"><strong>1<sup>st</sup></strong><span>{c.award}</span></article></div><p className="qr-note">{c.qr}</p></section>
    <ProjectsShowcase lang={lang}/>
    <section className="experience section" id="experience"><div className="section-kicker"><span>04</span>{c.experience}</div><div className="timeline"><span className="timeline-track" aria-hidden="true"/><span className="timeline-fill" aria-hidden="true"/><article><time>{c.currentDate}</time><div><h3>{c.current}</h3><p>{c.org}</p></div><i/></article><article><time>{c.previousDate}</time><div><h3>{c.previous}</h3><p>{c.org}</p></div><i/></article><motion.article initial={prefersReducedMotion ? false : { opacity: 0, x: lang === "ar" ? 18 : -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .55, delay: .28 }}><time>{c.youthDate}</time><div><h3>{c.youthTitle}</h3><p>{c.youthOrganization}</p></div><i/></motion.article></div></section>
    <section className="research section" id="research"><div className="section-kicker"><span>05</span>{c.research}</div><div className="credentials"><article><span> BSc </span><h3>{c.degree}</h3><p>{lang === "en" ? "University of Tripoli" : "جامعة طرابلس"}</p></article><article><span> MSc </span><h3>{c.postgrad}</h3></article><article><span> EN </span><h3>{c.english}</h3></article></div></section>
    <footer id="contact" className="contact section"><div className="section-kicker"><span>06</span>{c.contactTitle}</div><div className="contact-content"><h2>{c.contactTitle}</h2><div className="contact-links"><a href="mailto:islamhamdan51@gmail.com"><Mail aria-hidden="true"/><span>islamhamdan51@gmail.com</span><span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/islam-hamdan/" target="_blank" rel="noreferrer" aria-label="LinkedIn — Islam Hamdan"><Linkedin aria-hidden="true"/><span>LinkedIn</span><span aria-hidden="true">↗</span></a><a href="https://wa.me/218914061363" target="_blank" rel="noreferrer" aria-label="WhatsApp — Islam Hamdan"><svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.1 1.6 5.9L0 24l6.2-1.6a12 12 0 0 0 5.9 1.5h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.7-8.4ZM12.2 21.8h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.8 9.8 0 0 1 2.2 12c0-5.5 4.5-10 10-10a9.9 9.9 0 0 1 7.1 2.9 9.9 9.9 0 0 1 2.9 7.1c0 5.4-4.5 9.8-10 9.8Zm5.5-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4 0-.2-.3-.3-.6-.5Z"/></svg><span>WhatsApp</span><span aria-hidden="true">↗</span></a><span className="contact-location">{c.location}</span></div></div><div className="footer-line"><span>© {new Date().getFullYear()} Islam Hamdan</span><a href="#top" aria-label={lang === "en" ? "Back to top" : "العودة إلى الأعلى"}>↑</a></div></footer>
  </main>;
}
