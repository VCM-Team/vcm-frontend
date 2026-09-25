"use client";

import Container from "./Container";
import Badge from "./Badge";
import Pill from "./Pill";
import Accordion, { type AccordionItem } from "./Accordion";
import Link from "next/link";
import { useInView } from "@/src/shared/hooks/useInView";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    /** Texto que va DESPUÉS del acento, para acentos en medio del titular. */
    titleRest?: string;
    description: string;
    cta?: { label: string; href: string };
    items: readonly AccordionItem[];
    features?: readonly string[];
    className?: string;
};

// Entrada al hacer scroll: el <section> lleva data-inview y group/reveal
const REVEAL_BASE =
    "opacity-0 transition-[opacity,translate] duration-700 ease-out group-data-[inview=true]/reveal:translate-x-0 group-data-[inview=true]/reveal:translate-y-0 group-data-[inview=true]/reveal:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";
const REVEAL_LEFT = cn(REVEAL_BASE, "-translate-x-10");
const REVEAL_UP = cn(REVEAL_BASE, "translate-y-10");

export default function AccordionSection({
                                             badge,
                                             title,
                                             titleAccent,
                                             titleRest,
                                             description,
                                             cta,
                                             items,
                                             features,
                                             className,
                                         }: Props) {
    const { ref, inView } = useInView<HTMLElement>();
    const withFeatures = Boolean(features?.length);

    return (
        <section
            ref={ref}
            data-inview={inView}
            className={cn("group/reveal bg-bg py-16 lg:py-24", className)}
        >
            <Container>
                <div className={REVEAL_LEFT}>
                    <Badge>{badge}</Badge>
                </div>

                <h2
                    className={cn(
                        "mt-7 max-w-[16ch] text-4xl font-bold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-[3.25rem]",
                        REVEAL_LEFT,
                        "delay-100"
                    )}
                >
                    {title}
                    {titleAccent && (
                        <>
                            {" "}
                            <span className="text-accent">{titleAccent}</span>
                        </>
                    )}
                    {titleRest && <> {titleRest}</>}
                </h2>

                <div className="mt-7 grid items-start gap-12 lg:mt-7 lg:grid-cols-2 lg:gap-20">
                    {/* columna izquierda */}
                    <div>
                        <p
                            className={cn(
                                "max-w-[48ch] text-base leading-[1.75] text-fg-muted",
                                REVEAL_LEFT,
                                "delay-200"
                            )}
                        >
                            {description}
                        </p>

                        {cta && (
                            <div className={cn("mt-9", REVEAL_LEFT, "delay-300")}>
                                <Link
                                    href={cta.href}
                                    className="inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:text-white"
                                >
                                    {cta.label}
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* columna derecha */}
                    <div className={cn(REVEAL_UP, "delay-300")}>
                        <Accordion items={items} />
                    </div>
                </div>

                {withFeatures && features && (
                    <div
                        className={cn(
                            "mt-12 lg:mt-16",
                            cta && "border-t border-black/30 pt-10 lg:pt-12",
                            REVEAL_UP,
                            "delay-500"
                        )}
                    >
                        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
                            {features.map((f) => (
                                <Pill key={f}>{f}</Pill>
                            ))}
                        </ul>
                    </div>
                )}
            </Container>
        </section>
    );
}