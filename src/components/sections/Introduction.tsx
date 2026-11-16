import Link from "next/link";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { photos } from "@/lib/images";
import { Reveal, RevealImage } from "../ui/Reveal";
import { Arrow } from "../ui/Button";

const offer = [
  "Ayurvedic consultation and assessment",
  "Individual therapeutic protocols",
  "Classical Ayurvedic therapies and Panchakarma",
  "Therapeutic yoga and breathwork",
  "Ayurvedic nutrition and herbal guidance",
  "Progress reviews and follow-up care",
];

export function Introduction() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-28 md:py-40">
      <div className="container-page">
        {/* The concept — a centred editorial statement */}
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <LeafMark className="h-9 w-9 text-olive" />
          <p className="mt-6 font-label text-[0.68rem] font-medium tracking-[0.4em] text-stone-deep uppercase">
            The Concept
          </p>
          <h2 className="mt-8 font-hero text-[2.6rem] leading-[1.04] text-forest sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Ancient knowledge,
            <span className="block font-display font-light text-olive italic">a healing setting,</span>
            one philosophy.
          </h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Ayurveda provides the knowledge and the method. Montenegro provides the setting, the atmosphere and the
            feeling. AYUSH brings the two together in practitioner-led therapy, shaped around each individual.
          </p>
        </Reveal>

        {/* What AYUSH offers — image collage beside a numbered list */}
        <div className="mt-24 grid items-center gap-16 md:mt-36 lg:grid-cols-12 lg:gap-10">
          <div className="relative pb-16 lg:col-span-6 lg:pb-24">
            <RevealImage className="relative aspect-[4/5] w-[82%] overflow-hidden rounded-t-full">
              <ParallaxFill
                src={photos.abhyanga.src}
                alt={photos.abhyanga.alt}
                quality={75}
                sizes="(min-width: 1024px) 40vw, 82vw"
                className="object-cover"
              />
            </RevealImage>
            <RevealImage
              delay={0.25}
              className="absolute right-0 bottom-0 aspect-square w-[46%] overflow-hidden border-[6px] border-ivory md:border-8"
            >
              <ParallaxFill
                src={photos.shirodhara.src}
                alt={photos.shirodhara.alt}
                quality={70}
                sizes="(min-width: 1024px) 22vw, 46vw"
                className="object-cover"
              />
            </RevealImage>
            <p className="absolute bottom-3 left-0 hidden max-w-[11rem] font-display text-lg leading-snug text-stone-deep italic md:block lg:bottom-8">
              Warm oil, practised hands and calm stone rooms.
            </p>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="flex items-center gap-3 font-label text-[0.68rem] font-medium tracking-[0.3em] text-stone-deep uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-olive" />
              Ayurveda &amp; Yoga Therapy Centre
            </p>
            <h3 className="mt-6 font-hero text-4xl leading-[1.08] text-forest md:text-5xl">
              Specialist care, from first consultation to follow-up
            </h3>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Professional Ayurveda and yoga therapy led by experienced practitioners — from the first consultation to an
              individually prescribed therapeutic protocol.
            </p>

            <ol className="mt-10 border-t border-stone/70">
              {offer.map((item, i) => (
                <li key={item} className="flex items-baseline gap-6 border-b border-stone/70 py-4">
                  <span className="w-6 shrink-0 font-label text-[0.7rem] font-medium tracking-[0.1em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl text-ink md:text-[1.35rem]">{item}</span>
                </li>
              ))}
            </ol>

            <Link
              href="/ayush"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 font-label text-[0.65rem] font-semibold tracking-[0.14em] text-ivory uppercase transition-colors duration-500 hover:bg-olive"
            >
              About AYUSH
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Small fine-line leaf mark, echoing the logo's linework. */
function LeafMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" className={className}>
      <path d="M20 36C20 24 12 16 6 12c12-2 22 6 14 24Z" />
      <path d="M20 36c0-12 8-20 14-24-12-2-22 6-14 24Z" />
      <path d="M20 36V18" strokeOpacity={0.6} />
    </svg>
  );
}
