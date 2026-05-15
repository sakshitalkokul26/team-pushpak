import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TeamSection } from "@/sections/TeamSection";
import { TimelineSection } from "@/sections/TimelineSection";
import { CompetitionsSection } from "@/sections/CompetitionsSection";
import { RnDSection } from "@/sections/RnDSection";
import { GallerySection } from "@/sections/GallerySection";
import { MentorsSection } from "@/sections/MentorsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <RnDSection />
      <TimelineSection />
      <GallerySection />
      <CompetitionsSection />
      <MentorsSection />
      <ContactSection />
    </>
  );
}
