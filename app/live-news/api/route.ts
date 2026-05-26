import { NewsArticlesRequest } from "@/service/api.interface";
import AppApi from "@/service/app.api";

export async function POST(request: Request) {
  const body = (await request.json()) as NewsArticlesRequest;
  const data = await AppApi.getArticles(body);
  console.log(data);
  return Response.json(data);
}
