"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.25,
      autoRaf: true,
      anchors: { offset: -80 },
    });
    return () => lenis.destroy();
  }, []);

  // "user" disables transform/layout animations for people who prefer reduced motion.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
