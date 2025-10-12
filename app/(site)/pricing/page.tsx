import { Metadata } from "next";
import React from "react";

import NewPageHero from "@/components/NewPageHero";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  description: "Our yoga pricing options include options for everyone. We have an intro offer for new clients, memberships, short-term options for visitors and class cards.",
  title: "Pricing | Yoga Classes for All Levels | Fort Lauderdale",
  // other metadata
};

const PricingPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Pricing"} link='/images/hero/hero-gratitude-yoga-near-me.jpeg' position="bg-[center_40%]"></NewPageHero>
      <Pricing sectionHeader={false}/>
    </>
  );
};

export default PricingPage;
