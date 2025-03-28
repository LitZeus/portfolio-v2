import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { NavbarSection } from "./components/ui/Navbar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejas Athalye | Portfolio",
  description: "Tejas Athalye | Software developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="dark text-foreground bg-background min-h-screen">
          <NavbarSection />
          <Providers>{children}</Providers>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
