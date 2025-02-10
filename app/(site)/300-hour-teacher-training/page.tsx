import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Details from "@/components/Details";

export const metadata: Metadata = {
  title: "300-Hour Teacher Training - Las Olas Yoga",
  description: "Las Olas Yoga in Fort Lauderdale, South Florida, is a RYS (Registered Yoga School) with Yoga Alliance, fully compliant with their guidelines for 300-hour yoga teacher certifications",
  // other metadata
};
const ThreeHundredHour = () => {
  return (

    <>
      <NewPageHero titleText={"Teacher Training"} link='/images/hero/hero-tt-yoga-near-me.webp'></NewPageHero>
      <Details title={"300-Hour Teacher Training with Heather Artman"} dates={"September 13, 2025 - March 8, 2026"}
        text={`
<p class="align-center"><strong>In-Person Dates/Times:</strong><br /></p>
<b>September 13: Intro 12:00-1:30 pm</b><br /><em><br />Saturdays 12:00-5:00pm<br />Sundays 1:30-5:30pm</em><br /><br />
<em>October 11-12, November 8-9, December 13-14, January 10-11, February 7-8, March 7-8</em></p>
<p class="align-center"><strong>Did your 200-hour teaching training leave you craving more knowledge and experience in the teachings of yoga?</p></strong>
<p class="align-center">Our comprehensive Yoga Alliance-approved 300-hour teacher training program is a hybrid online-in person approach, giving you the flexibility to learn on your own time and then come together in community to share, practice and learn together. This 6-month program is modular, with each of the 6 modules consisting of 70% online hours and 30% in-person hours (one weekend per month: Saturdays 12-5pm &amp; Sundays 1:30-5:30pm).</p>
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
<p>Investment: $3500 | Payment Plans Available (Includes free unlimited membership and 10% off retail and workshops during the training)</p>

      `}
        images={
          [['/images/tt/yoga-teacher-training-fort-lauderdale-3.webp', 'Yoga teacher conducting a hybrid online and in-person 300-hour teacher training at Las Olas Yoga'],
             ['/images/tt/yoga-teacher-training-fort-lauderdale-4.webp', 'Yoga teacher assisting a student in a backbend during the 300-hour teacher training at Las Olas Yoga'],
              ['/images/tt/yoga-teacher-training-fort-lauderdale-5.webp', 'Yoga teacher using a whiteboard to explain advanced concepts during the 300-hour teacher training at Las Olas Yoga']]
        }
        buttonText={"Apply Now"}
        buttonLink={"https://forms.gle/t9kp1h7bR5MaVGdg8"}
        events = {[
          { date: [2025, 9, 13], title: "300 Hour TT Intro Session", start: [12, 0], end: [13, 30] },
          { date: [2025, 10, 11], title: "300 Hour TT Oct 11", start: [12, 0], end: [17, 0] },
          { date: [2025, 10, 12], title: "300 Hour TT Oct 12", start: [13, 30], end: [17, 30] },
          { date: [2025, 11, 8], title: "300 Hour TT Nov 8", start: [12, 0], end: [17, 0] },
          { date: [2025, 11, 9], title: "300 Hour TT Nov 9", start: [13, 30], end: [17, 30] },
          { date: [2025, 12, 13], title: "300 Hour TT Dec 13", start: [12, 0], end: [17, 0] },
          { date: [2025, 12, 14], title: "300 Hour TT Dec 14", start: [13, 30], end: [17, 30] },
          { date: [2026, 1, 10], title: "300 Hour TT Jan 10", start: [12, 0], end: [17, 0] },
          { date: [2026, 1, 11], title: "300 Hour TT Jan 11", start: [13, 30], end: [17, 30] },
          { date: [2026, 2, 7], title: "300 Hour TT Feb 7", start: [12, 0], end: [17, 0] },
          { date: [2026, 2, 8], title: "300 Hour TT Feb 8", start: [13, 30], end: [17, 30] },
          { date: [2026, 3, 7], title: "300 Hour TT Mar 7", start: [12, 0], end: [17, 0] },
          { date: [2026, 3, 8], title: "300 Hour TT Mar 8", start: [13, 30], end: [17, 30] },
        ]}

      />
    </>
  );
};

export default ThreeHundredHour;
