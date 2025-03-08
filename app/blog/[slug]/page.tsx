import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EllipsisVertical, Heart } from "lucide-react"
import { notFound } from "next/navigation";
import AppApi from "@/service/app.api";
import ShareBlogPost from "@/components/custom/blogs/ShareButton";
import { formatDate } from "@/lib/utils/formatDate";

const getBlogPost = async (id: string) => {
    try {
        const response = await AppApi.getBlogPost(id);
        return response;
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
  };

interface PageProps {
    params: {
        slug: string;
    };
    searchParams: {
        id: string
    }
}

export default async function BlogPost({ params, searchParams }: PageProps) {
    const blogPost = await getBlogPost(searchParams.id);

    if (!blogPost) {
        notFound();
    }

    const expectedSlug = blogPost.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

    if (params.slug !== expectedSlug) {
        notFound();
    }

    return (
        <article className="text-white padding-container max-w-4xl mx-auto px-4 py-16">
            {/* Title Section */}
            <div className="space-y-4 mb-8">
                <h1 className="text-4xl font-bold leading-tight">
                    {blogPost.title}
                </h1>
                <p className="text-lg text-muted-foreground">{blogPost.summary}</p>
            </div>

            {/* Author Info */}
            <div className="mb-8">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://gravatar.com/avatar/5323657fa12994e98edbf93bbe8fdb56?s=400&d=robohash&r=x"
                        alt={blogPost.author}
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] rounded-full"
                    />
                    <div>
                        <p className="font-medium underline">{blogPost.author}</p>
                        <div className="text-sm text-muted-foreground">
                            <span>{formatDate(blogPost.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-b border-white border-opacity-50 mb-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <span className="text-sm text-muted-foreground">95</span>
                        <ShareBlogPost />
                    </div>
                    <div>
                        <Button variant="ghost" size="icon">
                            <EllipsisVertical className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
                <Image
                    alt={`Blog post thumbnail for ${blogPost.title}`}
                    src={blogPost.thumbnail}
                    fill
                    className="rounded-lg object-cover"
                    quality={100}
                    priority={true}
                />
            </div>

            {/* Article Content */}
            <div className="prose prose-sm text-xl text-white max-w-none">
                <div dangerouslySetInnerHTML={{
                    __html: blogPost.content,
                }}/>
            </div>
        </article>
    )
}

