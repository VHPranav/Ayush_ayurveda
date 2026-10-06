import type { Metadata } from "next";
import { BookingPaths } from "@/components/pages/BookingPaths";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, Icon } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Book an AYUSH consultation or enquire about a VIVUM wellness retreat in Montenegro.",
};

export default async function ContactPage(props: PageProps<"/contact">) {
  const { path } = await props.searchParams;
  const initial = path === "vivum" ? "vivum" : "ayush";

  return (
    <main className="bg-ivory">
      <section className="container-page pt-40 pb-16 md:pt-48">
        <div className="grid gap-10 lg:grid-cols-12">
          <FadeIn delay={0.2} className="lg:col-span-7">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 heading-display text-adriatic">
              Begin with
              <span className="block text-olive">a conversation</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.45} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted md:text-lg">
              Choose the path that fits: therapeutic care with AYUSH, or a wellness retreat with VIVUM. Our team will
              reply to guide you through the next steps.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-page pb-24">
        <BookingPaths initial={initial} />
      </section>

      <section className="border-t border-stone/60 bg-sand/50 py-20">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <Reveal>
            <p className="eyebrow text-[0.6rem] text-stone-deep">AYUSH London</p>
            <p className="mt-4 font-display text-2xl text-adriatic">Ayush Ayurveda &amp; Yoga Therapy Centre</p>
            <p className="mt-2 leading-relaxed text-muted">23 Beaconsfield Road, Southall, UB1 1BW</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow text-[0.6rem] text-stone-deep">Call</p>
            <a href="tel:+447983988172" className="mt-4 flex items-center gap-3 font-display text-2xl text-adriatic">
              <Icon name="chat" className="h-5 w-5 text-olive" /> 07983 988172
            </a>
            <a href="tel:+442035611327" className="mt-2 flex items-center gap-3 font-display text-2xl text-adriatic">
              <Icon name="chat" className="h-5 w-5 text-olive" /> 020 3561 1327
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="eyebrow text-[0.6rem] text-stone-deep">Email</p>
            <a href="mailto:contact@ayushuk.com" className="mt-4 flex items-center gap-3 font-display text-2xl text-adriatic">
              <Icon name="consult" className="h-5 w-5 text-olive" /> contact@ayushuk.com
            </a>
            <p className="mt-3 text-[0.88rem] text-muted">Montenegro contact details to follow.</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
