"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
    children: React.ReactNode;
    itemCount: number;
    label: string;
    className?: string;
};

export default function Carousel({ children, itemCount, label, className }: Props) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(1);

    const measure = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;

        const perView = Math.max(1, Math.round(el.clientWidth / (el.scrollWidth / itemCount)));
        setPageCount(Math.max(1, itemCount - perView + 1));

        const step = el.scrollWidth / itemCount;
        setPage(Math.round(el.scrollLeft / step));
    }, [itemCount]);

    useEffect(() => {
        measure();
        const el = trackRef.current;
        if (!el) return;

        const ro = new ResizeObserver(measure);
        ro.observe(el);
        el.addEventListener("scroll", measure, { passive: true });

        return () => {
            ro.disconnect();
            el.removeEventListener("scroll", measure);
        };
    }, [measure]);

    const scrollToPage = (next: number) => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.scrollWidth / itemCount;
        el.scrollTo({ left: step * next, behavior: "smooth" });
    };

    const go = (dir: -1 | 1) => {
        scrollToPage(Math.min(Math.max(page + dir, 0), pageCount - 1));
    };

    return (
        <div className={cn("relative", className)}>
            <button
                type="button"
                onClick={() => go(-1)}
                disabled={page === 0}
                aria-label="Previous"
                className="absolute -left-12 top-1/2 hidden size-10 -translate-y-1/2 place-items-center rounded-full text-fg transition-opacity hover:bg-surface disabled:opacity-25 lg:grid"
            >
                <Chevron className="size-5 rotate-180" />
            </button>

            <button
                type="button"
                onClick={() => go(1)}
                disabled={page >= pageCount - 1}
                aria-label="Next"
                className="absolute -right-12 top-1/2 hidden size-10 -translate-y-1/2 place-items-center rounded-full text-fg transition-opacity hover:bg-surface disabled:opacity-25 lg:grid"
            >
                <Chevron className="size-5" />
            </button>

            <div
                ref={trackRef}
                role="region"
                aria-label={label}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {children}
            </div>

            {pageCount > 1 && (
                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: pageCount }).map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => scrollToPage(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === page}
                            className={cn(
                                "size-2 rounded-full transition-colors duration-200",
                                i === page ? "bg-accent" : "bg-border"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function Chevron({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}