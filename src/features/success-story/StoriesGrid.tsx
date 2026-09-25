import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import StoryCard from "@/src/shared/components/ui/StoryCard";
import { SUCCESS_STORIES } from "@/src/shared/data/success-stories.data";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HEADING = {
    badge: "Case Studies",
    title: "Real Companies,",
    titleAccent: "Real Growth",
    description:
        "See how construction and roofing companies build the systems and the teams they need to scale, with strategy, processes and dedicated nearshore talent.",
};

// Encabezado visible al cargar: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,translate,scale] duration-700 ease-out motion-reduce:transition-none";
const ENTER_ZOOM = `${ENTER} starting:scale-90 starting:opacity-0`;
const ENTER_LEFT = `${ENTER} starting:-translate-x-8 starting:opacity-0`;
const ENTER_FADE = `${ENTER} starting:opacity-0`;
const ENTER_LINE = `${ENTER} origin-left starting:scale-x-0`;

// Grid: las tarjetas alternan entrada; el retraso va por columna (3 en desktop)
const CARD_VARIANTS = [REVEAL.up, REVEAL.zoomIn] as const;
const CARD_COLUMNS = 3;

export default function StoriesGrid() {
    return (
        <section className="overflow-x-clip bg-gradient-to-b from-surface to-bg">
            <Container className="pt-14 lg:pt-20">
                <div className={cn("w-fit", ENTER_ZOOM)}>
                    <Badge>{HEADING.badge}</Badge>
                </div>

                <h1
                    className={cn(
                        "mt-8 max-w-[16ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl",
                        ENTER_LEFT,
                        "delay-100"
                    )}
                >
                    {HEADING.title}{" "}
                    <span className="text-accent">{HEADING.titleAccent}</span>
                </h1>

                <p
                    className={cn(
                        "mt-6 max-w-[48ch] text-[15px] leading-relaxed text-fg-muted",
                        ENTER_FADE,
                        "delay-200"
                    )}
                >
                    {HEADING.description}
                </p>

                <hr className={cn("mt-12 border-border lg:mt-16", ENTER_LINE, "duration-1000 delay-300")} />

                {/* El grid anima al hacer scroll hasta él */}
                <RevealSection className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                    {SUCCESS_STORIES.map((story, i) => (
                        <div
                            key={story.slug}
                            className={cn("h-full", CARD_VARIANTS[i % CARD_VARIANTS.length])}
                            style={{ transitionDelay: `${(i % CARD_COLUMNS) * 120}ms` }}
                        >
                            <StoryCard story={story} href={`/success-story/${story.slug}`} />
                        </div>
                    ))}
                </RevealSection>
            </Container>
        </section>
    );
}