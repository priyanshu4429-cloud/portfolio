"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { ArrowUpRight } from "lucide-react";

type FilterCategory = "All" | "Personal" | "Collaborative" | "Client";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const { projects, personal } = PORTFOLIO_DATA;

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.type.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const filters: FilterCategory[] = ["All", "Personal", "Collaborative", "Client"];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white" aria-label="Selected Work and Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          watermark="PORTFOLIO"
          title="SELECTED WORK"
          subtitle="Verified personal products, collaborative hackathon systems, and client web deliveries with clear individual attribution."
        />

        {/* Filter Bar & GitHub Pill (matching Image 2) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by type">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${activeFilter === filter
                  ? "bg-[#111318] text-white shadow-xs"
                  : "bg-white text-[#5A606D] hover:text-[#111318] border border-transparent hover:border-[#E5E7EB]"
                  }`}
              >
                {filter === "Personal" ? "Personal Product" : filter}
              </button>
            ))}
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] hover:border-[#111318] text-xs sm:text-sm font-medium text-[#111318] transition-colors shadow-xs"
          >
            <span>View All on GitHub</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        {/* 2-Column Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
