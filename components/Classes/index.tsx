"use client";
import React from "react";
import classesData from "./classesData";
import SingleClass from "./SingleClass";

const Classes = ({title}) => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className={`${title ? "py-20 lg:py-25 xl:py-30" : "py-0 pb-20"}`}>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {title && 
                (
                <div className="flex justify-center">
                  <h2 className="mx-auto text-2xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                      Our Classes
                  </h2>
                </div>)    
        }
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-4 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {classesData.map((classItem, key) => (
              <SingleClass classItem={classItem} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Classes;
