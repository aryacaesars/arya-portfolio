import Link from "next/link";
import Image from "next/image";
import { navLinks, profile, socials } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/[0.06] dark:border-white/[0.08] px-6 pb-10 pt-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* Logo */}
          <Link
            href="#home"
            aria-label="Arya Achmad Caesar — home"
            className="group flex items-center gap-2"
          >
            <Image
              src="/logo-ac.png"
              alt="Arya Caesar logo"
              width={1024}
              height={355}
              className="h-8 w-auto brightness-0 dark:invert transition-transform duration-500 group-hover:scale-105"
            />
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D9FF3F] shadow-[0_0_10px_rgba(217,255,63,0.8)]" />
          </Link>

          {/* Nav */}
          <ul className="flex flex-wrap items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-[#050505]/55 dark:text-zinc-400 transition-colors hover:text-[#050505] dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-black/[0.06] dark:border-white/[0.08] pt-6 text-xs text-[#050505]/45 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {profile.name}. {profile.location}.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 uppercase tracking-[0.2em]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#2563FF] dark:hover:text-[#D9FF3F]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
