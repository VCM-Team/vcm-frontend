"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import VideoPlayer from "./VideoPlayer";
import type { VideoTestimonial } from "@/src/shared/data/video-testimonials.data";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

type Props = {
    items: readonly VideoTestimonial[];
    className?: string;
};

export default function VideoTestimonials({ items, className }: Props) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    const measure = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.scrollWidth / items.length;
        setActive(Math.round(el.scrollLeft / step));
    }, [items.length]);

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

    const goTo = (i: number) => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.scrollWidth / items.length;
        el.scrollTo({ left: step * i, behavior: "smooth" });
    };

    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <div
                    ref={trackRef}
                    role="region"
                    aria-label="Testimonials"
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {items.map((item) => (
                        <div key={item.key} className="w-full shrink-0 snap-start">
                            <div className="grid gap-6 lg:grid-cols-2">
                                <VideoPlayer
                                    src={item.video.src}
                                    poster={item.video.poster}
                                    title={item.video.title}
                                />

                                {item.variant === "story" ? (
                                    <StoryCard item={item} />
                                ) : (
                                    <QuoteCard item={item} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {items.length > 1 && (
                    <div className="mt-8 flex justify-center gap-2">
                        {items.map((item, i) => (
                            <button
                                key={item.key}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Ir al testimonio ${i + 1}`}
                                aria-current={i === active}
                                className={cn(
                                    "size-2 rounded-full transition-colors duration-200",
                                    i === active ? "bg-ink-900" : "bg-black/20"
                                )}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}

function StoryCard({ item }: { item: Extract<VideoTestimonial, { variant: "story" }> }) {
    return (
        <article className="relative isolate flex flex-col overflow-hidden rounded-card bg-accent p-7 lg:p-9">
            {/* Fondo: franja inferior más oscura, separada por una curva */}
            <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 -z-10 size-full"
            >
                <path
                    d="M0 64 C22 64 38 46 100 6 L100 100 L0 100 Z"
                    fill="rgb(0 0 0 / 0.07)"
                />
            </svg>

            <Badge className="w-fit border-black/40 bg-transparent text-black">
                {item.badge}
            </Badge>

            <h3 className="mt-7 max-w-[20ch] text-2xl font-semibold leading-snug text-black lg:text-[1.75rem]">
                {item.title}
            </h3>

            <div className="mt-auto flex flex-col gap-8 pt-16 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                    <p className="text-3xl font-semibold text-black lg:text-4xl">
                        {item.statValue}
                    </p>
                    <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-black/75">
                        {item.statLabel}
                    </p>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-5 sm:items-end">
                    <Image
                        src="/assets/brand/vcm_black_logo.webp"
                        alt="VCM"
                        width={120}
                        height={32}
                        className="h-7 w-auto object-contain"
                    />

                    <Link
                        href={item.cta.href}
                        className="rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-white"
                    >
                        {item.cta.label}
                    </Link>
                </div>
            </div>
        </article>
    );
}

function QuoteCard({ item }: { item: Extract<VideoTestimonial, { variant: "quote" }> }) {
    return (
        <figure className="flex flex-col rounded-card bg-surface p-7 lg:p-9">
            <QuoteMark className="size-8 shrink-0 text-brand-400 lg:size-9" />

            <blockquote className="mt-8 text-lg leading-relaxed text-fg">
                {item.quote}
            </blockquote>

            <figcaption className="mt-auto flex items-center gap-4 pt-10">
                <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-bg">
                    {item.logo ? (
                        <Image
                            src={item.logo}
                            alt=""
                            width={44}
                            height={44}
                            className="size-full object-contain p-1.5"
                        />
                    ) : (
                        <span aria-hidden className="text-xs font-semibold text-fg-muted">
                            {item.company.slice(0, 2).toUpperCase()}
                        </span>
                    )}
                </span>

                <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-fg">
                        {item.authorName} — {item.authorRole}
                    </span>
                    <span className="block text-[11px] uppercase tracking-[0.08em] text-fg-muted">
                        {item.company}
                    </span>
                </span>
            </figcaption>
        </figure>
    );
}

function QuoteMark({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 24" fill="currentColor" className={className} aria-hidden>
            <path d="M0 24V13.4C0 9.6 1 6.5 3 4.1 5 1.7 7.9.3 11.6 0v4.9c-2 .4-3.5 1.2-4.4 2.4-.9 1.2-1.4 2.8-1.4 4.7h5.8V24H0Zm20.4 0V13.4c0-3.8 1-6.9 3-9.3C25.4 1.7 28.3.3 32 0v4.9c-2 .4-3.5 1.2-4.4 2.4-.9 1.2-1.4 2.8-1.4 4.7H32V24H20.4Z" />
        </svg>
    );
}