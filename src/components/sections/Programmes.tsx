import Image from "next/image";
import Link from "next/link";
import { photos, type Photo } from "@/lib/images";
import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Button";

const programmes: { title: string; subtitle: string; body: string; brand: string; photo: Photo }[] = [
  {
    title: "Therapeutic Programmes",
    subtitle: "Personalised Ayurveda & Yoga Therapy",
    body: "Professional consultation and individually prescribed treatment in calm spaces of stone, wood and natural materials.",
    brand: "AYUSH",
    photo: photos.treatmentRoom,
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
    photo: photos.harvestTable,
  },
  {
    title: "Wellness Retreats",
    subtitle: "Exclusive Locations in Montenegro",
    body: "Immersive stays at selected premium hotels and partner locations on the coast and in the mountains.",
    brand: "VIVUM",
    photo: photos.hotelSpa,
  },
];

const offsets = ["lg:mt-0", "lg:mt-24", "lg:mt-10", "lg:mt-32"];

export function Programmes() {
  return (
    <section id="programmes" className="bg-sand/60 py-24 md:py-36">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-stone-deep">
              <span className="h-px w-10 bg-gold" />
              Explore
            </p>
            <h2 className="mt-6 heading-display text-adriatic">
              Featured
              <span className="block">Programmes</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="leading-relaxed text-muted">
              Therapeutic care through AYUSH and wellness journeys through VIVUM — each tailored to the individual after
              a personal consultation.
            </p>
            <Link
              href="#programmes"
              className="group mt-6 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.22em] text-adriatic uppercase"
            >
              View All Programmes <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:mt-20 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {programmes.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className={`w-[80%] shrink-0 snap-start md:w-auto ${offsets[i]}`}>
              <Link href="#programmes" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm transition-transform duration-700 ease-[var(--ease-calm)] group-hover:-translate-y-1.5">
                  <Image
                    src={p.photo.src}
                    alt={p.photo.alt}
                    fill
                    quality={70}
                    sizes="(min-width: 1024px) 24vw, (min-width: 768px) 45vw, 80vw"
                    className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-adriatic-deep/0 transition-colors duration-700 group-hover:bg-adriatic-deep/10" />
                  <span className="eyebrow absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1.5 text-[0.58rem] text-adriatic backdrop-blur">
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
