"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/data/content";
import { Landmark, Recycle, Accessibility, Briefcase, FileText, AlertCircle, ArrowUpRight } from "lucide-react";

export function CivicInitiatives() {
  const { lang, t, isRtl } = useLanguage();
  const { civicInitiatives } = siteContent;

  const getInitiativeIcon = (id: string) => {
    switch (id) {
      case "tripoli-bridge-of-work":
        return <Briefcase className="w-5 h-5 text-teal-400" />;
      case "plastic-recycling-model":
        return <Recycle className="w-5 h-5 text-emerald-400" />;
      case "mansoura-accessibility":
        return <Accessibility className="w-5 h-5 text-amber-400" />;
      default:
        return <Landmark className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section className="relative py-20 bg-[#060D17] border-b border-teal-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-teal-700/40 text-teal-300 text-xs font-mono">
            <span>03 // {lang === "ar" ? "المبادرات البلدية والمجتمعية" : "Civic & Municipal Proposals"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === "ar" ? "المبادرات المجتمعية والمقترحات البلدية" : "Civic Frameworks & Municipal Initiatives"}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === "ar"
              ? "مقترحات ومشاريع قيد التخطيط والتطوير المفاهيمي استجابةً لاحتياجات المجتمع المحلي بطرابلس، مصنفة بشفافية تامة وفق حالتها الواقعية."
              : "Action proposals and frameworks developed in response to local community needs across Tripoli, transparently categorized by actual operational status."}
          </p>
        </div>

        {/* Realistic Status Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-navy-950/80 border border-amber-900/40 mb-10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            {lang === "ar"
              ? "ملاحظة الشفافية المهنية: هذه المبادرات معروضة بحالتها الواقعية كأفكار بحثية ومقترحات تخطيطية ومسارات مناصرة، ولا يُدّعى فيها وجود مصانع منفذة أو موافقات تمويلية حكومية لم تثبت رسميًا."
              : "Professional Transparency Note: These initiatives are presented in their authentic status as research frameworks, conceptual proposals, and civic advocacy tracks, without fabricated claims of industrial facilities or unverified institutional approvals."}
          </p>
        </div>

        {/* 3-Column Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {civicInitiatives.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-navy-900/60 to-[#0A192F]/40 border border-slate-800/80 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Status Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 border border-slate-700 flex items-center justify-center">
                    {getInitiativeIcon(item.id)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-navy-950 text-amber-300 border border-amber-800/40">
                    {t(item.status)}
                  </span>
                </div>

                <div className="text-xs text-teal-400 font-mono mb-1">
                  {t(item.category)}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {t(item.title)}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {t(item.desc)}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-800/80 mb-3">
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                    {lang === "ar" ? "الدور والمسؤولية:" : "Role & Contribution:"}
                  </span>
                  <span className="text-xs font-semibold text-slate-200">
                    {t(item.role)}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {item.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-navy-950 text-slate-400 border border-slate-800"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

