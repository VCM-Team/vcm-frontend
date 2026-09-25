import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import Carousel from "@/src/shared/components/ui/Carousel";
import PersonCard from "@/src/shared/components/ui/PersonCard";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { LEADERSHIP, TEAM_MEMBERS } from "@/src/shared/data/team.data";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HEADING = {
    badge: "Our People",
    title: "Behind the Work",
    titleAccent: "The People",
    description: "Our team is made up of seasoned business professionals with extensive experience in entrepreneurship, finance, analytics, strategy, and consulting. We are dedicated to leveraging our knowledge and skills to support and guide aspiring entrepreneurs, helping them navigate challenges and achieve success.",
};

const GROUPS = {
    leadership: "Leadership",
    team: "Team",
};

// Línea divisoria que se dibuja de izquierda a derecha
const LINE_DRAW =
    "origin-left scale-x-0 transition-[scale] duration-700 ease-out group-data-[inview=true]/reveal:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none";

// Las tarjetas del equipo alternan entrada; el retraso va por columna (4 en desktop)
const TEAM_VARIANTS = [REVEAL.up, REVEAL.zoomIn] as const;
const TEAM_COLUMNS = 4;

export default function OurPeople() {
    return (
        <section className="overflow-x-clip py-16 lg:py-24">
            {/* ── Encabezado ── */}
            <RevealSection>
                <Container>
                    <div className={REVEAL.fade}>
                        <Badge>{HEADING.badge}</Badge>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                        <h2
                            className={cn(
                                "max-w-[16ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]",
                                REVEAL.left,
                                "delay-100"
                            )}
                        >
                            <span className="text-accent">{HEADING.titleAccent}</span>
                            <br />
                            {HEADING.title}
                        </h2>

                        <p
                            className={cn(
                                "text-[15px] leading-relaxed text-fg-muted lg:pt-2",
                                REVEAL.blur,
                                "delay-200"
                            )}
                        >
                            {HEADING.description}
                        </p>
                    </div>
                </Container>
            </RevealSection>

            <div className="mt-14 bg-surface/40 py-14 lg:mt-20 lg:py-16">
                <Container>
                    {/* ── Leadership: carrusel ── */}
                    <RevealSection>
                        <div className={cn("w-fit", REVEAL.zoomIn)}>
                            <Badge>{GROUPS.leadership}</Badge>
                        </div>

                        {/* El carrusel sube en bloque: sin entradas laterales dentro de su track */}
                        <div className={cn("mt-6", REVEAL.up, "delay-150")}>
                            <Carousel itemCount={LEADERSHIP.length} label={GROUPS.leadership}>
                                {LEADERSHIP.map((member) => (
                                    <div
                                        key={member.slug}
                                        className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-3.75rem)/4)]"
                                    >
                                        <PersonCard
                                            member={member}
                                            href={`/about-us/team/${member.slug}`}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        <hr className={cn("my-12 border-border lg:my-16", LINE_DRAW, "delay-500")} />
                    </RevealSection>

                    {/* ── Team: grid ── */}
                    <RevealSection>
                        <div className={cn("w-fit", REVEAL.zoomIn)}>
                            <Badge>{GROUPS.team}</Badge>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {TEAM_MEMBERS.map((member, i) => (
                                <div
                                    key={member.slug}
                                    className={cn("h-full", TEAM_VARIANTS[i % TEAM_VARIANTS.length])}
                                    style={{ transitionDelay: `${150 + (i % TEAM_COLUMNS) * 100}ms` }}
                                >
                                    <PersonCard member={member} />
                                </div>
                            ))}
                        </div>
                    </RevealSection>
                </Container>
            </div>
        </section>
    );
}