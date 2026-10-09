"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

const CanvasWrapper = dynamic(() => import("@/components/3d/CanvasWrapper"), { ssr: false });
const GlobalBackground = dynamic(() => import("@/components/3d/GlobalBackground"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#F9F6F0]">
        <CanvasWrapper>
          <GlobalBackground />
        </CanvasWrapper>
      </div>
      
      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  );
}
