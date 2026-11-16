import type { Metadata } from "next";
import Link from "next/link";
import {  photos } from "@/lib/images";
import { ConditionList } from "@/components/pages/ConditionList";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Button";
import { BookingBand, Icon } from "@/components/ui/Kit";

export const metadata: Metadata = {
  title: "Condition-focused programmes",
  description: "Dedicated AYUSH Montenegro programmes — who each is for, what it may include and how long it lasts.",
};

export default function ConditionsPage() {
  return (
    <main className="bg-ivory">
      <section className="container-page pt-40 pb-16 md:pt-48">
        <div className="grid gap-12 lg:grid-cols-12">
          <FadeIn delay={0.2} className="lg:col-span-7">
            <h1 className="heading-display text-adriatic">
              Condition-focused
              <span className="block text-olive">programmes</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.45} className="self-end lg:col-span-4 lg:col-start-9">
            <div className="flex gap-4 rounded-2xl border border-olive/30 bg-olive/5 p-6">
              <Icon name="shield" className="h-6 w-6 shrink-0 text-olive" />
              <p className="text-[0.95rem] leading-relaxed text-ink/80">
                Our programmes support — never replace — conventional medical care. Every programme is subject to
                individual assessment, and the Vaidya coordinates with your clinicians and refers where necessary.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-page pb-24">
        <ConditionList />
      </section>

      <section className="container-page pb-28">
        <Reveal>
          <Link
            href="/programmes/specific-ailments-conditions"
            className="group grid gap-6 rounded-[2rem] bg-adriatic-deep p-10 text-ivory transition-colors duration-500 hover:bg-adriatic md:grid-cols-[1fr_auto] md:items-center md:p-14"
          >
            <div>
              <p className="font-display text-3xl font-light md:text-4xl">The Specific Ailments &amp; Conditions pathway</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-ivory/75">
                A Vaidya-led pathway structured in 7, 14 or 21-day blocks, designed entirely after your initial
                assessment.
              </p>
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/30">
              <Arrow />
            </span>
          </Link>
        </Reveal>
      </section>

      <BookingBand photo={photos.mountainLake} title="Talk to a practitioner first." body="A consultation — online or in Montenegro — is the first step to finding the right programme." />
    </main>
  );
}
