"use client";

import { useTranslations } from "next-intl";

export const AboutSection = () => {
  const t = useTranslations("about");

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-medium tracking-[0.25em] uppercase mb-8">{t("title")}</h2>
        <div className="flex flex-col gap-5 text-lg text-foreground/75 leading-relaxed">
          <p>{t("paragraph_1")}</p>
          <p>{t("paragraph_2")}</p>
          <p>{t("paragraph_3")}</p>
        </div>
      </div>
    </section>
  );
};
