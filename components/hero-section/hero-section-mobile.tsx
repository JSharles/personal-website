import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export const HeroSectionMobile = () => {
  return (
    <section className="h-screen w-full relative flex flex-col overflow-hidden px-4 pt-8 pb-4">
      {/* Background image */}
      <Image
        src="/images/hero-bg-mobile.png"
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
      <div className="relative z-10 flex flex-col h-full justify-between items-center text-center px-4 pt-6">
        {/* Top : Name + Role */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-primary-foreground leading-tight">
            Jean-Charles Barq
          </h1>
          <h2 className="text-lg font-medium text-primary-foreground/50 leading-tight">
            Fullstack Developer <br />
            React / React Native / Node.js — Blockchain Ready
          </h2>
        </div>

        {/* Middle : Description */}
        <div className="flex-1 flex flex-col justify-center text-xl leading-relaxed text-primary-foreground/70 space-y-8 max-w-md px-2">
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

        {/* Bottom : CTA */}
        <div className="flex flex-col gap-4 w-full px-2 pt-6 pb-4">
          <Button size="lg" className="gap-2 w-full">
            View My Work <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
