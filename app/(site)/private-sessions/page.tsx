import { Metadata } from "next";
import React from "react";

import Details from "@/components/Details";
import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description: "Private yoga sessions are a great way to get personalized attention and focus on your goals. Whether you're a beginner or an advanced practitioner, we can tailor a session to meet your needs.",
  title: "Private Sessions | Yoga Classes | Fort Lauderdale",
  // other metadata
};
const ThreeHundredHour = () => {
  return (

    <>
      <NewPageHero titleText={"Private Sessions"} link='/images/privates/privates-hero.webp'></NewPageHero>
      <Details title={"PRIVATE YOGA SESSIONS"} dates={"Yoga tailored to you—your body, your goals, your schedule."} teacher=""
        text={`
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">Discover the Benefits of Private Yoga:<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">✔️</span> <b>Personalized Attention:</b> Work one-on-one with our experienced instructors to address your unique needs and goals.<o:p></o:p></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">✔️</span> <b>Flexible Scheduling:</b> Choose session times that fit seamlessly into your busy life.<o:p></o:p></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">✔️</span> <b>Customized Practice:</b> Whether you're a beginner or an advanced practitioner, sessions are designed to meet you where you are.<o:p></o:p></p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;"><hr size="0" width="100%" align="center"></div>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">Available for:<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">🧘‍♀️</span> <b>Individuals</b><br>
<span style="font-family: "Apple Color Emoji";">👫</span> <b>Couples</b><br>
<span style="font-family: "Apple Color Emoji";">👥</span> <b>Small groups</b><o:p></o:p></p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;"><hr size="0" width="100%" align="center"></div>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">Who Can Benefit:<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">🌱</span> <b>New to Yoga:</b> Build a strong foundation and gain confidence before joining group classes.<o:p></o:p></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">💪</span> <b>Recovering from Injury:</b> Receive guidance on safe movements and modifications to support healing.<o:p></o:p></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">🧠</span> <b>Seeking Deeper Practice:</b> Focus on specific poses, techniques, or areas of interest to deepen your practice.<o:p></o:p></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">⏰</span> <b>Busy Professionals:</b> Maintain a consistent practice with sessions scheduled around your availability.<o:p></o:p></p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;"><hr size="0" width="100%" align="center"></div>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">Session Details:<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><span style="font-family: "Apple Color Emoji";">⏱️</span> <b>Duration:</b> 60 minutes<br>
<span style="font-family: "Apple Color Emoji";">📍</span> <b>Location:</b> In-studio<br>
<span style="font-family: "Apple Color Emoji";">💰</span> <b>Pricing:</b> Please contact us at <a href="mailto:info@lasolas.yoga" style="color: #8a6a4f; text-decoration: none;"><b>info@lasolas.yoga</b></a> for current rates and package options<o:p></o:p></p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;"><hr size="0" width="100%" align="center"></div>
      `}
        images={
          [['/images/privates/privates3.webp', 'Private yoga instruction with hands-on guidance'],]
        }
        verticalImages={true}
      />
    </>
  );
};

export default ThreeHundredHour;
