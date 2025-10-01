"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

function MomenceSchedule({
  title,
  fullSchedule,
  sessionType,
  liteMode,
}: {
  title: boolean;
  fullSchedule: boolean;
  sessionType: "class" | "workshop";
  liteMode: boolean;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        window.location.href.indexOf(event.origin) !== 0 &&
        event.source !== window
      )
        return;

      if (event.data.type === "resize" && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const liteClassSrc =
    liteMode && sessionType === "class" ? "/lite-class.html" : undefined;
  const notLiteClassSrc =
    !liteMode && sessionType === "class" ? "/not-lite-class.html" : undefined;
  const notLiteWorkshopSrc =
    !liteMode && sessionType === "workshop"
      ? "/not-lite-workshop.html"
      : undefined;

  return (
    <>
      {title && (
        <div className="flex justify-center">
          <h2 className="mx-auto text-2xl font-bold text-black xl:text-sectiontitle2">
            Schedule
          </h2>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={liteClassSrc ?? notLiteClassSrc ?? notLiteWorkshopSrc}
        style={{
          width: "100%",
          border: "none",
          minHeight: "275px",
          ...(!fullSchedule && { maxHeight: "100vh" }),
        }}
        scrolling="no"
      />

      {!fullSchedule && (
        <div className="flex justify-center">
          <div className="mb-15 mt-7 flex items-center gap-2 xl:mt-0">
            <Link
              href="/schedule"
              className="mt-5 flex items-center justify-center rounded-full bg-primary px-5.5 py-2.5 text-regular text-white transition-all duration-150 hover:bg-primaryho"
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
