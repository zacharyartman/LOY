"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BlackFridaySale = () => {
  const saleData = [
    {
      href: "https://momence.com/m/136485",
      id: 1,
      imgSrc: "/images/blackfriday/1.png",
      popular: false,
    },
    {
      href: "https://momence.com/m/136483",
      id: 2,
      imgSrc: "/images/blackfriday/2.png",
      popular: false,
    },
    {
      href: "",
      id: 3,
      imgSrc: "/images/blackfriday/3.jpeg",
      popular: false,
    },
    {
      href: "https://momence.com/m/298388",
      id: 4,
      imgSrc: "/images/blackfriday/4.png",
      popular: false,
    },
  ];

  const SaleItem = ({
    href,
    imgSrc,
  }: {
    href: string;
    imgSrc: string;
    popular: boolean;
  }) => {
    const Wrapper = href ? "a" : "div";

    return (
      <Wrapper
        className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-gray-100"
        href={href || undefined}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
      >
        <Image
          src={imgSrc}
          alt="Black Friday Deal"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />

        {href && (
          <div className="absolute inset-0 flex items-center justify-center bg-primaryho/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="translate-y-4 transform rounded-full bg-white px-6 py-2.5 font-semibold text-black shadow-lg transition-all duration-300 hover:bg-primary hover:text-white group-hover:translate-y-0">
              Get Deal
            </div>
          </div>
        )}
      </Wrapper>
    );
  };
  return (
    <>
      <motion.section
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top overflow-hidden pb-10 pt-[calc(104px+1rem)]"
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="mx-auto mb-12 text-center md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Limited Time Offer
            </motion.div>
            <h1 className="mb-4 text-4xl font-bold text-primaryho lg:text-5xl">
              Black Friday Sale
            </h1>
            <p className="text-body mx-auto max-w-lg text-lg">
              Exclusive deals on memberships and class packs.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1000px] px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
            {saleData.map((item) => (
              <SaleItem
                key={item.id}
                imgSrc={item.imgSrc}
                href={item.href}
                popular={item.popular}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Offers valid through Monday, December 2nd or until sold out.
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default BlackFridaySale;
