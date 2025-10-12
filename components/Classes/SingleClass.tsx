import React from "react";
import Image from "next/image";
import { Class } from "@/types/class";

interface SingleClassProps {
  classItem: Class;
}

const SingleClass = ({ classItem }: SingleClassProps) => {
  const { icon, title, description, alt } = classItem;

  return (
    <>
      <div
        className={`z-40 rounded-lg border border-white bg-white shadow-solid-3 transition-all hover:shadow-solid-4`}
      >
        <div>
          <div className="relative mx-auto mb-2  h-50 w-full overflow-hidden rounded-t-lg sm:h-40">
            <Image src={icon} alt={alt} layout="fill" objectFit="cover" />
          </div>
          <div className="p-7.5">
            <h3 className="mb-5 text-center text-xl font-semibold text-black xl:text-itemtitle">
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
