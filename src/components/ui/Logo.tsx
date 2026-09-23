"use client";

import { motion } from "motion/react";

const draw = (delay: number) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: {
    pathLength: { duration: 1.6, delay, ease: [0.65, 0, 0.35, 1] as const },
    opacity: { duration: 0.2, delay },
  },
});

/** Mountain-and-wave mark: a single fine line joining the peaks and the sea. */
export function LogoMark({ className, animated = true }: { className?: string; animated?: boolean }) {
  const a = animated ? draw : () => ({});
  return (
    <svg viewBox="0 0 72 34" fill="none" aria-hidden className={className}>
      <motion.path
        d="M3 23 L19 9 L27 16 L37 5 L55 23"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...a(0.1)}
      />
      <motion.path
        d="M2 28 C9 24.5 15 31 22 28 S35 24.5 42 28 S56 31 70 26.5"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        {...a(0.6)}
      />
    </svg>
  );
}

export function Logo({ tone = "light", animated = true }: { tone?: "light" | "dark"; animated?: boolean }) {
  const color = tone === "light" ? "text-ivory" : "text-adriatic";
  return (
    <span className={`flex items-center gap-3 ${color}`}>
      <LogoMark animated={animated} className="h-7 w-auto md:h-8" />
      <motion.span
        className="flex flex-col leading-none"
        initial={animated ? { opacity: 0, y: 4 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: animated ? 1.4 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-display text-[1.15rem] tracking-[0.16em] whitespace-nowrap sm:text-[1.35rem] md:text-[1.5rem] md:tracking-[0.18em]">AYUSH &amp; VIVUM</span>
        <span className="mt-1 hidden text-[0.5rem] tracking-[0.34em] whitespace-nowrap uppercase opacity-80 sm:block md:text-[0.55rem]">
          Ayurveda · Yoga · Wellness · Montenegro
        </span>
      </motion.span>
    </span>
  );
}
