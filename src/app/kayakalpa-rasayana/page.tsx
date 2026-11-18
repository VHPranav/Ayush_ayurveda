import type { Metadata } from "next";
import { ParallaxFill } from "@/components/ui/ParallaxFill";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, ClinicalNote, ContentSections, PageIntro, type ContentBlock } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Kayakalpa & Rasayana",
  description:
    "Kayakalpa and Rasayana at AYUSH Ayurveda Clinic, Montenegro — classical foundations, eligibility, programme stages, supervision and realistic expectations.",
};

const blocks: ContentBlock[] = [
  {
    id: "foundations",
    title: "Classical foundations",
    lede: "Rasayana is one of the eight classical branches of Ayurveda.",
    body: [
      "In the classical texts, Rasayana describes therapies, diet and conduct intended to support strength, vitality and wellbeing through life. Kayakalpa is a traditional, structured way of delivering Rasayana care over an extended period.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    lede: "Programmes are offered only after a physician’s assessment.",
    body: [
      "Your physician will consider your health history, current medicines and present condition. Rasayana care may be preceded by preparatory or cleansing therapies, and may not be suitable for everyone.",
    ],
  },
  {
    id: "stages",
    title: "Programme stages",
    points: [
      "Initial consultation and assessment",
      "Preparation, which may include selected Panchakarma procedures",
      "Rasayana therapies, diet and daily routine",
      "Supporting therapies such as Abhyanga, Pizhichil and Varma",
      "Therapeutic Yoga, Pranayama and meditation",
      "Final review, home plan and follow-up",
    ],
  },
  {
    id: "supervision",
    title: "Supervision",
    lede: "Every stage is physician-led.",
    body: [
      "Your physician supervises the programme, reviews you regularly and adjusts care as needed. Any herbal preparations are prescribed individually, with attention to interactions with your current medicines.",
    ],
  },
];

export default function KayakalpaPage() {
  return (
    <main className="bg-ivory">
      <PageIntro
        title="Kayakalpa"
        accent="& Rasayana"
        lede="Traditional Ayurvedic rejuvenation care, delivered as a supervised, individually planned programme."
      />

      <section className="container-page pb-24">
        <Reveal className="relative aspect-[21/9] overflow-hidden rounded-[2rem]">
          <ParallaxFill src={photos.herbalOil.src} alt={photos.herbalOil.alt} quality={80} sizes="100vw" className="object-cover" />
        </Reveal>
      </section>

      <ContentSections blocks={blocks} />

      <ClinicalNote title="Realistic expectations">
        <p>
          Rasayana is a traditional approach to supporting wellbeing. It does not reverse ageing or prevent disease, and
          we make no such claims. Individual experiences vary.
        </p>
      </ClinicalNote>

      <BookingBand
        photo={photos.abhyanga}
        title="Begin with a consultation."
        body="Your physician will advise whether a Kayakalpa programme is appropriate for you."
        secondary={{ label: "Kaya Kalpa programme", href: "/programmes/kaya-kalpa" }}
      />
    </main>
  );
}
