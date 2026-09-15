import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import StoryCard from "@/src/shared/components/ui/StoryCard";
import { SUCCESS_STORIES } from "@/src/shared/data/success-stories.data";

const HEADING = {
    badge: "Success story",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    description: "Párrafo de apoyo de la sección — reemplázalo con el texto propio.",
};

export default function StoriesGrid() {
    return (
        <section className="bg-gradient-to-b from-surface to-bg">
            <Container className="pt-14 lg:pt-20">
                <Badge>{HEADING.badge}</Badge>

                <h1 className="mt-8 max-w-[16ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl">
                    {HEADING.title}{" "}
                    <span className="text-accent">{HEADING.titleAccent}</span>
                </h1>

                <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-fg-muted">
                    {HEADING.description}
                </p>

                <hr className="mt-12 border-border lg:mt-16" />

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                    {SUCCESS_STORIES.map((story) => (
                        <StoryCard
                            key={story.slug}
                            story={story}
                            href={`/success-story/${story.slug}`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}