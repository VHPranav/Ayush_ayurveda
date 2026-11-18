import type { Metadata } from "next";
import Image from "next/image";
import { photos, type Photo } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { BookingBand, ClinicalNote, Icon, PageIntro } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Our Practitioners",
  description:
    "The practitioners of AYUSH Ayurveda Clinic, Montenegro — qualifications, experience, professional memberships, roles and scope of practice.",
};

// Only details confirmed by the client are shown. Fields marked PENDING must be
// replaced with verified information before launch (strategy plan §5, §14).
const PENDING = "Being verified";

type Practitioner = {
  initials: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  memberships: string;
  scope: string;
  photo?: Photo;
  /** Short credential line shown under the role. */
  summary?: string;
};

const practitioners: Practitioner[] = [
  {
    initials: "PR",
    name: "Dr Prabodh Raghavan",
    role: "Consultant Ayurvedic Physician",
    photo: photos.prabodh,
    summary: "BAMS · 25+ years of experience",
    qualifications: "BAMS",
    experience: "25+ years of experience",
    memberships: PENDING,
    scope: "Ayurvedic consultation and assessment, treatment planning and supervision of therapies and programmes.",
  },
];

const roles = [
  { name: "Ayurvedic physicians (Vaidyas)", body: "Lead every assessment, prescribe and supervise care, and decide when referral is needed." },
  { name: "Ayurvedic therapists", body: "Deliver classical therapies, Panchakarma procedures and Varma under a physician’s plan." },
  { name: "Yoga therapists", body: "Provide therapeutic Yoga, Pranayama and meditation adapted to each patient." },
  { name: "Nutrition & lifestyle", body: "Give diet and daily-routine guidance that continues at home." },
];

export default function PractitionersPage() {
  return (
    <main className="bg-ivory">
      <PageIntro
        title="Our"
        accent="practitioners"
        lede="Care at AYUSH Ayurveda Clinic is practitioner-led. Every practitioner works within their verified qualifications and defined scope of practice."
      />

      <section className="container-page pb-24">
        <div className="grid gap-6">
          {practitioners.map((p) => (
            <Reveal key={p.name} className="grid gap-10 rounded-[2rem] bg-sand/60 p-8 md:p-12 lg:grid-cols-12">
              <div className="flex flex-col gap-6 lg:col-span-4">
                {p.photo ? (
                  <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[1.5rem] bg-ivory">
                    <Image
                      src={p.photo.src}
                      alt={p.photo.alt}
                      fill
                      quality={80}
                      sizes="(min-width: 1024px) 20rem, 80vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-olive font-display text-2xl text-ivory">
                    {p.initials}
                  </span>
                )}
                <div>
                  <p className="font-display text-3xl text-adriatic">{p.name}</p>
                  <p className="mt-1 text-muted">{p.role}</p>
                  {p.summary && <p className="eyebrow mt-3 text-[0.6rem] text-olive">{p.summary}</p>}
                </div>
              </div>
              <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                {(
                  [
                    ["Qualifications", p.qualifications],
                    ["Experience", p.experience],
                    ["Professional memberships", p.memberships],
                    ["Scope of practice", p.scope],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow text-[0.6rem] text-stone-deep">{k}</dt>
                    <dd className={`mt-2 leading-relaxed ${v === PENDING ? "text-stone-deep italic" : "text-ink/85"}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-stone/60 bg-sand/40 py-24">
        <div className="container-page">
          <h2 className="font-display text-4xl font-light text-adriatic md:text-5xl">The clinical team</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((t, i) => (
              <Reveal key={t.name} delay={0.06 * i} className="rounded-[1.5rem] border border-stone/70 bg-ivory p-7">
                <Icon name="shield" className="h-6 w-6 text-olive" />
                <p className="mt-5 font-display text-2xl text-adriatic">{t.name}</p>
                <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
                <p className="eyebrow mt-6 text-[0.56rem] text-stone-deep">Profiles coming soon</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24">
        <ClinicalNote title="Verified credentials">
          <p>
            We publish only qualifications and registrations that have been verified. AYUSH practitioners do not
            replace your doctor: where assessment shows a need for conventional medical care, we advise referral.
          </p>
        </ClinicalNote>
      </div>

      <BookingBand photo={photos.nadiPariksha} title="Meet a practitioner." body="Request a consultation in Montenegro or online." />
    </main>
  );
}
