import AppStores from "@/components/custom/app-stores";
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

export default async function Blog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["blogPosts"],
    queryFn: ({ pageParam }) => {
      return fetch(`/blog/api?page=${pageParam}`).then<BlogPostResponse>(
        handleResponse
      );
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: BlogPostResponse) =>
      lastPage.meta.hasNextPage ? lastPage.meta.currentPage + 1 : undefined,
  });
  return (
    <main className="mt-[58px] md:mt-[120px] mb-6 lg:mb-12">
      <ContentContainer>
        <PageTitle>Blog</PageTitle>
        <p className="mt-6 text-black leading-consistent">
          Dive into a wealth of knowledge and insights with our curated blogs.
          From industry trends to expert opinions, our articles cover a wide
          range of topics to keep you informed and inspired. Join the
          conversation and stay updated with our latest posts.
        </p>
      </ContentContainer>
      <HighlightContent>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <BlogPosts />
        </HydrationBoundary>
      </HighlightContent>
      <div className="mt-6 lg:mt-12">
        <AppStores />
      </div>
    </main>
  );
}
