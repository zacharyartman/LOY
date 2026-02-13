import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import NewPageHero from "@/components/NewPageHero";

export const metadata: Metadata = {
  description:
    "Create a custom Fort Lauderdale yoga retreat with private studio classes, beach yoga, and special workshops built around your dates and preferences.",
  title: "Build Your Own Retreat | Yoga Retreats | Fort Lauderdale",
};

const BuildYourOwnRetreatPage = () => {
  return (
    <>
      <NewPageHero
        titleText={"Build Your Own Retreat"}
        position="bg-[center_40%]"
        link="/images/hero/hero-fort-lauderdale.jpeg"
      ></NewPageHero>

      <section className="px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 pt-6 lg:pt-8 xl:pt-10">
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="flex flex-col gap-4 lg:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-solid-8 xl:p-7.5">
                <h2 className="text-2xl font-semibold text-primaryho xl:text-[2rem]">
                  Build Your Own Fort Lauderdale Yoga Retreat
                </h2>
                <p className="mt-3 max-w-[900px] text-base leading-relaxed text-primary xl:text-lg">
                  Visiting town? We&apos;ll create a custom yoga schedule for your
                  trip: private studio classes, beach yoga, and special workshops
                  based on dates, availability and your experience preferences.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://forms.gle/L6idHFAy8u7URiXu7"
                    target="_blank"
                    className="flex items-center justify-center rounded-full bg-primary px-8 py-2 text-center text-base text-white transition-all duration-0 hover:bg-primaryho xl:duration-150"
                  >
                    Build My Retreat Plan
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-black/5 bg-white p-5 shadow-solid-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  How it works
                </p>
                <ul className="mt-3 space-y-2 text-base font-semibold text-primaryho">
                  <li>1. Let us know your dates + group size</li>
                  <li>
                    2. Pick your experiences (class styles, beach yoga,
                    workshops)
                  </li>
                  <li>
                    3. We confirm availability + send your custom schedule (with
                    pricing)
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative min-h-[240px] overflow-hidden rounded-lg shadow-solid-8 lg:min-h-full">
              <Image
                src="/images/build-your-own-retreat/sunrise yoga.jpg"
                alt="Fort Lauderdale yoga experience"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-primary/5 p-6 lg:mt-8 xl:p-7.5">
            <h3 className="text-2xl font-semibold text-primaryho">
              Sample itineraries
            </h3>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-solid-8">
                <p className="text-lg font-semibold text-primaryho">
                  The Weekend Reset (2-3 days)
                </p>
                <ul className="mt-3 space-y-1.5 text-base text-primary">
                  <li>
                    <span className="text-primaryho">Day 1:</span>{" "}
                    Evening Candlelight Yin
                  </li>
                  <li>
                    <span className="text-primaryho">Day 2:</span>{" "}
                    Unwind: A Sound Bath Experience
                  </li>
                  <li>
                    <span className="text-primaryho">Day 3:</span>{" "}
                    Sunrise Beach Yoga before checkout
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-solid-8">
                <p className="text-lg font-semibold text-primaryho">
                  The Active Vacation (4-6 days)
                </p>
                <ul className="mt-3 space-y-1.5 text-base text-primary">
                  <li>
                    <span className="text-primaryho">Day 1:</span>{" "}
                    Flow Yoga Class
                  </li>
                  <li>
                    <span className="text-primaryho">Day 2:</span>{" "}
                    Melt &amp; Release: Myofascial Reset for Body + Mind
                  </li>
                  <li>
                    <span className="text-primaryho">Day 3:</span>{" "}
                    Sunset Beach Yoga
                  </li>
                  <li>
                    <span className="text-primaryho">Day 4:</span>{" "}
                    Chakra Balance: Flow &amp; Restore with Crystal Bowls
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-solid-8">
                <p className="text-lg font-semibold text-primaryho">
                  The Nourish &amp; Unwind (any length)
                </p>
                <p className="mt-3 text-base text-primary">
                  Slow Flow - Yin - Restore - Unwind: A Sound Bath Experience
                </p>
                <p className="mt-2 text-base text-primary">
                  Thoughtfully personalized for your group
                </p>
              </div>
            </div>
          </div>

          <div className="my-6 grid gap-4 lg:mt-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
            <div className="rounded-lg bg-white p-6 shadow-solid-8 xl:p-7.5">
              <div className="flex flex-col gap-6 lg:gap-7">
                <div>
                  <h3 className="text-2xl font-semibold text-primaryho">
                    &quot;Make it effortless&quot; concierge add-ons
                  </h3>
                  <p className="mt-2 max-w-[700px] text-base leading-relaxed text-primary">
                    We&apos;re happy to share trusted local recommendations -
                    third-party services are booked separately.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-base text-primary">
                    <li>Personal chef recommendations (Airbnb stays)</li>
                    <li>Healthy cafe + juice spots nearby</li>
                    <li>Recovery add-ons: Massage and Spa Recommendations</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-primary/5 p-6 text-center xl:p-7.5">
                  <p className="text-lg font-semibold text-primaryho">
                    Build Your Own Fort Lauderdale Yoga Retreat
                  </p>
                  <a
                    href="https://forms.gle/L6idHFAy8u7URiXu7"
                    target="_blank"
                    className="mx-auto mt-4 inline-flex min-w-[260px] items-center justify-center rounded-full bg-primary px-10 py-2.5 text-base text-white transition-all duration-0 hover:bg-primaryho xl:duration-150"
                  >
                    Build My Retreat Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="relative min-h-[480px] overflow-hidden rounded-lg shadow-solid-8 sm:min-h-[600px] lg:min-h-[260px]">
              <Image
                src="/images/build-your-own-retreat/dock yoga.png"
                alt="Dock yoga in Fort Lauderdale"
                fill
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildYourOwnRetreatPage;
