import { Metadata } from "next";
import React from "react";

import Teachers from "@/components/Teachers";

export const metadata: Metadata = {
  description: "Our highly-experienced teachers are here to serve our community. They are skilled at providing modifications and variations for all levels of practitioners.",
  title: "Our Team | Best Yoga Classes | Fort Lauderdale",
  // other metadata
};

const ThreeHundredHour = () => {
  return (

    <>
      <section 
        className="relative mt-[88px] h-[200px] lg:h-[300px] overflow-hidden"
        style={{
          backgroundImage: `url('/images/hero/hero-teachers-yoga-near-me.jpg')`,
          backgroundPosition: 'center 23%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
       </section>
       <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-10">
         <h1 className="text-3xl font-bold text-black text-center">
           Meet Our Teachers
         </h1>
       </div>
       <Teachers />
    </>
  );
};

export default ThreeHundredHour;
