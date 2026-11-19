"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { photos } from "@/lib/images";
import { Arrow } from "../ui/Button";

const title = ["Ayush", "Montenegro"];

const pill =
  "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 font-label text-[0.65rem] font-semibold tracking-[0.14em] uppercase md:px-8 md:py-4 transition-[background-color,border-color,color] duration-500 ease-[var(--ease-calm)]";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#070b0c] text-ivory">
      {/* Montenegro coast still — slow cinematic reveal, light parallax on scroll */}
      <motion.div className="absolute inset-0" style={{ y: videoY }}>
        <div className="hero-reveal absolute inset-0">
          <Image src={photos.stoneTerrace.src} alt={photos.stoneTerrace.alt} fill preload quality={80} sizes="100vw" className="object-cover object-center" />
        </div>
      </motion.div>

      {/* Neutral veils keep the footage's natural colour while holding the type */}
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6)_0%,transparent_45%)]" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,#070b0c_0%,rgba(7,11,12,0.55)_28%,transparent_58%)]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex h-full w-full flex-col justify-end px-5 md:px-10 xl:px-16 pb-14 sm:pb-16 lg:pb-20"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <h1 className="font-hero text-[2.75rem] leading-[0.95] tracking-[0.01em] text-white min-[400px]:text-[3rem] sm:text-6xl md:text-[4.5rem] md:leading-[0.92] lg:text-[7vw]">
              {title.map((line, i) => (
                <span key={line} className="-mb-[0.14em] block overflow-hidden pb-[0.2em]">
                  <span className="rise-line block" style={{ animationDelay: `${0.45 + i * 0.16}s` }}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="fade-rise mt-5 max-w-md font-display text-xl leading-snug tracking-[0.02em] text-ivory/90 italic md:mt-7 md:text-2xl 2xl:max-w-xl 2xl:text-3xl"
              style={{ animationDelay: "1.15s" }}
            >
              Ayurveda Clinic — traditional Ayurvedic medicine and personalised clinical care in Montenegro.
            </p>
          </div>

          <div className="fade-rise lg:shrink-0 lg:pb-2" style={{ animationDelay: "1.35s" }}>
            <Link href="/programmes" className={`${pill} bg-stone text-forest-deep hover:bg-ivory`}>
              Explore Programmes
              <Arrow />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="fade-in absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        style={{ animationDelay: "2.2s" }}
      >
        <span className="font-label text-[0.6rem] tracking-[0.4em] text-ivory/60 uppercase">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="animate-scroll-cue absolute inset-0 bg-white/70" />
        </span>
      </div>
    </section>
  );
}
