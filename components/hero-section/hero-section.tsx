"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { AmateLogo } from "../social-links/social-links";
import { buttonPrimary, buttonSecondary } from "@/lib/button-styles";
import { CALENDLY_URL, MALT_URL, RESUME_URLS } from "@/lib/links";

// Hero, after the "product engineer" / LangGraph landing compositions.
// Desktop (`lg`): a full-viewport 12-column grid.
// - Row 1 fills the space above the strip; the text column (signature line,
//   role in the signature blue, offer in the soft blue, two buttons, in one
//   compact rhythm) and the
//   figure (duotone portrait at 4:5, then the name, the stack and the links)
//   are both centered on the vertical axis. The photo width follows the
//   viewport height.
// - Row 2: the method as a strip on a hairline: [01] → [02] → [03].
// Below `lg`: role, offer, the steps (three columns), actions, then the figure.
// Blue stays on type; the buttons are light fill + outline (lib/button-styles).
export const HeroSection = () => {
  const t = useTranslations("hero");
  const tContact = useTranslations("contact");
  const locale = useLocale();
  const steps = t.raw("steps") as string[];
  const resumeUrl = RESUME_URLS[locale] ?? RESUME_URLS.en;

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-background px-6 pt-28 pb-16 lg:grid lg:min-h-[100svh] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-y-10 lg:px-12 lg:pb-10 lg:pt-[112px]">
      {/* `contents` below `lg`: its children join the section's flex column so
          the steps can sit between the actions and the photo on mobile */}
      <div className="contents lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:self-stretch">
        {/* Text column, with the rhythm of the LangGraph reference: a small gap
            from the signature to the role, one headline line of air before the
            offer, then two buttons of equal height. Centered on the page's
            vertical axis, like the photo. */}
        {/* `contents` below `lg` too, so the steps can slot between the offer
            and the actions on mobile */}
        <div className="contents lg:relative lg:z-10 lg:col-span-7 lg:block">
          <h1 className="order-1 lg:order-none">
            {/* Signature line: the blue a-mate logo + a-mate.tech. The name is
                shown under the photo; here it stays for search engines and
                screen readers. */}
            <span className="mb-5 flex items-center gap-3 font-mono text-base lowercase text-primary">
              <AmateLogo className="size-9 lg:size-10" />
              a-mate.tech
            </span>
            <span className="sr-only">Jean-Charles Barq, </span>
            <span className="block text-[clamp(3.5rem,15vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-primary lg:whitespace-nowrap lg:text-[clamp(4.5rem,7.2vw,8.5rem)] 2xl:text-[clamp(4.5rem,7.6vw,8.5rem)]">
              {t("headline")}
            </span>
          </h1>

          <p className="order-2 mt-10 max-w-[48ch] text-lg font-light lg:order-none leading-relaxed text-primary-soft lg:mt-16 lg:text-xl">
            {t.rich("accroche", {
              strong: (chunks) => <strong className="font-light">{chunks}</strong>,
            })}
          </p>

          <div id="hero-actions" className="order-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:order-none lg:mt-10">
            <a href={MALT_URL} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
              {tContact("malt")} <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
              {tContact("call")} <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Portrait as a blue duotone: the wrapper color becomes the
            highlights (a deep mix of the signature blue), the multiplied
            grayscale photo draws the shadows, and a `lighten` layer lifts
            those shadows to the page ground. Under it: the name in the site's
            bracket grammar, then the stack and the links. */}
        <figure className="order-5 mt-14 w-full max-w-sm lg:order-none lg:col-span-4 lg:col-start-9 lg:mt-0 lg:w-[min(400px,calc((100svh-24rem)*0.8))] lg:max-w-none lg:justify-self-end">
          <div
            className="relative isolate aspect-[4/5] w-full overflow-hidden rounded-md border border-border"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 48%, var(--background))" }}
          >
            <Image
              src="/images/avatar.png"
              alt="Jean-Charles Barq"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover object-top grayscale contrast-125 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-background mix-blend-lighten" aria-hidden="true" />
          </div>
          <figcaption className="mt-3">
            <p className="font-mono text-base lowercase text-foreground lg:text-lg">
              <span className="text-primary" aria-hidden="true">[ </span>
              Jean-Charles Barq
              <span className="text-primary" aria-hidden="true"> ]</span>
            </p>
            <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
              {t("subphrase")}
            </p>
            <div className="mt-2 flex gap-5 font-mono text-xs lowercase text-muted-foreground">
              <a
                href="#projects"
                className="inline-flex items-center gap-1 underline underline-offset-4 transition-colors hover:text-primary"
              >
                {tContact("projects")} <ArrowDown className="size-3" aria-hidden="true" />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-4 transition-colors hover:text-primary"
              >
                {tContact("resume")} <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
            </div>
          </figcaption>
        </figure>
      </div>

      {/* The method as a strip on a hairline, three columns on every screen
          (on phones the index sits above each label) */}
      <ol className="relative z-10 order-3 mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 font-mono text-sm text-primary lg:order-none lg:mt-0 lg:gap-6 lg:self-end lg:text-xl">
        {steps.map((step, index) => (
          <li key={index} className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4">
            <span className="text-xs text-primary/70 lg:text-sm">[0{index + 1}]</span>
            <span>{step}</span>
            {index < steps.length - 1 && (
              <ArrowRight
                className="ml-auto hidden size-4 text-muted-foreground lg:mr-10 lg:block"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
