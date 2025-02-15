import { NextResponse } from "next/server";
import AppApi from "@/service/app.api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 4; // Default to 4 for first page

  try {
    const response = await AppApi.getBlogPosts(page, limit.toString());
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
