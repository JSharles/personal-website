import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/header/header";
import { BottomBar } from "@/components/bottom-bar/bottom-bar";
import { SITE_URL } from "@/lib/constants";

const OG_LOCALES: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "seo" });

  const title = t("title");
  const description = t("description");
  const canonical = `${SITE_URL}/${locale}`;
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
  );

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": `${SITE_URL}/${routing.defaultLocale}` },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Jean-Charles Barq",
      locale: OG_LOCALES[locale] ?? "en_US",
      type: "website",
      images: [{ url: "/images/avatar.png", width: 500, height: 500, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/avatar.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jean-Charles Barq",
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/images/avatar.png`,
    jobTitle: t("hero.label"),
    description: t("seo.description"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marseille",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/in/jeancharlesbarq/",
      "https://www.malt.fr/profile/jeancharlesbarq",
      "https://github.com/JSharles",
    ],
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      {children}
      <BottomBar />
    </NextIntlClientProvider>
  );
}
