import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { Trophy, CheckCircle2, ShieldCheck, Users } from "lucide-react";

export function AchievementsSection() {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-20 lg:py-28 relative" aria-label="Achievements and Recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HONORS &amp; RECOGNITION"
          title="Verified Competitive &amp; Collaborative Achievements"
          description="Substantiated milestones representing collaborative team performance and competitive engineering."
        />

        <div className="space-y-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101522] via-[#171E2D] to-[#101522] border border-[rgba(190,205,230,0.16)] p-8 sm:p-10 shadow-2xl"
            >
              {/* Subtle ambient light glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#5B8CFF]/20 via-[#9A78FF]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[rgba(190,205,230,0.1)]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#5B8CFF]/15 text-[#5B8CFF] border border-[#5B8CFF]/30">
                      <Trophy size={14} />
                      {item.scope}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3F5FA] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-sm font-mono text-[#A2ACBD] mt-1 flex items-center gap-2">
                    <Users size={14} className="text-[#9A78FF]" />
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#080B12]/80 border border-[rgba(190,205,230,0.12)] text-center shrink-0">
                  <div className="text-2xl font-extrabold font-mono text-[#5B8CFF]">TOP 30</div>
                  <div className="text-[11px] font-mono text-[#A2ACBD] uppercase">National Finalist</div>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-base sm:text-lg text-[#F3F5FA] leading-relaxed mb-6 font-medium">
                  {item.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {item.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-[#080B12]/60 border border-[rgba(190,205,230,0.08)] flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-[#5B8CFF] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#A2ACBD] leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(190,205,230,0.08)] flex items-center gap-2 text-xs font-mono text-[#A2ACBD]">
                <ShieldCheck size={14} className="text-[#5B8CFF]" />
                <span>
                  Team achievement with Team Veyra. Priyanshu led frontend engineering with React &amp; TypeScript.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
