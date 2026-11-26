import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { Trophy, CheckCircle2, Users } from "lucide-react";

export function AchievementsSection() {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#F7F8FA]" aria-label="Achievements and Recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          watermark="RECOGNITION"
          title="ACHIEVEMENTS"
          subtitle="Substantiated national-level team recognition and collaborative competitive milestones."
        />

        <div className="space-y-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="editorial-card rounded-3xl p-8 sm:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#111318] text-white">
                      <Trophy size={13} aria-hidden="true" />
                      {item.scope}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-sm font-mono text-[#5A606D] mt-1.5 flex items-center gap-2">
                    <Users size={14} className="text-[#2563EB]" aria-hidden="true" />
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className="px-6 py-4 rounded-2xl bg-[#111318] text-white text-center shrink-0">
                  <div className="text-2xl font-extrabold font-mono">TOP 30</div>
                  <div className="text-[11px] font-mono text-[#9CA3AF] uppercase">National Finalist</div>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-base sm:text-lg text-[#111318] leading-relaxed mb-6 font-medium">
                  {item.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {item.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-xs sm:text-sm text-[#5A606D] leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
