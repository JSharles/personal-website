import Image from "next/image";
import GradientText from "../GradientText/GradientText";
import Link from "next/link";
import { Button } from "../ui/button";

export const HeroSectionMobile = () => {
  const gradientColors = [
    "#ffffff",
    "#f0e5e2",
    "#222222",
    "#f0e5e2",
    "#ffffff",
  ];
  const gradientAnimationSpeed = 6;

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col justify-start px-4 ">
      <div className="flex flex-col items-center">
        <div className="w-80 h-80 relative">
          <Image
            src="/images/hero-image-mobile.png"
            alt="Hero Graphic"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
        <div className="text-center px-12 pb-4">
          <h1 className="text-3xl font-extrabold text-[#f0e5e2]">
            Jean-Charles Barq
          </h1>
          <p className="text-sm text-[#f0e5e2]/70 mt-1">
            Product-minded Fullstack Developer — Design-friendly &
            Startup-focused
          </p>
        </div>
      </div>

      {/* Main Text Block */}
      <div className="mt-6 text-sm leading-relaxed text-[#f0e5e2] space-y-8 text-center px-12 mb-6">
        <p>
          I help{" "}
          <GradientText
            colors={gradientColors}
            animationSpeed={gradientAnimationSpeed}
          >
            startups and founders
          </GradientText>{" "}
          turn ideas into polished products — combining{" "}
          <GradientText
            colors={gradientColors}
            animationSpeed={gradientAnimationSpeed}
          >
            development
          </GradientText>
          ,{" "}
          <GradientText
            colors={gradientColors}
            animationSpeed={gradientAnimationSpeed}
          >
            UX design
          </GradientText>{" "}
          and{" "}
          <GradientText
            colors={gradientColors}
            animationSpeed={gradientAnimationSpeed}
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
          >
            early-stage concepts
          </GradientText>{" "}
          to{" "}
          <GradientText
            colors={gradientColors}
            animationSpeed={gradientAnimationSpeed}
          >
            production-ready apps
          </GradientText>
          , I support teams with{" "}
          <GradientText
            colors={gradientColors}
            animationSpeed={gradientAnimationSpeed}
          >
            user-first
          </GradientText>{" "}
          and{" "}
          <GradientText
            colors={gradientColors}
            animationSpeed={gradientAnimationSpeed}
          >
            business-aware
          </GradientText>{" "}
          solutions.
        </p>
      </div>

      {/* CTA Block */}
      <div className="mt-8 flex flex-col gap-6 w-full items-center">
        <Link
          href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
          className="text-[#f0e5e2]/80 hover:text-[#f0e5e2] text-sm font-medium transition-colors underline underline-offset-4"
        >
          Discover My Work
        </Link>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full max-w-xs bg-white text-black"
        >
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
    </section>
  );
};
