import React from "react";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { ShieldCheck } from "lucide-react";

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 lg:py-28 relative" aria-label="Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PORTFOLIO WORK"
          title="Featured Projects &amp; Software Systems"
          description="An authentic showcase of products, collaborative hackathon submissions, and client work with transparent attribution of individual contributions."
        />

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Verification banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#101522] via-[#171E2D] to-[#101522] border border-[rgba(190,205,230,0.14)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#5B8CFF]/10 text-[#5B8CFF]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F3F5FA]">
                Independent Code Verification
              </div>
              <div className="text-xs text-[#A2ACBD]">
                All public repositories and live demonstration links point directly to active codebases.
              </div>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono font-medium rounded-lg bg-[#080B12] hover:bg-[#101522] text-[#F3F5FA] border border-[rgba(190,205,230,0.16)] transition-colors whitespace-nowrap"
          >
            Explore priyanshu4429-cloud on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

