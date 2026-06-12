"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Popup() {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    const closed = Cookies.get("newStudentClosed");
    if (!closed) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 4000);

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          Cookies.set("newStudentClosed", "true", { expires: 7 });
          setShowModal(false);
        }
      };

      const handleClickOutside = (event: MouseEvent) => {
        if ((event.target as HTMLElement).id === "modal-background") {
          Cookies.set("newStudentClosed", "true", { expires: 7 });
          setShowModal(false);
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("click", handleClickOutside);
      };
    }
    return;
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div
            id="modal-background"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
          >
            <div className="relative mx-8 mt-20 w-auto max-w-lg">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/* header */}
                <div className="flex flex-col items-center justify-between rounded-t p-0">
                  <div className="relative mx-auto mb-2 h-30 w-full overflow-hidden rounded-t-lg sm:h-40">
                    <Image
                      src={"/images/general/yoga-deals-near-me.webp"}
                      alt={
                        "yoga teacher teaching non-heated yoga class in fort lauderdale"
                      }
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="border-blueGray-200 mx-0 border-b border-solid md:mx-15">
                    <div className="flex items-center gap-4 px-5 pb-5 pt-3 md:px-0">
                      <h3 className="flex-1 text-center text-lg font-semibold text-black xl:text-2xl">
                        New Client Special: Only $79 for 3 Weeks + Extra Week
                        Free Unlimited Yoga Classes
                      </h3>
                      <div className="group/badge relative flex-shrink-0">
                        <div className="overflow-hidden rounded-lg bg-black" style={{ width: 75, height: 95 }}>
                          <Image
                            src="/images/best-of-2026.PNG"
                            alt="Best of Fort Lauderdale 2026 Winner"
                            width={75}
                            height={95}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div className="pointer-events-none absolute bottom-full right-0 mb-2 w-max max-w-[160px] rounded bg-waterloo px-2.5 py-1.5 text-center text-xs text-white opacity-0 transition-opacity duration-150 group-hover/badge:opacity-100">
                          Special Best of Fort Lauderdale offer
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="backgroundfocus:outline-none absolute right-0 top-0 m-2 rounded-full bg-white bg-opacity-75 px-2 text-2xl font-semibold text-primary"
                    onClick={() => {
                      setShowModal(false);
                      Cookies.set("newStudentClosed", "true", { expires: 7 });
                    }}
                  >
                    X
                  </button>
                </div>
                {/* body */}
                <div className="relative flex-auto px-8 py-5 md:px-15">
                  <p className="my-0 text-sectiontitle leading-relaxed">
                    Enjoy 3 weeks of unlimited yoga plus an extra week free for
                    only $79. Your time doesn’t start until your first class,
                    giving you the freedom to purchase now for use at a later
                    date (new local clients only).
                  </p>
                </div>
                {/* footer */}
                <div className="border-blueGray-200 mx-0 flex items-center justify-end rounded-b border-t border-solid px-6 py-4 md:mx-15">
                  <a
                    href="https://momence.com/m/811964"
                    target="_blank"
                    className="flex w-full items-center justify-center rounded-full bg-primary px-10.5 py-2.5 text-regular text-white transition-all duration-150 hover:bg-primaryho"
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
