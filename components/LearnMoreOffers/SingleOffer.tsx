import { useState } from "react";
import { Offer } from "@/types/offer";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const SingleOffer = ({ offer }: { offer: Offer }) => {
  const { name, image, price, imageAlt, href } = offer;

  return (
    <>

      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        href={href}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`animate_top w-full z-40 rounded-lg border border-none bg-lightestbrown shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark`}>
        <div className="overflow-hidden h-30 sm:h-40 flex flex-row w-full">
          <div className="overflow-hidden relative h-40  w-1/3 mx-auto rounded-l-lg overflow-hidden">
            <Image src={image} alt={imageAlt} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="p-7.5 w-2/3">
            <p className="text-primary text-sectiontitle md:text-metatitle2 mb-1 line-clamp-2">{name}</p>
            <p className="text-primaryho text-metatitle md:text-metatitle3 ">{price}</p>
          </div>
        </div>
      </motion.a>
    </>
  );
};

export default SingleOffer;
