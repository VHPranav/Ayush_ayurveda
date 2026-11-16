import { photos, type Photo } from "./images";

// Source: "Integrated Clinical Wellness" deck + programme infographics (Hyatt Regency Kotor Bay).
// Prices are per person for the programme; hotel accommodation and full-board meals are priced separately.
// Where the deck and an infographic disagreed, the deck's figure (= standard price less the 15% opening promo) is used.

export type Tier = "Discover" | "Reset" | "Transform" | "Renew" | "Complete";

export type Level = {
  tier: Tier;
  days: number;
  standard: number;
  promo: number;
  allowance: number;
  note?: string;
};

export type Step = { title: string; body: string };
export type Phase = { label: string; title: string; steps: Step[] };

export type Programme = {
  slug: string;
  name: string;
  /** Short form used on cards. */
  short: string;
  tagline: string;
  intro: string;
  focus: string;
  photo: Photo;
  levels: Level[];
  /** "From" pricing for pathways priced after assessment. */
  fromPricing?: { standard: number; promo: number; note: string };
  phases: Phase[];
  inclusions: Step[];
  extra?: { title: string; items: string[]; note?: string };
};

export const TIERS: { tier: Tier; days: number; summary: string; allowance: string }[] = [
  { tier: "Discover", days: 5, summary: "Consultation-led entry point.", allowance: "€75" },
  { tier: "Reset", days: 7, summary: "Accessible mind–body wellbeing and targeted lifestyle shifts.", allowance: "€100" },
  { tier: "Transform", days: 14, summary: "Deeper renewal and the introduction of Kaya Kalpa.", allowance: "€175–€200" },
  { tier: "Renew", days: 21, summary: "Premium physician-supervised Ayurveda and deep cleansing.", allowance: "€300–€350" },
  { tier: "Complete", days: 28, summary: "The complete traditional Panchakarma immersion.", allowance: "€500" },
];

export const programmes: Programme[] = [
  {
    slug: "ayurveda-discovery-reset",
    name: "Ayurveda Discovery & Reset",
    short: "Discovery & Reset",
    tagline: "Your five-day pathway to balance",
    intro:
      "A consultation-led introduction to clinical Ayurveda. Personalised treatments, Yoga, nutrition and a practical home plan — and a professional first step towards longer programmes such as Panchakarma.",
    focus: "Introduction · Assessment · Balance",
    photo: photos.nadiPariksha,
    levels: [{ tier: "Discover", days: 5, standard: 1650, promo: 1403, allowance: 75 }],
    phases: [
      {
        label: "Phase 1",
        title: "The clinical foundation",
        steps: [
          { title: "Your constitutional baseline", body: "A thorough assessment using traditional diagnostic approaches to understand your Prakriti (nature) and Vikriti (current imbalance)." },
          { title: "Beyond one-size-fits-all", body: "Your primary objective — stress, mobility or rejuvenation — is identified to shape the treatment sequence that follows." },
          { title: "Expert-led personalisation", body: "Every therapy is selected and supervised by qualified practitioners for safety and suitability." },
        ],
      },
      {
        label: "Phase 2",
        title: "The five-day immersion",
        steps: [
          { title: "Traditional therapies, tailored", body: "A bespoke schedule of Ayurvedic treatments designed around your body’s needs and tolerance." },
          { title: "Breath and movement", body: "Therapeutic Hatha-based Yoga and Pranayama adapted to your ability and objectives." },
          { title: "Nourishing the reset", body: "A dietary framework designed by experts to complement your treatments." },
        ],
      },
      {
        label: "Phase 3",
        title: "The continued journey",
        steps: [
          { title: "Sustainable integration", body: "Leave with a practical morning-to-evening routine covering nutrition, movement and lifestyle." },
          { title: "Continuity of care", body: "A scheduled follow-up consultation supports your transition home." },
          { title: "A structured pathway", body: "An introduction to longer, more intensive tracks such as Panchakarma, when appropriate." },
        ],
      },
    ],
    inclusions: [
      { title: "Initial & final consultations", body: "A comprehensive consultation and assessment, and a final review." },
      { title: "Personalised treatments", body: "Traditional Ayurvedic therapies selected for you each day." },
      { title: "Yoga & Pranayama", body: "Hatha-based sessions adapted to your ability." },
      { title: "30-day review", body: "A follow-up consultation one month after your stay." },
    ],
  },
  {
    slug: "stress-management",
    name: "Stress Management",
    short: "Stress Management",
    tagline: "A personalised journey to Shamana and mind–body wellbeing",
    intro:
      "Restorative daily therapies, Yoga, Pranayama and meditation, with nutrition and sleep guidance — set against the calm of the Kotor–Risan Bay.",
    focus: "Rest · Nervous-system calm · Sleep",
    photo: photos.shirodhara,
    levels: [
      { tier: "Reset", days: 7, standard: 1725, promo: 1466, allowance: 100 },
      { tier: "Transform", days: 14, standard: 3450, promo: 2933, allowance: 175 },
    ],
    phases: [
      {
        label: "Consult",
        title: "Initial assessment and final review",
        steps: [{ title: "Clinical consultations", body: "A comprehensive assessment at the start, a final review at the end, and a 30-day follow-up to make the transition home sustainable." }],
      },
      {
        label: "Restore",
        title: "1–2 personalised treatments daily",
        steps: [{ title: "Daily restorative therapies", body: "60–90 minute sessions such as Abhyanga (oil massage) or Shirodhara (forehead flow), selected by the practitioner for your needs." }],
      },
      {
        label: "Practise",
        title: "Yoga, Pranayama & meditation",
        steps: [{ title: "Mind–body practices", body: "4–6 Yoga and Pranayama sessions per week, plus guided meditation and Yoga Nidra for deep rest." }],
      },
      {
        label: "Integrate",
        title: "Nutrition & sleep advice",
        steps: [{ title: "Holistic optimisation", body: "Personalised dietary guidance and sleep routines to carry wellbeing into daily life." }],
      },
    ],
    inclusions: [
      { title: "Initial assessment + final review", body: "Plus a 30-day follow-up consultation." },
      { title: "1–2 treatments daily", body: "60–90 minutes, e.g. Abhyanga or Shirodhara." },
      { title: "4–6 Yoga sessions weekly", body: "Yoga, Pranayama, meditation and Yoga Nidra." },
      { title: "Nutrition & sleep plan", body: "Personalised guidance for home." },
    ],
  },
  {
    slug: "resilience-vitality",
    name: "Resilience & Vitality",
    short: "Resilience & Vitality",
    tagline: "A journey to restored physical reserves",
    intro:
      "An Ojas-focused preventive programme that supports physical reserves and everyday vitality through Ayurvedic principles, daily treatments, Yoga and nutrition.",
    focus: "Ojas · Vitality · Prevention",
    photo: photos.durmitorLake,
    levels: [
      { tier: "Reset", days: 7, standard: 1950, promo: 1658, allowance: 100 },
      { tier: "Transform", days: 14, standard: 3900, promo: 3315, allowance: 175 },
    ],
    phases: [
      {
        label: "Pillar 1",
        title: "Ojas-strengthening preventive wellness",
        steps: [{ title: "Restoring reserves", body: "The programme focuses on restoring physical reserves and resilience through Ayurvedic principles." }],
      },
      {
        label: "Pillar 2",
        title: "Vaidya-led personalisation",
        steps: [{ title: "Tailored from start to finish", body: "Every journey begins and ends with professional consultations, so treatments fit your constitution and goals." }],
      },
      {
        label: "Pillar 3",
        title: "Environmental vitality",
        steps: [{ title: "The setting as support", body: "Kotor Bay’s coastal breeze and crisp mountain air are part of the restorative experience." }],
      },
    ],
    inclusions: [
      { title: "Restorative daily treatments", body: "1–2 personalised treatments daily (60–90 minutes), focused on physical restoration and stress release." },
      { title: "Integrated mind–body practice", body: "Therapeutic Yoga, Pranayama and guided meditation woven into the day." },
      { title: "Custom wellbeing nutrition", body: "A personalised nutritional plan that complements your treatments." },
      { title: "30-day continuity review", body: "A follow-up one month after the programme to embed new habits." },
    ],
  },
  {
    slug: "weight-management",
    name: "Weight Management",
    short: "Weight Management",
    tagline: "Ayurvedic lifestyle and metabolic balance",
    intro:
      "A structured, active programme combining targeted Ayurvedic therapies, regular movement and a metabolic nutrition plan, with a concrete plan to take home.",
    focus: "Metabolism · Movement · Lifestyle",
    photo: photos.nourishingBowl,
    levels: [
      { tier: "Reset", days: 7, standard: 2325, promo: 1976, allowance: 100, note: "A short, intensive metabolic start" },
      { tier: "Transform", days: 14, standard: 4650, promo: 3953, allowance: 175, note: "A deeper, longer transformation" },
    ],
    phases: [
      {
        label: "01",
        title: "Consult & assess",
        steps: [{ title: "Understanding you", body: "An in-depth consultation with a Vaidya on your constitution (Prakriti), current imbalances (Vikriti) and personal goals." }],
      },
      {
        label: "02",
        title: "Personalised treatment",
        steps: [{ title: "1–3 treatments daily", body: "Therapies such as Udwarthana (herbal powder massage) and Swedana (therapeutic steam), selected for you." }],
      },
      {
        label: "03",
        title: "Active integration",
        steps: [{ title: "Movement and nutrition", body: "4–6 Yoga and activity sessions weekly, paired with a personalised metabolic nutrition plan." }],
      },
      {
        label: "04",
        title: "Sustainable continuity",
        steps: [{ title: "Your home plan", body: "A final review and 30-day follow-up, with a practical plan for routines, nutrition and movement." }],
      },
    ],
    inclusions: [
      { title: "1–3 treatments daily", body: "Targeted therapies such as Udwarthana and Swedana." },
      { title: "4–6 weekly activity sessions", body: "Yoga and movement adapted to your ability." },
      { title: "Metabolic nutrition plan", body: "Designed to support steady energy and sustainable goals." },
      { title: "30-day progress review", body: "Professional follow-up after you return home." },
    ],
  },
  {
    slug: "specific-ailments-conditions",
    name: "Specific Ailments & Conditions",
    short: "Clinical Pathway",
    tagline: "A Vaidya-led pathway to targeted wellbeing",
    intro:
      "An individually designed pathway for people living with specific health concerns. The Vaidya-led plan includes coordination with your conventional medical care, and referral where necessary.",
    focus: "Individual · Coordinated · Supervised",
    photo: photos.herbalOil,
    levels: [],
    fromPricing: {
      standard: 2250,
      promo: 1913,
      note: "Structured in 7, 14 or 21-day blocks. The final price and medicine allowance are set by the Vaidya after the initial assessment.",
    },
    phases: [
      {
        label: "1",
        title: "Professional consultation & assessment",
        steps: [{ title: "A full picture", body: "An extensive evaluation of your health history, current medications and individual requirements." }],
      },
      {
        label: "2",
        title: "Customised treatment sequence",
        steps: [{ title: "Not a standard package", body: "Specific therapies, therapeutic Yoga and nutritional guidance tailored to you." }],
      },
      {
        label: "3",
        title: "Monitoring & coordination",
        steps: [{ title: "Responsive care", body: "Ongoing observation during your stay, adjusting treatments to your response, in coordination with conventional care." }],
      },
      {
        label: "4",
        title: "Home-care continuity plan",
        steps: [{ title: "After you leave", body: "Morning and evening routines and lifestyle habits to maintain progress at home." }],
      },
    ],
    inclusions: [
      { title: "Vaidya-led assessment", body: "Including review of current medications." },
      { title: "Individual treatment plan", body: "Therapies, Yoga and nutrition tailored to you." },
      { title: "Daily monitoring", body: "Adjusted to your response during the stay." },
      { title: "Home-care plan", body: "With a structured follow-up." },
    ],
    extra: {
      title: "Areas of focus",
      items: [
        "Digestive wellbeing",
        "Musculoskeletal & joint",
        "Neurological wellbeing",
        "Metabolic wellbeing",
        "Cardiovascular wellbeing",
        "Respiratory wellbeing",
        "Women’s health",
        "Skin care",
        "Calm mind & sleep",
        "Hormonal balance",
        "Liver wellbeing",
        "Urological wellbeing",
        "Healthy ageing",
        "Rejuvenation",
      ],
      note: "Ayurvedic care is offered alongside — never instead of — conventional medical treatment. All programmes are subject to individual assessment.",
    },
  },
  {
    slug: "kaya-kalpa",
    name: "Kaya Kalpa",
    short: "Kaya Kalpa",
    tagline: "The premium pathway to healthy longevity",
    intro:
      "A clinician-led signature journey for healthy ageing, rejuvenation and physical restoration — traditional Rasayana therapies, Varma manual techniques and therapeutic Yoga, beginning with a comprehensive Vaidya consultation.",
    focus: "Rasayana · Varma · Healthy ageing",
    photo: photos.pindaSweda,
    levels: [
      { tier: "Transform", days: 14, standard: 5250, promo: 4463, allowance: 200 },
      { tier: "Renew", days: 21, standard: 7875, promo: 6694, allowance: 300 },
    ],
    phases: [
      {
        label: "Framework",
        title: "Kaya Kalpa — rejuvenation & renewal",
        steps: [{ title: "Rasayana therapies", body: "Traditional rejuvenation therapies integrated with modern healthy-ageing practices to restore vitality and mind–body balance." }],
      },
      {
        label: "Setting",
        title: "The Montenegro sanctuary",
        steps: [{ title: "Boka Kotorska", body: "Hosted at Hyatt Regency Kotor Bay, against the cliffs of the Bay of Kotor and the historic islet of Gospa od Škrpjela." }],
      },
      {
        label: "Method",
        title: "Clinician-led personalisation",
        steps: [{ title: "Darshana · Sparshana · Prasna", body: "Every plan starts with observation, physical assessment and questioning to tailor the experience to your constitution (Prakriti)." }],
      },
    ],
    inclusions: [
      { title: "1–3 personalised treatments daily", body: "60–120 minutes, featuring therapies such as Pizhichil and Abhyanga." },
      { title: "Specialised Varma therapy", body: "Traditional manual techniques on vital points for mobility, ease and body awareness." },
      { title: "Mind–body integration", body: "4–6 sessions per week of therapeutic Yoga, Pranayama, meditation or Yoga Nidra." },
      { title: "Personalised longevity nutrition", body: "A bespoke healthy-ageing nutrition plan." },
      { title: "30-day professional follow-up", body: "A post-programme review of how the benefits are integrating at home." },
      { title: "Home continuity plan", body: "Morning routines, movement and sleep recommendations for the long term." },
    ],
  },
  {
    slug: "complete-detox-panchakarma",
    name: "Complete Detox — Panchakarma Chikitsa",
    short: "Panchakarma",
    tagline: "A physician-supervised traditional cleansing journey",
    intro:
      "Panchakarma in its complete traditional form — preparation, prescribed cleansing and recovery — delivered under daily physician supervision in the calm of the Bay of Kotor.",
    focus: "Poorvakarma · Shodhana · Paschatkarma",
    photo: photos.panchakarmaRoom,
    levels: [
      { tier: "Renew", days: 21, standard: 8400, promo: 7140, allowance: 350 },
      {
        tier: "Complete",
        days: 28,
        standard: 11200,
        promo: 9520,
        allowance: 500,
        note: "Higher treatment intensity, increased medicine allowance and more frequent physician supervision",
      },
    ],
    phases: [
      {
        label: "Phase 1",
        title: "Poorvakarma — preparation",
        steps: [{ title: "Readying the body", body: "Snehanam (oleation) and Swedanam (therapeutic warming) under daily medical observation." }],
      },
      {
        label: "Phase 2",
        title: "Pradhanakarma / Shodhana — cleansing",
        steps: [{ title: "The principal stage", body: "The physician prescribes specific procedures (such as Vasti or Nasya) based on your constitution and tolerance." }],
      },
      {
        label: "Phase 3",
        title: "Paschatkarma — recovery & rejuvenation",
        steps: [{ title: "Returning gently", body: "Corrective care, gentle rejuvenation therapies and a gradual return to normal routine." }],
      },
    ],
    inclusions: [
      { title: "Physician-led supervision", body: "A Vaidya consultation and assessment, then daily monitoring for safety and progress." },
      { title: "60–120 minutes of daily therapy", body: "1–2 personalised sessions tailored to each stage." },
      { title: "Integrated mind–body support", body: "Yoga, Pranayama and personalised clinical nutrition." },
      { title: "30-day continuity review", body: "A final review and a follow-up consultation 30 days after your stay." },
    ],
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);

export const euro = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: n % 1 ? 2 : 0 }).format(n);

/** Lowest promotional price across a programme's levels. */
export const fromPrice = (p: Programme) =>
  p.fromPricing ? p.fromPricing.promo : Math.min(...p.levels.map((l) => l.promo));
