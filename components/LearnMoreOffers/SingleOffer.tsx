import { motion } from "framer-motion";

import { Offer, OfferItem } from "@/types/offer";

const SingleOffer = ({ offer }: { offer: OfferItem }) => {
  const { href, name, price } = offer;

  return (
    <>
      <a
        href={href}
        className={`z-40 w-full rounded-lg border border-none bg-lightestbrown shadow-solid-3 transition-all hover:shadow-solid-4`}
      >
        <div className="w-full p-5.5">
          <p
            className={`text-center text-regular text-primary md:text-metatitle3 ${price ? "mb-1" : ""} line-clamp-2`}
          >
            {name}
          </p>
          {price && (
            <p className="text-center text-sectiontitle text-primaryho md:text-regular ">
              {price}
            </p>
          )}
        </div>
      </a>
    </>
  );
};

export default SingleOffer;
