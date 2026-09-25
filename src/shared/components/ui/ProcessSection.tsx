import Container from "./Container";
import Badge from "./Badge";
import RevealSection from "./RevealSection";
import NumberedCard, { type NumberedCardItem } from "./NumberedCard";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { REVEAL } from "@/src/lib/reveal";
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

// Los pasos entran en orden, como si el proceso avanzara
const STEP_STAGGER_MS = 150;

export default function ProcessSection({
                                           badge,
                                           title,
                                           titleAccent,
                                           steps,
                                           cta,
                                           className,
                                       }: Props) {
    return (
        <RevealSection className={cn("overflow-x-clip bg-bg from-surface/50 to-bg py-16 lg:py-24", className)}>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <div className={REVEAL.zoomIn}>
                        <Badge>{badge}</Badge>
                    </div>

                    <h2
                        className={cn(
                            "mt-8 max-w-[20ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]",
                            REVEAL.up,
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
                    </h2>
                </div>

                <div className="mt-14 flex flex-wrap justify-center gap-5 lg:mt-16">
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            className={cn(
                                "w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]",
                                REVEAL.left
                            )}
                            style={{ transitionDelay: `${250 + i * STEP_STAGGER_MS}ms` }}
                        >
                            <NumberedCard item={step} />
                        </div>
                    ))}
                </div>

                {cta && (
                    <div
                        className={cn("mt-12 flex justify-center lg:mt-14", REVEAL.zoomIn)}
                        style={{ transitionDelay: `${350 + steps.length * STEP_STAGGER_MS}ms` }}
                    >
                        <div className="group flex w-fit items-center gap-2">
                            <Link
                                href={cta.href}
                                className="inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
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
                                <ArrowUpRight
                                    aria-hidden
                                    className="col-start-1 row-start-1 size-4 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0"
                                />
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </RevealSection>
    );
}