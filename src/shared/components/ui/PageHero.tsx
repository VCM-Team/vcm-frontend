import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    titleRest?: string;
    description?: string;
    cta?: { label: string; href: string };
    image: string;
    imageClassName?: string;
};

export default function PageHero({
                                     badge,
                                     title,
                                     titleAccent,
                                     titleRest,
                                     description,
                                     cta,
                                     image,
                                     imageClassName,
                                 }: Props) {
    return (
        <section className="mx-3 lg:mt-8">
            <div className="overflow-hidden rounded-panel bg-gradient-to-b from-brand-400/12 to-bg">
                <Container className="py-14 lg:py-20">
                    <Badge>{badge}</Badge>

                    <div
                        className={cn(
                            "mt-8 grid gap-8 lg:items-end lg:gap-12",
                            cta && "lg:grid-cols-[1.4fr_1fr]"
                        )}
                    >
                        <div>
                            <h1
                                className={cn(
                                    "text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl",
                                    cta ? "max-w-[24ch]" : "max-w-[32ch]"
                                )}
                            >
                                {title}
                                {titleAccent && (
                                    <>
                                        {" "}
                                        <span className="text-accent">{titleAccent}</span>
                                    </>
                                )}
                                {titleRest && <> {titleRest}</>}
                            </h1>

                            {description && (
                                <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-black">
                                    {description}
                                </p>
                            )}
                        </div>

                        {cta && (
                            <div className="group flex w-fit items-center gap-2 lg:justify-self-end lg:pb-1">
                                <Link
                                    href={cta.href}
                                    className="inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300  group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                                >
                                    {cta.label}
                                </Link>

                                <Link
                                    href={cta.href}
                                    aria-hidden
                                    tabIndex={-1}
                                    className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-400 text-black transition-colors duration-300  group-hover:text-white"
                                >
                                    <ArrowUpRight className="col-start-1 row-start-1 size-4 transition-[translate] duration-300 group-hover:-translate-y-11" />
                                    <ArrowUpRight className="col-start-1 row-start-1 size-4 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0" />
                                </Link>
                            </div>
                        )}
                    </div>

                    <div
                        className={
                            imageClassName ??
                            "relative mt-12 aspect-[16/10] overflow-hidden rounded-panel lg:mt-16 lg:aspect-[21/9]"
                        }
                    >
                        <Image
                            src={image}
                            alt=""
                            fill
                            priority
                            sizes="(min-width: 1024px) 80rem, 100vw"
                            className="object-cover object-center"
                        />
                    </div>
                </Container>
            </div>
        </section>
    );
}