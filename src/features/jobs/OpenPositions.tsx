import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";

const CONTENT = {
    badge: "Open Positions",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    titleRest: "cierre del titular",
    description: "Párrafo de apoyo de la sección — reemplázalo con el texto propio.",
};

const POSITIONS = [
    { key: "puesto-1", title: "Nombre del puesto", href: "#" },
    { key: "puesto-2", title: "Nombre del puesto", href: "#" },
    { key: "puesto-3", title: "Nombre del puesto", href: "#" },
];

export default function OpenPositions() {
    return (
        <section
            id="open-positions"
            className="relative isolate mx-3 overflow-hidden rounded-panel bg-navy-800 lg:mx-4"
        >
            {/* forma decorativa de fondo */}
            <span
                aria-hidden
                className="absolute -left-24 top-1/2 -z-10 size-[30rem] -translate-y-1/2 rounded-full bg-white/[0.03]"
            />

            <Container className="py-14 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* texto */}
                    <div>
                        <Badge className="border-white/30 bg-transparent text-white">
                            {CONTENT.badge}
                        </Badge>

                        <h2 className="mt-8 max-w-[14ch] text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
                            {CONTENT.title}{" "}
                            <span className="text-accent">{CONTENT.titleAccent}</span>{" "}
                            {CONTENT.titleRest}
                        </h2>

                        <p className="mt-8 max-w-[52ch] text-[15px] leading-relaxed text-white/85">
                            {CONTENT.description}
                        </p>
                    </div>

                    {/* listado */}
                    <ul className="flex flex-col gap-4 lg:justify-center">
                        {POSITIONS.map((p) => (
                            <li key={p.key}>
                                <div className="rounded-card border border-white/15 px-6 py-5 transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.04]">
                                    <h3 className="text-lg font-semibold text-white">
                                        {p.title}
                                    </h3>
                                    <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.08em] text-white/80">
                    Read more »
                  </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}