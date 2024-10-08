import React from "react";
import { Class } from "@/types/class";
import Image from "next/legacy/image";

const SingleClass = ({ classItem }: { classItem: Class }) => {
  const { icon, title, description, alt } = classItem;

  return (
    <>
      <div
        className={`z-40 rounded-lg border border-white bg-white shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark`}>
        <div>
          <div className="relative h-50 sm:h-40  w-full mb-2 mx-auto rounded-t-lg overflow-hidden">
            <Image src={icon} alt={alt} layout="fill" objectFit="cover" />
          </div>
          <div className="p-7.5">
            <h3 className="mb-5 text-xl font-semibold text-black text-center dark:text-white xl:text-itemtitle">
              {title}
            </h3>
            <p className="text-center">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClass;
