"use client";
import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-5 md:px-8 xl:pt-20 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390">
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
            className="flex justify-between flex-col md:flex-row items-left md:items-center mx-auto mb-12.5 text-left px-7.5 py-12.5 md:px-12.5 xl:px-17.5 xl:py-0"
          >
            <div>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Download our app.
              </h2>
              <p className="lg:w-11/12">
                Book classes on the go!
              </p>
              <div className="mt-10 flex space-x-4">
                <button className="border-2 border-black rounded-full overflow-hidden">
                  <Image
                    width={1090 / 5}
                    height={327 / 5}
                    src="/images/app/app-store.png"
                    alt="Apple app store icon"
                  />
                </button>
                <button className="border-2 border-black rounded-full overflow-hidden">
                  <Image
                    width={1089 / 5}
                    height={330 / 5}
                    src="/images/app/play-store.png"
                    alt="Google play store icon"
                  />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                width={658 / 2}
                height={937 / 2}
                src="/images/app/app_hand.png"
                alt="Hand holding phone displaying mobile app"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
