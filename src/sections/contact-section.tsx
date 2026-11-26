import React from "react";
import { SectionHeader } from "@/components/section-header";
import { ContactCard } from "@/components/contact-card";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F8FA]" aria-label="Contact Priyanshu Kumar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          watermark="CONNECT"
          title="LET'S TALK"
          subtitle="Have an internship opportunity, technical collaboration, or project inquiry? Reach out directly via email, phone, or social profiles."
        />

        <ContactCard />
      </div>
    </section>
  );
}
