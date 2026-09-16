import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import Pill from "./Pill";
import Accordion, { type AccordionItem } from "./Accordion";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    description: string;
    cta?: { label: string; href: string };
    /** Pasa false para ocultar el botón. */
    showCta?: boolean;
    items: readonly AccordionItem[];
    features?: readonly string[];
    /** Pasa false para ocultar las píldoras y su línea separadora. */
    showFeatures?: boolean;
    className?: string;
};

export default function AccordionSection({
                                             badge,
                                             title,
                                             titleAccent,
                                             description,
                                             cta,
                                             showCta = true,
                                             items,
                                             features,
                                             showFeatures = true,
                                             className,
                                         }: Props) {
    const withCta = showCta && Boolean(cta);
    const withFeatures = showFeatures && Boolean(features?.length);

    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <Badge>{badge}</Badge>

                <h2 className="mt-8 max-w-[18ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                    {title}
                    {titleAccent && (
                        <>
                            {" "}
                            <span className="text-accent">{titleAccent}</span>
                        </>
                    )}
                </h2>

                <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
                    {/* columna izquierda */}
                    <div>
                        <p className="max-w-[52ch] text-[15px] leading-relaxed text-fg-muted">
                            {description}
                        </p>

                        {withCta && cta && (
                            <Button href={cta.href} variant="dark" size="sm" className="mt-8">
                                {cta.label}
                            </Button>
                        )}
                    </div>

                    {/* columna derecha */}
                    <Accordion items={items} />
                </div>

                {withFeatures && features && (
                    <div
                        className={cn(
                            "mt-12 lg:mt-16",
                            withCta && "border-t border-border pt-10 lg:pt-12"
                        )}
                    >
                        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
                            {features.map((f) => (
                                <Pill key={f}>{f}</Pill>
                            ))}
                        </ul>
                    </div>
                )}
            </Container>
        </section>
    );
}