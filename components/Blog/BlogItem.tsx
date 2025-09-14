"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { _id, mainImage, title, metadata } = blog;

  const handleClick = () => {
    window.location.href = `../${_id}`;
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
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
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 hover:cursor-pointer hover:text-primary"
      >
        <div className="relative block aspect-[368/239]">
          <Image
            src={mainImage}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </div>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-150 xl:text-itemtitle2">
            <div>{title.length <= 60 ? title : `${title.slice(0, 60)}...`}</div>
          </h3>
          <div
            className="line-clamp-3"
            dangerouslySetInnerHTML={{ __html: metadata }}
          ></div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
