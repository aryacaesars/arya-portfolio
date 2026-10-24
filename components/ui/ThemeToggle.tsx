"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  size?: "sm" | "md";
};

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Ubah ke mode terang" : "Ubah ke mode gelap"}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563FF]",
        size === "sm" ? "h-9 w-9" : "h-10 w-10",
        "border-black/10 bg-black/[0.03] text-[#050505] hover:bg-black/[0.06] hover:border-black/20",
        "dark:border-white/15 dark:bg-white/[0.06] dark:text-zinc-100 dark:hover:bg-white/10 dark:hover:border-white/25",
        className,
      )}
    >
      <span className="sr-only">Toggle theme</span>
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={size === "sm" ? 16 : 18} className="text-[#D9FF3F]" />
        ) : (
          <Moon size={size === "sm" ? 16 : 18} className="text-[#050505]" />
        )}
      </motion.div>
    </button>
  );
}
