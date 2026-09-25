import Container from "./Container";
import RevealSection from "./RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

export type FeatureGridItem = {
    key: string;
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
};

type Props = {
    title: string;
    titleAccent?: string;
    items: readonly FeatureGridItem[];
    className?: string;
};

// Los artículos alternan entre tres entradas; el icono remata con un zoom
const ITEM_VARIANTS = [REVEAL.up, REVEAL.blur, REVEAL.zoomIn] as const;
const ITEM_STAGGER_MS = 100;

export default function FeatureGrid({
                                        title,
                                        titleAccent,
                                        items,
                                        className,
                                    }: Props) {
    return (
        <RevealSection className={cn("overflow-x-clip py-16 lg:py-24", className)}>
            <Container>
                <h2
                    className={cn(
                        "max-w-[20ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]",
                        REVEAL.left
                    )}
                >
                    {title}
                    {titleAccent && (
                        <>
                            {" "}
                            <span className="text-accent">{titleAccent}</span>
                        </>
                    )}
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-y-16">
                    {items.map(({ key, title: itemTitle, description, Icon }, i) => {
                        const delay = 200 + i * ITEM_STAGGER_MS;

                        return (
                            <article
                                key={key}
                                className={ITEM_VARIANTS[i % ITEM_VARIANTS.length]}
                                style={{ transitionDelay: `${delay}ms` }}
                            >
                                <span
                                    aria-hidden
                                    className={cn(
                                        "grid size-14 place-items-center rounded-full bg-[#F2EAD6] text-navy-800",
                                        REVEAL.zoomIn
                                    )}
                                    style={{ transitionDelay: `${delay + 200}ms` }}
                                >
                                    <Icon className="size-6" />
                                </span>

                                <h3 className="mt-6 text-lg font-semibold text-fg">{itemTitle}</h3>

                                <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-fg-muted">
                                    {description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </RevealSection>
    );
}