import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white" aria-label="Skills and Technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          watermark="CAPABILITIES"
          title="SKILLS &amp; TOOLING"
          subtitle="Technologies applied across real project contributions and academic coursework—grounded in evidence, never arbitrary percentages."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="editorial-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#111318] tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#5A606D] px-2.5 py-0.5 rounded-full bg-[#F3F4F6]">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5A606D] leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#111318]">
                          {skill.name}
                        </span>
                        <CheckCircle2 size={14} className="text-[#2563EB]" aria-hidden="true" />
                      </div>
                      <p className="text-xs text-[#5A606D] leading-normal">
                        {skill.context}
                      </p>
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
