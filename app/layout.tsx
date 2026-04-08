import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Oneko from "@/components/Oneko";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jothsana | Full-Stack Developer",
  description: "Portfolio of Jothsana Waikar, a passionate Full-Stack Developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#000] text-white selection:bg-white selection:text-black`}>
        {children}
        <Oneko />
      </body>
    </html>
  );
}
