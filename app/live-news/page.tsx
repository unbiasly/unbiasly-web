"use client";
import { Language, NewsArticlesResponse } from "@/service/api.interface";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useFilter } from "./hooks/useFilter";
import { handleResponse } from "@/service/fetchClient";
import LanguageToggle from "@/components/custom/language-toggle/LanguageToggle";
import Loader from "@/components/custom/Loader";
import NewsLoader from "@/components/custom/news/NewsLoader";
import { NewsCard } from "@/components/custom/news/NewsCard";
import { useCallback, useEffect, useMemo, useState } from "react";

// Custom hook for prefetching both language news
const usePrefetchNews = () => {
    const queryClient = useQueryClient();
    
    useEffect(() => {
      // Prefetch English news
      queryClient.prefetchInfiniteQuery({
        queryKey: ["articles", Language.ENGLISH],
        queryFn: () => {
          return fetch("/live-news/api", {
            method: "POST",
            body: JSON.stringify({ language: Language.ENGLISH, page: 1 }),
          }).then<NewsArticlesResponse>(handleResponse);
        },
        initialPageParam: 1,
      });
      
      // Prefetch Hindi news
      queryClient.prefetchInfiniteQuery({
        queryKey: ["articles", Language.HINDI],
        queryFn: () => {
          return fetch("/live-news/api", {
            method: "POST",
            body: JSON.stringify({ language: Language.HINDI, page: 1 }),
          }).then<NewsArticlesResponse>(handleResponse);
        },
        initialPageParam: 1,
      });
    }, [queryClient]);
};

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
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,  
  });

export default function LiveNews() {
    usePrefetchNews();

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
    
    const articles = useMemo(() => {
        if (!newsArticlesData) return [];
        return newsArticlesData.pages.flatMap(page => page.articles);
    }, [newsArticlesData]);

    useEffect(() => {
        if (!isFetching) {
            setIsLoading(false);
        }
    }, [isFetching]);
    
    const handleOnViewportEnter = useCallback((index: number, entry?: IntersectionObserverEntry | null) => {
        if (index === 18 || entry?.isIntersecting) {
            console.log("fetching next page");
            fetchNextPage();
        }
    }, [fetchNextPage]);

    // Memoize the card rendering function - MOVED HERE BEFORE ANY CONDITIONALS
    const renderNewsCards = useMemo(() => {
        return newsArticlesData?.pages.map((page, pageIndex) =>
          page.articles.map((newsArticle, articleIndex) => (
            <motion.div
              key={`${pageIndex}-${articleIndex}`}
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
                isHindiSelected={isHindiSelected}
              />
            </motion.div>
          ))
        );
    }, [newsArticlesData, isHindiSelected, handleOnViewportEnter]);

    if (isLoading) {
        return (
            <Loader color='black'/>
        );
    }

    return (
        <main className="padding-container max-container">
            <div className="block lg:hidden w-full">
                <div className="pt-10">
                    <LanguageToggle 
                        checked={isHindiSelected} 
                        onCheckedChange={onLanguageCheckChanged}/>
                </div>
                <div className="h-[1px] w-full my-4" />
                <div className="flex flex-col gap-y-3 w-full">
                    {renderNewsCards}
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
                <div className="w-full">
                    <div className="flex flex-col gap-y-7">
                        {renderNewsCards}
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

