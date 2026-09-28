import { ReactNode } from "react";

// Section head: a hairline across the page, then the title in bold lowercase
// ending with a colored period, as in "product engineer.".
export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="mb-12 border-t border-border pt-10">
    <h2 className="text-balance text-4xl font-bold leading-[0.95] tracking-[-0.035em] lowercase text-foreground md:text-6xl">
      {children}
      <span className="text-primary">.</span>
    </h2>
  </div>
);
