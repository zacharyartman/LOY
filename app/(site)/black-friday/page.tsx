import { Metadata } from "next";
import React from "react";

import BlackFridaySale from "@/components/BlackFriday";

export const metadata: Metadata = {
  description:
    "Our highly-experienced teachers are here to serve our community. They are skilled at providing modifications and variations for all levels of practitioners.",
  title: "Cyber Monday Sale - Las Olas Yoga",
};

const BlackFriday = () => {
  return (
    <>
      <BlackFridaySale />
    </>
  );
};

export default BlackFriday;
