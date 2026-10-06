import type { Metadata } from "next";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import Link from "next/link";
import { photos } from "@/lib/images";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";
import { BookingBand, Eyebrow, Icon, SectionHead } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "About AYUSH",
  description:
    "AYUSH — Ayurveda & Yoga Therapy. Traditional wisdom, individualised care and a modern European approach across the UK, Montenegro and India.",
};

const pathways = [
  {
    country: "United Kingdom",
    name: "AYUSH London",
    lines: "Consultations · Ayurveda therapies · Yoga Therapy · Follow-up care",
    body: "For clients based in the UK seeking individual Ayurvedic consultation and ongoing care.",
    href: "/uk",
    photo: photos.herbalTea,
  },
  {
    country: "Montenegro",
    name: "AYUSH Montenegro",
    lines: "Residential programmes · Panchakarma · Yoga Therapy · Condition-focused programmes",
    body: "7, 14, 21 and 28-day structured programmes, with treatment, diet, Yoga Therapy and lifestyle support coordinated as one.",
    href: "/montenegro",
    photo: photos.ladyOfTheRocks,
  },
  {
    country: "India",
    name: "AYUSH India",
    lines: "Ayurveda · Traditional therapies · Kerala retreats",
    body: "Our connection with Kerala gives access to traditional Ayurvedic environments and longer retreat experiences.",
    href: "/india",
    photo: photos.ancientOlive,
  },
];

const matrix = [
  ["Choose a generic massage", "Begin with a Vaidya-led clinical assessment"],
  ["Same treatment for every client", "Treatment selected for your individual constitution"],
  ["The treatment is the product", "The personalised journey is the product"],
  ["A passive physical experience", "Active integration of treatment, Yoga, awareness and lifestyle"],
  ["The visit ends at checkout", "A home plan and follow-up continue the journey"],
  ["Standard wellness", "Physician-supervised Panchakarma and integrated Varma therapy"],
];

const principles = [
  "Understand the person.",
  "Personalise the care.",
  "Experience the therapy.",
  "Integrate the learning.",
  "Continue at home.",
];

const teams = [
  { name: "AYUSH UK", body: "Consultation, treatment and continuing care in London." },
  { name: "AYUSH Montenegro", body: "Vaidyas, therapists and Yoga teachers for residential programmes." },
  { name: "AYUSH India", body: "Traditional practitioners and Kerala retreat partners." },
  { name: "VIVUM Wellness Team", body: "Wellness, Yoga and hospitality specialists." },
];

export default function AyushPage() {
  return (
    <main className="bg-ivory">
      {/* Typographic hero over a cinemascope strip */}
      <section className="relative overflow-hidden bg-adriatic-deep pt-40 text-ivory md:pt-52">
        <div className="container-page pb-16 text-center md:pb-24">
          <p className="eyebrow fade-in text-ivory/70" style={{ animationDelay: "0.3s" }}>
            AYUSH · Ayurveda &amp; Yoga Therapy
          </p>
          <h1 className="mx-auto mt-8 max-w-5xl heading-display">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="rise-line block" style={{ animationDelay: "0.4s" }}>
                Traditional wisdom.
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="rise-line block text-sage" style={{ animationDelay: "0.55s" }}>
                Individualised care.
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="rise-line block" style={{ animationDelay: "0.7s" }}>
                A modern European approach.
              </span>
            </span>
          </h1>
        </div>
        <div className="hero-reveal relative mx-auto aspect-[21/9] w-full max-w-[110rem] overflow-hidden">
          <ParallaxFill src={photos.flowTreatmentRoom.src} alt={photos.flowTreatmentRoom.alt} preload quality={80} sizes="100vw" className="object-cover" />
        </div>
      </section>

      {/* Intro */}
      <section className="container-page grid gap-10 py-28 md:py-36 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>About AYUSH</Eyebrow>
          <p className="mt-6 font-display text-3xl leading-snug font-light text-adriatic md:text-4xl">
            Traditional Ayurveda and Yoga Therapy for people across Europe — through our centres and international network
            in the United Kingdom, Montenegro and India.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="self-end lg:col-span-5 lg:col-start-8">
          <p className="leading-relaxed text-muted md:text-lg">
            Our approach combines traditional Ayurvedic therapies, practitioner-led assessment, Yoga Therapy, nutrition and
            lifestyle guidance within structured individual programmes. AYUSH is therapeutic care: practitioner-led,
            individualised and structured — distinct from the wellness experiences of our sister brand, VIVUM.
          </p>
        </Reveal>
      </section>

      {/* Pathways — tall alternating cards */}
      <section className="bg-sand/60 py-28 md:py-36">
        <div className="container-page">
          <SectionHead eyebrow="Choose your pathway" title={<>One approach, <span className="text-olive">three countries.</span></>} />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pathways.map((p, i) => (
              <Reveal key={p.name} delay={0.1 * i} className={i === 1 ? "lg:mt-20" : ""}>
                <Link href={p.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                    <ParallaxFill src={p.photo.src} alt={p.photo.alt} quality={70} sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.05]" />
                  </div>
                  <p className="eyebrow mt-6 text-[0.6rem] text-olive">{p.country}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-display text-3xl text-adriatic">{p.name}</h3>
                    <Arrow className="text-adriatic" />
                  </div>
                  <p className="mt-2 text-[0.9rem] text-stone-deep">{p.lines}</p>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Paradigm shift matrix */}
      <section className="container-page py-28 md:py-36">
        <SectionHead eyebrow="Beyond the conventional spa" title="A different model of care" align="center" />
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-stone/70">
          <div className="grid grid-cols-2">
            <p className="eyebrow bg-sand px-6 py-5 text-[0.6rem] text-stone-deep md:px-10">Conventional spa</p>
            <p className="eyebrow bg-adriatic px-6 py-5 text-[0.6rem] text-ivory md:px-10">The AYUSH model</p>
          </div>
          {matrix.map(([a, b], i) => (
            <Reveal key={a} delay={0.05 * i} y={10} className="grid grid-cols-2 border-t border-stone/60">
              <p className="bg-sand/40 px-6 py-6 text-stone-deep line-through decoration-stone/70 md:px-10">{a}</p>
              <p className="flex gap-3 bg-adriatic-deep px-6 py-6 text-ivory md:px-10">
                <Icon name="shield" className="h-5 w-5 shrink-0 text-gold" />
                {b}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Principles — large numbered statements */}
      <section className="bg-forest py-28 text-ivory md:py-36">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow tone="light">Our approach</Eyebrow>
            <p className="mt-6 max-w-sm leading-relaxed text-ivory/75">
              Five principles guide every AYUSH programme — from a single consultation in London to a 28-day programme
              in Montenegro.
            </p>
          </Reveal>
          <ol className="lg:col-span-8">
            {principles.map((p, i) => (
              <Reveal key={p} delay={0.08 * i}>
                <li className="flex items-baseline gap-6 border-b border-ivory/15 py-6 md:gap-10">
                  <span className="font-display text-xl text-gold">0{i + 1}</span>
                  <span className="font-display text-4xl font-light md:text-6xl">{p}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Yoga Therapy */}
      <section className="grid bg-ivory lg:grid-cols-2">
        <div className="container-page order-2 flex items-center py-24 lg:order-1 lg:pr-20 lg:pl-[max(4rem,calc((100vw-88rem)/2+4rem))]">
          <Reveal>
            <Eyebrow>Yoga Therapy</Eyebrow>
            <h2 className="mt-6 heading-display text-adriatic">Yoga as therapy, not exercise</h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted md:text-lg">
              Therapeutic Hatha-based Yoga, Pranayama (breathwork), meditation and Yoga Nidra — adapted to your physical
              ability and integrated with your treatment plan, so recovery is anchored in the body and the nervous system.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Hatha-based Yoga", "Pranayama", "Meditation", "Yoga Nidra", "Individual sessions", "Small groups"].map((t) => (
                <li key={t} className="rounded-full border border-adriatic/20 px-4 py-2 text-[0.9rem] text-adriatic">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <ParallaxImage photo={photos.flowYogaPavilion} sizes="(min-width: 1024px) 50vw, 100vw" className="order-1 min-h-[60vh] lg:order-2 lg:min-h-[85vh]" />
      </section>

      {/* Team */}
      <section className="bg-sand/60 py-28 md:py-36">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="International team" title="Practitioners you can know by name" />
            <Reveal delay={0.1} className="mt-12 rounded-[2rem] bg-ivory p-8">
              <div className="flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-olive font-display text-2xl text-ivory">PR</span>
                <div>
                  <p className="font-display text-2xl text-adriatic">Dr Prabodh Raghavan</p>
                  <p className="text-muted">Consultant Ayurvedic Physician · AYUSH UK</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {teams.map((t, i) => (
              <Reveal key={t.name} delay={0.06 * i} className="rounded-[1.5rem] border border-stone/70 p-7">
                <Icon name="globe" className="h-6 w-6 text-olive" />
                <p className="mt-5 font-display text-2xl text-adriatic">{t.name}</p>
                <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
                <p className="eyebrow mt-6 text-[0.56rem] text-stone-deep">Profiles coming soon</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingBand photo={photos.kotorRooftops} secondary={{ label: "Explore programmes", href: "/programmes" }} />
    </main>
  );
}
