"use client";

import { motion } from "motion/react";

const drawIn = (delay: number) => ({
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 1.6, delay, ease: [0.65, 0, 0.35, 1] as const },
});

// Simple line icons — leaf, meeting circles, mountain-and-wave, rising sun.
const icons: Record<string, (d: number) => React.ReactNode> = {
  care: (d) => (
    <>
      <motion.path d="M10 38C10 20 22 8 40 8c0 18-12 30-30 30Z" {...drawIn(d)} />
      <motion.path d="M10 38 30 18" {...drawIn(d + 0.3)} />
    </>
  ),
  integrated: (d) => (
    <>
      <motion.circle cx="18" cy="24" r="12" {...drawIn(d)} />
      <motion.circle cx="30" cy="24" r="12" {...drawIn(d + 0.2)} />
    </>
  ),
  location: (d) => (
    <>
      <motion.path d="M4 30 16 16l6 6 8-10 14 18" {...drawIn(d)} />
      <motion.path d="M4 36c5-3 9 3 14 0s9-3 14 0 9 3 12 0" {...drawIn(d + 0.3)} />
    </>
  ),
  lasting: (d) => (
    <>
      <motion.path d="M12 32a12 12 0 0 1 24 0" {...drawIn(d)} />
      <motion.path d="M4 36h40M24 8v6M10 14l4 4M38 14l-4 4" {...drawIn(d + 0.3)} />
    </>
  ),
};

const benefits = [
  {
    icon: "care",
    title: "Personalised Care",
    body: "Individual assessment and guidance from experienced practitioners, with time to listen.",
  },
  {
    icon: "integrated",
    title: "Integrated Approach",
    body: "Ayurveda and yoga combined with the Mediterranean lifestyle and modern medical awareness.",
  },
  {
    icon: "location",
    title: "Exceptional Location",
    body: "The sea, mountains and pristine nature of Montenegro as part of every programme.",
  },
  {
    icon: "lasting",
    title: "Lasting Wellbeing",
    body: "Follow-up and practical guidance for a healthier, more balanced life at home.",
  },
];

export function Benefits() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-page">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-stone-deep">Why AYUSH &amp; VIVUM</p>
          <h2 className="mx-auto mt-6 max-w-4xl heading-display text-adriatic">
            Care that is personal, <span className="text-olive">grounded in nature.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 lg:divide-x lg:divide-stone/60">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="px-4 text-center lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                viewBox="0 0 48 44"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="mx-auto h-12 w-12 text-olive"
              >
                {icons[b.icon](0.2 + i * 0.18)}
              </svg>
              <h3 className="eyebrow mt-6 text-[0.72rem] text-adriatic">{b.title}</h3>
              <p className="mx-auto mt-4 max-w-[16rem] leading-relaxed text-muted">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
