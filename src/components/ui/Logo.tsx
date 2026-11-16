"use client";

import Image from "next/image";
import { motion } from "motion/react";

// The client's AYUSH logo (Ayurveda & Yoga Therapy Centre).
// `dark`  = full-colour artwork, for light backgrounds.
// `light` = ivory reversed artwork, for dark backgrounds (hero video, footer, mobile menu).
const artwork = {
  dark: "/brand/ayush-logo.png",
  light: "/brand/ayush-logo-light.png",
} as const;

export function Logo({
  tone = "light",
  animated = true,
  className = "h-[52px] md:h-[60px]",
}: {
  tone?: "light" | "dark";
  animated?: boolean;
  className?: string;
}) {
  return (
    <motion.span
      className={`relative block aspect-[460/354] ${className}`}
      initial={animated ? { opacity: 0, y: 4 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: animated ? 0.6 : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Both variants are rendered and cross-faded so the header can switch without a flash */}
      {(["dark", "light"] as const).map((t) => (
        <Image
          key={t}
          src={artwork[t]}
          alt={t === tone ? "AYUSH — Ayurveda & Yoga Therapy Centre" : ""}
          fill
          preload={t === tone}
          sizes="160px"
          className={`object-contain transition-opacity duration-500 ${t === tone ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </motion.span>
  );
}
