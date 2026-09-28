"use client";

import { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Calendar, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  CALENDLY_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  MALT_URL,
  WHATSAPP_URL,
} from "@/lib/links";

const iconClass = "w-5 h-5 text-foreground opacity-70 group-hover:opacity-100 transition-opacity";
const imageIconClass = `${iconClass} brightness-0 invert`;

type Channel = { key: string; href: string; icon: ReactNode };

const CHANNELS: Channel[] = [
  { key: "linkedin", href: LINKEDIN_URL, icon: <Linkedin className={iconClass} aria-hidden="true" /> },
  {
    key: "malt_profile",
    href: MALT_URL,
    icon: <Image src="/icons/malt-logo.png" alt="" width={20} height={20} className={imageIconClass} />,
  },
  {
    key: "github",
    href: GITHUB_URL,
    icon: <Image src="/icons/github-mark-white.svg" alt="" width={20} height={20} className={imageIconClass} />,
  },
  { key: "email", href: EMAIL_URL, icon: <Mail className={iconClass} aria-hidden="true" /> },
  {
    key: "whatsapp",
    href: WHATSAPP_URL,
    icon: <Image src="/icons/whatsapp-logo.svg" alt="" width={20} height={20} className={imageIconClass} />,
  },
  { key: "call", href: CALENDLY_URL, icon: <Calendar className={iconClass} aria-hidden="true" /> },
];

const externalProps = (href: string) =>
  href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" };

// The a-mate logo in the signature blue. The PNG is used as a mask over a
// `bg-primary` box, so the color is exactly the token, not a filter guess.
export const AmateLogo = ({ className = "size-6" }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`block bg-primary ${className}`}
    style={{
      maskImage: "url(/images/logo-2026.png)",
      WebkitMaskImage: "url(/images/logo-2026.png)",
      maskSize: "contain",
      WebkitMaskSize: "contain",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
    }}
  />
);

// Back to top, carried by the a-mate logo (as in the original menu bar).
export const LogoButton = ({ size = "size-7 sm:size-8 lg:size-9" }: { size?: string }) => {
  const t = useTranslations("contact");
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={`a-mate.tech — ${t("back_to_top")}`}
          className={`inline-flex ${size} items-center justify-center rounded-full hover:bg-primary/10`}
        >
          <AmateLogo />
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={6}>{t("back_to_top")}</TooltipContent>
    </Tooltip>
  );
};

// Header menu bar: every channel as an icon in a pill, each labeled by a
// tooltip, then the blue a-mate logo (back to top). Smaller icons below `lg`
// so it fits a phone next to the locale pill.
export const SocialLinks = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-background/80 p-1 backdrop-blur-md lg:gap-1 lg:p-1.5">
      {CHANNELS.map((channel) => (
        <Tooltip key={channel.key}>
          <TooltipTrigger asChild>
            <a
              href={channel.href}
              aria-label={t(channel.key)}
              className={`group items-center justify-center rounded-full hover:bg-primary/10 size-7 sm:size-8 lg:size-9 ${
                // The call is already in the hero and the mobile bottom bar
                channel.key === "call" ? "hidden lg:inline-flex" : "inline-flex"
              }`}
              {...externalProps(channel.href)}
            >
              {channel.icon}
            </a>
          </TooltipTrigger>
          <TooltipContent sideOffset={6}>{t(channel.key)}</TooltipContent>
        </Tooltip>
      ))}
      <LogoButton />
    </div>
  );
};

// Closing section: the same channels as plain mono labels.
export const ChannelList = () => {
  const t = useTranslations("contact");

  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs lowercase tracking-wide">
      {CHANNELS.filter((channel) => channel.key !== "call").map((channel) => (
        <li key={channel.key}>
          <a
            href={channel.href}
            className="inline-flex min-h-6 items-center text-muted-foreground transition-colors hover:text-primary"
            {...externalProps(channel.href)}
          >
            {t(channel.key)}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Mobile bottom bar: Malt as the primary cell (light blue text, no fill,
// like the primary button), the call beside it.
export const MobileContactBar = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex items-stretch border-t border-border bg-background/95 backdrop-blur-md">
      <a
        href={MALT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 flex-1 items-center justify-between border-r border-border px-5 font-mono text-sm text-primary-soft"
      >
        {t("malt")} <ArrowRight className="size-4" aria-hidden="true" />
      </a>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center gap-1.5 px-4 font-mono text-sm lowercase text-foreground"
      >
        {t("call_tiny")} <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </a>
    </div>
  );
};
