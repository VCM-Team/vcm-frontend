import Container from "./Container";
import Badge from "./Badge";
import RevealSection from "./RevealSection";
import Stats, { type StatItem } from "./Stats";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

export type BubbleFeatureItem = {
    key: string;
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
};

type Props = {
    badge: string;
    title: string;
    titleRest?: string;
    items: readonly BubbleFeatureItem[];
    stats?: readonly StatItem[];
    className?: string;
};

// Una animación distinta por posición de tarjeta
const CARD_VARIANTS = [REVEAL.up, REVEAL.zoomIn, REVEAL.down, REVEAL.zoomOut] as const;
const CARD_STAGGER_MS = 120;

export default function BubbleFeatures({
                                           badge,
                                           title,
                                           titleRest,
                                           items,
                                           stats,
                                           className,
                                       }: Props) {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            {/* panel a ancho completo: es el RevealSection de su contenido */}
            <RevealSection className="mx-3 rounded-panel bg-ink-900 lg:mx-4">
                <Container className="py-12 lg:py-20">
                    <div className={REVEAL.left}>
                        <Badge className="border-brand-400 bg-transparent text-brand-400">
                            {badge}
                        </Badge>
                    </div>

                    <h2
                        className={cn(
                            "mt-7 max-w-[26ch] text-2xl font-normal leading-snug text-white sm:text-3xl lg:text-[2.25rem]",
                            REVEAL.blur,
                            "delay-100"
                        )}
                    >
                        {title}
                        {titleRest && (
                            <>
                                <br />
                                {titleRest}
                            </>
                        )}
                    </h2>

                    <SectionRule className={cn(REVEAL.right, "delay-200")} />

                    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                        {items.map(({ key, title: itemTitle, description, Icon }, i) => (
                            <article
                                key={key}
                                className={cn(
                                    "rounded-card bg-gradient-to-b from-brand-400 to-transparent p-px",
                                    CARD_VARIANTS[i % CARD_VARIANTS.length]
                                )}
                                style={{ transitionDelay: `${300 + i * CARD_STAGGER_MS}ms` }}
                            >
                                <div className="flex h-full flex-col rounded-card bg-[#070707] p-6 lg:p-7">
                                    <span aria-hidden className="block text-brand-400">
                                        <Icon className="size-6" />
                                    </span>

                                    <h3 className="mt-10 text-base font-medium text-white lg:mt-14">
                                        {itemTitle}
                                    </h3>

                                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                                        {description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </RevealSection>

            {stats && stats.length > 0 && (
                /* Reveal propio: los stats están más abajo y deben animar al llegar a ellos */
                <RevealSection>
                    <Container>
                        <div className={REVEAL.up}>
                            <Stats items={stats} className="mt-20 lg:mt-24" />
                        </div>
                    </Container>
                </RevealSection>
            )}
        </section>
    );
}

/* Línea decorativa: tramo bajo, rampa, tramo alto que se desvanece */
function SectionRule({ className }: { className?: string }) {
    return (
        <div aria-hidden className={cn("mt-8 flex h-7 items-end text-brand-400", className)}>
            <span className="h-px w-[min(45%,26rem)] shrink-0 bg-current" />

            <svg
                width="44"
                height="28"
                viewBox="0 0 44 28"
                fill="none"
                className="shrink-0"
            >
                <path
                    d="M0 27.5h10l24-27h10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="square"
                />
            </svg>

            <span className="mb-auto h-px flex-1 bg-gradient-to-r from-current to-transparent" />
        </div>
    );
}