import React from "react";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { HeroEditorialPortrait } from "@/components/hero-scene/HeroEditorialPortrait";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-white overflow-hidden"
      aria-label="Introduction and Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant Single-Line Split Editorial Typography */}
        <div className="w-full text-center relative z-0">
          <h1 className="text-[9.2vw] sm:text-[8.6vw] lg:text-[8.2vw] xl:text-[118px] font-black tracking-tighter uppercase leading-[0.95] whitespace-nowrap select-none">
            <span className="text-outline">PRIYANSHU</span>{" "}
            <span className="text-[#111318]">KUMAR</span>
          </h1>
        </div>

        {/* 3-Column Editorial Lower Composition: Bio Left | Cutout Portrait Center | Social Pills Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end relative z-10 mt-4 sm:-mt-4 lg:-mt-8">
          {/* Left Bottom Block: Role, Pitch, CTA */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col items-start text-left pb-2 lg:pb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-tight mb-3">
              Developer &amp; AI Builder
            </h2>
            <p className="text-sm sm:text-base text-[#5A606D] leading-relaxed max-w-sm mb-6">
              Second-year B.Tech CSE student building clear, reliable web interfaces and AI-assisted products with honest engineering craft.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-[#111318] text-white hover:bg-[#272A34] transition-colors shadow-sm"
              >
                <span>Let&apos;s collaborate</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium rounded-full bg-white text-[#111318] border border-[#E5E7EB] hover:bg-[#F7F8FA] transition-colors"
              >
                <span>Selected Work</span>
              </a>
            </div>
          </div>

          {/* Centerpiece: Clean Cutout / 3D Portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <HeroEditorialPortrait />
          </div>

          {/* Right Bottom Block: Vertical Social Pills */}
          <div className="lg:col-span-3 order-3 flex flex-row flex-wrap lg:flex-col items-start lg:items-end justify-start lg:justify-end gap-3 pb-2 lg:pb-10">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] hover:border-[#111318] text-xs sm:text-sm font-medium text-[#111318] shadow-xs transition-all hover:-translate-y-0.5"
            >
              <GithubIcon size={16} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] hover:border-[#111318] text-xs sm:text-sm font-medium text-[#111318] shadow-xs transition-all hover:-translate-y-0.5"
            >
              <LinkedinIcon size={16} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] hover:border-[#111318] text-xs sm:text-sm font-medium text-[#111318] shadow-xs transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} aria-hidden="true" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] hover:border-[#111318] text-xs sm:text-sm font-medium text-[#111318] shadow-xs transition-all hover:-translate-y-0.5"
            >
              <Phone size={16} aria-hidden="true" />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
