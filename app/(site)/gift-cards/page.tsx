import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";
import MomenceGiftCard from "@/components/MomenceGiftCard";

export const metadata: Metadata = {
  title: "Gift Cards - Las Olas Yoga",
  description: "Our gift cards are sent via email and do not expire for a year. You can choose one of the standard amounts or create a custom amount.",
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
