import type { Metadata } from "next";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, ClinicalNote, ContentSections, PageIntro, type ContentBlock } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Panchakarma",
  description:
    "Physician-supervised Panchakarma at AYUSH Ayurveda Clinic, Montenegro — individual assessment, preparation, procedures, monitoring, suitability and aftercare.",
};

const blocks: ContentBlock[] = [
  {
    id: "assessment",
    title: "Individual assessment",
    lede: "Panchakarma is offered only after a physician has assessed your suitability.",
    body: [
      "Your Ayurvedic physician reviews your health history, current medicines, constitution and present condition, and decides whether Panchakarma is appropriate — and which procedures, if any, are suitable for you.",
    ],
  },
  {
    id: "preparation",
    title: "Preparation (Purvakarma)",
    lede: "The preparatory phase readies the body for the main procedures.",
    points: [
      "Internal oleation (Snehapana) where prescribed",
      "External oil therapies such as Abhyanga",
      "Therapeutic warming (Swedana)",
      "An adjusted diet and daily routine",
    ],
  },
  {
    id: "procedures",
    title: "Procedures (Pradhanakarma)",
    lede: "The classical procedures are selected individually — not every patient receives every procedure.",
    points: [
      "Vamana — therapeutic emesis",
      "Virechana — therapeutic purgation",
      "Vasti — medicated enema therapy",
      "Nasya — nasal administration",
      "Raktamokshana — offered only where permitted and clinically appropriate",
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    lede: "You are supervised throughout.",
    body: [
      "Your physician reviews you daily, adjusts or stops procedures if needed, and records your progress. Any concern that requires conventional medical attention is escalated without delay.",
    ],
  },
  {
    id: "suitability",
    title: "Suitability",
    lede: "Panchakarma is not suitable for everyone.",
    body: [
      "Some procedures may be unsuitable during pregnancy, in frailty, with certain heart, kidney or digestive conditions, after recent surgery or with some medicines. Your physician will explain any contraindications that apply to you.",
    ],
  },
  {
    id: "aftercare",
    title: "Aftercare (Paschatkarma)",
    lede: "Recovery continues after the procedures end.",
    points: [
      "A graduated return to normal diet (Samsarjana Krama)",
      "Rest and routine guidance for the following days",
      "A written home plan",
      "A follow-up review",
    ],
  },
];

export default function PanchakarmaPage() {
  return (
    <main className="bg-ivory">
      <PageIntro
        title="Panchakarma"
        accent="Chikitsa"
        lede="Traditional Ayurvedic cleansing and therapeutic programmes carried out according to individual needs and professional assessment."
        note="Panchakarma is never sold as a stand-alone service. It is offered only within physician-supervised, multi-day programmes after an eligibility assessment."
      />

      <section className="container-page pb-24">
        <Reveal className="relative aspect-[21/9] overflow-hidden rounded-[2rem]">
          <ParallaxFill src={photos.pindaSweda.src} alt={photos.pindaSweda.alt} quality={80} sizes="100vw" className="object-cover" />
        </Reveal>
      </section>

      <ContentSections blocks={blocks} />

      <ClinicalNote title="Realistic expectations">
        <p>
          Panchakarma is a traditional Ayurvedic treatment process. Individual responses vary, and we do not promise or
          guarantee specific outcomes. Ayurvedic care supports — and does not replace — conventional medical care.
        </p>
      </ClinicalNote>

      <BookingBand
        photo={photos.stoneBath}
        title="Begin with an assessment."
        body="A consultation will establish whether Panchakarma is right for you."
        secondary={{ label: "Panchakarma programme", href: "/programmes/complete-detox-panchakarma" }}
      />
    </main>
  );
}
