import { useState } from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/legacy/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="rounded-lg bg-white pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="px-12 py-5 flex justify-center">
        <Image src={image} className="rounded-full" width={175} height={175} />
      </div>
      <div className="px-12">
        <div className="mb-5 text-center border-b border-stroke dark:border-strokedark">
          <div>
            <h3 className="mb-1.5 text-3xl text-black dark:text-white">
              {name}
            </h3>
            <h2 className="mb-3">
              <strong>{designation}</strong>
            </h2>
            <div
              className={`relative transition-max-height duration-500 ease-in-out ${
                showFullContent ? "max-h-none" : "max-h-24"
              } overflow-hidden line-clamp-none`}
              style={{ maxHeight: showFullContent ? "none" : "6rem" }}
            >
              {content}
              {!showFullContent && (
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent dark:from-blacksection" />
              )}
            </div>
            <button
              className="my-3 text-primaryho"
              onClick={() => setShowFullContent(!showFullContent)}
            >
              {showFullContent ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
