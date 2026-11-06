import type { Metadata } from "next";
import { recruitmentSteps, sectors } from "@/lib/vivumGroup";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { BookingBand, Icon, SectionHead } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "International Workforce Recruitment",
  description:
    "VIVUM and Kinster: a long-term, lawful recruitment pipeline from India (including Kerala) and the UAE for employers in Montenegro.",
};

const sectorIcons = ["hands", "shield", "car", "home"] as const;

// Generated with Google Flow
const img = (n: string) => `/images/flow/recruitment/${n}.jpg`;

export default function RecruitmentPage() {
  return (
    <main className="bg-ivory">
      {/* Split hero with partnership card */}
      <section className="container-page grid gap-14 pt-40 pb-24 md:pt-48 lg:grid-cols-12 lg:items-end">
        <FadeIn delay={0.2} className="lg:col-span-7">
          <p className="eyebrow text-sea">VIVUM Group · International Recruitment</p>
          <h1 className="mt-8 heading-display text-adriatic">
            A reliable workforce
            <span className="block text-sea">for Montenegro</span>
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-muted md:text-lg">
            Instead of ad-hoc, short-term hires, a planned and lawful pipeline of pre-screened people from India —
            including Kerala — and the UAE, so employers can build stable teams for the long term.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="olive" className="bg-sea hover:bg-adriatic">
              Discuss a Pilot Group
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.45} className="lg:col-span-5">
          <div className="grid gap-3">
            <div className="rounded-[1.75rem] bg-adriatic p-8 text-ivory">
              <p className="eyebrow text-[0.58rem] text-sage">Montenegro · local intermediary</p>
              <p className="mt-3 font-display text-4xl font-light">VIVUM</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/75">
                Works directly with employers, navigates permits and labour-law requirements, and supports onboarding and
                integration.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 py-1 text-stone-deep">
              <span className="h-px w-10 bg-stone" /> in partnership with <span className="h-px w-10 bg-stone" />
            </div>
            <div className="rounded-[1.75rem] border border-stone/70 p-8">
              <p className="eyebrow text-[0.58rem] text-sea">India & UAE · recruitment partner</p>
              <p className="mt-3 font-display text-4xl font-light text-adriatic">Kinster</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Established recruitment across India (Kerala) and the UAE: sourcing, skills testing, background checks and
                English-proficiency screening.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Wide photograph */}
      <section className="container-page pb-28">
        <div className="hero-reveal relative aspect-[16/9] overflow-hidden rounded-[2rem] md:aspect-[21/9]">
          <ParallaxFill src={img("arrivals")} alt="New team members arriving in Montenegro" preload quality={80} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-adriatic-deep/80 via-adriatic-deep/15 to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-md font-display text-2xl font-light text-ivory md:bottom-10 md:left-10 md:text-3xl">
            Pre-screened people from India and the UAE — prepared before they arrive.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-sand/60 py-28 md:py-36">
        <div className="container-page">
          <SectionHead eyebrow="Workforce categories" title="One partner, four sectors" />
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={0.06 * i} className="flex flex-col rounded-[2rem] bg-ivory p-8">
                <Icon name={sectorIcons[i]} className="h-8 w-8 text-sea" />
                <h3 className="mt-8 font-display text-3xl font-light text-adriatic">{s.name}</h3>
                <ul className="mt-6 space-y-3 border-t border-stone/60 pt-6">
                  {s.roles.map((r) => (
                    <li key={r} className="flex gap-3 text-[0.95rem] text-ink/85">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sea" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8-step pipeline — vertical rail */}
      <section className="bg-adriatic-deep py-28 text-ivory md:py-36">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead tone="light" eyebrow="End-to-end" title="From brief to arrival" lede="A clear process lets employers assess suitability early and gives candidates a realistic picture of the job." />
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                <ParallaxFill src={img("interview")} alt="An interview in English with a candidate" quality={75} sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
          <ol className="relative lg:col-span-7 lg:col-start-6">
            <span aria-hidden className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-ivory/15" />
            {recruitmentSteps.map((s, i) => (
              <Reveal key={s.title} delay={0.04 * i}>
                <li className="relative flex gap-8 pb-10 last:pb-0">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/25 bg-adriatic-deep font-display text-lg text-sage">
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <p className="font-display text-3xl font-light">{s.title}</p>
                    <p className="mt-2 max-w-lg leading-relaxed text-ivory/70">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Retention package */}
      <section className="container-page grid gap-14 py-28 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead eyebrow="Retention" title="Offers people can settle into" lede="A competitive, transparent package improves both attraction and retention. These are starting points for discussion with each employer." />
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <ParallaxFill src={img("orientation")} alt="An orientation session for new team members" quality={75} sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {[
            { icon: "euro", t: "Transparent pay", b: "A target of €1,000+ net per month including lawful overtime, where the role and hours make this achievable." },
            { icon: "home", t: "Accommodation", b: "Employer-provided or subsidised, with the standard and any deductions stated clearly." },
            { icon: "bowl", t: "Meals", b: "Meals provided, or a clearly defined meal allowance." },
            { icon: "car", t: "Transport", b: "Transport to and from the worksite, or an agreed allowance." },
            { icon: "chat", t: "Language orientation", b: "One to three months of basic Montenegrin preparation where the role requires it." },
            { icon: "shield", t: "Written terms", b: "Salary, overtime, hours, rest days, leave and contract length explained before acceptance." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={0.05 * i} className="rounded-[1.5rem] border border-stone/70 p-7">
              <Icon name={x.icon as "euro"} className="h-6 w-6 text-sea" />
              <p className="mt-5 font-display text-2xl text-adriatic">{x.t}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{x.b}</p>
            </Reveal>
          ))}
          <p className="text-[0.82rem] leading-relaxed text-muted sm:col-span-2">
            Pay is not guaranteed for every role. Gross-to-net, minimum wage, overtime and working-time rules are
            validated with a qualified Montenegrin payroll or legal adviser for each position.
          </p>
        </div>
      </section>

      {/* Pilot */}
      <section className="container-page pb-28">
        <Reveal className="relative grid gap-10 overflow-hidden rounded-[2rem] bg-sea p-10 text-ivory md:grid-cols-12 md:p-14">
          <ParallaxFill src={img("terrace")} alt="" quality={70} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-adriatic-deep/90 via-sea/85 to-sea/70" />
          <div className="relative md:col-span-5">
            <p className="eyebrow text-[0.6rem] text-ivory/70">Recommended next step</p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">Start with a pilot group</h2>
            <p className="mt-4 leading-relaxed text-ivory/80">
              Begin with 5–15 candidates for your most urgent roles, review the results together, then scale.
            </p>
          </div>
          <ol className="relative grid gap-4 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            {[
              ["Start small", "One or two urgent job categories and an agreed pilot headcount."],
              ["Agree the scorecard", "Skills, experience, language, documents, salary, benefits and arrival window."],
              ["Review before scaling", "Candidate quality, permit timelines, onboarding and early retention."],
              ["Build a rolling plan", "A forecast for the next 3–6 months once the pilot works."],
            ].map(([t, b], i) => (
              <li key={t} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="font-display text-xl">
                  <span className="mr-2 text-ivory/60">{i + 1}.</span>
                  {t}
                </p>
                <p className="mt-1 text-[0.9rem] text-ivory/75">{b}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <BookingBand
        photo={{ src: img("perast"), alt: "" }}
        title="Build a team that stays."
        body="“Our objective is not just to send workers — it is to help you build a reliable, properly prepared workforce for the long term.”"
        secondary={{ label: "Consulting & Training", href: "/vivum/consulting" }}
      />
    </main>
  );
}
