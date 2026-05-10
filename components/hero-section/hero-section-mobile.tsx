import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const HeroSectionMobile = () => {
  return (
    <section className="relative w-full min-h-screen bg-background text-foreground flex flex-col items-center">
      {/* Photo pleine largeur avec gradient bas */}
      <div className="relative w-full h-[55vh] flex-shrink-0">
        <Image
          src="/images/avatar.png"
          alt="Jean-Charles Barq"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Contenu */}
      <div className="flex flex-col items-center text-center px-6 -mt-8 z-10 pb-12">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Freelance Product Engineer
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
          Jean–Charles Barq
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
          I help B2B teams turn{" "}
          <span className="text-foreground font-medium">complex business workflows</span>{" "}
          into clear,{" "}
          <span className="text-foreground font-medium">reliable and maintainable</span>{" "}
          web products.
        </p>

        <p className="text-xs text-muted-foreground/60 tracking-wide mb-2">
          React / TypeScript · Product-oriented frontend · Prototyping · Light backend
        </p>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs mb-8">
          <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm">
            <Link href="https://malt.fr/profile/jeancharlesbarq" target="_blank" rel="noopener noreferrer">
              Hire Me
            </Link>
          </Button>
          <Link
            href="https://phrygian-turnover-e78.notion.site/Portfolio-210d5e95fa248082b558cf0eb080341f?source=copy_link"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors underline underline-offset-4"
            target="_blank"
          >
            Discover My Work
          </Link>
        </div>

        <div className="flex flex-row gap-6">
          <Link
            href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480f8917bfac82a543be2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-xs tracking-wide transition-colors"
          >
            Resume (EN)
          </Link>
          <Link
            href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480139c2afdb1e9f03b2e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-xs tracking-wide transition-colors"
          >
            CV (FR)
          </Link>
          <Link
            href="https://phrygian-turnover-e78.notion.site/Jean-Charles-Barq-216d5e95fa2480e681c0dfa32fc100b1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-xs tracking-wide transition-colors"
          >
            CV (ES)
          </Link>
        </div>
      </div>
    </section>
  );
};
