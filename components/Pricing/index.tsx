"use client";
import Image from "next/legacy/image";
import SectionHeader from "../Common/SectionHeader";
import { useRouter } from 'next/router';
import pricingData from "./pricingData";
import { motion } from "framer-motion";

const Pricing = ({ sectionHeader }) => {

  const PricingButton = ({title, subtitle, price, perX, href, popular, buttonText}) => {
  
    return(
    <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full xl:p-12.5">
        {popular && (
          <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
            popular
          </div>
        )}
      
      <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
        ${price}{" "}
        <span className="text-regular text-waterloo dark:text-manatee">
          {perX}
        </span>
      </h3>
    <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
      {title}
    </h4>
    <p>{subtitle}.</p>

    <a
      aria-label={`Learn more about ${title}: ${subtitle} button`}
      className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary mt-5"
      href= {href}
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
    </a>
  </div>);
  }


  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <motion.section
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -30,
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
                  className="animate_top overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          { sectionHeader && (
          <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `PRICING`,
              subtitle: `Our Pricing Plans`,
              description: ``,
            }}
          />
        </div>
          )

          }
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              layout="fill"
              src="/./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="grid justify-center gap-7.5 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            {pricingData.map((item) => (
              <PricingButton
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                perX={item.perX}
                href={item.href}
                popular={item.popular}
                buttonText={item.buttonText}
              />
            ))}

          </div>
        </div>
      </motion.section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
