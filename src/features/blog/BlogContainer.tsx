import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import BlogCard from "@/src/shared/components/BlogCard";
import { BLOG_POSTS } from "@/src/shared/data/blog.data";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HEADING = {
    badge: "Blog",
    title: "Título de la sección",
    titleAccent: "palabra resaltada",
    titleRest: "cierre del título",
};

// Encabezado visible al cargar: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,scale] duration-700 ease-out motion-reduce:transition-none";
const ENTER_FADE = `${ENTER} starting:opacity-0`;
const ENTER_ZOOM = `${ENTER} starting:scale-95 starting:opacity-0`;

// Grid: tres entradas que rotan; el retraso va por columna (3 en desktop)
const CARD_VARIANTS = [REVEAL.blur, REVEAL.up, REVEAL.zoomOut] as const;
const CARD_COLUMNS = 3;

export default function BlogContainer() {
    return (
        <section className="mx-3 mt-24 lg:mt-28">
            <div className="overflow-hidden rounded-panel bg-gradient-to-b from-brand-400/12 to-bg">
                <Container className="py-16 lg:py-20">
                    <div className={cn("w-fit", ENTER_FADE)}>
                        <Badge>{HEADING.badge}</Badge>
                    </div>

                    <h1
                        className={cn(
                            "mt-8 max-w-[16ch] origin-left text-3xl font-bold leading-[1.15] text-fg sm:text-4xl lg:text-5xl",
                            ENTER_ZOOM,
                            "delay-100"
                        )}
                    >
                        {HEADING.title}{" "}
                        <span className="text-brand-400">{HEADING.titleAccent}</span>{" "}
                        {HEADING.titleRest}
                    </h1>

                    {/* El grid anima al hacer scroll hasta él */}
                    <RevealSection className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                        {BLOG_POSTS.map((post, i) => (
                            <div
                                key={post.slug}
                                className={cn("h-full", CARD_VARIANTS[i % CARD_VARIANTS.length])}
                                style={{ transitionDelay: `${(i % CARD_COLUMNS) * 120}ms` }}
                            >
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </RevealSection>
                </Container>
            </div>
        </section>
    );
}