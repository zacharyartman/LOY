import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";
import MomenceGiftCard from "@/components/MomenceGiftCard";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Gift Cards"} link='/images/general/classes.webp'></NewPageHero>
      <div className="flex">
      <MomenceGiftCard />
      </div>
    </>
  );
};

export default SupportPage;
