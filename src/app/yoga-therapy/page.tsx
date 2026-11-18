import type { Metadata } from "next";
import { coverSizes, photos } from "@/lib/images";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, ContentSections, PageIntro, type ContentBlock } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Yoga Therapy",
  description:
    "Therapeutic Yoga at AYUSH Ayurveda Clinic, Montenegro — services, suitability and practitioner information.",
};

const blocks: ContentBlock[] = [
  {
    id: "services",
    title: "Services",
    points: [
      "Individual therapeutic Yoga sessions",
      "Pranayama (breathwork)",
      "Guided meditation and Yoga Nidra",
      "Small-group therapeutic sessions",
      "Yoga integrated within treatment programmes",
    ],
  },
  {
    id: "suitability",
    title: "Suitability",
    lede: "Sessions are adapted to your ability and health.",
    body: [
      "Therapeutic Yoga is planned after your consultation and adapted to your mobility, any injuries and your treatment plan. Please tell us about pregnancy, recent surgery, heart or blood-pressure conditions, or pain during movement. You can stop or rest at any time.",
    ],
  },
  {
    id: "practitioners",
    title: "Practitioners",
    body: [
      "Sessions are led by Yoga therapists working with your Ayurvedic physician. Practitioner profiles and qualifications will be published here once verified.",
    ],
  },
];

export default function YogaTherapyPage() {
  return (
    <main className="bg-ivory">
      <PageIntro
        title="Yoga Therapy"
        accent="not exercise"
        lede="Therapeutic Hatha-based Yoga, Pranayama, meditation and Yoga Nidra — adapted to you and integrated with your care plan."
      />

      <section className="container-page pb-24">
        <Reveal>
          <ParallaxImage
            photo={photos.yogaTherapy}
            quality={80}
            sizes={coverSizes(photos.yogaTherapy, 21 / 9, [[null, 100]], 1.24)}
            className="aspect-[21/9] rounded-[2rem]"
          />
        </Reveal>
      </section>

      <ContentSections blocks={blocks} />

      <BookingBand photo={photos.yogaByTheSea} title="Start with a consultation." body="Your practitioner will recommend the right Yoga Therapy for you." />
    </main>
  );
}
