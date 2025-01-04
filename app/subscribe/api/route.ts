import { NewsArticlesRequest } from "@/service/api.interface";
import AppApi from "@/service/app.api";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email: string;
  };
  const data = await AppApi.subscribeToNewsletter(body.email);
  return Response.json(data);
}
