import React from "react";
import { Project } from "@/content/portfolio-data";
import { ProjectIllustration } from "./project-illustrations";
import { GithubIcon } from "./social-icons";
import { ArrowUpRight, ExternalLink, UserCheck } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isClient = project.type.includes("Client");
  const primaryLink = project.demoUrl || project.repositoryUrl;

  return (
    <article
      className="editorial-card group rounded-2xl p-4 sm:p-5 flex flex-col justify-between"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div>
        {/* Visual Preview Container (Dark contrast preview inside light card, matching Image 2) */}
        <div className="relative rounded-xl overflow-hidden bg-[#0D1017] mb-5">
          {/* Top-left Status Pill */}
          <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-white/95 text-[#111318] text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
            {project.badge}
          </div>

          {/* Bespoke Project Illustration */}
          <div className="p-2 pt-8">
            <ProjectIllustration id={project.id} />
          </div>

          {/* Floating Circular Arrow Action (matching Image 2) */}
          {primaryLink && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 bottom-4 z-20 w-10 h-10 rounded-full bg-white text-[#111318] flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label={`Open ${project.title} (opens in new tab)`}
            >
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Project Title */}
        <div className="px-1">
          <div className="text-xs font-mono text-[#5A606D] uppercase tracking-wider mb-1">
            {project.type}
          </div>
          <h3
            id={`project-${project.id}-title`}
            className="text-lg sm:text-xl font-bold text-[#111318] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors"
          >
            {project.title}
          </h3>

          {/* Concise Summary */}
          <p className="text-sm text-[#5A606D] leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Verified Contribution Callout */}
          <div className="mb-3 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] p-3.5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#111318] uppercase mb-1">
              <UserCheck size={13} className="text-[#2563EB] shrink-0" aria-hidden="true" />
              <span>Verified Contribution</span>
            </div>
            <p className="text-xs text-[#374151] leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Attribution Boundary */}
          <p className="text-[11px] text-[#6B7280] leading-normal mb-4">
            • {project.attributionNote}
          </p>
        </div>
      </div>

      {/* Bottom Tags & Links */}
      <div className="px-1 pt-3 border-t border-[#F3F4F6] flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-[#374151] bg-[#F7F8FA] rounded-full border border-[#E5E7EB]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111318] hover:text-[#2563EB] transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}

          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A606D] hover:text-[#111318] transition-colors"
            >
              <GithubIcon size={13} aria-hidden="true" />
              <span>Source Code</span>
            </a>
          )}

          {isClient && (
            <span className="text-xs font-mono text-[#9CA3AF]">
              Client delivery • Private repository
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
