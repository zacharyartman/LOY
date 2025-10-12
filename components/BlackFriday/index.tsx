"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// {/* Deals Section */}
// <div className="flex items-center justify-center bg-[#f8f4ef] py-3">
//   <div className="max-w-4xl flex flex-row items-center gap-6 justify-center p-4 text-center">
//     <h2 className="text-xl font-bold text-[#8a6a4f]">Cyber Monday Deals!</h2>
//     <a className="px-6 py-2 bg-[#8a6a4f] text-white rounded-full hover:bg-[#735a40] transition duration-200" href="/black-friday">
//       Save Here &rarr;
//     </a>
//   </div>
// </div>
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

  const SaleItem = ({ href, imgSrc, popular }) => {
    const Wrapper = href ? 'a' : 'div';
  
    return (
      <Wrapper
        className={`group relative rounded-lg border border-stroke ${popular ? "bg-primary" : "bg-midbrown"
          } shadow-solid-10 w-[85vw] h-auto md:w-full p-4.5 transform transition-transform duration-300 hover:scale-[1.03]`}
        href={href || undefined}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
      >
        <Image
          src={imgSrc}
          alt="Sale Item"
          layout="responsive"
          width={250}
          height={250}
          className="rounded-lg"
        />
      </Wrapper>
    );
  };
  return (
    <>
      <motion.section
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top overflow-hidden"
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-[calc(104px+4rem)]">
          <div className="animate_top mx-auto text-center">
            <h1 className="text-4xl lg:text-sectiontitle3 font-bold text-primary">Cyber Monday Sale</h1>
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