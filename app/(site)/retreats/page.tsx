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
Join Keely Hubbard and Bebe Acciavatti for an unforgettable week in the heart of Tuscany. Surrounded by vineyards, olive groves, and rolling hills, this retreat offers the perfect balance of movement, mindfulness, and adventure.<br><br>
Located between Florence and Siena, just a short stroll from the charming village of Panzano in Chianti, our Tuscan hideaway captures the essence of Italian serenity. Mornings begin with yoga overlooking the countryside, followed by leisurely meals crafted from local ingredients. Each day unfolds with optional excursions, relaxation by the pool, or quiet reflection under the olive trees.<br><br>
Evenings invite you to unwind with restorative yoga, sound baths, and heartfelt connection, ending with sunsets that linger in your memory long after you return home.<br><br>
This retreat is designed to help you slow down, reconnect, and be inspired through yoga, community, and the timeless rhythm of Tuscany.
</p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
What’s Included
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
- 7 nights / 8 days in a luxury Tuscan villa<br>
- Group transportation to and from the Florence airport<br>
- Daily yoga practices<br>
- Sound Bath experience<br>
- Daily, locally sourced, chef-prepared meals and regional wines<br>
- Wine tastings and countryside excursions<br>
- Day trip to Florence<br>
- Private group cooking class<br>
- Free time to rest, journal, or explore
</p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
Accommodations
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
13th century, completely renovated luxury villa just outside Panzano, Italy, comprised of several apartments ranging from 1 to 3 bedrooms.<br>
All bedrooms have private bathrooms and are single or double occupancy with one double bed.
</p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
Early Bird Pricing (Ends April 15th, 2026)
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
Single Occupancy: $3995<br>
Extra Person: $1997
</p>

<p class="MsoNormal" style="margin: 10px 0 0; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
Pricing After April 15th
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
Single Occupancy: $4195<br>
Extra Person: $2197
</p>

<p class="MsoNormal" style="margin: 10px 0 0; font-size: 11pt; font-family: Calibri, sans-serif;">
Non-refundable deposit of $750 reserves your spot.
</p>

<hr size="0" width="100%" align="center" style="margin: 20px 0;" />

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
Payment Plans Available
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
Reach out for more information.
</p>

`}
      />
    </>
  );
};

export default RetreatsPage;
