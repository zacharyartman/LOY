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

      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          Cookies.set("newStudentClosed", "true", { expires: 7 });
          setShowModal(false);
        }
      };

      const handleClickOutside = (event) => {
        if (event.target.id === "modal-background") {
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
                    <div className="px-5 pb-5 pt-3 md:px-0">
                      <h3 className="text-center text-lg font-semibold text-black xl:text-2xl">
                        New Client Special: Only $79 for Three Weeks Unlimited
                        Yoga Classes
                      </h3>
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
                    Enjoy three weeks of unlimited yoga for only $79. Your three
                    weeks doesn’t start until your first class giving you the
                    freedom to purchase now for use at a later date (new local
                    clients only).
                  </p>
                </div>
                {/* footer */}
                <div className="border-blueGray-200 mx-0 flex items-center justify-end rounded-b border-t border-solid px-6 py-4 md:mx-15">
                  <a
                    href="https://momence.com/Las-Olas-Yoga/membership/Three-Weeks-for-%2479.00-(New-Local-Students-Only)/136483"
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
