import { Metadata } from "next";
import Link from "next/link";
import React from "react";

import MomenceSchedule from "@/components/MomenceSchedule";
import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description:
    "An overview of our upcoming yoga workshops and events at Las Olas Yoga in Fort Lauderdale. Founding members receive discounts on all events.",
  title: "Workshops | Yoga Classes | Fort Lauderdale",
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
        <Link
          href="/schedule"
          className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-150 hover:bg-primaryho"
        >
          View Class Schedule
        </Link>
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
