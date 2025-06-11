import { Button } from "../ui/button";
import Image from "next/image";
import GradientText from "../GradientText/GradientText";
import Link from "next/link";

export const HeroSectionMobile = () => {
  const gradientColors = [
    "#56566d",
    "rgb(127, 131, 150)",
    "#a4b3bf",
    "#ffffff",
  ];
  const gradientAnimationSpeed = 3;

  return (
    <section className="h-screen w-full relative flex flex-col overflow-hidden px-4 pt-8 pb-6">
      {/* Background image */}
      <Image
        src="/images/hero-bg-mobile.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center glitch-layer"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between items-center text-center px-4 pt-8">
        {/* Top : Name + Role */}
        <div className="space-y-4 mb-6">
          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Jean-Charles Barq
          </h1>
          <h2 className="text-lg font-medium text-white/70 leading-tight">
            Product-minded Fullstack Developer — Design-friendly &
            Startup-focused
          </h2>
        </div>

        {/* Middle : Description */}
        <div className="flex-1 flex flex-col justify-center text-xl leading-relaxed text-white/90 space-y-8 max-w-md px-2">
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

        {/* Bottom : CTA */}
        <div className="flex flex-col items-center gap-3 w-full px-2 pt-6 pb-6">
          {/* Discover My Work → lien simple, centré */}
          <Link
            href="/portfolio"
            className="text-white/70 hover:text-white text-base font-medium transition-colors hover:underline"
          >
            Discover My Work
          </Link>

          {/* Hire Me → bouton CTA principal */}
          <Button asChild variant="outline" size="lg" className="w-full">
            <a
              href="https://malt.fr/profile/jeancharlesbarq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Hire Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
