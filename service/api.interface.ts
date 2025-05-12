
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
  BENGALI = "bengali",
}

export interface NewsArticlesRequest {
  language: Language;
  category: Category[];
  monthYear?: string;
  page: number;
}

export interface NewsArticlesResponse {
  articles: Article[];
  
}

export interface SingleCategoryArticle extends Omit<Article, "category"> {
    category: Category; // Only one category instead of an array
  }
  
export interface SingleCategoryNewsArticlesResponse {
articles: SingleCategoryArticle[];
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

export interface JobAppplicationRequest {
    full_name: string;
    contact_information: {
        email: string;
        phone: string;
        address: string;
    };
    education: Array<{
        degree: string;
        institution: string;
        dates: string;
    }>;
    job_titles: string[];
    company_names: string[];
    key_skills: string[];
    major_achievements?: string[];
    employment: Array<{
        position: string;
        company_name: string;
        date: string;
    }>;
    relevant_certifications: string[];
}


export interface JobApplicationResponse {
    message: string;
    }

export interface Department {
  _id: string;
  name: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface DepartmentResponse {
  data: Department[];
}

export interface JobDescription {
  title: string;
  company: string;
  location: string;
  description: string;
  experience_level: string;
  skills: string[];
}

export interface Job {
  _id: string;
  job_id: string;
  department: string;
  description: JobDescription;
  is_expired: boolean;
  job_name: string;
  job_type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type JobsByDepartmentResponse = Job[];
