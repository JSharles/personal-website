"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "../section-title/section-title";

type Fact = { label: string; value: string };

// Lead paragraph set large, the body copy, and the key facts as a short
// spec sheet in the right column.
export const AboutSection = () => {
  const t = useTranslations("about");
  const facts = t.raw("facts") as Fact[];

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <p className="max-w-[34ch] text-2xl leading-snug text-foreground md:text-[1.75rem]">
              {t("paragraph_1")}
            </p>
            <div className="mt-8 flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed text-foreground/75">
              <p>{t("paragraph_2")}</p>
              <p>{t("paragraph_3")}</p>
            </div>
          </div>

          <dl className="self-start border-t border-border">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-border py-3.5"
              >
                <dt className="pt-0.5 font-mono text-xs lowercase text-primary">{fact.label}</dt>
                <dd className="leading-snug text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
