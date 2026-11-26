"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { ProjectIllustration } from "@/components/project-illustrations";
import { ChevronDown } from "lucide-react";

const CONTRIBUTION_ROWS = [
  {
    id: "ai-agency-automation",
    project: "AI Agency Automation Platform",
    role: "Solo Product Architect & Developer",
    scope: "Personal Product • In Development",
    detail: PORTFOLIO_DATA.contributions[2],
  },
  {
    id: "veyra-sentinel",
    project: "Veyra Sentinel",
    role: "Frontend Developer (React & TypeScript)",
    scope: "SIH 2026 Grand Finale • Top 30",
    detail: PORTFOLIO_DATA.contributions[0],
  },
  {
    id: "trusttrace",
    project: "TrustTrace",
    role: "Worker 02 Pipeline Engineer",
    scope: "Collaborative Cybersecurity",
    detail: PORTFOLIO_DATA.contributions[1],
  },
  {
    id: "rk-traders",
    project: "R K Traders",
    role: "Web Developer",
    scope: "Client Website Delivery",
    detail: null,
  },
];

export function ContributionsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>("veyra-sentinel");

  return (
    <section
      id="contributions"
      className="py-20 lg:py-28 bg-[#141416] text-white relative overflow-hidden"
      aria-label="Selected Contributions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant Dark Watermark Header + Right Metadata (matching Image 3) */}
        <div className="relative mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="relative select-none">
            <div
              className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight uppercase leading-none text-white/[0.04] pointer-events-none"
              aria-hidden="true"
            >
              CONTRIBUTIONS
            </div>
            <h2 className="-mt-6 sm:-mt-8 md:-mt-10 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase text-white">
              /SELECTED CONTRIBUTIONS
            </h2>
          </div>

          <span className="text-xs sm:text-sm font-mono text-[#9CA3AF]">
            Project-based engineering • B.Tech CSE 2nd Year
          </span>
        </div>

        {/* Clean Horizontal Row List with Hairline Dividers */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {CONTRIBUTION_ROWS.map((row) => {
            const isExpanded = expandedId === row.id;
            const isHovered = hoveredId === row.id;

            return (
              <div
                key={row.id}
                onMouseEnter={() => setHoveredId(row.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative group py-6 sm:py-8 transition-colors hover:bg-white/[0.02] px-2 sm:px-4"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : row.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded-lg"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#5B8CFF] transition-colors">
                      {row.project}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] mt-1">{row.role}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm font-mono text-[#D1D5DB]">
                      {row.scope}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-[#9CA3AF] transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-white" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {/* Floating Tilted Preview Card on Desktop Hover (matching Image 3) */}
                {isHovered && (
                  <div
                    className="hidden lg:block absolute right-64 top-1/2 -translate-y-1/2 z-30 w-64 pointer-events-none transform -rotate-3 transition-all duration-200 shadow-2xl rounded-xl overflow-hidden border border-white/20 bg-[#080B12]"
                    aria-hidden="true"
                  >
                    <div className="p-2 scale-90 origin-center">
                      <ProjectIllustration id={row.id} />
                    </div>
                  </div>
                )}

                {/* Expandable Technical Details */}
                {isExpanded && row.detail && (
                  <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {row.detail.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#E5E7EB] leading-relaxed"
                      >
                        • {h}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
