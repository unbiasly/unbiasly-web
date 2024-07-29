"use client";
import AppStores from "@/components/custom/app-stores";
import ContentContainer from "@/components/custom/content-container";
import { Switch } from "@/components/ui/switch";
import { cn, timeElapsed } from "@/lib/utils";
import { Language, NewsArticlesResponse } from "@/service/api.interface";
import AppApi from "@/service/app.api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import PageTitle from "@/components/custom/page-title";
import { DateFilter, dateFiltersData, useFilter } from "./hooks";
import MobileFilter from "./mobile-filter";
import Image from "next/image";

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
    <div className="bg-white p-4 md:p-5 md:flex rounded-2xl">
      {image && image.startsWith("http") && (
        <div className="w-full md:max-w-[188px] h-[180px] md:h-[125px] bg-[#D9D9D9] rounded-xl relative">
          <Image
            alt={`News article thumbnail for ${title}`}
            src={image}
            fill
            sizes="(min-width: 768px) w-full, max-w-[188px]"
            className="rounded-xl"
            quality={100}
          />
        </div>
      )}
      <div className="max-md:mt-4 md:ml-6 text-[#8A8A8A] flex flex-col justify-between">
        <div>
          <div className="text-xs leading-consistent md:text-2xl md:leading-consistent text-gray-29 font-bold">
            {title}
          </div>
          <div className="mt-1 md:mt-2 text-xs leading-consistent lg:text-base lg:leading-consistent break-all">
            {description}
          </div>
        </div>
        <div className="max-md:mt-3 mt-4 text-xs leading-consistent lg:text-base lg:leading-consistent">
          {timeElapsed(date)}
        </div>
      </div>
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
    queryFn: ({ pageParam }) =>
      AppApi.getArticles({
        page: pageParam,
        language,
        monthYear,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: NewsArticlesResponse, _, lastPageParam) =>
      lastPage.articles.length > 0 ? lastPageParam + 1 : undefined,
  });

export default function LiveNews() {
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
    <main className="bg-[#f1f1f1] mt-10 md:mt-[72px] mb-6 lg:mb-12">
      <ContentContainer>
        <div className="block lg:hidden">
          <div className="flex justify-between">
            <PageTitle className="mt-5 mb-2">Live News</PageTitle>
            <MobileFilter
              isHindiSelectedInitial={isHindiSelected}
              selectedMonthInitial={selectedMonth}
              onApplyFilter={handleOnApplyFilter}
            />
          </div>

          <div className="flex flex-col gap-y-7">
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
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="text-base leading-consistent font-bold text-gray-29 flex gap-x-6 pt-10">
            <div>English</div>
            <Switch
              checked={isHindiSelected}
              onCheckedChange={onLanguageCheckChanged}
            />
            <div>Hindi</div>
          </div>

          <div className="h-[1px] bg-[#666666] w-full mt-7 mb-9" />

          <div className="grid grid-cols-[auto_1fr]">
            {/* <div>
              <DateFilters
                filters={dateFiltersData}
                selected={selectedMonth}
                onSelectFilter={(filter) => onChangeSelectedMonth(filter)}
              />
            </div> */}
            <div className="flex flex-col gap-y-7">
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
                className="flex justify-center"
              >
                {isError ? "Failed to load news" : "Loading..."}
              </motion.div>
            </div>
          </div>
        </div>
      </ContentContainer>
      <div className="mt-6 lg:mt-12 bg-white pt-6 lg:pt-12">
        <AppStores />
      </div>
    </main>
  );
}
