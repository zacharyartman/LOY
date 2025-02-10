import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Details from "@/components/Details";

export const metadata: Metadata = {
  title: "200-Hour Teacher Training - Las Olas Yoga",
  description: "Las Olas Yoga in Fort Lauderdale, South Florida, is a RYS (Registered Yoga School) with Yoga Alliance, fully compliant with their guidelines for 200-hour yoga teacher certifications",
  // other metadata
};

const TwoHundredHourTTPage = () => {
  return (
    //<p style="text-align: center;"><em><strong>Registration is Open!</strong></em></p>
    <>
      <NewPageHero titleText={"Teacher Training"} link='/images/hero/hero-tt-yoga-near-me.webp'></NewPageHero>
      <Details title={"200-Hour Teacher Training with Amy Baldacci"} dates={"Next Session: 2025 Dates TBD"} 
      text={`
      
<p className="align-center">Our Yoga Teacher Training program is designed to enrich your personal practice and empower you to guide others along the path of yoga. Our comprehensive curriculum delves into various facets of the practice of yoga, encompassing asana, philosophy, meditation, anatomy, and beyond. Upon completion, you will be eligible for Yoga Alliance registration as a 200-RYT. Join us and unlock your potential to inspire and uplift others through the profound wisdom of yoga.</p>
<p style="text-align: center;"><strong>Dates</strong></p>
<p style="font-weight: 400; text-align: center;">TBD</p>
<h5><strong >What&#8217;s Included</strong></h5>
<ul>
<li>180 in-person hours with Amy Baldacci, E-RYT 500</li>
<li>20 online anatomy hours</li>
<li>Free unlimited membership during the training</li>
<li>Comprehensive training manual</li>
<li>10% off retail and workshops during the training</li>
<li>Opportunity to teach community classes at the studio post-training (optional)</li>
</ul>
<h5><strong>Not Included</strong></h5>
<ul>
<li>Required and recommended readings</li>
</ul>
<h5><strong>Rates</strong></h5>
<ul>
<li>$3200 if paid in full before early bird date</li>
<li>$3500 if paid in full after early bird date</li>
<li>$3700 for payment plan ($400 every two weeks or individualized plan)</li>
</ul>
<p>A $500 deposit is required to secure your spot.</p>
<h5><strong>How to Apply</strong></h5>
<ul>
<li>Step 1: Click the Apply button below and complete the application.</li>
<li>Step 2: Once accepted, you will receive an email with info on required and recommended reading as well as the link to submit your deposit.</li>
<li>Step 3: We will officially register you for the training!</li>
</ul>

      `}
      images={
        [['/images/tt/yoga-teacher-training-fort-lauderdale-0.webp', 'Yoga teacher guiding a student during the 200-hour teacher training at Las Olas Yoga'], 
        ['/images/tt/yoga-teacher-training-fort-lauderdale-2.webp', 'Yoga teacher guiding a student during the 200-hour teacher training at Las Olas Yoga']]
      }
      buttonText={"Interest for Next Session"}
      buttonLink={"https://forms.gle/ZCzoM6v5Ed4sDzCH8"}
      />
    </>
  );
};

export default TwoHundredHourTTPage;
