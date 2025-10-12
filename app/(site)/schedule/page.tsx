import { Metadata } from "next";
import Link from "next/link";
import React from "react";

import MomenceSchedule from "@/components/MomenceSchedule";
import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description:
    "Weekly schedule of our yoga classes and workshops. We have classes 7 days a week for all levels with weekday morning & evening classes and weekend morning classes.",
  title: "Schedule | Best Yoga Classes | Fort Lauderdale",
  // other metadata
};

const SchedulePage = () => {
  return (
    <>
      <NewPageHero
        titleText={"Schedule"}
        link="/images/hero/hero-schedule-yoga-near-me.webp"
      ></NewPageHero>
      <div className="flex items-center justify-center gap-2 pt-7 xl:mt-0">
        <Link
          href="/classes"
          className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-150 hover:bg-primaryho"
        >
          View Class Descriptions
        </Link>
      </div>
      <MomenceSchedule
        title={false}
        fullSchedule={true}
        sessionType={"class"}
        liteMode={false}
      />
    </>
  );
};

export default SchedulePage;
