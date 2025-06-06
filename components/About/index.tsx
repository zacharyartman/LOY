"use client";

import { motion } from "framer-motion";
import Image from "next/legacy/image";
import InlineArrowButton from "../InlineArrowButton";

const About = ({ aboutText, viewClasses }) => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto aspect-[200/150] w-full sm:w-1/2 md:block"
            >
              <Image
                src="/images/about/yoga-for-beginners.webp"
                alt="Group of students practicing yoga in a non-heated class at Las Olas Yoga"
                className="rounded-lg object-cover shadow-lg"
                layout="fill"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right sm:w-1/2"
            >
              <span className="font-medium uppercase text-black">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-primary px-4.5 py-1 text-metatitle uppercase text-white ">
                  About Us
                </span>
              </span>

              <div dangerouslySetInnerHTML={{ __html: aboutText }} />
              <div>
                {viewClasses && (
                  <InlineArrowButton
                    href={"/classes"}
                    reversed={false}
                    text={"View Classes"}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 sm:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto aspect-[200/150] w-full sm:hidden sm:w-1/2"
            >
              <Image
                src="/images/about/yoga-near-me.webp"
                alt="yoga studio on las olas boulevard"
                className="rounded-lg object-cover shadow-lg"
                layout="fill"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left sm:w-1/2"
            >
              <span className="font-medium uppercase text-black">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-primary px-4.5 py-1 text-metatitle uppercase text-white ">
                  Location
                </span>
              </span>
              <p>
                We are located in the heart of downtown Fort Lauderdale on the
                corner of Las Olas and 13th Street. We are on the 2nd floor and
                our entrance is via the courtyard on 13th. <br />
                <br />
                Abundant parking is available including free 2-hour street
                parking on 13th and 2nd.
              </p>
              <div>
                <InlineArrowButton
                  reversed={false}
                  href={
                    "https://www.google.com/maps/place/Las+Olas+Yoga/@26.119576,-80.1326473,963m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88d9017a3c258cad:0x8d78f48f6f0f5e81!8m2!3d26.119576!4d-80.1300724!16s%2Fg%2F11rdy4c0b7?entry=ttu}"
                  }
                  text={"Get Directions"}
                />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[200/150] w-full sm:block sm:w-1/2"
            >
              <Image
                src="/images/about/yoga-near-me.webp"
                alt="yoga studio on las olas boulevard"
                className="rounded-lg object-cover shadow-lg"
                layout="fill"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
