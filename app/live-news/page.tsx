"use client";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { Language, NewsArticlesResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";
import LanguageToggle from "@/components/custom/language-toggle/LanguageToggle";
import Loader from "@/components/custom/Loader";
import NewsLoader from "@/components/custom/news/NewsLoader";
import { NewsCard } from "@/components/custom/news/NewsCard";
import { useFilter } from "./hooks/useFilter";

// Custom hook for prefetching both language news
const usePrefetchNews = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    queryClient.prefetchInfiniteQuery({
      queryKey: ["articles", Language.ENGLISH],
      queryFn: () =>
        fetch("/live-news/api", {
          method: "POST",
          body: JSON.stringify({ language: Language.ENGLISH, page: 1 }),
        }).then<NewsArticlesResponse>(handleResponse),
      initialPageParam: 1,
    });

    queryClient.prefetchInfiniteQuery({
      queryKey: ["articles", Language.HINDI],
      queryFn: () =>
        fetch("/live-news/api", {
          method: "POST",
          body: JSON.stringify({ language: Language.HINDI, page: 1 }),
        }).then<NewsArticlesResponse>(handleResponse),
      initialPageParam: 1,
    });
  }, [queryClient]);
};

const useArticles = (language: Language) =>
  useInfiniteQuery({
    queryKey: ["articles", language],
    queryFn: ({ pageParam }) =>
      fetch("/live-news/api", {
        method: "POST",
        body: JSON.stringify({ language, page: pageParam }),
      }).then<NewsArticlesResponse>(handleResponse),
    initialPageParam: 1,
    getNextPageParam: (lastPage: NewsArticlesResponse, _, lastPageParam) =>
      lastPage.articles.length > 0 ? lastPageParam + 1 : undefined,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

export default function LiveNews() {
  usePrefetchNews();
  const [isLoading, setIsLoading] = useState(true);
  const { isHindiSelected, onLanguageCheckChanged } = useFilter(false);
  const {
    data: newsArticlesData,
    fetchNextPage,
    isError,
    isFetching,
    hasNextPage,
  } = useArticles(isHindiSelected ? Language.HINDI : Language.ENGLISH);

  const lastScrollY = useRef(0); 
  const fetchedPages = useRef(new Set<number>()); 
  const sentinelRef = useRef<HTMLDivElement>(null); 

  const articles = useMemo(() => {
    if (!newsArticlesData) return [];
    return newsArticlesData.pages.flatMap((page) => page.articles);
  }, [newsArticlesData]);

  useEffect(() => {
    if (!isFetching) {
      setIsLoading(false);
    }
  }, [isFetching]);

  useEffect(() => {
    fetchedPages.current.clear();
  }, [isHindiSelected]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasNextPage && !isFetching) {
          const nextPage = (newsArticlesData?.pages.length || 0) + 1;
          if (!fetchedPages.current.has(nextPage)) {
            console.log(`Sentinel triggered: Fetching page ${nextPage}`);
            fetchedPages.current.add(nextPage);
            fetchNextPage();
          }
        }
      },
      { threshold: 0.1 } 
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetching, newsArticlesData]);

  const handleOnViewportEnter = useCallback(
    (index: number, pageIndex: number) => {
      if (index !== 18 || !hasNextPage || isFetching) return;

      // Check scroll direction
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Check if the next page has already been fetched
      const nextPage = pageIndex + 2; // pageIndex is 0-based, pages are 1-based
      if (isScrollingDown && !fetchedPages.current.has(nextPage)) {
        console.log(`Viewport triggered: Fetching page ${nextPage}`);
        fetchedPages.current.add(nextPage);
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetching]
  );

  const renderNewsCards = useMemo(() => {
    return newsArticlesData?.pages.map((page, pageIndex) =>
      page.articles.map((newsArticle, articleIndex) => (
        <motion.div
          key={`${pageIndex}-${articleIndex}`}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => handleOnViewportEnter(articleIndex, pageIndex)}
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
    return <Loader color="black" />;
  }

  return (
    <main className="padding-container max-container">
      <div className="block lg:hidden w-full">
        <div className="pt-10">
          <LanguageToggle
            checked={isHindiSelected}
            onCheckedChange={onLanguageCheckChanged}
          />
        </div>
        <div className="h-[1px] w-full my-4" />
        <div className="flex flex-col gap-y-3 w-full">
          {renderNewsCards}
          <div ref={sentinelRef} className="h-10" /> 
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
            <div ref={sentinelRef} className="h-10" /> 
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="flex text-white pb-5 justify-center w-full"
            >
              {isError ? "Failed to load news" : <NewsLoader />}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}