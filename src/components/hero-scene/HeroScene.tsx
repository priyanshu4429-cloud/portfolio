"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { BrandMark } from "../brand-mark";
import { Eye, X, AlertCircle, CheckCircle2, Code2, Cpu, Shield } from "lucide-react";

// Fallback component for SSR, WebGL disabled, or initial hydration
function StaticHeroFallback() {
  return (
    <div
      className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center p-6 select-none"
      aria-label="Static 3D monogram identity representation"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5B8CFF]/15 via-[#9A78FF]/10 to-transparent blur-3xl -z-10 animate-pulse-glow" />
      <div className="relative w-64 h-64 rounded-3xl glass-panel-raised p-6 flex flex-col items-center justify-between shadow-2xl border border-[rgba(190,205,230,0.18)]">
        <div className="w-full flex items-center justify-between text-xs text-[#A2ACBD] font-mono">
          <span className="text-[#5B8CFF] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
            PK.DEV
          </span>
          <span>IDENTITY CORE</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#080B12]/80 border border-[rgba(190,205,230,0.12)]">
          <BrandMark size={72} />
        </div>

        <div className="w-full pt-3 border-t border-[rgba(190,205,230,0.1)] flex items-center justify-between text-[11px] font-mono text-[#A2ACBD]">
          <span>CSE • 2ND YEAR</span>
          <span className="text-[#5B8CFF]">WB, INDIA</span>
        </div>
      </div>
    </div>
  );
}

// Dynamic import of 3D Canvas with SSR disabled and static fallback
const DynamicHeroSceneCanvas = dynamic(
  () => import("./HeroSceneCanvas").then((mod) => mod.HeroSceneCanvas),
  {
    ssr: false,
    loading: () => <StaticHeroFallback />,
  }
);

export function HeroScene() {
  const [showPortraitModal, setShowPortraitModal] = useState<boolean>(false);

  return (
    <div
      className="relative w-full max-w-[520px] aspect-square mx-auto flex items-center justify-center select-none"
      aria-label="Real-time 3D interactive identity installation for Priyanshu Kumar"
    >
      {/* Background Cinematic Radial Lighting */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5B8CFF]/18 via-[#9A78FF]/12 to-transparent blur-3xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Floating Spatial Discipline Markers */}
      <div className="absolute top-4 left-6 z-20 px-3 py-1 rounded-full bg-[#101522]/90 border border-[#5B8CFF]/30 text-[11px] font-mono text-[#5B8CFF] shadow-lg backdrop-blur-md flex items-center gap-1.5">
        <Code2 size={13} />
        <span>React • TS</span>
      </div>

      <div className="absolute top-12 right-4 z-20 px-3 py-1 rounded-full bg-[#101522]/90 border border-[#9A78FF]/30 text-[11px] font-mono text-[#9A78FF] shadow-lg backdrop-blur-md flex items-center gap-1.5">
        <Cpu size={13} />
        <span>AI Systems</span>
      </div>

      <div className="absolute bottom-6 left-6 z-20 px-3 py-1 rounded-full bg-[#101522]/90 border border-[#5B8CFF]/30 text-[11px] font-mono text-[#F3F5FA] shadow-lg backdrop-blur-md flex items-center gap-1.5">
        <Shield size={13} className="text-[#5B8CFF]" />
        <span>SIH &apos;26 Finale</span>
      </div>

      {/* Real-time 3D Scene */}
      <div className="relative w-full h-full flex items-center justify-center">
        <DynamicHeroSceneCanvas />
      </div>

      {/* Candidate Portrait Verification Trigger Modal */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap z-20">
        <button
          type="button"
          onClick={() => setShowPortraitModal(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono text-[#A2ACBD] hover:text-[#F3F5FA] bg-[#101522]/90 hover:bg-[#171E2D] rounded-full border border-[rgba(190,205,230,0.14)] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
          title="Inspect candidate portrait references per Rule 4 approval requirements"
        >
          <Eye size={12} className="text-[#5B8CFF]" />
          <span>Candidate Portraits (Review Mode)</span>
        </button>
      </div>

      {/* Candidate Portrait Modal */}
      {showPortraitModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portrait-modal-title"
        >
          <div className="relative w-full max-w-2xl bg-[#101522] border border-[rgba(190,205,230,0.18)] rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 id="portrait-modal-title" className="text-lg font-bold text-[#F3F5FA] flex items-center gap-2">
                  <AlertCircle size={18} className="text-[#5B8CFF]" />
                  Portrait Asset Audit &amp; Verification
                </h3>
                <p className="text-xs text-[#A2ACBD] mt-1">
                  Per Rule 4 &amp; ASSET_MANIFEST.md: Unconfirmed portraits are never published to the public hero without explicit owner approval.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPortraitModal(false)}
                className="p-1.5 text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#171E2D] rounded-lg transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-3 rounded-xl bg-[#080B12] border border-[rgba(190,205,230,0.12)]">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-[#171E2D]">
                  <Image
                    src="/assets/portrait-wide-reference.jpeg"
                    alt="Cinematic developer portrait candidate (wide)"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
                <div className="text-xs font-mono text-[#F3F5FA] font-medium">1600×900 Cinematic Wide</div>
                <div className="text-[11px] text-[#A2ACBD] mt-0.5">Status: Supplied Candidate [NEEDS APPROVAL]</div>
              </div>

              <div className="p-3 rounded-xl bg-[#080B12] border border-[rgba(190,205,230,0.12)]">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2 bg-[#171E2D]">
                  <Image
                    src="/assets/portrait-headshot-reference.jpeg"
                    alt="Formal developer headshot portrait candidate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
                <div className="text-xs font-mono text-[#F3F5FA] font-medium">825×1024 Formal Headshot</div>
                <div className="text-[11px] text-[#A2ACBD] mt-0.5">Status: Supplied Candidate [NEEDS APPROVAL]</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#080B12]/80 border border-[#5B8CFF]/20 text-xs text-[#A2ACBD] flex items-start gap-2">
              <CheckCircle2 size={16} className="text-[#5B8CFF] shrink-0 mt-0.5" />
              <span>
                <strong>Production Status:</strong> The website defaults to the real-time 3D P/K geometric installation to ensure zero identity misrepresentation. Once Priyanshu approves either portrait for public release, it can be set as the hero visual instantly.
              </span>
            </div>

            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={() => setShowPortraitModal(false)}
                className="px-4 py-2 text-xs font-medium bg-[#171E2D] hover:bg-[#1E273A] text-[#F3F5FA] rounded-lg border border-[rgba(190,205,230,0.12)] transition-colors"
              >
                Close Audit View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
