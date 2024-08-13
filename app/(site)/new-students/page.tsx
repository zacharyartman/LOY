import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";
import Details from "@/components/Details";
import pricingData from "@/components/Pricing/pricingData";
import FAQ from "@/components/FAQ";
import NewStudents from "@/components/NewStudents";

export const metadata: Metadata = {
  title: "New Students - Las Olas Yoga",
  description: "Welcome to Las Olas Yoga! Our New Student and FAQ page provides everything you need to get started on your yoga journey. Find answers to common questions, learn what to expect in our non-heated, all-levels classes, and discover tips for making the most of your practice. Whether you're a beginner or new to our community, explore helpful resources to ensure a smooth and supportive experience at Las Olas Yoga.",
  // other metadata
};

const NewStudentsPage = () => {

  return (
    <>
      <NewPageHero titleText={"New Students"} link='/images/hero/hero-new-students.webp'></NewPageHero>
      <NewStudents />
      </>
  );
};

export default NewStudentsPage;
