"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail, ChevronDown } from "lucide-react";
import { navLinks, socials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/components/providers/LenisProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const GithubIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56 4.57-1.52 7.86-5.83 7.86-10.91C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.99 0 1.78-.78 1.78-1.73V1.73C24 .77 23.21 0 22.22 0Z" />
  </svg>
);

const TALK_ITEMS = [
  { label: "GitHub", icon: GithubIcon },
  { label: "LinkedIn", icon: LinkedinIcon },
  { label: "Email", icon: Mail },
] as const;

const getSocialHref = (label: string) =>
  socials.find((s) => s.label === label)?.href ?? "#";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      setOpen(false);
      smoothScrollTo(href);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", href);
      }
    },
    [],
  );

  const openTalk = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setTalkOpen(true);
  }, []);

  const scheduleCloseTalk = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setTalkOpen(false), 140);
  }, []);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => obs.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 lg:px-10 lg:pt-7">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "relative mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 lg:px-5",
          scrolled
            ? "border border-black/10 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#0c0c0e]/95"
            : "border border-transparent bg-transparent",
        )}
      >
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label="Arya Achmad Caesar — home"
          className="group flex items-center gap-2 pl-1.5"
        >
          <Image
            src="/logo-ac.png"
            alt="Arya Caesar logo"
            width={1024}
            height={355}
            priority
            className="h-7 w-auto brightness-0 dark:invert md:h-8 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-all duration-500",
                    isActive
                      ? "text-[#050505] dark:text-white"
                      : "text-[#050505]/55 hover:text-[#050505] dark:text-zinc-400 dark:hover:text-white",
                  )}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9FF3F] shadow-[0_0_8px_rgba(217,255,63,0.9)]" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop actions: theme toggle + Let's Talk dropdown */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          <div
            className="relative"
            onMouseEnter={openTalk}
            onMouseLeave={scheduleCloseTalk}
            onFocus={openTalk}
            onBlur={scheduleCloseTalk}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={talkOpen}
              onClick={() => setTalkOpen((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-full border border-[#D9FF3F]/40 bg-[#D9FF3F]/[0.05] dark:bg-[#D9FF3F]/10 px-4 py-2 text-sm font-semibold text-[#050505] dark:text-zinc-100 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#D9FF3F] hover:bg-[#D9FF3F]/10 dark:hover:bg-[#D9FF3F]/20"
            >
              Let&apos;s Talk
              <ChevronDown
                size={14}
                strokeWidth={2.4}
                className={cn(
                  "text-[#050505]/70 dark:text-zinc-300 transition-transform duration-300",
                  talkOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {talkOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-[#141418] p-1.5 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.7)] backdrop-blur-xl"
                >
                  <span
                    aria-hidden
                    className="absolute -top-3 right-0 left-0 h-3"
                  />
                  {TALK_ITEMS.map(({ label, icon: Icon }) => {
                    const href = getSocialHref(label);
                    const isExternal = !href.startsWith("mailto:");
                    return (
                      <a
                        key={label}
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        role="menuitem"
                        onClick={() => setTalkOpen(false)}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-[#050505]/80 dark:text-zinc-200 transition-all duration-300 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-[#050505] dark:hover:text-white"
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <Icon
                            size={16}
                            strokeWidth={2}
                            className="text-[#050505]/70 dark:text-zinc-300 transition-colors duration-300 group-hover:text-[#2563FF] dark:group-hover:text-[#D9FF3F]"
                          />
                          {label}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="text-[#050505]/40 dark:text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2563FF] dark:group-hover:text-[#D9FF3F]"
                        />
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile actions: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle size="sm" />
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex rounded-full border border-black/15 bg-white/[0.04] p-2 text-[#050505] dark:border-white/15 dark:text-zinc-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-7xl rounded-3xl border border-black/10 bg-white dark:border-white/10 dark:bg-[#121215] p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base text-[#050505]/85 dark:text-zinc-200 hover:text-[#050505] dark:hover:text-white"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#050505]/40 dark:text-zinc-400">
              Let&apos;s Talk
            </p>
            <div className="grid grid-cols-3 gap-2">
              {TALK_ITEMS.map(({ label, icon: Icon }) => {
                const href = getSocialHref(label);
                const isExternal = !href.startsWith("mailto:");
                return (
                  <a
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/[0.04] px-3 py-3 text-xs font-medium text-[#050505]/85 dark:text-zinc-200 transition-colors duration-300 hover:border-[#D9FF3F]/60 hover:text-[#050505] dark:hover:text-white"
                  >
                    <Icon size={18} strokeWidth={2} />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
