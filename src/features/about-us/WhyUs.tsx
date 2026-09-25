import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import Button from "@/src/shared/components/ui/Button";
import Pill from "@/src/shared/components/ui/Pill";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import VideoEmbed from "@/src/shared/components/ui/VideoEmbed";
import QuoteCard, { type QuoteCardData } from "@/src/shared/components/ui/QuoteCard";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const CONTENT = {
    badge: "Why Us",
    title: "More Than a Staffing Partner,",
    titleAccent: "A Growth Partner",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    description:
        "Most companies don’t need more people first, they need a clearer way of working. We start by understanding what is holding your business back, then design the processes, accountability and systems it needs, and only then add dedicated talent from our offices in Lima to execute. The result is a team that works inside your tools, follows your standards and helps your business grow without losing control.",
    features: [
        "Strategy First",
        "Systems That Scale",
        "Dedicated Talent",
        "Nearshore from Lima",
        "Ongoing Support",
    ],
};

const VIDEO = {
    src: "https://res.cloudinary.com/dca79rb3c/video/upload/v1789757625/Work_Ninjas_Scalable_Back_Office_Solutions_for_Roofing_Contractors_Beyond_vnduhs.mp4",
    poster: "/assets/images/video/thumbnail.webp",
    title: "This is VCM",
};

// PLACEHOLDER: cita de ejemplo, confirmar el texto con Victor Alvarado antes de publicar
const QUOTE: QuoteCardData = {
    quote: "“We don’t start by adding people. We start by understanding your business, fixing what slows it down and then building the team that helps it grow.”",
    authorName: "Victor Alvarado",
    authorRole: "CEO",
    authorImage: "https://workninjas.com/wp-content/uploads/2025/06/Mask-group-1.jpg",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
};

const TEAM_IMAGE = "https://workninjas.com/wp-content/uploads/2025/06/Mask-group.jpg";

const JOIN_CARD = {
    title: "Join a team in Lima helping U.S. construction companies grow.",
    year: "2026",
};

export default function WhyUs() {
    return (
        <section className="overflow-x-clip py-16 lg:py-24">
            <Container>
                {/* ── Bloque 1: encabezado, columnas y píldoras ── */}
                <RevealSection>
                    <div className={REVEAL.fade}>
                        <Badge>{CONTENT.badge}</Badge>
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* columna izquierda */}
                        <div>
                            <h2
                                className={cn(
                                    "max-w-[16ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]",
                                    REVEAL.left,
                                    "delay-100"
                                )}
                            >
                                {CONTENT.title}{" "}
                                <span className="text-accent">{CONTENT.titleAccent}</span>
                            </h2>

                            <div className={cn("mt-8 flex items-center gap-2", REVEAL.up, "delay-200")}>
                                <Button href={CONTENT.cta.href} size="sm" variant="accent">
                                    {CONTENT.cta.label}
                                </Button>
                                <span
                                    aria-hidden
                                    className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-400 text-black"
                                >
                                    <ArrowUpRight className="size-4" />
                                </span>
                            </div>
                        </div>

                        {/* columna derecha */}
                        <div>
                            <span
                                aria-hidden
                                className={cn(
                                    "grid size-12 place-items-center rounded-full bg-brand-400 text-navy-800",
                                    REVEAL.zoomIn,
                                    "delay-200"
                                )}
                            >
                                <StarIcon />
                            </span>

                            <p
                                className={cn(
                                    "mt-7 text-[15px] leading-relaxed text-fg-muted",
                                    REVEAL.blur,
                                    "delay-300"
                                )}
                            >
                                {CONTENT.description}
                            </p>
                        </div>
                    </div>

                    {/* píldoras */}
                    <div className="my-12 border-t border-border pt-10 lg:mt-16 lg:pt-12">
                        <ul
                            className={cn(
                                "mx-auto flex max-w-5xl flex-wrap justify-center gap-3",
                                REVEAL.up,
                                "delay-[400ms]"
                            )}
                        >
                            {CONTENT.features.map((f) => (
                                <Pill key={f}>{f}</Pill>
                            ))}
                        </ul>
                    </div>
                </RevealSection>

                {/* ── Bloque 2: video ── */}
                <RevealSection>
                    <VideoEmbed
                        src={VIDEO.src}
                        poster={VIDEO.poster}
                        title={VIDEO.title}
                        className={cn(REVEAL.zoomIn, "duration-1000")}
                    />
                </RevealSection>

                {/* ── Bloque 3: tarjetas ── */}
                <RevealSection className="mt-24 grid gap-6 md:grid-cols-3">
                    <div className={cn("[&>*]:h-full", REVEAL.left)}>
                        <QuoteCard data={QUOTE} />
                    </div>

                    <div
                        className={cn(
                            "relative aspect-[3/4] overflow-hidden rounded-bl-[2rem] rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-none md:aspect-auto",
                            REVEAL.up,
                            "delay-150"
                        )}
                    >
                        <Image
                            src={TEAM_IMAGE}
                            alt=""
                            fill
                            sizes="(min-width: 768px) 33vw, 100vw"
                            className={cn("object-cover", REVEAL.zoomOut, "duration-[1200ms] delay-150")}
                        />
                    </div>

                    <div
                        className={cn(
                            "relative isolate flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-bl-[2rem] rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-none bg-accent p-7 lg:p-8",
                            REVEAL.right,
                            "delay-300"
                        )}
                    >
                        <JoinShape />

                        <h3 className="max-w-[20ch] text-xl font-bold leading-snug text-black lg:text-[1.375rem]">
                            {JOIN_CARD.title}
                        </h3>

                        <span className="text-xs font-semibold text-black">
                            {JOIN_CARD.year}
                        </span>
                    </div>
                </RevealSection>
            </Container>
        </section>
    );
}

function StarIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2.5c.4 0 .7.2.9.6l2.3 4.7 5.2.8c.4 0 .7.3.8.7.1.4 0 .8-.3 1l-3.8 3.7.9 5.2c.1.4-.1.8-.4 1a1 1 0 0 1-1 .1L12 17.9l-4.6 2.4a1 1 0 0 1-1-.1c-.3-.2-.5-.6-.4-1l.9-5.2-3.8-3.7a1 1 0 0 1-.3-1c.1-.4.4-.7.8-.7l5.2-.8 2.3-4.7c.2-.4.5-.6.9-.6Z" />
        </svg>
    );
}

/* Silueta de la V, recortada por la tarjeta */
function JoinShape() {
    return (
        <svg
            aria-hidden
            viewBox="60 75 270 325"
            fill="none"
            className="pointer-events-none absolute -bottom-10 -right-16 -z-10 h-[70%] w-auto"
        >
            <path
                d="M271.594 348.019L245.022 394.006L75.6697 165.223C67.0856 153.613 66.2016 138.081 73.4139 125.599L97.9168 83.192L269.039 308.003C277.877 319.628 278.882 335.405 271.575 348.052L271.594 348.019Z"
                fill="rgb(255 255 255 / 0.28)"
            />
            <path
                d="M295.361 148.515L322.37 101.772L124.288 81.5764L186.599 159.525L260.582 166.467C274.684 167.769 288.282 160.767 295.361 148.515Z"
                fill="rgb(255 255 255 / 0.28)"
            />
        </svg>
    );
}