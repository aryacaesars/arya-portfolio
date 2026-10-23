"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { ScribbleArrow, PlusSparkle } from "@/components/Decorations";
import { profile, projects } from "@/lib/data";

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
              my work
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
              className="group relative"
            >
              <div className="paper-card overflow-hidden p-4">
                {/* Project cover */}
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-lg ${
                    project.accent === "lime"
                      ? "bg-gradient-to-br from-[#D9FF3F]/90 via-[#D9FF3F] to-[#b9e036]"
                      : "bg-gradient-to-br from-[#2563FF] via-[#3b6cff] to-[#1e4fd6]"
                  }`}
                >
                  <div
                    className={`absolute inset-0 flex flex-col justify-between p-6 ${
                      project.accent === "lime" ? "text-[#050505]" : "text-white"
                    }`}
                  >
                    <span className="font-display text-sm font-semibold opacity-60">
                      {String(i + 1).padStart(2, "0")} / SELECTED PROJECT
                    </span>
                    <div>
                      <p className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                        {project.title}
                      </p>
                      <p className="mt-3 text-sm opacity-75">{project.subtitle}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-current/25 px-3 py-1 text-xs">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} (opens in a new tab)`}
                      className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2563FF] underline-offset-4 hover:underline"
                    >
                      View Project
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
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
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D9FF3F]/70 hover:bg-[#D9FF3F]/[0.06]"
            >
              More Projects on GitHub
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#D9FF3F] text-[#050505] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} strokeWidth={2.6} />
              </span>
            </a>
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
