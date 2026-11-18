import type { Metadata } from "next";
import { photos } from "@/lib/images";
import { BookingBand, ContentSections, PageIntro, type ContentBlock } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Clinical Governance",
  description:
    "Patient safety, consent, scope of practice, medicines policy, escalation and complaints at AYUSH Ayurveda Clinic, Montenegro.",
};

// Draft policy summaries — to be reviewed and approved by the clinic's responsible
// clinician and legal adviser before launch (strategy plan §8, §13).
const blocks: ContentBlock[] = [
  {
    id: "safety",
    title: "Patient safety",
    body: [
      "Every patient is assessed before treatment. Therapies are selected for suitability, delivered by trained staff and reviewed regularly. We keep clinical records for every patient and stop or adjust treatment if any concern arises.",
    ],
  },
  {
    id: "consent",
    title: "Consent",
    body: [
      "Before any treatment, your practitioner explains its purpose, process, duration, risks and alternatives. We record your informed consent, and you may withdraw it at any time.",
    ],
  },
  {
    id: "scope",
    title: "Scope of practice",
    body: [
      "AYUSH provides traditional Ayurvedic assessment and care. We do not diagnose or treat conditions outside that scope, and Ayurvedic care does not replace conventional medical care. Practitioners work only within their verified qualifications and the requirements that apply in Montenegro.",
      "We do not promise cures or guaranteed outcomes.",
    ],
  },
  {
    id: "medicines",
    title: "Medicines policy",
    body: [
      "Any herbal preparations are prescribed individually after assessment, sourced from documented suppliers and labelled. We ask about all your current medicines and supplements to avoid interactions, and we never advise you to stop medicines prescribed by your doctor.",
    ],
  },
  {
    id: "escalation",
    title: "Escalation & referral",
    body: [
      "If assessment or treatment raises a concern that needs conventional medical attention, we will tell you clearly, advise you to see your doctor or seek urgent care, and pause treatment where appropriate. In an emergency, call 124 (ambulance) or 112.",
    ],
  },
  {
    id: "complaints",
    title: "Complaints",
    body: [
      "If you are unhappy with any part of your care, please tell us. Complaints can be made in person, by email or by phone; we will acknowledge them promptly, investigate fairly and reply in writing.",
    ],
  },
];

export default function ClinicalGovernancePage() {
  return (
    <main className="bg-ivory">
      <PageIntro
        title="Clinical"
        accent="governance"
        lede="How AYUSH Ayurveda Clinic keeps patients safe — and what you can expect from us."
      />
      <ContentSections blocks={blocks} />
      <div className="pb-4" />
      <BookingBand photo={photos.panchakarmaRoom} title="Questions about your care?" body="Contact the clinic and we will be glad to help." />
    </main>
  );
}
