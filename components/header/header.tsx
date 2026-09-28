import { SocialLinks } from "../social-links/social-links";
import { LocaleSwitcher } from "../locale-switcher/locale-switcher";

// Fixed menu bar, on every screen size: language pill on the left, channel
// pill (ending with the blue a-mate logo) on the right.
export const Header = () => (
  <header className="fixed top-4 left-0 z-50 flex h-16 w-full items-center justify-between gap-2 bg-transparent px-3 sm:px-4 lg:px-6">
    <LocaleSwitcher />
    <SocialLinks />
  </header>
);
