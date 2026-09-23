import { Reveal } from "../ui/Reveal";
import { BrandShowcase } from "./BrandShowcase";

export function Introduction() {
  return (
    <section id="about" className="relative bg-ivory py-24 md:py-36">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <p className="eyebrow flex items-center gap-4 text-stone-deep">
              <span className="h-px w-10 bg-gold" />
              The Concept
            </p>
            <h2 className="mt-6 heading-display text-adriatic">
              Two ways to
              <span className="block">restore balance,</span>
              <span className="block text-olive">one philosophy.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="self-end md:col-span-4 md:col-start-9">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Ayurveda provides the knowledge and the method. Montenegro provides the setting, the atmosphere and the
              feeling. AYUSH brings specialist therapy; VIVUM brings that expertise into wellness, lifestyle and
              hospitality.
            </p>
          </Reveal>
        </div>

        <BrandShowcase />
      </div>
    </section>
  );
}
