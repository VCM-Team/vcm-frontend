import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

// Hechos del dossier: equipo presencial en Lima (Surco), clientes de construcción en EE. UU.,
// inglés en el día a día, trabajo basado en procesos y crecimiento a 50+ posiciones.
// PLACEHOLDER: el tono sobre colaboración y aprendizaje es de ejemplo, confirmar.
const CONTENT = {
    badge: "Culture & Community",
    title: "A Team That Grows",
    titleAccent: "Together",
    paragraphs: [
        "Our team works side by side from our offices in Lima, Peru, supporting U.S. construction and roofing companies every day. Working in person means we learn from each other, solve problems faster and build real relationships across the team.",
        "We believe good work starts with clear processes. Everyone knows what they own, how it gets done and who to ask, which gives each person the confidence to take on more responsibility over time.",
        "In a few years we have grown from a small group into a team of more than 50 positions. As VCM grows, so do the opportunities for our people to develop new skills, improve their English and move into new roles.",
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