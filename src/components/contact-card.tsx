"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { PORTFOLIO_DATA } from "@/content/portfolio-data";

export function ContactCard() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [intentSubject, setIntentSubject] = useState("Internship / Collaboration Inquiry");
  const [intentMessage, setIntentMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    intentSubject
  )}&body=${encodeURIComponent(intentMessage || "Hello Priyanshu,\n\nI reviewed your portfolio and would like to connect.")}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Direct Communication Channels */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        {/* Email Direct Card */}
        <div className="p-6 rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)] hover:border-[#5B8CFF]/30 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#5B8CFF] uppercase tracking-wider flex items-center gap-1.5">
              <Mail size={14} aria-hidden="true" />
              Direct Email
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#A2ACBD] hover:text-[#F3F5FA] bg-[#171E2D] hover:bg-[#1E273A] rounded-md transition-colors"
              aria-label="Copy email address to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="text-base sm:text-lg font-semibold text-[#F3F5FA] hover:text-[#5B8CFF] transition-colors break-all flex items-center gap-2 group"
          >
            <span>{PORTFOLIO_DATA.personal.email}</span>
            <ArrowUpRight size={16} className="text-[#A2ACBD] group-hover:text-[#5B8CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <p className="text-xs text-[#A2ACBD] mt-1.5">
            Best channel for internship discussions, project inquiries, or technical conversation.
          </p>
        </div>

        {/* Phone Direct Card */}
        <div className="p-6 rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)] hover:border-[#5B8CFF]/30 transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#5B8CFF] uppercase tracking-wider flex items-center gap-1.5">
              <Phone size={14} aria-hidden="true" />
              Direct Phone / WhatsApp
            </span>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#A2ACBD] hover:text-[#F3F5FA] bg-[#171E2D] hover:bg-[#1E273A] rounded-md transition-colors"
              aria-label="Copy phone number to clipboard"
            >
              {copiedPhone ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href={`tel:${PORTFOLIO_DATA.personal.phone}`}
            className="text-base sm:text-lg font-semibold text-[#F3F5FA] hover:text-[#5B8CFF] transition-colors flex items-center gap-2 group"
          >
            <span>{PORTFOLIO_DATA.personal.phone}</span>
            <ArrowUpRight size={16} className="text-[#A2ACBD] group-hover:text-[#5B8CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <p className="text-xs text-[#A2ACBD] mt-1.5">
            Available for scheduled calls and urgent technical inquiries (+05:30 IST).
          </p>
        </div>

        {/* Social Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#101522] border border-[rgba(190,205,230,0.12)] hover:border-[#5B8CFF]/40 hover:bg-[#171E2D] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#5B8CFF]/10 text-[#5B8CFF]">
                <LinkedinIcon size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F3F5FA]">LinkedIn</div>
                <div className="text-xs text-[#A2ACBD]">Professional Network</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#A2ACBD] group-hover:text-[#5B8CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#101522] border border-[rgba(190,205,230,0.12)] hover:border-[#5B8CFF]/40 hover:bg-[#171E2D] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#9A78FF]/10 text-[#9A78FF]">
                <GithubIcon size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F3F5FA]">GitHub</div>
                <div className="text-xs text-[#A2ACBD]">Repositories &amp; Code</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#A2ACBD] group-hover:text-[#9A78FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Right Column: Native Direct Mail Composer Helper */}
      <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#101522] border border-[rgba(190,205,230,0.12)]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#9A78FF] uppercase tracking-wider mb-2">
          <MessageSquare size={14} />
          <span>Direct Email Composer Helper</span>
        </div>
        <h3 className="text-xl font-bold text-[#F3F5FA] mb-2">
          Initiate a Conversation
        </h3>
        <p className="text-xs sm:text-sm text-[#A2ACBD] mb-6">
          Pre-populate your inquiry below. Clicking will safely open your preferred default email application without intermediate database storage.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoUrl;
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <label htmlFor="inquiry-subject" className="block text-xs font-mono text-[#A2ACBD] mb-1.5">
              Subject Line
            </label>
            <input
              id="inquiry-subject"
              type="text"
              value={intentSubject}
              onChange={(e) => setIntentSubject(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#080B12] text-[#F3F5FA] rounded-lg border border-[rgba(190,205,230,0.14)] focus:border-[#5B8CFF] focus:outline-none transition-colors"
              placeholder="e.g. Internship Inquiry / Collaboration"
            />
          </div>

          <div>
            <label htmlFor="inquiry-message" className="block text-xs font-mono text-[#A2ACBD] mb-1.5">
              Note or Opportunity Description
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={intentMessage}
              onChange={(e) => setIntentMessage(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#080B12] text-[#F3F5FA] rounded-lg border border-[rgba(190,205,230,0.14)] focus:border-[#5B8CFF] focus:outline-none transition-colors resize-none"
              placeholder="Share a brief overview of the project, role, or ideas you'd like to discuss..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#5B8CFF] to-[#9A78FF] text-white hover:opacity-95 transition-opacity shadow-lg shadow-[#5B8CFF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF]"
          >
            <span>Launch Email Client</span>
            <Send size={15} aria-hidden="true" />
          </button>

          <span className="text-[11px] font-mono text-center text-[#A2ACBD]">
            Opens <code className="text-[#5B8CFF]">mailto:{PORTFOLIO_DATA.personal.email}</code> directly
          </span>
        </form>
      </div>
    </div>
  );
}
