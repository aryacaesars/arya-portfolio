"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { ScribbleArrow } from "@/components/Decorations";
import { profile } from "@/lib/data";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36"
    >
      <div className="relative mx-auto max-w-7xl text-center">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="hero-headline mx-auto text-balance text-[clamp(2.75rem,9vw,7rem)] text-[#050505] dark:text-zinc-100"
        >
          <span className="inline-flex flex-wrap items-end justify-center gap-x-5 gap-y-3">
            Let&apos;s build
            <StickyNote
              variant="blue"
              rotate={-3}
              className="text-[0.95em]"
              withTape
            >
              something
            </StickyNote>
          </span>
          <br />
          <span className="inline-flex flex-wrap items-end justify-center gap-x-5 gap-y-3">
            truly{" "}
            <StickyNote
              variant="lime"
              rotate={2.5}
              className="text-[0.95em]"
              withTape
            >
              creative.
            </StickyNote>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#050505]/65 dark:text-zinc-300 md:text-lg"
        >
          Let&apos;s discuss your next web application, e-commerce platform,
          or dashboard — from UI/UX to full-stack development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <Link
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-[#D9FF3F] px-7 py-4 text-base font-semibold text-[#050505] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_rgba(217,255,63,0.6)]"
          >
            Start a Project
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#050505] text-[#D9FF3F] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} strokeWidth={2.6} />
            </span>
          </Link>

          <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#050505]/70 dark:text-zinc-300">
            <a href={`mailto:${profile.email}`} className="hover:text-[#2563FF] dark:hover:text-[#D9FF3F]">
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="hover:text-[#2563FF] dark:hover:text-[#D9FF3F]">
              {profile.phone}
            </a>
          </div>
          <p className="text-sm text-[#050505]/55 dark:text-zinc-400">{profile.location}</p>

          <ScribbleArrow
            className="mt-1 h-10 w-20 -rotate-12 opacity-80"
            color="lime"
          />

          <span className="font-hand text-xl text-[#050505]/75 dark:text-zinc-300">
            or just say hi ✦
          </span>
        </motion.div>
      </div>
    </section>
  );
}
