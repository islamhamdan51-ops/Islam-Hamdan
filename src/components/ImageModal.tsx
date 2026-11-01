"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ImageModalProps {
  src: string;
  alt: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ src, alt, caption, isOpen, onClose }: ImageModalProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-navy-950 rounded-2xl overflow-hidden border border-teal-500/40 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 z-10 p-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-white border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          aria-label={lang === "ar" ? "إغلاق" : "Close preview"}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-[65vh] bg-black/40">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption Bar */}
        {caption && (
          <div className="p-4 sm:p-5 bg-navy-900/90 border-t border-slate-800 text-sm text-slate-200">
            <p className="leading-relaxed font-medium">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

