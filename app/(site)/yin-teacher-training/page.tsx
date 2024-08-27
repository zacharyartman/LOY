import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Details from "@/components/Details";

export const metadata: Metadata = {
  title: "Yin Yoga Teacher Training - Las Olas Yoga",
  description: "Fort Lauderdale Yin yoga teacher training",
  // other metadata
};

const YinTeacherTrainingPage = () => {
  return (
    
    <>
      <NewPageHero titleText={"Teacher Training"} link='/images/hero/hero-tt-yoga-near-me.webp'></NewPageHero>
      <Details title={"15-Hour Yin Yoga Teacher Training with Amanda Milian"} dates={"September 13-15, 2024<br/>Friday 6:00-9:00pm, Saturday & Sunday 1:30-7:30pm"} 
      text={`
<p>Join RYT 500 Amanda Milian for a 15-hour Yin Yoga Teacher Training. This is a comprehensive program designed to deepen your understanding of the Yin practice. This training is perfect for Yoga enthusiasts or Yoga Teachers who wish to specialize in the gentle and meditative practice of Yin. Throughout the course you’ll learn:</p>
<ul>
<li>Principles &amp; Philosophy of Yin Yoga</li>
<li>Various Yin Yoga poses &amp; the art of sequencing</li>
<li>Modifications &amp; Variations</li>
<li>The effects of Yin on the Nervous System &amp; Physical body</li>
<li>Insights into the anatomy &amp; energetics of the practice</li>
</ul>
<p>This training gives you the tools necessary to establish an at-home Yin practice or add this powerful practice into your teaching repertoire.</p>
<p>If you are a Yoga Teacher certified through Yoga Alliance, you will receive 15 CEUs.</p>
      `}
      images={
        [['/images/tt/yoga-teacher-training-fort-lauderdale-6.webp', 'yin yoga teacher training' ],
           ['/images/tt/yoga-teacher-training-fort-lauderdale-7.webp', 'yin yoga teacher training']]
      }
      buttonText={"Register"}
      buttonLink={"https://momence.com/s/103853800"}
      
      />
    </>
  );
};

export default YinTeacherTrainingPage;
