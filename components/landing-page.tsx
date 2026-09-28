"use client";

import { ArrowUpRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section/hero-section";
import { AboutSection } from "@/components/about-section/about-section";
import { ServicesSection } from "@/components/services-section/services-section";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { SectionTitle } from "@/components/section-title/section-title";
import { ChannelList } from "@/components/social-links/social-links";
import { useTranslations } from "next-intl";
import { CALENDLY_URL, MALT_URL } from "@/lib/links";
import { buttonPrimary, buttonSecondary } from "@/lib/button-styles";

const LandingPage: React.FC = () => {
  const t = useTranslations("cta");
  const tContact = useTranslations("contact");

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      <section id="contact" className="px-6 pb-16 pt-20 md:px-12 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>{t("title")}</SectionTitle>
          <p className="max-w-[52ch] text-xl leading-relaxed text-foreground/80">{t("subtitle")}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={MALT_URL} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
              {tContact("malt")} <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              {tContact("call")} <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-border pt-5 md:flex-row md:items-center md:justify-between">
            <ChannelList />
            <span className="font-mono text-xs text-muted-foreground">a-mate.tech · Jean-Charles Barq</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
