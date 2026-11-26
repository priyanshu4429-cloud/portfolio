import React from "react";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { GraduationCap, Code2, Users2, Compass, Lightbulb } from "lucide-react";

export function AboutSection() {
  const { personal, education } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F8FA]" aria-label="About Priyanshu Kumar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          watermark="ABOUT"
          title="BACKGROUND &amp; ETHOS"
          subtitle="Bridging theoretical computer science foundations with disciplined frontend craft and transparent collaboration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Narrative Card */}
          <div className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-[#5A606D] leading-relaxed">
              <p>
                I am a second-year B.Tech student in Computer Science and Engineering at{" "}
                <span className="text-[#111318] font-semibold">{education.institution}</span>, based in West Bengal, India.
              </p>
              <p>
                My focus centers on frontend engineering and AI-assisted application architecture. I believe the true value of software lies in how reliably and clearly it solves real user problems. In collaborative environments, I take ownership of user-facing interfaces and clean client-server contracts.
              </p>
              <p>
                Whether competing in the{" "}
                <span className="text-[#111318] font-semibold">Smart India Hackathon 2026 Grand Finale</span> with Team Veyra, engineering evidence ingestion modules for collaborative cybersecurity platforms, or building lead automation prototypes, I uphold strict factual integrity and clear attribution.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#F3F4F6] text-[#111318] shrink-0">
                  <Compass size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#9CA3AF] uppercase">Location</div>
                  <div className="text-sm font-semibold text-[#111318]">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#F3F4F6] text-[#111318] shrink-0">
                  <GraduationCap size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#9CA3AF] uppercase">Academic Standing</div>
                  <div className="text-sm font-semibold text-[#111318]">B.Tech CSE, 2nd Year</div>
                </div>
              </div>
            </div>
          </div>

          {/* Principles Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="editorial-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] uppercase tracking-wider mb-1.5">
                <Code2 size={15} aria-hidden="true" />
                <span>Frontend Craft</span>
              </div>
              <h3 className="text-base font-bold text-[#111318] mb-1">
                Precision &amp; Accessibility First
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606D] leading-relaxed">
                Prioritizing semantic HTML, WCAG 2.2 AA contrast, responsive typography, and fast rendering over gratuitous clutter.
              </p>
            </div>

            <div className="editorial-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#111318] uppercase tracking-wider mb-1.5">
                <Users2 size={15} aria-hidden="true" />
                <span>Transparent Collaboration</span>
              </div>
              <h3 className="text-base font-bold text-[#111318] mb-1">
                Clear Boundaries &amp; Respect
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606D] leading-relaxed">
                Celebrating team milestones while clearly distinguishing individual frontend work from teammates&apos; backend and ML systems.
              </p>
            </div>

            <div className="editorial-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 uppercase tracking-wider mb-1.5">
                <Lightbulb size={15} aria-hidden="true" />
                <span>AI-Assisted Execution</span>
              </div>
              <h3 className="text-base font-bold text-[#111318] mb-1">
                Practical Product Building
              </h3>
              <p className="text-xs sm:text-sm text-[#5A606D] leading-relaxed">
                Applying modern generative models to accelerate prototyping and workflow automation with manual architectural review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
