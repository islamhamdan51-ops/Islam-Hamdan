"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isRtl: boolean;
  t: <T>(obj: { ar: T; en: T }) => T;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  isRtl: false,
  t: (obj) => obj.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("islam_lang") as Language | null;
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch {
      /* private mode */
    }
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.style.fontFamily =
      lang === "ar"
        ? "'Noto Sans Arabic', 'Noto Naskh Arabic', Arial, sans-serif"
        : "var(--font-sans)";
    try {
      localStorage.setItem("islam_lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);
  const toggleLang = () => setLangState((p) => (p === "ar" ? "en" : "ar"));
  const isRtl = lang === "ar";
  const t = <T,>(obj: { ar: T; en: T }): T => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}
