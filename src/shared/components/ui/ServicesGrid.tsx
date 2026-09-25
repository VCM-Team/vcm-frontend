import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import ServiceCard, { type ServiceCardItem } from "./ServiceCard";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleRest?: string;
    items: readonly ServiceCardItem[];
    cta?: { label: string; href: string };
    /** "dark" (por defecto) o "light": solo cambia fondo, titular y badge. */
    variant?: "dark" | "light";
    className?: string;
};

// Entrada al hacer scroll: RevealSection pone data-inview y group/reveal
const REVEAL =
    "opacity-0 translate-y-8 transition-[opacity,translate] duration-700 ease-out group-data-[inview=true]/reveal:translate-y-0 group-data-[inview=true]/reveal:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none";

export default function ServicesGrid({
                                         badge,
                                         title,
                                         titleRest,
                                         items,
                                         cta,
                                         variant = "dark",
                                         className,
                                     }: Props) {
    const isLight = variant === "light";

    return (
        <RevealSection
            className={cn(
                "py-20 lg:py-28",
                isLight ? "bg-[#F0F0F0]" : "bg-ink-900",
                className
            )}
        >
            <Container>
                <div className={cn("flex flex-col items-center text-center", REVEAL)}>
                    <Badge
                        className={cn(
                            "bg-transparent",
                            isLight
                                ? "border-ink-900 text-ink-900"
                                : "border-brand-400 text-brand-400"
                        )}
                    >
                        {badge}
                    </Badge>

                    <h2
                        className={cn(
                            "mt-7 max-w-[24ch] text-3xl font-semibold leading-[1.25] sm:text-4xl lg:text-[2.5rem]",
                            isLight ? "text-ink-900" : "text-white"
                        )}
                    >
                        {title}
                        {titleRest && (
                            <>
                                <br />
                                {titleRest}
                            </>
                        )}
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                    {items.map((item, i) => (
                        <div
                            key={item.key}
                            className={cn("h-full", REVEAL)}
                            style={{ transitionDelay: `${150 + i * 100}ms` }}
                        >
                            <ServiceCard item={item} />
                        </div>
                    ))}
                </div>

                {cta && (
                    <div className={cn("mt-14 flex justify-center", REVEAL, "delay-500")}>
                        <Link
                            href={cta.href}
                            className="rounded-full bg-brand-400 px-7 py-3 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white"
                        >
                            {cta.label}
                        </Link>
                    </div>
                )}
            </Container>
        </RevealSection>
    );
}