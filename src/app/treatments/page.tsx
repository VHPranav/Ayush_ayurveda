import type { Metadata } from "next";
import {  ParallaxFill } from "@/components/ui/ParallaxFill";
import { menu } from "@/lib/treatments";
import { euro } from "@/lib/programmes";
import { photos } from "@/lib/images";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, ContentSections, Icon, type ContentBlock } from "@/components/ui/Kit";

// Strategy plan §5: purpose, process, duration, suitability, contraindications and aftercare.
const treatmentInfo: ContentBlock[] = [
  {
    id: "suitability",
    title: "Suitability",
    lede: "Every treatment is chosen after consultation.",
    body: [
      "Your practitioner explains the purpose, process and duration of each recommended therapy, and confirms it is suitable for you before you consent.",
    ],
  },
  {
    id: "contraindications",
    title: "Contraindications",
    lede: "Some therapies are not suitable for everyone.",
    points: [
      "Pregnancy — several therapies are avoided or adapted",
      "Fever, acute infection or acute inflammation",
      "Skin conditions or allergies affecting oils or herbal powders",
      "Heart or blood-pressure conditions — heat therapies may be unsuitable",
      "Recent surgery, injury or certain medicines",
    ],
  },
  {
    id: "aftercare",
    title: "Aftercare",
    lede: "Small steps help you get the most from each session.",
    points: [
      "Rest for a while after treatment and keep warm",
      "Wait before showering after oil therapies, as advised",
      "Eat light, warm food on treatment days",
      "Tell us about any unexpected reaction",
    ],
  },
];

export const metadata: Metadata = {
  title: "Treatments",
  description: "The Ayurvedic treatment menu at AYUSH Ayurveda Clinic, Montenegro — Hyatt Regency Kotor Bay.",
};

export default function TreatmentsPage() {
  return (
    <main className="bg-[#f3efe6]">
      {/* Menu masthead */}
      <section className="container-page pt-40 pb-16 text-center md:pt-48">
        <FadeIn delay={0.2}>
          <h1 className="mx-auto max-w-4xl heading-display text-adriatic">The Individual Wellness &amp; Ayurvedic Menu</h1>
          <div className="mx-auto mt-8 flex max-w-md items-center gap-4">
            <span className="h-px flex-1 bg-stone" />
            <Icon name="leaf" className="h-5 w-5 text-olive" />
            <span className="h-px flex-1 bg-stone" />
          </div>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted md:text-lg">
            Individual services are consultation-led entry points and complements to a programme — never substitutes for
            the structured AYUSH journey. We recommend beginning with an initial consultation.
          </p>
        </FadeIn>
      </section>

      {/* Sticky tier bar */}
      <nav aria-label="Menu sections" className="sticky top-[4.4rem] z-30 border-y border-stone/60 bg-[#f3efe6]/90 backdrop-blur">
        <ul className="container-page flex justify-center gap-6 overflow-x-auto py-4 sm:gap-12">
          {menu.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="eyebrow whitespace-nowrap text-[0.62rem] text-adriatic hover:text-olive">
                {t.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* The consultations, featured */}
      <section className="container-page grid items-center gap-12 py-24 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <ParallaxFill src={photos.herbsFlatlay.src} alt={photos.herbsFlatlay.alt} quality={75} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl font-light text-adriatic md:text-5xl">Consultations</h2>
          <dl className="mt-10 space-y-8">
            <div>
              <div className="flex items-baseline gap-3">
                <dt className="font-display text-2xl text-adriatic">Initial Ayurveda Consultation &amp; Assessment</dt>
                <span className="mb-1.5 flex-1 border-b border-dotted border-stone-deep/50" />
                <dd className="font-display text-2xl text-adriatic">{euro(180)}</dd>
              </div>
              <p className="mt-2 text-muted">75–90 minutes · Observation, touch and questioning — Darshana, Sparshana, Prasna — to create a personal plan.</p>
            </div>
            <div>
              <div className="flex items-baseline gap-3">
                <dt className="font-display text-2xl text-adriatic">Follow-up Consultation</dt>
                <span className="mb-1.5 flex-1 border-b border-dotted border-stone-deep/50" />
                <dd className="font-display text-2xl text-adriatic">{euro(90)}</dd>
              </div>
              <p className="mt-2 text-muted">30 minutes · A review to monitor progress and adjust your wellness pathway.</p>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Menu tiers */}
      {menu.map((tier, ti) => (
        <section key={tier.id} id={tier.id} className="scroll-mt-36 border-t border-stone/60 py-24">
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="font-display text-7xl font-light text-gold/70">0{ti + 1}</p>
              <h2 className="mt-4 font-display text-4xl font-light text-adriatic md:text-5xl">{tier.name}</h2>
              <p className="eyebrow mt-4 text-[0.62rem] text-olive">{tier.range}</p>
              <p className="mt-4 max-w-xs leading-relaxed text-muted">{tier.lede}</p>
            </Reveal>
            <ul className="lg:col-span-8">
              {tier.items.map((t, i) => (
                <Reveal key={t.name} delay={0.03 * i}>
                  <li className="border-b border-stone/50 py-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl text-adriatic md:text-[1.75rem]">{t.name}</span>
                      <span className="mb-1.5 hidden flex-1 border-b border-dotted border-stone-deep/50 sm:block" />
                      <span className="ml-auto font-display text-2xl text-adriatic sm:ml-0">
                        {euro(t.price)}
                        {t.perPerson && <span className="ml-1 text-sm text-muted">pp</span>}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.95rem] text-muted">
                      {[t.minutes && `${t.minutes} min`, t.detail].filter(Boolean).join(" · ")}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <ContentSections blocks={treatmentInfo} />

      {/* Clinical note */}
      <section className="container-page pb-28">
        <Reveal className="grid gap-8 rounded-[2rem] bg-adriatic-deep p-10 text-ivory md:grid-cols-[auto_1fr] md:p-14">
          <Icon name="shield" className="h-10 w-10 text-gold" />
          <div>
            <h2 className="font-display text-3xl font-light md:text-4xl">Panchakarma is never sold as a stand-alone service</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ivory/75">
              Clinical cleansing therapies (Shodhana) are available exclusively within physician-supervised, multi-day
              programmes, after an eligibility assessment. Selected services can be combined into thematic bundles — such
              as Calm &amp; Reset or Deep Relaxation — as approved upgrades.
            </p>
          </div>
        </Reveal>
      </section>

      <BookingBand
        photo={photos.stoneBath}
        title="Start with a consultation."
        body="Your Vaidya will recommend the treatments — or the programme — that suit you best."
        secondary={{ label: "See programmes", href: "/programmes" }}
      />
    </main>
  );
}
