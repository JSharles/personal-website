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
      title: "QB3 - Blockchain Course project",
      description:
        "White-label mobile application platform for sports clubs — powering apps like USM Sapiac, enhancing fan experience.",
      tech: ["React Native", "Redux Toolkit", "AWS", "Serverless", "MongoDB"],
      status: "Completed",
    },
    {
      title: "Moodoow SAS — White-label Sports App",
      description:
        "White-label mobile application platform for sports clubs — powering apps like USM Sapiac, enhancing fan experience.",
      tech: ["React Native", "Redux Toolkit", "AWS", "Serverless", "MongoDB"],
      status: "Completed",
    },
    {
      title: "Internal Logistics SaaS Platform (Stockoss)",
      description:
        "SaaS platform for logistics and storage management. Frontend & Fullstack contributions.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      status: "Completed",
    },
    {
      title: "DGAC Internal Platform",
      description:
        "Internal application for aviation regulation data management. Developed in Golang and JavaScript.",
      tech: ["Golang", "JavaScript", "MongoDB"],
      status: "Completed",
    },
  ];

  const notionLink =
    "https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link";

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
              href={notionLink}
              target="_blank"
              className="group"
            >
              <Card className="bg-background border border-foreground/20 hover:shadow-lg hover:-translate-y-1 transform transition-transform duration-300 cursor-pointer h-full text-foreground">
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

        {/* View More button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href={notionLink} target="_blank">
              View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
