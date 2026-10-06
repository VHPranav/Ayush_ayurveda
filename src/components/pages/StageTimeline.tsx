"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Source: "The 5-Stage Blueprint of the Client Journey" — Integrated Clinical Wellness deck.
const stages = [
  {
    name: "Consultation & Assessment",
    steps: [
      { n: 1, title: "Clinical consultation", body: "Traditional diagnosis — Darshana (observation), Sparshana (physical examination) and Prasna (questioning) — alongside a review of your health history and current medications." },
      { n: 2, title: "Identifying the goal", body: "Distinct objectives rather than generic packages: sleep and restoration, mobility, metabolic wellbeing or supervised Panchakarma." },
      { n: 3, title: "The personalised plan", body: "Prakriti (constitution), Vikriti (imbalance) and tolerance combine into a bespoke plan of Ayurveda, Yoga, nutrition and internal medicines." },
    ],
  },
  {
    name: "Poorvakarma — Preparation",
    steps: [
      { n: 4, title: "Structured preparation", body: "For suitable clients, internal or external oleation and therapeutic warming are prescribed under daily clinical observation." },
      { n: 5, title: "Snehanam", body: "Selected oils applied through traditional massage for warmth, relaxation and physical preparation." },
      { n: 6, title: "Swedanam", body: "Therapeutic warming, including steam and Pinda Swedam, tailored to the individual and their treatment stage." },
    ],
  },
  {
    name: "Pradhanakarma — The core therapy",
    steps: [
      { n: 7, title: "Shodhana", body: "Where suitable, physician-selected Panchakarma procedures (Vamana, Virechana, Vasti, Nasya) — only after clinical evaluation, never as spa add-ons." },
      { n: 8, title: "Varma therapy", body: "Traditional South Indian manual techniques on selected points for mobility and body awareness." },
      { n: 9, title: "Supporting therapies", body: "Physician-prescribed local treatments such as Murdha Tailam, Netra Kalpana and local Vasti." },
    ],
  },
  {
    name: "Paschatkarma — Recovery",
    steps: [
      { n: 10, title: "Rejuvenation therapies", body: "Gentler treatments such as Pizhichil and Dhara to support the transition back to normal routine." },
      { n: 11, title: "Yoga & mindfulness", body: "Hatha-based Yoga, Pranayama and Yoga Nidra to anchor recovery." },
      { n: 12, title: "Applied nutrition", body: "Practical dietary and lifestyle plans adapted to your actual home routine." },
      { n: 13, title: "Internal medicines", body: "Individually prescribed traditional preparations — Kashayam, Arishta, Lehyam — compliant with EU and Montenegrin regulations." },
    ],
  },
  {
    name: "Continuity of Care",
    steps: [
      { n: 14, title: "The final review", body: "Your practitioner evaluates your response and turns the experience into a sustainable wellbeing plan." },
      { n: 15, title: "The home blueprint", body: "Morning routines and Yoga, nutrition and hydration, evening sleep practices — and a structured 30-day check-in." },
    ],
  },
];

export function StageTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12">
      {/* Sticky stage index */}
      <div className="hidden lg:col-span-4 lg:block">
        <div className="sticky top-32">
          <p className="font-display text-[9rem] leading-none font-light text-sage/70">0{active + 1}</p>
          <ol className="mt-6 space-y-3">
            {stages.map((s, i) => (
              <li key={s.name} className="flex items-center gap-4">
                <span className={`h-px transition-all duration-700 ${i === active ? "w-12 bg-gold" : "w-5 bg-ivory/30"}`} />
                <span className={`eyebrow text-[0.62rem] transition-colors duration-500 ${i === active ? "text-ivory" : "text-ivory/40"}`}>
                  Stage {i + 1} · {s.name.split(" — ")[0]}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Stages */}
      <div className="lg:col-span-8">
        {stages.map((s, i) => (
          <motion.div
            key={s.name}
            onViewportEnter={() => setActive(i)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
            className="border-t border-ivory/15 py-14 first:border-t-0 first:pt-0"
          >
            <p className="eyebrow text-[0.62rem] text-gold">Stage {i + 1}</p>
            <h3 className="mt-3 font-display text-4xl font-light md:text-5xl">{s.name}</h3>
            <ol className="mt-10 grid gap-8 md:grid-cols-2">
              {s.steps.map((st) => (
                <li key={st.n} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/25 font-display text-lg text-sage">
                    {st.n}
                  </span>
                  <div>
                    <p className="font-display text-2xl">{st.title}</p>
                    <p className="mt-2 leading-relaxed text-ivory/70">{st.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
