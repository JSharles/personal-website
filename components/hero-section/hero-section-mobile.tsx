"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export const HeroSectionMobile = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full min-h-screen bg-background text-foreground flex flex-col items-center">
      <div className="relative w-full h-[55vh] flex-shrink-0">
        <Image
          src="/images/avatar.png"
          alt="Jean-Charles Barq"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="flex flex-col items-center text-center px-6 -mt-8 z-10 pb-12">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          {t("label")}
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
          Jean–Charles Barq
        </h1>

        <p className="text-base text-foreground/75 leading-relaxed mb-4 max-w-sm">
          {t.rich("accroche", {
            h1: (chunks) => <span className="text-foreground font-medium">{chunks}</span>,
            h2: (chunks) => <span className="text-foreground font-medium">{chunks}</span>,
          })}
        </p>

        <p className="text-xs text-muted-foreground tracking-wide mb-8">
          {t("subphrase")}
        </p>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs mb-8">
          <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm">
            <Link href="https://malt.fr/profile/jeancharlesbarq" target="_blank" rel="noopener noreferrer">
              {t("hire_me")}
            </Link>
          </Button>
          <Link
            href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors underline underline-offset-4"
            target="_blank"
          >
            {t("discover")}
          </Link>
        </div>

        <div className="flex flex-row gap-6">
          <Link href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480f8917bfac82a543be2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs tracking-wide transition-colors">
            {t("resume_en")}
          </Link>
          <Link href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480139c2afdb1e9f03b2e" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs tracking-wide transition-colors">
            {t("cv_fr")}
          </Link>
          <Link href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480e681c0dfa32fc100b1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs tracking-wide transition-colors">
            {t("cv_es")}
          </Link>
        </div>
      </div>
    </section>
  );
};
