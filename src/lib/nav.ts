// Site navigation — structure follows the AYUSH International website plan (§10),
// condensed to the pages that exist.
export type NavItem = {
  label: string;
  href: string;
  /** Opens another website (in a new tab). */
  external?: boolean;
  children?: { label: string; href: string; note?: string }[];
};

/** AYUSH's UK centre has its own website. */
export const UK_SITE = "https://ayushuk.com";

export const navItems: NavItem[] = [
  { label: "About", href: "/ayush" },
  { label: "Treatments", href: "/treatments" },
  { label: "Conditions", href: "/conditions" },
  { label: "Programmes", href: "/programmes" },
  { label: "UK", href: UK_SITE, external: true },
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
