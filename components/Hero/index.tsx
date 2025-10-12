"use client";

import Image from "next/image";
import Link from "next/link";

type HeroLinkProps = {
  ariaLabel: string;
  lastElement: boolean;
  link: string;
  text: string;
}

const Hero = () => {
  const LocalHeroLink = ({ ariaLabel, lastElement, link, text }: HeroLinkProps) => {
    return (
      <Link
        aria-label={ariaLabel}
        className={`flex rounded-full bg-white px-7.5 py-2.5 ${lastElement ? "mb-0" : "mb-3"} text-primary duration-150 ease-in-out hover:bg-primaryho hover:text-white `}
        href={link}
      >
        {text}
      </Link>
    );
  };

  return (
    <>
      <section className="relative overflow-hidden pb-[5rem] pt-[10.5rem]">
        <Image
          src="/images/hero/hero-yoga-near-me.webp"
          alt="Las Olas Yoga Studio"
          fill
          priority
          quality={95}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
        />
        
        <div className="relative z-10 mx-auto max-w-c-1390 px-4 text-center md:px-8 2xl:px-0">
          <h1 className="mb-5 text-3xl font-bold text-white xl:text-hero">
            movement.
            <br />
            mindfulness. <br />
            community.
          </h1>
          <div className="flex flex-col items-center">
            <LocalHeroLink
              text={"View Schedule"}
              ariaLabel={"View class schedule"}
              link={"/schedule"}
              lastElement={false}
            />
            <LocalHeroLink
              text={"View Pricing"}
              ariaLabel={"View pricing options"}
              link={"/pricing"}
              lastElement={false}
            />
            <LocalHeroLink
              text={"New Clients"}
              ariaLabel={"New clients click here"}
              link={"/new-students"}
              lastElement={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
