"use client";

import { ParallaxFill } from "@/components/ui/ParallaxFill";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TIERS, euro, fromPrice, programmes, type Tier } from "@/lib/programmes";
import { Arrow } from "../ui/Button";

/**
 * The "progression of care": five steps rising from 5 to 28 days.
 * Choosing a step filters the programme list below it.
 */
export function ProgrammeExplorer() {
  const [tier, setTier] = useState<Tier | "All">("All");

  const visible = programmes.filter(
    (p) => tier === "All" || p.levels.some((l) => l.tier === tier) || (p.fromPricing && (tier === "Reset" || tier === "Transform" || tier === "Renew")),
  );

  return (
    <div>
      {/* Staircase */}
      <div role="tablist" aria-label="Programme length" className="grid grid-cols-5 items-end gap-2 sm:gap-3">
        {TIERS.map((t, i) => {
          const active = tier === t.tier;
          return (
            <button
              key={t.tier}
              role="tab"
              aria-selected={active}
              onClick={() => setTier(active ? "All" : t.tier)}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-t-2xl px-1.5 py-3 text-left sm:p-5 transition-colors duration-500 ${
                active ? "bg-adriatic text-ivory" : "bg-adriatic/[0.07] text-adriatic hover:bg-adriatic/15"
              }`}
              style={{ height: `${8 + i * 3.4}rem` }}
            >
              <span className="text-center font-display text-3xl leading-none font-light sm:text-left sm:text-5xl">
                {t.days}
                <span className="ml-1 hidden text-base sm:inline">days</span>
              </span>
              <span className="mt-3">
                <span className="eyebrow block text-center text-[0.46rem] tracking-[0.06em] sm:text-left sm:text-[0.6rem] sm:tracking-[0.32em]">
                  {t.tier}
                </span>
                <span className={`mt-2 hidden text-[0.85rem] leading-snug md:block ${active ? "text-ivory/75" : "text-muted"}`}>
                  {t.summary}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="h-px bg-adriatic/30" />
      <p className="mt-4 text-[0.85rem] text-muted">
        {tier === "All" ? "Select a length to filter the programmes." : `Showing programmes available as ${tier} (${TIERS.find((t) => t.tier === tier)?.days} days).`}{" "}
        {tier !== "All" && (
          <button onClick={() => setTier("All")} className="underline underline-offset-4">
            Show all
          </button>
        )}
      </p>

      {/* Programme list */}
      <motion.ul layout className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/programmes/${p.slug}`} className="group block">
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                  <ParallaxFill
                    src={p.photo.src}
                    alt={p.photo.alt}
                    quality={70}
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
                    {(p.levels.length ? p.levels.map((l) => `${l.days} days`) : ["7 · 14 · 21 days"]).map((d) => (
                      <span key={d} className="eyebrow rounded-full bg-ivory/90 px-2.5 py-1 text-[0.55rem] text-adriatic backdrop-blur">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-adriatic">{p.name}</h3>
                    <p className="mt-1 text-muted">{p.tagline}</p>
                  </div>
                  <Arrow className="mt-3 shrink-0 text-adriatic" />
                </div>
                <p className="eyebrow mt-4 text-[0.6rem] text-olive">From {euro(fromPrice(p))} · opening offer</p>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
