"use client";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "./testimonialData";
import { useEffect } from "react";
import Image from "next/legacy/image";


const Testimonial = () => {

  useEffect(() => {
    document.documentElement.style.setProperty("--swiper-theme-color", "#a58367")
  }, [])


  return (
    <section>
      <div className="flex justify-center mt-15">
        <h2 className="mx-auto text-2xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          Our Teachers
        </h2>
      </div>

      <div className="mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="swiper-container teacher-slider pb-10.5">
          <Swiper
            
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 4.5,
              },
              1600: {
                slidesPerView: 5,
              },
              1920: {
                slidesPerView: 6,
              },
            }}
            loop
          >
            {testimonialData.map((teacher) => (
              <SwiperSlide key={teacher.id} className="flex flex-col justify-center items-center">
                <div className="overflow-hidden flex justify-center items-center">
                  <Image
                      src={teacher.image}
                      width={125}
                      height={125}
                      alt={teacher.name}
                      className="rounded-full overflow-hidden"
                    />
                </div>
                <p className="mt-4 text-lg font-semibold text-center">{teacher.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
