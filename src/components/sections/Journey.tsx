"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { photos, type Photo } from "@/lib/images";
import { Reveal } from "../ui/Reveal";

const steps: { phase: string; title: string; body: string; photo: Photo }[] = [
  {
    phase: "Consultation",
    title: "A conversation first",
    body: "An unhurried first meeting with an experienced practitioner about your health, history, lifestyle and goals.",
    photo: photos.nadiPariksha,
  },
  {
    phase: "Assessment",
    title: "Understanding your balance",
    body: "An Ayurvedic assessment of your constitution and current state, considered alongside your medical history.",
    photo: photos.herbalOil,
  },
  {
    phase: "Programme",
    title: "Designed around you",
    body: "A personalised programme combining therapy, yoga, nutrition and time in Montenegro’s nature.",
    photo: photos.yogaTherapy,
  },
  {
    phase: "Treatment",
    title: "Care in calm surroundings",
    body: "Treatments delivered by qualified therapists in natural, restful spaces — at our centre or partner locations.",
    photo: photos.pindaSweda,
  },
  {
    phase: "Follow-up",
    title: "Wellbeing that lasts",
    body: "Ongoing guidance and reviews to help you carry the benefits home and sustain them over time.",
    photo: photos.ayurvedicLunch,
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function Heading() {
  return (
    <>
      <h2 className="font-hero text-[2.6rem] leading-[1.04] text-ivory sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
        Your personalised
        <span className="block font-display font-light text-sage italic">journey</span>
      </h2>
      <p className="mt-6 max-w-sm leading-relaxed text-ivory/70">
        From the first consultation to lasting wellbeing — a clear, professionally supervised path, shaped around you.
      </p>
    </>
  );
}

function Step({ index, active }: { index: number; active: boolean }) {
  const step = steps[index];
  return (
    <li
      className={`border-t border-ivory/15 py-12 transition-opacity duration-700 ease-[var(--ease-calm)] lg:flex lg:min-h-[62vh] lg:flex-col lg:justify-center lg:py-16 ${
        active ? "lg:opacity-100" : "lg:opacity-35"
      }`}
    >
      {/* Phones: each step carries its own photograph */}
      <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-sm lg:hidden">
        <Image src={step.photo.src} alt={step.photo.alt} fill quality={75} sizes="100vw" className="object-cover" />
      </div>

      <div className="flex items-baseline gap-6 md:gap-10">
        <span className="font-hero text-5xl leading-none text-gold md:text-7xl">{pad(index + 1)}</span>
        <div>
          <h3 className="font-hero text-4xl leading-tight text-ivory md:text-5xl">{step.phase}</h3>
          <p className="mt-2 font-display text-xl text-sage italic md:text-2xl">{step.title}</p>
          <p className="mt-5 max-w-md leading-relaxed text-ivory/70">{step.body}</p>
        </div>
      </div>
    </li>
  );
}

export function Journey() {
  const [active, setActive] = useState(0);
  // The step crossing the middle of the screen is the active one — derived from scroll
  // position so a fast scroll can never skip a step.
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start center", "end center"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  return (
    <section id="journey" className="relative bg-forest-deep text-ivory">
      <div className="container-page grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:gap-10 lg:py-0">
        {/* Left — stays in view while the steps scroll past (desktop) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-24">
            <Reveal>
              <Heading />
            </Reveal>

            <div className="relative mt-12 hidden aspect-[4/5] max-h-[46vh] overflow-hidden rounded-t-full lg:block">
              {steps.map((s, i) => (
                <Image
                  key={s.phase}
                  src={s.photo.src}
                  alt={i === active ? s.photo.alt : ""}
                  fill
                  quality={75}
                  sizes="35vw"
                  className={`object-cover transition-[opacity,transform] duration-[1200ms] ease-[var(--ease-calm)] ${
                    i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-deep/70 to-transparent" />
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-label text-[0.68rem] font-medium tracking-[0.3em] text-ivory/90">
                {pad(active + 1)} / {pad(steps.length)}
              </p>
            </div>
          </div>
        </div>

        {/* Right — the five steps */}
        <ol ref={list} className="lg:col-span-6 lg:col-start-7 lg:my-[19vh]">
          {steps.map((s, i) => (
            <Step key={s.phase} index={i} active={i === active} />
          ))}
        </ol>
      </div>
    </section>
  );
}
