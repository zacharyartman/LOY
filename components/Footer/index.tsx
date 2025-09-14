"use client";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import menuData from "../Header/menuData";
const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-lightestbrown">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={300 / 2}
                    height={238 / 2}
                    src="/images/logo/las-olas-yoga-near-me.webp"
                    alt="Logo"
                  />
                </a>

                <p className="mb-10 mt-5">
                  We are located in the heart of downtown Fort Lauderdale on Las
                  Olas Boulevard on the corner of Las Olas and 13th Street on
                  the 2nd floor.
                </p>

                <ul className="flex items-center gap-5">
                  <li>
                    <a
                      href="https://www.facebook.com/lasolasyoga"
                      aria-label="facebook icon"
                      title="Facebook"
                    >
                      <svg
                        className="fill-primary transition-all duration-150 hover:fill-primary"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_48_1499)">
                          <path
                            d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                            fill=""
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_1499">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/lasolasyogastudio"
                      aria-label="Instagram icon"
                      title="Instagram"
                    >
                      <img
                        src="/images/general/instagram.svg"
                        alt="Instagram icon"
                        className="fill-primary transition-all duration-150 hover:fill-primary"
                        width="24"
                        height="24"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@lasolasyogastudio"
                      aria-label="TikTok icon"
                      title="TikTok"
                    >
                      <img
                        src="/images/general/tiktok.svg"
                        alt="TikTok icon"
                        className="fill-primary transition-all duration-150 hover:fill-primary"
                        width="24"
                        height="24"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.yelp.com/biz/las-olas-yoga-fort-lauderdale-2"
                      aria-label="yelp icon"
                      title="Yelp"
                    >
                      <img
                        src="/images/general/yelp.svg"
                        alt="Yelp icon"
                        className="fill-primary transition-all duration-150 hover:fill-primary"
                        width="24"
                        height="24"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Las+Olas+Yoga/@26.119576,-80.1300724,15z/data=!4m2!3m1!1s0x0:0x8d78f48f6f0f5e81?sa=X&ved=1t:2428&ictx=111"
                      aria-label="google icon"
                      title="Google"
                    >
                      <img
                        src="/images/general/google.svg"
                        alt="google icon"
                        className="fill-primary transition-all duration-150 hover:fill-primary"
                        width="24"
                        height="24"
                      />
                    </a>
                  </li>
                </ul>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black">
                    Quick Links
                  </h4>

                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {menuData.map((menuItem) =>
                      menuItem.submenu ? (
                        menuItem.submenu.map((subMenuItem) => (
                          <li key={subMenuItem.path}>
                            <Link
                              href={subMenuItem.path || "#"}
                              className="inline-block hover:text-primary md:mr-5"
                            >
                              {subMenuItem.title}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li key={menuItem.path}>
                          {["Home", "Workshops"].includes(menuItem.title) ? (
                            <a
                              href={menuItem.path}
                              className="inline-block hover:text-primary md:mr-5"
                            >
                              {menuItem.title}
                            </a>
                          ) : (
                            <Link
                              href={menuItem.path || "#"}
                              className="inline-block hover:text-primary md:mr-5"
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      ),
                    )}
                  </ul>
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
                  transition={{ duration: 0.3, delay: 0.05 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black">
                    Contact Us
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="tel:954-372-5275"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Phone: 954-372-5275
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@lasolas.yoga"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Email: info@lasolas.yoga
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/maps/place/Las+Olas+Yoga/@26.119576,-80.1326473,963m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88d9017a3c258cad:0x8d78f48f6f0f5e81!8m2!3d26.119576!4d-80.1300724!16s%2Fg%2F11rdy4c0b7?entry=ttu"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        1263 E. Las Olas Blvd, Suite 204
                        <br></br>Fort Lauderdale, FL 33301
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex justify-center gap-5 border-t border-stroke py-4 lg:gap-0">
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
              className="animate_top text-center"
            >
              <p>
                &copy; {new Date().getFullYear()} Las Olas Yoga Studio. All
                rights reserved
              </p>
              <a href="https://www.zacharyartman.com">
                Website by <span className="text-primary">Zachary Artman</span>
              </a>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
