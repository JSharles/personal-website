"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../section-title/section-title";
import { PORTFOLIO_URL } from "@/lib/links";

type Project = {
  title: string;
  subtitle?: string;
  descKey: string;
  tech: string[];
  logo: string;
  link: string;
  period?: string;
  // White logo: needs a dark tile
  darkLogo?: boolean;
  // Wide wordmark: needs a wide tile to stay legible
  wideLogo?: boolean;
};

// The first project is the featured case, in its own panel; the others form
// an index of rows between hairlines.
export const ProjectsSection = () => {
  const t = useTranslations("projects");

  const projects: Project[] = [
    {
      title: "Scaleway",
      descKey: "scaleway_desc",
      tech: [
        "React",
        "React Router v7",
        "TypeScript",
        "TanStack Query",
        "Material UI",
        "Vitest",
        "Zod",
        "Figma",
      ],
      logo: "/images/scaleway-violet-logo.png",
      link: "https://phrygian-turnover-e78.notion.site/Scaleway-35cd5e95fa248078a727ea5deb02d985?source=copy_link",
      period: "Sept 2025 – Apr 2026",
    },
    {
      title: "Stockoss",
      descKey: "stockoss_desc",
      tech: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
      ],
      logo: "/images/stockoss-logo.png",
      darkLogo: true,
      wideLogo: true,
      link: "https://phrygian-turnover-e78.notion.site/Stockoss-SOO-Client-211d5e95fa2480f7b94ddb44e4660976?source=copy_link",
    },
    {
      title: "DGAC · DSNA-DTI",
      subtitle: "Direction Générale de l'Aviation Civile",
      descKey: "dgac_desc",
      tech: ["Javascript", "Web Components", "React", "Node.js", "Golang"],
      logo: "/images/dgac-logo.png",
      link: "https://phrygian-turnover-e78.notion.site/e-FTM-211d5e95fa2480f9b946deed72c87ebc?source=copy_link",
    },
    {
      title: "Moodoow",
      subtitle: "White-label sports app",
      descKey: "moodoow_desc",
      tech: [
        "React Native",
        "React",
        "Redux Toolkit",
        "AWS",
        "Serverless",
        "MongoDB",
      ],
      logo: "/images/moodoow-logo.png",
      link: "https://phrygian-turnover-e78.notion.site/Moodoow-Sports-White-Label-V2-211d5e95fa248049bc7ec837468895f7?source=copy_link",
    },
    {
      title: "QB3",
      subtitle: "Alyra blockchain certification",
      descKey: "qb3_desc",
      tech: ["Next.js", "Solidity", "Hardhat", "Wagmi", "RainbowKit"],
      logo: "/images/qb3-logo-inline.png",
      link: "https://phrygian-turnover-e78.notion.site/QB3-Blockchain-Certification-211d5e95fa2480c6a1a0c8890e185ef7?source=copy_link",
    },
    {
      title: "a-mate Sports",
      descKey: "amate_desc",
      tech: ["React Native", "NestJS", "Next.js", "TypeScript", "PostgreSQL"],
      logo: "/images/a-mate-sports.png",
      link: "https://phrygian-turnover-e78.notion.site/a-mate-Sports-211d5e95fa2480edb0a2d563002e9ab4?source=copy_link",
    },
  ];

  const [featured, ...rest] = projects;

  const logoTile = (project: Project, size: "sm" | "lg") => (
    <div
      className={`relative flex-shrink-0 ${
        size === "lg" ? "h-20 w-20 p-3" : project.wideLogo ? "h-10 w-24 px-2 py-1.5" : "h-10 w-10 p-1.5"
      } ${project.darkLogo ? "bg-secondary" : "bg-foreground"}`}
    >
      <div className="relative h-full w-full">
        <Image
          src={project.logo}
          alt={`${project.title} logo`}
          fill
          sizes={size === "lg" ? "80px" : project.wideLogo ? "96px" : "40px"}
          className="object-contain"
        />
      </div>
    </div>
  );

  return (
    <section id="projects" className="scroll-mt-8 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>{t("title")}</SectionTitle>

        {/* Featured case */}
        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-16 block rounded-md border border-border bg-card transition-colors duration-300 hover:border-primary/50"
        >
          <div className="grid gap-8 p-6 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:p-10">
            {logoTile(featured, "lg")}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                <h3 className="text-4xl font-bold tracking-[-0.035em] text-foreground transition-colors group-hover:text-primary md:text-5xl">
                  {featured.title}
                </h3>
                <p className="font-mono text-sm text-primary">
                  {featured.period}
                </p>
              </div>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-foreground/80">
                {t(featured.descKey as keyof typeof t)}
              </p>
              <p className="mt-6 font-mono text-xs leading-relaxed text-muted-foreground">
                {featured.tech.join(" / ")}
              </p>
            </div>
          </div>
        </a>

        {/* Index of the other projects */}
        <ul className="border-b border-border">
          {rest.map((project, index) => (
            <li key={project.title} className="border-t border-border">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-3 grid gap-4 px-3 py-6 transition-colors duration-200 hover:bg-card md:-mx-4 md:grid-cols-[2.5rem_minmax(0,4fr)_minmax(0,5fr)_auto] md:items-start md:gap-8 md:px-4"
              >
                <span className="font-mono text-sm text-primary">
                  0{index + 2}
                </span>
                <div className="flex flex-col items-start gap-3 md:grid md:grid-cols-[6rem_minmax(0,1fr)] md:gap-4">
                  {logoTile(project, "sm")}
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed text-foreground/80">
                    {t(project.descKey as keyof typeof t)}
                  </p>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {project.tech.join(" / ")}
                  </p>
                </div>
                <ArrowUpRight
                  className="hidden size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary md:block"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-1.5 font-mono text-sm lowercase text-foreground underline underline-offset-4 transition-colors hover:text-primary"
        >
          {t("view_more")} <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
