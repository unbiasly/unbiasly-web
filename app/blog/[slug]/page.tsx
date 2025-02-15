import Image from "next/image"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { EllipsisVertical, Heart, Share } from "lucide-react"
import { notFound } from "next/navigation";
import AppApi from "@/service/app.api";
import ShareBlogPostIcon from "../../../components/custom/blogs/share-icon";

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

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    
    // Options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', // e.g., "Monday"
        year: 'numeric', // e.g., "2025"
        month: 'long', // e.g., "January"
        day: 'numeric', // e.g., "28"
    };

    const time: Intl.DateTimeFormatOptions = {
        hour: 'numeric', // e.g., "7"
        minute: 'numeric', // e.g., "07"
        second: 'numeric', // e.g., "48"
    };
    
    // Use toLocaleString to format the date
    if (dateString) {
        return date.toLocaleString('en-US', options);
    } else {
        return date.toLocaleString('en-US', time);
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
                        <ShareBlogPostIcon />
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
                    src={blogPost.thumbnail}
                    alt="Featured image"
                    fill
                    className="rounded-lg object-cover"
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

