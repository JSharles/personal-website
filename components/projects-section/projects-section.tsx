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

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Devox - Blockchain Course project",
      description: "",
      tech: ["React Native", "Redux Toolkit", "AWS", "Serverless", "MongoDB"],
      status: "Completed",
      link: "/portfolio/moodoow-sports-app", // page générique, plus pro que lier vers l'app store
    },
    {
      title: "QB3 - Blockchain Course project",
      description:
        "White-label mobile application platform for sports clubs — powering apps like USM Sapiac, enhancing fan experience.",
      tech: ["React Native", "Redux Toolkit", "AWS", "Serverless", "MongoDB"],
      status: "Completed",
      link: "/portfolio/moodoow-sports-app", // page générique, plus pro que lier vers l'app store
    },
    {
      title: "L'Ame Du Tambour",
      description:
        "White-label mobile application platform for sports clubs — powering apps like USM Sapiac, enhancing fan experience.",
      tech: ["React Native", "Redux Toolkit", "AWS", "Serverless", "MongoDB"],
      status: "Completed",
      link: "/portfolio/moodoow-sports-app", // page générique, plus pro que lier vers l'app store
    },
    {
      title: "A-MATE SPORTS",
      description:
        "White-label mobile application platform for sports clubs — powering apps like USM Sapiac, enhancing fan experience.",
      tech: ["React Native", "Redux Toolkit", "AWS", "Serverless", "MongoDB"],
      status: "Completed",
      link: "/portfolio/moodoow-sports-app", // page générique, plus pro que lier vers l'app store
    },
    {
      title: "Moodoow SAS — White-label Sports App",
      description:
        "White-label mobile application platform for sports clubs — powering apps like USM Sapiac, enhancing fan experience.",
      tech: ["React Native", "Redux Toolkit", "AWS", "Serverless", "MongoDB"],
      status: "Completed",
      link: "/portfolio/moodoow-sports-app", // page générique, plus pro que lier vers l'app store
    },
    {
      title: "Internal Logistics SaaS Platform (Stockoss)",
      description:
        "SaaS platform for logistics and storage management. Frontend & Fullstack contributions.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      status: "Completed",
      link: "/portfolio/stockoss",
    },
    {
      title: "DGAC Internal Platform",
      description:
        "Internal application for aviation regulation data management. Developed in Golang and JavaScript.",
      tech: ["Golang", "JavaScript", "MongoDB"],
      status: "Completed",
      link: "/portfolio/dgac-platform",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="group">
              <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-transform duration-300 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={
                        project.status === "Completed" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
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

        {/* View More button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View More Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
