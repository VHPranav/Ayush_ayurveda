"use client";

import { motion, useMotionValue, useTransform, type MotionValue } from "motion/react";
import { OliveBranch } from "../ui/OliveBranch";

const phrases = ["Eastern Wisdom.", "Montenegrin Nature.", "Personalised Wellbeing."];

function Phrase({ text, index, progress }: { text: string; index: number; progress: MotionValue<number> }) {
  const start = 0.12 + index * 0.16;
  const opacity = useTransform(progress, [start, start + 0.18], [0, 1]);
  const y = useTransform(progress, [start, start + 0.18], [28, 0]);
  return (
    <motion.span style={{ opacity, y }} className={`block ${index === 1 ? "text-olive" : ""}`}>
      {text}
    </motion.span>
  );
}

/**
 * Central message, built up as `progress` goes 0 → 1: the olive branch draws,
 * the three phrases rise in turn, then the supporting line appears.
 */
export function StatementContent({ progress }: { progress: MotionValue<number> }) {
  const eyebrow = useTransform(progress, [0, 0.12], [0, 1]);
  const para = useTransform(progress, [0.62, 0.82], [0, 1]);
  const paraY = useTransform(progress, [0.62, 0.82], [16, 0]);
  const branch = useTransform(progress, [0, 0.85], [0, 1]);

  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="pointer-events-none absolute -top-6 -right-40 w-[520px] text-olive/45 md:-right-[14%] md:w-[680px] lg:-right-[8%]">
        <OliveBranch progress={branch} className="h-auto w-full" />
      </div>

      <div className="container-page relative text-center">
        <motion.p style={{ opacity: eyebrow }} className="eyebrow text-stone-deep">
          Our Philosophy
        </motion.p>
        <h2 className="mx-auto mt-8 max-w-5xl heading-display text-adriatic">
          {phrases.map((p, i) => (
            <Phrase key={p} text={p} index={i} progress={progress} />
          ))}
        </h2>
        <motion.p
          style={{ opacity: para, y: paraY }}
          className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          A premium meeting point between East and the Mediterranean — authentic Eastern knowledge, delivered within
          the healing nature of Montenegro.
        </motion.p>
      </div>
    </div>
  );
}

/** Static version (fully shown) for reduced-motion visitors. */
export function Statement() {
  const shown = useMotionValue(1);
  return (
    <section className="bg-sand py-28 md:py-44">
      <StatementContent progress={shown} />
    </section>
  );
}
