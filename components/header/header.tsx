import { LogoButton, SocialLinks } from "../social-links/social-links";
import { LocaleSwitcher } from "../locale-switcher/locale-switcher";

// Fixed menu bar: language pill on the left; on the right, from `lg`, the
// channel pill ending with the blue a-mate logo, and below `lg` the logo
// alone in its own pill (the channels live in the BottomBar there).
export const Header = () => (
  <header className="fixed top-4 left-0 z-50 flex h-16 w-full items-center px-6 bg-transparent">
    <LocaleSwitcher />
    <div className="ml-auto hidden lg:block">
      <SocialLinks />
    </div>
    <div className="ml-auto rounded-full border border-border bg-background/80 p-1 backdrop-blur-md lg:hidden">
      <LogoButton />
    </div>
  </header>
);
