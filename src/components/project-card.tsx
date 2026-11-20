import React from "react";
import { Project } from "@/content/portfolio-data";
import { ProjectIllustration } from "./project-illustrations";
import { GithubIcon } from "./social-icons";
import { ExternalLink, ShieldCheck, UserCheck, Sparkles, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isCollaborative = project.type.includes("Collaborative");
  const isPersonalProduct = project.type.includes("Personal");
  const isClient = project.type.includes("Client");

  return (
    <article
      className="group relative flex flex-col justify-between rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)] p-6 sm:p-8 hover:border-[#5B8CFF]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#5B8CFF]/5"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div>
        {/* Top Header: Kind & Status Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide ${
              isPersonalProduct
                ? "bg-[#5B8CFF]/10 text-[#5B8CFF] border border-[#5B8CFF]/20"
                : isCollaborative
                ? "bg-[#9A78FF]/10 text-[#9A78FF] border border-[#9A78FF]/20"
                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            }`}
          >
            {isPersonalProduct ? (
              <Sparkles size={12} aria-hidden="true" />
            ) : isCollaborative ? (
              <Layers size={12} aria-hidden="true" />
            ) : (
              <ShieldCheck size={12} aria-hidden="true" />
            )}
            <span>{project.type}</span>
          </span>

          <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#171E2D] text-[#A2ACBD] border border-[rgba(190,205,230,0.1)]">
            {project.badge}
          </span>
        </div>

        {/* Bespoke Project Architecture Illustration */}
        <ProjectIllustration id={project.id} />

        {/* Project Title */}
        <h3
          id={`project-${project.id}-title`}
          className="text-xl sm:text-2xl font-bold text-[#F3F5FA] tracking-tight group-hover:text-[#5B8CFF] transition-colors mb-3"
        >
          {project.title}
        </h3>

        {/* Project Summary */}
        <p className="text-sm sm:text-base text-[#A2ACBD] leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Explicit Individual Contribution Callout */}
        <div className="mb-4 rounded-xl bg-[#080B12]/80 border border-[rgba(190,205,230,0.1)] p-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#5B8CFF] mb-1.5">
            <UserCheck size={14} className="shrink-0" aria-hidden="true" />
            <span>MY VERIFIED CONTRIBUTION</span>
          </div>
          <p className="text-xs sm:text-sm text-[#F3F5FA] leading-relaxed">
            {project.myContribution}
          </p>
        </div>

        {/* Strict Attribution Note */}
        <div className="mb-6 rounded-lg bg-[#171E2D]/50 border border-[rgba(190,205,230,0.08)] px-3.5 py-2.5 text-xs text-[#A2ACBD] leading-normal flex items-start gap-2">
          <span className="text-[#9A78FF] font-bold text-sm leading-none mt-0.5">•</span>
          <span>{project.attributionNote}</span>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-8" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-[#A2ACBD] bg-[#171E2D] rounded-md border border-[rgba(190,205,230,0.08)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="pt-4 border-t border-[rgba(190,205,230,0.1)] flex flex-wrap items-center gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-gradient-to-r from-[#5B8CFF] to-[#9A78FF] text-white hover:opacity-95 transition-opacity shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
            aria-label={`View live demo for ${project.title} (opens in new tab)`}
          >
            <span>Live Demo</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}

        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[#171E2D] text-[#F3F5FA] hover:bg-[#1E273A] border border-[rgba(190,205,230,0.14)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
            aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
          >
            <GithubIcon size={14} aria-hidden="true" />
            <span>GitHub Source</span>
          </a>
        )}

        {isClient && (
          <span className="text-xs font-mono text-[#A2ACBD] italic">
            Client website delivered • Private repository
          </span>
        )}
      </div>
    </article>
  );
}
