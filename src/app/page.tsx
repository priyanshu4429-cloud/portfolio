import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { SkillsSection } from "@/sections/skills-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ContributionsSection } from "@/sections/contributions-section";
import { AchievementsSection } from "@/sections/achievements-section";
import { EducationSection } from "@/sections/education-section";
import { ContactSection } from "@/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 w-full flex flex-col focus:outline-none">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContributionsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
