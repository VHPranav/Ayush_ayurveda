"use client";

import Image from "next/image";
import { useState } from "react";
import { photos, type Photo } from "@/lib/images";
import { Reveal, RevealImage } from "../ui/Reveal";
import { Button } from "../ui/Button";

type BrandId = "ayush" | "vivum";

type Brand = {
  id: BrandId;
  name: string;
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  cta: string;
  photo: Photo;
  /** Brand colour: AYUSH = olive, VIVUM = sea blue. */
  accent: string;
  accentText: string;
};

const brands: Brand[] = [
  {
    id: "ayush",
    name: "AYUSH",
    eyebrow: "Therapy · Treatment · Consultation",
    title: "Ayurveda & Yoga Therapy Centre",
    body: "The specialist foundation of the concept. Professional Ayurveda and yoga therapy led by experienced practitioners — from the first consultation to an individually prescribed therapeutic protocol.",
    items: [
      "Ayurvedic consultation and assessment",
      "Individual therapeutic protocols",
      "Classical Ayurvedic therapies and Panchakarma",
      "Therapeutic yoga and breathwork",
      "Ayurvedic nutrition and herbal guidance",
      "Progress reviews and follow-up care",
    ],
    cta: "Explore Therapeutic Programmes",
    photo: photos.treatmentRoom,
    accent: "bg-olive",
    accentText: "text-olive",
  },
  {
    id: "vivum",
    name: "VIVUM",
    eyebrow: "Wellness · Lifestyle · Hospitality",
    title: "Integrative Wellness Experiences",
    body: "The wider wellness and hospitality platform. Integrative programmes, lifestyle experiences and retreats across Montenegro, delivered with selected hotels and partner locations.",
    items: [
      "Wellness programmes and retreats",
      "Rejuvenation and detox journeys",
      "Yoga and meditation by the sea",
      "Mediterranean and Ayurvedic nutrition",
      "Stress reduction and healthy ageing",
      "Hotel and hospitality partnerships",
    ],
    cta: "Explore Wellness Journeys",
    photo: photos.svetiStefan,
    accent: "bg-sea",
    accentText: "text-sea",
  },
];

const other = (id: BrandId): BrandId => (id === "ayush" ? "vivum" : "ayush");

/**
 * Desktop: two images side by side. While the cursor is on one image, the other
 * image fades out and the hovered brand's details show in its place.
 * Below lg the cards simply stack with their details underneath.
 */
export function BrandShowcase() {
  const [active, setActive] = useState<BrandId | null>(null);

  return (
    <div className="relative">
      {/* Anchors for the hero buttons, shared by both layouts */}
      <span id="ayush" className="absolute -top-28" aria-hidden />
      <span id="vivum" className="absolute -top-28" aria-hidden />

      {/* Desktop — hover swap */}
      <div className="mt-24 hidden grid-cols-2 items-start gap-10 lg:grid xl:gap-16">
        {brands.map((brand, i) => {
          const showingDetailsOf = active === other(brand.id) ? brands[1 - i] : null;
          return (
            <RevealImage
              key={brand.id}
              delay={i * 0.15}
              className={`relative aspect-[4/5] overflow-hidden rounded-sm bg-sand xl:aspect-[5/6] ${i === 1 ? "mt-32" : ""}`}
              // Details stay open only while the cursor is on the image itself —
              // entering the slot that is showing the other brand's text does nothing.
              onMouseEnter={() => active !== other(brand.id) && setActive(brand.id)}
              onMouseLeave={() => active === brand.id && setActive(null)}
              onMouseMove={() => active === null && setActive(brand.id)}
              onFocusCapture={() => setActive(brand.id)}
              onBlurCapture={() => setActive(null)}
            >
              <BrandImage
                brand={brand}
                hidden={!!showingDetailsOf}
                highlighted={active === brand.id}
                onSelect={() => setActive(brand.id)}
              />
              {brands
                .filter((b) => b.id !== brand.id)
                .map((b) => (
                  <DetailsPanel key={b.id} brand={b} visible={!!showingDetailsOf} />
                ))}
            </RevealImage>
          );
        })}
      </div>

      {/* Mobile & tablet — stacked */}
      <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-10 lg:hidden">
        {brands.map((brand) => (
          <article key={brand.id} className={brand.id === "vivum" ? "md:mt-32" : ""}>
            <RevealImage className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <BrandImage brand={brand} />
            </RevealImage>
            <Reveal delay={0.1} className="mt-8">
              <DetailsBody brand={brand} />
            </Reveal>
          </article>
        ))}
      </div>
    </div>
  );
}

function BrandImage({
  brand,
  hidden = false,
  highlighted = false,
  onSelect,
}: {
  brand: Brand;
  hidden?: boolean;
  highlighted?: boolean;
  onSelect?: () => void;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-[var(--ease-calm)] ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src={brand.photo.src}
        alt={brand.photo.alt}
        fill
        quality={70}
        sizes="(min-width: 768px) 45vw, 100vw"
        className={`object-cover transition-transform duration-[2000ms] ease-[var(--ease-calm)] ${
          highlighted ? "scale-[1.04]" : "scale-100"
        }`}
      />
      {/* Tap target for touch devices at desktop widths */}
      {onSelect && (
        <button type="button" onClick={onSelect} aria-label={`Show ${brand.name} details`} className="absolute inset-0 cursor-default" tabIndex={-1} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-adriatic-deep/75 via-adriatic-deep/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-adriatic-deep/70 to-transparent" />

      <div className="pointer-events-none absolute top-6 left-6 text-ivory md:top-8 md:left-8">
        <p className="font-display text-6xl font-light tracking-[0.12em] md:text-7xl">{brand.name}</p>
        <p className="eyebrow mt-3 text-[0.6rem] text-ivory/80">{brand.eyebrow}</p>
      </div>

      <div className="absolute inset-x-6 bottom-6 flex items-end justify-end gap-4 md:inset-x-8 md:bottom-8">
        {onSelect ? (
          <span
            className={`eyebrow pointer-events-none mr-auto hidden items-center gap-3 text-[0.58rem] text-ivory/70 transition-opacity duration-500 xl:flex ${
              highlighted ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="h-px w-8 bg-ivory/60" />
            Hover to discover
          </span>
        ) : null}
        <Button href="#programmes" variant="solid" className="shrink-0">
          {brand.cta}
        </Button>
      </div>
    </div>
  );
}

function DetailsPanel({ brand, visible }: { brand: Brand; visible: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center bg-sand p-8 transition-opacity duration-700 ease-[var(--ease-calm)] xl:p-12 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <DetailsBody brand={brand} visible={visible} compact />
    </div>
  );
}

/** Brand text. When `visible` is provided, children rise in one after another. */
function DetailsBody({ brand, visible, compact = false }: { brand: Brand; visible?: boolean; compact?: boolean }) {
  const animated = visible !== undefined;
  const fx = animated
    ? `transition-[opacity,transform] duration-700 ease-[var(--ease-calm)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`
    : "";
  const delay = (i: number) => (animated && visible ? { transitionDelay: `${150 + i * 70}ms` } : undefined);

  return (
    <>
      <p style={delay(0)} className={`eyebrow flex items-center gap-3 text-stone-deep ${fx}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${brand.accent}`} />
        <span className={brand.accentText}>{brand.name}</span> · {brand.eyebrow}
      </p>
      <h3
        style={delay(1)}
        className={`mt-4 font-display font-normal text-adriatic ${compact ? "text-3xl xl:text-4xl" : "text-3xl md:text-4xl"} ${fx}`}
      >
        {brand.title}
      </h3>
      <p
        style={delay(2)}
        className={`mt-4 max-w-lg leading-relaxed text-muted ${compact ? "text-[0.92rem] xl:text-base" : ""} ${fx}`}
      >
        {brand.body}
      </p>
      <ul className={`mt-6 grid gap-x-6 border-t border-stone/60 ${compact ? "grid-cols-2" : "sm:grid-cols-2"}`}>
        {brand.items.map((item, i) => (
          <li
            key={item}
            style={delay(3 + i)}
            className={`flex items-start gap-3 border-b border-stone/60 text-ink/85 ${
              compact ? "py-2.5 text-[0.85rem] xl:py-3.5 xl:text-[0.95rem]" : "py-3.5 text-[0.95rem]"
            } ${fx}`}
          >
            <LeafBullet className={brand.accentText} />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

function LeafBullet({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={`mt-1 h-3.5 w-3.5 shrink-0 ${className}`} fill="none" stroke="currentColor">
      <path d="M2 14C2 7 7 2 14 2c0 7-5 12-12 12Z" strokeWidth={1} />
      <path d="M2 14 10 6" strokeWidth={0.8} />
    </svg>
  );
}
