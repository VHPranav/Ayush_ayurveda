import type { Metadata } from "next";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import Link from "next/link";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";
import { BookingBand, Eyebrow, SectionHead } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "AYUSH India — Traditional Ayurveda & Kerala Retreats",
  description: "The Ayurvedic roots of AYUSH: Kerala retreats, traditional Panchakarma, rejuvenation and Yoga & Ayurveda.",
};

const offerings = [
  { name: "Kerala Ayurveda retreats", body: "Time in the traditional Ayurvedic environment of Kerala." },
  { name: "Traditional Panchakarma", body: "The classical cleansing framework, in its place of origin." },
  { name: "Rejuvenation programmes", body: "Rasayana-focused stays for vitality and renewal." },
  { name: "Yoga & Ayurveda", body: "Daily practice woven into an Ayurvedic routine." },
  { name: "Longer residential experiences", body: "Extended stays for those who want to go deeper." },
];

const ecosystem = [
  { where: "UK", what: "Consultation & continuing care", href: "/uk" },
  { where: "Montenegro", what: "AYUSH therapeutic programmes", href: "/montenegro" },
  { where: "VIVUM", what: "Wellness & Yoga retreats, hotels, corporate", href: "/vivum" },
  { where: "India", what: "Traditional Ayurveda & Kerala retreats", href: "/india", current: true },
];

export default function IndiaPage() {
  return (
    <main className="bg-ivory">
      {/* Mosaic hero */}
      <section className="bg-forest-deep pt-36 pb-6 text-ivory md:pt-44">
        <div className="container-page grid gap-10 pb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow fade-in flex items-center gap-4 text-ivory/75" style={{ animationDelay: "0.3s" }}>
              <span className="h-px w-10 bg-gold" /> AYUSH India · Kerala
            </p>
            <h1 className="mt-6 heading-display">
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="rise-line block" style={{ animationDelay: "0.4s" }}>
                  The Ayurvedic
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="rise-line block text-sage" style={{ animationDelay: "0.55s" }}>
                  roots
                </span>
              </span>
            </h1>
          </div>
          <p className="fade-rise leading-relaxed text-ivory/80 md:text-lg lg:col-span-4 lg:col-start-9" style={{ animationDelay: "0.9s" }}>
            Kerala is the traditional Ayurvedic environment within the international AYUSH journey — the source of the
            knowledge we bring to London and Montenegro.
          </p>
        </div>
        <div className="container-page grid h-[70vh] min-h-[28rem] grid-cols-4 grid-rows-2 gap-3 md:gap-4">
          <div style={{ animationDelay: "0.2s" }} className="hero-reveal relative col-span-4 row-span-1 overflow-hidden rounded-[1.5rem] md:col-span-2 md:row-span-2">
            <ParallaxFill src={photos.keralaHouseboat.src} alt={photos.keralaHouseboat.alt} preload quality={80} sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div style={{ animationDelay: "0.3s" }} className="hero-reveal relative col-span-2 overflow-hidden rounded-[1.5rem] md:col-span-1">
            <ParallaxFill src={photos.keralaPalms.src} alt={photos.keralaPalms.alt} quality={70} sizes="25vw" className="object-cover" />
          </div>
          <div style={{ animationDelay: "0.4s" }} className="hero-reveal relative col-span-2 overflow-hidden rounded-[1.5rem] md:col-span-1 md:row-span-2">
            <ParallaxFill src={photos.keralaDawn.src} alt={photos.keralaDawn.alt} quality={70} sizes="25vw" className="object-cover" />
          </div>
          <div style={{ animationDelay: "0.5s" }} className="hero-reveal relative hidden overflow-hidden rounded-[1.5rem] md:block">
            <ParallaxFill src={photos.munnarHills.src} alt={photos.munnarHills.alt} quality={70} sizes="25vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-forest-deep pt-16 pb-28 text-ivory md:pb-36">
        <Reveal className="container-page max-w-5xl text-center">
          <p className="font-display text-3xl leading-snug font-light md:text-5xl">
            “Our international model connects the contemporary European experience with the traditional Ayurvedic
            environment of India.”
          </p>
          <span className="mx-auto mt-10 block h-px w-16 bg-gold" />
        </Reveal>
      </section>

      {/* Offerings — numbered rows */}
      <section className="container-page py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead eyebrow="In Kerala" title="Ayurveda at its source" />
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {offerings.map((o, i) => (
              <Reveal key={o.name} delay={0.06 * i}>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-b border-stone/60 py-7 md:grid-cols-[5rem_1fr_1fr] md:items-baseline">
                  <span className="font-display text-2xl text-gold">0{i + 1}</span>
                  <span className="font-display text-3xl text-adriatic">{o.name}</span>
                  <span className="col-start-2 leading-relaxed text-muted md:col-start-3">{o.body}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-sand/70 py-28 md:py-36">
        <div className="container-page">
          <SectionHead eyebrow="The AYUSH international ecosystem" title="One journey, four places" align="center" />
          <ol className="mx-auto mt-16 max-w-3xl">
            {ecosystem.map((e, i) => (
              <Reveal key={e.where} delay={0.08 * i}>
                <li className="flex flex-col items-center">
                  <Link
                    href={e.href}
                    className={`group flex w-full items-center justify-between gap-6 rounded-full px-8 py-6 transition-colors duration-500 ${
                      e.current ? "bg-forest text-ivory" : "bg-ivory text-adriatic hover:bg-adriatic hover:text-ivory"
                    }`}
                  >
                    <span className="font-display text-3xl">{e.where}</span>
                    <span className="flex items-center gap-4 text-right text-[0.95rem] opacity-80">
                      {e.what} <Arrow />
                    </span>
                  </Link>
                  {i < ecosystem.length - 1 && <span aria-hidden className="h-10 w-px bg-stone-deep/40" />}
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.4} className="mx-auto mt-12 max-w-2xl text-center">
            <Eyebrow className="justify-center">Therapeutic care and wellness, kept clearly separate</Eyebrow>
          </Reveal>
        </div>
      </section>

      <BookingBand photo={photos.keralaPalms} title="Start your journey to Kerala." body="Retreats in India begin with a consultation, so we can recommend the right environment and length of stay." />
    </main>
  );
}
