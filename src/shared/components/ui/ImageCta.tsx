import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

type Props = {
    title: string;
    titleRest?: string;
    cta: { label: string; href: string };
    image: string;
    Icon?: React.ComponentType<{ className?: string }>;
    className?: string;
};

export default function ImageCta({
                                     title,
                                     titleRest,
                                     cta,
                                     image,
                                     Icon,
                                     className,
                                 }: Props) {
    return (
        <section className={cn("pb-16 lg:pb-24", className)}>
            <Container>
                <div className="relative isolate overflow-hidden rounded-card">
                    <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]">
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 72rem, 100vw"
                            className="object-cover object-center"
                        />
                    </div>

                    <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                    />

                    {Icon && (
                        <span
                            aria-hidden
                            className="absolute left-6 top-6 grid size-11 place-items-center rounded-full bg-white text-black"
                        >
                            <Icon className="size-5" />
                        </span>
                    )}

                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:inset-x-9 lg:bottom-9">
                        <h2 className="max-w-[24ch] text-xl font-light leading-snug text-white lg:text-3xl">
                            {title}
                            {titleRest && (
                                <>
                                    <br />
                                    {titleRest}
                                </>
                            )}
                        </h2>

                        <div className="group flex w-fit shrink-0 items-center gap-2">
                            <Link
                                href={cta.href}
                                className="inline-flex items-center rounded-full bg-brand-400 px-7 py-4 text-[15px] font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
                            >
                                {cta.label}
                            </Link>

                            <Link
                                href={cta.href}
                                aria-hidden
                                tabIndex={-1}
                                className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-400 text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
                            >
                                <ArrowUpRight className="col-start-1 row-start-1 size-5 transition-[translate] duration-300 group-hover:-translate-y-11" />
                                <ArrowUpRight
                                    aria-hidden
                                    className="col-start-1 row-start-1 size-5 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}