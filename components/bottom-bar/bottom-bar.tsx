"use client";

import { SocialLinks } from "../social-links/social-links";

export const BottomBar = () => {
  return (
    <div className="fixed bottom-4 left-0 w-full  h-16 px-6 flex items-center justify-center bg-transparent z-50 md:hidden">
      <SocialLinks />
    </div>
  );
};
