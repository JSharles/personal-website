"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

// Each language is named in itself, so the label reads right whatever the page locale.
const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

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
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-background/80 p-1 font-mono backdrop-blur-md">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-0.5">
          {i > 0 && (
            <span className="text-xs text-muted-foreground/40" aria-hidden="true">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => switchLocale(l)}
            aria-label={LANGUAGE_NAMES[l]}
            aria-current={locale === l ? "true" : undefined}
            lang={l}
            className={`inline-flex h-8 min-w-8 items-center justify-center rounded-full px-1.5 text-xs lg:h-9 lg:min-w-9 lg:px-2 font-medium uppercase tracking-widest transition-colors ${
              locale === l ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
};
