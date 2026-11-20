import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";

export function ContributionsSection() {
  const { contributions } = PORTFOLIO_DATA;

  return (
    <section id="contributions" className="py-20 lg:py-28 relative" aria-label="Selected Engineering Contributions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ENGINEERING BREAKDOWN"
          title="Selected Project Contributions"
          description="Detailed technical breakdown of individual architectural contributions across collaborative systems and personal product engineering."
        />

        <div className="space-y-6">
          {contributions.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)] p-6 sm:p-8 hover:border-[#5B8CFF]/30 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#5B8CFF]/10 text-[#5B8CFF] border border-[#5B8CFF]/20">
                      {item.project}
                    </span>
                    <span className="text-xs font-mono text-[#A2ACBD]">
                      • {item.role}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F3F5FA] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-[#A2ACBD] bg-[#080B12] rounded-md border border-[rgba(190,205,230,0.08)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#A2ACBD] leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-[rgba(190,205,230,0.08)]">
                {item.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3.5 rounded-xl bg-[#080B12]/60 border border-[rgba(190,205,230,0.06)] flex items-start gap-2.5 text-xs text-[#F3F5FA] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
