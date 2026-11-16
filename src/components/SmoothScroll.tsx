"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Every page opens at the top: stop the browser restoring the old position on reload/back.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const instance = new Lenis({
      autoRaf: true,
      anchors: { offset: -80 },
      // Buttery feel: a continuous ease toward the target (lerp) rather than a fixed-length
      // tween per wheel tick. Lower = softer glide; 0.08 is a touch softer than the default.
      lerp: 0.08,
      smoothWheel: true,
      // Phones: by default Lenis leaves touch native, so swipes weren't smoothed at all.
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchInertiaExponent: 1.7,
      // Only vertical gestures are taken over; horizontal swipers stay native.
      gestureOrientation: "vertical",
    });
    lenis.current = instance;
    return () => {
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  // On every route change, jump (not glide) to the top — Lenis keeps its own scroll
  // position, so the native reset alone can leave a new page part-way down.
  useEffect(() => {
    if (window.location.hash) return; // in-page anchor links keep their target
    lenis.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  // "user" disables transform/layout animations for people who prefer reduced motion.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
