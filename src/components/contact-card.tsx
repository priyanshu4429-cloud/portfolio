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
        <div className="editorial-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#5A606D] uppercase tracking-wider flex items-center gap-1.5">
              <Mail size={14} aria-hidden="true" />
              Direct Email
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#111318] bg-[#F3F4F6] hover:bg-[#E5E7EB] rounded-full transition-colors"
              aria-label="Copy email address to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
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
            className="text-base sm:text-lg font-bold text-[#111318] hover:text-[#2563EB] transition-colors break-all flex items-center gap-2 group"
          >
            <span>{PORTFOLIO_DATA.personal.email}</span>
            <ArrowUpRight size={16} className="text-[#9CA3AF] group-hover:text-[#2563EB]" />
          </a>
        </div>

        <div className="editorial-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#5A606D] uppercase tracking-wider flex items-center gap-1.5">
              <Phone size={14} aria-hidden="true" />
              Direct Phone / WhatsApp
            </span>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#111318] bg-[#F3F4F6] hover:bg-[#E5E7EB] rounded-full transition-colors"
              aria-label="Copy phone number to clipboard"
            >
              {copiedPhone ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
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
            className="text-base sm:text-lg font-bold text-[#111318] hover:text-[#2563EB] transition-colors flex items-center gap-2 group"
          >
            <span>{PORTFOLIO_DATA.personal.phone}</span>
            <ArrowUpRight size={16} className="text-[#9CA3AF] group-hover:text-[#2563EB]" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card p-5 rounded-2xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F3F4F6] text-[#111318]">
                <LinkedinIcon size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#111318]">LinkedIn</div>
                <div className="text-xs text-[#5A606D]">Professional Profile</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#9CA3AF] group-hover:text-[#111318]" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card p-5 rounded-2xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F3F4F6] text-[#111318]">
                <GithubIcon size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#111318]">GitHub</div>
                <div className="text-xs text-[#5A606D]">Source Repositories</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[#9CA3AF] group-hover:text-[#111318]" />
          </a>
        </div>
      </div>

      {/* Right Column: Native Direct Mail Composer Helper */}
      <div className="lg:col-span-6 editorial-card p-6 sm:p-8 rounded-2xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[#5A606D] uppercase tracking-wider mb-2">
          <MessageSquare size={14} aria-hidden="true" />
          <span>Direct Email Composer</span>
        </div>
        <h3 className="text-xl font-bold text-[#111318] mb-2">
          Initiate a Conversation
        </h3>
        <p className="text-xs sm:text-sm text-[#5A606D] mb-6">
          Pre-populate your inquiry below to open your default email client directly without intermediate form storage.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoUrl;
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <label htmlFor="inquiry-subject" className="block text-xs font-mono text-[#5A606D] mb-1.5">
              Subject Line
            </label>
            <input
              id="inquiry-subject"
              type="text"
              value={intentSubject}
              onChange={(e) => setIntentSubject(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] text-[#111318] rounded-xl border border-[#E5E7EB] focus:border-[#111318] focus:outline-none transition-colors"
              placeholder="e.g. Internship Inquiry / Collaboration"
            />
          </div>

          <div>
            <label htmlFor="inquiry-message" className="block text-xs font-mono text-[#5A606D] mb-1.5">
              Message
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={intentMessage}
              onChange={(e) => setIntentMessage(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F7F8FA] text-[#111318] rounded-xl border border-[#E5E7EB] focus:border-[#111318] focus:outline-none transition-colors resize-none"
              placeholder="Share a brief overview of the opportunity or project..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full bg-[#111318] text-white hover:bg-[#272A34] transition-colors shadow-sm"
          >
            <span>Launch Email Client</span>
            <Send size={15} aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
