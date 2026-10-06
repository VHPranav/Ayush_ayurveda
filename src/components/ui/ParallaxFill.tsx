"use client";

import Image, { type ImageProps } from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Drop-in replacement for a `fill` <Image>: the photo drifts gently inside its
 * frame as the page scrolls (the same effect as the homepage). The parent must
 * be positioned and clip its overflow — as every image frame on the site does.
 */
export function ParallaxFill({ strength = 7, alt, ...props }: Omit<ImageProps, "fill"> & { strength?: number }) {
  const frame = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] });
  const amount = reduced ? 0 : strength;
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={frame} className="absolute inset-0 overflow-hidden">
      {/* Taller than the frame so the drift never reveals an edge */}
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[10%] will-change-transform">
        <Image alt={alt} fill {...props} />
      </motion.div>
    </div>
  );
}
