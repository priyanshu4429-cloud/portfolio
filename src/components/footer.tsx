import React from "react";
import { BrandMark } from "./brand-mark";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#080B12] border-t border-[rgba(190,205,230,0.12)] pt-16 pb-12 text-[#A2ACBD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(190,205,230,0.1)]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <BrandMark size={34} />
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#F3F5FA] tracking-tight">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-xs font-mono text-[#5B8CFF]">
                  {PORTFOLIO_DATA.personal.role}
                </span>
              </div>
            </div>
            <p className="text-sm text-[#A2ACBD] leading-relaxed max-w-sm">
              Second-year Computer Science and Engineering student at MCKV Institute of Engineering, building high-craft user interfaces, frontend dashboards, and AI-assisted workflows.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#5B8CFF] bg-[#101522] px-3 py-1.5 rounded-lg border border-[rgba(190,205,230,0.1)]">
              <ShieldCheck size={14} />
              <span>Strict Factual Integrity &amp; Attribution</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F3F5FA] font-semibold mb-1">
              Index
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#about" className="hover:text-[#5B8CFF] transition-colors">
                About Me
              </a>
              <a href="#skills" className="hover:text-[#5B8CFF] transition-colors">
                Skills &amp; Tech
              </a>
              <a href="#projects" className="hover:text-[#5B8CFF] transition-colors">
                Projects
              </a>
              <a href="#contributions" className="hover:text-[#5B8CFF] transition-colors">
                Contributions
              </a>
              <a href="#achievements" className="hover:text-[#5B8CFF] transition-colors">
                Achievements
              </a>
              <a href="#education" className="hover:text-[#5B8CFF] transition-colors">
                Education
              </a>
              <a href="#contact" className="hover:text-[#5B8CFF] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect & Profiles */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F3F5FA] font-semibold mb-1">
              Profiles &amp; Direct
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#5B8CFF] transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#5B8CFF] transition-colors"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-2 hover:text-[#5B8CFF] transition-colors"
              >
                <Mail size={15} />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="inline-flex items-center gap-2 hover:text-[#5B8CFF] transition-colors"
              >
                <Phone size={15} />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A2ACBD]">
          <div>
            © {currentYear} {PORTFOLIO_DATA.personal.name}. All verified projects attributed accurately.
          </div>
          <div className="flex items-center gap-4">
            <span>West Bengal, India</span>
            <span>•</span>
            <a href="#main-content" className="hover:text-[#5B8CFF] transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
