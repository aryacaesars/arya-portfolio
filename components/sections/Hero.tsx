"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { profile } from "@/lib/data";
import { smoothScrollTo } from "@/components/providers/LenisProvider";

function handleHashClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  smoothScrollTo(href);
  if (typeof window !== "undefined") {
    window.history.replaceState(null, "", href);
  }
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40"
    >
      <div className="relative mx-auto max-w-4xl text-center">
        {/* SaaS-style top announcement pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-[#050505] dark:text-zinc-200 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#D9FF3F] shadow-[0_0_8px_rgba(217,255,63,0.9)]" />
          <span>BNSP Certified Junior Web Programmer</span>
          <span className="text-black/30 dark:text-white/30">•</span>
          <span className="text-[#2563FF] dark:text-[#3b82f6] font-semibold">Available for Work</span>
        </motion.div>

        {/* Big centered headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-headline mx-auto text-balance text-[clamp(2.75rem,8vw,5.5rem)] text-[#050505] dark:text-zinc-100"
        >
          Full-stack developer
          <br />
          focused on{" "}
          <StickyNote variant="lime" rotate={-2.5} className="text-[0.92em]">
            performance
          </StickyNote>{" "}
          <span className="inline-flex items-center">
            &apos;n{" "}
            <StickyNote variant="blue" rotate={2} className="ml-2 text-[0.92em]">
              experience.
            </StickyNote>
          </span>
        </motion.h1>

        {/* Centered intro subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-[#050505]/65 dark:text-zinc-300 md:text-lg"
        >
          {profile.heroIntro}
        </motion.p>

        {/* Centered CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
        >
          <Link
            href="#projects"
            onClick={(e) => handleHashClick(e, "#projects")}
            className="group inline-flex items-center gap-3 rounded-full border border-black/15 dark:border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-[#050505] dark:text-zinc-100 backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D9FF3F]/70 hover:bg-[#D9FF3F]/[0.06]"
          >
            View My Work
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#D9FF3F] text-[#050505] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={14} strokeWidth={2.6} />
            </span>
          </Link>

          <Link
            href="#contact"
            onClick={(e) => handleHashClick(e, "#contact")}
            className="group inline-flex items-center gap-3 rounded-full bg-[#D9FF3F] px-6 py-3.5 text-sm font-semibold text-[#050505] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-12px_rgba(217,255,63,0.55)]"
          >
            Let&apos;s Talk
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#050505] text-[#D9FF3F] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={14} strokeWidth={2.6} />
            </span>
          </Link>
        </motion.div>

        {/* Centered credentials footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9FF3F] shadow-[0_0_8px_rgba(217,255,63,0.9)]" />
            <span className="font-semibold text-[#050505] dark:text-zinc-100">
              {profile.name}
            </span>
          </div>
          <span className="text-[#050505]/40 dark:text-zinc-500">/</span>
          <span className="text-[#050505]/70 dark:text-zinc-300">{profile.role}</span>
          <span className="text-[#050505]/40 dark:text-zinc-500">/</span>
          <span className="text-[#050505]/70 dark:text-zinc-300">{profile.education}</span>
        </motion.div>
      </div>
    </section>
  );
}
