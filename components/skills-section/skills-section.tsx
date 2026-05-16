"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export const SkillsSection = () => {
  const t = useTranslations("skills");

  const technicalSkills = [
    "React", "React Native", "Node.js", "TypeScript", "JavaScript",
    "Next.js", "NestJS", "Solidity", "Hardhat", "MongoDB",
    "PostgreSQL", "AWS", "Serverless", "Vercel", "Golang",
  ];

  const softSkills = t.raw("soft_skills") as string[];
  const languages = t.raw("language_list") as string[];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-medium tracking-[0.25em] uppercase mb-8">{t("title")}</h2>

        <h3 className="text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">{t("technical")}</h3>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {technicalSkills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">{skill}</Badge>
          ))}
        </div>

        <h3 className="text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">{t("soft")}</h3>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {softSkills.map((skill, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2 text-sm">{skill}</Badge>
          ))}
        </div>

        <h3 className="text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground mb-4">{t("languages")}</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {languages.map((lang, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2 text-sm">{lang}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
