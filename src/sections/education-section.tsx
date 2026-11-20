import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { GraduationCap, BookOpen, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 lg:py-28 relative" aria-label="Education and Academics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ACADEMIC BACKGROUND"
          title="Formal Computer Science Education"
          description="Developing foundational theoretical computer science and algorithmic problem-solving competencies alongside applied engineering projects."
        />

        <div className="rounded-3xl bg-[#101522] border border-[rgba(190,205,230,0.12)] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Degree & Institution */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#5B8CFF]/10 text-[#5B8CFF] border border-[#5B8CFF]/20">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#5B8CFF] uppercase tracking-wider">
                      Undergraduate Program
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F3F5FA] tracking-tight">
                      {education.degree}
                    </h3>
                  </div>
                </div>

                <div className="text-lg font-semibold text-[#9A78FF] mb-2">
                  {education.major}
                </div>

                <div className="text-base text-[#F3F5FA] font-medium mb-4">
                  {education.institution}
                </div>

                <p className="text-sm text-[#A2ACBD] leading-relaxed mb-6">
                  {education.overview}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-[rgba(190,205,230,0.1)] text-xs font-mono text-[#A2ACBD]">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#5B8CFF]" />
                  <span>{education.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#9A78FF]" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Core Coursework & Disciplines */}
            <div className="lg:col-span-6 rounded-2xl bg-[#080B12]/80 border border-[rgba(190,205,230,0.08)] p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F3F5FA] uppercase tracking-wider mb-4">
                <BookOpen size={16} className="text-[#5B8CFF]" />
                <span>Core Academic Curriculum</span>
              </div>

              <div className="space-y-3">
                {education.disciplines.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#101522] border border-[rgba(190,205,230,0.08)] flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#F3F5FA]">{item}</span>
                    <CheckCircle2 size={15} className="text-[#5B8CFF]" />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(190,205,230,0.08)] text-[11px] font-mono text-[#A2ACBD]">
                Focusing on theoretical principles directly transferable to robust frontend engineering and distributed architectures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

