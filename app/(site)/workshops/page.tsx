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

const WorkshopsPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Workshops & Events"} link='/images/hero/hero-workshop.webp' position="bg-[center_80%]"></NewPageHero>
      <MomenceSchedule title={false} fullSchedule={true} sessionType={'workshop'} liteMode={false}/>
    </>
  );
};

export default WorkshopsPage;
