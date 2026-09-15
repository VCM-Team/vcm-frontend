import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import type { BlogPost } from "@/src/shared/data/blog.data";

export default function BlogDetailContainer({ post }: { post: BlogPost }) {
    return (
        <article className="pt-header-sm lg:pt-header">
            <header className="bg-surface pb-16 pt-12 lg:pb-24 lg:pt-16">
                <Container className="max-w-4xl text-center">
                    <h1 className="text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl">
                        {post.title}
                    </h1>
                    <time
                        dateTime={post.date}
                        className="mt-5 block text-xs font-medium uppercase tracking-[0.1em] text-accent"
                    >
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </Container>
            </header>

            <Container className="max-w-5xl">
                <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded-card lg:-mt-14">
                    <Image
                        src={post.image}
                        alt=""
                        fill
                        priority
                        sizes="(min-width: 1024px) 64rem, 100vw"
                        className="object-cover"
                    />
                </div>
            </Container>

            <Container className="max-w-3xl py-14 lg:py-20">
                <div
                    className="prose prose-slate max-w-none
            prose-headings:font-semibold prose-headings:text-fg
            prose-h2:mt-10 prose-h2:text-xl lg:prose-h2:text-2xl
            prose-p:text-fg-muted prose-p:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-fg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </Container>
        </article>
    );
}