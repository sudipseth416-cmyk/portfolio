import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import ThreeBackground from "@/components/ThreeBackground";
import LenisScroll from "@/components/LenisScroll";
import CommandPalette from "@/components/CommandPalette";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudip Seth | Future Data Scientist & AI Enthusiast Portfolio",
  description: "Explore the futuristic developer portfolio of Sudip Seth. Showcasing projects in Data Science, Machine Learning, and Python logic structures with interactive experiences.",
  keywords: ["Sudip Seth", "Portfolio", "Data Science", "Machine Learning", "Python Developer", "AI Enthusiast"],
  authors: [{ name: "Sudip Seth" }],
  openGraph: {
    title: "Sudip Seth | Future Data Scientist Portfolio",
    description: "Explore the futuristic developer portfolio of Sudip Seth. Showcasing projects in Data Science, Machine Learning, and Python.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="relative bg-[#030712] font-sans antialiased text-white selection:bg-cyan-500/30 selection:text-white">
        {/* Smooth scroll initializer */}
        <LenisScroll />

        {/* Global interactive backgrounds and overlays */}
        <ThreeBackground />
        <CursorGlow />
        <CommandPalette />
        <ChatWidget />

        {/* Header navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative min-h-screen w-full flex flex-col justify-start">
          {children}
        </main>
      </body>
    </html>
  );
}
