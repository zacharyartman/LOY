"use client";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "./testimonialData";
import { useEffect } from "react";
import Image from "next/legacy/image";
import SingleTestimonial from "./SingleTestimonial";


const Testimonial = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:mt-5 md:px-8 2xl:px-0 max-w-c-1390 items-center mx-auto">
    {testimonialData.map((review) => (
          <SingleTestimonial key={review.id} review={review} />
        ))}
    </div>
    </>
  );
};

export default Testimonial;
