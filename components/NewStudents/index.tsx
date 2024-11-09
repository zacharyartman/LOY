"use client"
import React from "react";
import pricingData from "@/components/Pricing/pricingData";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";



const PricingButton = ({ title, subtitle, price, perX, href, popular, buttonText }) => {

  return (
    <a href={href} target="_blank" className={`animate_top group/btn relative rounded-lg border border-stroke ${popular ? "bg-primary" : "bg-midbrown"} p-7.5 shadow-solid-10 transform transition-transform duration-300 hover:scale-[1.03] w-full xl:p-12.5`}>

      <h3 className={`mb-7.5 text-3xl font-bold ${popular ? "text-white" : "text-black"} dark:text-white xl:text-sectiontitle3`}>
        ${price}{" "}
        <span className={`text-regular ${popular ? "text-white" : "text-waterloo"}`}>
          {perX}
        </span>
      </h3>
      <h4 className={`mb-2.5 text-para2 font-medium ${popular ? "text-white" : "text-black"}`}>
        {title}
      </h4>
      <p className={`${popular ? "text-white" : "text-black"}`}>{subtitle}.</p>

      <div
        aria-label={`Learn more about ${title}: ${subtitle} button`}
        className={`group inline-flex items-center gap-2.5 font-medium ${popular ? "text-white" : "text-primaryho"} transition-all duration-300 mt-5`}
      >
        <span className="duration-300 group-hover/btn:pr-2">
          {buttonText}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </a>);
}


const NewStudentsComponent = () => {
  const introOffer = pricingData.find((price) => price.id === 0);
  const params = new URLSearchParams(window.location.search);
  const isFacebookSource = params.get('source') === 'fb';
  const momenceLink = isFacebookSource
    ? 'https://momence.com/m/302281'
    : 'https://momence.com/m/136483';

  return (
    <>
      <div className="px-4 md:mt-5 md:px-8 2xl:px-0 max-w-[1000px] items-center mx-auto">
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
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top">
          <h2 className="text-2xl mt-5 mx-5 mb-2 font-semibold text-center text-primaryho dark:text-white xl:text-sectiontitle4">
            New to Yoga or Just our Studio? Read on!
          </h2>
          <h2 className="text-2xl mx-5 mb-2 font-semibold text-center text-primaryho dark:text-white xl:text-3xl">
            Welcome to our community
          </h2>
          <p className="text-metatitle3 m-10">
            At Las Olas Yoga, our mission is to create a sanctuary of well-being, where movement, mindfulness, and community intersect. Come early, have tea and chat in the lobby or lay out your mat and relax in the studio. Whether you have never stepped foot in a yoga studio or are a seasoned practitioner, we are ready to meet you where are and provide an experience that allows you to drop-in and journey towards inner peace and self-discovery. All of our classes are taught in a non-heated environment, allowing you to fully immerse yourself in the practice without external distractions.
          </p>
          <h2 className="text-2xl mx-5 mb-2 font-semibold text-center text-primaryho dark:text-white xl:text-sectiontitle4">
            Intro Offer
          </h2>
          <p className="text-center italic mb-5">
            Available to local, first-time clients only.
          </p>
          <div className="max-w-[400px] mx-auto flex justify-center mb-10">
            {introOffer && (
              <PricingButton
                title={introOffer.title}
                subtitle={introOffer.subtitle}
                price={introOffer.price}
                perX={introOffer.perX}
                href={momenceLink}
                popular={true}
                buttonText={'Buy Now'}
              />
            )}
          </div>
        </motion.div>
        <FAQ />
      </div>
    </>
  );
};

export default NewStudentsComponent;
