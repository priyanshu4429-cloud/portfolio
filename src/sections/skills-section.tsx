import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 lg:py-28 relative" aria-label="Skills and Technical Disciplines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECHNICAL REPERTOIRE"
          title="Verified Capabilities &amp; Applied Tooling"
          description="A curated overview of technologies applied across real project contributions and academic studies—grounded in evidence, not arbitrary percentages."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)] p-6 sm:p-7 flex flex-col justify-between hover:border-[#5B8CFF]/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#F3F5FA] tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#5B8CFF] px-2 py-0.5 rounded bg-[#5B8CFF]/10">
                    Group {idx + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#A2ACBD] leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#080B12]/80 border border-[rgba(190,205,230,0.08)] flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#F3F5FA]">
                          {skill.name}
                        </span>
                        <CheckCircle2 size={14} className="text-[#5B8CFF]" aria-hidden="true" />
                      </div>
                      <p className="text-xs text-[#A2ACBD] leading-normal">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(190,205,230,0.08)] flex items-center gap-2 text-[11px] font-mono text-[#A2ACBD]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Demonstrated in live code &amp; hackathons</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical attribution disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-[#101522]/60 border border-[rgba(190,205,230,0.08)] flex items-start gap-3 text-xs text-[#A2ACBD]">
          <ShieldAlert size={16} className="text-[#9A78FF] shrink-0 mt-0.5" />
          <span>
            <strong>Transparency Notice:</strong> Skills listed above reflect actual applied experience in academic coursework, personal startup projects, collaborative hackathons, and client delivery. In alignment with professional engineering ethics, no fabricated years of commercial experience or arbitrary proficiency scores are presented.
          </span>
        </div>
      </div>
    </section>
  );
}

