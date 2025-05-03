import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceSchedule from "@/components/MomenceSchedule";

export const metadata: Metadata = {
  title: "Workshops | Yoga Classes | Fort Lauderdale",
  description: "An overview of our upcoming yoga workshops and events at Las Olas Yoga in Fort Lauderdale. Founding members receive discounts on all events.",
  // other metadata
};

const WorkshopsPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Workshops & Events"} link='/images/hero/hero-workshop-yoga-near-me.webp' position="bg-[center_80%]"></NewPageHero>
      <MomenceSchedule title={false} fullSchedule={true} sessionType={'workshop'} liteMode={false}/>
    </>
  );
};

export default WorkshopsPage;
