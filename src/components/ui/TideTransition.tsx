"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

type Props = {
  /** 0 = sea below the screen, 1 = screen fully covered. */
  progress: MotionValue<number>;
  /** Fill colour of the rising water — the background of what comes next (a CSS colour/var). */
  color: string;
  /** Colour of the fainter wave running just ahead of it. */
  foam: string;
};

const WAVE_H = 140;

// One wave repeated twice (2880 wide) so it can drift sideways in a seamless loop.
const wavePath = (amp: number) =>
  `M0 ${70} C 240 ${70 - amp}, 480 ${70 + amp}, 720 70 S 1200 ${70 - amp}, 1440 70 ` +
  `S 1920 ${70 - amp}, 2160 70 S 2640 ${70 - amp}, 2880 70 L2880 ${WAVE_H} L0 ${WAVE_H} Z`;

/**
 * Tide overlay that fills its (positioned) parent: the colour of the next section
 * rises from the bottom like the sea coming in, with a softly drifting wave edge.
 */
export function TideTransition({ progress, color, foam }: Props) {
  // Translate by the layer's own height: 100% = just below the screen, 0% = covering it.
  const y = useTransform(progress, [0, 1], ["100%", "0%"]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ y, top: -WAVE_H }} className="absolute inset-x-0 bottom-0 will-change-transform">
        {/* Fainter wave running just ahead */}
        <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: WAVE_H }}>
          <svg
            viewBox={`0 0 2880 ${WAVE_H}`}
            preserveAspectRatio="none"
            className="animate-tide-slow absolute top-0 left-0 h-full w-[200%]"
          >
            <path d={wavePath(34)} fill={foam} />
          </svg>
        </div>
        {/* Main wave */}
        <div className="absolute inset-x-0 overflow-hidden" style={{ top: 26, height: WAVE_H }}>
          <svg
            viewBox={`0 0 2880 ${WAVE_H}`}
            preserveAspectRatio="none"
            className="animate-tide absolute top-0 left-0 h-full w-[200%]"
          >
            <path d={wavePath(26)} fill={color} />
          </svg>
        </div>
        {/* Body of water */}
        <div className="absolute inset-x-0 bottom-0" style={{ top: WAVE_H + 24, background: color }} />
      </motion.div>
    </div>
  );
}
