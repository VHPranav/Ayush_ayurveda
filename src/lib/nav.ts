// Site navigation — AYUSH Ayurveda Clinic structure from the Montenegro website
// strategy plan (§5).
export type NavItem = {
  label: string;
  href: string;
  /** Opens another website (in a new tab). */
  external?: boolean;
  /** Shown in the menu but not linked yet (destination to be added later). */
  pending?: boolean;
  children?: { label: string; href: string; note?: string }[];
};

/** AYUSH's UK centre has its own website. */
export const UK_SITE = "https://ayushuk.com";

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "/ayush",
    children: [
      { label: "About AYUSH", href: "/ayush", note: "Philosophy, heritage and the clinic" },
      { label: "Our Practitioners", href: "/practitioners", note: "Qualifications and scope of practice" },
      { label: "Clinical Governance", href: "/clinical-governance", note: "Safety, consent and complaints" },
      { label: "Patient Information", href: "/patient-information", note: "FAQs, preparation and terms" },
    ],
  },
  { label: "Consultations", href: "/consultations" },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "All Treatments", href: "/treatments", note: "The Ayurvedic treatment menu" },
      { label: "Panchakarma", href: "/panchakarma", note: "Physician-supervised programmes" },
      { label: "Kayakalpa & Rasayana", href: "/kayakalpa-rasayana", note: "Classical rejuvenation care" },
      { label: "Yoga Therapy", href: "/yoga-therapy", note: "Therapeutic Yoga and Pranayama" },
    ],
  },
  { label: "Conditions", href: "/conditions" },
  { label: "Programmes", href: "/programmes" },
  // VIVUM: link to be added once its website is live.
  { label: "Vivum", href: "#vivum", pending: true },
  { label: "Ayush UK", href: UK_SITE, external: true },
  { label: "Contact", href: "/contact" },
];

export const footerGroups = [
  {
    title: "Clinic",
    links: [
      { label: "About AYUSH", href: "/ayush" },
      { label: "Our Practitioners", href: "/practitioners" },
      { label: "Consultations", href: "/consultations" },
      { label: "Clinical Governance", href: "/clinical-governance" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Treatments", href: "/treatments" },
      { label: "Panchakarma", href: "/panchakarma" },
      { label: "Kayakalpa & Rasayana", href: "/kayakalpa-rasayana" },
      { label: "Yoga Therapy", href: "/yoga-therapy" },
      { label: "Conditions", href: "/conditions" },
      { label: "Programmes", href: "/programmes" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "Patient Information", href: "/patient-information" },
      { label: "Request a Consultation", href: "/contact" },
    ],
  },
];

/** Pages whose top section is light — the header starts in its solid (dark text) state. */
export const lightTopPages = [
  "/treatments",
  "/conditions",
  "/contact",
  "/programmes",
  "/consultations",
  "/practitioners",
  "/panchakarma",
  "/kayakalpa-rasayana",
  "/yoga-therapy",
  "/clinical-governance",
  "/patient-information",
];
