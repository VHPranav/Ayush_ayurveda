"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

type Props = {
  /** 0 = blinds open (invisible), 1 = fully closed. */
  progress: MotionValue<number>;
  /** Colour of the slats — the background of what comes next. */
  to: string;
  slats?: number;
};

/**
 * Vertical-blind overlay that fills its (positioned) parent: all slats swing
 * shut together as `progress` goes from 0 to 1.
 */
export function BlindsTransition({ progress, to, slats = 10 }: Props) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 flex overflow-hidden" style={{ perspective: 1600 }}>
      {Array.from({ length: slats }, (_, i) => (
        <Slat key={i} progress={progress} color={to} />
      ))}
    </div>
  );
}

function Slat({ progress, color }: { progress: MotionValue<number>; color: string }) {
  const rotateY = useTransform(progress, [0, 0.9], [88, 0]);
  const opacity = useTransform(progress, [0, 0.25], [0, 1]);
  // Light falls off the slat while it is angled, then evens out once it lies flat.
  const shade = useTransform(progress, [0, 0.9, 1], [1, 0.35, 0]);

  return (
    <motion.div
      style={{ rotateY, opacity, transformOrigin: "left" }}
      className={`relative -mr-px flex-1 ${color} will-change-transform`}
    >
      <motion.div
        style={{ opacity: shade }}
        className="absolute inset-0 bg-gradient-to-r from-stone-deep/35 via-stone-deep/10 to-transparent shadow-[inset_-1px_0_0_rgba(28,58,75,0.18)]"
      />
    </motion.div>
  );
}
