import Container from "./Container";
import Badge from "./Badge";
import Stats, { type StatItem } from "./Stats";
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
            {/* panel a ancho completo */}
            <div className="mx-3 rounded-panel bg-ink-900 lg:mx-4">
                <Container className="py-12 lg:py-20">
                    <Badge className="border-brand-400 bg-transparent text-brand-400">
                        {badge}
                    </Badge>

                    <h2 className="mt-7 max-w-[26ch] text-2xl font-normal leading-snug text-white sm:text-3xl lg:text-[2.25rem]">
                        {title}
                        {titleRest && (
                            <>
                                <br />
                                {titleRest}
                            </>
                        )}
                    </h2>

                    <SectionRule />

                    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                        {items.map(({ key, title: itemTitle, description, Icon }) => (
                            <article
                                key={key}
                                className="rounded-card bg-gradient-to-b from-brand-400 to-transparent p-px"
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
            </div>

            {stats && stats.length > 0 && (
                <Container>
                    <Stats items={stats} className="mt-20 lg:mt-24" />
                </Container>
            )}
        </section>
    );
}

/* Línea decorativa: tramo bajo, rampa, tramo alto que se desvanece */
function SectionRule() {
    return (
        <div aria-hidden className="mt-8 flex h-7 items-end text-brand-400">
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