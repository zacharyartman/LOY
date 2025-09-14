"use client";
import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const MobileApp = () => {
  return (
    <>
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
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
            className="items-left mx-auto mb-0 flex flex-col justify-between px-7.5 py-12.5 text-left md:flex-row md:items-center md:px-12.5 xl:px-17.5 xl:py-0"
          >
            <div>
              <h2 className="mb-4 text-3xl font-bold text-black xl:text-sectiontitle3">
                Download our app.
              </h2>
              <p className="lg:w-11/12">Book classes on the go!</p>
              <div className="mt-10 flex space-x-4">
                <a
                  className="flex items-center overflow-hidden rounded-full border-2 border-black transition-all duration-150 hover:opacity-50"
                  href="https://apps.apple.com/us/app/momence/id1577856009"
                >
                  <Image
                    width={1090 / 7}
                    height={327 / 7}
                    src="/images/app/app-store.png"
                    alt="Las Olas Yoga mobile iPhone app logo for booking classes and managing your yoga schedule"
                  />
                </a>
                <a
                  className="flex items-center overflow-hidden rounded-full border-2 border-black transition-all duration-150 hover:opacity-50"
                  href="https://play.google.com/store/apps/details?id=com.ribbon.mobileApp&hl=en_US&gl=US"
                >
                  <Image
                    width={1089 / 7}
                    height={330 / 7}
                    src="/images/app/play-store.png"
                    alt="Las Olas Yoga mobile Google Play Store app logo for booking classes and managing your yoga schedule"
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                width={535 / 2.5}
                height={876 / 2.5}
                src="/images/app/yoga-studio-near-me.png"
                alt="Las olas yoga fort lauderdale mobile app"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MobileApp;
