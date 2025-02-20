"use client";
import { Language, NewsArticlesResponse } from "@/service/api.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useFilter } from "./hooks/useFilter";
import { handleResponse } from "@/service/fetchClient";
import LanguageToggle from "@/components/custom/language-toggle/LanguageToggle";
import Loader from "@/components/custom/Loader";
import NewsLoader from "@/components/custom/news/NewsLoader";
import { NewsCard } from "@/components/custom/news/NewsCard";
import { useEffect, useState } from "react";


const useArticles = (language: Language) =>
  useInfiniteQuery({
    queryKey: ["articles", language],
    queryFn: ({ pageParam }) => {
      return fetch("/live-news/api", {
        method: "POST",
        body: JSON.stringify({ language, page: pageParam }),
      }).then<NewsArticlesResponse>(handleResponse);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: NewsArticlesResponse, _, lastPageParam) =>
      lastPage.articles.length > 0 ? lastPageParam + 1 : undefined,
  });

export default function LiveNews() {

    const [isLoading, setIsLoading] = useState(true);

    const {
        isHindiSelected,
        onLanguageCheckChanged,
    } = useFilter(false);

    const {
        data: newsArticlesData,
        fetchNextPage,
        isError,
        isFetching,
    } = useArticles(isHindiSelected ? Language.HINDI : Language.ENGLISH);
    

    useEffect(() => {
        if (!isFetching) {
            setIsLoading(false);
        }
    }, [isFetching]);
    

    const handleOnViewportEnter = (index: number, entry?: IntersectionObserverEntry | null) => {
        if (index === 18 || !entry?.isIntersecting) {
            console.log("fetching next page");
            fetchNextPage();
        }
    };



    if (isLoading) {
        return (
            <Loader  color='black'/>
        );
    }

  return (
    <main className=" padding-container max-container  ">

        <div className="block lg:hidden w-full">
          <div className="flex  w-full">
            
          </div>
            <div className="pt-10">
                <LanguageToggle 
                    checked={isHindiSelected} 
                    onCheckedChange={onLanguageCheckChanged}/>
            </div>
          <div className="h-[1px] w-full my-4" />
          <div className="flex flex-col gap-y-3 w-full">
            {newsArticlesData?.pages.map((page) =>
              page.articles.map((newsArticle, articleIndex) => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    onViewportEnter={() => handleOnViewportEnter(articleIndex)}
                    className="w-full"
                  >
                    <NewsCard
                    key={newsArticle._id}
                    image={newsArticle.thumbnail_url}
                    title={newsArticle.title}
                    description={newsArticle.body_short}
                    date={newsArticle.date}
                    articleUrl={newsArticle?.link}
                    publisher={newsArticle?.source?.source_id}
                />
                    </motion.div>
              ))
            )}
          </div>
        </div>

        <div className="hidden lg:block w-full">
          <div className="text-base leading-consistent font-bold text-white flex-col pt-10 w-full">

            <LanguageToggle 
                checked={isHindiSelected} 
                onCheckedChange={onLanguageCheckChanged} 
            />
          </div>

          <div className="h-[1px] w-full mt-7 mb-9" />

          <div className=" w-full">
            <div className="flex flex-col gap-y-7">
                {newsArticlesData?.pages.map((page) =>
                    page.articles.map((newsArticle, articleIndex) => (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            onViewportEnter={() => handleOnViewportEnter(articleIndex)}
                            className="w-full"
                        >
                            <NewsCard
                                key={newsArticle._id}
                                image={newsArticle.thumbnail_url}
                                title={newsArticle.title}
                                description={newsArticle.body_short}
                                date={newsArticle.date}
                        articleUrl={newsArticle?.link}
                                publisher={newsArticle?.source?.source_id}
                            />
                        </motion.div>
                    ))
                )}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="flex text-white pb-5 justify-center w-full">
                    {isError ? "Failed to load news" : <NewsLoader />}
                </motion.div>
            </div>

          </div>
        </div>
    </main>
  );
}

