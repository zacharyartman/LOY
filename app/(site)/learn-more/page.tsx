import React from "react";
import { Metadata } from "next";
import Offers from "@/components/LearnMoreOffers";

export const metadata: Metadata = {
  title: "Learn More | Best Yoga Classes | Fort Lauderdale",
  description:
    "Explore Las Olas Yoga's offerings for new students, class schedules, teacher trainings, retreats, and more. Discover what to expect, sign up for workshops, and download our app. Check out reviews and gift card options to enhance your yoga journey",
  // other metadata
};

const LearnMorePage = () => {
  return (
    <div className="mb-10">
      <section className="relative mt-25 h-[450px] overflow-hidden md:pt-40 xl:pb-25 xl:pt-46">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-yoga-near-me.jpeg')] bg-cover bg-center"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-midbrown to-transparent">
          <div className="relative z-10 flex h-full items-end justify-center pb-5">
            <h1 className="text-center text-sectiontitle2 font-bold text-primary xl:text-hero">
              Las Olas Yoga
            </h1>
          </div>
        </div>
      </section>
      <section className="relative h-auto bg-midbrown pb-20 md:pb-30">
        <ul className="flex items-center justify-center gap-3">
          <li>
            <a
              href="https://www.facebook.com/lasolasyoga"
              aria-label="facebook icon"
            >
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
            <a
              href="https://instagram.com/lasolasyogastudio"
              aria-label="Instagram icon"
              title="Instagram"
            >
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

        <div className="relative mx-auto max-w-[800px] pt-8">
          <Offers />
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none bg-gradient-to-t from-white to-transparent"></div> */}
      </section>
    </div>
  );
};

export default LearnMorePage;
