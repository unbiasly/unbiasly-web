"use client";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { format, parseISO } from "date-fns";
import { BlogPostResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";
import { cn } from "@/lib/utils";
import Loader from "@/components/custom/Loader";
import { generateSlug } from "@/lib/utils/generateSlug";
import LoadMore from "./LoadMore";

type BlogCardProps = {
    title: string;
    date: string;
    image: string;
    slug: string;
    author: string;
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
    author,
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
                    {isFeatured && <p className="text-sm hidden lg:block text-gray-300">By {author}</p> }
                </div>
            </div>
        </Link>
    );
};


export function BlogPosts() {
    const [isLoading, setIsLoading] = useState(true);
    
    const { data, fetchNextPage, isFetching } = useInfiniteQuery({
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

      useEffect(() => {
        if (!isFetching) {
            setIsLoading(false);
        }
    }, [isFetching]);

      
      if (!data) {
        return <Loader color="black"/>;
      }

    // Add a check for empty blog posts
    if (data.pages.length === 0 || data.pages.every(page => page.data.length === 0)) {
        return <div className="w-full h-full flex justify-center text-4xl text-center text-gray-500">No blog posts available at the moment.</div>;
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
                            author={blogPost.author}
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
            <LoadMore onLoadMore={onLoadMore} />
        </div>
    );
};

export default BlogPosts;
