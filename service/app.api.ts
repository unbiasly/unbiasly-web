import {
  BlogPost,
  BlogPostResponse,
  NewsArticlesRequest,
  NewsArticlesResponse,
  NewsletterSubscribeResponse,
} from "./api.interface";
import fetchClient from "./fetchClient";

const baseURL = `${process.env.NEXT_PUBLIC_UNBIASLY_BASE_API_URL}`;

const AppApi = {
  getArticles: (body: NewsArticlesRequest) =>
    fetchClient.post<NewsArticlesResponse>(`${baseURL}/v1/getArticles`, body),
  getBlogPosts: (page: number, limit = "10") =>
    fetchClient.get<BlogPostResponse>(
      `${baseURL}/blogs?` +
        new URLSearchParams({ page: page.toString(), limit }).toString()
    ),
  subscribeToNewsletter: (email: string) =>
    fetchClient.post<NewsletterSubscribeResponse>(`${baseURL}/v1/subscribe`, {
      email,
    }),
  getBlogPost: (id: string) =>
    fetchClient.get<BlogPost>(`${baseURL}/blog/${id}`),
};

export default AppApi;
