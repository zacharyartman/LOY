"use client";
import { motion } from "framer-motion";
import React from "react";

import RetreatGallery from "../RetreatGallery";

type RetreatDetailsProps = {
  accommodationsImages: string[];
  buttonLink?: string;
  buttonText?: string;
  dates: string;
  landscapesImages: string[];
  mainImages: string[];
  text: string;
  title: string;
};

const RetreatDetails = ({
  accommodationsImages,
  buttonLink,
  buttonText,
  dates,
  landscapesImages,
  mainImages,
  text,
  title,
}: RetreatDetailsProps) => {
  return (
    <section id="details" className="px-4 md:px-8 2xl:px-0">
      <div className="max-w-c-1690 relative mx-auto px-0 py-5 lg:px-15 lg:px-7.5 lg:py-10 xl:px-20">
        <h2 className="mx-5 mb-2 text-center text-2xl font-semibold text-primaryho xl:text-sectiontitle4">
          {title}
        </h2>
        <h3
          className="text-md mx-5 mb-4 text-center font-semibold text-primary xl:text-metatitle2"
          dangerouslySetInnerHTML={{ __html: dates }}
        ></h3>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.05, duration: 0.3 }}
            viewport={{ once: true }}
            className="animate_left w-full self-start rounded-lg bg-white p-7.5 shadow-solid-8 md:w-[60%] xl:p-10"
          >
            <div
              className="blog-details"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            {buttonText && buttonLink && (
              <div className="my-5 flex flex flex-col items-center justify-center gap-2 xl:mb-0 xl:mt-0 xl:flex-row">
                <a
                  href={buttonLink}
                  target="_blank"
                  className="flex items-center justify-center rounded-full bg-primary px-15 py-2.5 text-center text-regular text-white transition-all duration-0 hover:bg-primaryho xl:duration-150"
                >
                  {buttonText}
                </a>
              </div>
            )}
          </motion.div>

          <RetreatGallery
            mainImages={mainImages}
            accommodationsImages={accommodationsImages}
            landscapesImages={landscapesImages}
          />
        </div>
      </div>
    </section>
  );
};

export default RetreatDetails;
