import Image from "next/image";
import Button from "./Button";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

export type QuoteCardData = {
    quote: string;
    authorName: string;
    authorRole: string;
    authorImage: string;
    cta?: { label: string; href: string };
};

export default function QuoteCard({
                                      data,
                                      className,
                                  }: {
    data: QuoteCardData;
    className?: string;
}) {
    return (
        <figure
            className={cn(
                "flex h-full flex-col rounded-card bg-accent-soft p-7 lg:p-8",
                className
            )}
        >
      <span aria-hidden className="text-5xl leading-none text-navy-800">
        &ldquo;
      </span>

            <blockquote className="mt-10 text-lg leading-relaxed text-navy-800">
                {data.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4">
        <span className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
          <Image
              src={data.authorImage}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
          />
        </span>
                <span>
          <span className="block text-[15px] font-medium text-navy-800">
            {data.authorName}
          </span>
          <span className="block text-[11px] uppercase tracking-[0.08em] text-navy-800/70">
            {data.authorRole}
          </span>
        </span>
            </figcaption>

            {data.cta && (
                <div className="mt-10 flex items-center gap-2 lg:mt-auto lg:pt-10">
                    <Button href={data.cta.href} variant="dark" size="sm">
                        {data.cta.label}
                    </Button>
                    <span
                        aria-hidden
                        className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-800 text-white"
                    >
            <ArrowUpRight className="size-4" />
          </span>
                </div>
            )}
        </figure>
    );
}