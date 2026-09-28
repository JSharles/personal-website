"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "../section-title/section-title";

type ServiceStep = {
  question: string;
  note: string;
  highlights: string[];
  tags: string[];
};

// One row per step of the hero's [01] [02] [03] list:
// step label on the left, what it covers on the right.
export const ServicesSection = () => {
  const t = useTranslations("services");
  const tHero = useTranslations("hero");

  const labels = tHero.raw("steps") as string[];
  const items = t.raw("items") as ServiceStep[];

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>{t("title")}</SectionTitle>

        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[220px_minmax(0,1fr)] gap-3 md:gap-4"
            >
              <div className="flex md:flex-col md:justify-center md:items-center gap-3 md:gap-2 rounded-md md:border md:border-border md:bg-card md:p-6 font-mono text-primary">
                <span className="text-sm text-primary/70">[0{index + 1}]</span>
                <span className="text-sm font-medium uppercase tracking-[0.2em] md:text-center">
                  {labels[index]}
                </span>
              </div>

              <div className="rounded-md border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50">
                <h3 className="text-xl font-semibold tracking-tight mb-1">{item.question}</h3>
                <p className="text-sm italic text-muted-foreground mb-5">{item.note}</p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border px-2.5 py-1 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
