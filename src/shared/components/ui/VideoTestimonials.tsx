"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import VideoPlayer from "./VideoPlayer";
import type { VideoTestimonial } from "@/src/shared/data/video-testimonials.data";
import { cn } from "@/src/lib/utils";

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
                                    i === active ? "bg-accent" : "bg-border"
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
        <article className="relative flex flex-col overflow-hidden rounded-card bg-accent-soft p-7 lg:p-9">
            <div className="flex items-start justify-between gap-4">
                <Badge className="border-navy-800/20 bg-transparent text-navy-800">
                    {item.badge}
                </Badge>

                {item.mark && (
                    <Image
                        src={item.mark}
                        alt=""
                        width={64}
                        height={64}
                        className="size-12 object-contain lg:size-14"
                    />
                )}
            </div>

            <h3 className="mt-6 max-w-[20ch] text-xl font-semibold leading-snug text-navy-800 lg:text-2xl">
                {item.title}
            </h3>

            <div className="mt-auto flex flex-col gap-6 pt-12 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                    <p className="text-2xl font-semibold text-navy-800 lg:text-3xl">
                        {item.statValue}
                    </p>
                    <p className="mt-2 max-w-[34ch] text-[13px] leading-relaxed text-navy-800/80">
                        {item.statLabel}
                    </p>
                </div>

                <Button href={item.cta.href} variant="dark" size="sm" className="shrink-0">
                    {item.cta.label}
                </Button>
            </div>
        </article>
    );
}

function QuoteCard({ item }: { item: Extract<VideoTestimonial, { variant: "quote" }> }) {
    return (
        <figure className="flex flex-col rounded-card bg-surface p-7 lg:p-9">
            <QuoteMark className="size-8 shrink-0 text-navy-800 lg:size-9" />

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