import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import Button from "@/src/shared/components/ui/Button";
import Pill from "@/src/shared/components/ui/Pill";
import VideoEmbed from "@/src/shared/components/ui/VideoEmbed";
import QuoteCard, { type QuoteCardData } from "@/src/shared/components/ui/QuoteCard";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";

const CONTENT = {
    badge: "Why Us",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    description: "Párrafo de apoyo de la sección — reemplázalo con el texto propio.",
    features: [
        "Primer atributo",
        "Segundo atributo",
        "Tercer atributo",
        "Cuarto atributo",
        "Quinto atributo",
    ],
};

const VIDEO = {
    id: "AZzH9Y4uWh4",
    title: "Título del video — reemplázalo",
};

const QUOTE: QuoteCardData = {
    quote: "Cita del testimonio — reemplázala con el texto propio.",
    authorName: "Nombre de la persona",
    authorRole: "Cargo",
    authorImage: "/team/avatar.jpg",
    cta: { label: "Free Consultation", href: "/contact-us" },
};

const TEAM_IMAGE = "/about/team.jpg";

const JOIN_CARD = {
    title: "Título de la tarjeta de reclutamiento",
    year: "2025",
};

export default function WhyUs() {
    return (
        <section className="py-16 lg:py-24">
            <Container>
                <Badge>{CONTENT.badge}</Badge>

                <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* columna izquierda */}
                    <div>
                        <h2 className="max-w-[16ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                            {CONTENT.title}{" "}
                            <span className="text-accent">{CONTENT.titleAccent}</span>
                        </h2>

                        <div className="mt-8 flex items-center gap-2">
                            <Button href={CONTENT.cta.href} size="sm">
                                {CONTENT.cta.label}
                            </Button>
                            <span
                                aria-hidden
                                className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-800 text-white"
                            >
                <ArrowUpRight className="size-4" />
              </span>
                        </div>
                    </div>

                    {/* columna derecha */}
                    <div>
            <span
                aria-hidden
                className="grid size-14 place-items-center rounded-full bg-accent text-navy-800"
            >
              <StarIcon />
            </span>

                        <p className="mt-7 text-[15px] leading-relaxed text-fg-muted">
                            {CONTENT.description}
                        </p>
                    </div>
                </div>

                {/* píldoras */}
                <div className="mt-12 border-t border-border pt-10 lg:mt-16 lg:pt-12">
                    <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
                        {CONTENT.features.map((f) => (
                            <Pill key={f}>{f}</Pill>
                        ))}
                    </ul>
                </div>

                {/* video */}
                <VideoEmbed
                    videoId={VIDEO.id}
                    title={VIDEO.title}
                    className="mt-16 lg:mt-20"
                />

                {/* tarjetas */}
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <QuoteCard data={QUOTE} />

                    <div className="relative aspect-[3/4] overflow-hidden rounded-card md:aspect-auto">
                        <Image
                            src={TEAM_IMAGE}
                            alt=""
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="relative isolate flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-card bg-navy-800 p-7 lg:p-8">
                        <h3 className="max-w-[16ch] text-xl font-semibold leading-snug text-accent lg:text-2xl">
                            {JOIN_CARD.title}
                        </h3>

                        <span
                            aria-hidden
                            className="absolute -bottom-10 -right-6 -z-10 size-72 rounded-full bg-accent/85 blur-[1px]"
                        />

                        <div className="flex items-center gap-2 text-accent">
                            <span aria-hidden className="text-xl">✳</span>
                            <span className="text-xs">{JOIN_CARD.year}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function StarIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2.5c.4 0 .7.2.9.6l2.3 4.7 5.2.8c.4 0 .7.3.8.7.1.4 0 .8-.3 1l-3.8 3.7.9 5.2c.1.4-.1.8-.4 1a1 1 0 0 1-1 .1L12 17.9l-4.6 2.4a1 1 0 0 1-1-.1c-.3-.2-.5-.6-.4-1l.9-5.2-3.8-3.7a1 1 0 0 1-.3-1c.1-.4.4-.7.8-.7l5.2-.8 2.3-4.7c.2-.4.5-.6.9-.6Z" />
        </svg>
    );
}