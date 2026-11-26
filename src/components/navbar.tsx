"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", count: "4", href: "#projects" },
  { label: "Contributions", count: "3", href: "#contributions" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#111318] text-white font-semibold rounded-full shadow-lg outline-none ring-2 ring-[#2563EB]"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] py-3.5 shadow-sm"
          : "bg-white/70 backdrop-blur-sm py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Availability Pill */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-xs hover:border-[#D1D5DB] transition-colors text-xs font-medium text-[#111318]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>Available for Internships</span>
            </a>

            {/* Center: Editorial Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#111318] hover:text-[#2563EB] transition-colors inline-flex items-baseline gap-1"
                >
                  <span>{link.label}</span>
                  {link.count && (
                    <span className="text-[11px] font-mono text-[#9CA3AF]">[{link.count}]</span>
                  )}
                </a>
              ))}
            </nav>

            {/* Right: Let's Talk Pill */}
            <div className="hidden sm:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-medium rounded-full bg-[#111318] text-white hover:bg-[#272A34] transition-colors shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#111318] hover:bg-[#F3F4F6] rounded-full border border-[#E5E7EB] transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div
            id="mobile-nav"
            className="md:hidden fixed inset-x-0 top-[64px] bg-white border-b border-[#E5E7EB] p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <nav className="flex flex-col gap-2 mb-6" aria-label="Mobile Sections">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-[#111318] hover:bg-[#F7F8FA] rounded-xl flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.count && (
                    <span className="text-xs font-mono text-[#9CA3AF]">[{link.count}]</span>
                  )}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-full bg-[#111318] text-white"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </header>
    </>
  );
}
