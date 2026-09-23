"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { TideTransition } from "../ui/TideTransition";
import { Statement, StatementContent } from "./Statement";

/**
 * Introduction → Statement hand-off.
 *
 * The Introduction scrolls normally until its bottom meets the bottom of the
 * screen, then holds (sticky) while the next stretch of scrolling:
 *   1. lets the sand-coloured tide rise over it while it gently recedes, then
 *   2. builds the Statement on the calm surface.
 * Once complete, everything scrolls on together.
 */
export function IntroSequence({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const pinned = useRef<HTMLDivElement>(null);
  const runway = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<{ top: number; vh: number } | null>(null);

  // Sticky with a negative top: the block pins when its *bottom* reaches the viewport bottom.
  useLayoutEffect(() => {
    const el = pinned.current;
    if (!el) return;
    const measure = () => {
      const vh = window.innerHeight;
      setLayout({ top: Math.min(0, vh - el.offsetHeight), vh });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reduced]);

  // Progress across the held stretch only (the runway below the pinned block).
  const { scrollYProgress } = useScroll({ target: runway, offset: ["start end", "end end"] });
  const tide = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const recedeScale = useTransform(tide, [0, 1], [1, 0.94]);
  const recedeOpacity = useTransform(tide, [0, 1], [1, 0.5]);
  const statement = useTransform(scrollYProgress, [0.45, 0.95], [0, 1]);

  if (reduced) {
    return (
      <>
        {children}
        <Statement />
      </>
    );
  }

  return (
    <div className="relative">
      <div ref={pinned} className="sticky" style={layout ? { top: layout.top } : undefined}>
        <motion.div style={{ scale: recedeScale, opacity: recedeOpacity, transformOrigin: "50% 100%" }}>
          {children}
        </motion.div>

        {/* The last screen of the Introduction: the tide comes in, then the Statement builds on top */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
          style={{ height: layout ? layout.vh : "100vh" }}
        >
          <TideTransition progress={tide} color="var(--color-sand)" foam="color-mix(in srgb, var(--color-stone) 32%, var(--color-sand))" />
          <div className="absolute inset-0">
            <StatementContent progress={statement} />
          </div>
        </div>
      </div>

      {/* Scroll runway that drives the held sequence */}
      <div ref={runway} aria-hidden className="h-[240vh]" />
    </div>
  );
}
