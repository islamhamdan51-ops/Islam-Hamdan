"use client";

import React from "react";

interface SignatureMotifProps {
  className?: string;
  variant?: "hero" | "section" | "divider";
}

export function SignatureMotif({ className = "", variant = "hero" }: SignatureMotifProps) {
  if (variant === "divider") {
    return (
      <div className={`w-full overflow-hidden py-6 opacity-60 ${className}`}>
        <svg
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 text-teal-600/40"
          preserveAspectRatio="none"
        >
          {/* Marine Contour Wave */}
          <path
            d="M0 30 Q150 10 300 30 T600 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Botanical Branching Transition */}
          <path
            d="M600 30 C700 30 750 15 850 35 C900 48 950 20 1000 30"
            stroke="#10B981"
            strokeWidth="1.5"
          />
          {/* Digital Grid & Coordinate Nodes */}
          <path
            d="M1000 30 H1080 V20 H1120 V30 H1200"
            stroke="#008080"
            strokeWidth="1.5"
          />
          <circle cx="600" cy="30" r="3" fill="#008080" />
          <circle cx="850" cy="35" r="3" fill="#10B981" />
          <circle cx="1000" cy="30" r="3" fill="#008080" />
          <circle cx="1120" cy="20" r="3" fill="#14B8A6" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 600 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full"
      >
        <defs>
          <linearGradient id="coastToCanopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#008080" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Bathymetric Marine Depth Lines (South Mediterranean Basin) */}
        <path
          d="M20 180 C100 210, 180 150, 260 170 C340 190, 420 130, 580 160"
          stroke="#008080"
          strokeWidth="1.2"
          strokeOpacity="0.3"
          strokeDasharray="6 6"
        />
        <path
          d="M20 150 C120 170, 200 120, 280 140 C360 160, 440 100, 580 130"
          stroke="#008080"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />

        {/* The Signature Continuous Narrative Spine: Coast -> Canopy -> Code */}
        <path
          d="M20 120 C100 135, 160 85, 240 105 C300 120, 340 70, 400 85 C450 95, 480 60, 540 60 H580"
          stroke="url(#coastToCanopyGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-all duration-1000"
        />

        {/* Botanical Foliage Branching Offshoots */}
        <path
          d="M240 105 C250 80, 270 70, 290 75"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        <path
          d="M400 85 C410 60, 430 55, 445 62"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />

        {/* Digital Grid / QR Nodes & Telemetry Coordinates */}
        <g stroke="#008080" strokeWidth="1" strokeOpacity="0.4">
          <line x1="480" y1="30" x2="480" y2="90" strokeDasharray="3 3" />
          <line x1="520" y1="30" x2="520" y2="90" strokeDasharray="3 3" />
          <line x1="560" y1="30" x2="560" y2="90" strokeDasharray="3 3" />
          <line x1="460" y1="60" x2="580" y2="60" />
        </g>

        {/* Micro Telemetry QR Pattern Blocks */}
        <rect x="525" y="45" width="8" height="8" fill="#10B981" fillOpacity="0.8" rx="1" />
        <rect x="537" y="45" width="4" height="4" fill="#008080" fillOpacity="0.8" rx="0.5" />
        <rect x="545" y="45" width="8" height="8" fill="#14B8A6" fillOpacity="0.8" rx="1" />
        <rect x="525" y="57" width="4" height="4" fill="#14B8A6" fillOpacity="0.8" rx="0.5" />
        <rect x="533" y="57" width="8" height="8" fill="#10B981" fillOpacity="0.9" rx="1" />
        <rect x="545" y="57" width="4" height="4" fill="#008080" fillOpacity="0.7" rx="0.5" />

        {/* Glowing Anchor Nodes */}
        <circle cx="240" cy="105" r="4" fill="#008080" />
        <circle cx="240" cy="105" r="10" fill="url(#nodeGlow)" />

        <circle cx="400" cy="85" r="4" fill="#10B981" />
        <circle cx="400" cy="85" r="10" fill="url(#nodeGlow)" />

        <circle cx="540" cy="60" r="4" fill="#2DD4BF" />
        <circle cx="540" cy="60" r="12" fill="url(#nodeGlow)" />

        {/* Subtitle Telemetry Labels */}
        <text x="30" y="198" fill="#008080" fontSize="9" fontFamily="monospace" fillOpacity="0.7">
          MEDITERRANEAN_BASIN // 32°53'N
        </text>
        <text x="260" y="50" fill="#10B981" fontSize="9" fontFamily="monospace" fillOpacity="0.8">
          CANOPY_AFFORESTATION // 4,589 TREES
        </text>
        <text x="470" y="105" fill="#2DD4BF" fontSize="9" fontFamily="monospace" fillOpacity="0.8">
          QR_ID // +6,000 ACTIVE
        </text>
      </svg>
    </div>
  );
}

