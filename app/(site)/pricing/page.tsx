import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceSchedule from "@/components/MomenceSchedule";
import MomenceChat from "@/components/MomenceChat";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const PricingPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Pricing"} link='/images/general/classes.webp'></NewPageHero>
      <Pricing sectionHeader={false}/>
    </>
  );
};

export default PricingPage;
