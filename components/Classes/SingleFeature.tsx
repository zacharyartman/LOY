import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const SingleClass = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, alt } = feature;

  return (
    <>
      <motion.div
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
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`animate_top z-40 rounded-lg border border-white bg-white shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark`}>
        <div>
          <div className="relative h-50 sm:h-40  w-full mb-2 mx-auto rounded-t-lg overflow-hidden">
            <Image src={icon} alt={alt} layout="fill" objectFit="cover" />
          </div>
          <div className="p-7.5">
            <h3 className="mb-5 text-xl font-semibold text-black text-center dark:text-white xl:text-itemtitle">
              {title}
            </h3>
            <p className="text-center">{description}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleClass;
