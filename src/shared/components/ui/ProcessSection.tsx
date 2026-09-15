import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import NumberedCard, { type NumberedCardItem } from "./NumberedCard";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

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

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {steps.map((step) => (
                        <NumberedCard key={step.number} item={step} />
                    ))}
                </div>

                {cta && (
                    <div className="mt-12 flex items-center justify-center gap-2 lg:mt-14">
                        <Button href={cta.href} variant="dark" size="sm">
                            {cta.label}
                        </Button>
                        <span
                            aria-hidden
                            className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-800 text-accent"
                        >
              <ArrowUpRight className="size-4" />
            </span>
                    </div>
                )}
            </Container>
        </section>
    );
}