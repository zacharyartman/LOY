import { useEffect, useRef, useState } from "react";

interface FAQItemData {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
}

interface FAQItemProps {
  faqData: FAQItemData;
}

const FAQItem = ({ faqData }: FAQItemProps) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const [height, setHeight] = useState(0);
  const answerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (activeFaq === id && answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [activeFaq, id]);

  return (
    <>
      <div className="flex flex-col border-b border-stroke last-of-type:border-none">
        <button
          onClick={() => {
            handleFaqToggle(id);
          }}
          className="flex cursor-pointer items-center justify-between px-6 py-5 text-metatitle3 font-medium text-black lg:px-9 lg:py-7.5"
        >
          {quest}

          {activeFaq === id ? (
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
              style={{
                transform: activeFaq === id ? "rotate(0deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              style={{
                transform: activeFaq === id ? "rotate(0deg)" : "rotate(90deg)",
                transition: "transform 0.3s ease-in-out",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        <div
          style={{ maxHeight: `${height}px` }}
          className="transition-max-height overflow-hidden duration-150 ease-in-out"
        >
          <p
            ref={answerRef}
            className="border-t border-stroke bg-[#f8f4ef] px-6 py-5 lg:px-9 lg:py-7.5"
            dangerouslySetInnerHTML={{ __html: ans }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default FAQItem;
