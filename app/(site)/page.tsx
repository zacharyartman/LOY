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
            as the Best Yoga Studio in Fort Lauderdale for the 4th year in a
            row.
          </p>
        </div>
      </div>
      <About
        aboutText={`Las Olas Yoga is a non-heated yoga studio located in the heart of downtown Fort Lauderdale on Las Olas Boulevard. We offer yoga classes for all levels, including beginner yoga, slow flow, vinyasa flow, restorative yoga, yin yoga, meditation, and yoga teacher training. Our welcoming, inclusive community provides a supportive space to build strength, improve mobility, reduce stress, and develop a sustainable yoga practice.<br /><br />
                Whether you're new to yoga or an experienced practitioner, you'll find expert instruction, thoughtful alignment-based teaching, and a friendly atmosphere designed to help you feel at home. Join us for yoga in Fort Lauderdale and discover a practice that supports both body and mind.`}
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
