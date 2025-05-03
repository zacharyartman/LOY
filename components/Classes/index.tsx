"use client";
import React from "react";
import classesData from "./classesData";
import SingleClass from "./SingleClass";
import { motion } from "framer-motion";

const Classes = ({ title }) => {
  return (
    <>
      <section
        id="features"
        className={`${title ? "py-20 lg:py-25 xl:py-30" : "py-0 pb-20"}`}
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {title && (
            <div className="flex justify-center">
              <h2 className="mx-auto text-2xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                Our Classes
              </h2>
            </div>
          )}
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
            className={`animate_top grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-12.5 ${
              title ? "mt-12.5 lg:mt-15 xl:mt-20" : ""
            }`}
          >
            {classesData.map((classItem, key) => (
              <SingleClass classItem={classItem} key={key} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Classes;
