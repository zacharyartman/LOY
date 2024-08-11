import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {BlogData.sort(() => 0.5 - Math.random()).slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="relative h-18 w-45 ">
                {post.mainImage ? (
                  <Image layout="fill" src={post.mainImage} alt="Blog" className="object-cover w-full h-full"/>
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <a href={`/blog/blog-details`}>
                  {post.title.length <= 30 ? post.title : `${post.title.slice(0, 30)}...`}
                </a>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
