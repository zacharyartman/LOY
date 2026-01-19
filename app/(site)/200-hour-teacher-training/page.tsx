import { Metadata } from "next";
import React from "react";

import Details from "@/components/Details";
import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description:
    "Las Olas Yoga in Fort Lauderdale, South Florida, is a RYS (Registered Yoga School) with Yoga Alliance, fully compliant with their guidelines for 200-hour yoga teacher certifications",
  title: "200-Hour Teacher Training | Yoga Classes | Fort Lauderdale",
  // other metadata
};

const TwoHundredHourTTPage = () => {
  return (
    <>
      <NewPageHero
        titleText={"Teacher Training"}
        link="/images/hero/hero-tt-yoga-near-me.webp"
      ></NewPageHero>
      <Details
        title={"200-Hour Teacher Training"}
        dates={"Next Session: TBD"}
        teacher="Heather Artman, Keely Hubbard and Dafna Zacharin"
        text={`
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 13.5pt;">Train with Purpose. Teach from the Heart.<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">This <b>Yoga Alliance–approved</b> training supports both aspiring teachers and dedicated students. Through a blend of <b>in-person weekends</b> and <b>self-paced online learning</b>, you'll explore the teachings of yoga in a way that fits your life.<o:p></o:p></p><br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">What You’ll Learn<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
<span style="font-family: 'Apple Color Emoji';">🔹</span> Yoga history, philosophy & ethics<br>
<span style="font-family: 'Apple Color Emoji';">🔹</span> Functional anatomy & biomechanics<br>
<span style="font-family: 'Apple Color Emoji';">🔹</span> Asana, alignment & intelligent sequencing<br>
<span style="font-family: 'Apple Color Emoji';">🔹</span> Pranayama, meditation & energetics<br>
<span style="font-family: 'Apple Color Emoji';">🔹</span> Voice, cueing & class leadership<br>
<span style="font-family: 'Apple Color Emoji';">🔹</span> Practice teaching & mentorship<o:p></o:p></p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;"><hr size="0" width="100%" align="center"></div>
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">Why Train at Las Olas Yoga?<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">Train in a <b>warm, supportive, non-heated</b> studio environment where <b>yoga is accessible to all</b>. With a <b>small group format</b> and experienced teachers, you'll be guided to grow with confidence and authenticity.<o:p></o:p></p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;"><hr size="0" width="100%" align="center"></div>
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">What’s Included<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
<span style="font-family: 'Apple Color Emoji';">✔️</span> 200-hour comprehensive curriculum<br>
<span style="font-family: 'Apple Color Emoji';">✔️</span> Free unlimited studio membership during the training<br>
<span style="font-family: 'Apple Color Emoji';">✔️</span> Comprehensive training manual<br>
<span style="font-family: 'Apple Color Emoji';">✔️</span> 10% off retail and workshops<br>
<span style="font-family: 'Apple Color Emoji';">✔️</span> Optional community teaching post-training<o:p></o:p></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b>Not Included:</b> Required and recommended readings<o:p></o:p></p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;"><hr size="0" width="100%" align="center"></div>
Click the button below to be notified about the next session.
</p>
      `}
        images={[]}
        buttonText={"Join the List"}
        buttonLink={"https://forms.gle/5xx5Ye5VAVsv6FVP8"}
        teacherNamesUnderApplyButton={[
          "Heather Artman",
          "Keely Hubbard",
          "Dafna Zacharin",
        ]}
        events={[
          {
            date: [2026, 1, 17],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Jan 17",
          },
          {
            date: [2026, 1, 18],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Jan 18",
          },
          {
            date: [2026, 1, 24],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Jan 24",
          },
          {
            date: [2026, 1, 25],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Jan 25",
          },
          {
            date: [2026, 1, 31],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Jan 31",
          },
          {
            date: [2026, 2, 1],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Feb 1",
          },
          {
            date: [2026, 2, 14],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Feb 14",
          },
          {
            date: [2026, 2, 15],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Feb 15",
          },
          {
            date: [2026, 2, 21],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Feb 21",
          },
          {
            date: [2026, 2, 22],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Feb 22",
          },
          {
            date: [2026, 2, 28],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Feb 28",
          },
          {
            date: [2026, 3, 1],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Mar 1",
          },
          {
            date: [2026, 3, 14],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Mar 14",
          },
          {
            date: [2026, 3, 15],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Mar 15",
          },
          {
            date: [2026, 3, 21],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Mar 21",
          },
          {
            date: [2026, 3, 22],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Mar 22",
          },
          {
            date: [2026, 3, 28],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Mar 28",
          },
          {
            date: [2026, 3, 29],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Mar 29",
          },
          {
            date: [2026, 4, 4],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Apr 4",
          },
          {
            date: [2026, 4, 5],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Apr 5",
          },
          {
            date: [2026, 4, 11],
            end: [17, 0],
            start: [12, 0],
            title: "200 Hour TT Apr 11",
          },
          {
            date: [2026, 4, 12],
            end: [18, 30],
            start: [13, 30],
            title: "200 Hour TT Apr 12",
          },
        ]}
      />
    </>
  );
};

export default TwoHundredHourTTPage;
