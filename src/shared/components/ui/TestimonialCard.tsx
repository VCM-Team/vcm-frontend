import Image from "next/image";
import type { Testimonial } from "@/src/shared/data/testimonials.data";
import { cn } from "@/src/lib/utils";

type Props = {
    testimonial: Testimonial;
    /** "light" (por defecto) o "dark". */
    variant?: "light" | "dark";
    className?: string;
};

export default function TestimonialCard({
                                            testimonial,
                                            variant = "light",
                                            className,
                                        }: Props) {
    const isDark = variant === "dark";

    return (
        <figure
            className={cn(
                "flex h-full min-h-[24rem] flex-col rounded-card p-7 lg:min-h-[26rem] lg:p-9",
                isDark ? "bg-[#0F0F0F]" : "bg-surface",
                className
            )}
        >
            <QuoteMark
                className={cn(
                    "size-8 shrink-0 lg:size-9",
                    isDark ? "text-accent" : "text-navy-800"
                )}
            />

            <blockquote
                className={cn(
                    "mt-6 text-lg leading-relaxed lg:text-xl",
                    isDark ? "text-white/90" : "text-fg"
                )}
            >
                {testimonial.quote}
            </blockquote>

            <figcaption className="mt-auto flex items-center gap-4 pt-10">
                <span
                    className={cn(
                        "grid size-11 shrink-0 place-items-center overflow-hidden rounded-full",
                        isDark ? "bg-white/10" : "bg-bg"
                    )}
                >
                    {testimonial.logo ? (
                        <Image
                            src={testimonial.logo}
                            alt=""
                            width={44}
                            height={44}
                            className="size-full object-contain p-1.5"
                        />
                    ) : (
                        <span
                            aria-hidden
                            className={cn(
                                "text-xs font-semibold",
                                isDark ? "text-white/70" : "text-fg-muted"
                            )}
                        >
                            {testimonial.company.slice(0, 2).toUpperCase()}
                        </span>
                    )}
                </span>

                <span className="min-w-0">
                    <span
                        className={cn(
                            "block text-[15px] font-medium",
                            isDark ? "text-white" : "text-fg"
                        )}
                    >
                        {testimonial.authorName} — {testimonial.authorRole}
                    </span>
                    <span
                        className={cn(
                            "block text-[11px] uppercase tracking-[0.08em]",
                            isDark ? "text-white/60" : "text-fg-muted"
                        )}
                    >
                        {testimonial.company}
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