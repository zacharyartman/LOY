import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import Details from "@/components/Details";

export const metadata: Metadata = {
  title: "Retreats - Las Olas Yoga",
  description: "Join Las Olas Yoga's transformative retreat in Sedona.",
};

const RetreatsPage = () => {
  return (

    <>
      <NewPageHero titleText={"Retreats"} link='/images/hero/retreats-yoga-near-me.webp'></NewPageHero>
      <Details
        title={"Sedona Soul Adventure: A Retreat in the Red Rocks with Keely"}
        dates={"October 9th - 15th, 2025"}
        text={`
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">Sedona Awakening Retreat<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
Escape to the breathtaking red rocks of Sedona for a soul-nourishing retreat designed to awaken your spirit, restore your energy, and deepen your yoga practice.<br><br>
Surrounded by Sedona’s stunning landscapes and powerful vortex energy, this retreat is an opportunity to reconnect with yourself through movement, mindfulness, and nature.<br><br>
In addition to yoga and special activities, you’ll have time to explore sacred landscapes, soak in healing energy, and connect with a like-minded community.<br><br>
Whether you’re seeking inspiration, relaxation, or transformation, this is your invitation to pause, breathe, and awaken to your highest self.<br><br>
<b>Are you ready to embrace the magic of Sedona?</b>
<o:p></o:p></p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif;"><b>🌄 What’s Included:<o:p></o:p></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
✔️ 5 days / 4 nights accommodations<br>
✔️ Ground transportation to/from Phoenix airport<br>
✔️ Daily yoga classes<br>
✔️ Nourishing homemade meals with our private chef<br>
✔️ Spectacular mountain and desert views<br>
✔️ Immersion in nature<br>
✔️ Jeep Sedona Vortex Tour<br>
✔️ Yoga Under the Stars event<br>
✔️ Optional Cathedral Rock hike with guided meditation
<o:p></o:p></p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif;"><b>🛏️ Accommodations (per person):<o:p></o:p></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
<b>Bedroom #1:</b> 1 Queen ($1897), 2 Singles ($1797)<br>
<b>Bedroom #2:</b> 2 Singles ($1797)<br>
<b>Bedroom #3:</b> 3 Singles ($1797)<br>
<b>Bedroom #4:</b> 1 King ($2097, 2nd person $1397)<br>
<b>Bedroom #5:</b> 1 King ($2097, 2nd person $1397), 1 Single ($1797)
<o:p></o:p></p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif;"><b>📌 Booking Details:<o:p></o:p></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
💵 $500 non-refundable deposit per person<br>
📅 Payment in full due by August 9th<br>
✈️ Airline travel not included<br><br>
<b>📍 Closest Airport:</b> Phoenix<br>
<b>🧘 This is an intimate retreat with limited availability so reserve your spot soon.</b>
<o:p></o:p></p><br/>
`}
        images={[['/images/retreats/retreat1.webp', 'a rejuvenating retreat experience with yoga, meditation, and wellness activities hosted by Las Olas Yoga in a serene location'],
        ['/images/retreats/retreat2.webp', 'a rejuvenating retreat experience with yoga, meditation, and wellness activities hosted by Las Olas Yoga in a serene location'],
        ['/images/retreats/retreat4.webp', 'a rejuvenating retreat experience with yoga, meditation, and wellness activities hosted by Las Olas Yoga in a serene location'],
        ['/images/retreats/retreat3.webp', 'a rejuvenating retreat experience with yoga, meditation, and wellness activities hosted by Las Olas Yoga in a serene location'],
        ['/images/retreats/retreat5.webp', 'a rejuvenating retreat experience with yoga, meditation, and wellness activities hosted by Las Olas Yoga in a serene location']]}

        buttonText={'Reserve My Spot'}
        buttonLink={'https://momence.com/s/114635798'}
      />
    </>
  );
};

export default RetreatsPage;
