"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/data/content";
import { Users2, Award, Building2, CheckCircle2 } from "lucide-react";

export function CommunityLeadership() {
  const { lang, t } = useLanguage();
  const { communityLeadership } = siteContent;

  return (
    <section className="relative py-20 bg-[#060D17] border-b border-teal-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-teal-700/40 text-teal-300 text-xs font-mono">
            <Users2 className="w-3.5 h-3.5 text-teal-400" />
            <span>05 // {lang === "ar" ? "المشاركة المدنية والريادة الشبابية" : "Civic Action & Youth Leadership"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t(communityLeadership.title)}
          </h2>
          <p className="text-base text-slate-300">
            {t(communityLeadership.subtitle)}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: Leadership Narrative Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {communityLeadership.items.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-navy-900/60 to-[#0A192F]/40 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold text-teal-400">
                    {t(item.entity)}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-navy-950 text-slate-300 border border-slate-800">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {t(item.title)}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {t(item.desc)}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-teal-300/90 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    {lang === "ar"
                      ? "تمثيل مدني ومشاركة شبابية رسمية"
                      : "Official Youth Civic Participation"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Authentic Youth Leadership Photos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-teal-600/40 bg-navy-950 shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/youth-leadership-award.jpg"
                  alt="Islam Hamdan receiving youth leadership certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-4 bg-navy-950/95 border-t border-slate-800">
                <div className="text-xs font-semibold text-white">
                  {lang === "ar"
                    ? "تسلم شهادة التقدير في ختام مخيم القيادات الشبابية المحلية 2026"
                    : "Honored at the Local Leadership Youth Camp 2026"}
                </div>
                <div className="text-[11px] text-teal-400 font-mono mt-1">
                  {lang === "ar"
                    ? "المجلس المحلي للشباب — بلدية طرابلس المركز"
                    : "Tripoli Center Municipality Local Youth Council"}
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-navy-950">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/youth-leadership-group.jpg"
                  alt="Group photo of the Local Leadership Youth Camp"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-navy-950 border-t border-slate-800">
                <span className="text-xs text-slate-300">
                  {lang === "ar"
                    ? "الصورة التذكارية لمخيم القيادات الشبابية ببلدية طرابلس المركز"
                    : "Youth Leaders Assembly, Tripoli Center Municipality"}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

