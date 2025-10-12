"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SingleTeacher from "./SingleTeacher";
import { teachersData } from "./teachersData";


const Teachers = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:mt-5 md:px-8 2xl:px-0 max-w-c-1390 mx-auto my-10">
    {teachersData.map((review) => (
          <SingleTeacher key={review.id} review={review} />
        ))}
    </div>
    </>
  );
};

export default Teachers;
