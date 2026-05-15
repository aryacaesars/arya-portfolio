"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { ScribbleArrow, PlusSparkle } from "@/components/Decorations";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center gap-2 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <StickyNote
              variant="lime"
              rotate={-3}
              className="text-3xl md:text-4xl lg:text-5xl"
              withTape
            >
              our work
            </StickyNote>
            <PlusSparkle className="absolute -right-8 -top-4 h-4 w-4 text-[#D9FF3F] animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-hand mt-4 text-2xl text-white/65"
          >
            see more details ↘
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: project.rotation,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.07 }}
              whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              <div className="paper-card overflow-hidden p-4">
                {/* Preview visual */}
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-lg ${
                    project.accent === "lime"
                      ? "bg-gradient-to-br from-[#D9FF3F]/90 via-[#D9FF3F] to-[#b9e036]"
                      : "bg-gradient-to-br from-[#2563FF] via-[#3b6cff] to-[#1e4fd6]"
                  }`}
                >
                  <ProjectPreview index={i} accent={project.accent} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#050505] shadow-lg transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={14} strokeWidth={2.6} />
                  </span>
                </div>

                <div className="mt-4 px-1 pb-1">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#050505]/55">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-bold tracking-tight text-[#050505]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#050505]/65">
                    {project.description}
                  </p>
                </div>

                <span
                  aria-hidden
                  className={`paper-card__fold ${
                    project.accent === "lime"
                      ? "paper-card__fold--blue"
                      : "paper-card__fold--lime"
                  }`}
                />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D9FF3F]/70 hover:bg-[#D9FF3F]/[0.06]"
            >
              View All Projects
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#D9FF3F] text-[#050505] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} strokeWidth={2.6} />
              </span>
            </Link>
          </motion.div>

          <ScribbleArrow
            className="mt-2 h-8 w-16 rotate-12 opacity-70"
            color="white"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({
  index,
  accent,
}: {
  index: number;
  accent: "lime" | "blue";
}) {
  const fg = accent === "lime" ? "#050505" : "#ffffff";
  const bg = accent === "lime" ? "#D9FF3F" : "#2563FF";
  const ink = accent === "lime" ? "rgba(5,5,5,0.18)" : "rgba(255,255,255,0.22)";

  switch (index % 5) {
    case 0:
      // mobile catalog
      return (
        <div className="absolute inset-0 flex items-end justify-center p-6">
          <div className="relative h-[78%] w-[58%] overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="h-8 bg-[#050505]/95" />
            <div className="space-y-2 p-3">
              <div className="h-3 w-2/3 rounded-full bg-[#050505]/15" />
              <div className="h-3 w-1/2 rounded-full bg-[#050505]/12" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="aspect-[3/4] rounded-md bg-[#2563FF]/60" />
                <div className="aspect-[3/4] rounded-md bg-[#D9FF3F]/80" />
                <div className="aspect-[3/4] rounded-md bg-[#050505]/70" />
                <div className="aspect-[3/4] rounded-md bg-[#2563FF]/30" />
              </div>
            </div>
          </div>
        </div>
      );
    case 1:
      // corporate website
      return (
        <div className="absolute inset-0 flex flex-col p-5">
          <div className="flex items-center justify-between">
            <div className="h-2 w-12 rounded-full" style={{ background: ink }} />
            <div className="flex gap-1.5">
              <span className="h-2 w-6 rounded-full" style={{ background: ink }} />
              <span className="h-2 w-6 rounded-full" style={{ background: ink }} />
              <span className="h-2 w-6 rounded-full" style={{ background: ink }} />
            </div>
          </div>
          <div className="mt-auto">
            <div className="h-2 w-20 rounded-full" style={{ background: ink }} />
            <div className="mt-3 text-3xl font-bold leading-[0.95]" style={{ color: fg }}>
              Build.
              <br />
              Lead.
              <br />
              Scale.
            </div>
            <div
              className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6rem] font-semibold"
              style={{ background: fg, color: bg }}
            >
              Explore →
            </div>
          </div>
        </div>
      );
    case 2:
      // landing page – cinematic typography
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
          <div className="font-display text-[2.5rem] font-extrabold leading-[0.95]" style={{ color: fg }}>
            Niskala
          </div>
          <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: fg, opacity: 0.75 }}>
            Publikasi Indonesia
          </div>
          <div className="mt-6 h-px w-2/3" style={{ background: ink }} />
          <div className="mt-3 text-[0.65rem]" style={{ color: fg, opacity: 0.7 }}>
            cinematic landing experience
          </div>
        </div>
      );
    case 3:
      // financial dashboard chart
      return (
        <div className="absolute inset-0 flex flex-col p-5">
          <div className="flex justify-between text-[0.6rem] font-semibold" style={{ color: fg }}>
            <span>Revenue</span>
            <span style={{ opacity: 0.7 }}>2026</span>
          </div>
          <div className="mt-1 text-2xl font-bold" style={{ color: fg }}>
            Rp 412.8M
          </div>
          <svg viewBox="0 0 200 100" className="mt-3 w-full">
            <path
              d="M0 70 L 25 60 L 50 65 L 75 45 L 100 40 L 125 25 L 150 30 L 175 18 L 200 22"
              fill="none"
              stroke={fg}
              strokeWidth="2"
            />
            <path
              d="M0 70 L 25 60 L 50 65 L 75 45 L 100 40 L 125 25 L 150 30 L 175 18 L 200 22 L 200 100 L 0 100 Z"
              fill={fg}
              opacity="0.18"
            />
          </svg>
          <div className="mt-auto grid grid-cols-3 gap-1.5">
            {[40, 70, 55].map((h, idx) => (
              <div key={idx} className="rounded-sm" style={{ background: ink, height: `${h / 2}px` }} />
            ))}
          </div>
        </div>
      );
    default:
      // student guardian dashboard
      return (
        <div className="absolute inset-0 flex flex-col p-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full" style={{ background: fg, opacity: 0.85 }} />
            <div className="flex-1">
              <div className="h-2 w-3/5 rounded-full" style={{ background: ink }} />
              <div className="mt-1 h-1.5 w-2/5 rounded-full" style={{ background: ink, opacity: 0.7 }} />
            </div>
          </div>
          <div className="mt-4 rounded-lg p-3" style={{ background: ink }}>
            <div className="h-2 w-1/2 rounded-full" style={{ background: fg, opacity: 0.85 }} />
            <div className="mt-2 text-xl font-bold" style={{ color: fg }}>
              98%
            </div>
            <div className="text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: fg, opacity: 0.7 }}>
              Paid this term
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full" style={{ background: ink }} />
            <div className="h-1.5 w-4/5 rounded-full" style={{ background: ink }} />
            <div className="h-1.5 w-3/5 rounded-full" style={{ background: ink }} />
          </div>
        </div>
      );
  }
}
