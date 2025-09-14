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
        transition={{ duration: 0.3, delay: 0.05 }}
        viewport={{ once: true }}
        className="animate_top mx-auto flex max-w-c-1390 flex-col items-center gap-5 px-4 md:mt-5 md:px-8 2xl:px-0"
      >
        {offersData.map((offer) => (
          <React.Fragment key={offer.id}>
            <h1 className="px-5 py-2 text-left text-itemtitle2 text-primary xl:text-hero">
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
