import Container from "./Container";
import Badge from "./Badge";
import ServiceCard, { type ServiceCardItem } from "./ServiceCard";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleRest?: string;
    items: readonly ServiceCardItem[];
    className?: string;
};

export default function ServicesGrid({
                                         badge,
                                         title,
                                         titleRest,
                                         items,
                                         className,
                                     }: Props) {
    return (
        <section className={cn("bg-gradient-to-b from-surface/40 to-bg py-16 lg:py-24", className)}>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Badge>{badge}</Badge>

                    <h2 className="mt-8 max-w-[24ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                        {title}
                        {titleRest && (
                            <>
                                <br />
                                {titleRest}
                            </>
                        )}
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                    {items.map((item) => (
                        <ServiceCard key={item.key} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}