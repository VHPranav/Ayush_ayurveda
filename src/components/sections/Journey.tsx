"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { photos, type Photo } from "@/lib/images";
import { Reveal } from "../ui/Reveal";

const steps: { phase: string; title: string; body: string; photo: Photo }[] = [
  {
    phase: "Consultation",
    title: "A conversation first",
    body: "An unhurried first meeting with an experienced practitioner about your health, history, lifestyle and goals.",
    photo: photos.herbalTea,
  },
  {
    phase: "Assessment",
    title: "Understanding your balance",
    body: "An Ayurvedic assessment of your constitution and current state, considered alongside your medical history.",
    photo: photos.oliveBranch,
  },
  {
    phase: "Programme",
    title: "Designed around you",
    body: "A personalised programme combining therapy, yoga, nutrition and time in Montenegro’s nature.",
    photo: photos.ancientOlive,
  },
  {
    phase: "Treatment",
    title: "Care in calm surroundings",
    body: "Treatments delivered by qualified therapists in natural, restful spaces — at our centre or partner locations.",
    photo: photos.treatmentDetail,
  },
  {
    phase: "Follow-up",
    title: "Wellbeing that lasts",
    body: "Ongoing guidance and reviews to help you carry the benefits home and sustain them over time.",
    photo: photos.quietShore,
  },
];

function Intro({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow flex items-center gap-4 text-ivory/70">
        <span className="h-px w-10 bg-gold" />
        Step by Step
      </p>
      <h2 className="mt-6 heading-display">
        Your Personalised
        <span className="block text-sage">Journey</span>
      </h2>
      <p className="mt-6 max-w-sm leading-relaxed text-ivory/70">
        From the first consultation to lasting wellbeing — a clear, professionally supervised path, shaped around you.
      </p>
    </div>
  );
}

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  return (
    <article className="group relative w-full shrink-0 overflow-hidden rounded-sm bg-forest-deep md:w-[26rem]">
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-[4/5]">
        <Image
          src={step.photo.src}
          alt={step.photo.alt}
          fill
          quality={70}
          sizes="(min-width: 768px) 26rem, 100vw"
          className="object-cover opacity-85 transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <p className="eyebrow text-[0.6rem] text-gold">Phase 0{index + 1}</p>
        <h3 className="mt-3 font-display text-4xl font-light">{step.phase}</h3>
        <p className="mt-1 font-display text-lg text-ivory/75 italic">{step.title}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/75">{step.body}</p>
      </div>
    </article>
  );
}

function PhaseTick({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const start = i / steps.length;
  const opacity = useTransform(progress, [Math.max(0, start - 0.05), start + 0.05], [0.35, 1]);
  return (
    <motion.span style={{ opacity }} className="eyebrow text-[0.6rem]">
      0{i + 1} {steps[i].phase}
    </motion.span>
  );
}

/** Desktop: the section pins while the steps travel horizontally, like turning pages. */
function PinnedJourney() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => -v * distance);
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={section} className="relative h-[420vh] bg-forest text-ivory">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex items-center gap-8 pr-[8vw] pl-[max(4rem,calc((100vw-88rem)/2+4rem))] will-change-transform">
          <Intro className="w-[34rem] shrink-0 pr-8" />
          {steps.map((step, i) => (
            <StepCard key={step.phase} step={step} index={i} />
          ))}
        </motion.div>

        <div className="container-page mt-10">
          <div className="relative h-px bg-ivory/15">
            <motion.div style={{ width: fill }} className="absolute inset-y-0 left-0 bg-gold" />
          </div>
          <div className="mt-4 flex justify-between text-ivory/80">
            {steps.map((_, i) => (
              <PhaseTick key={i} i={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mobile and reduced motion: a simple vertical sequence. */
function StackedJourney({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-forest py-24 text-ivory ${className}`}>
      <div className="container-page">
        <Reveal>
          <Intro />
        </Reveal>
        <div className="mt-14 space-y-6">
          {steps.map((step, i) => (
            <Reveal key={step.phase} delay={0.05}>
              <StepCard step={step} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  const reduced = useReducedMotion();
  return (
    <div id="journey">
      {reduced ? (
        <StackedJourney />
      ) : (
        <>
          <div className="hidden md:block">
            <PinnedJourney />
          </div>
          <StackedJourney className="md:hidden" />
        </>
      )}
    </div>
  );
}
