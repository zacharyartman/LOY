"use client";
import Link from "next/link";
import { useEffect } from "react";

function MomenceSchedule({ title, fullSchedule, sessionType, liteMode }) {
  useEffect(() => {
    const scheduleScript = document.createElement("script");
    scheduleScript.async = true;
    scheduleScript.type = "module";
    scheduleScript.src =
      "https://momence.com/plugin/host-schedule/host-schedule.js";
    scheduleScript.setAttribute("host_id", "35160");
    scheduleScript.setAttribute("teacher_ids", "[]");
    scheduleScript.setAttribute("session_type", sessionType);
    scheduleScript.setAttribute("location_ids", "[]");
    scheduleScript.setAttribute("lite_mode", liteMode);
    scheduleScript.setAttribute("tag_ids", "[]");
    scheduleScript.setAttribute("default_filter", "show-all");
    scheduleScript.setAttribute("hide_drop_in_price", "true");

    const scheduleDiv = document.getElementById("ribbon-schedule");
    if (scheduleDiv) {
      scheduleDiv.appendChild(scheduleScript);
    }

    return () => {
      if (scheduleDiv) {
        scheduleDiv.removeChild(scheduleScript);
      }
    };
  }, []);

  return (
    <>
      {title && (
        <div className="flex justify-center">
          <h2 className="mx-auto text-2xl font-bold text-black xl:text-sectiontitle2">
            Schedule
          </h2>
        </div>
      )}

      <div
        className={`schedule-container ${fullSchedule ? "" : "h-screen"} overflow-hidden`}
      >
        <div id="ribbon-schedule"></div>
      </div>

      {!fullSchedule && (
        <div className="flex justify-center">
          <div className="mb-15 mt-7 flex items-center gap-2 xl:mt-0">
            <Link
              href="/schedule"
              className="mt-5 flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-200 hover:bg-primaryho"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MomenceSchedule;
