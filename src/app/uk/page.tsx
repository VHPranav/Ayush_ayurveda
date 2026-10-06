import type { Metadata } from "next";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, Eyebrow, Icon, SectionHead } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "AYUSH London — Consultation & Continuing Care",
  description:
    "AYUSH UK: Ayurvedic consultations, treatments, Yoga Therapy and follow-up care in Southall, London — and preparation for Montenegro programmes.",
};

const services = [
  { icon: "consult", name: "Consultations", body: "Individual Ayurvedic consultation and assessment." },
  { icon: "hands", name: "Ayurvedic treatments", body: "Traditional therapies at our London centre." },
  { icon: "yoga", name: "Yoga Therapy", body: "Therapeutic Yoga adapted to you." },
  { icon: "calendar", name: "Follow-up care", body: "Reviews that keep your plan on track." },
  { icon: "chat", name: "Online consultations", body: "For clients across the UK and Europe." },
  { icon: "plane", name: "Montenegro preparation", body: "Pre-arrival guidance for residential programmes." },
] as const;

const journey = [
  { step: "UK consultation", where: "London or online" },
  { step: "Assessment", where: "Practitioner-led" },
  { step: "Programme recommendation", where: "Where appropriate" },
  { step: "Pre-arrival preparation", where: "Diet, routine, travel" },
  { step: "Montenegro programme", where: "Hyatt Regency Kotor Bay", highlight: true },
  { step: "UK follow-up", where: "Continuing care" },
];

const portal = ["Appointments", "Treatment plan", "Diet plan", "Yoga programme", "Follow-up schedule", "Documents", "Invoices", "Programme information"];

export default function UkPage() {
  return (
    <main className="bg-ivory">
      {/* Hero with contact card */}
      <section className="relative overflow-hidden bg-adriatic-deep pt-40 pb-20 text-ivory md:pt-48 md:pb-28">
        <div className="hero-reveal absolute inset-0">
          <ParallaxFill src={photos.flowTreatmentRoom.src} alt="" preload quality={75} sizes="100vw" className="object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-adriatic-deep via-adriatic-deep/85 to-adriatic-deep/40" />
        <div className="container-page relative grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow fade-in flex items-center gap-4 text-ivory/75" style={{ animationDelay: "0.3s" }}>
              <span className="h-px w-10 bg-gold" /> AYUSH UK
            </p>
            <h1 className="mt-6 heading-display">
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="rise-line block" style={{ animationDelay: "0.4s" }}>
                  AYUSH London
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="rise-line block text-sage" style={{ animationDelay: "0.55s" }}>
                  Consultation &amp; continuing care
                </span>
              </span>
            </h1>
            <p className="fade-rise mt-6 max-w-xl leading-relaxed text-ivory/80 md:text-lg" style={{ animationDelay: "0.9s" }}>
              The UK entry point to AYUSH: individual consultations, treatments and Yoga Therapy in London — and the place
              your care continues before and after a programme in Montenegro.
            </p>
          </div>
          <address className="fade-rise rounded-[2rem] border border-ivory/15 bg-ivory/[0.06] p-8 not-italic backdrop-blur-md lg:col-span-4 lg:col-start-9" style={{ animationDelay: "1.1s" }}>
            <p className="eyebrow text-[0.6rem] text-gold">Visit us</p>
            <p className="mt-4 font-display text-2xl">Ayush Ayurveda &amp; Yoga Therapy Centre</p>
            <p className="mt-3 leading-relaxed text-ivory/80">
              23 Beaconsfield Road
              <br />
              Southall, UB1 1BW
            </p>
            <div className="mt-6 space-y-2 border-t border-ivory/15 pt-6 text-ivory/85">
              <a href="tel:+447983988172" className="flex items-center gap-3 hover:text-ivory">
                <Icon name="chat" className="h-4 w-4 text-sage" /> 07983 988172
              </a>
              <a href="tel:+442035611327" className="flex items-center gap-3 hover:text-ivory">
                <Icon name="chat" className="h-4 w-4 text-sage" /> 020 3561 1327
              </a>
              <a href="mailto:contact@ayushuk.com" className="flex items-center gap-3 hover:text-ivory">
                <Icon name="consult" className="h-4 w-4 text-sage" /> contact@ayushuk.com
              </a>
            </div>
          </address>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-28 md:py-36">
        <SectionHead eyebrow="Services in the UK" title="Care that continues" />
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-stone/70 bg-stone/70 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i} className="bg-ivory p-9">
              <Icon name={s.icon} className="h-8 w-8 text-olive" />
              <p className="mt-8 font-display text-3xl text-adriatic">{s.name}</p>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* UK → Montenegro → UK flow */}
      <section className="bg-sand/70 py-28 md:py-36">
        <div className="container-page">
          <SectionHead eyebrow="The international journey" title={<>London, Montenegro, <span className="text-olive">and home again.</span></>} lede="Start in the UK, take your programme in Montenegro, and continue your care with the same team when you return." />
          <ol className="mt-16 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {journey.map((j, i) => (
              <Reveal key={j.step} delay={0.07 * i}>
                <li
                  className={`relative flex h-full flex-col justify-between rounded-[1.5rem] p-6 ${
                    j.highlight ? "bg-adriatic text-ivory" : "bg-ivory text-adriatic"
                  }`}
                >
                  <span className={`font-display text-4xl font-light ${j.highlight ? "text-sage" : "text-gold"}`}>{i + 1}</span>
                  <div className="mt-10">
                    <p className="font-display text-2xl leading-tight">{j.step}</p>
                    <p className={`mt-2 text-[0.88rem] ${j.highlight ? "text-ivory/70" : "text-muted"}`}>{j.where}</p>
                  </div>
                  {i < journey.length - 1 && (
                    <span aria-hidden className="absolute top-1/2 -right-3 hidden h-px w-4 bg-stone-deep/40 xl:block" />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Online consultation + portal */}
      <section className="container-page grid gap-14 py-28 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHead eyebrow="Online consultation" title="Wherever you are in Europe" />
          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4">
              {["Pre-Montenegro consultation", "Programme discussion", "Pre-arrival guidance", "Post-programme follow-up", "UK or online continuation"].map((t) => (
                <li key={t} className="flex items-center gap-4 border-b border-stone/60 pb-4 text-lg text-ink/85">
                  <Icon name="leaf" className="h-4 w-4 text-olive" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="rounded-[2rem] bg-adriatic-deep p-10 text-ivory lg:col-span-5 lg:col-start-8">
          <Eyebrow tone="light">Coming soon · My AYUSH</Eyebrow>
          <p className="mt-6 font-display text-3xl font-light">Your programme, in one secure place.</p>
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {portal.map((p) => (
              <li key={p} className="rounded-xl bg-ivory/[0.06] px-4 py-3 text-[0.92rem] text-ivory/85">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 flex gap-3 text-[0.85rem] leading-relaxed text-ivory/65">
            <Icon name="shield" className="h-5 w-5 shrink-0 text-gold" />
            Health information is sensitive — detailed medical information is collected through a secured system, never
            through ordinary website forms.
          </p>
        </Reveal>
      </section>

      <BookingBand photo={photos.flowApothecary} title="Book a consultation in London or online." secondary={{ label: "Montenegro programmes", href: "/montenegro" }} />
    </main>
  );
}
