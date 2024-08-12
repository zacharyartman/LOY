"use client";
import React, { useEffect } from "react";
import Image from 'next/image';
import Cookies from 'js-cookie';

export default function Popup() {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    const closed = Cookies.get('newStudentClosed');
    if (!closed) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 4000);
    
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          Cookies.set('newStudentClosed', 'true', { expires: 7 });
          setShowModal(false);
        }
      };

      const handleClickOutside = (event) => {
        if (event.target.id === 'modal-background') {
          Cookies.set('newStudentClosed', 'true', { expires: 7 });
          setShowModal(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div
            id="modal-background"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto mt-20 mx-8 max-w-lg">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-center flex-col justify-between p-0 rounded-t">

                  <div className="relative h-30 sm:h-40 w-full mb-2 mx-auto rounded-t-lg overflow-hidden">
                    <Image src={"/images/general/teaching.webp"} alt={'TODO'} layout="fill" objectFit="cover" />
                  </div>
                  <div className="border-b border-solid border-blueGray-200 mx-0 md:mx-15">
                  <div className="px-5 md:px-0 pt-3 pb-5">
                    <h3 className="text-lg font-semibold text-black text-center dark:text-white xl:text-2xl">
                      New Student Special: Only $79 for Three Weeks Unlimited Yoga Classes
                    </h3>
                  </div>
                  </div>
                  <button
                    className="absolute top-0 right-0 m-2 px-2 rounded-full bg-opacity-75 text-primary text-2xl font-semibold bg-white backgroundfocus:outline-none"
                    onClick={() => {setShowModal(false); Cookies.set('newStudentClosed', 'true', { expires: 7 });}}
                  >
                    X
                  </button>
                </div>
                {/* body */}
                <div className="relative py-5 px-8 md:px-15 flex-auto">
                  <p className="my-0 text-sectiontitle leading-relaxed">
                    Enjoy three weeks of unlimited yoga for only $79. Your three weeks doesn’t start until your first class giving you the freedom to purchase now for use at a later date (new local students only).
                  </p>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end px-6 py-4 mx-0 md:mx-15 border-t border-solid border-blueGray-200 rounded-b">
                  <a
                    href="https://momence.com/Las-Olas-Yoga/membership/Three-Weeks-for-%2479.00-(New-Local-Students-Only)/136483"
                    className="flex items-center justify-center rounded-full bg-primary px-10.5 py-2.5 w-full text-regular text-white transition-all duration-200 hover:bg-primaryho"
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}