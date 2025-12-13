import { Metadata } from "next";
import React from "react";

import MomenceGiftCard from "@/components/MomenceGiftCard";
import NewPageHero from "@/components/NewPageHero";
import pricingData from "@/components/Pricing/pricingData";

export const metadata: Metadata = {
  description:
    "Our gift cards are sent via email and do not expire for a year. You can choose one of the standard amounts or create a custom amount.",
  title: "Gift Cards | Yoga Classes | Fort Lauderdale",
};

const GiftCardsPage = () => {
  const getGiftUrl = (title: string, href: string) => {
    if (title === "Single Class") {
      return "https://momence.com/m/136478?g=gift";
    }
    return `${href}?g=gift`;
  };

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

      {/* Gift Packages - Styled like Momence buttons */}
      <div className="bg-white pb-20">
        <div className="mx-auto max-w-[800px] px-4">
          <h2 className="mb-6 text-left text-2xl font-light text-[rgb(165,131,103)]">
            Or Gift a Package
          </h2>
          <p className="mb-6 text-left text-base font-light text-[rgb(165,131,103)]">
            Pick a yoga package
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {pricingData.map((item) => (
              <a
                key={item.id}
                href={getGiftUrl(item.title, item.href)}
                target="_blank"
                className="flex h-[60px] cursor-pointer flex-col items-center justify-center rounded-[8px] border border-transparent text-center outline-none transition-all duration-300 ease-in-out"
                style={{
                  backgroundColor: 'rgba(165, 131, 103, 0.1)',
                  color: 'rgb(165, 131, 103)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                <div>${item.price}</div>
                <div style={{ fontSize: '12px', fontWeight: '400' }}>{item.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardsPage;
