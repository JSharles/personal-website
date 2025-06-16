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
    },
    {
      title: "DGAC (Direction Générale de l'Aviation Civile) - DSNA-DTI",
      description: "Internal application for Air Traffic Management.",
      tech: ["Javascript", "Web Components", "React", "Node.js", "Golang"],
      logo: "/images/dgac-logo.png",
      link: "https://phrygian-turnover-e78.notion.site/e-FTM-211d5e95fa2480f9b946deed72c87ebc?source=copy_link",
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
    },
    {
      title: "QB3 - Blockchain Course project ",
      description:
        "Web3 project. Final capstone for Alyra's blockchain developer certification.",
      tech: ["Next.js", "Solidity", "Hardhat", "Wagmi", "RainbowKit"],
      logo: "/images/qb3-logo-inline.png",
      link: "https://phrygian-turnover-e78.notion.site/QB3-Blockchain-Certification-211d5e95fa2480c6a1a0c8890e185ef7?source=copy_link",
    },
    {
      title: "a-mate Sports",
      description: "Indie hacker / solopreneur project",
      tech: ["React Native", "NestJS", "Next.js", "TypeScript", "PostgreSQL"],
      logo: "/images/a-mate-sports.png",
      link: "https://phrygian-turnover-e78.notion.site/a-mate-Sports-211d5e95fa2480edb0a2d563002e9ab4?source=copy_link",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              className="group"
            >
              <Card className="bg-background border border-foreground/20 hover:shadow-lg hover:-translate-y-1 transform transition-transform duration-300 cursor-pointer h-full text-foreground">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-lg group-hover:text-foreground transition max-w-[80%]">
                      {project.title}
                    </CardTitle>
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
                  <CardDescription className="text-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-foreground/30 text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
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
