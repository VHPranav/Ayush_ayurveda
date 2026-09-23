import { photos } from "@/lib/images";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const themes = [
  {
    title: "Sea & Mediterranean Climate",
    body: "Clear Adriatic water, fresh sea air and a mild Mediterranean climate create the conditions for rest, recovery and renewed vitality.",
    photo: photos.ladyOfTheRocks,
  },
  {
    title: "Mountains, Rivers & Pure Nature",
    body: "National parks, glacial lakes, mountain air and pristine rivers offer a natural environment for deep renewal.",
    photo: photos.durmitorLake,
  },
  {
    title: "Eastern Wisdom, Experienced in Montenegro",
    body: "Authentic Ayurveda and yoga, practised in a distinctly European setting of stone terraces, olive groves and sea.",
    photo: photos.stoneTerrace,
  },
];

export function WhyMontenegro() {
  return (
    <section id="why-montenegro" className="bg-ivory py-24 md:py-36">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow flex items-center gap-4 text-stone-deep">
              <span className="h-px w-10 bg-gold" />
              The Setting
            </p>
            <h2 className="mt-6 heading-display text-adriatic">
              Why Montenegro?
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="self-end md:col-span-5 md:col-start-8">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              From the Adriatic coast to pristine mountains, rivers and healing landscapes, Montenegro offers a unique
              natural setting for restoration, balance and long-term wellbeing.
            </p>
            <Button href="#montenegro" variant="outline-dark" className="mt-8">
              Discover Montenegro
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-8">
          {themes.map((theme, i) => (
            <Reveal key={theme.title} delay={i * 0.15} className={i === 1 ? "md:mt-20" : ""}>
              <ParallaxImage
                photo={theme.photo}
                sizes="(min-width: 768px) 30vw, 100vw"
                className="aspect-[3/4] rounded-sm"
              />
              <div className="mt-7 flex gap-5">
                <span className="font-display text-lg text-gold italic">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl leading-tight font-normal text-adriatic md:text-[1.7rem]">
                    {theme.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{theme.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
