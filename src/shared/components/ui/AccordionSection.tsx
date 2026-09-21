import Container from "./Container";
import Badge from "./Badge";
import Pill from "./Pill";
import Accordion, { type AccordionItem } from "./Accordion";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    /** Texto que va DESPUÉS del acento, para acentos en medio del titular. */
    titleRest?: string;
    description: string;
    cta?: { label: string; href: string };
    items: readonly AccordionItem[];
    features?: readonly string[];
    className?: string;
};

export default function AccordionSection({
                                             badge,
                                             title,
                                             titleAccent,
                                             titleRest,
                                             description,
                                             cta,
                                             items,
                                             features,
                                             className,
                                         }: Props) {
    const withFeatures = Boolean(features?.length);

    return (
        <section className={cn("py-16 lg:py-24 bg--color--bg", className)}>
            <Container>
                <Badge>{badge}</Badge>

                <h2 className="mt-7 max-w-[16ch] text-4xl font-bold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-[3.25rem]">
                    {title}
                    {titleAccent && (
                        <>
                            {" "}
                            <span className="text-brand-400">{titleAccent}</span>
                        </>
                    )}
                    {titleRest && <> {titleRest}</>}
                </h2>

                <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-20">
                    {/* columna izquierda */}
                    <div>
                        <p className="max-w-[48ch] text-base leading-[1.75] text-fg-muted">
                            {description}
                        </p>

                        {cta && (
                            <Link
                                href={cta.href}
                                className="mt-9 inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300  hover:text-white"
                            >
                                {cta.label}
                            </Link>
                        )}
                    </div>

                    {/* columna derecha */}
                    <Accordion items={items} />
                </div>

                {withFeatures && features && (
                    <div
                        className={cn(
                            "mt-12 lg:mt-16",
                            cta && "border-t border-border pt-10 lg:pt-12"
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