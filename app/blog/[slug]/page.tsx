import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/src/shared/data/blog.data";
import BlogDetailContainer from "@/src/features/blog/BlogDetailContainer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            type: "article",
            title: post.title,
            description: post.excerpt,
            publishedTime: post.date,
            images: [post.image],
        },
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return <BlogDetailContainer post={post} />;
}