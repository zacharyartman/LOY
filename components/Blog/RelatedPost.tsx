import React from "react";
import Image from "next/legacy/image";
import BlogData from "./blogData";

const RelatedPost = async ({ blogID }) => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {BlogData.filter((post => post._id != blogID)).sort(() => 0.5 - Math.random()).slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="flex xl:w-2/5 w-full">
                <a href={`../${post._id}`} className="relative h-35 lg:h-20 w-full">
                  {post.mainImage ? (
                    <Image layout="fill" src={post.mainImage} alt="Blog" className="object-cover" />
                  ) : (
                    "No image"
                  )}
                </a >
              </div>
              <div className="flex xl:w-3/5 w-full">
                <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href={`../${post._id}`}>
                    {post.title.length <= 60 ? post.title : `${post.title.slice(0, 60)}...`}
                  </a>
                </h5>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
