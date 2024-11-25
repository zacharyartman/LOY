"use client";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const BlackFridaySale = () => {
  const saleData = [
    {
      id: 1,
      imgSrc: "/images/blackfriday/1.png",
      href: "https://momence.com/m/136485",
      popular: false,
    },
    {
      id: 2,
      imgSrc: "/images/blackfriday/2.png",
      href: "https://momence.com/m/136483",
      popular: false,
    },
    {
      id: 3,
      imgSrc: "/images/blackfriday/3.png",
      href: "https://momence.com/m/310250",
      popular: false,
    },
    {
      id: 4,
      imgSrc: "/images/blackfriday/4.png",
      href: "https://momence.com/m/298388",
      popular: false,
    },
  ];

  const SaleItem = ({ imgSrc, href, popular }) => (
    <a
      className={`group relative rounded-lg border border-stroke ${popular ? "bg-primary" : "bg-midbrown"
        } shadow-solid-10 w-[85vw] h-auto md:w-full p-4.5 transform transition-transform duration-300 hover:scale-[1.03]`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={imgSrc}
        alt="Sale Item"
        layout="responsive"
        width={250}
        height={250}
        className="rounded-lg"
      />
    </a>
  );

  return (
    <>
      <motion.section
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top overflow-hidden"
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-[calc(104px+4rem)]">
          <div className="animate_top mx-auto text-center">
            <h1 className="text-4xl lg:text-sectiontitle3 font-bold text-primary">Black Friday Sale</h1>
          </div>
        </div>

        <div className="relative mx-auto my-15 max-w-[1207px] px-4 md:px-8 xl:my-20 xl:px-0">
          <div className="grid justify-center items-center gap-7.5 md:grid-cols-2 xl:gap-15 mx-auto">
            {saleData.map((item) => (
              <SaleItem
                key={item.id}
                imgSrc={item.imgSrc}
                href={item.href}
                popular={item.popular}
              />
            ))}
          </div>
          <p className="text-center text-regular italic mt-6">
            Through Monday, December 2nd (Or until sold out)
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default BlackFridaySale;