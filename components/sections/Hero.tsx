"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { ScribbleArrow } from "@/components/Decorations";
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
      className="relative isolate overflow-hidden px-6 pb-28 pt-36 lg:px-10 lg:pb-40 lg:pt-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,255,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(217,255,63,0.08),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Floating handwritten scribble — top right */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute right-2 top-2 hidden items-center gap-2 md:flex lg:right-12 lg:top-6"
        >
          <ScribbleArrow className="h-10 w-16 -rotate-6" color="white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-headline text-balance text-[clamp(2.75rem,9vw,7.5rem)] text-white"
        >
          <span aria-hidden className="mr-2 text-white/40">
            /
          </span>
          Full-stack developer
          <br />
          focused on{" "}
          <StickyNote variant="lime" rotate={-3} className="text-[0.92em]">
            performance
          </StickyNote>
          <br className="hidden sm:block" />
          <span className="inline-flex flex-wrap items-end gap-x-4 gap-y-3">
            'n{" "}
            <StickyNote variant="blue" rotate={2} className="text-[0.92em]">
              experience.
            </StickyNote>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 grid items-start gap-12 md:mt-14 lg:grid-cols-[1fr_auto]"
        >
          <div className="max-w-lg">
            <p className="text-base leading-7 text-white/65 md:text-lg">
              {profile.heroIntro}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                onClick={(e) => handleHashClick(e, "#projects")}
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D9FF3F]/70 hover:bg-[#D9FF3F]/[0.06]"
              >
                View My Work
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#D9FF3F] text-[#050505] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} strokeWidth={2.6} />
                </span>
              </Link>

              <Link
                href="#contact"
                onClick={(e) => handleHashClick(e, "#contact")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#D9FF3F] px-5 py-3 text-sm font-semibold text-[#050505] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-12px_rgba(217,255,63,0.55)]"
              >
                Let&apos;s Talk
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#050505] text-[#D9FF3F] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} strokeWidth={2.6} />
                </span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9FF3F] shadow-[0_0_8px_rgba(217,255,63,0.9)]" />
                <span className="font-semibold text-white">
                  {profile.name}
                </span>
              </div>
              <span className="text-white/40">/</span>
              <span className="text-white/70">{profile.role}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/70">{profile.education}</span>
            </div>
          </div>

          {/* Scroll-down indicator */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden self-end lg:flex lg:flex-col lg:items-center lg:gap-3"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D9FF3F] text-[#050505] shadow-[0_0_22px_rgba(217,255,63,0.45)] animate-float-soft">
              <ArrowDown size={16} strokeWidth={2.6} />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
