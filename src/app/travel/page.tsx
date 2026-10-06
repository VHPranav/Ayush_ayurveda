import type { Metadata } from "next";
import { photos } from "@/lib/images";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, Eyebrow, Icon, SectionHead } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Travel to Montenegro & FAQs",
  description: "Airports, transfers, entry, climate and practical information for AYUSH and VIVUM guests travelling to the Bay of Kotor.",
};

const airports = [
  { code: "TIV", name: "Tivat Airport", note: "The closest airport to the Bay of Kotor and the most convenient for most guests." },
  { code: "TGD", name: "Podgorica Airport", note: "Montenegro’s capital airport, with year-round connections." },
  { code: "DBV", name: "Dubrovnik Airport", note: "In neighbouring Croatia — a popular alternative that includes a border crossing." },
];

const facts = [
  { icon: "euro", label: "Currency", value: "Euro (€)" },
  { icon: "chat", label: "Language", value: "Montenegrin; English widely spoken in hospitality" },
  { icon: "shield", label: "Entry", value: "UK and EU citizens can usually visit visa-free for short stays — always check current requirements before travelling" },
  { icon: "sun", label: "Climate", value: "Mediterranean on the coast: warm, dry summers and mild, wetter winters" },
  { icon: "globe", label: "Time zone", value: "Central European Time (UTC+1, UTC+2 in summer)" },
  { icon: "drop", label: "Power", value: "230V, European two-pin plugs (types C and F)" },
] as const;

const pack = ["Loose, comfortable clothing for Yoga and treatments", "A list of your current medications and any recent medical reports", "Layers for cooler mountain evenings", "Swimwear and sun protection", "Comfortable walking shoes", "An open mind and time to rest"];

const faqs = [
  { q: "Do I need a consultation before booking a programme?", a: "Yes. Every AYUSH programme begins with a consultation and assessment — in London, online or on arrival — so that your plan and its length suit you." },
  { q: "Is accommodation included in the programme price?", a: "No. Programme prices cover your consultations, treatments, Yoga, nutrition planning and medicine allowance. Hotel accommodation and full-board meals at Hyatt Regency Kotor Bay are priced separately." },
  { q: "What is the medicine allowance?", a: "An allowance for traditional preparations prescribed by your Vaidya — such as Kashayam, Thailas and Arishta — which helps you continue your care at home. It scales with the length of your programme." },
  { q: "Can I book Panchakarma as a single treatment?", a: "No. Clinical cleansing therapies are only offered within physician-supervised, multi-day programmes and after an eligibility assessment." },
  { q: "What is the difference between AYUSH and VIVUM?", a: "AYUSH provides practitioner-led therapeutic Ayurveda and Yoga Therapy. VIVUM offers wellness, Yoga and retreat experiences — relaxation and healthy living rather than treatment." },
  { q: "Should I keep taking my usual medication?", a: "Bring all current medications and continue them unless your own doctor advises otherwise. Your Vaidya reviews them at assessment and coordinates with your conventional care where needed." },
  { q: "What happens after I go home?", a: "You leave with a practical home plan and receive a 30-day follow-up review — in London, online or by arrangement." },
  { q: "Can you help with airport transfers?", a: "Let us know your flight details when you book and we will advise on the best transfer from Tivat, Podgorica or Dubrovnik." },
];

export default function TravelPage() {
  return (
    <main className="bg-ivory">
      <section className="container-page pt-40 pb-16 md:pt-48">
        <div className="grid gap-10 lg:grid-cols-12">
          <FadeIn delay={0.2} className="lg:col-span-7">
            <Eyebrow>Plan your stay</Eyebrow>
            <h1 className="mt-6 heading-display text-adriatic">
              Travel to
              <span className="block text-olive">Montenegro</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.45} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted md:text-lg">
              Practical information for guests travelling from the UK and Europe to Hyatt Regency Kotor Bay — for AYUSH
              programmes and VIVUM retreats alike.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Airports */}
      <section className="container-page pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {airports.map((a, i) => (
            <Reveal key={a.code} delay={0.08 * i} className={`rounded-[2rem] p-9 ${i === 0 ? "bg-adriatic text-ivory" : "bg-sand text-adriatic"}`}>
              <div className="flex items-start justify-between">
                <span className="font-display text-7xl font-light tracking-wide">{a.code}</span>
                <Icon name="plane" className={`h-7 w-7 ${i === 0 ? "text-sage" : "text-olive"}`} />
              </div>
              <p className="mt-10 font-display text-2xl">{a.name}</p>
              <p className={`mt-2 leading-relaxed ${i === 0 ? "text-ivory/75" : "text-muted"}`}>{a.note}</p>
              {i === 0 && <p className="eyebrow mt-6 text-[0.56rem] text-sage">Recommended</p>}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Practical facts + packing */}
      <section className="bg-sand/60 py-28 md:py-36">
        <div className="container-page grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead eyebrow="Good to know" title="The practicalities" />
            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={0.05 * i} className="flex gap-4">
                  <Icon name={f.icon} className="mt-1 h-6 w-6 shrink-0 text-olive" />
                  <div>
                    <dt className="eyebrow text-[0.6rem] text-stone-deep">{f.label}</dt>
                    <dd className="mt-2 leading-relaxed text-ink/85">{f.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal delay={0.15} className="rounded-[2rem] bg-ivory p-10 lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-[0.6rem] text-olive">What to bring</p>
            <ul className="mt-6 space-y-4">
              {pack.map((p) => (
                <li key={p} className="flex gap-3 text-ink/85">
                  <Icon name="leaf" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="container-page grid scroll-mt-24 gap-12 py-28 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead eyebrow="Questions" title="FAQs" />
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.03 * i}>
              <details className="group border-b border-stone/70 py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl text-adriatic md:text-[1.7rem]">
                  {f.q}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone transition-transform duration-500 group-open:rotate-45">
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.2}>
                      <path d="M10 3v14M3 10h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <BookingBand photo={photos.kotorRooftops} title="Ready to plan your journey?" secondary={{ label: "AYUSH Montenegro", href: "/montenegro" }} />
    </main>
  );
}
