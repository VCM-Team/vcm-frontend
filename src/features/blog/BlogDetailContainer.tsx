import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import type { BlogPost } from "@/src/shared/data/blog.data";

// Estilos del HTML del post, sin depender de @tailwindcss/typography
const ARTICLE_BODY = [
    "text-[15px] leading-relaxed text-fg-muted",
    "[&>*:first-child]:mt-0",
    // títulos
    "[&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-fg lg:[&_h2]:text-4xl",
    "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-snug [&_h3]:text-fg lg:[&_h3]:text-2xl",
    // párrafos
    "[&_p]:my-4",
    // listas
    "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6",
    "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6",
    "[&_li]:pl-1 [&_li::marker]:text-accent",
    // énfasis y enlaces
    "[&_strong]:font-semibold [&_strong]:text-fg",
    "[&_a]:text-accent [&_a]:underline-offset-2 hover:[&_a]:underline",
].join(" ");

export default function BlogDetailContainer({ post }: { post: BlogPost }) {
    return (
        <article className="pt-header-sm lg:pt-header">
            <header className="bg-surface pb-16 pt-12 lg:pb-24 lg:pt-16">
                <Container className="max-w-6xl text-center">
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

            <Container className="max-w-5xl py-14 lg:py-20">
                <div
                    className={ARTICLE_BODY}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </Container>
        </article>
    );
}