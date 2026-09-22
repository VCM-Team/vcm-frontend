import Container from "./Container";
import Badge from "./Badge";
import Accordion, { type AccordionItem } from "./Accordion";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    items: readonly AccordionItem[];
    /** "light" (por defecto) o "dark". */
    variant?: "light" | "dark";
    className?: string;
};

export default function FaqSection({
                                       badge,
                                       title,
                                       titleAccent,
                                       items,
                                       variant = "light",
                                       className,
                                   }: Props) {
    const isDark = variant === "dark";

    return (
        <section className={cn("py-16 lg:py-24", isDark && "bg-ink-900", className)}>
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col items-center text-center">
                        <Badge
                            className={cn(
                                isDark && "border-brand-400 bg-transparent text-brand-400"
                            )}
                        >
                            {badge}
                        </Badge>

                        <h2
                            className={cn(
                                "mt-8 text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
                                isDark ? "text-white" : "text-fg"
                            )}
                        >
                            {title}
                            {titleAccent && (
                                <>
                                    {" "}
                                    <span className={isDark ? "text-brand-400" : "text-accent"}>
                                        {titleAccent}
                                    </span>
                                </>
                            )}
                        </h2>
                    </div>

                    <Accordion
                        items={items}
                        variant={variant}
                        className="mt-12 lg:mt-14"
                    />
                </div>
            </Container>
        </section>
    );
}