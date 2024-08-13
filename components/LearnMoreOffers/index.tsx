"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { offersData } from "./offersData";
import SingleOffer from "./SingleOffer";


const Offers = () => {
  return (
    <>
    <div className="flex flex-col gap-5 px-4 md:mt-5 md:px-8 2xl:px-0 max-w-c-1390 items-center mx-auto">
    {offersData.map((offer) => (
          <SingleOffer key={offer.id} offer={offer} />
        ))}
    </div>
    </>
  );
};

export default Offers;
