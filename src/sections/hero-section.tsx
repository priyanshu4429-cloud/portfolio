import React from "react";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { HeroCinematicPortal } from "@/components/hero-scene/HeroCinematicPortal";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
      aria-label="Introduction and Hero"
    >
      {/* Background Ambience and Subtle Trajectory Lines */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5B8CFF]/12 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#9A78FF]/12 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Narrative & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101522] border border-[rgba(190,205,230,0.16)] text-xs font-mono text-[#5B8CFF] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-[#F3F5FA] font-medium">Available for Internships &amp; Select Projects</span>
            </div>

            {/* Main Name & Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3F5FA] leading-[1.1] mb-4">
              Priyanshu Kumar
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#5B8CFF] via-[#9A78FF] to-[#F3F5FA] font-semibold mb-6">
              {personal.role}
            </div>

            {/* Grounded Pitch */}
            <p className="text-base sm:text-lg text-[#A2ACBD] leading-relaxed max-w-xl mb-8">
              Second-year Computer Science and Engineering student at MCKV Institute of Engineering. I build reliable frontend interfaces, interactive data dashboards, and AI-assisted workflows—grounded in honest attribution, clean code craft, and real product utility.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-[#5B8CFF] to-[#9A78FF] text-white hover:opacity-95 transition-opacity shadow-lg shadow-[#5B8CFF]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-[#101522] hover:bg-[#171E2D] text-[#F3F5FA] border border-[rgba(190,205,230,0.18)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Verified Quick Proofs */}
            <div className="pt-6 border-t border-[rgba(190,205,230,0.1)] w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              {personal.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase text-[#A2ACBD] tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-sm font-semibold text-[#F3F5FA] mt-0.5">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Genuine 3D Interactive Hero Portal */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            <HeroCinematicPortal />
          </div>
        </div>
      </div>
    </section>
  );
}
