import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import Button from "@/src/shared/components/ui/Button";
import Pill from "@/src/shared/components/ui/Pill";
import Accordion, { type AccordionItem } from "@/src/shared/components/ui/Accordion";

const CONTENT = {
    badge: "Etiqueta de la sección",
    title: "Titular de la sección",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    features: [
        "Primer atributo",
        "Segundo atributo",
        "Tercer atributo",
        "Cuarto atributo",
    ],
};

const ITEMS: readonly AccordionItem[] = [
    {
        key: "item-1",
        title: "Título del primer punto",
        content: "Descripción del punto — reemplázala con el texto propio.",
    },
    {
        key: "item-2",
        title: "Título del segundo punto",
        content: "Descripción del punto — reemplázala con el texto propio.",
    },
    {
        key: "item-3",
        title: "Título del tercer punto",
        content: "Descripción del punto — reemplázala con el texto propio.",
    },
];

export default function DataExtraction() {
    return (
        <section className="py-16 lg:py-24">
            <Container>
                <Badge>{CONTENT.badge}</Badge>

                <h2 className="mt-8 max-w-[18ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                    {CONTENT.title}
                </h2>

                <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
                    {/* columna izquierda */}
                    <div>
                        <p className="max-w-[52ch] text-[15px] leading-relaxed text-fg-muted">
                            {CONTENT.description}
                        </p>

                        <Button
                            href={CONTENT.cta.href}
                            variant="dark"
                            size="sm"
                            className="mt-8"
                        >
                            {CONTENT.cta.label}
                        </Button>
                    </div>

                    {/* columna derecha */}
                    <Accordion items={ITEMS} />
                </div>

                {/* píldoras */}
                <div className="mt-12 border-t border-border pt-10 lg:mt-16 lg:pt-12">
                    <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
                        {CONTENT.features.map((f) => (
                            <Pill key={f}>{f}</Pill>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}