import { ParallaxFill } from "@/components/ui/ParallaxFill";
import type { Photo } from "@/lib/images";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

/** Display heading + optional lede. */
export function SectionHead({
  title,
  lede,
  tone = "dark",
  align = "left",
  className = "",
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      <h2 className={`heading-display ${tone === "light" ? "text-ivory" : "text-adriatic"}`}>{title}</h2>
      {lede && (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${center ? "mx-auto" : ""} ${
            tone === "light" ? "text-ivory/75" : "text-muted"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

/** Closing booking band used at the foot of inner pages. */
export function BookingBand({
  title = "Begin with a conversation.",
  body = "Every AYUSH programme starts with a personal consultation. Tell us what you are looking for and our team will guide you.",
  photo,
  secondary,
}: {
  title?: string;
  body?: string;
  photo: Photo;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-adriatic-deep py-28 text-ivory md:py-40">
      <ParallaxFill src={photo.src} alt="" quality={75} sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-adriatic-deep/90 via-adriatic-deep/60 to-adriatic-deep/20" />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <h2 className="heading-display">{title}</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/80 md:text-lg">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="solid">
              Book a Consultation
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="outline-light">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Light-top page masthead — same layout as the Conditions and Contact pages. */
export function PageIntro({
  title,
  accent,
  lede,
  note,
}: {
  title: React.ReactNode;
  accent?: React.ReactNode;
  lede?: React.ReactNode;
  /** Shield callout shown instead of (or below) the lede. */
  note?: React.ReactNode;
}) {
  return (
    <section className="container-page pt-40 pb-16 md:pt-48">
      <div className="grid gap-12 lg:grid-cols-12">
        <FadeIn delay={0.2} className="lg:col-span-7">
          <h1 className="heading-display text-adriatic">
            {title}
            {accent && <span className="block text-olive">{accent}</span>}
          </h1>
        </FadeIn>
        <FadeIn delay={0.45} className="self-end lg:col-span-4 lg:col-start-9">
          {lede && <p className="leading-relaxed text-muted md:text-lg">{lede}</p>}
          {note && (
            <div className={`flex gap-4 rounded-2xl border border-olive/30 bg-olive/5 p-6 ${lede ? "mt-6" : ""}`}>
              <Icon name="shield" className="h-6 w-6 shrink-0 text-olive" />
              <p className="text-[0.95rem] leading-relaxed text-ink/80">{note}</p>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export type ContentBlock = {
  id: string;
  title: string;
  lede?: string;
  /** Paragraphs, then an optional bullet list. */
  body?: string[];
  points?: string[];
};

/** Numbered content sections — same layout as the Treatments menu tiers. */
export function ContentSections({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <section key={b.id} id={b.id} className="scroll-mt-36 border-t border-stone/60 py-24">
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="font-display text-7xl font-light text-gold/70">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 font-display text-4xl font-light text-adriatic md:text-5xl">{b.title}</h2>
              {b.lede && <p className="mt-4 max-w-xs leading-relaxed text-muted">{b.lede}</p>}
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8">
              {b.body?.map((p) => (
                <p key={p} className="mb-5 leading-relaxed text-ink/85 md:text-lg">
                  {p}
                </p>
              ))}
              {b.points && (
                <ul className="border-t border-stone/50">
                  {b.points.map((pt) => (
                    <li key={pt} className="flex gap-4 border-b border-stone/50 py-4 text-ink/85">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}

/** Dark clinical notice — same style as the Panchakarma note on the Treatments page. */
export function ClinicalNote({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="container-page pb-28">
      <Reveal className="grid gap-8 rounded-[2rem] bg-adriatic-deep p-10 text-ivory md:grid-cols-[auto_1fr] md:p-14">
        <Icon name="shield" className="h-10 w-10 text-gold" />
        <div>
          <h2 className="font-display text-3xl font-light md:text-4xl">{title}</h2>
          <div className="mt-4 max-w-3xl leading-relaxed text-ivory/75">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}

/** Line icon set used across inner pages. */
export function Icon({ name, className = "h-6 w-6" }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {icons[name]}
    </svg>
  );
}

const icons = {
  leaf: <><path d="M4 20C4 11 10 4 20 4c0 10-7 16-16 16Z" /><path d="M4 20 14 10" /></>,
  consult: <><path d="M4 5h11v8H8l-4 3V5Z" /><path d="M15 9h5v8l-3-2h-6v-2" /></>,
  hands: <><path d="M5 14c2-3 5-4 7-4s5 1 7 4" /><path d="M8 17c1.5 1.3 2.7 2 4 2s2.5-.7 4-2" /><circle cx="12" cy="6" r="2" /></>,
  yoga: <><circle cx="12" cy="5" r="2" /><path d="M12 8v6M6 11l6 3 6-3M8 20l4-6 4 6" /></>,
  bowl: <><path d="M4 11h16a8 8 0 0 1-16 0Z" /><path d="M9 7c0-1.5 1-2 1-3M13 7c0-1.5 1-2 1-3" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4M9 15l2 2 4-4" /></>,
  moon: <path d="M19 15A8 8 0 0 1 9 5a8 8 0 1 0 10 10Z" />,
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  mountain: <><path d="M3 19 9 9l4 6 3-4 5 8Z" /><path d="M3 21c3-1.5 6 1.5 9 0s6-1.5 9 0" /></>,
  plane: <path d="m3 14 7-2 4-8 2 1-2 7 6 2 1 2-7-1-3 5-2-1 1-4-6-1Z" />,
  car: <><path d="M5 16V11l2-4h10l2 4v5" /><path d="M3 16h18M7 19v-3M17 19v-3" /></>,
  home: <><path d="M4 11 12 4l8 7v9H4Z" /><path d="M10 20v-5h4v5" /></>,
  globe: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.5 3 2.5 13 0 16M12 4c-2.5 3-2.5 13 0 16" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" /></>,
  euro: <><path d="M17 6.5A6 6 0 1 0 17 17.5" /><path d="M5 10h8M5 14h8" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4Z" /></>,
  shield: <><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z" /><path d="m9 12 2 2 4-4" /></>,
  sparkle: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></>,
};
