"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Eye, Heart, Bookmark, MessageSquare } from "lucide-react";
import { StickyNote } from "@/components/ui/StickyNote";
import { tiktokProject } from "@/lib/data";

// ponytail: single featured tiktok project display, upgrade to multi-item grid when more videos added
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className ?? "h-4 w-4"}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.4a6.33 6.33 0 0 0-.84-.05A6.34 6.34 0 0 0 3.1 15.7a6.34 6.34 0 0 0 10.82 4.48c1.77-1.77 2.22-4.38 2.22-6.68V8.14a8.16 8.16 0 0 0 4.79 1.54V6.23a4.85 4.85 0 0 1-1.34-.54Z" />
    </svg>
  );
}

export function TikTokProjects() {
  const item = tiktokProject;

  return (
    <section id="tiktok" className="relative px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center gap-2 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <StickyNote
              variant="lime"
              rotate={-2}
              className="text-3xl md:text-4xl lg:text-5xl"
              withTape
            >
              featured on tiktok
            </StickyNote>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-hand mt-4 text-2xl text-[#050505]/65 dark:text-zinc-300"
          >
            {item.views} views · demo proyek di tiktok ↘
          </motion.p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 35, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: item.rotation ?? -1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          whileHover={{ y: -6, rotate: 0 }}
          className="group relative"
        >
          <div className="paper-card overflow-hidden p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              {/* Thumbnail & Video Preview */}
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-2xl border border-black/10 bg-[#0a0a0c] shadow-md dark:border-white/10 md:col-span-5 md:max-w-none">
                <Image
                  src={item.screenshot}
                  alt={`${item.title} video thumbnail`}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 340px, 90vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <TikTokIcon className="h-3.5 w-3.5" />
                  <span>TikTok</span>
                </div>

                <a
                  href={item.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Tonton ${item.title} di TikTok`}
                  className="absolute inset-0 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#D9FF3F]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D9FF3F] text-black shadow-xl transition-transform duration-300 group-hover:scale-115">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </span>
                </a>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white/95">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 backdrop-blur-md">
                    <Eye className="h-3.5 w-3.5 text-[#D9FF3F]" /> {item.views}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 backdrop-blur-md">
                    <Heart className="h-3.5 w-3.5 text-rose-400" /> {item.likes}
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <div className="flex flex-col justify-between md:col-span-7">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#050505]/70 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300">
                    <TikTokIcon className="h-3 w-3" />
                    {item.subtitle}
                  </div>

                  <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-[#050505] dark:text-zinc-100 md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#050505]/75 dark:text-zinc-300">
                    {item.description}
                  </p>

                  {/* Real Stats from TikTok */}
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-3 text-center dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="flex items-center justify-center gap-1 text-[#2563FF] dark:text-[#3b82f6]">
                        <Eye className="h-4 w-4" />
                        <span className="font-display text-lg font-bold text-[#050505] dark:text-zinc-100">
                          {item.views}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-black/50 dark:text-zinc-400">Views</p>
                    </div>

                    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-3 text-center dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="flex items-center justify-center gap-1 text-rose-500">
                        <Heart className="h-4 w-4 fill-rose-500" />
                        <span className="font-display text-lg font-bold text-[#050505] dark:text-zinc-100">
                          {item.likes}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-black/50 dark:text-zinc-400">Likes</p>
                    </div>

                    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-3 text-center dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="flex items-center justify-center gap-1 text-amber-500">
                        <Bookmark className="h-4 w-4 fill-amber-500" />
                        <span className="font-display text-lg font-bold text-[#050505] dark:text-zinc-100">
                          {item.saves}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-black/50 dark:text-zinc-400">Saves</p>
                    </div>

                    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-3 text-center dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="flex items-center justify-center gap-1 text-emerald-500">
                        <MessageSquare className="h-4 w-4" />
                        <span className="font-display text-lg font-bold text-[#050505] dark:text-zinc-100">
                          {item.comments}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10px] uppercase tracking-wider text-black/50 dark:text-zinc-400">Comments</p>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/70 dark:border-white/10 dark:text-zinc-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={item.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tonton video di TikTok"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[#050505] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2563FF] dark:bg-white dark:text-black dark:hover:bg-[#D9FF3F]"
                  >
                    <TikTokIcon className="h-4 w-4" />
                    Tonton Video di TikTok
                    <ArrowUpRight size={15} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <a
                    href="https://www.tiktok.com/@arya.caesars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#050505]/70 underline-offset-4 hover:underline dark:text-zinc-300"
                  >
                    Profil @arya.caesars
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            <span
              aria-hidden
              className="paper-card__fold paper-card__fold--lime"
            />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
