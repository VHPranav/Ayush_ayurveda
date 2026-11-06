"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { priceTables, problems } from "@/lib/vivumGroup";

const ease = [0.22, 1, 0.36, 1] as const;

/** "If your problem is… choose…" — each problem swaps the photograph on the right. */
export function ProblemMatcher() {
  const [i, setI] = useState(0);
  const p = problems[i];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <ol className="lg:col-span-6">
        {problems.map((x, k) => {
          const active = k === i;
          return (
            <li key={x.problem}>
              <button
                type="button"
                onClick={() => setI(k)}
                onMouseEnter={() => setI(k)}
                onFocus={() => setI(k)}
                aria-pressed={active}
                className={`grid w-full grid-cols-[2.5rem_1fr] items-baseline gap-3 border-b py-4 text-left transition-colors duration-500 ${
                  active ? "border-adriatic text-adriatic" : "border-stone/60 text-muted hover:text-adriatic"
                }`}
              >
                <span className={`font-display text-lg transition-colors ${active ? "text-sea" : "text-stone"}`}>
                  {String(k + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.02rem] leading-snug">{x.problem}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Photo panel — crossfades per problem, with the answer on frosted glass */}
      <div className="lg:col-span-6">
        <div className="lg:sticky lg:top-28">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-adriatic-deep">
            {problems.map((x, k) => (
              <div
                key={x.image}
                className={`absolute inset-0 transition-[opacity,transform] duration-[900ms] ease-[var(--ease-calm)] ${
                  k === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              >
                <Image src={x.image} alt="" fill quality={75} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/80 via-adriatic-deep/10 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/20 bg-white/10 p-6 text-ivory backdrop-blur-xl md:inset-x-6 md:bottom-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4, ease }}>
                  <p className="eyebrow text-[0.56rem] text-ivory/70">If your problem is</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ivory/85">“{p.problem}”</p>
                  <p className="eyebrow mt-6 text-[0.56rem] text-sage">Choose</p>
                  <p className="mt-2 font-display text-3xl leading-tight font-light md:text-4xl">{p.choose}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Tabbed indicative price list. */
export function PriceTabs() {
  const [id, setId] = useState(priceTables[0].id);
  const t = priceTables.find((x) => x.id === id)!;

  return (
    <div>
      <div role="tablist" aria-label="Price list" className="flex flex-wrap gap-2">
        {priceTables.map((x) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={x.id === id}
            onClick={() => setId(x.id)}
            className={`rounded-full px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-500 ${
              x.id === id ? "bg-adriatic text-ivory" : "border border-stone text-adriatic hover:border-adriatic"
            }`}
          >
            {x.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }} className="mt-8">
          <p className="text-muted">{t.note}</p>
          <div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-stone/70 bg-ivory">
            <table className="w-full min-w-[36rem] text-left">
              <thead>
                <tr className="border-b border-stone/70">
                  <th className="eyebrow px-6 py-4 text-[0.58rem] font-normal text-stone-deep">Service</th>
                  <th className="eyebrow px-6 py-4 text-[0.58rem] font-normal text-stone-deep">Duration</th>
                  {t.cols.filter(Boolean).map((c) => (
                    <th key={c} className="eyebrow px-6 py-4 text-right text-[0.58rem] font-normal text-sea">
                      {c} (€)
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((r) => (
                  <tr key={r.name} className="border-b border-stone/40 last:border-0">
                    <td className="px-6 py-4 font-display text-xl text-adriatic">{r.name}</td>
                    <td className="px-6 py-4 text-[0.92rem] text-muted">{r.duration}</td>
                    <td className="px-6 py-4 text-right text-ink/85 tabular-nums">{r.a}</td>
                    {r.b && <td className="px-6 py-4 text-right text-ink/85 tabular-nums">{r.b}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {t.footnote && <p className="mt-5 text-[0.88rem] text-muted">{t.footnote}</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
