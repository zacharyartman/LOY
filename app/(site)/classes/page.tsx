import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";

export const metadata: Metadata = {
  title: "Classes - Las Olas Yoga",
  description: "We have classes for all levels: Foundations (beginners), Slow Flow (Flow at a slower pace), Flow (challenging practice) & Restore (calm, relaxing experience).",
  // other metadata
};

const SupportPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Classes"} link='/images/general/classes.webp'></NewPageHero>
      <Classes title={false}></Classes>
    </>
  );
};

export default SupportPage;
