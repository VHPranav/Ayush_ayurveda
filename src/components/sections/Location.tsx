"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { photos, type Photo } from "@/lib/images";
import { Reveal } from "../ui/Reveal";

const regions: { name: string; label: string; body: string; photo: Photo }[] = [
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

export function Location() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} id="montenegro" className="relative min-h-[100svh] overflow-hidden bg-adriatic-deep text-ivory">
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0">
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.05 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={r.photo.src} alt={i === active ? r.photo.alt : ""} fill quality={70} sizes="100vw" className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-adriatic-deep/95 via-adriatic-deep/65 to-adriatic-deep/10" />

      <div className="container-page relative grid min-h-[100svh] items-center gap-12 py-24 md:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-ivory/70">
              <span className="h-px w-10 bg-gold" />
              Location &amp; Experience
            </p>
            <h2 className="mt-6 heading-display">
              From the sea
              <span className="block">to the summits</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ivory/75">
              Our programmes take place across Montenegro — on the coast, by the lakes and in the mountains — so that
              the landscape itself becomes part of your care.
            </p>
          </Reveal>

          <ul className="mt-12 border-t border-ivory/20">
            {regions.map((r, i) => {
              const isActive = i === active;
              return (
                <li key={r.name} className="border-b border-ivory/20">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="flex w-full items-baseline gap-5 py-5 text-left"
                  >
                    <span className={`font-display text-sm italic transition-colors duration-500 ${isActive ? "text-gold" : "text-ivory/40"}`}>
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-display text-2xl transition-colors duration-500 md:text-3xl ${
                          isActive ? "text-ivory" : "text-ivory/55"
                        }`}
                      >
                        {r.name}
                      </span>
                      <span className="eyebrow mt-1.5 block text-[0.56rem] text-ivory/45">{r.label}</span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            className="block overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <span className="block pt-3 text-[0.95rem] leading-relaxed text-ivory/75">{r.body}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
