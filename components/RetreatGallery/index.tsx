"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryTab = "main" | "accommodations" | "landscapes";

type RetreatGalleryProps = {
  mainImages: string[];
  accommodationsImages: string[];
  landscapesImages: string[];
};

const RetreatGallery = ({
  accommodationsImages,
  landscapesImages,
  mainImages,
}: RetreatGalleryProps) => {
  const [activeTab, setActiveTab] = useState<GalleryTab>("main");
  const [isFixed, setIsFixed] = useState(false);
  const [fixedLeft, setFixedLeft] = useState<number | null>(null);
  const [fixedWidth, setFixedWidth] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sentinelRef.current && tabsRef.current) {
        const rect = sentinelRef.current.getBoundingClientRect();
        const shouldBeFixed = rect.top < 88;

        if (shouldBeFixed && !isFixed) {
          // Store the position and width when becoming fixed
          const tabsRect = tabsRef.current.getBoundingClientRect();
          setFixedLeft(tabsRect.left);
          setFixedWidth(tabsRect.width);
        } else if (!shouldBeFixed && isFixed) {
          // Reset when scrolling back up
          setFixedLeft(null);
          setFixedWidth(null);
        }

        setIsFixed(shouldBeFixed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  const getActiveImages = () => {
    switch (activeTab) {
      case "main":
        return mainImages;
      case "accommodations":
        return accommodationsImages;
      case "landscapes":
        return landscapesImages;
      default:
        return mainImages;
    }
  };

  const getTabLabel = (tab: GalleryTab) => {
    switch (tab) {
      case "main":
        return "Main";
      case "accommodations":
        return "Accommodations";
      case "landscapes":
        return "Landscapes";
    }
  };

  const activeImages = getActiveImages();

  return (
    <div className="relative w-full md:p-7.5 lg:w-1/2 lg:w-[40%]">
      {/* Sentinel to track scroll position - positioned where tabs start */}
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-0 h-1 w-full"
      ></div>

      {/* Tabs - Normal position (ref) and Fixed when scrolled */}
      <div
        ref={tabsRef}
        className={`mb-4 flex flex-wrap gap-2 border-b border-gray-200 bg-white px-4 py-2 shadow-sm transition-all duration-200 ${
          isFixed ? "fixed top-[88px] z-[99998]" : "relative"
        }`}
        style={
          isFixed && fixedLeft !== null && fixedWidth !== null
            ? {
                left: `${fixedLeft}px`,
                width: `${fixedWidth}px`,
              }
            : isFixed
              ? {
                  left: "0",
                  width: "100%",
                }
              : undefined
        }
      >
        <div className="max-w-c-1690 mx-auto flex flex-wrap justify-center gap-2">
          {(["main", "landscapes", "accommodations"] as GalleryTab[]).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  activeTab === tab
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {getTabLabel(tab)}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Spacer for fixed tabs - only show when fixed */}
      {isFixed && <div className="h-14 md:h-12"></div>}

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.05, duration: 0.4 }}
        viewport={{ once: true }}
        className="animate_right"
      >
        {/* Gallery Images */}
        <div className="flex flex-col space-y-4">
          {activeImages.length > 0 ? (
            activeImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={`Retreat ${getTabLabel(activeTab)} image ${index + 1}`}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            ))
          ) : (
            <div className="flex h-48 items-center justify-center text-gray-500">
              No images available
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RetreatGallery;
