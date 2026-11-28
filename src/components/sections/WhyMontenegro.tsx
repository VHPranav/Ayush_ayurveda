import { coverSizes, photos } from "@/lib/images";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

const themes = [
  {
    title: "Authentic Ayurveda from India",
    body: "Traditional Indian Ayurvedic knowledge, therapies and herbal practice, brought to Montenegro by experienced physicians.",
    photo: photos.herbsFlatlay,
  },
  {
    title: "Podgorica, at the Heart of Montenegro",
    body: "Our clinic is in Podgorica, Montenegro’s capital — easy to reach from across the country and from the city’s airport.",
    photo: photos.podgoricaCity,
  },
  {
    title: "Mountains, Rivers & Pure Nature",
    body: "Rivers, hills and mountains surround the city, with national parks and quiet lakes close by for rest during your care.",
    photo: photos.montenegroRiver,
  },
];

export function WhyMontenegro() {
  return (
    <section id="why-montenegro" className="bg-ivory py-24 md:py-36">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="heading-display text-adriatic">
              Why Montenegro?
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="self-end md:col-span-5 md:col-start-8">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              From our clinic in Podgorica to the rivers, lakes and mountains beyond the city, Montenegro offers a calm
              natural setting for rest and recovery during your care.
            </p>
            <Button href="/programmes" variant="outline-dark" className="mt-8">
              Explore Programmes
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-8">
          {themes.map((theme, i) => (
            <Reveal key={theme.title} delay={i * 0.15} className={i === 1 ? "md:mt-20" : ""}>
              <ParallaxImage
                photo={theme.photo}
                sizes={coverSizes(theme.photo, 3 / 4, [["(min-width: 768px)", 30], [null, 100]], 1.24)}
                quality={80}
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
