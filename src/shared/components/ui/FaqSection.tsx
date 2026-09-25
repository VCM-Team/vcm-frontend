import Container from "./Container";
import Badge from "./Badge";
import RevealSection from "./RevealSection";
import Accordion, { type AccordionItem } from "./Accordion";
import { REVEAL } from "@/src/lib/reveal";
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
        <RevealSection className={cn("py-16 lg:py-24", isDark && "bg-ink-900", className)}>
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col items-center text-center">
                        <div className={REVEAL.fade}>
                            <Badge className={cn(isDark && "border-brand-400 bg-transparent text-brand-400")}>
                                {badge}
                            </Badge>
                        </div>

                        <h2
                            className={cn(
                                "mt-8 text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
                                isDark ? "text-white" : "text-fg",
                                REVEAL.zoomIn,
                                "delay-100"
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

                    {/* El margen pasa al wrapper, que es quien anima */}
                    <div className={cn("mt-12 lg:mt-14", REVEAL.blur, "translate-y-6 delay-200")}>
                        <Accordion items={items} variant={variant} />
                    </div>
                </div>
            </Container>
        </RevealSection>
    );
}