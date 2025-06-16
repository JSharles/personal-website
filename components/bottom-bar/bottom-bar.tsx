"use client";

import { SocialLinks } from "../social-links/social-links";

export const BottomBar = () => {
  return (
    <div className="fixed w-screen bottom-4 px-4 flex justify-center z-50 md:hidden pointer-events-none">
      <div className="pointer-events-auto">
        <SocialLinks />
      </div>
    </div>
  );
};
