import type { Metadata } from "next";
import { serviceAreas, trainings } from "@/lib/vivumGroup";
import { PriceTabs, ProblemMatcher } from "@/components/pages/ConsultingTools";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { BookingBand, Icon, SectionHead } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "VIVUM Consulting & Training",
  description:
    "VIVUM Group — strategy, process excellence and responsible AI for companies in Montenegro and the region. Training and consulting led by Dr Sandra Kordić.",
};

// Generated with Google Flow — one photograph per service area
const areaImages = ["/images/flow/consulting/p11.jpg", "/images/flow/consulting/p09.jpg", "/images/flow/consulting/p13.jpg"];

export default function ConsultingPage() {
  return (
    <main className="bg-ivory">
      {/* Typographic hero */}
      <section className="container-page pt-40 pb-20 md:pt-48">
        <FadeIn delay={0.2}>
          <p className="eyebrow text-sea">VIVUM Group · Consulting &amp; Training</p>
          <h1 className="mt-8 max-w-5xl heading-display text-adriatic">
            From a clear direction
            <span className="block text-sea">to measurable results</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.45} className="mt-12 grid gap-10 border-t border-stone/60 pt-10 md:grid-cols-12">
          <p className="leading-relaxed text-muted md:col-span-6 md:text-lg">
            Training and consulting for companies in Montenegro and the region — strategy that reaches every team,
            processes that run without rework, and the responsible introduction of AI.
          </p>
          <div className="flex items-center gap-4 md:col-span-4 md:col-start-9">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sea font-display text-xl text-ivory">SK</span>
            <div>
              <p className="font-display text-2xl text-adriatic">Dr Sandra Kordić</p>
              <p className="text-[0.9rem] text-muted">VIVUM Group</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Service areas — editorial panels, each with its photograph */}
      <section className="bg-adriatic-deep py-28 text-ivory md:py-36">
        <div className="container-page">
          <SectionHead tone="light" eyebrow="Service areas" title="Where we help" />
          <div className="mt-16 space-y-6">
            {serviceAreas.map((a, i) => (
              <Reveal key={a.n} delay={0.05 * i}>
                <article className="grid overflow-hidden rounded-[2rem] border border-ivory/10 bg-ivory/[0.03] lg:grid-cols-12">
                  <div className={`relative min-h-[18rem] overflow-hidden lg:col-span-4 ${i % 2 ? "lg:order-2" : ""}`}>
                    <ParallaxFill src={areaImages[i]} alt="" quality={75} sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/60 to-transparent" />
                    <p className="absolute bottom-6 left-6 font-display text-7xl font-light text-ivory/90">{a.n}</p>
                  </div>
                  <div className="grid gap-8 p-8 md:p-12 lg:col-span-8 lg:grid-cols-2">
                    <div>
                      <h3 className="font-display text-4xl font-light">{a.name}</h3>
                      <p className="mt-4 leading-relaxed text-ivory/75">{a.lede}</p>
                      <p className="mt-6 text-[0.92rem] leading-relaxed text-ivory/60">
                        <span className="text-ivory/85">For: </span>
                        {a.who}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow text-[0.58rem] text-gold">What it covers</p>
                      <ul className="mt-4 divide-y divide-ivory/10 border-y border-ivory/10">
                        {a.covers.map((c) => (
                          <li key={c} className="flex items-center gap-3 py-3 text-ivory/90">
                            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → service matcher, with a changing photograph */}
      <section className="container-page py-28 md:py-36">
        <SectionHead eyebrow="Problems we solve" title={<>Which solution <span className="text-sea">fits your problem?</span></>} />
        <div className="mt-16">
          <ProblemMatcher />
        </div>
      </section>

      {/* Training grid */}
      <section className="bg-sand/60 py-28 md:py-36">
        <div className="container-page">
          <SectionHead eyebrow="Training" title="Practical, on your real processes" lede="In-house programmes for up to 15 participants, built around a real process or project from your company — not textbook cases." />
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-stone/70 bg-stone/70 sm:grid-cols-2 lg:grid-cols-4">
            {trainings.map((t, i) => (
              <Reveal key={t.name} delay={0.04 * i} className="bg-ivory p-8">
                <Icon name="sparkle" className="h-6 w-6 text-sea" />
                <p className="mt-6 font-display text-2xl text-adriatic">{t.name}</p>
                <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="flex flex-col justify-between bg-adriatic p-8 text-ivory">
              <p className="font-display text-2xl">Open seminars</p>
              <p className="mt-2 text-ivory/75">€150–250 per participant per day. Bundle three trainings and save 10%.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Price list */}
      <section className="container-page py-28 md:py-36">
        <SectionHead eyebrow="Price list 2026" title="Indicative investment" lede="Prices in euros, excluding VAT. The final price is confirmed after an initial conversation, based on scope and company size." />
        <div className="mt-14">
          <PriceTabs />
        </div>
        <Reveal className="mt-14 grid gap-6 rounded-[2rem] bg-sand/60 p-8 text-[0.92rem] leading-relaxed text-ink/80 md:grid-cols-2 md:p-10">
          <p>
            <span className="font-medium text-adriatic">Projects:</span> 40% on signing, 40% on key deliverables, 20%
            on completion. <span className="font-medium text-adriatic">Monthly engagements:</span> paid in advance;
            additional days billed separately.
          </p>
          <p>
            <span className="font-medium text-adriatic">Additional work:</span> €100 per hour with prior written
            approval. Software, licences, experts, legal opinions and travel are shown separately.
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <Button href="/contact" variant="outline-dark">
            Request an Initial Conversation
          </Button>
        </Reveal>
      </section>

      <BookingBand
        photo={{ src: "/images/flow/consulting/p10.jpg", alt: "" }}
        title="Start with one conversation."
        body="Tell us where your company loses time, money or customers — we’ll suggest the smallest step with the greatest impact."
        secondary={{ label: "International Recruitment", href: "/vivum/recruitment" }}
      />
    </main>
  );
}
