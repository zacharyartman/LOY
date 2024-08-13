import { Metadata } from "next";
import Hero from "@/components/Hero";
import Classes from "@/components/Classes";
import About from "@/components/About";
import MobileApp from "@/components/MobileApp";
import CTA from "@/components/CTA";
import React from "react";
import MomenceSchedule from "@/components/MomenceSchedule";
import Popup from "@/components/Popup";

export const metadata: Metadata = {
  title: "Las Olas Yoga - Fort Lauderdale Yoga Studio",
  description: "Fort Lauderdale non-heated yoga studio on Las Olas offering classes seven days a week for all levels. Classes include Foundations, Slow Flow, Flow & Restore.",
  // other metadata
};

export default function Home() {

  return (
    <main>
      <Hero />
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
                All of our classes are taught in a non-heated environment, allowing you to fully immerse yourself in the practice without external distractions. `} viewClasses={true}/>
      <div id="classes"></div>
      <Classes title={true}/>
      <MomenceSchedule title={true} fullSchedule={false} sessionType={'class'} liteMode={true}/>
      <CTA />
      <MobileApp />
      <Popup />
    </main>
  );
}
