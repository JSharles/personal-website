import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import GradientText from "../GradientText/GradientText";

export const HeroSectionDesktop = () => {
  const gradientColors = [
    "#ffffff",
    "#f0e5e2",
    "#222222",
    "#f0e5e2",
    "#ffffff",
  ];

  const gradientAnimationSpeed = 10;

  return (
    <section
      className="w-full min-h-screen text-foreground bg-no-repeat bg-center bg-[length:40%] px-8 py-12 lg:px-16 lg:py-16 relative grid"
      style={{
        backgroundImage: "url('/images/face.png')",
        gridTemplateColumns:
          "minmax(320px, 1fr) minmax(320px, 1fr) minmax(320px, 1fr)",
      }}
    >
      <div className="flex flex-col justify-center items-start max-w-md z-10">
        <div className="w-92 h-92 mb-10 relative right-14">
          <Image
            src="/images/compact-dark.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="font-extrabold space-y-0.5">
          <div className="text-5xl xl:text-6xl leading-[1.1] text-left">
            Jean–Charles
          </div>
          <div className="text-5xl xl:text-6xl leading-[1.1] text-left">
            Barq
          </div>
        </div>

        <h2 className="text-3xl xl:text-3xl font-medium text-foreground mt-4 leading-snug">
          Fullstack Developer
        </h2>
        <h3 className="text-xl xl:text-xl font-medium text-foreground/70 mt-4 leading-snug">
          — Product-minded, Design-friendly & Startup-focused
        </h3>
      </div>

      <div />

      <div className="flex flex-col justify-center items-end text-right max-w-md w-full gap-y-10 z-10">
        <div className="text-lg xl:text-xl leading-relaxed text-foreground/90 space-y-6">
          <p>
            I help{" "}
            <GradientText
              colors={gradientColors}
              animationSpeed={gradientAnimationSpeed}
              showBorder={false}
              className="font-semibold inline"
            >
              startups and founders
            </GradientText>{" "}
            turn ideas into polished products — combining{" "}
            <GradientText
              colors={gradientColors}
              animationSpeed={gradientAnimationSpeed}
              showBorder={false}
              className="font-semibold inline"
            >
              development
            </GradientText>
            ,{" "}
            <GradientText
              colors={gradientColors}
              animationSpeed={gradientAnimationSpeed}
              showBorder={false}
              className="font-semibold inline"
            >
              UX design
            </GradientText>{" "}
            and{" "}
            <GradientText
              colors={gradientColors}
              animationSpeed={gradientAnimationSpeed}
              showBorder={false}
              className="font-semibold inline"
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
              className="font-semibold inline"
            >
              early-stage concepts
            </GradientText>{" "}
            to{" "}
            <GradientText
              colors={gradientColors}
              animationSpeed={gradientAnimationSpeed}
              showBorder={false}
              className="font-semibold inline"
            >
              production-ready apps
            </GradientText>
            , I support teams with{" "}
            <GradientText
              colors={gradientColors}
              animationSpeed={gradientAnimationSpeed}
              showBorder={false}
              className="font-semibold inline"
            >
              user-first
            </GradientText>{" "}
            and{" "}
            <GradientText
              colors={gradientColors}
              animationSpeed={gradientAnimationSpeed}
              showBorder={false}
              className="font-semibold inline"
            >
              business-aware
            </GradientText>{" "}
            solutions.
          </p>
        </div>

        <div className="flex flex-row items-center justify-end gap-4 mt-4">
          <Link
            href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
            className="text-foreground/70 hover:text-foreground text-lg xl:text-xl font-medium px-4 py-2 transition-colors hover:underline flex items-center gap-1"
            target="_blank"
          >
            Discover My Work
          </Link>

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
    </section>
  );
};
