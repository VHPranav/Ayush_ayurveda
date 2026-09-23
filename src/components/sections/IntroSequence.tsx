"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import { BlindsTransition } from "../ui/BlindsTransition";
import { Statement, StatementContent } from "./Statement";

/**
 * Introduction → Statement hand-off.
 *
 * The Introduction scrolls normally until its bottom meets the bottom of the
 * screen, then holds (sticky) while the next stretch of scrolling:
 *   1. closes vertical blinds over it, then
 *   2. builds the Statement on top of the closed blinds.
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
  const blinds = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
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
        {children}

        {/* The last screen of the Introduction: blinds close, then the Statement builds on top */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
          style={{ height: layout ? layout.vh : "100vh" }}
        >
          <BlindsTransition progress={blinds} to="bg-sand" />
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
