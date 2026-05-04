import { Metadata } from "next";
import React from "react";

import NewPageHero from "@/components/NewPageHero";
import RetreatDetails from "@/components/RetreatDetails";

export const metadata: Metadata = {
  description:
    "Join Natalie Galliano and Keely Hubbard for Pura Vida in Costa Rica—March 13–18, 2027 at Pura Vida Retreat & Spa in the peaceful Central Valley.",
  title: "Costa Rica Retreat | Retreats | Las Olas Yoga",
};

const CostaRicaRetreatPage = () => {
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
  ];

  const landscapesImages = [
    "/images/retreats/landscapes/belvedere.jpeg",
    "/images/retreats/landscapes/campannaview.jpeg",
    "/images/retreats/landscapes/la torre.jpeg",
    "/images/retreats/landscapes/landscape 2.jpeg",
    "/images/retreats/landscapes/melograno.jpeg",
  ];

  return (
    <>
      <NewPageHero
        titleText={"Retreats"}
        link="/images/retreats/landscapes/campannaview.jpeg"
      ></NewPageHero>

      <RetreatDetails
        accommodationsImages={accommodationsImages}
        buttonLink={"https://momence.com/m/761296"}
        buttonText={"Reserve my Spot"}
        dates={"March 13&ndash;18, 2027"}
        landscapesImages={landscapesImages}
        mainImages={mainImages}
        title={"Pura Vida in Costa Rica: A Return to Your Essence"}
        text={`

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Join <b>Natalie Galliano</b> and <b>Keely Hubbard</b> for a week designed to bring you back to yourself, set in the peaceful mountains of Costa Rica&rsquo;s Central Valley, a quick journey from San Jose Airport.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Perched above the clouds at Pura Vida Retreat &amp; Spa, this space offers a natural pause from the pace of everyday life. Surrounded by rolling coffee fields and lush greenery, it&rsquo;s a place where things begin to slow down&hellip; and where you can, too.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  In Costa Rica, you&rsquo;ll hear the phrase <i>pura vida</i> often. It translates to &ldquo;pure life,&rdquo; but it&rsquo;s less about the words and more about a way of being: present, unhurried, appreciative of what&rsquo;s in front of you. This retreat is an invitation to experience that for yourself, not as an idea, but as something you can actually feel and carry home with you.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  This retreat isn&rsquo;t about doing more. It&rsquo;s about creating space. Space to breathe, to move, to reflect, and to reconnect in a way that feels steady and real.
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  What your days will feel like
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Mornings begin gently, with yoga and breathwork as the sun rises over the valley. In the afternoons, we&rsquo;ll gather again for slower, more restorative practices, giving your body time to soften and your mind time to settle.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Throughout the week, we&rsquo;ll share a few intentional experiences together: a cacao ceremony, guided yoga nidra, sound healing, and space for quiet reflection.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  Meals are fresh, nourishing, and thoughtfully prepared using local ingredients.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  There will also be plenty of unstructured time. Time to sit by the pool, walk the gardens, read, rest, or just take in the view without needing to be anywhere else.
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  What&rsquo;s Included
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">🏡</span> 5 nights / 6 days at the Pura Vida Retreat &amp; Spa<br />
  <span style="font-family: 'Apple Color Emoji';">🚐</span> Group transportation to and from the San Jose airport<br />
  <span style="font-family: 'Apple Color Emoji';">🧘‍♀️</span> Daily yoga practices<br />
  <span style="font-family: 'Apple Color Emoji';">🎶</span> Sound bath experience<br />
  <span style="font-family: 'Apple Color Emoji';">🍽️</span> Daily, locally sourced nourishing meals<br />
  <span style="font-family: 'Apple Color Emoji';">☕️</span> Cacao ceremony<br />
  <span style="font-family: 'Apple Color Emoji';">🥣</span> Sound healing<br />
  <span style="font-family: 'Apple Color Emoji';">😌</span> Yoga nidra<br />
  <span style="font-family: 'Apple Color Emoji';">📖</span> Free time to rest, journal, or explore
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Accommodations
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  All rooms have private bathrooms and balconies, with single or double occupancy.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <b>A-Frame Cottage</b> &mdash; King or 2 twin beds, single or double occupancy. Open, airy, and surrounded by nature.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <b>Vista Deluxe Room</b> &mdash; King or 2 twin beds, single or double occupancy. Grounding and spacious, ideal for solo travelers or sharing.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <b>Zendo Suite</b> &mdash; One king bed, single or double occupancy. A luxurious, private, expansive space with panoramic views and a soaking tub overlooking the landscape. Only 1 available.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <b>Prana Suite</b> &mdash; One king bed, single or double occupancy. Luxurious, light-filled and modern, with a balcony and a quiet, tucked-away feel. Only 1 available.
</p>

<div class="MsoNormal" align="center" style="margin: 0in; margin-top: 20px; margin-bottom: 20px; font-size: 11pt; font-family: Calibri, sans-serif; text-align: center;">
  <hr size="0" width="100%" align="center" />
</div>

<p class="MsoNormal" style="margin: 0in; font-size: 18pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Pricing
</p>

<p class="MsoNormal" style="margin: 0in; font-size: 13.5pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Early Bird Pricing <span style="font-size: 11pt;">(Ends September 15th, 2026)</span>
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 12pt; font-family: Calibri, sans-serif; font-weight: bold;">
  A-Frame Cottage
</p>
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">💰</span> Single Occupancy: $2449<br />
  <span style="font-family: 'Apple Color Emoji';">👯</span> Double Occupancy: $1597 pp
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 12pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Vista Deluxe Room
</p>
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">💰</span> Single Occupancy: $2549<br />
  <span style="font-family: 'Apple Color Emoji';">👯</span> Double Occupancy: $1697 pp
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 12pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Zendo Suite
</p>
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">💰</span> Single Occupancy: $2897<br />
  <span style="font-family: 'Apple Color Emoji';">👯</span> Double Occupancy: $1897 pp
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 12pt; font-family: Calibri, sans-serif; font-weight: bold;">
  Prana Suite
</p>
<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">💰</span> Single Occupancy: $2897<br />
  <span style="font-family: 'Apple Color Emoji';">👯</span> Double Occupancy: $1897 pp
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif; font-style: italic;">
  Pricing after September 15th increases by $200 per person.
</p>

<br />

<p class="MsoNormal" style="margin: 0in; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-family: 'Apple Color Emoji';">🔒</span> <b>Non-refundable deposit:</b> $500 reserves your spot<br />
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

export default CostaRicaRetreatPage;
