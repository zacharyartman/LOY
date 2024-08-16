import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceGiftCard from "@/components/MomenceGiftCard";

export const metadata: Metadata = {
  title: "Gift Cards - Las Olas Yoga",
  description: "Our gift cards are sent via email and do not expire for a year. You can choose one of the standard amounts or create a custom amount.",
  // other metadata
};

const GiftCardsPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Gift Cards"} link='/images/hero/hero-gift-cards.webp' position="bg-[center_80%]"></NewPageHero>
      <div className="flex">
      <MomenceGiftCard />
      </div>
    </>
  );
};

export default GiftCardsPage;
