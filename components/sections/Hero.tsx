"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
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
      className="relative isolate overflow-hidden px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-36"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-y-10 lg:grid-cols-[1.15fr_1fr] lg:gap-x-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-headline min-w-0 text-balance text-[clamp(2.75rem,9vw,5rem)] text-[#050505] lg:col-start-1 lg:row-start-1 lg:text-[clamp(3rem,5vw,4.5rem)]"
        >
          <span aria-hidden className="mr-2 text-[#050505]/40">
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
            &apos;n{" "}
            <StickyNote variant="blue" rotate={2} className="text-[0.92em]">
              experience.
            </StickyNote>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto my-4 w-full max-w-[360px] px-3 sm:max-w-[440px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:my-0 lg:max-w-[500px] lg:px-5"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-3 inset-y-2 rotate-[4deg] rounded-[2rem] bg-[#D9FF3F] lg:inset-x-5"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#2563FF] shadow-[0_24px_60px_-28px_rgba(5,5,5,0.3)]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <span className="absolute left-5 top-5 z-10 rounded-full bg-white px-4 py-2 font-hand text-xl text-[#050505] sm:text-2xl">
                hey, I&apos;m Arya!
              </span>
              <Image
                src="/arya-portrait.png"
                alt="Arya Achmad Caesar wearing a dark blazer"
                width={1024}
                height={1024}
                sizes="(min-width: 1280px) 644px, (min-width: 1024px) 55vw, (min-width: 640px) 582px, (min-width: 408px) 470px, calc(140vw - 101px)"
                preload
                className="absolute -left-[27%] bottom-0 h-auto w-[140%] max-w-none"
              />
            </div>
            <div className="relative flex items-center justify-between gap-3 bg-white px-5 py-5 sm:px-6">
              <div>
                <p className="font-display text-lg font-bold tracking-tight text-[#050505] sm:text-xl">
                  {profile.name}
                </p>
                <p className="mt-1 text-xs text-[#050505]/60 sm:text-sm">
                  Next.js / TypeScript / PostgreSQL
                </p>
              </div>
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9FF3F] text-[#050505]">
                <Code2 size={22} />
              </span>
            </div>
          </div>
          <div className="absolute -right-1 top-24 rotate-[7deg] rounded-xl border border-black/10 bg-white px-3 py-2 shadow-lg sm:right-0 sm:top-28 sm:px-4 sm:py-3">
            <p className="font-display text-sm font-bold text-[#2563FF] sm:text-base">BNSP Certified</p>
            <p className="mt-0.5 text-[10px] text-[#050505]/60 sm:text-xs">Junior Web Programmer</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="min-w-0 lg:col-start-1 lg:row-start-2"
        >
          <div className="max-w-lg">
            <p className="text-base leading-7 text-[#050505]/65 md:text-lg">
              {profile.heroIntro}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                onClick={(e) => handleHashClick(e, "#projects")}
                className="group inline-flex items-center gap-3 rounded-full border border-black/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#050505] backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D9FF3F]/70 hover:bg-[#D9FF3F]/[0.06]"
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
                <span className="font-semibold text-[#050505]">
                  {profile.name}
                </span>
              </div>
              <span className="text-[#050505]/40">/</span>
              <span className="text-[#050505]/70">{profile.role}</span>
              <span className="text-[#050505]/40">/</span>
              <span className="text-[#050505]/70">{profile.education}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
