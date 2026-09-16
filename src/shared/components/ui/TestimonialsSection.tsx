"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
    className?: string;
};

export default function TestimonialsSection({
                                                badge,
                                                title,
                                                titleAccent,
                                                titleRest,
                                                cta,
                                                items,
                                                className,
                                            }: Props) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

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
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* encabezado */}
                    <div className="flex flex-col">
                        <Badge className="self-start">{badge}</Badge>

                        <h2 className="mt-8 max-w-[18ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                            {title}
                            {titleAccent && (
                                <>
                                    {" "}
                                    <span className="text-accent">{titleAccent}</span>
                                </>
                            )}
                            {titleRest && <> {titleRest}</>}
                        </h2>

                        {cta && (
                            <Button
                                href={cta.href}
                                variant="dark"
                                size="sm"
                                className="mt-8 self-start lg:mt-auto"
                            >
                                {cta.label}
                            </Button>
                        )}
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
                                    <TestimonialCard testimonial={t} />
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
                                className="pointer-events-auto grid size-8 place-items-center text-fg transition-opacity hover:text-accent disabled:opacity-25"
                            >
                                <Arrow className="size-5 rotate-180" />
                            </button>

                            <button
                                type="button"
                                onClick={() => go(1)}
                                disabled={atEnd}
                                aria-label="Next testimonial"
                                className="pointer-events-auto grid size-8 place-items-center text-fg transition-opacity hover:text-accent disabled:opacity-25"
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