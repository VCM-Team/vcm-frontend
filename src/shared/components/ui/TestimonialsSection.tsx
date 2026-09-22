"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/src/shared/data/testimonials.data";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    titleRest?: string;
    cta?: { label: string; href: string };
    items: readonly Testimonial[];
    /** "light" (por defecto) o "dark". */
    variant?: "light" | "dark";
    className?: string;
};

export default function TestimonialsSection({
                                                badge,
                                                title,
                                                titleAccent,
                                                titleRest,
                                                cta,
                                                items,
                                                variant = "light",
                                                className,
                                            }: Props) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const isDark = variant === "dark";

    const measure = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setAtStart(el.scrollLeft <= 4);
        setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        measure();
        el.addEventListener("scroll", measure, { passive: true });

        const ro = new ResizeObserver(measure);
        ro.observe(el);

        return () => {
            el.removeEventListener("scroll", measure);
            ro.disconnect();
        };
    }, [measure]);

    const go = (dir: -1 | 1) => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.scrollWidth / items.length;
        el.scrollBy({ left: step * dir, behavior: "smooth" });
    };

    return (
        <section className={cn("py-16 lg:py-24", isDark && "bg-ink-900", className)}>
            <Container>
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* encabezado */}
                    <div className="flex flex-col">
                        <Badge
                            className={cn(
                                "self-start",
                                isDark && "border-brand-400 bg-transparent text-brand-400"
                            )}
                        >
                            {badge}
                        </Badge>

                        <h2
                            className={cn(
                                "mt-8 max-w-[18ch] text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
                                isDark ? "text-white" : "text-fg"
                            )}
                        >
                            {title}
                            {titleAccent && (
                                <>
                                    {" "}
                                    <span className={isDark ? "text-brand-400" : "text-accent"}>
                                        {titleAccent}
                                    </span>
                                </>
                            )}
                            {titleRest && <> {titleRest}</>}
                        </h2>

                        {cta &&
                            (isDark ? (
                                <Link
                                    href={cta.href}
                                    className="mt-8 inline-flex self-start rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white lg:mt-auto"
                                >
                                    {cta.label}
                                </Link>
                            ) : (
                                <Button
                                    href={cta.href}
                                    variant="dark"
                                    size="sm"
                                    className="mt-8 self-start lg:mt-auto"
                                >
                                    {cta.label}
                                </Button>
                            ))}
                    </div>

                    {/* carrusel */}
                    <div className="relative min-w-0">
                        <div
                            ref={trackRef}
                            role="region"
                            aria-label={badge}
                            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {items.map((t) => (
                                <div
                                    key={t.key}
                                    className="w-full shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-full"
                                >
                                    <TestimonialCard testimonial={t} variant={variant} />
                                </div>
                            ))}
                        </div>

                        {/* flechas sobre la tarjeta */}
                        <div className="pointer-events-none absolute bottom-9 right-9 flex gap-3 lg:bottom-11 lg:right-11">
                            <button
                                type="button"
                                onClick={() => go(-1)}
                                disabled={atStart}
                                aria-label="Previous testimonial"
                                className={cn(
                                    "pointer-events-auto grid size-8 place-items-center transition-opacity disabled:opacity-25",
                                    isDark
                                        ? "text-brand-400 hover:text-brand-500"
                                        : "text-fg hover:text-accent"
                                )}
                            >
                                <Arrow className="size-5 rotate-180" />
                            </button>

                            <button
                                type="button"
                                onClick={() => go(1)}
                                disabled={atEnd}
                                aria-label="Next testimonial"
                                className={cn(
                                    "pointer-events-auto grid size-8 place-items-center transition-opacity disabled:opacity-25",
                                    isDark
                                        ? "text-brand-400 hover:text-brand-500"
                                        : "text-fg hover:text-accent"
                                )}
                            >
                                <Arrow className="size-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Arrow({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M6 18 18 6M9 6h9v9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}