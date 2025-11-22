import { Metadata } from "next";
import React from "react";

import BlackFridaySale from "@/components/BlackFriday";

export const metadata: Metadata = {
  description:
    "Exclusive deals on memberships and class packs for Las Olas Yoga Black Friday Sale. Save on your yoga practice with our limited-time offers.",
  title: "Black Friday Sale - Las Olas Yoga",
};

const BlackFriday = () => {
  return (
    <>
      <BlackFridaySale />
    </>
  );
};

export default BlackFriday;
