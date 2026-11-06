// Site navigation — structure follows the AYUSH International website plan (§10),
// condensed to the pages that exist.
export type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const navItems: NavItem[] = [
  {
    label: "AYUSH",
    href: "/ayush",
    children: [
      { label: "About AYUSH", href: "/ayush", note: "Our approach, Yoga Therapy & team" },
      { label: "Treatments", href: "/treatments", note: "The individual Ayurvedic menu" },
      { label: "Conditions", href: "/conditions", note: "Condition-focused programmes" },
    ],
  },
  {
    label: "Montenegro",
    href: "/montenegro",
    children: [
      { label: "AYUSH Montenegro", href: "/montenegro", note: "Hyatt Regency Kotor Bay" },
      { label: "Travel & FAQs", href: "/travel", note: "Airports, transfers, practicalities" },
    ],
  },
  { label: "Programmes", href: "/programmes" },
  {
    label: "VIVUM",
    href: "/vivum",
    children: [
      { label: "VIVUM Wellness", href: "/vivum", note: "Ayurveda wellness, Yoga & retreats" },
      { label: "Consulting & Training", href: "/vivum/consulting", note: "Strategy, processes & responsible AI" },
      { label: "International Recruitment", href: "/vivum/recruitment", note: "Workforce from India & UAE" },
    ],
  },
  { label: "UK", href: "/uk" },
  { label: "India", href: "/india" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups = [
  {
    title: "AYUSH",
    links: [
      { label: "About AYUSH", href: "/ayush" },
      { label: "Programmes", href: "/programmes" },
      { label: "Treatments", href: "/treatments" },
      { label: "Conditions", href: "/conditions" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Montenegro", href: "/montenegro" },
      { label: "VIVUM Montenegro", href: "/vivum" },
      { label: "AYUSH London", href: "/uk" },
      { label: "AYUSH India", href: "/india" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Travel & FAQs", href: "/travel" },
      { label: "Book a Consultation", href: "/contact" },
      { label: "VIVUM Consulting", href: "/vivum/consulting" },
      { label: "International Recruitment", href: "/vivum/recruitment" },
    ],
  },
];

/** Pages whose top section is light — the header starts in its solid (dark text) state. */
export const lightTopPages = ["/treatments", "/conditions", "/contact", "/programmes", "/vivum", "/travel"];
