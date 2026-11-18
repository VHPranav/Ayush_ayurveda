import type { Metadata } from "next";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { photos } from "@/lib/images";
import { euro } from "@/lib/programmes";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, ContentSections, PageIntro, type ContentBlock } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Consultations",
  description:
    "Initial and follow-up Ayurvedic consultations at AYUSH Ayurveda Clinic, Montenegro — the assessment process, what to bring and how to book.",
};

const blocks: ContentBlock[] = [
  {
    id: "assessment",
    title: "The assessment process",
    lede: "Every course of care at AYUSH begins with an individual assessment by a qualified practitioner.",
    body: [
      "Your practitioner uses the traditional Ayurvedic methods of observation, touch and questioning (Darshana, Sparshana and Prasna), including pulse assessment, alongside a review of your medical history, current medicines and lifestyle.",
      "The assessment determines whether Ayurvedic care is appropriate for you, which therapies are suitable, and whether anything should first be discussed with your doctor.",
    ],
    points: [
      "Health history, current diagnoses and medicines",
      "Constitution (Prakriti) and current state (Vikriti)",
      "Diet, sleep, activity and daily routine",
      "Your goals and expectations for care",
      "Suitability, contraindications and any need for referral",
    ],
  },
  {
    id: "bring",
    title: "What to bring",
    lede: "Accurate information helps your practitioner keep your care safe.",
    points: [
      "A list of all current medicines and supplements, with doses",
      "Recent test results, scans or letters from your doctors, if available",
      "Details of any allergies, pregnancy or recent surgery",
      "Comfortable clothing for examination",
    ],
  },
  {
    id: "after",
    title: "After your consultation",
    lede: "You leave with a clear, written plan.",
    body: [
      "Your practitioner explains the recommended therapies, their purpose, duration and risks, and records your consent before any treatment begins. Where a structured programme is appropriate, you will receive a recommendation with durations and indicative pricing.",
      "If your assessment suggests that conventional medical assessment is needed, we will tell you and advise you to contact your doctor before continuing.",
    ],
  },
];

export default function ConsultationsPage() {
  return (
    <main className="bg-ivory">
      <PageIntro
        title="Consultations"
        accent="& assessment"
        lede="An unhurried, practitioner-led consultation is the first step to any treatment at AYUSH Ayurveda Clinic — in person in Montenegro or online."
      />

      <section className="container-page grid items-center gap-12 pb-24 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <ParallaxFill src={photos.nadiPariksha.src} alt={photos.nadiPariksha.alt} quality={75} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl font-light text-adriatic md:text-5xl">Consultation types</h2>
          <dl className="mt-10 space-y-8">
            <div>
              <div className="flex items-baseline gap-3">
                <dt className="font-display text-2xl text-adriatic">Initial Consultation &amp; Assessment</dt>
                <span className="mb-1.5 flex-1 border-b border-dotted border-stone-deep/50" />
                <dd className="font-display text-2xl text-adriatic">{euro(180)}</dd>
              </div>
              <p className="mt-2 text-muted">75–90 minutes · A full assessment and a written, personal care plan.</p>
            </div>
            <div>
              <div className="flex items-baseline gap-3">
                <dt className="font-display text-2xl text-adriatic">Follow-up Consultation</dt>
                <span className="mb-1.5 flex-1 border-b border-dotted border-stone-deep/50" />
                <dd className="font-display text-2xl text-adriatic">{euro(90)}</dd>
              </div>
              <p className="mt-2 text-muted">30 minutes · A review of progress and adjustment of your plan.</p>
            </div>
          </dl>
          <p className="mt-8 text-[0.9rem] text-muted">Consultations are available in person in Montenegro or online.</p>
        </Reveal>
      </section>

      <ContentSections blocks={blocks} />

      <BookingBand
        photo={photos.herbsFlatlay}
        title="Request a consultation."
        body="Tell us a little about yourself and our team will arrange a time with a practitioner."
        secondary={{ label: "Patient information", href: "/patient-information" }}
      />
    </main>
  );
}
