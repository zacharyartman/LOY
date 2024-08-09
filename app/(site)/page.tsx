import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
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
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Las Olas Yoga - Fort Lauderdale Yoga Studio",
  description: "This is Home for Solid Pro",
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

      <About />
      <Feature />
      <Pricing />
      <Testimonial />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Contact />
      <Blog />
    </main>
  );
}
