import { Metadata } from "next";
import React from "react";

import Offers from "@/components/LearnMoreOffers";

export const metadata: Metadata = {
  description:
    "Explore Las Olas Yoga's offerings for new students, class schedules, teacher trainings, retreats, and more. Discover what to expect, sign up for workshops, and download our app. Check out reviews and gift card options to enhance your yoga journey",
  title: "Learn More | Best Yoga Classes | Fort Lauderdale",
  // other metadata
};

const LearnMorePage = () => {
  return (
    <div>
      <section className="relative mt-[88px] bg-midbrown pb-20 md:pb-30">
        <div className="relative h-[400px] lg:h-[480px]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full bg-[url('/images/hero/hero-yoga-near-me.jpeg')] bg-cover bg-top lg:bg-center"></div>
          </div>
          <div className="absolute bottom-[-80px] left-0 right-0 h-[340px] bg-gradient-to-t from-midbrown via-midbrown/70 to-transparent">
            <div className="relative z-10 flex h-full flex-col items-center justify-end gap-3 pb-[100px]">
              <h1 className="text-center text-sectiontitle2 font-bold text-primary xl:text-hero">
                Las Olas Yoga
              </h1>
              <ul className="flex items-center justify-center gap-3">
                <li>
                  <a href="https://www.facebook.com/lasolasyoga" aria-label="facebook icon">
                    <svg
                      className="fill-primary transition-all duration-300 hover:fill-primary"
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
                  <a href="https://instagram.com/lasolasyogastudio" aria-label="Instagram icon" title="Instagram">
                    <img
                      src="/images/general/instagram.svg"
                      alt="Instagram icon"
                      className="fill-primary transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[800px] pt-5">
          <Offers />
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none bg-gradient-to-t from-white to-transparent"></div> */}
      </section>
    </div>
  );
};

export default LearnMorePage;
