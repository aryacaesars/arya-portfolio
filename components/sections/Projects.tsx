"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { ScribbleArrow } from "@/components/Decorations";
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
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-hand mt-4 text-2xl text-[#050505]/65 dark:text-zinc-300"
          >
            see more details ↘
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
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
                <div className="overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-[#f7f7f7] dark:bg-[#0c0c0e]">
                  <div className="flex items-center gap-1.5 border-b border-black/10 dark:border-white/10 px-3 py-2.5">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-black/15 dark:bg-white/20" />
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-black/15 dark:bg-white/20" />
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-black/15 dark:bg-white/20" />
                    <span className="ml-2 text-[10px] font-medium text-black/50 dark:text-white/50">{project.title}</span>
                  </div>
                  {project.screenshot ? (
                    <a
                      href={project.screenshot}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} homepage screenshot in a new tab`}
                      className="relative block aspect-[36/25] overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#2563FF]"
                    >
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} homepage screenshot`}
                        width={1440}
                        height={1000}
                        sizes="(min-width: 1360px) 584px, (min-width: 768px) 44vw, 90vw"
                        className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </a>
                  ) : (
                    <div className="flex aspect-[36/25] flex-col items-center justify-center gap-3 bg-[#2563FF] px-6 text-center text-white">
                      <p className="font-display text-4xl font-bold">{project.title}</p>
                      <p className="text-sm text-white/75">Homepage preview coming soon</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 px-1 pb-1">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#050505]/55 dark:text-zinc-400">
                    {project.subtitle}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-bold tracking-tight text-[#050505] dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#050505]/65 dark:text-zinc-300">
                    {project.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-[11px] text-black/65 dark:text-zinc-300">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} (opens in a new tab)`}
                      className="relative z-10 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2563FF] dark:text-[#3b82f6] underline-offset-4 hover:underline"
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
              className="group inline-flex items-center gap-3 rounded-full border border-black/15 dark:border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#050505] dark:text-zinc-100 backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D9FF3F]/70 hover:bg-[#D9FF3F]/[0.06]"
            >
              More Projects on GitHub
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#D9FF3F] text-[#050505] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} strokeWidth={2.6} />
              </span>
            </a>
          </motion.div>

          <ScribbleArrow
            className="mt-2 h-8 w-16 rotate-12 opacity-70"
            color="blue"
          />
        </div>
      </div>
    </section>
  );
}
