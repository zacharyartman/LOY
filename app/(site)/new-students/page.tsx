import { Metadata } from "next";
import React from "react";

import NewPageHero from "@/components/NewPageHero";
import NewStudents from "@/components/NewStudents";

export const metadata: Metadata = {
  description: "Welcome to Las Olas Yoga! Our New Clients and FAQ page provides everything you need to get started on your yoga journey. Find answers to common questions, learn what to expect in our non-heated, all-levels classes, and discover tips for making the most of your practice. Whether you're a beginner or new to our community, explore helpful resources to ensure a smooth and supportive experience at Las Olas Yoga.",
  title: "New Clients | Best Yoga Classes | Fort Lauderdale",
  // other metadata
};

const NewStudentsPage = () => {

  return (
    <>
      <NewPageHero titleText={"New Clients"} link='/images/hero/hero-new-students-yoga-near-me.webp'></NewPageHero>
      <NewStudents />
      </>
  );
};

export default NewStudentsPage;
