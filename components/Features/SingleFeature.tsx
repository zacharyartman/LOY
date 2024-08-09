import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

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
        className={`animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-10.5`}>
        <div>
        <div className="relative h-30 w-30 mb-5 mx-auto">
        <Image src={icon} alt={title} layout="fill" objectFit="cover" />
      </div>
          <h3 className="mb-5 text-xl font-semibold text-black text-center dark:text-white xl:text-itemtitle">
            {title}
          </h3>
          <p className="text-center">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
