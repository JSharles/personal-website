import { MobileMenu, SocialLinks } from "../social-links/social-links";
import { LocaleSwitcher } from "../locale-switcher/locale-switcher";

// Fixed menu bar: language pill on the left; on the right, from `lg`, the
// channel pill ending with the blue a-mate logo, and below `lg` the logo next
// to a hamburger that opens the channels in a side panel.
export const Header = () => (
  <header className="fixed top-4 left-0 z-50 flex h-16 w-full items-center justify-between bg-transparent px-6">
    <LocaleSwitcher />
    <div className="hidden lg:block">
      <SocialLinks />
    </div>
    <div className="lg:hidden">
      <MobileMenu />
    </div>
  </header>
);
