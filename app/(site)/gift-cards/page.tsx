import { Metadata } from "next";
import React from "react";

import MomenceGiftCard from "@/components/MomenceGiftCard";
import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description:
    "Our gift cards are sent via email and do not expire for a year. You can choose one of the standard amounts or create a custom amount.",
  title: "Gift Cards | Yoga Classes | Fort Lauderdale",
};

const GiftCardsPage = () => {
  return (
    <>
      <NewPageHero
        titleText={"Gift Cards"}
        link="/images/hero/hero-gift-cards-yoga-near-me.webp"
        position="bg-[center_80%]"
      ></NewPageHero>
      <div className="flex">
        <MomenceGiftCard />
      </div>
    </>
  );
};

export default GiftCardsPage;
