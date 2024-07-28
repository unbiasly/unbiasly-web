"use client";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { format, parseISO } from "date-fns";
import AppApi from "@/service/app.api";
import { BlogPostResponse } from "@/service/api.interface";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  slug,
  image,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const parsedDateString = parseISO(date);
  const formattedDate = format(parsedDateString, "do MMMM yyyy");

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = description;
    }
  }, [description]);
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-white p-4 md:p-7 md:flex rounded-2xl cursor-pointer"
      prefetch
    >
      <div className="w-full md:max-w-[432px] h-[200px] bg-[#D9D9D9] rounded-xl relative">
        <Image
          alt={`Blog post thumbnail for ${title}`}
          src={image}
          fill
          sizes="(min-width: 768px) w-full, max-w-[432px]"
          className="rounded-xl"
          quality={100}
        />
      </div>
      <div className="max-md:mt-4 md:ml-7 text-[#8A8A8A]  flex flex-col justify-between">
        <div>
          <div className="text-xs leading-consistent md:text-xl md:leading-consistent text-black font-bold">
            {title}
          </div>
          <div
            ref={ref}
            className="mt-1 md:mt-3 text-xs leading-consistent lg:text-base lg:leading-consistent break-all text-black"
          />
        </div>
        <div className="max-md:mt-3 text-xs leading-consistent lg:text-base lg:leading-consistent italic">
          5 min read . {formattedDate}
        </div>
      </div>
    </Link>
  );
};

export default function BlogPosts() {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["blogPosts"],
    queryFn: ({ pageParam }) => AppApi.getBlogPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: BlogPostResponse) =>
      lastPage.meta.hasNextPage ? lastPage.meta.currentPage + 1 : undefined,
  });
  if (!data) {
    return null;
  }

  const handleOnViewportEnter = (entry: IntersectionObserverEntry | null) => {
    if (!entry?.isIntersecting) return;
    fetchNextPage();
  };

  return (
    <div className="flex flex-col gap-y-9">
      {data.pages.map((pageData) =>
        pageData.data.map((blogPost) => (
          <BlogCard
            key={blogPost._id}
            slug={blogPost._id}
            title={blogPost.title}
            description={blogPost.content}
            date={blogPost.createdAt}
            image={blogPost.thumbnail}
          />
        ))
      )}
      <motion.div
        initial="hidden"
        whileInView="visible"
        onViewportEnter={handleOnViewportEnter}
      />
    </div>
  );
}
