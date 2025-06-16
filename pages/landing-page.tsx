"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";

import { HeroSectionMobile } from "@/components/hero-section/hero-section-mobile";
import { ServicesSection } from "@/components/services-section/services-section";
import { SkillsSection } from "@/components/skills-section/skills-section";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { HeroSectionDesktop } from "@/components/hero-section/hero-section-desktop";
import Link from "next/link";

const LandingPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      {isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let&apos;s discuss your project and bring your ideas to life.
          </p>

          <Button asChild variant="outline" size="lg">
            <Link
              href="https://www.malt.fr/profile/jeancharlesbarq"
              target="_blank"
            >
              Get In Touch <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
