import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "VIVUM Montenegro — Ayurveda Wellness & Yoga",
  description:
    "A sanctuary for wellness, Yoga and Ayurveda in Montenegro: seasonal retreats, corporate wellbeing and hotel wellness. Arrive. Breathe. Reconnect. Renew.",
};

const philosophy = ["Balance", "Relaxation", "Movement", "Nourishment", "Rest", "Mindfulness", "Connection"];

const seasons = [
  { season: "Spring", name: "Renew & Rebalance", months: "March – May", photo: photos.oliveBranch, body: "Fresh mornings, gentle Yoga and light seasonal food as the coast comes back to life." },
  { season: "Summer", name: "Adriatic Wellness Escape", months: "June – August", photo: photos.yogaByTheSea, body: "Sea swims, sunrise practice and long evenings — wellness with the Adriatic at its heart." },
  { season: "Autumn", name: "Stress Reset & Reconnect", months: "September – November", photo: photos.mountainLake, body: "Quieter bays and mountain walks to slow down, reset and reconnect." },
  { season: "Winter", name: "Deep Rest & Renewal", months: "December – February", photo: photos.stoneBath, body: "Warming therapies, restorative Yoga and deep rest in the calm of the off-season." },
];

const audiences = [
  { icon: "hands", name: "Individuals", body: "Personal time to rest and reset." },
  { icon: "sparkle", name: "Couples", body: "Shared retreats and treatments." },
  { icon: "yoga", name: "Groups", body: "Friends, families and Yoga groups." },
  { icon: "globe", name: "Corporate teams", body: "Wellbeing days and leadership retreats." },
  { icon: "home", name: "Hotels & resorts", body: "Wellness programmes for your guests." },
] as const;

const bookingSteps = ["Choose a retreat", "Choose dates", "Number of guests", "Accommodation", "Wellness preferences", "Deposit", "Confirmation"];

export default function VivumPage() {
  return (
    <main className="bg-[#eef2f1] text-adriatic">
      {/* Airy hero */}
      <section className="container-page grid gap-12 pt-36 pb-24 md:pt-44 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow fade-in text-sea" style={{ animationDelay: "0.3s" }}>
            VIVUM Montenegro · Ayurveda Wellness &amp; Yoga
          </p>
          <h1 className="mt-8 heading-display">
            {["Arrive.", "Breathe.", "Reconnect.", "Renew."].map((w, i) => (
              <span key={w} className="block overflow-hidden pb-[0.08em]">
                <span className={`rise-line block ${i % 2 ? "text-sea" : ""}`} style={{ animationDelay: `${0.4 + i * 0.15}s` }}>
                  {w}
                </span>
              </span>
            ))}
          </h1>
        </div>
        <div className="hero-reveal relative aspect-[3/4] overflow-hidden rounded-t-full lg:col-span-4 lg:col-start-9">
          <Image src={photos.svetiStefan.src} alt={photos.svetiStefan.alt} fill preload quality={80} sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Philosophy band */}
      <section aria-label="Wellness philosophy" className="overflow-hidden border-y border-sea/20 bg-sea py-6 text-ivory">
        <div className="animate-marquee flex w-max gap-12">
          {[...philosophy, ...philosophy, ...philosophy, ...philosophy].map((w, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-3xl font-light whitespace-nowrap md:text-4xl">
              {w}
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            </span>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="container-page grid gap-10 py-28 md:py-36 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-sea">A sanctuary in Montenegro</p>
          <h2 className="mt-6 heading-display">Wellness, Yoga &amp; Ayurveda — at your own pace</h2>
        </Reveal>
        <Reveal delay={0.15} className="space-y-5 self-end leading-relaxed text-muted md:text-lg lg:col-span-5 lg:col-start-8">
          <p>
            VIVUM Montenegro is a contemporary wellness destination inspired by the timeless principles of Ayurveda, Yoga
            and mindful living.
          </p>
          <p>
            Set in the natural beauty of Montenegro, VIVUM brings together Ayurveda wellness, Yoga, relaxation, healthy
            living and retreat experiences — a space to slow down, reconnect and restore balance in everyday life.
          </p>
        </Reveal>
      </section>

      {/* Seasonal retreats */}
      <section id="retreats" className="scroll-mt-24 pb-28 md:pb-36">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-sea">Year-round retreats</p>
            <h2 className="mt-6 heading-display">Four seasons of renewal</h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            {["3 days", "5 days", "7 days", "14 days"].map((d) => (
              <span key={d} className="rounded-full border border-sea/40 px-4 py-2 text-[0.9rem] text-sea">
                {d}
              </span>
            ))}
          </Reveal>
        </div>
        <div className="container-page mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {seasons.map((s, i) => (
            <Reveal key={s.season} delay={0.08 * i}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                <Image src={s.photo.src} alt={s.photo.alt} fill quality={70} sizes="(min-width: 1280px) 24vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/85 via-adriatic-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                  <p className="eyebrow text-[0.58rem] text-sage">
                    {s.season} · {s.months}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-light">{s.name}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-[0.92rem] leading-relaxed text-ivory/80 opacity-0 transition-all duration-700 group-hover:max-h-40 group-hover:opacity-100">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Audiences + corporate/hotel */}
      <section className="bg-ivory py-28 md:py-36">
        <div className="container-page">
          <Reveal className="text-center">
            <p className="eyebrow text-sea">Who VIVUM is for</p>
            <h2 className="mx-auto mt-6 max-w-3xl heading-display">Personalised wellness, for every kind of stay</h2>
          </Reveal>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-sea/20 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a, i) => (
              <Reveal key={a.name} delay={0.06 * i} className="bg-ivory p-8 text-center">
                <Icon name={a.icon} className="mx-auto h-8 w-8 text-sea" />
                <p className="mt-5 font-display text-2xl">{a.name}</p>
                <p className="mt-2 text-[0.92rem] text-muted">{a.body}</p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {[
              { title: "Corporate wellness", body: "Wellbeing days, team retreats and leadership programmes combining Yoga, mindful movement, healthy food and time in nature.", photo: photos.kotorRooftops },
              { title: "Hotel wellness", body: "Ayurveda-inspired wellness menus, Yoga and retreat programmes delivered in partnership with hotels and resorts in Montenegro.", photo: photos.budvaHotel },
            ].map((c, i) => (
              <Reveal key={c.title} delay={0.1 * i} className="group relative flex min-h-[26rem] items-end overflow-hidden rounded-[2rem] p-10 text-ivory">
                <Image src={c.photo.src} alt={c.photo.alt} fill quality={70} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-calm)] group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/90 to-adriatic-deep/10" />
                <div className="relative">
                  <h3 className="font-display text-4xl font-light">{c.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-ivory/80">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking journey */}
      <section className="container-page py-28 md:py-36">
        <Reveal>
          <p className="eyebrow text-sea">How booking works</p>
          <h2 className="mt-6 heading-display">From enquiry to arrival</h2>
        </Reveal>
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
          {bookingSteps.map((s, i) => (
            <Reveal key={s} delay={0.05 * i}>
              <li className="relative border-t-2 border-sea/30 pt-6">
                <span className="absolute -top-[0.45rem] left-0 h-3 w-3 rounded-full bg-sea" />
                <p className="font-display text-3xl font-light text-sea">{i + 1}</p>
                <p className="mt-2 text-ink/85">{s}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.2} className="mt-16 flex flex-col gap-6 rounded-[2rem] bg-adriatic p-10 text-ivory md:flex-row md:items-center md:justify-between md:p-14">
          <div>
            <h3 className="font-display text-4xl font-light">Plan your VIVUM retreat</h3>
            <p className="mt-3 max-w-xl text-ivory/75">
              VIVUM offers wellness and retreat experiences, not medical treatment. Looking for therapeutic care? Explore
              AYUSH programmes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact?path=vivum" variant="solid">
              Enquire About a Retreat
            </Button>
            <Button href="/programmes" variant="outline-light">
              AYUSH Programmes
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
