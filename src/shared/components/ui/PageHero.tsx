import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
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
                            <div className="flex items-center gap-2 lg:justify-end lg:pb-1">
                                <Button href={cta.href} variant="accent" size="sm">
                                    {cta.label}
                                </Button>
                                <span
                                    aria-hidden
                                    className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-400 text-black"
                                >
                                    <ArrowUpRight className="size-4" />
                                </span>
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