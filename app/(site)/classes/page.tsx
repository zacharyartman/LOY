import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";

export const metadata: Metadata = {
  title: "Class Types | Yoga Classes for All Levels | Fort Lauderdale",
  description:
    "We have classes for all levels: Foundations (beginners), Slow Flow (Flow at a slower pace), Flow (challenging practice) & Restore (calm, relaxing experience).",
  // other metadata
};

const ClassesPage = () => {
  return (
    <>
      <NewPageHero
        titleText={"Class Types"}
        link="/images/general/yoga-classes-near-me.webp"
      ></NewPageHero>
      <div className="flex items-center justify-center gap-2 py-7 xl:mt-0">
        <a
          href="/schedule"
          className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-200 hover:bg-primaryho"
        >
          Book Now
        </a>
      </div>
      <Classes title={false}></Classes>
    </>
  );
};

export default ClassesPage;
