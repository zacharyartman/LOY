import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Classes from "@/components/Classes";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Image from "next/legacy/image";
import React from "react";
import MomenceChat from "@/components/MomenceChat";
import MomenceSchedule from "@/components/MomenceSchedule";

export const metadata: Metadata = {
  title: "Las Olas Yoga - Fort Lauderdale Yoga Studio",
  description: "TODO",
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
      <Classes title={true}/>
      {/* <Pricing /> */}
      <MomenceSchedule title={true} fullSchedule={false} sessionType={'class'} liteMode={true}/>
      <CTA />
      {/* <Testimonial /> */}
      <FunFact />
      <Contact />
    </main>
  );
}
