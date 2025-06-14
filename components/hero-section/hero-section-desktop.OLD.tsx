import { Button } from "../ui/button";
import Image from "next/image";

import GradientText from "../GradientText/GradientText";
import Link from "next/link";

export const HeroSectionDesktop = () => {
  const gradientColors = [
    "#56566d",
    "rgb(127, 131, 150)",
    "#a4b3bf",
    "#ffffff",
  ];
  const gradientAnimationSpeed = 3;

  return (
    <section className="h-screen w-full relative flex flex-col overflow-hidden px-16 pb-16">
      {/* Background image */}
      <Image
        src="/images/hero-bg-desktop.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center "
      />
      {/* Overlay noir pour améliorer lisibilité */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Contenu en bas à droite */}
      <div className="relative z-10 flex h-full justify-end items-end px-16 pb-24">
        <div className="flex flex-col justify-end items-end text-right max-w-xl w-full gap-y-10">
          {/* Titre et sous-titre */}
          <div className="space-y-5">
            <h1 className="text-6xl font-extrabold leading-tight text-white">
              Jean-Charles Barq
            </h1>
            <h2 className="text-2xl font-medium text-white/70 leading-tight">
              Product-minded Fullstack Developer — Design-friendly &
              Startup-focused
            </h2>
          </div>

          {/* Texte principal */}
          <div className="text-2xl leading-relaxed text-white/90 space-y-6">
            <p>
              I help{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                startups and founders
              </GradientText>{" "}
              turn ideas into polished products — combining{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                development
              </GradientText>
              ,{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                UX design
              </GradientText>{" "}
              and{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                branding
              </GradientText>
              .
            </p>
            <p>
              From{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                early-stage concepts
              </GradientText>{" "}
              to{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                production-ready apps
              </GradientText>
              , I support teams with{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                user-first
              </GradientText>{" "}
              and{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                business-aware
              </GradientText>{" "}
              solutions.
            </p>
          </div>

          <div className="flex flex-row items-center justify-end gap-4 mt-4">
            {/* CTA 1 - Discover My Work → style link button avec affordance */}
            <Link
              href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
              className="text-white/70 hover:text-white text-lg font-medium px-4 py-2 transition-colors hover:underline flex items-center gap-1"
            >
              Discover My Work
            </Link>

            {/* CTA 2 - Hire Me → CTA primaire sans flèche */}
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://malt.fr/profile/jeancharlesbarq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
