import { Metadata } from "next";
import React from "react";

import About from "@/components/About";
import Classes from "@/components/Classes";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import MobileApp from "@/components/MobileApp";
import MomenceSchedule from "@/components/MomenceSchedule";
import Popup from "@/components/Popup";

export const metadata: Metadata = {
  description:
    "Fort Lauderdale non-heated yoga studio on Las Olas offering classes seven days a week for all levels. Classes include Foundations, Slow Flow, Flow & Restore.",
  title:
    "Downtown Fort Lauderdale Yoga Studio | Non-Heated Yoga Classes | Las Olas Yoga",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex items-center justify-center bg-[#f8f4ef] py-2 ">
        <div className="flex max-w-4xl flex-row items-center justify-center gap-6 p-4 text-center">
          <h2 className="text-xl font-bold text-[#8a6a4f]">
            Black Friday Deals!
          </h2>
          <a
            className="rounded-full bg-[#8a6a4f] px-6 py-2 text-white transition duration-200 hover:bg-[#735a40]"
            href="/black-friday"
          >
            Save Here &rarr;
          </a>
        </div>
      </div>

      {/* Best Yoga Studio Section */}
      <div className="flex items-center justify-center">
        <div className="my-5 flex max-w-4xl flex-col items-center justify-center p-6 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-[#8a6a4f]">
            Best Yoga Studio in Fort Lauderdale!
          </h2>
          <p className="text-base text-[#a58367]">
            We are honored to be{" "}
            <a
              href="https://fortlauderdalemagazine.com/best/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline decoration-1 underline-offset-2 hover:text-primaryho hover:decoration-2"
            >
              voted
            </a>{" "}
            as the Best Yoga Studio in Fort Lauderdale for the 3rd year in a
            row.
          </p>
        </div>
      </div>
      <About
        aboutText={`                We are a Fort Lauderdale yoga studio in the heart of downtown on Las Olas Blvd.<br /><br />
                At Las Olas Yoga, our mission is to create a sanctuary of well-being, where movement, mindfulness, and community intersect. We provide a welcoming environment where you can reconnect with old friends, forge new connections, and practice together as a supportive community. <br /><br /> 
                All of our classes are taught in a non-heated environment, allowing you to fully immerse yourself in the practice without external distractions. `}
        viewClasses={true}
      />
      <div id="classes"></div>
      <Classes title={true} />
      <MomenceSchedule
        title={true}
        fullSchedule={false}
        sessionType={"class"}
        liteMode={true}
      />
      <CTA />
      <MobileApp />
      <Popup />
    </main>
  );
}
