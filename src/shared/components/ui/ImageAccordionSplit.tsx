import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
import Accordion, { type AccordionItem } from "./Accordion";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleRest?: string;
    image: string;
    items: readonly AccordionItem[];
    className?: string;
};

export default function ImageAccordionSplit({
                                                badge,
                                                title,
                                                titleRest,
                                                image,
                                                items,
                                                className,
                                            }: Props) {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <Badge>{badge}</Badge>

                <h2 className="mt-8 max-w-[26ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                    {title}
                    {titleRest && (
                        <>
                            <br />
                            {titleRest}
                        </>
                    )}
                </h2>

                <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
                    {/* imagen */}
                    <div className="relative aspect-square">
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-contain"
                        />
                    </div>

                    {/* acordeón */}
                    <Accordion items={items} />
                </div>
            </Container>
        </section>
    );
}