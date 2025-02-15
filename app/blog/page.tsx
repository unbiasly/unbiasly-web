
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
        return fetch(`/blog/api?page=${pageParam}`).then<BlogPostResponse>(handleResponse);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: BlogPostResponse) =>
      lastPage.meta.hasNextPage ? lastPage.meta.currentPage + 1 : undefined,
  });

  

    return (
        <main className="padding-container p-10 max-container ">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <BlogPosts />
            </HydrationBoundary>
        </main>
    );
}
