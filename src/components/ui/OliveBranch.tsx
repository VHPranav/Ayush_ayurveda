"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

type Pt = [number, number];

// Stem as a cubic Bézier; leaves are lens shapes placed along it.
const P0: Pt = [10, 250];
const P1: Pt = [240, 250];
const P2: Pt = [470, 40];
const P3: Pt = [790, 70];

function bezier(t: number): Pt {
  const u = 1 - t;
  const x = u ** 3 * P0[0] + 3 * u * u * t * P1[0] + 3 * u * t * t * P2[0] + t ** 3 * P3[0];
  const y = u ** 3 * P0[1] + 3 * u * u * t * P1[1] + 3 * u * t * t * P2[1] + t ** 3 * P3[1];
  return [x, y];
}

function tangentAngle(t: number) {
  const [x1, y1] = bezier(Math.max(0, t - 0.01));
  const [x2, y2] = bezier(Math.min(1, t + 0.01));
  return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
}

const leaves = Array.from({ length: 13 }, (_, i) => {
  const t = 0.1 + i * 0.068;
  const side = i % 2 === 0 ? -1 : 1;
  const len = 70 + ((i * 37) % 28) - i * 2;
  const [x, y] = bezier(t);
  return { x, y, angle: tangentAngle(t) + side * (38 + ((i * 13) % 14)), len, w: len * 0.2, t };
});

const olives = [
  { t: 0.36, dx: 14, dy: 22 },
  { t: 0.5, dx: -10, dy: -24 },
  { t: 0.64, dx: 12, dy: 20 },
].map(({ t, dx, dy }) => {
  const [x, y] = bezier(t);
  return { cx: x + dx, cy: y + dy, t };
});

function Leaf({ x, y, angle, len, w, t, progress }: (typeof leaves)[number] & { progress: MotionValue<number> }) {
  const pathLength = useTransform(progress, [t * 0.8, t * 0.8 + 0.18], [0, 1]);
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <motion.path
        d={`M0 0 Q ${len / 2} ${-w} ${len} 0 Q ${len / 2} ${w} 0 0`}
        style={{ pathLength }}
      />
      <motion.path d={`M4 0 L ${len * 0.82} 0`} style={{ pathLength }} strokeOpacity={0.5} />
    </g>
  );
}

function Olive({ cx, cy, t, progress }: (typeof olives)[number] & { progress: MotionValue<number> }) {
  const pathLength = useTransform(progress, [t, t + 0.15], [0, 1]);
  return <motion.ellipse cx={cx} cy={cy} rx={7} ry={10} style={{ pathLength }} />;
}

/** Fine-line olive branch that draws itself as `progress` goes 0 → 1. */
export function OliveBranch({ progress, className }: { progress: MotionValue<number>; className?: string }) {
  const stem = useTransform(progress, [0, 0.9], [0, 1]);
  return (
    <svg
      viewBox="0 0 800 320"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <motion.path
        d={`M${P0} C${P1} ${P2} ${P3}`}
        style={{ pathLength: stem }}
      />
      {leaves.map((leaf, i) => (
        <Leaf key={i} {...leaf} progress={progress} />
      ))}
      {olives.map((o, i) => (
        <Olive key={i} {...o} progress={progress} />
      ))}
    </svg>
  );
}
