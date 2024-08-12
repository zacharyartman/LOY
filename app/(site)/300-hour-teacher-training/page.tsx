import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Classes from "@/components/Classes";
import Details from "@/components/Details";

export const metadata: Metadata = {
  title: "300-Hour Teacher Training - Las Olas Yoga",
  description: "Las Olas Yoga in Fort Lauderdale, South Florida, is a RYS (Registered Yoga School) with Yoga Alliance, fully compliant with their guidelines for 300-hour yoga teacher certifications",
  // other metadata
};
const ThreeHundredHour = () => {
  return (

    <>
      <NewPageHero titleText={"Teacher Training"} link='/images/hero/hero-tt.webp'></NewPageHero>
      <Details title={"300-Hour Teacher Training with Heather Artman"} dates={"September 18, 2024 - March 23, 2025<br />Online + 6 In-Person Weekends"}
        text={`
    <h2 class="text-center"><strong style="color:red">One Spot Left</strong></h2>
<p class="align-center"><strong>In-Person Dates/Times:</strong><br /></p>
<em>Fridays 6:00-8:00pm,<br />Saturdays 12:00-6:00pm<br />Sundays 1:30-5:30pm</em><br /><br />
<em>October 18-20, November 15-17, December 13-15, January 10-12, February 21-23, March 21-23</em></p>
<p class="align-center"><strong>Did your 200-hour teaching training leave you craving more knowledge and experience in the teachings of yoga?</p></strong>
<p class="align-center">Our comprehensive Yoga Alliance-approved 300-hour teacher training program is a hybrid online-in person approach, giving you the flexibility to learn on your own time and then come together in community to share, practice and learn together. This 6-month program is modular, with each of the 6 modules consisting of 70% online hours and 30% in-person hours (one weekend per month: Fridays 6:00-8:00pm, Saturdays 12-6pm &amp; Sundays 1:30-5:30pm).</p>
<p class="align-center"><strong>The curriculum includes:</strong></p>
<ul>
<li>Module 1: Advanced Cueing and Navigating the Classroom</li>
<li>Module 2: Creative and Complex Sequencing</li>
<li>Module 3: Energetics &amp; the Subtle Body</li>
<li>Module 4: Refined Techniques: Observing and Assisting Students</li>
<li>Module 5: Beyond Asana in the Classroom &#8211; Theming through Philosophy, Mythology &amp; Ayurveda</li>
<li>Module 6: Yoga Specialties</li>
<li>Also included: Refining Your Teaching: A Mentorship Program &#8211; 1:1 mentoring with lead instructor, Heather Artman to focus on your individual needs throughout the program</li>
</ul>
<p>Access to online content will be provided one month prior to the in-person sessions.</p>
<p><strong>Prerequisite:</strong> 200-hour RYT + at least 2 years of yoga experience and 6 months of teaching experience.</p>
<p>Questions? Reach out via email (info@lasolas.yoga) or text/phone (954-372-5275).</p>
<p>Investment: $3500 | Payment Plans Available (Includes free unlimited membership and 20% off retail and workshops during the training)</p>

      `}
        images={
          ['/images/tt/tt-3.webp', '/images/tt/tt-4.webp', '/images/tt/tt-5.webp']
        }
        buttonText={"Waitlist/Interest for Next Session"}
        buttonLink={"https://forms.gle/DyT6yAZRC9HNrrkz6"}

      />
    </>
  );
};

export default ThreeHundredHour;
