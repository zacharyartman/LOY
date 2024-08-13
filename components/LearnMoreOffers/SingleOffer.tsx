import { Offer, OfferItem } from "@/types/offer";
import { motion } from "framer-motion";

const SingleOffer = ({ offer }: { offer: OfferItem }) => {
  const { name, price, href } = offer;

  return (
    <>

      <a
        href={href}
        className={`w-full z-40 rounded-lg border border-none bg-lightestbrown shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark`}>
        <div className="p-5.5 w-full">
          <p className={`text-primary text-center text-regular md:text-metatitle3 ${price ? "mb-1" : ""} line-clamp-2`}>
            {name}
          </p>
          {
            price && <p className="text-primaryho text-center text-sectiontitle md:text-regular ">{price}</p>
          }

        </div>
      </a>
    </>
  );
};

export default SingleOffer;
