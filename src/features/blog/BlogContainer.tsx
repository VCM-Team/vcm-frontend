import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import BlogCard from "@/src/shared/components/BlogCard";
import { BLOG_POSTS } from "@/src/shared/data/blog.data";

const HEADING = {
    badge: "Blog",
    title: "Título de la sección",
    titleAccent: "palabra resaltada",
    titleRest: "cierre del título",
};

export default function BlogContainer() {
    return (
        <section className="mx-3 mt-24 lg:mt-28">
            <div className="overflow-hidden rounded-panel bg-gradient-to-b from-brand-400/12 to-bg">
                <Container className="py-16 lg:py-20">
                    <Badge>{HEADING.badge}</Badge>

                    <h1 className="mt-8 max-w-[16ch] text-3xl font-bold leading-[1.15] text-fg sm:text-4xl lg:text-5xl">
                        {HEADING.title}{" "}
                        <span className="text-brand-400">{HEADING.titleAccent}</span>{" "}
                        {HEADING.titleRest}
                    </h1>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                        {BLOG_POSTS.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
}