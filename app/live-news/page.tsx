"use client";
import ContentContainer from "@/components/custom/content-container";
import { Language, NewsArticlesResponse } from "@/service/api.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useFilter } from "./hooks";
import { handleResponse } from "@/service/fetchClient";
import LanguageToggle from "@/components/custom/language-toggle/LanguageToggle";
import Loader from "@/components/custom/Loader";
import NewsLoader from "@/components/custom/NewsLoader";
import { NewsCard } from "@/components/custom/NewsCard";
import { useEffect, useState } from "react";


// type DateFiltersProps = {
//   filters: Array<DateFilter>;
//   selected: DateFilter;
//   onSelectFilter: (filter: DateFilter) => void;
// };

// const DateFilters: React.FC<DateFiltersProps> = ({
//   filters,
//   selected,
//   onSelectFilter,
// }) => {
//   return (
//     <div className="flex flex-col gap-y-4 text-gray-29 leading-consistent">
//       {filters.map((filter) => (
//         <div
//           key={filter.label}
//           className={cn(
//             "cursor-pointer",
//             selected.label === filter.label
//               ? "text-xl leading-consistent text-black font-bold"
//               : ""
//           )}
//           onClick={() => onSelectFilter(filter)}
//         >
//           {filter.label}
//         </div>
//       ))}
//     </div>
//   );
// };

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

    const [isLoading, setIsLoading] = useState(true);

    

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
    onLanguageCheckChanged,
  } = useFilter(false);

    const {
        data: newsArticlesData,
        fetchNextPage,
        isError,
        isFetching,
        isFetchingNextPage,
    } = useArticles(isHindiSelected ? Language.HINDI : Language.ENGLISH);
    

    // const observerRef = useRef<IntersectionObserver | null>(null);
    // const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isFetching) {
            setIsLoading(false);
        }
    }, [isFetching]);
    

  const handleOnViewportEnter = (entry: IntersectionObserverEntry | null) => {
    if (!entry?.isIntersecting) return <NewsLoader />;
    fetchNextPage();
  };

  if (isLoading) {
    return (
        <Loader  color='black'/>
    );
  }

  return (
    <div className="w-full bg-black">
    <main className="w-full bg-black padding-container max-container  ">
      <ContentContainer className="w-full">

        <div className="block lg:hidden w-full">
          <div className="flex  w-full">
            {/* <PageTitle className="mt-5 mb-2">Live News</PageTitle> */}
            
          </div>
            <div className="pt-10">
                <LanguageToggle 
                    checked={isHindiSelected} 
                    onCheckedChange={onLanguageCheckChanged}/>
            </div>
          <div className="h-[1px] w-full my-4" />
          <div className="flex flex-col gap-y-3 w-full">
            {newsArticlesData?.pages.map((page) =>
              page.articles.map((newsArticle) => (
                <NewsCard
                    key={newsArticle._id}
                    image={newsArticle.thumbnail_url}
                    title={newsArticle.title}
                    description={newsArticle.body_short}
                    date={newsArticle.date}
                    articleUrl={newsArticle?.link}
                    publisher={newsArticle?.source?.source_id}
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
          <div className="text-base leading-consistent font-bold text-white flex-col pt-10 w-full">
            {/* <PageTitle className="mt-5 mb-5">Live News</PageTitle> */}

            <LanguageToggle 
                checked={isHindiSelected} 
                onCheckedChange={onLanguageCheckChanged} 
            />
          </div>

          <div className="h-[1px] w-full mt-7 mb-9" />

          <div className=" w-full">
            <div className="flex flex-col gap-y-7">
                {newsArticlesData?.pages.map((page) =>
                    page.articles.map((newsArticle) => (
                    <NewsCard
                        key={newsArticle._id}
                        image={newsArticle.thumbnail_url}
                        title={newsArticle.title}
                        description={newsArticle.body_short}
                        date={newsArticle.date}
                        articleUrl={newsArticle?.link}
                        publisher={newsArticle?.source?.source_id}
                    />
                    ))
                )}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    onViewportEnter={handleOnViewportEnter}
                    className="flex text-white pb-5 justify-center w-full">
                    {isError ? "Failed to load news" : <NewsLoader />}
                </motion.div>
            </div>

          </div>
        </div>
      </ContentContainer>
      {/* <div className="mt-6 lg:mt-12 bg-black pt-6 lg:p-12 w-full">
        <AppStoresV2 />
      </div> */}
    </main>
    </div>
  );
}

