"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BrandMark } from "./brand-mark";
import { Shield, Cpu, Code2, Eye, X, CheckCircle2, AlertCircle } from "lucide-react";

export function OrbitalHeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showPortraitModal, setShowPortraitModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only track mouse on devices with fine pointer and no reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x: x * 15, y: y * 15 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center p-4 select-none"
      aria-label="Interactive 3D orbital system representing Priyanshu Kumar's technical disciplines"
    >
      {/* Background Cinematic Radial Glow */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5B8CFF]/15 via-[#9A78FF]/10 to-transparent blur-3xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Outer Orbit Track */}
      <div
        className="absolute inset-6 rounded-full border border-[rgba(190,205,230,0.1)] border-dashed animate-orbit pointer-events-none"
        aria-hidden="true"
      >
        {/* Orbit Marker 1: Frontend */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#101522] border border-[#5B8CFF]/30 text-[10px] font-mono text-[#5B8CFF] shadow-sm flex items-center gap-1.5 whitespace-nowrap">
          <Code2 size={12} />
          <span>React • TS</span>
        </div>

        {/* Orbit Marker 2: AI Workflows */}
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 px-2.5 py-1 rounded-full bg-[#101522] border border-[#9A78FF]/30 text-[10px] font-mono text-[#9A78FF] shadow-sm flex items-center gap-1.5 whitespace-nowrap">
          <Cpu size={12} />
          <span>AI Systems</span>
        </div>

        {/* Orbit Marker 3: SIH Grand Finale */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[#101522] border border-[#5B8CFF]/30 text-[10px] font-mono text-[#F3F5FA] shadow-sm flex items-center gap-1.5 whitespace-nowrap">
          <Shield size={12} className="text-[#5B8CFF]" />
          <span>SIH &apos;26 Finale</span>
        </div>
      </div>

      {/* Middle Orbit Track */}
      <div
        className="absolute inset-16 rounded-full border border-[rgba(91,140,255,0.15)] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-[#5B8CFF] shadow-[0_0_10px_#5B8CFF]" />
        <div className="absolute bottom-6 left-10 w-2 h-2 rounded-full bg-[#9A78FF] shadow-[0_0_10px_#9A78FF]" />
      </div>

      {/* Core Floating Glass Platter with Parallax Tilt */}
      <div
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
        }}
        className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl glass-panel-raised p-6 flex flex-col items-center justify-between shadow-2xl border border-[rgba(190,205,230,0.18)] backdrop-blur-xl group"
      >
        {/* Subtle inner grid lines */}
        <div
          className="absolute inset-0 rounded-3xl opacity-10 pointer-events-none bg-[radial-gradient(#5B8CFF_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        {/* Top Header Card Info */}
        <div className="w-full flex items-center justify-between text-xs text-[#A2ACBD] font-mono z-10">
          <span className="flex items-center gap-1 text-[#5B8CFF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
            PK.DEV
          </span>
          <span className="text-[11px] text-[#A2ACBD]">PORTFOLIO CORE</span>
        </div>

        {/* Center Geometric Ligature */}
        <div className="relative my-auto flex flex-col items-center justify-center z-10">
          <div className="relative p-5 rounded-2xl bg-[#080B12]/80 border border-[rgba(190,205,230,0.12)] shadow-inner">
            <BrandMark size={72} />
          </div>
          <span className="mt-3 text-sm font-semibold tracking-wide text-[#F3F5FA]">
            Priyanshu Kumar
          </span>
          <span className="text-xs font-mono text-[#A2ACBD]">
            MCKV Institute of Engineering
          </span>
        </div>

        {/* Bottom Card Footer */}
        <div className="w-full pt-3 border-t border-[rgba(190,205,230,0.1)] flex items-center justify-between text-[11px] font-mono text-[#A2ACBD] z-10">
          <span>CSE • 2ND YEAR</span>
          <span className="text-[#5B8CFF] font-semibold">WB, INDIA</span>
        </div>
      </div>

      {/* Owner Portrait Verification Drawer Toggle */}
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
                <strong>Production Status:</strong> The website defaults to the high-craft geometric P/K orbital engine to ensure zero identity misrepresentation. Once Priyanshu approves either portrait for public release, it can be set as the hero visual instantly.
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
