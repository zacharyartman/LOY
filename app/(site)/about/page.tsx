import { Metadata } from "next";
import React from "react";

import About from "@/components/About";
import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description: "Our mission is to provide a place of wellness, healing and self-discovery through movement, mindfulness & community. We are located in Ft Lauderdale on Las Olas Blvd.",
  title: "Our Studio | Best Yoga Classes | Fort Lauderdale",
  // other metadata
};

const WorkshopsPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"About Us"} link='/images/hero/hero-about-yoga-near-me.webp' position="bg-[center_30%]"></NewPageHero>
      <div className="my-15">
      <About aboutText={`Las Olas Yoga is a non-heated yoga studio located in the heart of downtown Fort Lauderdale on Las Olas Boulevard. We offer yoga classes for all levels, including beginner yoga, slow flow, vinyasa flow, restorative yoga, yin yoga, meditation, and yoga teacher training. Our welcoming, inclusive community provides a supportive space to build strength, improve mobility, reduce stress, and develop a sustainable yoga practice.<br /><br />
Whether you're new to yoga or an experienced practitioner, you'll find expert instruction, thoughtful alignment-based teaching, and a friendly atmosphere designed to help you feel at home. Join us for yoga in Fort Lauderdale and discover a practice that supports both body and mind.
`} viewClasses={true}/>
      </div>
    </>
  );
};

export default WorkshopsPage;
