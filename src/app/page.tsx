"use client";

import Hero from "@/sections/landing/Hero";
import MostPicked from "@/sections/landing/MostPicked";
import LandingPageSpecs from "../../specs/landingPage.json";
import { useRef } from "react";

export default function Home() {
  const refMostPicked = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero
        travelers={LandingPageSpecs.hero.travelers}
        treasures={LandingPageSpecs.hero.treasures}
        cities={LandingPageSpecs.hero.cities}
        refMostPicked={refMostPicked}
      />
      <MostPicked
        data={LandingPageSpecs.mostPicked}
        refMostPicked={refMostPicked}
      />
    </>
  );
}
