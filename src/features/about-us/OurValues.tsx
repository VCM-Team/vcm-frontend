import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import NumberedCard, {
    type NumberedCardItem,
} from "@/src/shared/components/ui/NumberedCard";

const HEADING = {
    badge: "Our Values",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    titleRest: "cierre del titular",
    description:
        "Párrafo de apoyo de la sección — reemplázalo con el texto propio.",
};

const VALUES: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Título del primer valor",
        description: "Descripción del valor — reemplázala.",
    },
    {
        number: "02",
        title: "Título del segundo valor",
        description: "Descripción del valor — reemplázala.",
    },
    {
        number: "03",
        title: "Título del tercer valor",
        description: "Descripción del valor — reemplázala.",
    },
    {
        number: "04",
        title: "Título del cuarto valor",
        description: "Descripción del valor — reemplázala.",
    },
];

export default function OurValues() {
    return (
        <section className="py-16 lg:py-24">
            <Container>
                <Badge>{HEADING.badge}</Badge>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                    <h2 className="max-w-[18ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                        {HEADING.title}{" "}
                        <span className="text-accent">{HEADING.titleAccent}</span>{" "}
                        {HEADING.titleRest}
                    </h2>

                    <p className="text-[15px] leading-relaxed text-fg-muted lg:pt-2">
                        {HEADING.description}
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {VALUES.map((item) => (
                        <NumberedCard key={item.number} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}