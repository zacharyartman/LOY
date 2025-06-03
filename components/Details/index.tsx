"use client";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { saveAs } from "file-saver";
import { teacherByName, teachersData } from "../Teachers/teachersData";
import { Teacher } from "@/types/teacher";

const Details = ({
  title,
  dates,
  text,
  images,
  buttonText,
  buttonLink,
  teacher = "",
  events = null,
  verticalImages = false,
  teacherNamesUnderApplyButton,
}: {
  title: string;
  dates: string;
  text: string;
  images: [string, string][];
  buttonText?: string;
  buttonLink?: string;
  teacher?: string;
  events?:
    | { date: number[]; title: string; start: number[]; end: number[] }[]
    | null;
  verticalImages?: boolean;
  teacherNamesUnderApplyButton?: string[];
}) => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const addToCalendar = () => {
    if (!events || events.length === 0) {
      return;
    }
    // Define all the event dates and times
    // Create the ICS file content
    let icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\n`;
    events.forEach(({ date, title, start, end }) => {
      icsData += `BEGIN:VEVENT\n`;
      icsData += `DTSTART:${formatICSDate([...date, ...start])}\n`;
      icsData += `DTEND:${formatICSDate([...date, ...end])}\n`;
      icsData += `SUMMARY:${title}\n`;
      icsData += `END:VEVENT\n`;
    });
    icsData += `END:VCALENDAR`;

    // Trigger download of the ICS file
    const blob = new Blob([icsData], { type: "text/calendar" });
    saveAs(blob, "TT_Events.ics");
  };

  const formatICSDate = (dateArray) => {
    const [year, month, day, hour, minute] = dateArray;
    return `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}${String(minute).padStart(2, "0")}00`;
  };

  return (
    <>
      <section id="details" className="px-4 md:px-8 2xl:px-0">
        <div className="max-w-c-1690 relative mx-auto px-0 py-5 lg:px-15 lg:px-7.5 lg:py-10 xl:px-20">
          <h2 className="mx-5 mb-2 text-center text-2xl font-semibold text-primaryho xl:text-sectiontitle4">
            {title}
          </h2>
          {teacher && (
            <h3 className="mx-5 mb-2 text-center text-metatitle3 font-semibold text-primary">
              with {teacher}
            </h3>
          )}
          <h3
            className="text-md mx-5 mb-4 text-center font-semibold text-primary xl:text-metatitle2"
            dangerouslySetInnerHTML={{ __html: dates }}
          ></h3>
          <div
            className={`flex flex-col gap-8 md:flex-row ${images.length === 0 ? "md:justify-center" : "md:justify-between"} xl:gap-20`}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className={`animate_left w-full rounded-lg bg-white p-7.5 shadow-solid-8 ${images.length === 0 ? "md:w-[80%]" : "md:w-[60%]"} xl:p-15`}
            >
              <div
                className="blog-details"
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <div className="my-5 flex flex flex-col items-center justify-center gap-2 xl:mb-0 xl:ml-10 xl:mt-0 xl:flex-row">
                {buttonText && buttonLink && (
                  <a
                    href={buttonLink}
                    target="_blank"
                    className="flex items-center justify-center rounded-full bg-primary px-15 py-2.5 text-center text-regular text-white transition-all duration-0 hover:bg-primaryho xl:duration-200"
                  >
                    {buttonText}
                  </a>
                )}
                {events && (
                  <button
                    onClick={addToCalendar}
                    className="flex items-center justify-center rounded-full bg-primary px-15 py-2.5 text-center text-regular text-white transition-all duration-0 hover:bg-primaryho xl:duration-200"
                  >
                    Add to Calendar
                  </button>
                )}
              </div>
              {teacherNamesUnderApplyButton && (
                <div className="mt-10">
                  <p className="text-center text-[18pt] font-bold">
                    Meet the {teacherNamesUnderApplyButton.length > 1 ? "Teaching Team" : "Teacher"}
                  </p>
                  <div className="my-5 flex flex-wrap justify-center gap-5">
                    {teacherNamesUnderApplyButton.map((teacherName) => {
                      const teacher = teacherByName[teacherName];
                      return (
                        <div key={teacher.id} className="w-[200px] text-center">
                          <div 
                            className="cursor-pointer"
                            onClick={() => setSelectedTeacher(teacher)}
                          >
                            <Image
                              src={teacher.image}
                              alt={teacher.name}
                              width={175}
                              height={175}
                              className="mx-auto rounded-full object-cover"
                            />
                            <p className="mt-2 font-bold">{teacher.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}{" "}
            </motion.div>

            {images.length > 0 && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 2, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_right w-full md:w-1/2 md:p-7.5 lg:w-[40%]"
              >
                <div className="relative w-full">
                  <div className="flex flex-col space-y-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`relative ${verticalImages ? "aspect-[3/4]" : "aspect-[4/3]"} w-full`}
                      >
                        <Image
                          src={image[0]}
                          alt={image[1]}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Teacher Bio Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 pt-20">
          <div className="relative mx-4 max-h-[80vh] max-w-2xl overflow-y-auto rounded-lg bg-white p-8">
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={selectedTeacher.image}
                alt={selectedTeacher.name}
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold">{selectedTeacher.name}</h3>
              <div className="mt-4 text-gray-700">
                {selectedTeacher.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
