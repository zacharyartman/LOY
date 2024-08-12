import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceSchedule from "@/components/MomenceSchedule";
import MomenceChat from "@/components/MomenceChat";
import About from "@/components/About";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const WorkshopsPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"About Us"} link='/images/hero/hero-about.webp' position="bg-[center_30%]"></NewPageHero>
      <div className="my-15">
      <About aboutText={`At Las Olas Yoga, our mission is to create a sanctuary of well-being, where movement, mindfulness, and community intersect. Step into our space and instantly feel a sense of calm and serenity, carefully cultivated to nurture your journey towards inner peace and self-discovery. We provide a welcoming environment where you can reconnect with old friends, forge new connections, and practice together as a supportive community.<br /><br />
All of our classes are taught in a non-heated environment, allowing you to fully immerse yourself in the practice without external distractions. Our dedicated team is committed to guiding you on a transformative path, where movement becomes a catalyst for healing, mindfulness deepens your connection with the present moment, and the power of community lifts your spirit.<br /><br />

Join us at Las Olas Yoga and experience a place where wellness, healing, and self-discovery come together, creating a space of growth, connection, and transformation.
`} viewClasses={true}/>
      </div>
    </>
  );
};

export default WorkshopsPage;
