"use client";

import { motion } from "framer-motion";
import { StickyNote } from "@/components/ui/StickyNote";
import { PaperCard } from "@/components/ui/PaperCard";
import { ScribbleArrow, PlusSparkle } from "@/components/Decorations";
import { experienceItems } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <StickyNote
              variant="lime"
              rotate={-3}
              className="text-3xl md:text-4xl lg:text-5xl"
              withTape
            >
              experience
            </StickyNote>
          </motion.div>

          <ScribbleArrow
            className="hidden h-8 w-14 md:block"
            color="white"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-headline max-w-xl text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-white/75"
          >
            Real teams. Real shipping. Real{" "}
            <span className="text-[#D9FF3F]">craft</span>.
          </motion.p>
        </div>

        <div className="relative grid gap-10 md:gap-12 lg:grid-cols-2">
          <PlusSparkle className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-[#D9FF3F]/70 animate-blink" />

          {experienceItems.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="lift"
            >
              <PaperCard
                fold={item.accent}
                rotate={item.rotation}
                withClip
                clipSide={i % 2 === 0 ? "left" : "right"}
                className="px-7 pb-7 pt-10 md:px-9"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-[#050505] md:text-3xl">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm font-semibold ${
                        item.accent === "lime"
                          ? "text-[#2563FF]"
                          : "text-[#2563FF]"
                      }`}
                    >
                      {item.company}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                      item.accent === "lime"
                        ? "border-[#D9FF3F] bg-[#D9FF3F]/30 text-[#050505]"
                        : "border-[#2563FF] bg-[#2563FF] text-white"
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-[#050505]/10" />

                <ul className="mt-5 grid gap-2.5">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#050505]/80"
                    >
                      <span
                        className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                          item.accent === "lime"
                            ? "bg-[#D9FF3F]"
                            : "bg-[#2563FF]"
                        }`}
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </PaperCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
