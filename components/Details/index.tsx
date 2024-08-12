"use client";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import React from "react";

const Details = ({ title, dates, text, images, buttonText, buttonLink }) => {
  return (
    <>
      <section id="details" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1690 px-0 lg:px-7.5 py-5 lg:px-15 lg:py-10 xl:px-20">

          <h2 className="text-3xl mb-2 font-semibold text-center text-primaryho dark:text-white xl:text-sectiontitle4">
            {title}
          </h2>
          <h3
            className="text-xl mb-4 font-semibold text-center text-primary dark:text-white xl:text-metatitle2"
            dangerouslySetInnerHTML={{ __html: dates }}
          ></h3>


          <div className="flex gap-8 flex-col md:flex-row md:justify-between xl:gap-20">
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
              className="animate_top w-full md:w-[60%] rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
            >

              <div
                className="blog-details"
                dangerouslySetInnerHTML={{ __html: text }}
              />

              <div className="flex justify-center my-5 xl:mb-0 xl:ml-10 flex items-center gap-2 xl:mt-0">
                <a
                  href={buttonLink}
                  className="flex items-center text-center justify-center rounded-full bg-primary px-20 py-2.5 text-regular text-white transition-all duration-0 xl:duration-200 hover:bg-primaryho"
                >
                  {buttonText}
                </a>
              </div>


            </motion.div>

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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-1/2 md:p-7.5 lg:w-[40%]"
            >

              <div className="relative w-full">
                <div className="flex flex-col space-y-4">
                  {images.map((image) => (
                    <div key={image} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <Image
                        src={image}
                        alt="TODO"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
