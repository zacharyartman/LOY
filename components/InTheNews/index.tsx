"use client";

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsData } from "./newsData";
import { useEffect } from "react";
import Image from "next/legacy/image";


const InTheNews = () => {

  useEffect(() => {
    document.documentElement.style.setProperty("--swiper-theme-color", "#a58367")
  }, [])


  return (
    <section>
      <div className="flex justify-center mt-15">
        <h2 className="mx-auto text-2xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          Las Olas Yoga in the News
        </h2>
      </div>

      <div className="mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="swiper">
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            navigation = { true }
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
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
            }}
            loop
          >
            {newsData.map((teacher) => (
                <SwiperSlide key={teacher.id} className="flex w-full flex-col items-center">
                  <a href={teacher.designation} target="blank">
                    <div className="w-full h-45 overflow-hidden flex items-center justify-center rounded-lg">
                      <Image
                        src={teacher.image}
                        width={300}
                        alt={teacher.name}
                        objectFit="contain"
                      />
                    </div>

                    <p className="mt-4 text-lg font-semibold text-center mb-10 text-primaryho">{teacher.name}</p>
                  </a>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default InTheNews;
