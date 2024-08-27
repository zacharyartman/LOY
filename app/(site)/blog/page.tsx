import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import NewPageHero from "@/components/NewPageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Las Olas Yoga",
  description: "Discover the latest insights, tips, and inspiration on the Las Olas Yoga blog. Explore a range of articles on yoga practice, wellness, mindfulness, and community events. Stay informed about our non-heated classes, all-level sessions, and upcoming 200-hour and Yin teacher trainings. Join our supportive community in nurturing your mind, body, and spirit. Visit Las Olas Yoga's blog for expert guidance on your yoga journey.",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      <NewPageHero titleText={"Blog"} link='/images/hero/hero-blog-yoga-near-me.webp' position="bg-[center_60%]"></NewPageHero>

      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.slice().reverse().map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
