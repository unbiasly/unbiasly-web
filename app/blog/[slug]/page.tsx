import AppStores from "@/components/custom/app-stores";
import ContentContainer from "@/components/custom/content-container";
import HighlightContent from "@/components/custom/highlight-content";
import Link from "next/link";
import UnbiaslyIcon from "@/public/unbiasly-ai-icon.png";
import Image from "next/image";
import LeftArrowIcon from "@/public/icons/left-arrow.png";
import AppApi from "@/service/app.api";
import { format } from "date-fns";
import ShareBlogPostIcon from "./share-icon";
import { notFound } from "next/navigation";

const getBlogPost = (id: string) => {
  return AppApi.getBlogPost(id).catch(() => null);
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getBlogPost(params.slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <main className="mt-10 md:mt-18">
      <HighlightContent>
        <Link href={"/blog"} className="flex">
          <Image
            src={LeftArrowIcon}
            alt="Go Back to Blog list"
            className="w-5 lg:w-8"
          />
          <div className="ml-3 lg:ml-4 text-sm leading-consistent lg:text-xl lg:leading-consistent font-bold">
            Back to Blog list
          </div>
        </Link>
      </HighlightContent>
      <ContentContainer className="mt-4 lg:mt-12">
        {/* Blog Title */}
        <div className="text-gray-14 text-xs leading-consistent lg:text-2xl lg:leading-consistent font-bold">
          {blogPost.title}
        </div>
        {/* Blog Image */}
        <div className="w-full h-[144px] lg:h-[480px] mt-3 lg:mt-8 bg-[#D9D9D9] rounded-lg lg:rounded-xl relative">
          <Image
            src={blogPost.thumbnail}
            fill
            alt="Blog Thumbnail"
            className="rounded-lg lg:rounded-xl"
            quality={100}
          />
        </div>
        {/* Blog Meta */}
        <div className="mt-4 lg:mt-8 flex flex-1 items-center justify-between">
          <div className="flex">
            <Image
              src={UnbiaslyIcon}
              alt="UnbiaslyAI logo"
              className="w-[38px] lg:w-[52px]"
            />
            <div className="ml-4">
              <div className="text-xs leading-consistent lg:text-xl lg:leading-consistent font-bold text-gray-14">
                {blogPost.author}
              </div>
              <div className="text-xs leading-consistent lg:text-sm lg:leading-consistent text-gray-14 mt-1">
                {format(blogPost.createdAt, "do MMMM yyyy")}
              </div>
            </div>
          </div>
          <ShareBlogPostIcon />
        </div>
        {/* Blog Content */}
        <div className="mt-5 lg:mt-7 text-gray-14 text-xs leading-consistent lg:text-xl lg:leading-consistent">
          <div
            dangerouslySetInnerHTML={{
              __html: blogPost.content,
            }}
          />
        </div>
      </ContentContainer>
      <HighlightContent className="pt-6 lg:pt-12 pb-6 lg:pb-12">
        <AppStores />
      </HighlightContent>
    </main>
  );
}
