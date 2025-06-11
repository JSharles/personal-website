"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, User, FileText } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { HeroSectionDesktop } from "@/components/hero-section/hero-section-desktop";
import { HeroSectionMobile } from "@/components/hero-section/hero-section-mobile";
import { ServicesSection } from "@/components/services-section/services-section";

const LandingPage: React.FC = () => {
  const isMobile = useIsMobile();

  const skills = [
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Completed",
    },
    {
      title: "Mobile Food Delivery App",
      description: "Cross-platform mobile app built with React Native",
      tech: ["React Native", "Firebase", "Redux", "Maps API"],
      status: "Completed",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      tech: ["React", "TypeScript", "D3.js", "Node.js"],
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {isMobile ? <HeroSectionMobile /> : <HeroSectionDesktop />}

      {/* Services Section */}
      <ServicesSection />

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Technologies & Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and bring your ideas to life.
          </p>
          <Button size="lg" className="gap-2">
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
