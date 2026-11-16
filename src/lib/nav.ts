// Site navigation — structure follows the AYUSH International website plan (§10),
// condensed to the pages that exist.
export type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const navItems: NavItem[] = [
  { label: "About", href: "/ayush" },
  { label: "Treatments", href: "/treatments" },
  { label: "Conditions", href: "/conditions" },
  { label: "Programmes", href: "/programmes" },
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
    title: "Contact",
    links: [{ label: "Book a Consultation", href: "/contact" }],
  },
];

/** Pages whose top section is light — the header starts in its solid (dark text) state. */
export const lightTopPages = ["/treatments", "/conditions", "/contact", "/programmes"];
