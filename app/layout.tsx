import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import {
  GridBackground,
  AmbientGlows,
  Sparkles,
  CurvedLines,
} from "@/components/Decorations";
import { LenisProvider } from "@/components/providers/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arya Achmad Caesar — Junior Web Developer",
  description:
    "Crafting digital experiences that inspire and impact. Junior Web Developer & Informatics student at Universitas Siliwangi building modern, clean and impactful web experiences.",
  keywords: [
    "Arya Achmad Caesar",
    "Junior Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Portfolio",
    "Next.js",
    "Tailwind CSS",
    "Universitas Siliwangi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <body className="relative min-h-screen bg-[#050505] text-white antialiased">
        <LenisProvider />
        <GridBackground />
        <AmbientGlows />
        <CurvedLines />
        <Sparkles />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
