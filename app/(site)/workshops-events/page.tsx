import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceSchedule from "@/components/MomenceSchedule";

export const metadata: Metadata = {
  title: "Workshops | Yoga Classes | Fort Lauderdale",
  description:
    "An overview of our upcoming yoga workshops and events at Las Olas Yoga in Fort Lauderdale. Founding members receive discounts on all events.",
  // other metadata
};

const WorkshopsPage = () => {
  return (
    <>
      <NewPageHero
        titleText={"Workshops & Events"}
        link="/images/hero/hero-workshop-yoga-near-me.webp"
        position="bg-[center_80%]"
      ></NewPageHero>
      <div className="flex items-center justify-center gap-2 pt-7 xl:mt-0">
        <a
          href="/schedule"
          className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-200 hover:bg-primaryho"
        >
          View Class Schedule
        </a>
      </div>
      <MomenceSchedule
        title={false}
        fullSchedule={true}
        sessionType={"workshop"}
        liteMode={false}
      />
    </>
  );
};

export default WorkshopsPage;
