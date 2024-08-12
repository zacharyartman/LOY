import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";
import Details from "@/components/Details";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const ThreeHundredHour = () => {
  return (

    <>
      <NewPageHero titleText={"Teachers"} link='/images/general/classes.webp'></NewPageHero>
      <Testimonial />
    </>
  );
};

export default ThreeHundredHour;
