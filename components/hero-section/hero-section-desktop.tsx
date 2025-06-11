import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import ShinyText from "../ShinyText/ShinyText";
import GradientText from "../GradientText/GradientText";

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
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center glitch-layer"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-gradientAnimationSpeed flex h-full justify-end items-center px-16">
        <div className="flex flex-col justify-center max-w-2xl gap-y-gradientAnimationSpeed text-right items-end pr-16 py-0">
          <div className="space-y-5 mb-12 mt-0">
            <h1 className="text-6xl font-extrabold text-primary-foreground leading-tight">
              Jean-Charles Barq
            </h1>
            <h2 className="text-2xl font-medium text-primary-foreground/50 leading-tight">
              Fullstack Developer <br /> React / React Native / Node.js —
              Blockchain Ready
            </h2>
          </div>
          <div className="text-2xl leading-relaxed text-primary-foreground/70 space-y-6 mb-12 px-0 text-right">
            <p className="text-right">
              I help{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline"
              >
                founders and businesses
              </GradientText>{" "}
              design, build and launch{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline"
              >
                successful web & mobile products
              </GradientText>
              .
            </p>
            <p className="text-right">
              From{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline"
              >
                prototype
              </GradientText>{" "}
              to{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline"
              >
                production
              </GradientText>
              , I partner with teams to deliver{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline"
              >
                business-first
              </GradientText>
              ,{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline"
              >
                user-focused
              </GradientText>
              , and{" "}
              <GradientText
                colors={gradientColors}
                animationSpeed={gradientAnimationSpeed}
                showBorder={false}
                className="font-semibold inline"
              >
                tech-driven
              </GradientText>{" "}
              solutions.
            </p>
          </div>
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
