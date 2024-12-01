import React from "react";
import { Metadata } from "next";
import BlackFridaySale from "@/components/BlackFriday";

export const metadata: Metadata = {
  title: "Cyber Monday Sale - Las Olas Yoga",
  description: "Our highly-experienced teachers are here to serve our community. They are skilled at providing modifications and variations for all levels of practitioners.",
};

const BlackFriday = () => {
  return (

    <>
      <BlackFridaySale />
    </>
  );
};

export default BlackFriday;
