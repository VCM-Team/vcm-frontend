import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
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
        <section className={cn("bg-gradient-to-b from-bg to-surface/40 py-16 lg:py-24", className)}>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Badge>{badge}</Badge>

                    <h2 className="mt-8 max-w-[22ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                        {title}
                        {titleAccent && (
                            <>
                                {" "}
                                <span className="text-accent">{titleAccent}</span>
                            </>
                        )}
                    </h2>

                    {description && (
                        <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-fg-muted">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-2">
                    {items.map((item) => (
                        <InsightCard key={item.key} item={item} />
                    ))}
                </div>

                {cta && (
                    <div className="mt-12 flex justify-center lg:mt-14">
                        <Button href={cta.href} size="sm">
                            {cta.label}
                        </Button>
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
                "group relative flex flex-col gap-5 overflow-hidden rounded-card bg-surface p-5",
                "transition-colors duration-300 hover:bg-accent-soft",
                "sm:min-h-[22rem] sm:flex-row sm:items-stretch sm:gap-6"
            )}
        >
            <div className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-[0.75rem] sm:aspect-auto sm:w-[40%]">
                <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 20rem, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col py-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-fg-muted transition-colors duration-300 group-hover:text-navy-800/70">
                    {item.label}
                </p>

                <h3 className="mt-4 text-xl font-semibold leading-snug text-fg transition-colors duration-300 group-hover:text-navy-800">
                    <Link
                        href={item.href}
                        className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                    >
                        {item.title}
                    </Link>
                </h3>

                <span
                    aria-hidden
                    className={cn(
                        "mt-auto grid size-10 self-end place-items-center rounded-full",
                        "bg-transparent text-fg transition-all duration-300",
                        "group-hover:bg-navy-800 group-hover:text-accent"
                    )}
                >
          <ArrowUpRight className="size-4" />
        </span>
            </div>
        </article>
    );
}