"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contributions", href: "#contributions" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Skip to Content Accessible Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#5B8CFF] text-[#080B12] font-semibold rounded-md shadow-lg outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#080B12]/85 backdrop-blur-md border-b border-[rgba(190,205,230,0.12)] py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="#"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded-lg p-1"
              aria-label="Priyanshu Kumar - Home"
            >
              <BrandMark size={32} />
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-[#F3F5FA] group-hover:text-[#5B8CFF] transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-[11px] font-mono text-[#A2ACBD] tracking-wider hidden sm:block">
                  Developer & AI Builder
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#101522] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#101522] rounded-lg transition-colors border border-[rgba(190,205,230,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon size={16} aria-hidden="true" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#101522] rounded-lg transition-colors border border-[rgba(190,205,230,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-[#5B8CFF] to-[#9A78FF] text-white hover:opacity-95 transition-opacity shadow-sm shadow-[#5B8CFF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#101522] rounded-lg border border-[rgba(190,205,230,0.1)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden fixed inset-x-0 top-[60px] bg-[#080B12]/95 backdrop-blur-xl border-b border-[rgba(190,205,230,0.14)] p-6 shadow-2xl transition-all"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <nav className="flex flex-col gap-2 mb-6" aria-label="Mobile Sections">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-[#F3F5FA] hover:bg-[#101522] hover:text-[#5B8CFF] rounded-lg transition-colors border border-transparent hover:border-[rgba(190,205,230,0.1)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-[rgba(190,205,230,0.12)] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-[#5B8CFF] to-[#9A78FF] text-white"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#101522] rounded-lg border border-[rgba(190,205,230,0.1)]"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} aria-hidden="true" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#101522] rounded-lg border border-[rgba(190,205,230,0.1)]"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="p-2 text-[#A2ACBD] hover:text-[#F3F5FA] hover:bg-[#101522] rounded-lg border border-[rgba(190,205,230,0.1)]"
                  aria-label="Email Priyanshu"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
