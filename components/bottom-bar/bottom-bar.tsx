"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { SocialLinks } from "../social-links/social-links";

export const BottomBar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed w-screen bottom-4 px-4 flex justify-center z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <SocialLinks />
      </div>
    </div>
  );
};
