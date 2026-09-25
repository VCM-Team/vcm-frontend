import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const CONTENT = {
    badge: "Culture & Community",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada del titular",
    paragraphs: [
        "Primer párrafo de la sección — reemplázalo con el texto propio.",
        "Segundo párrafo de la sección — reemplázalo con el texto propio.",
        "Tercer párrafo de la sección — reemplázalo con el texto propio.",
    ],
};

const PARAGRAPH_STAGGER_MS = 120;

export default function Culture() {
    return (
        <RevealSection className="overflow-x-clip py-16 lg:py-24">
            <Container>
                <div className={REVEAL.down}>
                    <Badge>{CONTENT.badge}</Badge>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                    <h2
                        className={cn(
                            "max-w-[16ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]",
                            REVEAL.up,
                            "delay-100"
                        )}
                    >
                        {CONTENT.title}{" "}
                        <span className="text-accent">{CONTENT.titleAccent}</span>
                    </h2>

                    <div className="space-y-5 lg:pt-2">
                        {CONTENT.paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className={cn("text-[15px] leading-relaxed text-fg-muted", REVEAL.right)}
                                style={{ transitionDelay: `${250 + i * PARAGRAPH_STAGGER_MS}ms` }}
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </RevealSection>
    );
}