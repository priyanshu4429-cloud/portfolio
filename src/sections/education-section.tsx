import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { GraduationCap, BookOpen, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 lg:py-28 bg-white" aria-label="Education and Academics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          watermark="ACADEMICS"
          title="EDUCATION"
          subtitle="Developing foundational computer science and algorithmic problem-solving skills alongside practical engineering."
        />

        <div className="editorial-card rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-[#111318] text-white">
                    <GraduationCap size={26} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#5A606D] uppercase tracking-wider">
                      Undergraduate Program
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111318] tracking-tight">
                      {education.degree}
                    </h3>
                  </div>
                </div>

                <div className="text-lg font-semibold text-[#2563EB] mb-2">
                  {education.major}
                </div>

                <div className="text-base text-[#111318] font-medium mb-4">
                  {education.institution}
                </div>

                <p className="text-sm text-[#5A606D] leading-relaxed mb-6">
                  {education.overview}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-[#E5E7EB] text-xs font-mono text-[#5A606D]">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#111318]" aria-hidden="true" />
                  <span>{education.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#111318]" aria-hidden="true" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#111318] uppercase tracking-wider mb-4 font-semibold">
                <BookOpen size={15} aria-hidden="true" />
                <span>Core Academic Curriculum</span>
              </div>

              <div className="space-y-3">
                {education.disciplines.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#111318]">{item}</span>
                    <CheckCircle2 size={15} className="text-[#2563EB]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
