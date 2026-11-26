import React from "react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#141416] text-[#9CA3AF] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 flex flex-col items-start gap-3">
            <span className="text-lg font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-xs font-mono text-[#D1D5DB]">
              {PORTFOLIO_DATA.personal.role}
            </span>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-sm mt-1">
              Second-year B.Tech CSE student at MCKV Institute of Engineering, building clear web interfaces and AI-assisted applications with verified attribution.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#projects" className="hover:text-white transition-colors">Work</a>
              <a href="#contributions" className="hover:text-white transition-colors">Contributions</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Connect
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={15} />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={15} />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9CA3AF]">
          <div>
            © {currentYear} {PORTFOLIO_DATA.personal.name}. All verified projects attributed accurately.
          </div>
          <div className="flex items-center gap-4">
            <span>West Bengal, India</span>
            <span>•</span>
            <a href="#main-content" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
