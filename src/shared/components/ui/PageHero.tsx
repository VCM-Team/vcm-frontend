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

// Siempre visible al cargar: basta con @starting-style (variante starting:), sin RevealSection
const ENTER =
    "transition-[opacity,translate,scale] duration-700 ease-out motion-reduce:transition-none";
const ENTER_ZOOM = `${ENTER} starting:scale-90 starting:opacity-0`;
const ENTER_LEFT = `${ENTER} starting:-translate-x-8 starting:opacity-0`;
const ENTER_RIGHT = `${ENTER} starting:translate-x-8 starting:opacity-0`;
const ENTER_FADE = `${ENTER} starting:opacity-0`;

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
                    <div className={cn("w-fit", ENTER_ZOOM)}>
                        <Badge>{badge}</Badge>
                    </div>

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
                                    cta ? "max-w-[24ch]" : "max-w-[32ch]",
                                    ENTER_LEFT,
                                    "delay-100"
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
                                <p
                                    className={cn(
                                        "mt-6 max-w-[48ch] text-[15px] leading-relaxed text-black",
                                        ENTER_FADE,
                                        "delay-200"
                                    )}
                                >
                                    {description}
                                </p>
                            )}
                        </div>

                        {cta && (
                            <div
                                className={cn(
                                    "group flex w-fit items-center gap-2 lg:justify-self-end lg:pb-1",
                                    ENTER_RIGHT,
                                    "delay-300"
                                )}
                            >
                                <Link
                                    href={cta.href}
                                    className="inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                                >
                                    {cta.label}
                                </Link>

                                <Link
                                    href={cta.href}
                                    aria-hidden
                                    tabIndex={-1}
                                    className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-400 text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
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
                        {/* Animación en la Image: sobrevive aunque imageClassName reemplace el contenedor */}
                        <Image
                            src={image}
                            alt=""
                            fill
                            priority
                            sizes="(min-width: 1024px) 80rem, 100vw"
                            className="object-cover object-center transition-[opacity,scale] duration-[1200ms] ease-out delay-200 starting:scale-105 starting:opacity-0 motion-reduce:transition-none"
                        />
                    </div>
                </Container>
            </div>
        </section>
    );
}