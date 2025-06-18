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
  const gradientAnimationSpeed = 10;

  return (
    <section className="relative w-full min-h-screen bg-background text-foreground flex flex-col items-center px-4 py-12">
      <div className="flex flex-row items-center justify-center gap-6 mb-8">
        <div className="w-32 h-32 relative">
          <Image
            src="/images/compact-dark.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-52 h-52 relative">
          <Image
            src="/images/face.png"
            alt="Portrait"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

      <div className="text-center px-6 mb-12">
        <h1 className="text-4xl font-extrabold">Jean-Charles Barq</h1>

        <p className="text-2xl text-foreground px-8 mb-2">
          Fullstack Developer
        </p>
        <p className="text-xl text-foreground/70 px-6">
          - Product-minded, Design-friendly & Startup-focused
        </p>
      </div>

      {/* Texte principal */}
      <div className="text-sm leading-relaxed text-foreground space-y-6 text-center px-8 mb-12">
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

      {/* CTA */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 w-full px-4">
        <Link
          href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
          className="text-foreground/70 hover:text-foreground text-sm font-medium px-4 py-2 transition-colors hover:underline flex items-center gap-1"
          target="_blank"
        >
          Discover My Work
        </Link>

        <Button asChild variant="outline" size="lg" className="w-auto">
          <Link
            href="https://malt.fr/profile/jeancharlesbarq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            Hire Me
          </Link>
        </Button>
      </div>
      <div className="mt-8  w-full justify-center items-center flex">
        <Link
          href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480f8917bfac82a543be2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-foreground text-sm underline"
        >
          See my resume
        </Link>
      </div>
    </section>
  );
};
