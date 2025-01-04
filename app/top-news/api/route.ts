import { NewsArticlesRequest, Article, Category } from "@/service/api.interface";
import AppApi from "@/service/app.api";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsArticlesRequest;
    // Use the ID you see logged in console
    const targetCategoryId = "65eed5682132b2a8ff4a79b4";

    const data = await AppApi.getArticles(body);

    // Filter articles based on the category ID
    const filteredArticles = data.articles?.filter((article: Article) =>
      Array.isArray(article.category) &&
      article.category.some((cat: Category) => cat._id === targetCategoryId)
    );

    return Response.json({
      pages: [
        {
          articles: filteredArticles || [],
        },
      ],
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return new Response("An error occurred", { status: 500 });
  }
}