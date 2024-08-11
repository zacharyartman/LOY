"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { _id, mainImage, title, metadata } = blog;

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/${_id}`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} layout="fill" className="object-cover" />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/${_id}`}>
              {`${title.slice(0, 150)}...`}
            </Link>
          </h3>
          <div className="line-clamp-3" dangerouslySetInnerHTML={{ __html: metadata }}></div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
