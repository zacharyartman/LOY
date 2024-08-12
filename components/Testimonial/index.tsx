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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:my-10 md:mx-10 xl:mx-30">
    {testimonialData.map((review) => (
          <SingleTestimonial key={review.id} review={review} />
        ))}
    </div>
    </>
  );
};

export default Testimonial;
