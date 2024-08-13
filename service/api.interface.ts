export interface BlogPostResponse {
  data: BlogPost[];
  meta: Meta;
}

export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  summary: string;
  thumbnail: string;
  author: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Meta {
  totalBlogs: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export enum Language {
  ENGLISH = "english",
  HINDI = "hindi",
}

export interface NewsArticlesRequest {
  language: Language;
  monthYear?: string;
  page: number;
}

export interface NewsArticlesResponse {
  articles: Article[];
}

export interface Article {
  bookmarks: number;
  dislikes: number;
  likes: number;
  share: number;
  views: number;
  _id: string;
  article_id: string;
  title: string;
  body: string;
  body_short: string;
  thumbnail_url: string;
  thumbnail_type: string;
  link: string;
  date: string;
  language: string;
  category: Category[];
  tags: any[];
  source: Source;
  is_deleted: boolean;
  status: string;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  sources: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Source {
  _id: string;
  source_id: string;
  source_url: string;
  source_icon: any;
  source_priority: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface NewsletterSubscribeResponse {
  message: string;
}
