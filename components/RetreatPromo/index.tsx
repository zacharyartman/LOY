"use client";
import { defaultTransition } from "@/constants/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RetreatPromo = () => {
  return (
    <>
      {/* <!-- ===== Retreat Promo Start ===== --> */}
      <section className="relative overflow-hidden px-4 py-12 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1280">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/retreats/landscapes/campannaview.jpeg"
                alt="Tuscany Retreat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1280px"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
              <div className="max-w-2xl">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{  duration: 0.1, delay: 0.05,}}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <span className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                    October 31 - November 7, 2026
                  </span>
                  <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                    Under the Tuscan Sun
                  </h2>
                  <p className="mb-5 text-base text-white/90 md:text-lg">
                    Join us for an unforgettable week in the heart of Tuscany.
                    Experience yoga, wine tastings, cooking classes, and the
                    timeless beauty of Italy.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/retreats"
                      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-center font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      Learn More
                    </Link>
                    <a
                      href="https://momence.com/l/nmhy721z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-7 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary"
                    >
                      Reserve Your Spot
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Retreat Promo End ===== --> */}
    </>
  );
};

export default RetreatPromo;

