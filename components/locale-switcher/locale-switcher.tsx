"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: string) => {
    const segments = (pathname ?? "/").split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  };

  return (
    <div className="flex items-center gap-1 border border-white/10 py-2 px-3 bg-white/5 backdrop-blur-md rounded-full">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/20 text-xs">·</span>}
          <button
            onClick={() => switchLocale(l)}
            className={`text-xs font-medium tracking-widest uppercase transition-colors ${
              locale === l
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
};
