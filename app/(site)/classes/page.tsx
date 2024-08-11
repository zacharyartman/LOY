import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
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
