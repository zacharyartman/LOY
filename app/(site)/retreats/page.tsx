import { Metadata } from "next";
import React from "react";

import NewPageHero from "@/components/NewPageHero";
import RetreatDetails from "@/components/RetreatDetails";

export const metadata: Metadata = {
  description:
    "Join us in Tuscany for a rejuvenating yoga retreat surrounded by rolling hills, vineyards, and timeless Italian beauty.",
  title: "Retreats | Yoga Classes | Fort Lauderdale",
};

const RetreatsPage = () => {
  const mainImages = [
    "/images/retreats/main/image0.jpeg",
    "/images/retreats/main/IMG_4276.JPG",
  ];

  const accommodationsImages = [
    "/images/retreats/accommodations/bedroom 1.jpg",
    "/images/retreats/accommodations/livingroom.jpeg",
    "/images/retreats/accommodations/campanna bedroom.jpeg",
    "/images/retreats/accommodations/la torre bedroom.jpeg",
    "/images/retreats/accommodations/la torre seating area.jpeg",
    "/images/retreats/accommodations/melograno bedroom.jpeg",
    "/images/retreats/accommodations/melograno seating area.jpeg",
    "/images/retreats/accommodations/Totollo 2nd bedroom.jpeg",
    "/images/retreats/accommodations/Totollo Master.jpeg",
    "/images/retreats/accommodations/bedroom4.jpeg",
    "/images/retreats/accommodations/bedroom5.jpeg",
    "/images/retreats/accommodations/bedroom6.jpeg",
  ];

  const landscapesImages = [
    "/images/retreats/landscapes/belvedere.jpeg",
    "/images/retreats/landscapes/campannaview.jpeg",
    "/images/retreats/landscapes/la torre.jpeg",
    "/images/retreats/landscapes/landscape 2.jpeg",
    "/images/retreats/landscapes/melograno.jpeg",
    "/images/retreats/landscapes/our italy trip.jpeg",
    "/images/retreats/landscapes/totollo.jpeg",
  ];

  return (
    <>
      <NewPageHero
        titleText={"Retreats"}
        link="/images/retreats/landscapes/campannaview.jpeg"
      ></NewPageHero>

      <RetreatDetails
        accommodationsImages={accommodationsImages}
        buttonLink={"https://momence.com/l/nmhy721z"}
        buttonText={"Reserve My Spot"}
        dates={"October 31st - November 7th, 2026"}
        landscapesImages={landscapesImages}
        mainImages={mainImages}
        title={"Under the Tuscan Sun: A yoga retreat in the heart of Tuscany"}
        text={`

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Join <b>Keely Hubbard</b> and <b>Bebe Acciavatti</b> for an unforgettable week in the heart of Tuscany. Surrounded by vineyards, olive groves, and rolling hills, this retreat offers a thoughtful blend of <b>movement, mindfulness, and adventure</b>.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Located between <b>Florence and Siena</b>, just a short stroll from the charming village of <b>Panzano in Chianti</b>, our Tuscan hideaway captures the essence of Italian serenity. Mornings begin with yoga overlooking the countryside, followed by leisurely meals crafted from local ingredients. Each day unfolds with optional excursions, relaxation by the pool, or quiet reflection under the olive trees.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Evenings invite you to unwind with restorative yoga, sound baths, and heartfelt connection, closing with sunsets that linger in your memory long after you return home. This retreat is designed to help you <b>slow down, reconnect, and be inspired</b> through yoga, community, and the timeless rhythm of Tuscany.
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  What’s Included
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">✔️</span> 7 nights / 8 days in a luxury Tuscan villa<br />
  <span style="font-family: 'Apple Color Emoji';">✔️</span> Group transportation to and from the Florence airport<br />
  <span style="font-family: 'Apple Color Emoji';">🧘‍♀️</span> Daily yoga practices<br />
  <span style="font-family: 'Apple Color Emoji';">🎶</span> Sound bath experience<br />
  <span style="font-family: 'Apple Color Emoji';">🍽️</span> Daily, locally sourced, chef-prepared meals and regional wines<br />
  <span style="font-family: 'Apple Color Emoji';">🍷</span> Wine tastings and countryside excursions<br />
  <span style="font-family: 'Apple Color Emoji';">🏙️</span> Day trip to Florence<br />
  <span style="font-family: 'Apple Color Emoji';">👩‍🍳</span> Private group cooking class<br />
  <span style="font-family: 'Apple Color Emoji';">📖</span> Free time to rest, journal, or explore
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Accommodations
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  13th century, <b>completely renovated</b> luxury villa just outside <b>Panzano, Italy</b>, comprised of several apartments ranging from 1 to 3 bedrooms.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  All bedrooms have <b>private bathrooms</b> and are single or double occupancy with one double bed.
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Pricing
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Early Bird Pricing <span style="font-size: 11pt;">(Ends April 15th, 2026)</span>
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">💰</span> <b>Single Occupancy:</b> $3995<br />
  <span style="font-family: 'Apple Color Emoji';">➕</span> <b>Extra Person:</b> $1997
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Pricing After April 15th
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">💰</span> <b>Single Occupancy:</b> $4195<br />
  <span style="font-family: 'Apple Color Emoji';">➕</span> <b>Extra Person:</b> $2197
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">🔒</span> <b>Non-refundable deposit:</b> $750 reserves your spot<br />
  <span style="font-size: 9pt;">Payable via credit card (4% transaction fee), Zelle, check, or ACH direct debit</span>
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Payment Plans
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">💳</span> <b>Payment plans are available.</b><br />
  Reach out for more information and personalized options.
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

📩 <b>Questions?</b> Reach out via email at
<a href="mailto:info@lasolas.yoga" style="color: #8a6a4f; text-decoration: none;"><b>info@lasolas.yoga</b></a>
or text us at
<a href="tel:9543725275" style="color: #8a6a4f; text-decoration: none;"><b>(954) 372-5275</b></a>.
<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

`}
      />
    </>
  );
};

export default RetreatsPage;
