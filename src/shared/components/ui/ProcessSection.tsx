import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import NumberedCard, { type NumberedCardItem } from "./NumberedCard";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    steps: readonly NumberedCardItem[];
    cta?: { label: string; href: string };
    className?: string;
};

export default function ProcessSection({
                                           badge,
                                           title,
                                           titleAccent,
                                           steps,
                                           cta,
                                           className,
                                       }: Props) {
    return (
        <section className={cn("bg-gradient-to-b from-surface/50 to-bg py-16 lg:py-24", className)}>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Badge>{badge}</Badge>

                    <h2 className="mt-8 max-w-[20ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                        {title}
                        {titleAccent && (
                            <>
                                {" "}
                                <span className="text-accent">{titleAccent}</span>
                            </>
                        )}
                    </h2>
                </div>

                <div className="mt-14 flex flex-wrap justify-center gap-5 lg:mt-16">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
                        >
                            <NumberedCard item={step} />
                        </div>
                    ))}
                </div>

                {cta && (
                    <div className="mt-12 flex justify-center lg:mt-14">
                        <div className="group flex w-fit items-center gap-2">
                            <Link
                                href={cta.href}
                                className="inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300  group-hover:text-white"
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
                                <ArrowUpRight
                                    aria-hidden
                                    className="col-start-1 row-start-1 size-4 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0"
                                />
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}