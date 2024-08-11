import { Testimonial } from "@/types/testimonial";
import Image from "next/legacy/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="px-12">
      <div className="mb-5 text-center border-b border-stroke dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
        </div>
      </div>
      </div>
      <div className="px-12">
        <Image src={image} className="rounded-lg"></Image>
      </div>
    </div>
  );
};

export default SingleTestimonial;
