import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";
import { getLocale } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jean-Charles Barq - Freelance Product Engineer",
  description:
    "Freelance Product Engineer — I help B2B teams turn complex business workflows into clear, reliable and maintainable web products.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${ebGaramond.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-8YPSNKYLHY" />
    </html>
  );
}
