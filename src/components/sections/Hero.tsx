"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HeroVideo } from "../ui/HeroVideo";
import { Button } from "../ui/Button";

const lines = ["Where Eastern Wisdom", "Meets Montenegro’s", "Healing Nature"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-adriatic-deep text-ivory">
      {/* Landscape: slow cinematic reveal, then light parallax on scroll */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <div className="hero-reveal absolute inset-0">
          <HeroVideo />
        </div>
      </motion.div>

      {/* Morning light drifting across the bay */}
      <div
        aria-hidden
        className="animate-sunlight pointer-events-none absolute -top-1/4 right-[-10%] h-[90%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(255,236,200,0.35),transparent)] mix-blend-soft-light"
      />
      {/* Soft shimmer on the water */}
      <div
        aria-hidden
        className="animate-shimmer pointer-events-none absolute inset-x-0 bottom-[18%] h-[22%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18)_30%,transparent_55%,rgba(255,255,255,0.14)_75%,transparent)] mix-blend-overlay blur-md"
      />

      {/* Legibility veils */}
      <div className="absolute inset-0 bg-gradient-to-r from-adriatic-deep/85 via-adriatic-deep/45 to-adriatic-deep/5" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-adriatic-deep/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-adriatic-deep/70 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-page relative flex h-full flex-col justify-end pb-12 sm:pb-16 lg:pb-20"
      >
        <div className="max-w-4xl">
          <p className="eyebrow fade-in flex items-center gap-4 text-ivory/85" style={{ animationDelay: "0.9s" }}>
            <span className="h-px w-5 bg-gold" />
            Ayurveda · Yoga · Wellness · Montenegro
          </p>

          <h1 className="mt-6 heading-display">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span className="rise-line block" style={{ animationDelay: `${0.5 + i * 0.14}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="fade-rise mt-7 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg"
            style={{ animationDelay: "1.1s" }}
          >
            Personalised Ayurveda, yoga and integrative wellness in Montenegro — shaped by the Adriatic Sea, the
            mountains, a mild climate and the Mediterranean way of life.
          </p>

          <div className="fade-rise mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: "1.35s" }}>
            <Button href="#ayush" variant="solid" >
              Therapeutic Programmes
            </Button>
            <Button href="#vivum" variant="outline-light" >
              Wellness Journeys
            </Button>
          </div>
        </div>
      </motion.div>

      <p
        className="fade-in absolute right-10 bottom-36 hidden text-right font-display text-2xl leading-snug text-ivory/90 italic lg:block"
        style={{ animationDelay: "2s" }}
      >
        A different place.
        <br />A deeper you.
        <span className="mt-3 ml-auto block h-px w-12 bg-gold" />
      </p>
    </section>
  );
}
