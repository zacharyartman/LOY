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
          <>
            <h1 className="text-itemtitle2 py-2 text-left text-primary dark:text-white xl:text-hero px-5">
              {offer.title}
            </h1>
            {offer.items.map((offerItem) => (
              <SingleOffer key={offerItem.id} offer={offerItem} />
            ))}
          </>

        ))}
      </div>
    </>
  );
};

export default Offers;
