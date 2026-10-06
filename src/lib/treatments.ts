// Source: "Stand-alone architecture" slides + "Individual Wellness & Ayurvedic Menu" infographic.
// Individual services are consultation-led entry points and add-ons, never substitutes for a structured programme.

export type Treatment = { name: string; detail?: string; minutes?: string; price: number; perPerson?: boolean };
export type MenuTier = { id: string; name: string; range: string; lede: string; items: Treatment[] };

export const menu: MenuTier[] = [
  {
    id: "essential",
    name: "Essential Wellness",
    range: "€75 – €150",
    lede: "Accessible mind–body practices and gentle local therapies.",
    items: [
      { name: "Guided Meditation / Relaxation", minutes: "45", price: 75 },
      { name: "Small-group Yoga", minutes: "60", price: 75, perPerson: true },
      { name: "Swedana", detail: "Therapeutic warming", minutes: "30", price: 82.5 },
      { name: "Yoga Nidra / Individual Pranayama", minutes: "45", price: 82.5 },
      { name: "Follow-up Consultation", detail: "Review and adjustment of your pathway", minutes: "30", price: 90 },
      { name: "Nasya", detail: "Traditional nasal therapy", price: 105 },
      { name: "Individual Therapeutic Yoga", price: 112.5 },
      { name: "Local Vasti", detail: "Kati, Janu or Greeva", minutes: "45", price: 127.5 },
      { name: "Netra Tarpana", detail: "Eye-region care", minutes: "40", price: 135 },
    ],
  },
  {
    id: "signature",
    name: "Signature Ayurvedic",
    range: "€150 – €225",
    lede: "Core traditional therapies, consultation and nutrition.",
    items: [
      { name: "Ayurveda Facial / Sensory Wellbeing Therapy", minutes: "60", price: 165 },
      { name: "Shiro Vasti", minutes: "45", price: 165 },
      { name: "Initial Ayurveda Consultation & Assessment", detail: "Observation, touch and questioning to create your plan", minutes: "75–90", price: 180 },
      { name: "Personalised Nutrition Plan", minutes: "60 + plan", price: 180 },
      { name: "Udwarthana", detail: "Herbal powder treatment", minutes: "60", price: 180 },
      { name: "Varma Assessment & Therapy", minutes: "60", price: 180 },
      { name: "Abhyanga", detail: "Traditional full-body oil therapy", minutes: "75", price: 195 },
      { name: "Shirodhara / Takradhara", detail: "Oil or buttermilk flow", minutes: "60", price: 210 },
      { name: "Varma Therapy with Ayurveda Oils", minutes: "75", price: 217.5 },
    ],
  },
  {
    id: "advanced",
    name: "Advanced Specialist",
    range: "€225 – €300+",
    lede: "High-intensity specialist interventions.",
    items: [
      {
        name: "Pizhichil",
        detail: "Continuous pouring of warm medicated oil combined with gentle bodywork",
        minutes: "90",
        price: 262.5,
      },
    ],
  },
];
