"use client";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { format, parseISO } from "date-fns";
// import AppApi from "@/service/app.api";
import { BlogPostResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";
import { cn } from "@/lib/utils";
import Loader from "@/components/custom/Loader";

type BlogCardProps = {
    title: string;
    date: string;
    image: string;
    slug: string;
    _id: string;
    description: string;
    isFeatured?: boolean;
    className?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    description,
    date,
    slug,
    _id,
    image,
    isFeatured = false,
    className,
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
            href={`/blog/${slug}?id=${_id}`}
            className={cn(
                "bg-[#1E1E1E] flex flex-col rounded-3xl cursor-pointer",
                isFeatured ? "md:flex-row md:h-[300px] w-full" : "md:max-w-[400px]",
                className
            )}
            prefetch
        >
            <div className={cn(
                "relative",
                isFeatured ? " md:w-1/3 h-[200px] md:h-auto" : "w-full h-[230px] max-h-[400px]"
            )}>
                <Image
                    alt={`Blog post thumbnail for ${title}`}
                    src={image}
                    fill
                    className="rounded-3xl object-cover"
                    quality={100}
                    priority={isFeatured}
                />
            </div>
            <div className={cn(
                "p-6 text-[#FFF]",
                isFeatured ? "md:flex-1 md:p-8 md:flex md:flex-col md:justify-center" : ""
            )}>
                <div>
                    <div className="max-md:mt-3 text-xs leading-consistent lg:leading-consistent text-gray-300">
                        {formattedDate}
                    </div>
                    <div className={cn(
                        "font-bold text-white",
                        isFeatured ? "md:text-3xl lg:text-4xl mb-2" : "text-base  md:text-lg leading-consistent"
                    )}>
                        {title}
                    </div>
                    {isFeatured && <p className="text-sm text-gray-300">By UnbiaslyAI</p>}
                </div>
            </div>
        </Link>
    );
};


export function BlogPosts() {
    const generateSlug = (title: string): string => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .trim()
            .replace(/\s+/g, '-'); // Replace spaces with hyphens
    };
    
    const { data, fetchNextPage } = useInfiniteQuery({
        queryKey: ["blogPosts"],
        queryFn: ({ pageParam }) => {
            const limit = pageParam === 1 ? 4 : 3;
            return fetch(`/blog/api?page=${pageParam}&limit=${limit}`).then<BlogPostResponse>(
                handleResponse
            );
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage: BlogPostResponse) =>
            lastPage.meta.hasNextPage ? lastPage.meta.currentPage + 1 : undefined,
    });


      const onLoadMore = () => {
        fetchNextPage();
      };

      
      if (!data) {
        return <Loader color="black"/>;
      }

    return (
        <div className="flex flex-col items-center">
            <div className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                "w-full max-w-6xl mx-auto px-4"
            )}>
                {data.pages.map((pageData, pageIndex) =>
                    pageData.data.map((blogPost, postIndex) => (
                        <BlogCard
                            key={blogPost._id}
                            _id={blogPost._id}
                            title={blogPost.title}
                            description={blogPost.summary}
                            date={blogPost.createdAt}
                            image={blogPost.thumbnail}
                            slug={generateSlug(blogPost.title)}
                            isFeatured={pageIndex === 0 && postIndex === 0}
                            className={cn(
                                pageIndex === 0 && postIndex === 0 ? "md:col-span-2 lg:col-span-3" : "",
                                "mx-auto w-full"
                            )}
                        />
                    ))
                )}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center pt-4">
                <button
                    aria-label="Load More"
                    onClick={onLoadMore}
                    className="w-12 h-12 rounded-full bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BlogPosts;
