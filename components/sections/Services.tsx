"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  LayoutTemplate,
  BarChart3,
  Smartphone,
  Cable,
} from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { services } from "@/lib/data";

const iconMap = [Code2, Palette, LayoutTemplate, BarChart3, Smartphone, Cable];

export function Services() {
  return (
    <section
      id="services"
      className="relative px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <StickyNote
              variant="lime"
              rotate={-4}
              className="text-3xl md:text-4xl lg:text-5xl"
              withTape
            >
              services
            </StickyNote>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-headline max-w-xl text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-[#050505]/75"
          >
            Not what we make,
            <br />
            but your{" "}
            <span className="text-[#2563FF]">satisfaction</span> matters.
          </motion.p>
        </div>

        {/* Asymmetrical grid of floating tilted service pills */}
        <div className="relative">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[i] ?? Code2;
              const colSpan =
                i === 0
                  ? "lg:col-span-2"
                  : i === 4
                    ? "lg:col-span-2"
                    : "";
              const align = i % 2 === 0 ? "lg:justify-self-start" : "lg:justify-self-end";

              return (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 28, rotate: 0 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: service.rotation,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -6, rotate: 0 }}
                  className={`${colSpan} ${align} group flex items-center gap-4 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.15)] lg:w-fit`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      service.accent === "lime"
                        ? "bg-[#D9FF3F] text-[#050505]"
                        : "bg-[#2563FF] text-white"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2.4} />
                  </span>
                  <p className="font-display text-base font-bold tracking-tight text-[#050505] md:text-lg">
                    {service.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
