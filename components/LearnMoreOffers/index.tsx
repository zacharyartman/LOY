"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { offersData } from "./offersData";
import SingleOffer from "./SingleOffer";
import React from "react";
import { motion } from "framer-motion";


const Offers = () => {
  return (
    <>
      <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top flex flex-col gap-5 px-4 md:mt-5 md:px-8 2xl:px-0 max-w-c-1390 items-center mx-auto">
        {offersData.map((offer) => (
          <React.Fragment key={offer.id}>
            <h1 className="text-itemtitle2 py-2 text-left text-primary dark:text-white xl:text-hero px-5">
              {offer.title}
            </h1>
            {offer.items.map((offerItem) => (
              <SingleOffer key={offerItem.id} offer={offerItem} />
            ))}
          </React.Fragment>

        ))}
      </motion.div>
    </>
  );
};

export default Offers;
