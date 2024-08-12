import React from "react";
import { Metadata } from "next";
import NewPageHero from "@/components/NewPageHero";
import MomenceSchedule from "@/components/MomenceSchedule";
import MomenceChat from "@/components/MomenceChat";
import Pricing from "@/components/Pricing";
import MomenceGiftCard from "@/components/MomenceGiftCard";
import Details from "@/components/Details";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const RetreatsPage = () => {
  return (

    <>
      <NewPageHero titleText={"Retreats"} link='/images/hero/retreats.avif'></NewPageHero>
      <Details
        title={"Vermont Mountain Renewal Retreat with Keely"}
        dates={"October 3rd - 6th, 2024"}
        text={`
          <p>Join Keely as we retreat to Stratton, Vermont, where serene landscapes and rejuvenating yoga sessions await. Surrounded by the beauty of the mountains, immerse yourself in daily yoga classes amidst nature&#8217;s tranquility. Enjoy hikes, wholesome meals, and activities designed to deepen your practice and nourish your soul. The town of Stratton is a short walk away where we can enjoy shopping, eating and local festivities. </span>Unwind with restorative evening sessions and connect with like-minded individuals in this haven of relaxation and rejuvenation. The leaves should be beautiful this time of year, making for a breathtaking backdrop.</span></p>
<p>What&#8217;s Included:</p>
<ul>
<li>Accommodations for 4 days, 3 nights</li>
<li>Ground Transportation to and from the Albany airport</li>
<li>Daily yoga classes</li>
<li>Complimentary massage</li>
<li>Three homemade meals per day</li>
<li>Last day bountiful brunch</li>
<li>Dinner one night In Stratton (walkable from house)</li>
<li>Hiking paths right out the door and through the mountains</li>
</ul>
<p>The Accommodations (cost is per person):</p>
      <p>
        <span className="text-gray-900">Quad Room—4 twin beds, shared bath $1997 &#8211; 1 spot left</span>
      </p>
      <p className="text-center">
        <del>
          <span className="text-gray-900">Double Occupancy Room—2 queen beds, shared bath $2097 &#8211; 2 spots available</span>
        </del>
        <span className="text-gray-900"> Sold Out</span>
      </p>
      <p>
        <del>
          <span className="text-gray-900">Single or Double Occupancy—one queen bed, shared bath $2197 (add $1250 for 2nd person)</span>
        </del>
        <span className="text-gray-900"> Sold Out</span>
      </p>
      <p className="text-center">
        <del>
          <span className="text-gray-900">Single or Double Occupancy—one king bed, private bath, jacuzzi tub, balcony $2297 (add $1350 for 2nd person)</span>
        </del>
        <span className="text-gray-900"> Sold Out</span>
      </p>
      <p>Booking Rooms Now</p>
      <ul className="list-disc pl-5">
        <li>$500 non-refundable deposit per person to reserve your room</li>
        <li>Payment in full is required by September 3rd</li>
      </ul>
      <p><em>Airline travel not included</em></p>
      <p>This is an intimate retreat with limited availability so reserve your spot soon.</p>
      <p>Closest Airport: Albany</p>
          `}
          images={['/images/retreats/retreat1.webp', '/images/retreats/retreat2.webp', '/images/retreats/retreat3.webp']}

          buttonText={'Reserve My Spot'}
          buttonLink={'https://momence.com/s/100580762'}
      />
    </>
  );
};

export default RetreatsPage;
