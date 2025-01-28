"use client";
import AppStoresV2 from "@/components/custom/AppStoreV2";
import ContentContainer from "@/components/custom/content-container";
import { cn, timeElapsed } from "@/lib/utils";
import { Category, Language, NewsArticlesResponse } from "@/service/api.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import PageTitle from "@/components/custom/page-title";
import { DateFilter, dateFiltersData, useFilter } from "./hooks";
import MobileFilter from "./mobile-filter";
import Image from "next/image";
import { handleResponse } from "@/service/fetchClient";
import { useEffect } from "react";
import LanguageToggle from "@/components/custom/language-toggle/LanguageToggle";

type NewsCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  
};

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  date,
  image,
}) => {
  return (
    <div className="w-full bg-[#1e1e1e] md:flex flex-row justify-between rounded-2xl">
      
      <div className="max-md:mt-4  md:ml-6 text-gray-400  flex flex-col justify-center">
        <div>
          <div className="text-xs leading-consistent md:text-3xl md:leading-consistent text-white font-bold">
            {title}
          </div>
          {/* <div className="mt-1 md:mt-2 text-xs leading-consistent lg:text-base lg:leading-consistent break-all">
            {description}
          </div> */}
        </div>
        <div className="max-md:mt-3 mt-4 text-md leading-consistent lg:text-md lg:leading-consistent">
          {timeElapsed(date)}
        </div>
      </div>
      {image && image.startsWith("http") && (
        <div className="w-full md:max-w-[188px]  h-[180px] md:h-[125px] bg-[#1e1e1e] rounded-xl relative">
          <Image
            alt={`News article thumbnail for ${title}`}
            src={image}
            fill
            sizes="(min-width: 768px) w-full, h-full max-w-[188px]"
            className="rounded-xl"
            quality={100}
            unoptimized
          />
        </div>
      )}
    </div>
  );
};

type DateFiltersProps = {
  filters: Array<DateFilter>;
  selected: DateFilter;
  onSelectFilter: (filter: DateFilter) => void;
};

const DateFilters: React.FC<DateFiltersProps> = ({
  filters,
  selected,
  onSelectFilter,
}) => {
  return (
    <div className="flex flex-col gap-y-4 text-gray-29 leading-consistent">
      {filters.map((filter) => (
        <div
          key={filter.label}
          className={cn(
            "cursor-pointer",
            selected.label === filter.label
              ? "text-xl leading-consistent text-black font-bold"
              : ""
          )}
          onClick={() => onSelectFilter(filter)}
        >
          {filter.label}
        </div>
      ))}
    </div>
  );
};

const useArticles = (language: Language, monthYear?: string) =>
  useInfiniteQuery({
    queryKey: ["articles", language, monthYear],
    queryFn: ({ pageParam }) => {
      return fetch("/live-news/api", {
        method: "POST",
        body: JSON.stringify({ language, page: pageParam, monthYear }),
      }).then<NewsArticlesResponse>(handleResponse);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: NewsArticlesResponse, _, lastPageParam) =>
      lastPage.articles.length > 0 ? lastPageParam + 1 : undefined,
  });

export default function LiveNews() {

    // useEffect(() => {
    //     // This variable will store our animation frame ID for cleanup
    //     let animationFrameId: number;
        
    //     // This function handles the scrolling animation
    //     function autoScroll() {
    //         // Get our current position on the page
    //         const currentPosition = window.pageYOffset;
            
    //         // Calculate how far we can scroll (total page height minus viewport height)
    //         const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            
    //         // If we haven't reached the bottom, keep scrolling
    //         if (currentPosition < maxScroll) {
    //             // Move down by 1 pixel for smooth scrolling
    //             window.scrollTo(0, currentPosition + 1);
    //         }
            
    //         // Request the next animation frame
    //         animationFrameId = requestAnimationFrame(autoScroll);
    //     }

    //     // Start the scrolling animation
    //     animationFrameId = requestAnimationFrame(autoScroll);

    //     // Clean up the animation when the component unmounts
    //     return () => {
    //         if (animationFrameId) {
    //             cancelAnimationFrame(animationFrameId);
    //         }
    //     };
    // }, []); 

  const {
    isHindiSelected,
    selectedMonth,
    onLanguageCheckChanged,
    onChangeSelectedMonth,
  } = useFilter(false, dateFiltersData[0]);

  const {
    data: newsArticlesData,
    fetchNextPage,
    isError,
  } = useArticles(isHindiSelected ? Language.HINDI : Language.ENGLISH);
  const handleOnViewportEnter = (entry: IntersectionObserverEntry | null) => {
    if (!entry?.isIntersecting) return;
    fetchNextPage();
  };

  const handleOnApplyFilter = (
    isHindiSelectedFilter: boolean,
    selectedMonthFilter: DateFilter
  ) => {
    onLanguageCheckChanged(isHindiSelectedFilter);
    onChangeSelectedMonth(selectedMonthFilter);
  };
  return (
    <main className="w-full padding-container max-container mt-10 md:mt-[72px] mb-6 lg:mb-12">
      <ContentContainer className="w-full">

        <div className="block lg:hidden w-full">
          <div className="flex justify-between w-full">
            <PageTitle className="mt-5 mb-2">Live News</PageTitle>
            <MobileFilter
              isHindiSelectedInitial={isHindiSelected}
              selectedMonthInitial={selectedMonth}
              onApplyFilter={handleOnApplyFilter}
            />
          </div>

          <div className="flex flex-col gap-y-7 w-full">
            {newsArticlesData?.pages.map((page) =>
              page.articles.map((newsArticle) => (
                <NewsCard
                    key={newsArticle._id}
                    image={newsArticle.thumbnail_url}
                    title={newsArticle.title}
                    description={newsArticle.body_short}
                    date={newsArticle.date}
                />
              ))
            )}
            <motion.div
              initial="hidden"
              whileInView="visible"
              onViewportEnter={handleOnViewportEnter}
              className="w-full"
            />
          </div>
        </div>

        <div className="hidden lg:block w-full">
          <div className="text-base leading-consistent font-bold text-white flex gap-x-6 pt-10 w-full">
            <LanguageToggle 
                checked={isHindiSelected} 
                onCheckedChange={onLanguageCheckChanged} 
            />
          </div>

          <div className="h-[1px] w-full mt-7 mb-9" />

          <div className=" w-full">
            <div className="flex flex-col gap-y-7 w-full">
                {newsArticlesData?.pages.map((page) =>
                    page.articles.map((newsArticle) => (
                    <NewsCard
                        key={newsArticle._id}
                        image={newsArticle.thumbnail_url}
                        title={newsArticle.title}
                        description={newsArticle.body_short}
                        date={newsArticle.date}
                    />
                    ))
                )}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    onViewportEnter={handleOnViewportEnter}
                    className="flex text-white justify-center w-full">
                    {isError ? "Failed to load news" : "Loading..."}
                </motion.div>
            </div>

          </div>
        </div>
      </ContentContainer>
      <div className="mt-6 lg:mt-12 bg-black pt-6 lg:pt-12 w-full">
        <AppStoresV2 />
      </div>
    </main>
  );
}
