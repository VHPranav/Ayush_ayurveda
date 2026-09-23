"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Photo } from "@/lib/images";

/** Image that drifts slightly inside its frame while scrolling. */
export function ParallaxImage({
  photo,
  sizes,
  className = "",
  imageClassName = "",
  strength = 8,
}: {
  photo: Photo;
  sizes: string;
  className?: string;
  imageClassName?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        <Image src={photo.src} alt={photo.alt} fill quality={70} sizes={sizes} className={`object-cover ${imageClassName}`} />
      </motion.div>
    </div>
  );
}
