import type { Metadata } from "next";
import Link from "next/link";
import {  TIERS } from "@/lib/programmes";
import { photos } from "@/lib/images";
import { ProgrammeExplorer } from "@/components/pages/ProgrammeExplorer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";
import { BookingBand } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Structured Ayurveda and Yoga Therapy programmes in Montenegro — from a five-day Discovery to the 28-day Panchakarma pathway.",
};

// Medicine allowance grows with programme length (upper figure where a range applies).
const allowances = [
  { days: 5, label: "€75", value: 75 },
  { days: 7, label: "€100", value: 100 },
  { days: 14, label: "€175 – €200", value: 200 },
  { days: 21, label: "€300 – €350", value: 350 },
  { days: 28, label: "€500", value: 500 },
];

export default function ProgrammesPage() {
  return (
    <main className="bg-ivory">
      {/* Typographic hero */}
      <section className="container-page pt-40 pb-20 md:pt-48">
        <div className="grid gap-10 lg:grid-cols-12">
          <FadeIn delay={0.2} className="lg:col-span-7">
            <h1 className="heading-display text-adriatic">
              A progression
              <span className="block text-olive">of care</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.45} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted md:text-lg">
              Every client follows the same master pathway — consultation, preparation, therapy, recovery and follow-up —
              yet no two journeys are identical. Your physician recommends the programme, the therapies and the length of
              your stay after an individual assessment — the options below are shown for information.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-page pb-28">
        <ProgrammeExplorer />
      </section>

      {/* Medicine allowance chart */}
      <section className="bg-adriatic-deep py-24 text-ivory md:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="heading-display">Medicines that travel home with you</h2>
            <p className="mt-6 leading-relaxed text-ivory/75">
              Every programme includes an allowance for traditional preparations — Kashayam, Thailas, Arishta — prescribed
              by your Vaidya. They are not retail extras: they bridge the therapy you receive here with your continuity at
              home, and they scale with the length of your programme.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex h-80 items-end gap-3 border-b border-ivory/25 sm:gap-5">
              {allowances.map((a, i) => (
                <Reveal key={a.days} delay={0.1 * i} y={0} className="flex h-full flex-1 flex-col justify-end">
                  <span className="eyebrow mb-3 text-center text-[0.55rem] text-sage sm:text-[0.62rem]">{a.label}</span>
                  <div
                    className="rounded-t-xl bg-gradient-to-t from-sea/40 to-sage/80"
                    style={{ height: `${(a.value / 500) * 85}%` }}
                  />
                </Reveal>
              ))}
            </div>
            <div className="mt-3 flex gap-3 sm:gap-5">
              {allowances.map((a) => (
                <span key={a.days} className="eyebrow flex-1 text-center text-[0.55rem] text-ivory/60 sm:text-[0.6rem]">
                  {a.days} days
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other ways in */}
      <section className="container-page grid gap-6 py-24 md:grid-cols-3">
        {[
          { href: "/treatments", title: "Individual treatments", body: "The stand-alone Ayurvedic menu — consultation-led entry points and add-ons." },
          { href: "/conditions", title: "Condition-focused programmes", body: "Dedicated pathways explaining who each programme is for and what it includes." },
          { href: "/contact", title: "Book a consultation", body: "Not sure which programme fits? Every journey begins with a practitioner consultation." },
        ].map((c, i) => (
          <Reveal key={c.href} delay={0.08 * i}>
            <Link href={c.href} className="group flex h-full flex-col justify-between rounded-3xl border border-stone/60 p-8 transition-colors duration-500 hover:bg-sand">
              <div>
                <h3 className="font-display text-3xl text-adriatic">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
              </div>
              <span className="eyebrow mt-10 inline-flex items-center gap-3 text-[0.62rem] text-adriatic">
                Explore <Arrow />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <p className="container-page pb-16 text-[0.82rem] text-muted">
        Prices shown are opening rates (15% below standard) per person for the programme. Accommodation and meals are
        priced separately. {TIERS.length} programme lengths available, subject to individual
        assessment.
      </p>

      <BookingBand photo={photos.mountainLake} />
    </main>
  );
}
