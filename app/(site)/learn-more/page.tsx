import React from "react";
import { Metadata } from "next";
import Offers from "@/components/LearnMoreOffers";

export const metadata: Metadata = {
  title: "Learn More",
  description: "TODO",
  // other metadata
};

const LearnMorePage = () => {
  return (
    <div className="mb-10">
      <section className="relative overflow-hidden h-[450px] mt-25 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="absolute inset-0 bg-[url('/images/hero/hero.jpeg')] bg-cover bg-center"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-midbrown to-transparent">
        <div className="relative z-10 flex justify-center items-end h-full pb-5">
          <h1 className="font-bold text-sectiontitle2 text-primary dark:text-white xl:text-hero text-center">
            Las Olas Yoga
          </h1>
        </div>

        </div>
      </section>
      <section className="h-auto pb-20 md:pb-30 bg-midbrown relative">
        <ul className="flex justify-center items-center gap-3">
          <li>
            <a href="https://www.facebook.com/lasolasyogastudio" aria-label="facebook icon">
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
            <a href="https://instagram.com/lasolasyogastudio" aria-label="instagram icon">
              <svg
                className="fill-primary transition-all duration-300 hover:fill-primary"
                width="30"
                height="30"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_1502)">
                  <path
                    d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"
                    fill=""
                    stroke='primary'
                    strokeWidth="20"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>

        <div className="mx-auto max-w-[800px]">
          <Offers />
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;
