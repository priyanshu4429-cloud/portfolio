import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { GraduationCap, Code2, Users2, Compass, Lightbulb } from "lucide-react";

export function AboutSection() {
  const { personal, education } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 lg:py-28 relative" aria-label="About Priyanshu Kumar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="BIOGRAPHY &amp; ETHOS"
          title="Bridging Theoretical Foundations with Practical Engineering"
          description="A disciplined approach to software craft: creating tangible, human-centric digital interfaces backed by verified teamwork and continuous learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card with Formal Portrait Inset */}
          <div className="lg:col-span-7 rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)] p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              {/* Formal Portrait Card */}
              <div className="relative w-28 sm:w-36 aspect-[3/4] rounded-2xl overflow-hidden shrink-0 border border-[rgba(190,205,230,0.18)] shadow-lg shadow-black/40 bg-[#080B12]">
                <Image
                  src="/assets/priyanshu-formal-portrait.jpg"
                  alt="Priyanshu Kumar formal professional portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 120px, 150px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/80 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 inset-x-0 text-center text-[9px] font-mono text-[#5B8CFF] uppercase font-bold">
                  Priyanshu
                </span>
              </div>

              {/* Narrative Text */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#A2ACBD] leading-relaxed">
                <p>
                  I am a second-year B.Tech student in Computer Science and Engineering at{" "}
                  <span className="text-[#F3F5FA] font-semibold">{education.institution}</span>, based in West Bengal, India.
                </p>
                <p>
                  My focus centers on frontend engineering and AI-assisted application architecture. I believe the true value of code lies in how reliably and thoughtfully it resolves user challenges. In team environments, I lead user interfaces and integrate clean client-side contracts with backend systems.
                </p>
              </div>
            </div>

            <p className="text-sm text-[#A2ACBD] leading-relaxed mb-6">
              Whether competing in the <span className="text-[#5B8CFF] font-medium">Smart India Hackathon 2026 Grand Finale</span> with Team Veyra, engineering evidence ingestion modules for collaborative cybersecurity platforms, or prototyping lead automation tools, I hold myself to strict factual accountability and respectful collaboration.
            </p>

            <div className="pt-6 border-t border-[rgba(190,205,230,0.1)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#5B8CFF]/10 text-[#5B8CFF] shrink-0 mt-0.5">
                  <Compass size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#A2ACBD] uppercase">Location</div>
                  <div className="text-sm font-semibold text-[#F3F5FA]">{personal.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#9A78FF]/10 text-[#9A78FF] shrink-0 mt-0.5">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#A2ACBD] uppercase">Academic Status</div>
                  <div className="text-sm font-semibold text-[#F3F5FA]">B.Tech CSE, 2nd Year</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5B8CFF] uppercase tracking-wider mb-2">
                <Code2 size={16} />
                <span>Frontend Craft</span>
              </div>
              <h3 className="text-base font-bold text-[#F3F5FA] mb-1.5">
                Precision &amp; Accessibility First
              </h3>
              <p className="text-xs sm:text-sm text-[#A2ACBD] leading-relaxed">
                Prioritizing semantic HTML, WCAG 2.2 AA contrast, responsive typography, and sub-second rendering over gratuitous animations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9A78FF] uppercase tracking-wider mb-2">
                <Users2 size={16} />
                <span>Transparent Collaboration</span>
              </div>
              <h3 className="text-base font-bold text-[#F3F5FA] mb-1.5">
                Clear Boundaries &amp; Mutual Respect
              </h3>
              <p className="text-xs sm:text-sm text-[#A2ACBD] leading-relaxed">
                Celebrating team achievements while clearly distinguishing personal contributions from teammates&apos; backend and ML engineering work.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <Lightbulb size={16} />
                <span>AI-Assisted Acceleration</span>
              </div>
              <h3 className="text-base font-bold text-[#F3F5FA] mb-1.5">
                Augmenting Real Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#A2ACBD] leading-relaxed">
                Using modern generative models to accelerate research, prototyping, and workflows while verifying architectural rigor manually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
