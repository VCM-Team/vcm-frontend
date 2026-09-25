"use client";

import Container from "./Container";
import PromoCard, { type PromoCardItem } from "./PromoCard";
import { useInView } from "@/src/shared/hooks/useInView";
import { cn } from "@/src/lib/utils";

type Props = {
    items: readonly PromoCardItem[];
    className?: string;
};

// Entrada al hacer scroll: el <section> lleva data-inview y group/reveal
const REVEAL_BASE =
    "h-full opacity-0 transition-[opacity,translate,scale] duration-700 ease-out group-data-[inview=true]/reveal:translate-x-0 group-data-[inview=true]/reveal:translate-y-0 group-data-[inview=true]/reveal:scale-100 group-data-[inview=true]/reveal:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none";

// Una animación distinta por posición: izquierda, abajo con zoom, derecha
const REVEAL_VARIANTS = [
    "-translate-x-12",
    "translate-y-12 scale-95 delay-150",
    "translate-x-12 delay-300",
] as const;

export default function PromoCardsGrid({ items, className }: Props) {
    const { ref, inView } = useInView<HTMLElement>();

    return (
        <section
            ref={ref}
            data-inview={inView}
            className={cn("group/reveal overflow-x-clip py-16 lg:py-24", className)}
        >
            <Container>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-6">
                    {items.map((item, i) => (
                        <div
                            key={item.key}
                            className={cn(REVEAL_BASE, REVEAL_VARIANTS[i % REVEAL_VARIANTS.length])}
                        >
                            <PromoCard item={item} className="h-full" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}