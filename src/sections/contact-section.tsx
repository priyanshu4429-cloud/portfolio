import React from "react";
import { SectionHeader } from "@/components/section-header";
import { ContactCard } from "@/components/contact-card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative" aria-label="Contact Priyanshu Kumar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Direct Outreach &amp; Professional Contact"
          description="Have an internship opportunity, technical collaboration, or project inquiry? Reach out directly via verified email, phone, or professional profiles."
        />

        <ContactCard />
      </div>
    </section>
  );
}

