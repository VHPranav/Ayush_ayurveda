"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { photos } from "@/lib/images";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/** Closing banner: a soft, rosy dusk light gathers as it scrolls into view. */
export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const sunset = useTransform(scrollYProgress, [0.1, 1], [0, 0.6]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-10%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section ref={ref} id="book" className="relative flex min-h-[92svh] items-end overflow-hidden bg-adriatic-deep text-ivory">
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image src={photos.budvaCoast.src} alt={photos.budvaCoast.alt} fill quality={70} sizes="100vw" className="object-cover" />
      </motion.div>

      {/* Soft dusk light */}
      <motion.div
        style={{ opacity: sunset }}
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(226,196,204,0.45)_0%,rgba(196,178,200,0.25)_40%,transparent_75%)] mix-blend-soft-light"
      />
      <motion.div
        style={{ opacity: sunset, y: glowY }}
        className="pointer-events-none absolute top-0 left-1/2 h-[70%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,236,226,0.4),transparent)] mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/85 via-adriatic-deep/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-adriatic-deep/60 via-adriatic-deep/20 to-transparent" />

      <div className="container-page relative grid gap-10 pt-40 pb-20 md:grid-cols-12 md:pb-28">
        <Reveal className="md:col-span-7">
          <p className="eyebrow flex items-center gap-4 text-ivory/80">
            <span className="h-px w-10 bg-gold" />
            Begin Your Journey
          </p>
          <h2 className="mt-6 heading-display">
            Healthier People.
            <span className="block">A Brighter Tomorrow.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/85 md:text-lg">
            Personalised care, meaningful experiences and the healing nature of Montenegro. Your journey begins with a
            conversation.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#book" variant="solid">
              Book a Consultation
            </Button>
            <Button href="#contact" variant="outline-light">
              Speak With Our Team
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.3} className="hidden self-end text-right md:col-span-4 md:col-start-9 md:block">
          <p className="font-display text-3xl leading-snug text-ivory/90 italic">
            Montenegro
            <br />
            restores balance
          </p>
          <span className="mt-4 ml-auto block h-px w-12 bg-gold" />
        </Reveal>
      </div>
    </section>
  );
}
