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
            {/* burbuja a ancho completo */}
            <div className="relative mx-3 rounded-panel bg-navy-800 lg:mx-4">
                <Container className="py-12 lg:py-16">
                    <Badge className="border-white/25 bg-transparent text-white">
                        {badge}
                    </Badge>

                    <h2 className="mt-7 max-w-[30ch] text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-[2.125rem]">
                        {title}
                        {titleRest && (
                            <>
                                <br />
                                {titleRest}
                            </>
                        )}
                    </h2>

                    <span aria-hidden className="mt-7 block h-px w-24 bg-white/30" />

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
                        {items.map(({ key, title: itemTitle, description, Icon }) => (
                            <article
                                key={key}
                                className="rounded-card bg-white/[0.06] p-6 ring-1 ring-white/10"
                            >
                <span aria-hidden className="block text-accent">
                  <Icon className="size-6" />
                </span>

                                <h3 className="mt-6 text-base font-semibold text-white">
                                    {itemTitle}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-white/75">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </Container>

                {/* cola del bocadillo, alineada con el contenido */}
                <div aria-hidden className="absolute inset-x-0 -bottom-7">
                    <Container>
            <span
                className="block h-8 w-14 bg-navy-800"
                style={{ clipPath: "polygon(0 0, 100% 0, 30% 100%)" }}
            />
                    </Container>
                </div>
            </div>

            {stats && stats.length > 0 && (
                <Container>
                    <Stats items={stats} className="mt-20 lg:mt-24" />
                </Container>
            )}
        </section>
    );
}