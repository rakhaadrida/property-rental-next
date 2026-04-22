import Hero from "@/sections/landing/Hero";
import LandingPageSpecs from "../../specs/landingPage.json";

export default function Home() {
  return (
    <>
      <Hero
        travelers={LandingPageSpecs.hero.travelers}
        treasures={LandingPageSpecs.hero.treasures}
        cities={LandingPageSpecs.hero.cities}
      />
    </>
  );
}
