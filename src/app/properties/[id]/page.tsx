"use client";

import AboutBooking from "@/sections/detail/AboutBooking";
import Activities from "@/sections/detail/Activities";
import Header from "@/sections/detail/Header";
import Testimonial from "@/sections/detail/Testimonial";
import PropertyDetailSpecs from "../../../../specs/itemDetails.json";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header
          name={PropertyDetailSpecs.name}
          city={PropertyDetailSpecs.city}
          country={PropertyDetailSpecs.country}
          images={PropertyDetailSpecs.imageUrls.map((img) => img.url)}
        />
        <AboutBooking
          description={PropertyDetailSpecs.description}
          features={PropertyDetailSpecs.features}
          price={PropertyDetailSpecs.price}
          unit={PropertyDetailSpecs.unit}
        />
        <Activities data={PropertyDetailSpecs.activities} />
        <Testimonial data={PropertyDetailSpecs.testimonial} />
      </main>
      <Footer />
    </>
  );
}
