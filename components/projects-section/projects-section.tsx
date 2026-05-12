import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Scaleway",
      description:
        "Technical owner of an internal tool centralizing hardware catalog, assembly manuals, commercial offers and asset tracking into a single interface. Feature-based architecture, requirements gathering, Figma prototyping and full implementation.",
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
      period: "Sept 2025 — Apr 2026",
      color: "#9333ea",
    },
    {
      title: "Stockoss",
      description:
        "SaaS platform for logistics and storage management. Frontend & Fullstack contributions.",
      tech: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
      ],
      logo: "/images/stockoss-logo.png",
      link: "https://phrygian-turnover-e78.notion.site/Stockoss-SOO-Client-211d5e95fa2480f7b94ddb44e4660976?source=copy_link",
      color: "#3b82f6",
    },
    {
      title: "DGAC (Direction Générale de l'Aviation Civile) - DSNA-DTI",
      description: "Internal application for Air Traffic Management.",
      tech: ["Javascript", "Web Components", "React", "Node.js", "Golang"],
      logo: "/images/dgac-logo.png",
      link: "https://phrygian-turnover-e78.notion.site/e-FTM-211d5e95fa2480f9b946deed72c87ebc?source=copy_link",
      color: "#0ea5e9",
    },
    {
      title: "Moodoow — White-label Sports App",
      description:
        "White-label mobile application platform for sports clubs — powering apps like USM Sapiac, enhancing fan experience.",
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
      color: "#10b981",
    },
    {
      title: "QB3 - Blockchain Course project",
      description:
        "Web3 project. Final capstone for Alyra's blockchain developer certification.",
      tech: ["Next.js", "Solidity", "Hardhat", "Wagmi", "RainbowKit"],
      logo: "/images/qb3-logo-inline.png",
      link: "https://phrygian-turnover-e78.notion.site/QB3-Blockchain-Certification-211d5e95fa2480c6a1a0c8890e185ef7?source=copy_link",
      color: "#f97316",
    },
    {
      title: "a-mate Sports",
      description: "Indie hacker / solopreneur project",
      tech: ["React Native", "NestJS", "Next.js", "TypeScript", "PostgreSQL"],
      logo: "/images/a-mate-sports.png",
      link: "https://phrygian-turnover-e78.notion.site/a-mate-Sports-211d5e95fa2480edb0a2d563002e9ab4?source=copy_link",
      color: "#f43f5e",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium tracking-[0.25em] uppercase text-center text-foreground mb-12">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const card = (
              <Card
                className="border h-full text-foreground relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${project.color}18 0%, #F4F5F7 65%)`,
                  borderColor: `${project.color}35`,
                }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="max-w-[80%]">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      {"period" in project && project.period && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {project.period}
                        </p>
                      )}
                    </div>
                    {project.logo && (
                      <div className="w-12 h-12 relative flex-shrink-0">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs text-foreground/70"
                        style={{ borderColor: `${project.color}50` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            return project.link ? (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                className="group"
              >
                {card}
              </Link>
            ) : (
              <div key={index} className="group">
                {card}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link
              href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
              target="_blank"
            >
              View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
