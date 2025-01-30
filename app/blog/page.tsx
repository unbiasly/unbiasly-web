import AppStoresV2 from "@/components/custom/AppStoreV2";
import ContentContainer from "@/components/custom/content-container";
import HighlightContent from "@/components/custom/highlight-content";
import PageTitle from "@/components/custom/page-title";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BlogPosts from "./blog-posts";
import { BlogPostResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";
import { APP_CONSTANTS } from "@/lib/constants/constants";
import AppStores from "@/components/custom/app-stores";





export default async function Blog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["blogPosts"],
    queryFn: ({ pageParam }) => {
        return fetch(`/blog/api?page=${pageParam}`).then<BlogPostResponse>(handleResponse);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: BlogPostResponse) =>
      lastPage.meta.hasNextPage ? lastPage.meta.currentPage + 1 : undefined,
  });

  
  return (
    <div className="w-full h-screen bg-black">
        <main className="padding-container max-container pt-[58px] md:pt-[120px] pb-6 lg:pb-12">
            <ContentContainer>
                <PageTitle>Blog</PageTitle>
                <p className="mt-6 text-white leading-consistent">
                    {APP_CONSTANTS.BLOG_DESCRIPTION}
                </p>
            </ContentContainer>
            <HighlightContent>
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <BlogPosts />
                    
                </HydrationBoundary>
            </HighlightContent>
            <div className="p-40 ">
                <AppStores />
            </div>
        </main>
    </div>
  );
}
