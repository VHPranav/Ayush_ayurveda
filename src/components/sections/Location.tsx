"use client";

import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { useState } from "react";
import { coverSizes, photos, type Photo } from "@/lib/images";
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
  "border border-white/20 bg-white/[0.08] shadow-[0_10px_40px_-12px_rgba(20,30,22,0.6)] backdrop-blur-xl backdrop-saturate-150";

export function Location() {
  const [active, setActive] = useState(0);

  return (
    <section id="montenegro" className="relative overflow-hidden bg-ivory py-24 text-adriatic md:py-32">
      <div className="container-page relative grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5 lg:self-center">
          <h2 className="heading-display">
            From the sea
            <span className="block">to the summits</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
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
              className={`group relative block h-full w-full overflow-hidden rounded-3xl text-left text-ivory ring-1 transition-[box-shadow] duration-700 ${
                active === i ? "ring-olive/60" : "ring-stone/50"
              }`}
            >
              <ParallaxFill
                src={r.photo.src}
                alt={r.photo.alt}
                quality={75}
                sizes={coverSizes(r.photo, spans[i] === "md:col-span-5" ? 0.9 : 1.3, [["(min-width: 1024px)", 35], ["(min-width: 768px)", 60], [null, 100]])}
                className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />

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
