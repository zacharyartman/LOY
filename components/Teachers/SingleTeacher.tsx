import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { defaultTransition, fadeInUp } from "@/constants/animations";
import { Teacher } from "@/types/teacher";

interface SingleTeacherProps {
  review: Teacher;
}

const SingleTeacher = ({ review }: SingleTeacherProps) => {
  const { name, designation, image, content } = review;
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={defaultTransition}
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
        <div className="px-7">
          <div className="mb-5 border-b border-stroke text-left">
            <div className="text-center">
              <h2 className="mb-1.5 text-2xl text-black">{name}</h2>
              <strong className="pb-3">
                {designation}
                {designation && <br />}
              </strong>
            </div>
            <motion.div
              initial={{ height: designation ? "8rem" : "10rem" }}
              animate={{ height: showFullContent ? "auto" : designation ? "8rem" : "10rem" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="relative overflow-hidden"
            >
              {content}
              {!showFullContent && (
                <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent" />
              )}
            </motion.div>
            <div className="text-center">
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
