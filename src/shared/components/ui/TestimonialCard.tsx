import Image from "next/image";
import type { Testimonial } from "@/src/shared/data/testimonials.data";
import { cn } from "@/src/lib/utils";

type Props = {
    testimonial: Testimonial;
    className?: string;
};

export default function TestimonialCard({ testimonial, className }: Props) {
    return (
        <figure
            className={cn(
                "flex h-full min-h-[24rem] flex-col rounded-card bg-surface p-7 lg:min-h-[26rem] lg:p-9",
                className
            )}
        >
            <QuoteMark className="size-8 shrink-0 text-navy-800 lg:size-9" />

            <blockquote className="mt-6 text-lg leading-relaxed text-fg lg:text-xl">
                {testimonial.quote}
            </blockquote>

            <figcaption className="mt-auto flex items-center gap-4 pt-10">
        <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-bg">
          {testimonial.logo ? (
              <Image
                  src={testimonial.logo}
                  alt=""
                  width={44}
                  height={44}
                  className="size-full object-contain p-1.5"
              />
          ) : (
              <span aria-hidden className="text-xs font-semibold text-fg-muted">
              {testimonial.company.slice(0, 2).toUpperCase()}
            </span>
          )}
        </span>

                <span className="min-w-0">
          <span className="block text-[15px] font-medium text-fg">
            {testimonial.authorName} — {testimonial.authorRole}
          </span>
          <span className="block text-[11px] uppercase tracking-[0.08em] text-fg-muted">
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