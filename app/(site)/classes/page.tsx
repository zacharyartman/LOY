import { Metadata } from "next";
import Link from "next/link";
import React from "react";

import Classes from "@/components/Classes";
import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description:
    "We have classes for all levels: Foundations (beginners), Slow Flow (Flow at a slower pace), Flow (challenging practice) & Restore (calm, relaxing experience).",
  title: "Class Types | Yoga Classes for All Levels | Fort Lauderdale",
  // other metadata
};

const ClassesPage = () => {
  return (
    <>
      <NewPageHero
        titleText={"Class Types"}
        link="/images/general/yoga-classes-near-me.webp"
      ></NewPageHero>
      <div className="mx-auto max-w-c-1235 px-4 pt-10 md:px-8 xl:px-0">
        <p className="text-center text-metatitle3">
          Looking for yoga classes in Fort Lauderdale? Las Olas Yoga offers
          non-heated yoga classes for all levels, including beginner yoga,
          vinyasa flow, slow flow, restorative yoga, yin yoga, meditation, and
          yoga teacher training. Located in downtown Fort Lauderdale on Las Olas
          Boulevard, our welcoming studio provides alignment-focused instruction
          in a supportive, community-centered environment.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 py-7 xl:mt-0">
        <Link
          href="/schedule"
          className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-150 hover:bg-primaryho"
        >
          Book Now
        </Link>
      </div>
      <Classes title={false}></Classes>
    </>
  );
};

export default ClassesPage;
