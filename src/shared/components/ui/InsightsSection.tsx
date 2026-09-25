import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";
import RevealSection from "./RevealSection";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

export type InsightItem = {
    key: string;
    label: string;
    title: string;
    href: string;
    image: string;
};

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    description?: string;
    items: readonly InsightItem[];
    cta?: { label: string; href: string };
    className?: string;
};

// Distintas a las del Insights de la home: subida y zoom out
const CARD_VARIANTS = [REVEAL.up, REVEAL.zoomOut] as const;

export default function InsightsSection({
                                            badge,
                                            title,
                                            titleAccent,
                                            description,
                                            items,
                                            cta,
                                            className,
                                        }: Props) {
    return (
        <RevealSection className={cn("bg-ink-900 py-20 lg:py-28", className)}>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <div className={REVEAL.fade}>
                        <Badge className="border-brand-400 bg-transparent text-brand-400">
                            {badge}
                        </Badge>
                    </div>

                    <h2
                        className={cn(
                            "mt-7 max-w-[22ch] text-3xl font-normal leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]",
                            REVEAL.zoomIn,
                            "delay-100"
                        )}
                    >
                        {title}
                        {titleAccent && (
                            <>
                                {" "}
                                <span className="text-brand-400">{titleAccent}</span>
                            </>
                        )}
                    </h2>

                    {description && (
                        <p
                            className={cn(
                                "mt-5 max-w-[48ch] text-[15px] leading-relaxed text-white/70",
                                REVEAL.blur,
                                "delay-200"
                            )}
                        >
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {items.map((item, i) => (
                        <div
                            key={item.key}
                            className={CARD_VARIANTS[i % CARD_VARIANTS.length]}
                            style={{ transitionDelay: `${300 + i * 150}ms` }}
                        >
                            <InsightCard item={item} />
                        </div>
                    ))}
                </div>

                {cta && (
                    <div className={cn("mt-12 flex justify-center lg:mt-14", REVEAL.zoomIn, "delay-[600ms]")}>
                        <Link
                            href={cta.href}
                            className="rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white"
                        >
                            {cta.label}
                        </Link>
                    </div>
                )}
            </Container>
        </RevealSection>
    );
}

function InsightCard({ item }: { item: InsightItem }) {
    return (
        <article
            className={cn(
                "group relative isolate flex h-full flex-col gap-5 overflow-hidden rounded-[2rem] bg-[#0F0F0F] p-4",
                "transition-colors duration-300 hover:bg-brand-400 focus-within:bg-brand-400",
                "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-400",
                "sm:min-h-[20rem] sm:flex-row sm:gap-6 sm:p-5 lg:min-h-[22rem]"
            )}
        >
            {/* Franja superior fija; hereda el radio para no asomar por las esquinas */}
            <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 -z-10 size-full rounded-[inherit]"
            >
                <path d="M0 0 L100 0 L100 12 L0 48 Z" fill="#252525" />
            </svg>

            <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-3xl sm:aspect-auto sm:w-[50%] sm:self-stretch">
                <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 20rem, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3 pb-14 sm:gap-6 sm:pb-16 sm:pr-4 sm:pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-400 transition-colors duration-300 group-hover:text-black group-focus-within:text-black sm:group-hover:text-brand-400 sm:group-focus-within:text-brand-400">
                    {item.label}
                </p>

                {/* Margen fijo: todos los títulos arrancan a la misma altura, bajo la diagonal */}
                <h3 className="text-xl font-normal leading-snug text-white transition-colors duration-300 group-hover:text-black group-focus-within:text-black sm:mt-16 lg:mt-20 lg:text-[1.375rem]">
                    <Link
                        href={item.href}
                        className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                    >
                        {item.title}
                    </Link>
                </h3>
            </div>

            <span
                aria-hidden
                className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-brand-400 text-black transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-brand-400 group-focus-within:bg-ink-900 group-focus-within:text-brand-400 sm:bottom-5 sm:right-5"
            >
                <ArrowUpRight className="size-5" />
            </span>
        </article>
    );
}