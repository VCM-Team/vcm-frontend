import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import IconCard, { type IconCardItem } from "@/src/shared/components/ui/IconCard";

const HEADING = {
    badge: "Etiqueta de la sección",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    titleRest: "cierre del titular",
};

const ITEMS: readonly IconCardItem[] = [
    {
        key: "problem-solvers",
        title: "Título del primer atributo",
        description: "Descripción del atributo — reemplázala con el texto propio.",
        Icon: BrainIcon,
    },
    {
        key: "fast-learner",
        title: "Título del segundo atributo",
        description: "Descripción del atributo — reemplázala con el texto propio.",
        Icon: BookIcon,
    },
    {
        key: "english",
        title: "Título del tercer atributo",
        description: "Descripción del atributo — reemplázala con el texto propio.",
        Icon: ChatIcon,
    },
    {
        key: "customer-focused",
        title: "Título del cuarto atributo",
        description: "Descripción del atributo — reemplázala con el texto propio.",
        Icon: HandIcon,
    },
];

export default function WhoWeLookFor() {
    return (
        <section className="py-16 lg:py-24">
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Badge>{HEADING.badge}</Badge>

                    <h2 className="mt-8 max-w-[20ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                        {HEADING.title}{" "}
                        <span className="text-accent">{HEADING.titleAccent}</span>{" "}
                        {HEADING.titleRest}
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {ITEMS.map((item) => (
                        <IconCard key={item.key} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function BrainIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M12 5a3 3 0 0 0-3 3 2.5 2.5 0 0 0-1 4.8V15a3 3 0 0 0 4 2.8A3 3 0 0 0 16 15v-2.2A2.5 2.5 0 0 0 15 8a3 3 0 0 0-3-3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M12 5v13" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    );
}

function BookIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M5 5.5A1.5 1.5 0 0 1 6.5 4H18v16H6.5A1.5 1.5 0 0 1 5 18.5v-13Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M5 17h13" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    );
}

function ChatIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-5 4V6.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function HandIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path
                d="M3 16.5c2-1.5 4-1 6 0h4l-3.5-.5M21 14c-2.5 1.5-5 3.5-7 4.5-1.5.8-3.5.5-5-.5l-6-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}