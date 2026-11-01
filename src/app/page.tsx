"use client";

import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";

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
  return <strong ref={host}><motion.span>{rounded}</motion.span>{value.includes("+") ? "+" : ""}</strong>;
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
    fieldCaptions: ["Field preparation", "Tree care", "Student participation"], experience: "Experience", current: "Project Officer — Gharsa Project", org: "Rehla for Sustainable Development", currentDate: "2026 — Present", previous: "Team Supervisor & Volunteer — Gharsa Season 1", previousDate: "2025 — 2026", award: "Outstanding Volunteer Award — First Place", research: "Research & education", degree: "BSc in Zoology — Marine Science Track", postgrad: "Postgraduate study in Marine Science · University of Tripoli · In progress", english: "English · Professional Working Proficiency", contactTitle: "Contact", location: "Tripoli, Libya",
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
    fieldCaptions: ["تجهيز موقع الزراعة", "العناية بالأشجار", "مشاركة الطلاب"], experience: "الخبرة", current: "مسؤول مشاريع — مشروع غرسة", org: "رحلة للتنمية المستدامة", currentDate: "2026 — الآن", previous: "مشرف فريق ومتطوع — الموسم الأول لغرسة", previousDate: "2025 — 2026", award: "جائزة المتطوع المتميز — المرتبة الأولى", research: "الدراسة والبحث", degree: "بكالوريوس العلوم في علم الحيوان — مسار علوم البحار", postgrad: "دراسات عليا في علوم البحار · جامعة طرابلس · مستمرة", english: "الإنجليزية · كفاءة مهنية عاملة", contactTitle: "التواصل", location: "طرابلس، ليبيا",
  },
};

export default function Home() {
  const { lang, toggleLang } = useContext(LanguageContext);
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(heroProgress, [0, 1], [0, 42]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const c = copy[lang];
  const anchors = ["top", "about", "experience", "projects", "research", "contact"];
  const reveal = { opacity: 1, y: 0 };
  const enter = prefersReducedMotion ? false : { opacity: 0, y: 22 };
  return <main>
    <motion.div className={`scroll-progress${prefersReducedMotion ? " reduced" : ""}`} style={{ scaleX: progressScale }} aria-hidden="true" />
    <header className="site-header"><a className="wordmark" href="#top">IH<span> / </span>Islam Hamdan</a><nav aria-label={lang === "en" ? "Main navigation" : "التنقل الرئيسي"}>{c.nav.map((item, i) => <a key={anchors[i]} href={`#${anchors[i]}`}>{item}</a>)}</nav><button className="language" onClick={toggleLang} lang={lang === "en" ? "ar" : "en"}>{lang === "en" ? "العربية" : "English"}</button></header>
    <motion.section ref={heroRef} initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .8, ease: [.22, .7, .2, 1] }} className="hero" id="top"><svg className="hero-contour" viewBox="0 0 700 700" fill="none" aria-hidden="true"><motion.path d="M719 21C567 15 618 115 492 135 363 156 381 230 268 251 165 270 212 354 97 371 5 385 35 467-44 495M713 63C581 56 626 151 508 171 392 190 401 262 289 282 197 299 233 380 121 398 39 411 61 479-20 516M711 108C598 101 634 190 523 207 420 225 423 294 311 314 229 329 251 408 144 426 72 438 85 493 0 538" stroke="currentColor" strokeWidth="1" strokeLinecap="round" initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }} animate={prefersReducedMotion ? undefined : { pathLength: 1, opacity: .28 }} transition={{ duration: 1.3, ease: "easeInOut", delay: .15 }}/></svg><div className="hero-copy"><motion.p className="eyebrow" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .08 }}>TRIPOLI, LIBYA <span>32°53′N · 13°11′E</span></motion.p><motion.h1 initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .55, delay: .12 }}>{lang === "en" ? <>ISLAM<br/>HAMDAN</> : <>إسلام<br/>حمدان</>}</motion.h1><motion.h2 initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .55, delay: .2 }}>{c.role}</motion.h2><motion.p className="disciplines" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .28 }}>{c.disciplines}</motion.p><motion.p className="intro" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .34 }}>{c.intro}</motion.p><motion.div className="hero-actions" initial={prefersReducedMotion ? false : enter} animate={prefersReducedMotion ? undefined : reveal} transition={{ duration: .45, delay: .42 }}><a className="button button-dark" href="/cv/Islam_Hamdan_CV.pdf" download>{c.cv}<span aria-hidden="true">↗</span></a><a className="text-link" href="#projects">{c.work} <span aria-hidden="true">↘</span></a><a className="text-link" href="#contact">{c.contact}</a></motion.div></div><figure className="portrait"><motion.img style={prefersReducedMotion ? undefined : { y: portraitY, scale: 1.08 }} initial={prefersReducedMotion ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.12 }} animate={prefersReducedMotion ? undefined : { clipPath: "inset(0 0 0% 0)", scale: 1.04 }} transition={{ duration: 1.05, ease: [.22, .7, .2, 1], delay: .14 }} src="/images/islam-formal-portrait.jpg" alt={lang === "en" ? "Islam Hamdan in a dark business suit" : "إسلام حمدان ببدلة رسمية داكنة"}/><figcaption>ISLAM HAMDAN <span>·</span> TRIPOLI</figcaption></figure><div className="hero-index" aria-hidden="true">01 / 06</div></motion.section>
    <section className="about section" id="about"><div className="section-kicker"><span>01</span>{c.about}</div><div><h2>{c.aboutTitle}</h2><p>{c.aboutText}</p></div></section>
    <section className="impact section" id="impact"><div className="section-kicker"><span>02</span>{c.impact}</div><div className="metrics"><article><CountUp value="4,589" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Trees planted" : "شجرة مزروعة"}</span></article><article><CountUp value="11" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Municipalities" : "بلدية"}</span></article><article><CountUp value="1,508" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Students reached" : "طالباً وطالبة"}</span></article><article><CountUp value="60+" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Volunteers supervised" : "متطوعاً بإشراف"}</span></article><article><CountUp value="100+" reduced={!!prefersReducedMotion}/><span>{lang === "en" ? "Verified volunteer hours" : "ساعة تطوعية موثقة"}</span></article><article className="award"><strong>1<sup>st</sup></strong><span>{c.award}</span></article></div><p className="qr-note">{c.qr}</p></section>
    <section className="projects section" id="projects"><div className="section-heading"><div className="section-kicker"><span>03</span>{c.projects}</div></div><article className="project-feature"><a className="project-image" href="https://gharsa.ly/" target="_blank" rel="noreferrer"><img src="/images/gharsa-students-planting.jpg" alt={lang === "en" ? "Students taking part in a Gharsa planting activity" : "طلاب يشاركون في نشاط زراعة ضمن مشروع غرسة"}/><span>GHARSA.LY ↗</span></a><div className="project-copy"><p className="eyebrow">01 / ENVIRONMENT</p><h2>{c.gharsa}</h2><h3>{c.gharsaRole}</h3><p>{c.gharsaDesc}</p><a className="text-link" href="https://gharsa.ly/" target="_blank" rel="noreferrer">gharsa.ly ↗</a></div></article><div className="field-gallery">{["/images/gharsa-field-team.jpg", "/images/gharsa-tree-care.jpg", "/images/gharsa-youth-activity.jpg"].map((src, i) => <figure key={src}><img src={src} alt={lang === "en" ? ["Gharsa field team preparing a planting site", "A volunteer caring for a young tree", "Students participating in an environmental activity"][i] : ["فريق غرسة يجهز موقعاً للزراعة", "متطوع يعتني بشجرة صغيرة", "طلاب يشاركون في نشاط بيئي"][i]}/><figcaption><span>0{i + 1}</span>{c.fieldCaptions[i]}</figcaption></figure>)}</div><div className="project-list"><article><span className="project-number">02</span><div><h3>{c.blue}</h3><p className="project-role">{c.blueRole}</p><p>{c.blueDesc}</p></div><span className="project-mark">BH</span></article><article><span className="project-number">03</span><div><h3>{c.manarah}</h3><p className="project-role">{c.manarahRole}</p><p>{c.manarahDesc}</p></div><span className="project-mark arabic-mark">م</span></article></div></section>
    <section className="experience section" id="experience"><div className="section-kicker"><span>04</span>{c.experience}</div><div className="timeline"><span className="timeline-track" aria-hidden="true"/><span className="timeline-fill" aria-hidden="true"/><article><time>{c.currentDate}</time><div><h3>{c.current}</h3><p>{c.org}</p></div><i/></article><article><time>{c.previousDate}</time><div><h3>{c.previous}</h3><p>{c.org}</p></div><i/></article></div></section>
    <section className="research section" id="research"><div className="section-kicker"><span>05</span>{c.research}</div><div className="credentials"><article><span> BSc </span><h3>{c.degree}</h3><p>{lang === "en" ? "University of Tripoli" : "جامعة طرابلس"}</p></article><article><span> MSc </span><h3>{c.postgrad}</h3></article><article><span> EN </span><h3>{c.english}</h3></article></div></section>
    <footer id="contact" className="contact section"><div className="section-kicker"><span>06</span>{c.contactTitle}</div><div className="contact-content"><h2>{c.contactTitle}</h2><div className="contact-links"><a href="mailto:islamhamdan51@gmail.com">islamhamdan51@gmail.com ↗</a><a href="https://www.linkedin.com/in/islam-hamdan/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://wa.me/218914061363" target="_blank" rel="noreferrer">WhatsApp ↗</a><span>{c.location}</span></div></div><div className="footer-line"><span>© {new Date().getFullYear()} Islam Hamdan</span><a href="#top">↑</a></div></footer>
  </main>;
}
