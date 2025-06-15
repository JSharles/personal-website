"use client";

import { Mail, Linkedin, Calendar } from "lucide-react";
import Image from "next/image";

export const SocialLinks = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-6 border border-foreground/40 py-3 px-6 bg-black/30 backdrop-blur-md rounded-full">
      <a
        href="https://www.linkedin.com/in/jeancharlesbarq/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-6 h-6 text-foreground opacity-70 hover:opacity-100 transition" />
      </a>

      <a
        href="https://www.malt.fr/profile/jeancharlesbarq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="min-w-[32px] flex justify-center items-center">
          <Image
            src="/icons/malt-logo.png"
            alt="Malt"
            width={24}
            height={24}
            priority
            className="opacity-70 hover:opacity-100 transition"
          />
        </div>
      </a>

      <a
        href="https://github.com/JSharles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="min-w-[32px] flex justify-center items-center">
          <Image
            src="/icons/github-mark-white.svg"
            alt="GitHub"
            width={24}
            height={24}
            priority
            className="opacity-70 hover:opacity-100 transition"
          />
        </div>
      </a>

      <a
        href="mailto:jeancharlesbarq@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail className="w-6 h-6 text-foreground opacity-70 hover:opacity-100 transition" />
      </a>

      <a
        href="https://wa.me/+33767878027"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="min-w-[32px] flex justify-center items-center">
          <Image
            src="/icons/whatsapp-logo.svg"
            alt="WhatsApp"
            width={24}
            height={24}
            priority
            className="opacity-70 hover:opacity-100 transition"
          />
        </div>
      </a>

      <a
        href="https://calendly.com/jeancharlesbarq/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Calendar className="w-6 h-6 text-foreground opacity-70 hover:opacity-100 transition" />
      </a>

      <button onClick={handleScrollToTop} aria-label="Scroll to top">
        <div className="min-w-[60px] flex justify-center items-center">
          <Image
            src="/images/inline-dark.png"
            alt="Jean-Charles Barq Logo"
            width={60}
            height={60}
            priority
            className="rounded-full hover:opacity-90 transition filter brightness-0 invert sepia saturate-200 hue-rotate-[330deg]"
          />
        </div>
      </button>
    </div>
  );
};
