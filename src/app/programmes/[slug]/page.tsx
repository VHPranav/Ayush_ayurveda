import type { Metadata } from "next";
import {  ParallaxFill } from "@/components/ui/ParallaxFill";
import Link from "next/link";
import { notFound } from "next/navigation";
import { euro, getProgramme, programmes } from "@/lib/programmes";
import { photos } from "@/lib/images";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow, Button } from "@/components/ui/Button";
import { BookingBand, Icon } from "@/components/ui/Kit";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/programmes/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getProgramme(slug);
  return p ? { title: p.name, description: `${p.tagline}. ${p.intro}` } : {};
}

const inclusionIcons = ["consult", "hands", "yoga", "bowl", "calendar", "home"] as const;

export default async function ProgrammePage(props: PageProps<"/programmes/[slug]">) {
  const { slug } = await props.params;
  const p = getProgramme(slug);
  if (!p) notFound();

  const related = programmes.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main>
      {/* Split hero — text on light, photograph bleeding to the edge */}
      <section className="relative grid bg-ivory lg:min-h-[92svh] lg:grid-cols-2">
        <div className="container-page flex flex-col justify-end pt-36 pb-16 lg:max-w-none lg:pr-16 lg:pb-24 lg:pl-[max(4rem,calc((100vw-88rem)/2+4rem))]">
          <FadeIn delay={0.2}>
            <Link href="/programmes" className="group eyebrow inline-flex items-center gap-3 text-[0.62rem] text-stone-deep">
              <Arrow className="rotate-180" /> All programmes
            </Link>
            <div className="mt-10 flex flex-wrap gap-2">
              {(p.levels.length ? p.levels.map((l) => `${l.tier} · ${l.days} days`) : ["7 · 14 · 21 days"]).map((t) => (
                <span key={t} className="eyebrow rounded-full border border-adriatic/20 px-3 py-1.5 text-[0.58rem] text-adriatic">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-6 heading-display text-adriatic">{p.name}</h1>
            <p className="mt-4 font-display text-2xl text-olive md:text-3xl">{p.tagline}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted md:text-lg">{p.intro}</p>
            <p className="eyebrow mt-8 text-[0.6rem] text-stone-deep">{p.focus}</p>
          </FadeIn>
        </div>
        <div className="relative min-h-[60vh] overflow-hidden lg:min-h-0">
          <div className="hero-reveal absolute inset-0">
          <ParallaxFill src={p.photo.src} alt={p.photo.alt} preload quality={80} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/40 to-transparent" />
          </div>
          <p className="eyebrow absolute bottom-6 left-6 text-[0.6rem] text-ivory/85">AYUSH Montenegro</p>
        </div>
      </section>

      {/* Long-read content beside a sticky price card */}
      <section className="bg-ivory pb-28">
        <div className="container-page grid gap-16 border-t border-stone/50 pt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-light text-adriatic md:text-4xl">The journey</h2>
            <ol className="mt-10 space-y-0">
              {p.phases.map((ph, i) => (
                <Reveal key={ph.title} delay={0.05 * i}>
                  <li className="grid gap-4 border-b border-stone/50 py-10 sm:grid-cols-[7rem_1fr]">
                    <span className="font-display text-2xl text-gold">{ph.label}</span>
                    <div>
                      <h2 className="font-display text-3xl font-light text-adriatic md:text-4xl">{ph.title}</h2>
                      <div className="mt-5 space-y-4">
                        {ph.steps.map((s) => (
                          <div key={s.title}>
                            <p className="font-medium text-ink/90">{s.title}</p>
                            <p className="mt-1 leading-relaxed text-muted">{s.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <div className="mt-20">
              <h2 className="font-display text-3xl font-light text-adriatic md:text-4xl">What’s included</h2>
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-stone/60 bg-stone/60 sm:grid-cols-2">
                {p.inclusions.map((inc, i) => (
                  <Reveal key={inc.title} delay={0.06 * i} className="bg-ivory p-7">
                    <Icon name={inclusionIcons[i % inclusionIcons.length]} className="h-7 w-7 text-olive" />
                    <h3 className="mt-5 font-display text-2xl text-adriatic">{inc.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{inc.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            {p.extra && (
              <div className="mt-20">
                <h2 className="font-display text-3xl font-light text-adriatic md:text-4xl">{p.extra.title}</h2>
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {p.extra.items.map((it) => (
                    <li key={it} className="rounded-full bg-sand px-4 py-2 text-[0.92rem] text-ink/85">
                      {it}
                    </li>
                  ))}
                </ul>
                {p.extra.note && (
                  <p className="mt-8 flex gap-3 rounded-2xl border border-olive/30 bg-olive/5 p-5 text-[0.92rem] leading-relaxed text-ink/80">
                    <Icon name="shield" className="h-5 w-5 shrink-0 text-olive" />
                    {p.extra.note}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Sticky price card */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <Reveal className="rounded-3xl bg-adriatic-deep p-8 text-ivory shadow-[0_30px_80px_-30px_rgba(16,38,52,0.6)]">
                <p className="eyebrow text-[0.6rem] text-ivory/60">Programme investment</p>
                {p.levels.length > 0 ? (
                  <ul className="mt-6 divide-y divide-ivory/15">
                    {p.levels.map((l) => (
                      <li key={l.tier} className="py-6 first:pt-0">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="font-display text-2xl">{l.tier}</span>
                          <span className="eyebrow text-[0.6rem] text-ivory/60">{l.days} days</span>
                        </div>
                        {l.note && <p className="mt-1 text-[0.85rem] text-ivory/60">{l.note}</p>}
                        <div className="mt-4 flex items-baseline gap-3">
                          <span className="font-display text-4xl text-sage">{euro(l.promo)}</span>
                          <span className="text-[0.9rem] text-ivory/50 line-through">{euro(l.standard)}</span>
                        </div>
                        <p className="mt-2 text-[0.85rem] text-ivory/70">Includes a {euro(l.allowance)} medicine allowance</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  p.fromPricing && (
                    <div className="mt-6">
                      <p className="text-[0.9rem] text-ivory/70">From</p>
                      <div className="mt-1 flex items-baseline gap-3">
                        <span className="font-display text-5xl text-sage">{euro(p.fromPricing.promo)}</span>
                        <span className="text-ivory/50 line-through">{euro(p.fromPricing.standard)}</span>
                      </div>
                      <p className="mt-4 text-[0.9rem] leading-relaxed text-ivory/70">{p.fromPricing.note}</p>
                    </div>
                  )
                )}
                <p className="mt-6 rounded-xl bg-ivory/5 p-4 text-[0.8rem] leading-relaxed text-ivory/65">
                  Opening offer: 15% off standard rates. Accommodation and meals are priced separately.
                </p>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-ivory/65">
                  The programme, therapies and duration are recommended by our physician after your consultation.
                </p>
                <Button href="/contact" variant="solid" className="mt-6 w-full justify-center">
                  Book a Consultation
                </Button>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* Related programmes */}
      <section className="bg-sand/60 py-24">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-light text-adriatic md:text-4xl">Other programmes</h2>
            <Link href="/programmes" className="group eyebrow inline-flex items-center gap-3 text-[0.62rem] text-adriatic">
              View all <Arrow />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/programmes/${r.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <ParallaxFill src={r.photo.src} alt={r.photo.alt} quality={70} sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.05]" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-2xl text-adriatic">{r.name}</h3>
                  <Arrow className="text-adriatic" />
                </div>
                <p className="mt-1 text-[0.92rem] text-muted">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingBand photo={photos.mountainLake} secondary={{ label: "All programmes", href: "/programmes" }} />
    </main>
  );
}
