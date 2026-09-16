import Container from "./Container";
import Badge from "./Badge";
import Accordion, { type AccordionItem } from "./Accordion";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    items: readonly AccordionItem[];
    className?: string;
};

export default function FaqSection({
                                       badge,
                                       title,
                                       titleAccent,
                                       items,
                                       className,
                                   }: Props) {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col items-center text-center">
                        <Badge>{badge}</Badge>

                        <h2 className="mt-8 text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                            {title}
                            {titleAccent && (
                                <>
                                    {" "}
                                    <span className="text-accent">{titleAccent}</span>
                                </>
                            )}
                        </h2>
                    </div>

                    <Accordion items={items} className="mt-12 lg:mt-14" />
                </div>
            </Container>
        </section>
    );
}