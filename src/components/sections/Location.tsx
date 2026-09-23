"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { photos, type Photo } from "@/lib/images";
import { Reveal } from "../ui/Reveal";

type Region = { name: string; label: string; body: string; photo: Photo };

const regions: Region[] = [
  {
    name: "The Bay of Kotor",
    label: "Stone towns & still water",
    body: "A UNESCO-listed bay of medieval stone towns, calm water and steep mountains — the heart of our coastal experience.",
    photo: photos.kotorRooftops,
  },
  {
    name: "The Adriatic Coast",
    label: "Sea, light & olive groves",
    body: "Historic islets, quiet coves and olive groves along a coastline warmed by the Mediterranean sun.",
    photo: photos.svetiStefanDusk,
  },
  {
    name: "Northern Mountains",
    label: "Lakes, forests & clean air",
    body: "Glacial lakes, ancient forests and high mountain air in the national parks of northern Montenegro.",
    photo: photos.mountainLake,
  },
  {
    name: "Rivers & Canyons",
    label: "Clear, flowing water",
    body: "Turquoise rivers such as the Tara run through deep canyons — a landscape of movement, freshness and renewal.",
    photo: photos.taraRiver,
  },
];

// Alternating widths, as in a classic bento: narrow + wide on top, wide + narrow below.
const spans = ["md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5"];

/** Frosted-glass surface for the tile captions. */
const glass =
  "border border-white/20 bg-white/[0.08] shadow-[0_10px_40px_-12px_rgba(16,38,52,0.55)] backdrop-blur-xl backdrop-saturate-150";

export function Location() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} id="montenegro" className="relative overflow-hidden bg-adriatic-deep py-24 text-ivory md:py-32">
      {/* Landscape behind the glass — follows the region being explored */}
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
        {regions.map((r, i) => (
          <div
            key={r.name}
            className={`absolute inset-0 transition-[opacity,transform] duration-[1400ms] ease-[var(--ease-calm)] ${
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <Image src={r.photo.src} alt="" fill quality={70} sizes="100vw" className="object-cover" />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-adriatic-deep/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-adriatic-deep/85 via-adriatic-deep/40 to-transparent" />

      <div className="container-page relative grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5 lg:self-center">
          <p className="eyebrow flex items-center gap-4 text-ivory/70">
            <span className="h-px w-10 bg-gold" />
            Location &amp; Experience
          </p>
          <h2 className="mt-6 heading-display">
            From the sea
            <span className="block">to the summits</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/75">
            Our programmes take place across Montenegro — on the coast, by the lakes and in the mountains — so that the
            landscape itself becomes part of your care.
          </p>
        </Reveal>

        {/* Bento grid of regions: narrow/wide, then wide/narrow */}
        <div className="grid gap-4 md:auto-rows-[20rem] md:grid-cols-12 lg:col-span-7 lg:auto-rows-[21rem] lg:gap-5">
        {regions.map((r, i) => (
          <Reveal key={r.name} delay={0.08 * (i + 1)} className={`min-h-[20rem] md:min-h-0 ${spans[i]}`}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              aria-label={`${r.name}: ${r.body}`}
              className={`group relative block h-full w-full overflow-hidden rounded-3xl text-left ring-1 transition-[box-shadow] duration-700 ${
                active === i ? "ring-white/50" : "ring-white/15"
              }`}
            >
              <Image
                src={r.photo.src}
                alt={r.photo.alt}
                fill
                quality={70}
                sizes="(min-width: 1024px) 35vw, (min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/55 via-transparent to-transparent" />

              {/* Glass caption — expands to show the description on hover/focus */}
              <div className={`${glass} absolute inset-x-3 bottom-3 rounded-2xl px-5 py-4 lg:inset-x-4 lg:bottom-4`}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-2xl leading-tight font-light lg:text-[1.7rem]">{r.name}</span>
                  <span className="font-display text-sm text-gold italic">0{i + 1}</span>
                </div>
                <span className="eyebrow mt-1 block text-[0.56rem] text-ivory/70">{r.label}</span>
                <span
                  className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[var(--ease-calm)] ${
                    active === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="block pt-3 text-[0.92rem] leading-relaxed text-ivory/85">{r.body}</span>
                  </span>
                </span>
              </div>
            </button>
          </Reveal>
        ))}

        </div>
      </div>
    </section>
  );
}
