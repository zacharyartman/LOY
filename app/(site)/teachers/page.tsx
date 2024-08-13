import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Teachers from "@/components/Teachers";

export const metadata: Metadata = {
  title: "Teachers - Las Olas Yoga",
  description: "Our highly-experienced teachers are here to serve our community. They are skilled at providing modifications and variations for all levels of practitioners.",
  // other metadata
};

const ThreeHundredHour = () => {
  return (

    <>
      <NewPageHero titleText={"Teachers"} link='/images/hero/hero-teachers.webp' position="bg-center lg:bg-[center_60%]"></NewPageHero>
      <Teachers />
    </>
  );
};

export default ThreeHundredHour;
