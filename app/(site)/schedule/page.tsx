import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceSchedule from "@/components/MomenceSchedule";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schedule | Best Yoga Classes | Fort Lauderdale",
  description:
    "Weekly schedule of our yoga classes and workshops. We have classes 7 days a week for all levels with weekday morning & evening classes and weekend morning classes.",
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
          className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-200 hover:bg-primaryho"
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
