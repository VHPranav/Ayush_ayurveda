"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Programme names and durations from the AYUSH International plan (§5).
// Descriptions are deliberately non-claim wording — to be reviewed against UK/EU advertising rules before publishing.
const conditions = [
  {
    name: "Neurological Wellbeing",
    days: [14, 21, 28],
    who: "Adults living with longer-term neurological concerns who want structured, supportive Ayurvedic care alongside their medical treatment.",
    includes: ["Vaidya assessment including current medications", "Daily traditional therapies such as Abhyanga and Pizhichil", "Varma therapy for mobility and body awareness", "Gentle therapeutic Yoga and Pranayama", "Coordination with your treating clinicians"],
  },
  {
    name: "Musculoskeletal Recovery",
    days: [7, 14, 21],
    who: "People with joint, back or muscular discomfort, or recovering after injury, who want a structured restorative programme.",
    includes: ["Assessment of mobility and daily function", "Local Vasti (Kati, Janu, Greeva) and warming therapies", "Varma therapy", "Therapeutic Yoga adapted to your ability", "Physiotherapy where appropriate"],
  },
  {
    name: "Stress & Sleep",
    days: [7, 14],
    who: "Anyone experiencing prolonged stress, tension or disturbed sleep who wants time away to rest and reset routines.",
    includes: ["Shirodhara and Abhyanga", "Yoga Nidra, Pranayama and meditation", "Sleep and evening-routine guidance", "Nutrition to support calm and energy", "A practical home plan"],
  },
  {
    name: "Metabolic & Lifestyle",
    days: [14, 21],
    who: "Adults who want to change long-standing patterns of diet, activity and weight with structured support.",
    includes: ["Constitutional and lifestyle assessment", "Udwarthana and Swedana", "4–6 Yoga and activity sessions weekly", "A personalised nutrition plan", "30-day progress review"],
  },
  {
    name: "Respiratory Wellbeing",
    days: [14],
    who: "People who want to support breathing comfort and capacity through traditional therapies and breath practice.",
    includes: ["Assessment and review of current treatment", "Nasya and supporting therapies where suitable", "Pranayama and breath training", "Clean mountain air", "Home breathing routine"],
  },
  {
    name: "Women’s Wellbeing",
    days: [7, 14],
    who: "Women seeking individual Ayurvedic support for wellbeing through different stages of life.",
    includes: ["Individual consultation", "Restorative traditional therapies", "Yoga and Pranayama", "Nutrition and lifestyle guidance", "Follow-up care"],
  },
  {
    name: "Rejuvenation & Rasayana",
    days: [14, 21, 28],
    who: "Those looking for a deep restorative programme focused on vitality and healthy ageing.",
    includes: ["Rasayana therapies", "Pizhichil, Abhyanga and Varma", "Mind–body integration", "Healthy-ageing nutrition", "Long-term continuity plan"],
  },
];

export function ConditionList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ol className="border-t border-stone/70">
      {conditions.map((c, i) => {
        const isOpen = open === i;
        return (
          <li key={c.name} className="border-b border-stone/70">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-8 text-left md:grid-cols-[6rem_1fr_auto]"
            >
              <span className={`font-display text-3xl transition-colors md:text-5xl ${isOpen ? "text-gold" : "text-stone"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-display text-3xl font-light text-adriatic md:text-5xl">{c.name}</span>
                <span className="eyebrow mt-2 block text-[0.6rem] text-olive">{c.days.join(" / ")} days</span>
              </span>
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-500 ${
                  isOpen ? "border-adriatic bg-adriatic text-ivory" : "border-stone text-adriatic group-hover:border-adriatic"
                }`}
              >
                <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.2}>
                  <path d="M10 3v14M3 10h14" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-10 pb-12 md:grid-cols-[6rem_1fr_1fr] md:gap-8">
                    <span />
                    <div>
                      <p className="eyebrow text-[0.6rem] text-stone-deep">Who it is for</p>
                      <p className="mt-3 leading-relaxed text-ink/85 md:text-lg">{c.who}</p>
                      <p className="eyebrow mt-8 text-[0.6rem] text-stone-deep">Before & after</p>
                      <p className="mt-3 leading-relaxed text-muted">
                        A pre-arrival online consultation prepares you; a final review and 30-day follow-up
                        continue your care at home.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-sand p-7">
                      <p className="eyebrow text-[0.6rem] text-olive">May include</p>
                      <ul className="mt-4 space-y-2.5">
                        {c.includes.map((it) => (
                          <li key={it} className="flex gap-3 text-ink/85">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
