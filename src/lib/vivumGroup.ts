// VIVUM Group business lines — source: "VIVUM 1" (consulting & training, Dr Sandra Kordić)
// and "VIVUM 2" (international recruitment with Kinster) document folders.

export const serviceAreas = [
  {
    n: "01",
    name: "Strategy & Performance Management",
    lede: "From a clear direction to measurable results — a strategy that becomes the everyday work of your teams.",
    who: "Owners, CEOs and management teams of growing companies who need a clearer view of the business and a more self-reliant team.",
    covers: [
      "Strategy and growth plan",
      "Translating strategy into team goals",
      "Performance Management System",
      "Organisation, roles and delegation",
      "Ongoing support for owners and CEOs",
    ],
    outcome: "Higher productivity, less unnecessary work, and a team that runs the business more reliably.",
  },
  {
    n: "02",
    name: "Process & Operational Excellence",
    lede: "Less waiting, fewer errors and less rework — more done by your existing team, and growth with costs under control.",
    who: "Companies where work stalls, cases bounce back and the same problems keep recurring.",
    covers: [
      "Process scan and priority processes",
      "DMAIC improvement and process governance",
      "Digitalisation, automation and AI agents",
      "A culture of continuous improvement",
      "Training for teams and managers",
    ],
    outcome: "Lean and Six Sigma methods — every project with a baseline, a target, an owner and a verification plan.",
  },
  {
    n: "04",
    name: "CAITO for Regulated Industries",
    lede: "A Fractional Chief AI & Transformation Officer — executive leadership of AI and regulatory transformation.",
    who: "Management and supervisory boards in insurance, telecoms, energy, healthcare, tourism, logistics and public enterprises in Montenegro and the region.",
    covers: [
      "Executive AI Readiness Scan",
      "AI Governance Foundation (ISO/IEC 42001)",
      "Regulation-to-Digital Process",
      "Responsible AI Pilot",
      "Fractional CAITO mandate",
      "Board AI Governance & Oversight",
    ],
    outcome: "Concrete Board decisions, a working AI governance system and preparation for the EU AI Act.",
  },
];

export const problems = [
  { problem: "Work falls between teams; no one owns the result", choose: "Business Process Management (BPM)" , image: "/images/flow/consulting/p01.jpg" },
  { problem: "Projects run late, over budget or without clear roles", choose: "Project Management in Practice" , image: "/images/flow/consulting/p02.jpg" },
  { problem: "Customers drop out or complain, and you don’t know where", choose: "Customer Journey Mapping" , image: "/images/flow/consulting/p03.jpg" },
  { problem: "You need a new solution and want to test it before investing", choose: "Design Thinking" , image: "/images/flow/consulting/p04.jpg" },
  { problem: "The same problems keep coming back", choose: "Problem Solving" , image: "/images/flow/consulting/p05.jpg" },
  { problem: "Improvement depends on a few people and gains fade", choose: "KAIZEN — Continuous Improvement" , image: "/images/flow/consulting/p06.jpg" },
  { problem: "Problems are spotted too late; meetings end without decisions", choose: "Visual Management" , image: "/images/flow/consulting/p07.jpg" },
  { problem: "Costs grow faster than revenue and you don’t know where to start", choose: "Business Process Scan & Growth Recommendations" , image: "/images/flow/consulting/p08.jpg" },
  { problem: "One key process is slow, costly or error-prone", choose: "Process Improvement (DMAIC)" , image: "/images/flow/consulting/p09.jpg" },
  { problem: "Too many ideas, unclear direction, plans not delivered", choose: "Strategy & Strategic Planning" , image: "/images/flow/consulting/p10.jpg" },
  { problem: "Goals don’t reach teams; results and accountability are unclear", choose: "Performance Management System" , image: "/images/flow/consulting/p11.jpg" },
  { problem: "You want AI, but have no priorities, rules or proof of value", choose: "Responsible Use of AI" , image: "/images/flow/consulting/p12.jpg" },
  { problem: "A regulated company needs Board-level AI and compliance leadership", choose: "Fractional Chief AI & Transformation Officer" , image: "/images/flow/consulting/p13.jpg" },
];

export type PriceRow = { name: string; duration: string; a: string; b?: string };
export type PriceTable = { id: string; title: string; note: string; cols: [string, string?]; rows: PriceRow[]; footnote?: string };

// Indicative prices in EUR, excluding VAT — confirmed after an initial conversation.
export const priceTables: PriceTable[] = [
  {
    id: "training",
    title: "Training",
    note: "In-house, up to 15 participants, including materials and follow-up.",
    cols: ["Small & medium companies", "Large companies"],
    rows: [
      { name: "Business Process Management", duration: "2 days", a: "2,400–3,200", b: "3,500–4,500" },
      { name: "Project Management", duration: "2 days", a: "2,200–3,000", b: "3,200–4,200" },
      { name: "Customer Journey Mapping", duration: "1 day + journey map", a: "1,500–2,200", b: "2,200–3,000" },
      { name: "Design Thinking", duration: "2 days", a: "2,400–3,200", b: "3,500–4,500" },
      { name: "Problem Solving", duration: "1–2 days", a: "1,500–2,800", b: "2,200–3,800" },
      { name: "KAIZEN", duration: "2 days + Kaizen event", a: "2,800–3,800", b: "4,000–5,500" },
      { name: "Visual Management", duration: "1 day + pilot-team board", a: "1,800–2,600", b: "2,600–3,500" },
    ],
    footnote: "Open seminar: €150–250 per participant per day · Bundle of 3 trainings: 10% discount.",
  },
  {
    id: "consulting",
    title: "Consulting",
    note: "Fixed fee for the agreed scope.",
    cols: ["Small & medium companies", "Large companies"],
    rows: [
      { name: "Business process scan & growth recommendations", duration: "2–4 weeks", a: "3,500–6,000", b: "6,000–10,000" },
      { name: "Strategy and strategic planning", duration: "4–8 weeks", a: "4,500–8,000", b: "8,000–15,000" },
      { name: "Performance Management System", duration: "4–6 weeks", a: "5,000–8,000", b: "9,000–15,000" },
      { name: "DMAIC and process governance", duration: "6–10 weeks per process", a: "4,000–7,000", b: "6,000–10,000" },
      { name: "Continuous improvement", duration: "First 90 days, monthly", a: "1,500–2,500", b: "2,500–4,000" },
      { name: "Support for owners and CEOs", duration: "Monthly, 8–16 hours", a: "1,200–2,200", b: "2,500–3,500" },
    ],
  },
  {
    id: "ai",
    title: "Responsible AI",
    note: "For small and medium companies.",
    cols: ["Price"],
    rows: [
      { name: "Mini assessment — one process", duration: "2 weeks", a: "1,500" },
      { name: "AI maturity and readiness assessment", duration: "2–4 weeks", a: "2,500–4,000" },
      { name: "AI governance system", duration: "4–6 weeks", a: "3,500–6,000" },
      { name: "Process redesign & AI pilot preparation", duration: "3–4 weeks", a: "3,000–4,500" },
      { name: "Running the AI pilot", duration: "6–8 weeks", a: "5,000–8,000" },
    ],
  },
  {
    id: "caito",
    title: "CAITO",
    note: "For large and regulated companies.",
    cols: ["Montenegro", "Region / complex"],
    rows: [
      { name: "Executive AI Readiness Scan", duration: "4–6 weeks", a: "6,000–10,000", b: "10,000–15,000" },
      { name: "AI Governance Foundation", duration: "8–12 weeks", a: "12,000–22,000", b: "22,000–35,000" },
      { name: "Regulation-to-Digital Process", duration: "3–5 months per area", a: "20,000–40,000", b: "40,000–70,000" },
      { name: "Responsible AI Pilot", duration: "3–6 months", a: "18,000–35,000", b: "35,000–60,000" },
      { name: "Board AI Governance", duration: "Workshop to annual mandate", a: "3,000–12,000", b: "5,000–20,000" },
    ],
    footnote:
      "Fractional CAITO mandate (monthly, min. 6 months): Advisory €2,500–3,500 · Core €4,500–6,500 · Transformation €7,000–10,000 · Regional €9,000–14,000.",
  },
];

export const trainings = [
  { name: "Business Process Management", body: "Managers take ownership of processes and manage their results end to end." },
  { name: "Project Management in Practice", body: "Projects on time and on budget, with clear accountability." },
  { name: "Customer Journey Mapping", body: "See your business through your customers’ eyes — and remove the points where you lose them." },
  { name: "Design Thinking", body: "From a real customer need to a tested solution — before a larger investment." },
  { name: "Problem Solving", body: "Find the real cause, choose the action and check the result." },
  { name: "KAIZEN", body: "Small, everyday changes that together deliver big results." },
  { name: "Visual Management", body: "Work status, problems and results visible at a glance." },
];

// ---------- International recruitment ----------

export const sectors = [
  {
    name: "Skilled trades & industry",
    roles: ["Welders and fabricators", "Electricians, fitters and plumbers", "Construction and site trades", "General workers for factories, warehouses, wineries and retail"],
  },
  {
    name: "Healthcare & care",
    roles: ["Care assistants for elderly and adult care", "Social-work graduates (MSW)", "Registered nurses", "Physiotherapists and allied professionals"],
  },
  {
    name: "Heavy-vehicle drivers",
    roles: ["Experienced heavy-vehicle drivers", "Machinery and crane operators", "Fleet and logistics staff", "Licence recognition checked before deployment"],
  },
  {
    name: "Hospitality",
    roles: ["Hotel and restaurant staff", "Kitchen assistants and line cooks", "Housekeeping and cleaning", "Food service and support roles"],
  },
];

export const recruitmentSteps = [
  { title: "Workforce brief", body: "Job titles, headcount, duties, location, hours, qualifications, salary, benefits and arrival dates." },
  { title: "Compliance check", body: "Confirm the role, contract and permit route are feasible under current Montenegrin rules." },
  { title: "Sourcing & screening", body: "Recruit against the agreed profile; verify identity, experience, references and certificates." },
  { title: "English interview", body: "An initial interview in English, alongside practical or trade testing." },
  { title: "Conditional offer", body: "Subject to permit approval, document verification and any agreed language training." },
  { title: "Language preparation", body: "A realistic plan for basic Montenegrin where the role requires it — up to three months." },
  { title: "Documents & mobilisation", body: "Applications coordinated with the employer and authorised advisers; travel only after approvals." },
  { title: "Arrival & retention", body: "Onboarding, accommodation, safety induction, local orientation and a review after arrival." },
];
