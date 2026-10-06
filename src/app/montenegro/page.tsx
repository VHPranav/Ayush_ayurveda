import type { Metadata } from "next";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { photos } from "@/lib/images";
import { StageTimeline } from "@/components/pages/StageTimeline";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BookingBand, Eyebrow, Icon, SectionHead } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "AYUSH Montenegro",
  description:
    "Year-round residential Ayurveda and Yoga Therapy programmes at Hyatt Regency Kotor Bay — clinical governance, traditional knowledge and the healing landscape of Boka Kotorska.",
};

const pillars = [
  {
    name: "VRMAC",
    role: "Rehabilitation & medical governance",
    body: "Established healthcare infrastructure, a local clinical framework and continuity of care.",
  },
  {
    name: "Traditional knowledge",
    role: "The AYUSH foundation",
    body: "Specialist Ayurveda and Yoga Therapy — qualified practitioners, personalised programmes and rigorous quality standards.",
  },
  {
    name: "VIVUM",
    role: "Holistic wellness & hospitality",
    body: "Concept development, client experience and immersive integration within a premium resort.",
  },
];

const durations = [
  { days: 7, body: "Assessment and therapeutic introduction" },
  { days: 14, body: "Structured therapeutic and restorative programme" },
  { days: 21, body: "Extended Ayurveda and Panchakarma programme, where appropriate" },
  { days: 28, body: "Comprehensive therapeutic and lifestyle programme" },
];

const components = [
  "Ayurvedic consultation",
  "Individual treatment planning",
  "Traditional Ayurvedic therapies",
  "Panchakarma where appropriate",
  "Ayurvedic medicines where appropriate",
  "Yoga Therapy",
  "Pranayama and meditation",
  "Nutrition",
  "Lifestyle guidance",
  "Physiotherapy where appropriate",
  "Progress review",
  "Home-care programme",
];

// Illustrative only — every day is personalised by the Vaidya.
const day = [
  { time: "07:00", what: "Yoga & Pranayama", icon: "yoga" },
  { time: "08:30", what: "Breakfast to your nutrition plan", icon: "bowl" },
  { time: "10:00", what: "Personalised treatment", icon: "hands" },
  { time: "13:00", what: "Lunch, rest and time by the sea", icon: "sun" },
  { time: "16:00", what: "Second treatment or consultation", icon: "consult" },
  { time: "19:00", what: "Dinner", icon: "bowl" },
  { time: "21:00", what: "Yoga Nidra and sleep routine", icon: "moon" },
] as const;

const calendar = [
  ["January", "Therapeutic programmes", "Winter Wellness"],
  ["February", "Therapeutic programmes", "Yoga & Stress Reset"],
  ["March", "Condition programmes", "Spring Rebalance"],
  ["April", "Panchakarma", "Spring Retreat"],
  ["May", "Therapeutic programmes", "Adriatic Wellness"],
  ["June", "Therapeutic programmes", "Summer Retreat"],
  ["July", "Therapeutic programmes", "Adriatic Wellness"],
  ["August", "Therapeutic programmes", "Summer Retreat"],
  ["September", "Panchakarma", "Autumn Rebalance"],
  ["October", "Condition programmes", "Stress Reset"],
  ["November", "Therapeutic programmes", "Deep Rest"],
  ["December", "Therapeutic programmes", "Winter Renewal"],
];

export default function MontenegroPage() {
  return (
    <main>
      {/* Cinematic hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-adriatic-deep text-ivory">
        <div className="hero-reveal absolute inset-0">
          <ParallaxFill src={photos.ladyOfTheRocks.src} alt={photos.ladyOfTheRocks.alt} preload quality={80} sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep via-adriatic-deep/30 to-adriatic-deep/40" />
        <div className="container-page relative grid gap-10 pb-20 md:pb-28 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow fade-in flex items-center gap-4 text-ivory/80" style={{ animationDelay: "0.4s" }}>
              <span className="h-px w-10 bg-gold" /> Hyatt Regency Kotor Bay · Montenegro
            </p>
            <h1 className="mt-6 heading-display">
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="rise-line block" style={{ animationDelay: "0.5s" }}>
                  AYUSH Montenegro
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="rise-line block text-sage" style={{ animationDelay: "0.65s" }}>
                  The therapeutic destination
                </span>
              </span>
            </h1>
          </div>
          <p className="fade-rise self-end leading-relaxed text-ivory/80 md:text-lg lg:col-span-4" style={{ animationDelay: "1s" }}>
            Clinical Ayurveda and authentic holistic wellness at the edge of the Adriatic — year-round residential
            programmes, subject to availability and individual assessment.
          </p>
        </div>
      </section>

      {/* Architecture — three arches */}
      <section className="bg-ivory py-28 md:py-36">
        <div className="container-page">
          <SectionHead
            eyebrow="The architecture of integrated wellbeing"
            title={<>Three foundations, <span className="text-olive">one programme.</span></>}
            lede="The strength of clinical governance. The vision of a premium experience. The authenticity of traditional healing."
          />
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.name} delay={0.12 * i}>
                <div
                  className={`flex h-full flex-col justify-end rounded-t-full border border-stone/70 px-8 pt-40 pb-10 text-center md:min-h-[30rem] ${
                    i === 1 ? "bg-olive text-ivory" : "bg-sand/60 text-adriatic"
                  }`}
                >
                  <p className={`eyebrow text-[0.6rem] ${i === 1 ? "text-sage" : "text-olive"}`}>{p.role}</p>
                  <h3 className="mt-4 font-display text-4xl font-light">{p.name}</h3>
                  <p className={`mt-4 leading-relaxed ${i === 1 ? "text-ivory/80" : "text-muted"}`}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="relative bg-sand">
        <div className="grid lg:grid-cols-2">
          <ParallaxImage photo={photos.heroBay} sizes="(min-width: 1024px) 50vw, 100vw" className="min-h-[60vh] lg:min-h-[90vh]" />
          <div className="container-page flex items-center py-24 lg:px-20">
            <Reveal>
              <Eyebrow>Boka Kotorska</Eyebrow>
              <h2 className="mt-6 heading-display text-adriatic">The environment as co-facilitator</h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted md:text-lg">
                Healing does not happen in a vacuum. Situating clinical Ayurveda within the calm, fluid landscape of the
                Bay of Kotor — still water, steep mountains, clear air — supports rest and nervous-system regulation, and
                deepens the effect of the therapies themselves.
              </p>
              <ul className="mt-10 grid max-w-md grid-cols-2 gap-6">
                {[
                  ["mountain", "Mountains & clean air"],
                  ["drop", "The Adriatic Sea"],
                  ["sun", "A mild climate"],
                  ["leaf", "Mediterranean nature"],
                ].map(([icon, label]) => (
                  <li key={label} className="flex items-center gap-3 text-ink/80">
                    <Icon name={icon as "leaf"} className="h-6 w-6 text-olive" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 stages / 15 steps */}
      <section className="bg-adriatic-deep py-28 text-ivory md:py-36">
        <div className="container-page">
          <SectionHead
            tone="light"
            eyebrow="The client journey"
            title={<>Five stages. <span className="text-sage">Fifteen steps.</span></>}
            lede="Every client follows this master pathway, yet no two journeys are identical. The architecture is fixed; the lived experience is entirely personal."
          />
          <div className="mt-20">
            <StageTimeline />
          </div>
        </div>
      </section>

      {/* Durations + components */}
      <section className="bg-ivory py-28 md:py-36">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead eyebrow="Programme lengths" title="Time to go deeper" />
            <ul className="mt-12 divide-y divide-stone/60 border-y border-stone/60">
              {durations.map((d, i) => (
                <Reveal key={d.days} delay={0.06 * i}>
                  <li className="flex items-baseline gap-8 py-6">
                    <span className="w-24 shrink-0 font-display text-5xl font-light text-adriatic">
                      {d.days}
                      <span className="ml-1 text-base text-muted">days</span>
                    </span>
                    <span className="leading-relaxed text-ink/80">{d.body}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Button href="/programmes" variant="outline-dark" className="mt-10">
              Explore Therapeutic Programmes
            </Button>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal className="rounded-[2rem] bg-sand p-10">
              <p className="eyebrow text-[0.62rem] text-olive">Coordinated as one programme</p>
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {components.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[0.95rem] text-ink/85">
                    <Icon name="leaf" className="mt-1 h-3.5 w-3.5 shrink-0 text-olive" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A day at AYUSH Montenegro */}
      <section className="bg-forest py-28 text-ivory md:py-36">
        <div className="container-page">
          <SectionHead tone="light" eyebrow="Daily programme" title="A day at AYUSH Montenegro" lede="An illustrative day — your Vaidya shapes the actual rhythm around your plan and stage of treatment." />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-ivory/10 sm:grid-cols-2 lg:grid-cols-7">
            {day.map((d, i) => (
              <Reveal key={d.time} delay={0.06 * i} className="bg-forest p-6">
                <Icon name={d.icon} className="h-6 w-6 text-sage" />
                <p className="mt-6 font-display text-3xl font-light">{d.time}</p>
                <p className="mt-2 text-[0.92rem] leading-snug text-ivory/75">{d.what}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-ivory py-28 md:py-36">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:col-span-7">
            <ParallaxFill src={photos.flowArchPool.src} alt={photos.flowArchPool.alt} quality={75} sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <Eyebrow>Accommodation</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-light text-adriatic md:text-5xl">Stay at Hyatt Regency Kotor Bay</h2>
            <p className="mt-6 leading-relaxed text-muted">
              Programmes take place at the resort on the Bay of Kotor, with treatment rooms, Yoga spaces and relaxation
              areas close at hand. Rooms and full-board meals are booked alongside your programme and priced separately.
            </p>
            <p className="mt-4 text-[0.88rem] text-muted">
              AYUSH therapeutic programme stays are arranged separately from VIVUM retreat accommodation.
            </p>
            <Button href="/travel" variant="outline-dark" className="mt-8">
              Travel to Montenegro
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Year-round calendar */}
      <section className="bg-sand py-28 md:py-36">
        <div className="container-page">
          <SectionHead eyebrow="Open all year" title="The Montenegro calendar" lede="Therapeutic programmes run throughout the year; VIVUM wellness retreats follow the seasons." />
          <div className="mt-14 overflow-x-auto rounded-3xl border border-stone/70 bg-ivory">
            <table className="w-full min-w-[40rem] text-left">
              <thead>
                <tr className="border-b border-stone/70">
                  <th className="eyebrow px-6 py-5 text-[0.6rem] font-normal text-stone-deep">Month</th>
                  <th className="eyebrow px-6 py-5 text-[0.6rem] font-normal text-olive">AYUSH — therapeutic</th>
                  <th className="eyebrow px-6 py-5 text-[0.6rem] font-normal text-sea">VIVUM — wellness</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map(([m, a, v]) => (
                  <tr key={m} className="border-b border-stone/40 last:border-0">
                    <td className="px-6 py-4 font-display text-xl text-adriatic">{m}</td>
                    <td className="px-6 py-4 text-ink/85">{a}</td>
                    <td className="px-6 py-4 text-ink/85">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BookingBand
        photo={photos.heroBay}
        title="Understand the person. Personalise the care."
        body="Experience the therapy, integrate the learning, continue at home. Your Montenegro programme begins with a consultation — in the UK, online or on arrival."
        secondary={{ label: "Plan your travel", href: "/travel" }}
      />
    </main>
  );
}
