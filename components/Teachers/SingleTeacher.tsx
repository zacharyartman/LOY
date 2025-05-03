import { useState } from "react";
import { Teacher } from "@/types/teacher";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const SingleTeacher = ({ review }: { review: Teacher }) => {
  const { name, designation, image, content } = review;
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top"
    >
      <div className="rounded-lg bg-white pt-7.5 shadow-solid-9">
        <div className="flex justify-center px-12 py-5">
          <Image
            src={image}
            className="rounded-full"
            width={175}
            height={175}
            alt="yoga teacher near me"
          />
        </div>
        <div className="px-10">
          <div className="mb-5 border-b border-stroke text-center">
            <div>
              <h2 className="mb-1.5 text-2xl text-black">{name}</h2>
              <motion.div
                initial={{ height: "8rem" }}
                animate={{ height: showFullContent ? "auto" : "8rem" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative overflow-hidden"
              >
                <strong className="pb-3">
                  {designation}
                  {designation && <br />}
                </strong>
                {content}
                {!showFullContent && (
                  <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent" />
                )}
              </motion.div>
              <button
                className="my-3 text-primaryho"
                onClick={() => setShowFullContent(!showFullContent)}
              >
                {showFullContent ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTeacher;
