import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { profile } from "@/lib/data";

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
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.heroIntro} Informatics student at Universitas Siliwangi, based in ${profile.location}.`,
  keywords: [
    "Arya Achmad Caesar",
    "Full-Stack Developer",
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
      <body className="relative min-h-screen bg-white text-[#050505] antialiased">
        <LenisProvider />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
