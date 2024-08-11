"use client";
import Link from 'next/link';
import { useEffect } from 'react';


function MomenceSchedule() {
  useEffect(() => {
    const scheduleScript = document.createElement('script');
    scheduleScript.async = true;
    scheduleScript.type = 'module';
    scheduleScript.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
    scheduleScript.setAttribute('host_id', '35160');
    scheduleScript.setAttribute('teacher_ids', '[]');
    scheduleScript.setAttribute('location_ids', '[]');
    scheduleScript.setAttribute('lite_mode', 'true');
    scheduleScript.setAttribute('tag_ids', '[]');
    scheduleScript.setAttribute('default_filter', 'show-all');

    const scheduleDiv = document.getElementById('ribbon-schedule');
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
      <div className="flex justify-center">
        <h2 className="mx-auto text-2xl font-bold mt-10 text-black dark:text-white xl:text-sectiontitle2">
          Schedule
        </h2>
      </div>

      <div className="schedule-container h-screen overflow-hidden">
        <div id="ribbon-schedule"></div>
      </div>
      <div className='flex justify-center'>
        <div className="mt-7 flex items-center gap-2 xl:mt-0">
          <Link
            href="/schedule"
            className="flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular mt-5 text-white ease-in-out hover:bg-primaryho"
          >
            View Full Schedule
          </Link>
        </div>
      </div>
    </>
  );
}

export default MomenceSchedule;