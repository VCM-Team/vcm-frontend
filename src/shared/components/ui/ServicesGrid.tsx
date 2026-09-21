import Link from "next/link";
import Container from "./Container";
import Badge from "./Badge";
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
        <section
            className={cn(
                "py-20 lg:py-28",
                isLight ? "bg-[#F0F0F0]" : "bg-ink-900",
                className
            )}
        >
            <Container>
                <div className="flex flex-col items-center text-center">
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
                    {items.map((item) => (
                        <ServiceCard key={item.key} item={item} />
                    ))}
                </div>

                {cta && (
                    <div className="mt-14 flex justify-center">
                        <Link
                            href={cta.href}
                            className="rounded-full bg-brand-400 px-7 py-3 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white"
                        >
                            {cta.label}
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
}