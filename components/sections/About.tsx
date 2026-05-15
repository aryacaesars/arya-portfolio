"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/ui/StickyNote";
import { PaperCard } from "@/components/ui/PaperCard";
import { ScribbleArrow, PlusSparkle } from "@/components/Decorations";
import { profile, skills, aiWorkflow, stats } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-16 lg:grid-cols-[1fr_1fr]">
        {/* LEFT: why me? + headline + skills */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="inline-block"
          >
            <StickyNote
              variant="lime"
              rotate={-4}
              className="text-3xl md:text-4xl lg:text-5xl"
              withTape
            >
              why me?
            </StickyNote>
          </motion.div>

          <PlusSparkle className="absolute -left-4 top-16 h-4 w-4 text-[#D9FF3F]/80 animate-blink" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-headline mt-12 text-[clamp(2.25rem,5vw,3.75rem)] text-white"
          >
            Recognize{" "}
            <span className="text-[#D9FF3F]">success</span>,
            <br />
            strive for more.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-md text-base leading-7 text-white/65"
          >
            {profile.aboutDescription} Frontend craft, system thinking, and a
            modern AI-assisted workflow are the engine behind every project I
            ship.
          </motion.p>

          {/* Skills + AI Workflow */}
          <div className="mt-10 grid gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-md"
            >
              <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/55">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-sm font-medium text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-[#2563FF]/30 bg-gradient-to-br from-[#2563FF]/[0.18] to-[#2563FF]/[0.04] p-5 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#D9FF3F]">
                  AI-Assisted Workflow
                </p>
                <span className="font-hand text-lg text-white/70">
                  built modern.
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {aiWorkflow.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-sm font-medium text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: stacked white stat paper cards */}
        <div className="relative">
          <ScribbleArrow
            className="absolute -top-6 right-6 hidden h-12 w-20 -rotate-12 md:block"
            color="white"
            flip
          />

          <div className="grid gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: i % 2 === 0 ? -1 : 1.5,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="lift"
              >
                <PaperCard
                  fold={i % 2 === 0 ? "blue" : "lime"}
                  rotate={i % 2 === 0 ? -1 : 1.5}
                  className="px-6 py-6 md:px-8 md:py-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <p className="font-display text-4xl font-bold tracking-tight text-[#050505] md:text-5xl">
                      {stat.value}
                    </p>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#050505]">
                        {stat.label}
                      </p>
                      <p className="mt-1 max-w-[18rem] text-xs leading-relaxed text-[#050505]/65">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </PaperCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
