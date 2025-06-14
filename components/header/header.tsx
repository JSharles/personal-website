"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { SocialLinks } from "../social-links/social-links";

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-4 left-0 w-full h-16 px-6 bg-transparent z-50 flex items-center">
      {isMobile ? null : (
        <div className="ml-auto">
          <SocialLinks />
        </div>
      )}
    </header>
  );
};
