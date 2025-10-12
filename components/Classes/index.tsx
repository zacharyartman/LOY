"use client";
import { motion } from "framer-motion";
import React from "react";

import { defaultTransition, fadeInUp } from "@/constants/animations";

import classesData from "./classesData";
import SingleClass from "./SingleClass";

interface ClassesProps {
  title?: boolean;
}

const Classes = ({ title }: ClassesProps) => {
  return (
    <>
      <section
        id="features"
        className={`${title ? "py-10" : "py-0 pb-20"}`}
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {title && (
            <div className="flex justify-center">
              <h2 className="mx-auto text-2xl font-bold text-black xl:text-sectiontitle2">
                Our Classes
              </h2>
            </div>
          )}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={defaultTransition}
            viewport={{ once: true }}
            className={`animate_top grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5 ${
              title ? "mt-8" : ""
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
