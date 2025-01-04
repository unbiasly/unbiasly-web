import AppApi from "@/service/app.api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const data = await AppApi.getBlogPosts(parseInt(page, 10));
  return Response.json(data);
}
