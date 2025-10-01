import React from "react";
import Image from "next/legacy/image";
import BlogData from "./blogData";
import Link from "next/link";

const RelatedPost = async ({ blogID }) => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13">
        <h4 className="mb-7.5 text-2xl font-semibold text-black">
          Related Posts
        </h4>

        <div>
          {BlogData.filter((post) => post._id != blogID)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((post, key) => (
              <Link
                href={`/${post._id}`}
                className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
                key={key}
              >
                <div className="flex w-full xl:w-2/5">
                  <div className="relative h-35 w-full lg:h-20">
                    {post.mainImage ? (
                      <Image
                        layout="fill"
                        src={post.mainImage}
                        alt="Blog"
                        className="object-cover"
                      />
                    ) : (
                      "No image"
                    )}
                  </div>
                </div>
                <div className="flex w-full xl:w-3/5">
                  <h5 className="text-md font-medium text-black transition-all duration-150 hover:text-primary">
                    {post.title.length <= 60
                      ? post.title
                      : `${post.title.slice(0, 60)}...`}
                  </h5>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
