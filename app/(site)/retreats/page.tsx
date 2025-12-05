import { Metadata } from "next";
import React from "react";

import NewPageHero from "@/components/NewPageHero";
import RetreatDetails from "@/components/RetreatDetails";

export const metadata: Metadata = {
  description: "Join Las Olas Yoga's transformative retreat in Sedona.",
  title: "Retreats | Yoga Classes | Fort Lauderdale",
};

const RetreatsPage = () => {
  // Main images
  const mainImages = [
    "/images/retreats/main/image0.jpeg",
    "/images/retreats/main/IMG_4276.JPG",
  ];

  // Accommodations images
  const accommodationsImages = [
    "/images/retreats/accommodations/bedroom 1.jpg",
    "/images/retreats/accommodations/campanna bedroom.jpeg",
    "/images/retreats/accommodations/la torre bedroom.jpeg",
    "/images/retreats/accommodations/la torre seating area.jpeg",
    "/images/retreats/accommodations/melograno bedroom.jpeg",
    "/images/retreats/accommodations/melograno seating area.jpeg",
    "/images/retreats/accommodations/Totollo 2nd bedroom.jpeg",
    "/images/retreats/accommodations/Totollo Master.jpeg",
  ];

  // Landscapes images
  const landscapesImages = [
    "/images/retreats/landscapes/belvedere.jpeg",
    "/images/retreats/landscapes/campannaview.jpeg",
    "/images/retreats/landscapes/la torre.jpeg",
    "/images/retreats/landscapes/landscape 2.jpeg",
    "/images/retreats/landscapes/melograno.jpeg",
    "/images/retreats/landscapes/our italy trips.jpeg",
    "/images/retreats/landscapes/totollo.jpeg",
    "/images/retreats/landscapes/Tuscany Villa.jpeg",
  ];

  return (
    <>
      <NewPageHero
        titleText={"Retreats"}
        link="/images/retreats/landscapes/campannaview.jpeg"
      ></NewPageHero>
      <RetreatDetails
        accommodationsImages={accommodationsImages}
        buttonLink={"https://momence.com/s/114635798"}
        buttonText={"Reserve My Spot"}
        dates={"October 9th - 13th, 2025"}
        landscapesImages={landscapesImages}
        mainImages={mainImages}
        text={`
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;"><b><span style="font-size: 18pt;">Sedona Awakening Retreat<o:p></o:p></span></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
Escape to the breathtaking red rocks of Sedona for a soul-nourishing retreat designed to awaken your spirit, restore your energy, and deepen your yoga practice.<br><br>
Surrounded by Sedona's stunning landscapes and powerful vortex energy, this retreat is an opportunity to reconnect with yourself through movement, mindfulness, and nature.<br><br>
In addition to yoga and special activities, you'll have time to explore sacred landscapes, soak in healing energy, and connect with a like-minded community.<br><br>
Whether you're seeking inspiration, relaxation, or transformation, this is your invitation to pause, breathe, and awaken to your highest self.<br><br>
<b>Are you ready to embrace the magic of Sedona?</b>
<o:p></o:p></p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif;"><b>🌄 What's Included:<o:p></o:p></b></p>

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
<b>Bedroom #1</b> (Inspiration): 1 Queen (Sold Out), 1 Single ($1797): Spacious room with privacy<br>
<b>Bedroom #2</b> (Tranquility): <span style="color: red; font-weight: bold;">SOLD OUT</span><br>
<b>Bedroom #3</b> (Light): <span style="color: red; font-weight: bold;">SOLD OUT</span><br>
<b>Bedroom #4</b> (Clarity): <span style="color: red; font-weight: bold;">SOLD OUT</span><br>
<b>Bedroom #5</b> (Nurture): <span style="color: red; font-weight: bold;">SOLD OUT</span><br>
<o:p></o:p></p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif;"><b>📌 Booking Details:<o:p></o:p></b></p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
💵 $500 non-refundable deposit per person<br>
✈️ Airline travel not included<br><br>
<b>📍 Closest Airport:</b> Phoenix<br>
<b>🧘 This is an intimate retreat with limited availability so reserve your spot soon.</b>
<o:p></o:p></p><br/>
`}
        title={"Sedona Soul Adventure: A Retreat in the Red Rocks with Keely"}
      />
    </>
  );
};

export default RetreatsPage;
