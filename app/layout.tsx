import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Oneko from "@/components/Oneko";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jothsana",
  description: "Portfolio of Jothsana Waikar, a passionate Full-Stack Developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, syne.variable, jetbrainsMono.variable)}>
      <body className="font-sans antialiased bg-[#000] text-white selection:bg-white selection:text-black">
        {children}
        <Oneko />
      </body>
    </html>
  );
}
