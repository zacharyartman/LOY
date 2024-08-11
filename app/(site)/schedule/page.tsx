import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceSchedule from "@/components/MomenceSchedule";
import MomenceChat from "@/components/MomenceChat";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SchedulePage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Schedule"} link='/images/general/classes.webp'></NewPageHero>
      <MomenceSchedule title={false} fullSchedule={true}/>
    </>
  );
};

export default SchedulePage;
