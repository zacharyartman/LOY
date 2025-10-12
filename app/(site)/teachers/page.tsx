import { Metadata } from "next";
import React from "react";

import NewPageHero from "@/components/NewPageHero";
import Teachers from "@/components/Teachers";

export const metadata: Metadata = {
  description: "Our highly-experienced teachers are here to serve our community. They are skilled at providing modifications and variations for all levels of practitioners.",
  title: "Our Team | Best Yoga Classes | Fort Lauderdale",
  // other metadata
};

const ThreeHundredHour = () => {
  return (

    <>
      <NewPageHero titleText={"Teachers"} link='/images/hero/hero-teachers-yoga-near-me.webp' position="bg-center lg:bg-[center_60%]"></NewPageHero>
      <Teachers />
    </>
  );
};

export default ThreeHundredHour;
