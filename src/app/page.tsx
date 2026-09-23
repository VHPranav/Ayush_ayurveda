import { Header, MobileBookBar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { IntroSequence } from "@/components/sections/IntroSequence";
import { WhyMontenegro } from "@/components/sections/WhyMontenegro";
import { Programmes } from "@/components/sections/Programmes";
import { Journey } from "@/components/sections/Journey";
import { Benefits } from "@/components/sections/Benefits";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSequence>
          <Introduction />
        </IntroSequence>
        <WhyMontenegro />
        <Programmes />
        <Journey />
        <Benefits />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
