import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/header/header";
import { BottomBar } from "@/components/bottom-bar/bottom-bar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jean-Charles Barq - Fullstack Developer",
  description:
    "Product-minded Fullstack Developer — Design-friendly & Startup-focused",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <BottomBar />
        </Providers>
      </body>
    </html>
  );
}
