"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import FAQ from "@/components/FAQ";
import pricingData from "@/components/Pricing/pricingData";

type PricingButtonProps = {
  buttonText: string;
  href: string;
  perX: string;
  popular?: boolean;
  price: number;
  subtitle: string;
  title: string;
};

const PricingButton = ({
  buttonText,
  href,
  perX,
  popular,
  price,
  subtitle,
  title,
}: PricingButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`animate_top group/btn relative rounded-lg border border-stroke ${popular ? "bg-primary" : "bg-midbrown"} w-full transform p-7.5 shadow-solid-10 transition-transform duration-150 hover:scale-[1.03] xl:p-12.5`}
    >
      <h3
        className={`mb-7.5 text-3xl font-bold ${popular ? "text-white" : "text-black"} xl:text-sectiontitle3`}
      >
        ${price}{" "}
        <span
          className={`text-regular ${popular ? "text-white" : "text-waterloo"}`}
        >
          {perX}
        </span>
      </h3>
      <h4
        className={`mb-2.5 text-para2 font-medium ${popular ? "text-white" : "text-black"}`}
      >
        {title}
      </h4>
      <p className={`${popular ? "text-white" : "text-black"}`}>{subtitle}.</p>

      <div
        aria-label={`Learn more about ${title}: ${subtitle} button`}
        className={`group inline-flex items-center gap-2.5 font-medium ${popular ? "text-white" : "text-primaryho"} mt-5 transition-all duration-150`}
      >
        <span className="duration-150 group-hover/btn:pr-2">{buttonText}</span>
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
    </a>
  );
};

const NewStudentsComponent = () => {
  const introOffer = pricingData.find((price) => price.id === 0);
  const [momenceLink, setMomenceLink] = useState<string>(
    "https://momence.com/m/136483",
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const isFacebookSource = params.get("source") === "fb";
      setMomenceLink(
        isFacebookSource
          ? "https://momence.com/m/302281"
          : "https://momence.com/m/136483",
      );
    }
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[1000px] items-center px-4 md:mt-5 md:px-8 2xl:px-0">
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
          transition={{ delay: 0.05, duration: 0.3 }}
          viewport={{ once: true }}
          className="animate_top"
        >
          <h2 className="mx-5 mb-2 mt-5 text-center text-2xl font-semibold text-primaryho xl:text-sectiontitle4">
            New to Yoga or Just our Studio? Read on!
          </h2>
          <h2 className="mx-5 mb-2 text-center text-2xl font-semibold text-primaryho xl:text-3xl">
            Welcome to our community
          </h2>
          <p className="m-10 text-metatitle3">
            Looking for yoga classes in Fort Lauderdale? Las Olas Yoga is a
            welcoming, non-heated yoga studio located in downtown Fort
            Lauderdale on Las Olas Boulevard. Whether you&apos;re brand new to
            yoga
            or have been practicing for years, our alignment-focused classes are
            designed to help you build strength, improve mobility, reduce
            stress, and feel at home from your very first visit.
          </p>

          <div className="mx-10 mb-10">
            <h3 className="mb-4 text-center text-xl font-semibold text-primaryho xl:text-2xl">
              Why New Students Love Las Olas Yoga
            </h3>
            <ul className="mx-auto grid max-w-[600px] list-disc grid-cols-1 gap-x-8 gap-y-2 pl-6 text-metatitle3 sm:grid-cols-2">
              <li>Beginner-friendly classes</li>
              <li>Non-heated studio</li>
              <li>No mirrors</li>
              <li>Supportive community</li>
              <li>Free mat rentals</li>
              <li>Convenient downtown Fort Lauderdale location</li>
              <li>Free 2-hour parking nearby</li>
            </ul>
          </div>

          <div className="mx-10 mb-10">
            <h3 className="mb-4 text-center text-xl font-semibold text-primaryho xl:text-2xl">
              Not sure where to start?
            </h3>
            <ul className="mx-auto max-w-[600px] list-disc pl-6 text-metatitle3">
              <li>
                New to yoga →{" "}
                <Link
                  href="/classes"
                  className="font-medium text-primary underline hover:text-primaryho"
                >
                  Foundations
                </Link>
              </li>
              <li>
                Want a slower pace →{" "}
                <Link
                  href="/classes"
                  className="font-medium text-primary underline hover:text-primaryho"
                >
                  Slow Flow
                </Link>
              </li>
              <li>
                Looking for relaxation →{" "}
                <Link
                  href="/classes"
                  className="font-medium text-primary underline hover:text-primaryho"
                >
                  Restore
                </Link>{" "}
                or{" "}
                <Link
                  href="/classes"
                  className="font-medium text-primary underline hover:text-primaryho"
                >
                  Candlelight Yin &amp; Nidra
                </Link>
              </li>
              <li>
                Ready for a more active practice and have yoga experience →{" "}
                <Link
                  href="/classes"
                  className="font-medium text-primary underline hover:text-primaryho"
                >
                  Flow
                </Link>
              </li>
            </ul>
          </div>

          <p className="mx-10 mb-10 text-center text-metatitle3">
            Ready to begin? View our{" "}
            <Link
              href="/schedule"
              className="font-medium text-primary underline hover:text-primaryho"
            >
              schedule
            </Link>{" "}
            or explore{" "}
            <Link
              href="/pricing"
              className="font-medium text-primary underline hover:text-primaryho"
            >
              pricing and membership options
            </Link>
            .
          </p>

          <h2 className="mx-5 mb-2 text-center text-2xl font-semibold text-primaryho xl:text-sectiontitle4">
            Intro Offer
          </h2>
          <p className="mb-5 text-center italic">
            New to Las Olas Yoga? Enjoy 4 weeks of unlimited yoga for $79.
            Explore different class styles, meet our teachers, and discover the
            practice that&apos;s right for you.
          </p>
          <p className="mb-5 text-center font-medium text-primaryho">
            Voted Fort Lauderdale&apos;s favorite yoga studio four years running.
            Come see why our community continues to grow.
          </p>
          <div className="mx-auto mb-5 flex max-w-[400px] justify-center">
            {introOffer && (
              <PricingButton
                title={introOffer.title}
                subtitle={introOffer.subtitle}
                price={introOffer.price}
                perX={introOffer.perX}
                href={momenceLink}
                popular={true}
                buttonText={"Buy Now"}
              />
            )}
          </div>
          <p className="mb-10 text-center text-metatitle3">
            Looking to continue beyond the intro offer? View our{" "}
            <Link
              href="/pricing"
              className="font-medium text-primary underline hover:text-primaryho"
            >
              memberships and class packages
            </Link>
            .
          </p>
        </motion.div>
        <FAQ />
      </div>
    </>
  );
};

export default NewStudentsComponent;
