"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { photos, type Photo } from "@/lib/images";
import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Button";

type Programme = { title: string; subtitle: string; body: string; brand: "AYUSH" | "VIVUM"; photo: Photo };

const programmes: Programme[] = [
  {
    title: "Therapeutic Programmes",
    subtitle: "Personalised Ayurveda & Yoga Therapy",
    body: "Professional consultation and individually prescribed treatment in calm spaces of stone, wood and natural materials.",
    brand: "AYUSH",
    photo: photos.stoneBath,
  },
  {
    title: "Rejuvenation Journeys",
    subtitle: "Restore · Renew · Thrive",
    body: "Yoga and meditation beside the Adriatic Sea, with daily rhythms designed around rest and renewal.",
    brand: "VIVUM",
    photo: photos.yogaByTheSea,
  },
  {
    title: "Holistic Wellness",
    subtitle: "Mediterranean Nutrition & Ayurvedic Principles",
    body: "Mediterranean and functional nutrition guided by Ayurvedic principles and local, seasonal ingredients.",
    brand: "VIVUM",
    photo: photos.nourishingBowl,
  },
  {
    title: "Wellness Retreats",
    subtitle: "Exclusive Locations in Montenegro",
    body: "Immersive stays at selected premium hotels and partner locations on the coast and in the mountains.",
    brand: "VIVUM",
    photo: photos.budvaHotel,
  },
];

const brandBg = (b: Programme["brand"]) => (b === "AYUSH" ? "bg-olive" : "bg-sea");
const brandText = (b: Programme["brand"]) => (b === "AYUSH" ? "text-olive" : "text-sea");

// Desktop "scattered" placement: different sizes and heights across a 12-column grid.
const placements = [
  { cell: "col-span-5 col-start-1", aspect: "aspect-[4/5]", showBody: true },
  { cell: "col-span-3 col-start-7 mt-40", aspect: "aspect-square", showBody: false },
  { cell: "col-span-3 col-start-10 mt-10", aspect: "aspect-[3/4]", showBody: false },
  { cell: "col-span-5 col-start-6 -mt-10", aspect: "aspect-[4/3]", showBody: true },
];

export function Programmes() {
  const [active, setActive] = useState<number | null>(null);
  const engaged = active !== null;

  return (
    <section id="programmes" className="relative overflow-hidden bg-sand/60 py-24 md:py-36">
      {/* Desktop: the hovered programme's photograph takes over the whole section */}
      <div aria-hidden className="absolute inset-0 hidden lg:block">
        {programmes.map((p, i) => (
          <div
            key={p.title}
            className={`absolute inset-0 transition-[opacity,transform] duration-1000 ease-[var(--ease-calm)] ${
              active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <Image src={p.photo.src} alt="" fill quality={70} sizes="100vw" className="object-cover" />
          </div>
        ))}
        <div
          className={`absolute inset-0 bg-adriatic-deep/65 transition-opacity duration-1000 ${engaged ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="container-page relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p
              className={`eyebrow flex items-center gap-4 transition-colors duration-700 ${engaged ? "text-ivory/70" : "text-stone-deep"}`}
            >
              <span className="h-px w-10 bg-gold" />
              Explore
            </p>
            <h2 className={`mt-6 heading-display transition-colors duration-700 ${engaged ? "text-ivory" : "text-adriatic"}`}>
              Featured
              <span className="block">Programmes</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm">
            <p className={`leading-relaxed transition-colors duration-700 ${engaged ? "text-ivory/75" : "text-muted"}`}>
              Therapeutic care through AYUSH and wellness journeys through VIVUM — each tailored to the individual after
              a personal consultation.
            </p>
            <Link
              href="#programmes"
              className={`group mt-6 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-700 ${
                engaged ? "text-ivory" : "text-adriatic"
              }`}
            >
              View All Programmes <Arrow />
            </Link>
          </Reveal>
        </div>

        {/* Desktop — scattered images; hovering one reveals its details */}
        <div className="mt-24 hidden grid-cols-12 items-start gap-x-8 lg:grid">
          {programmes.map((p, i) => {
            const place = placements[i];
            const isActive = active === i;
            return (
              <Reveal key={p.title} delay={i * 0.12} className={place.cell}>
                <Link
                  href="#programmes"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="block"
                >
                  <div
                    className={`relative ${place.aspect} overflow-hidden border transition-colors duration-700 ${
                      engaged ? "border-ivory/40" : "border-transparent"
                    }`}
                  >
                    {/* Photo: fades away while any programme is being explored, leaving the frame */}
                    <Image
                      src={p.photo.src}
                      alt={p.photo.alt}
                      fill
                      quality={70}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={`object-cover transition-opacity duration-700 ${engaged ? "opacity-0" : "opacity-100"}`}
                    />
                    <span
                      className={`eyebrow absolute top-4 left-4 rounded-full px-3 py-1.5 text-[0.58rem] text-ivory transition-opacity duration-500 ${brandBg(
                        p.brand,
                      )} ${engaged ? "opacity-0" : "opacity-100"}`}
                    >
                      {p.brand}
                    </span>

                    {/* Details panel for the hovered programme */}
                    <div
                      className={`absolute inset-3 flex flex-col items-center justify-center bg-ivory px-6 text-center transition-[opacity,transform] duration-700 ease-[var(--ease-calm)] ${
                        isActive ? "scale-100 opacity-100" : "pointer-events-none scale-[0.97] opacity-0"
                      }`}
                    >
                      <p className={`eyebrow text-[0.6rem] ${brandText(p.brand)}`}>{p.brand}</p>
                      <h3 className="mt-3 font-display text-3xl leading-tight font-light text-adriatic xl:text-4xl">
                        {p.title}
                      </h3>
                      <p className="eyebrow mt-3 text-[0.58rem] leading-relaxed text-stone-deep">{p.subtitle}</p>
                      {place.showBody && (
                        <p className="mt-4 max-w-xs text-[0.92rem] leading-relaxed text-muted">{p.body}</p>
                      )}
                      <span className="mt-6 inline-flex items-center gap-3 border border-adriatic/40 px-5 py-2.5 text-[0.62rem] tracking-[0.22em] text-adriatic uppercase">
                        Discover <Arrow />
                      </span>
                    </div>
                  </div>
                  <p
                    className={`eyebrow mt-4 text-[0.62rem] transition-colors duration-700 ${
                      engaged ? "text-ivory/80" : "text-adriatic"
                    }`}
                  >
                    {p.title}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Phones & tablets — swipeable cards with details */}
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:mt-20 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 lg:hidden [&::-webkit-scrollbar]:hidden">
          {programmes.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="w-[80%] shrink-0 snap-start md:w-auto">
              <Link href="#programmes" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={p.photo.src}
                    alt={p.photo.alt}
                    fill
                    quality={70}
                    sizes="(min-width: 768px) 45vw, 80vw"
                    className="object-cover"
                  />
                  <span
                    className={`eyebrow absolute top-4 left-4 rounded-full px-3 py-1.5 text-[0.58rem] text-ivory ${brandBg(p.brand)}`}
                  >
                    {p.brand}
                  </span>
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-normal text-adriatic">{p.title}</h3>
                    <p className="eyebrow mt-2 text-[0.6rem] leading-relaxed text-stone-deep">{p.subtitle}</p>
                  </div>
                  <Arrow className="mt-3 shrink-0 text-adriatic" />
                </div>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{p.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
