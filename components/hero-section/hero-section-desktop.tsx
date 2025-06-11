import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export const HeroSectionDesktop = () => {
  return (
    <section className="h-screen w-full relative flex flex-col overflow-hidden px-16 pb-16">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        fill
        priority
        className="
          object-cover
          object-center
          glitch-layer
        "
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full justify-end items-center px-16">
        {/* Block Texte */}
        <div className="flex flex-col justify-center max-w-2xl gap-y-10 text-right items-end pr-16 py-0">
          {/* Name + Role + Stack */}
          <div className="space-y-5 mb-12 mt-0">
            <h1 className="text-7xl font-extrabold text-primary-foreground leading-tight whitespace-nowrap">
              Jean-Charles Barq
            </h1>
            <h2 className="text-2xl font-medium text-primary-foreground/50 leading-tight">
              Fullstack Developer <br />
              React / React Native / Node.js — Blockchain Ready
            </h2>
          </div>

          {/* Description */}
          <div className="text-2xl leading-relaxed text-primary-foreground/70 space-y-6 mb-12 px-0">
            <p>
              I help{" "}
              <span className="font-semibold text-primary-foreground">
                founders and businesses
              </span>{" "}
              design, build and launch{" "}
              <span className="font-semibold text-primary-foreground">
                successful web & mobile products
              </span>
              .
            </p>
            <p>
              From{" "}
              <span className="font-semibold text-primary-foreground">
                prototype
              </span>{" "}
              to{" "}
              <span className="font-semibold text-primary-foreground">
                production
              </span>
              , I partner with teams to deliver{" "}
              <span className="font-semibold text-primary-foreground">
                business-first
              </span>
              ,{" "}
              <span className="font-semibold text-primary-foreground">
                user-focused
              </span>
              , and{" "}
              <span className="font-semibold text-primary-foreground">
                tech-driven
              </span>{" "}
              solutions.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-row gap-4 mt-12 w-auto">
            <Button size="lg" className="gap-2">
              View My Work <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
