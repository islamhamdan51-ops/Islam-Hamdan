"use client";

import { useContext, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Download, ArrowUpRight, MapPin } from "lucide-react";

export default function ContactSection() {
  const { lang } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const c = {
    en: {
      label: "Get in Touch",
      title: "Let's Connect & Collaborate",
      subtitle:
        "Whether you are interested in environmental partnership, marine science research, or civic initiatives in Libya, feel free to reach out directly.",
      whatsappBtn: "Chat on WhatsApp",
      emailBtn: "Send an Email",
      linkedinBtn: "View LinkedIn Profile",
      downloadCvBtn: "Download Verified CV (PDF)",
      locationText: "Tripoli, Libya · Open to municipal, national & international collaborations",
    },
    ar: {
      label: "تواصل معي",
      title: "لنتعاون ونبني معاً أثراً مستداماً",
      subtitle:
        "سواء كنت مهتماً بشراكة في مشاريع البيئة والتنمية، أو أبحاث علوم البحار، أو المبادرات المجتمعية في ليبيا، يسعدني تواصلك المباشر.",
      whatsappBtn: "محادثة عبر واتساب",
      emailBtn: "مراسلة عبر البريد الإلكتروني",
      linkedinBtn: "الملف الشخصي على لينكدإن",
      downloadCvBtn: "تحميل السيرة الذاتية الرسمية (PDF)",
      locationText: "طرابلس، ليبيا · متاح للتعاون والشراكات الميدانية والمؤسسية",
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
      id="contact"
      ref={ref}
      className="section-gap"
      style={{
        background: "var(--ink)",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-narrow">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.p
            {...anim(0.1)}
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--teal-border)",
              marginBottom: "0.75rem",
            }}
          >
            {c.label}
          </motion.p>
          <motion.h2
            {...anim(0.2)}
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            {c.title}
          </motion.h2>
          <motion.p
            {...anim(0.3)}
            style={{
              fontSize: "1.05rem",
              color: "rgba(255, 255, 255, 0.65)",
              lineHeight: 1.6,
              maxWidth: "560px",
              marginInline: "auto",
            }}
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* 3 Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* WhatsApp Card */}
          <motion.a
            {...anim(0.35)}
            href="https://wa.me/218914061363"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "14px",
              padding: "1.5rem",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              transition: "all 0.25s",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(16, 185, 129, 0.12)";
              e.currentTarget.style.borderColor = "#10B981";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
              }}
            >
              <MessageCircle size={22} />
            </div>
            <div>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.2rem" }}>
                WhatsApp
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 700 }}>+218 91 406 1363</p>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            {...anim(0.4)}
            href="mailto:Islamhamdan51@gmail.com"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "14px",
              padding: "1.5rem",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              transition: "all 0.25s",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(20, 88, 78, 0.35)";
              e.currentTarget.style.borderColor = "var(--teal-border)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "var(--teal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
              }}
            >
              <Mail size={22} />
            </div>
            <div>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.2rem" }}>
                Email
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 700 }}>Islamhamdan51@gmail.com</p>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            {...anim(0.45)}
            href="https://www.linkedin.com/in/islam-hamdan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "14px",
              padding: "1.5rem",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              transition: "all 0.25s",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(10, 102, 194, 0.25)";
              e.currentTarget.style.borderColor = "#0A66C2";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "#0A66C2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
              }}
            >
              <Linkedin size={22} />
            </div>
            <div>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.2rem" }}>
                LinkedIn
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 700 }}>in/islam-hamdan</p>
            </div>
          </motion.a>
        </div>

        {/* Download CV Large Action Banner */}
        <motion.div
          {...anim(0.5)}
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "14px",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <MapPin size={18} color="var(--teal-border)" />
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
              {c.locationText}
            </p>
          </div>
          <a
            href="/cv/Islam_Hamdan_CV.pdf"
            download
            className="btn-primary"
            style={{
              background: "#FFFFFF",
              color: "var(--ink)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            <Download size={16} />
            <span>{c.downloadCvBtn}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
