import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyesh — Intelligent Digital Experiences",
  description: "Computer Science student and aspiring AI/ML engineer building intelligent digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black scroll-smooth">
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}

