import { Metadata } from "next";
import Hero from "@/components/Hero";
import Classes from "@/components/Classes";
import About from "@/components/About";
import MobileApp from "@/components/MobileApp";
import CTA from "@/components/CTA";
import React from "react";
import MomenceSchedule from "@/components/MomenceSchedule";
import Popup from "@/components/Popup";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Downtown Fort Lauderdale Yoga Studio | Non-Heated Yoga Classes | Las Olas Yoga",
  description: "Fort Lauderdale non-heated yoga studio on Las Olas offering classes seven days a week for all levels. Classes include Foundations, Slow Flow, Flow & Restore.",
  // other metadata
};

export default function Home() {

  return (
    <main>
      <Hero />
      {/* Deals Section */}
      <div className="flex items-center justify-center bg-[#f8f4ef] py-3">
        <div className="max-w-4xl flex flex-row items-center gap-6 justify-center p-4 text-center">
          <h2 className="text-xl font-bold text-[#8a6a4f]">Sedona Retreat</h2>
          <Link className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primaryho transition duration-200" href="/retreats">
            Explore Now &rarr;
          </Link>
        </div>
      </div>
      {/* Best Yoga Studio Section */}
      <div className="flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center justify-center p-6 my-5 text-center">
          <h2 className="text-2xl font-semibold text-[#8a6a4f] mb-4">
            Best Yoga Studio in Fort Lauderdale!
          </h2>
          <p className="text-base text-[#a58367]">
            We are honored to be voted as the Best Yoga Studio in Fort Lauderdale for 2023 and 2024.
          </p>
        </div>
      </div>

      <About aboutText={`                We are a Fort Lauderdale yoga studio in the heart of downtown on Las Olas Blvd.<br /><br />
                At Las Olas Yoga, our mission is to create a sanctuary of well-being, where movement, mindfulness, and community intersect. We provide a welcoming environment where you can reconnect with old friends, forge new connections, and practice together as a supportive community. <br /><br /> 
                All of our classes are taught in a non-heated environment, allowing you to fully immerse yourself in the practice without external distractions. `} viewClasses={true} />
      <div id="classes"></div>
      <Classes title={true} />
      <MomenceSchedule title={true} fullSchedule={false} sessionType={'class'} liteMode={true} />
      <CTA />
      <MobileApp />
      <Popup />
    </main>
  );
}