import BlogData from "@/components/Blog/blogData";
import Image from "next/legacy/image";
import RelatedPost from "@/components/Blog/RelatedPost";
import InlineArrowButton from "@/components/InlineArrowButton";
import { Metadata } from "next";
import Error from "@/components/Error";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = BlogData.find((blog) => blog._id.toString() === params.id);

  if (!blog) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: `${blog.title} - Las Olas Yoga`,
    description: blog.seoDescription,
  };
}

export async function generateStaticParams() {
  return BlogData.map((blog) => ({
    id: blog._id.toString(),
  }));
}

export default function SingleBlogPage({ params }: { params: { id: string } }) {
  const blog = BlogData.find((blog) => blog._id.toString() === params.id);

  if (!blog) {
    return <Error />;
  }

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mb-5 block px-4 md:px-8 lg:hidden">
        <InlineArrowButton
          href={"/blog"}
          reversed={true}
          text={"Back to blogs"}
        />
      </div>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="md:w-1/2 lg:w-[32%]">
            <div className="mb-5 hidden lg:block">
              <InlineArrowButton
                href={"/blog"}
                reversed={true}
                text={"Back to blogs"}
              />
            </div>
            <RelatedPost blogID={blog._id} />
          </div>

          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 md:p-10">
              <div className="mb-10 w-full overflow-hidden ">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={blog.mainImage}
                    alt={blog.title}
                    layout="fill"
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black 2xl:text-sectiontitle2">
                {blog.title}
              </h2>

              <div
                className="blog-details"
                dangerouslySetInnerHTML={{ __html: blog.metadata }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
