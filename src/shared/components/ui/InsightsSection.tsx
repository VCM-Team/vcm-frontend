import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
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
        <section className={cn("bg-ink-900 py-20 lg:py-28", className)}>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Badge className="border-brand-400 bg-transparent text-brand-400">
                        {badge}
                    </Badge>

                    <h2 className="mt-7 max-w-[22ch] text-3xl font-normal leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
                        {title}
                        {titleAccent && (
                            <>
                                {" "}
                                <span className="text-brand-400">{titleAccent}</span>
                            </>
                        )}
                    </h2>

                    {description && (
                        <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-white/70">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {items.map((item) => (
                        <InsightCard key={item.key} item={item} />
                    ))}
                </div>

                {cta && (
                    <div className="mt-12 flex justify-center lg:mt-14">
                        <Link
                            href={cta.href}
                            className="rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white"
                        >
                            {cta.label}
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
}

function InsightCard({ item }: { item: InsightItem }) {
    return (
        <article
            className={cn(
                "group relative isolate flex flex-col gap-5 overflow-hidden rounded-[2rem] bg-[#0F0F0F] p-5",
                "sm:min-h-[22rem] sm:flex-row sm:items-stretch sm:gap-6"
            )}
        >
            {/* Fondo: franja superior más clara, separada por una diagonal */}
            <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 -z-10 size-full"
            >
                <path d="M0 0 L100 0 L100 22 L0 62 Z" fill="#252525" />
            </svg>

            <div className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-2xl sm:aspect-auto sm:w-[50%]">
                <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 20rem, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col py-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-400">
                    {item.label}
                </p>

                <h3 className="mt-8 text-xl font-normal leading-snug text-white lg:text-[1.375rem]">
                    <Link
                        href={item.href}
                        className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                    >
                        {item.title}
                    </Link>
                </h3>

                <span
                    aria-hidden
                    className="mt-auto grid size-12 place-items-center self-end rounded-full bg-brand-400 text-black transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                    <ArrowUpRight className="size-5" />
                </span>
            </div>
        </article>
    );
}