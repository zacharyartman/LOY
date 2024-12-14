"use client";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import React from "react";
import { saveAs } from "file-saver";

const Details = ({ title, dates, text, images, buttonText, buttonLink }) => {
  const addToCalendar = () => {
    // Define all the event dates and times
    const events = [
      { date: [2025, 10, 11], title: "300 Hour TT Oct 11", start: [12, 0], end: [17, 0] },
      { date: [2025, 10, 12], title: "300 Hour TT Oct 12", start: [13, 30], end: [17, 30] },
      { date: [2025, 11, 8], title: "300 Hour TT Nov 8", start: [12, 0], end: [17, 0] },
      { date: [2025, 11, 9], title: "300 Hour TT Nov 9", start: [13, 30], end: [17, 30] },
      { date: [2025, 12, 13], title: "300 Hour TT Dec 13", start: [12, 0], end: [17, 0] },
      { date: [2025, 12, 14], title: "300 Hour TT Dec 14", start: [13, 30], end: [17, 30] },
      { date: [2026, 1, 10], title: "300 Hour TT Jan 10", start: [12, 0], end: [17, 0] },
      { date: [2026, 1, 11], title: "300 Hour TT Jan 11", start: [13, 30], end: [17, 30] },
      { date: [2026, 2, 7], title: "300 Hour TT Feb 7", start: [12, 0], end: [17, 0] },
      { date: [2026, 2, 8], title: "300 Hour TT Feb 8", start: [13, 30], end: [17, 30] },
      { date: [2026, 3, 7], title: "300 Hour TT Mar 7", start: [12, 0], end: [17, 0] },
      { date: [2026, 3, 8], title: "300 Hour TT Mar 8", start: [13, 30], end: [17, 30] },
    ];

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
                <button
                  onClick={addToCalendar}
                  className="flex items-center text-center justify-center rounded-full bg-primary px-15 py-2.5 text-regular text-white transition-all duration-0 xl:duration-200 hover:bg-primaryho"
                >
                  Add to Calendar
                </button>
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
                  {images.map((image) => (
                    <div key={image} className="relative w-full pb-10" style={{ paddingBottom: '56.25%' }}>
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