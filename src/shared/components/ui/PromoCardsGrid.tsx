import Container from "./Container";
import PromoCard, { type PromoCardItem } from "./PromoCard";
import { cn } from "@/src/lib/utils";

type Props = {
    items: readonly PromoCardItem[];
    className?: string;
};

export default function PromoCardsGrid({ items, className }: Props) {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-6">
                    {items.map((item) => (
                        <PromoCard key={item.key} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}