"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export const HeroSectionDesktop = () => {
  const t = useTranslations("hero");

  return (
    <section className="w-full h-screen relative overflow-hidden bg-background">
      {/* Photo + gradient */}
      <div className="absolute left-0 top-0 w-[60%] h-full">
        <Image
          src="/images/avatar.png"
          alt="Jean-Charles Barq"
          fill
          priority
          className="object-cover object-[center_15%]"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 30%, #0D0D0F 90%)" }}
        />
      </div>

      {/* Texte */}
      <div className="absolute right-0 top-0 w-[40%] h-full flex flex-col justify-center gap-8 px-12 xl:px-16 z-10">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground">
          {t("label")}
        </p>

        <h1 className="text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
          Jean–Charles Barq
        </h1>

        <p className="text-2xl xl:text-3xl text-foreground/75 leading-snug">
          {t.rich("accroche", {
            h1: (chunks) => <span className="text-foreground font-medium">{chunks}</span>,
            h2: (chunks) => <span className="text-foreground font-medium">{chunks}</span>,
          })}
        </p>

        <p className="text-base text-muted-foreground tracking-wide">
          {t("subphrase")}
        </p>

        <div className="flex flex-row items-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-8">
            <Link href="https://malt.fr/profile/jeancharlesbarq" target="_blank" rel="noopener noreferrer">
              {t("hire_me")}
            </Link>
          </Button>
          <Link
            href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
            className="text-muted-foreground hover:text-foreground text-base font-medium transition-colors underline underline-offset-4"
            target="_blank"
          >
            {t("discover")}
          </Link>
        </div>

        <div className="flex flex-row gap-5">
          <Link
            href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480f8917bfac82a543be2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm tracking-widest uppercase transition-colors"
          >
            {t("resume_en")}
          </Link>
          <span className="text-muted-foreground/30">·</span>
          <Link
            href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480139c2afdb1e9f03b2e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm tracking-widest uppercase transition-colors"
          >
            {t("cv_fr")}
          </Link>
          <span className="text-muted-foreground/30">·</span>
          <Link
            href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480e681c0dfa32fc100b1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-sm tracking-widest uppercase transition-colors"
          >
            {t("cv_es")}
          </Link>
        </div>
      </div>
    </section>
  );
};
