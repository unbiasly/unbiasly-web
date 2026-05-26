"use client";
import AppStores from "@/components/custom/app-stores";
import { Switch } from "@/components/ui/switch";
import { cn, timeElapsed } from "@/lib/utils";
import { Language, NewsArticlesResponse } from "@/service/api.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { dateFiltersData, useFilter } from "./hooks";
import MobileFilter from "./mobile-filter";
import Image from "next/image";
import { handleResponse } from "@/service/fetchClient";
import Link from "next/link";

type NewsCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  publisher: string;
  publisherUrl: string;
  index: number;
};

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  date,
  image,
  publisher,
  publisherUrl,
  index,
}) => {
  return (
    <Link
      href={publisherUrl}
      target="_blank"
      rel="noreferrer"
      className="group block border-b border-rule pb-8 lg:pb-10 last:border-b-0"
    >
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted">
          № {String(index + 1).padStart(3, "0")}
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
          {timeElapsed(date)}
        </span>
        {publisher && (
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted truncate">
            · {publisher}
          </span>
        )}
      </div>
      <div className="grid lg:grid-cols-12 gap-5 lg:gap-8">
        {image && image.startsWith("http") && (
          <div className="lg:col-span-4 relative w-full aspect-[16/10] lg:aspect-[4/3] bg-rule-soft overflow-hidden">
            <Image
              alt={title}
              src={image}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
              quality={100}
              unoptimized
            />
          </div>
        )}
        <div className={cn("flex flex-col justify-between", image && image.startsWith("http") ? "lg:col-span-8" : "lg:col-span-12")}>
          <div>
            <h3 className="font-display text-2xl md:text-3xl lg:text-[34px] font-medium leading-[1.1] tracking-tight text-balance group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="mt-3 lg:mt-4 text-[15px] lg:text-[16px] leading-[1.55] text-ink-soft text-pretty max-w-[68ch]">
              {description}
            </p>
          </div>
          <div className="mt-5 flex items-center gap-2 text-[12px] font-mono tracking-wider uppercase text-ink-muted group-hover:text-accent transition-colors">
            <span>Read at {publisher ? publisher.charAt(0).toUpperCase() + publisher.slice(1) : "source"}</span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </div>
        </div>
      </div>
    </Link>
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
  const { isHindiSelected, selectedMonth, onLanguageCheckChanged, onChangeSelectedMonth } =
    useFilter(false, dateFiltersData[0]);

  const { data: newsArticlesData, fetchNextPage, isError, isLoading } = useArticles(
    isHindiSelected ? Language.HINDI : Language.ENGLISH
  );

  const handleOnViewportEnter = (entry: IntersectionObserverEntry | null) => {
    if (!entry?.isIntersecting) return;
    fetchNextPage();
  };

  const handleOnApplyFilter = (isHindi: boolean, month: typeof selectedMonth) => {
    onLanguageCheckChanged(isHindi);
    onChangeSelectedMonth(month);
  };

  const totalArticles =
    newsArticlesData?.pages.reduce((acc, p) => acc + p.articles.length, 0) ?? 0;

  let runningIndex = 0;

  return (
    <>
      {/* Masthead */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-10 lg:pt-16 pb-10 lg:pb-12">
          <div className="flex items-center justify-between mb-6 font-mono text-[10px] tracking-[0.25em] uppercase text-ink-muted">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Live · Continuously updated</span>
            </div>
            <span className="hidden md:block">{isHindiSelected ? "हिंदी" : "English"} Edition</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-4">The Live Feed</div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.88] tracking-tightest">
                Live News
              </h1>
              <p className="mt-5 text-[15px] lg:text-[17px] leading-relaxed text-ink-muted max-w-2xl">
                Every story verified, summarised, and source-attributed. Switch
                between English and Hindi, and scroll for more.
              </p>
            </div>

            {/* Desktop language toggle */}
            <div className="hidden lg:flex lg:col-span-4 lg:justify-end items-center gap-4 pb-3">
              <span
                className={cn(
                  "font-mono text-[11px] tracking-[0.2em] uppercase transition-colors",
                  !isHindiSelected ? "text-ink" : "text-ink-muted"
                )}
              >
                English
              </span>
              <Switch
                checked={isHindiSelected}
                onCheckedChange={onLanguageCheckChanged}
              />
              <span
                className={cn(
                  "font-mono text-[11px] tracking-[0.2em] uppercase transition-colors",
                  isHindiSelected ? "text-ink" : "text-ink-muted"
                )}
              >
                Hindi
              </span>
            </div>

            {/* Mobile filter */}
            <div className="lg:hidden">
              <MobileFilter
                isHindiSelectedInitial={isHindiSelected}
                selectedMonthInitial={selectedMonth}
                onApplyFilter={handleOnApplyFilter}
              />
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 pt-6 border-t border-rule grid grid-cols-3 gap-4 text-[12px]">
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-ink-muted">Loaded</div>
              <div className="font-display text-2xl font-light mt-1">{totalArticles}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-ink-muted">Language</div>
              <div className="font-display text-2xl font-light mt-1">{isHindiSelected ? "HI" : "EN"}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-ink-muted">Source</div>
              <div className="font-display text-2xl font-light mt-1">Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feed */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-12 lg:py-20">
          {isLoading && (
            <div className="py-32 flex items-center justify-center">
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-muted animate-pulse">
                Loading the feed…
              </div>
            </div>
          )}

          {isError && (
            <div className="py-20 text-center">
              <div className="font-display text-2xl text-ink-muted">
                Couldn&apos;t load the feed. Please try again.
              </div>
            </div>
          )}

          <div className="flex flex-col gap-8 lg:gap-12">
            {newsArticlesData?.pages.map((page) =>
              page.articles.map((article) => {
                const card = (
                  <NewsCard
                    key={article._id}
                    image={article.thumbnail_url}
                    title={article.title}
                    description={article.body_short}
                    date={article.date}
                    publisher={article?.source?.source_id}
                    publisherUrl={article?.link}
                    index={runningIndex}
                  />
                );
                runningIndex++;
                return card;
              })
            )}
            <motion.div
              initial="hidden"
              whileInView="visible"
              onViewportEnter={handleOnViewportEnter}
              className="flex justify-center py-6"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-muted">
                {isError ? "Failed to load more" : totalArticles > 0 ? "Loading more…" : ""}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <AppStores />
    </>
  );
}
