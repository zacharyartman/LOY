"use client";

import { useEffect } from "react";

function MomenceGiftCard() {
  useEffect(() => {
    const handleResize = (e) => {
      const height = +e.data?.height;
      const type = e.data?.type;
      const iframe = document.querySelector("#iframe_gift_cards_35160") as HTMLIFrameElement;

      if (!type || !type.match("iframe_gift_cards_35160_resize") || isNaN(height) || !iframe) {
        return;
      }

      iframe.height = height + "px";
    };

    window.addEventListener("message", handleResize, false);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <iframe
        id="iframe_gift_cards_35160"
        src="https://momence.com/gcc/35160"
        className="w-full "
        scrolling="no"
        style={{ maxWidth: "800px" }}
      ></iframe>
    </div>
  );
}

export default MomenceGiftCard;
