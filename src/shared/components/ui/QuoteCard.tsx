import Image from "next/image";
import Link from "next/link";
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
                "flex h-full flex-col bg-black p-7 lg:p-8",
                "rounded-bl-[2rem] rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-none",
                className
            )}
        >
            <QuoteMark className="size-9 shrink-0 text-brand-400" />

            <blockquote className="mt-8 text-[15px] leading-relaxed text-white/90">
                {data.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4">
                <Image
                    src={data.authorImage}
                    alt=""
                    width={120}
                    height={32}
                    className="h-7 w-auto shrink-0 object-contain"
                />
                <span>
                    <span className="block text-[13px] font-semibold text-white">
                        {data.authorName}
                    </span>
                    <span className="block text-[12px] text-white/60">
                        {data.authorRole}
                    </span>
                </span>
            </figcaption>

            {data.cta && (
                <div className="group mt-10 flex w-fit items-center gap-2 lg:mt-auto lg:pt-10">
                    <Link
                        href={data.cta.href}
                        className="inline-flex items-center rounded-full bg-brand-400 px-6 py-3 text-[14px] font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
                    >
                        {data.cta.label}
                    </Link>

                    <Link
                        href={data.cta.href}
                        aria-hidden
                        tabIndex={-1}
                        className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-400 text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
                    >
                        <ArrowUpRight className="col-start-1 row-start-1 size-4 transition-[translate] duration-300 group-hover:-translate-y-10" />
                        <ArrowUpRight
                            aria-hidden
                            className="col-start-1 row-start-1 size-4 translate-y-10 transition-[translate] duration-300 group-hover:translate-y-0"
                        />
                    </Link>
                </div>
            )}
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