"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  LayoutTemplate,
  BarChart3,
  Smartphone,
  Cable,
  GripVertical,
  RotateCcw,
} from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { services } from "@/lib/data";
import { arrangeCards, moveCard, type CardBox } from "@/lib/service-playground";

const iconMap = [Code2, Palette, LayoutTemplate, BarChart3, Smartphone, Cable];

export function Services() {
  const boardRef = useRef<HTMLDivElement>(null);
  const bounds = useRef({ width: 0, height: 0 });
  const pointer = useRef<{ id: number; index: number; x: number; y: number } | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [cards, setCards] = useState<CardBox[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const resize = new ResizeObserver(() => {
      bounds.current = { width: board.clientWidth, height: board.clientHeight };
      pointer.current = null;
      setActive(null);
      setCards(arrangeCards(services.length, bounds.current));
    });
    resize.observe(board);
    return () => {
      resize.disconnect();
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  function stopDrag() {
    pointer.current = null;
    setActive(null);
  }

  function handleReset() {
    stopDrag();
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    setIsResetting(true);
    setCards(arrangeCards(services.length, bounds.current));
    resetTimerRef.current = setTimeout(() => {
      setIsResetting(false);
    }, 550);
  }

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
            className="hero-headline max-w-xl text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-[#050505]/75 dark:text-zinc-300"
          >
            Not what we make,
            <br />
            but your{" "}
            <span className="text-[#2563FF] dark:text-[#3b82f6]">satisfaction</span> matters.
          </motion.p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0c0c0e]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#141418] px-5 py-4 sm:px-7">
            <div>
              <p className="font-hand text-2xl text-[#2563FF] dark:text-[#3b82f6]">a little playground</p>
              <p id="services-drag-help" className="mt-1 max-w-md text-xs leading-relaxed text-black/60 dark:text-zinc-400">
                Drag a card to move the others. Tab to a card and use the arrow keys, or reset to start again.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              disabled={isResetting}
              className="group inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-[#D9FF3F] dark:hover:text-[#050505] dark:text-zinc-200 transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563FF]"
            >
              <RotateCcw
                size={14}
                aria-hidden="true"
                className={`transition-transform duration-500 ease-out ${
                  isResetting ? "-rotate-180" : "group-hover:-rotate-45"
                }`}
              />
              Reset
            </button>
          </div>
          <div ref={boardRef} role="group" aria-label="Draggable services playground" className="relative h-[640px] overflow-hidden sm:h-[440px] lg:h-[400px]">
            {services.map((service, i) => {
              const Icon = iconMap[i] ?? Code2;
              const card = cards[i];

              return (
                <button
                  key={service.label}
                  type="button"
                  aria-label={`Move ${service.label}`}
                  aria-describedby="services-drag-help"
                  onPointerDown={(event) => {
                    if (isResetting || !event.isPrimary || event.button !== 0 || pointer.current) return;
                    event.currentTarget.setPointerCapture(event.pointerId);
                    pointer.current = { id: event.pointerId, index: i, x: event.clientX, y: event.clientY };
                    setActive(i);
                  }}
                  onPointerMove={(event) => {
                    const drag = pointer.current;
                    if (!drag || drag.id !== event.pointerId || drag.index !== i) return;
                    const dx = event.clientX - drag.x;
                    const dy = event.clientY - drag.y;
                    pointer.current = { ...drag, x: event.clientX, y: event.clientY };
                    setCards(previous => moveCard(previous, i, dx, dy, bounds.current));
                  }}
                  onPointerUp={stopDrag}
                  onPointerCancel={stopDrag}
                  onLostPointerCapture={stopDrag}
                  onKeyDown={(event) => {
                    if (isResetting) return;
                    const delta: Record<string, [number, number]> = { ArrowLeft: [-16, 0], ArrowRight: [16, 0], ArrowUp: [0, -16], ArrowDown: [0, 16] };
                    const movement = delta[event.key];
                    if (!movement) return;
                    event.preventDefault();
                    setCards(previous => moveCard(previous, i, ...movement, bounds.current));
                  }}
                  style={{
                    width: card?.width ?? 250,
                    height: card?.height ?? 80,
                    transform: `translate(${card?.x ?? 0}px, ${card?.y ?? 0}px)`,
                    visibility: card ? "visible" : "hidden",
                    zIndex: active === i ? 10 : 1,
                    transition: isResetting
                      ? `transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 30}ms`
                      : "none",
                  }}
                  className={`absolute left-0 top-0 flex touch-none select-none items-center gap-3 rounded-2xl border bg-white dark:bg-[#18181d] px-4 text-left shadow-[0_8px_20px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_8px_20px_-12px_rgba(0,0,0,0.7)] outline-offset-[-3px] focus-visible:outline-2 focus-visible:outline-[#2563FF] ${active === i ? "cursor-grabbing border-[#2563FF]" : "cursor-grab border-black/15 dark:border-white/15 hover:border-[#2563FF]/50 dark:hover:border-[#3b82f6]/60"}`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      service.accent === "lime"
                        ? "bg-[#D9FF3F] text-[#050505]"
                        : "bg-[#2563FF] text-white"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2.4} />
                  </span>
                  <span className="font-display flex-1 text-sm font-bold leading-tight tracking-tight text-[#050505] dark:text-zinc-100">
                    {service.label}
                  </span>
                  <GripVertical size={14} className="shrink-0 text-black/30 dark:text-white/30" aria-hidden="true" />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
