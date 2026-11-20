"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Code2, Shield, Sparkles, Cpu } from "lucide-react";

// Dynamic import of 3D WebGL Holographic overlay
const DynamicHolographicGlobe3D = dynamic(
  () => import("./HolographicGlobe3D").then((m) => m.HolographicGlobe3D),
  { ssr: false }
);

export function HeroCinematicPortal() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeView, setActiveView] = useState<"cinematic" | "formal">("cinematic");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Subtle tilt angles (max 10 degrees)
      setMousePos({ x: x * 10, y: -y * 10 });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[620px] mx-auto select-none py-4"
      style={{ perspective: "1200px" }}
      aria-label="Interactive 3D developer identity portal of Priyanshu Kumar"
    >
      {/* Background Cybernetic Radial Aura */}
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#5B8CFF]/25 via-[#9A78FF]/15 to-transparent blur-3xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* 3D Tilting Stage Container */}
      <div
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
            : "transform 0.8s cubic-bezier(0.2, 0, 0, 1)",
        }}
        className="relative w-full rounded-3xl overflow-hidden glass-panel-raised border border-[rgba(190,205,230,0.2)] shadow-2xl shadow-black/60 group"
      >
        {/* Dynamic Specular Sheen across glass */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity group-hover:opacity-40"
          style={{
            transform: `translateX(${mousePos.x * 4}px) translateY(${mousePos.y * 4}px)`,
          }}
          aria-hidden="true"
        />

        {/* Top Floating Header HUD */}
        <div className="absolute top-4 inset-x-4 z-30 flex items-center justify-between text-xs font-mono text-[#F3F5FA] pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080B12]/80 border border-[rgba(190,205,230,0.16)] backdrop-blur-md shadow-lg pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-xs text-[#5B8CFF]">PRIYANSHU.DEV // 3D PORTAL</span>
          </div>

          {/* Portrait Switcher Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#080B12]/80 border border-[rgba(190,205,230,0.16)] backdrop-blur-md pointer-events-auto">
            <button
              type="button"
              onClick={() => setActiveView("cinematic")}
              className={`px-2.5 py-1 text-[10px] font-mono rounded-full transition-all ${
                activeView === "cinematic"
                  ? "bg-[#5B8CFF] text-[#080B12] font-bold shadow-sm"
                  : "text-[#A2ACBD] hover:text-white"
              }`}
            >
              Studio 3D
            </button>
            <button
              type="button"
              onClick={() => setActiveView("formal")}
              className={`px-2.5 py-1 text-[10px] font-mono rounded-full transition-all ${
                activeView === "formal"
                  ? "bg-[#9A78FF] text-[#080B12] font-bold shadow-sm"
                  : "text-[#A2ACBD] hover:text-white"
              }`}
            >
              Formal
            </button>
          </div>
        </div>

        {/* Primary Image Viewport */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#080B12] overflow-hidden">
          {activeView === "cinematic" ? (
            <Image
              src="/assets/priyanshu-cinematic-hero.jpg"
              alt="Priyanshu Kumar in his developer studio with holographic interfaces and dual monitor workstation"
              fill
              priority
              className="object-cover object-center filter contrast-[1.05] brightness-[1.02] transform transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 620px"
            />
          ) : (
            <Image
              src="/assets/priyanshu-formal-portrait.jpg"
              alt="Priyanshu Kumar formal professional portrait in navy blazer"
              fill
              priority
              className="object-cover object-top filter contrast-[1.04] brightness-[1.02] transform transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 620px"
            />
          )}

          {/* Vignette & Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/40 via-transparent to-[#080B12]/40" />

          {/* Real-time 3D WebGL Holographic Globe Layer (Overlay on Cinematic View) */}
          {activeView === "cinematic" && <DynamicHolographicGlobe3D />}
        </div>

        {/* Floating Spatial 3D HUD Chips (Anchored with translateZ for real depth) */}
        <div
          className="absolute bottom-4 left-4 z-20 flex flex-col gap-2 max-w-[280px]"
          style={{ transform: "translateZ(35px)" }}
        >
          {/* Chip 1 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080B12]/85 border border-[#5B8CFF]/40 text-xs font-mono text-[#F3F5FA] shadow-xl backdrop-blur-md">
            <Code2 size={14} className="text-[#5B8CFF] shrink-0" />
            <span className="truncate">React • TypeScript • Next.js</span>
          </div>

          {/* Chip 2 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080B12]/85 border border-emerald-500/40 text-xs font-mono text-[#F3F5FA] shadow-xl backdrop-blur-md">
            <Shield size={14} className="text-emerald-400 shrink-0" />
            <span className="truncate">SIH &apos;26 Grand Finale Finalist</span>
          </div>
        </div>

        {/* Floating Spatial Badge (Right Side) */}
        <div
          className="absolute bottom-4 right-4 z-20 hidden sm:flex flex-col items-end gap-1.5"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080B12]/85 border border-[#9A78FF]/40 text-xs font-mono text-[#9A78FF] shadow-xl backdrop-blur-md">
            <Cpu size={14} className="text-[#9A78FF] shrink-0" />
            <span>AI Systems &amp; Workflows</span>
          </div>
          <span className="text-[10px] font-mono text-[#A2ACBD] bg-[#080B12]/80 px-2 py-0.5 rounded-md border border-[rgba(190,205,230,0.1)]">
            Interactive 3D Stage
          </span>
        </div>
      </div>

      {/* Under-card Identity Pill */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#A2ACBD] px-2">
        <span className="flex items-center gap-1.5">
          <Sparkles size={13} className="text-[#5B8CFF]" />
          <span>Interactive Spatial Depth Active</span>
        </span>
        <span className="text-[#5B8CFF] font-semibold">MCKV Institute of Engineering • 2nd Year</span>
      </div>
    </div>
  );
}
