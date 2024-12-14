"use client";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import React from "react";
import { saveAs } from "file-saver";

const Details = ({ title, dates, text, images, buttonText, buttonLink, events = null }: {
  title: string;
  dates: string;
  text: string;
  images: [string, string][];
  buttonText: string;
  buttonLink: string;
  events?: { date: number[]; title: string; start: number[]; end: number[]; }[] | null;
}) => {
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
    saveAs(blob, "300_Hour_TT_Events.ics");
  };

  const formatICSDate = (dateArray) => {
    const [year, month, day, hour, minute] = dateArray;
    return `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}${String(minute).padStart(2, "0")}00`;
  };

  return (
    <>
      <section id="details" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1690 px-0 lg:px-7.5 py-5 lg:px-15 lg:py-10 xl:px-20">

          <h2 className="text-2xl mx-5 mb-2 font-semibold text-center text-primaryho dark:text-white xl:text-sectiontitle4">
            {title}
          </h2>
          <h3
            className="text-md mx-5 mb-4 font-semibold text-center text-primary dark:text-white xl:text-metatitle2"
            dangerouslySetInnerHTML={{ __html: dates }}
          ></h3>

          <div className="flex gap-8 flex-col md:flex-row md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full md:w-[60%] rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
            >
              <div className="blog-details" dangerouslySetInnerHTML={{ __html: text }} />
              <div className="flex flex-col xl:flex-row justify-center my-5 xl:mb-0 xl:ml-10 flex items-center gap-2 xl:mt-0">
                <a
                  href={buttonLink}
                  target="_blank"
                  className="flex items-center text-center justify-center rounded-full bg-primary px-15 py-2.5 text-regular text-white transition-all duration-0 xl:duration-200 hover:bg-primaryho"
                >
                  {buttonText}
                </a>
                {events && <button
                  onClick={addToCalendar}
                  className="flex items-center text-center justify-center rounded-full bg-primary px-15 py-2.5 text-regular text-white transition-all duration-0 xl:duration-200 hover:bg-primaryho"
                >
                  Add to Calendar
                </button>}
              </div>
            </motion.div>

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
                    <div key={index} className="relative w-full pb-10" style={{ paddingBottom: '56.25%' }}>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;