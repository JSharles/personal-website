"use client";

import { useEffect, useState } from "react";
import { MobileContactBar } from "../social-links/social-links";

// Sticky contact bar below `lg`. It stays out of the way while the hero
// actions or the closing section (which carry the same actions) are on
// screen, and only slides up once the visitor has scrolled past the hero.
export const BottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById("hero-actions");
    const closing = document.getElementById("contact");
    if (!heroActions || !closing) return;

    let pastHero = false;
    let closingInView = false;
    const update = () => setVisible(pastHero && !closingInView);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroActions) {
          pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        } else {
          closingInView = entry.isIntersecting;
        }
      }
      update();
    });
    observer.observe(heroActions);
    observer.observe(closing);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <MobileContactBar />
    </div>
  );
};
