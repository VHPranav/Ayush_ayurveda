import type { Metadata } from "next";
import { photos } from "@/lib/images";
import { BookingBand, ContentSections, PageIntro, type ContentBlock } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "FAQs, preparation, risks, cancellation terms, privacy and follow-up for patients of AYUSH Ayurveda Clinic, Montenegro.",
};

// Draft — cancellation terms and privacy details must reflect the registered entity
// and be approved before launch (strategy plan §8, §14).
const blocks: ContentBlock[] = [
  {
    id: "faqs",
    title: "Frequently asked questions",
    points: [
      "Do I need a consultation first? — Yes. Every treatment and programme begins with an assessment.",
      "Can I continue my current medicines? — Yes. Never stop prescribed medicines without your doctor’s advice.",
      "Can I have a consultation online? — Yes. Initial and follow-up consultations are available online.",
      "Is Ayurveda a replacement for my doctor? — No. Ayurvedic care supports, and does not replace, conventional care.",
    ],
  },
  {
    id: "preparation",
    title: "Preparing for your visit",
    points: [
      "Bring a list of medicines, supplements and recent medical reports",
      "Avoid a heavy meal just before treatment",
      "Wear comfortable clothing; oil therapies can mark clothes",
      "Allow time to rest after treatment",
    ],
  },
  {
    id: "risks",
    title: "Risks",
    body: [
      "Most Ayurvedic therapies are well tolerated, but some carry risks — such as skin reactions to oils, dizziness after heat therapies, or digestive effects during Panchakarma. Your practitioner will explain the risks of each recommended treatment before you consent.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation terms",
    body: [
      "Full cancellation and refund terms are provided with your booking confirmation. Please give as much notice as possible if you need to cancel or rearrange an appointment.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    body: [
      "Your health information is confidential. Clinical records are kept securely, accessed only by the staff involved in your care, and are not used for marketing. Our full privacy notice identifies the data controller and explains your rights.",
    ],
  },
  {
    id: "follow-up",
    title: "Follow-up",
    body: [
      "After treatment or a programme you receive a written home plan and a follow-up review, usually after 30 days, in person or online.",
    ],
  },
];

export default function PatientInformationPage() {
  return (
    <main className="bg-ivory">
      <PageIntro title="Patient" accent="information" lede="Everything you need to know before, during and after your care at AYUSH Ayurveda Clinic." />
      <ContentSections blocks={blocks} />
      <div className="pb-4" />
      <BookingBand photo={photos.herbsFlatlay} />
    </main>
  );
}
