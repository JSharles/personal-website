import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";
import { Header } from "@/components/header/header";
import { BottomBar } from "@/components/bottom-bar/bottom-bar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jean-Charles Barq - Freelance Product Engineer",
  description:
    "Freelance Product Engineer — I help B2B teams turn complex business workflows into clear, reliable and maintainable web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <BottomBar />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-8YPSNKYLHY" />
    </html>
  );
}
