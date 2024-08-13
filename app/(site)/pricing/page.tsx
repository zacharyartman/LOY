import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing - Las Olas Yoga",
  description: "Our yoga pricing options include options for everyone. We have an intro offer for new students, memberships, short-term options for visitors and class cards.",
  // other metadata
};

const PricingPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Pricing"} link='/images/hero/hero-gratitude.jpeg' position="bg-[center_40%]"></NewPageHero>
      <Pricing sectionHeader={false}/>
    </>
  );
};

export default PricingPage;
