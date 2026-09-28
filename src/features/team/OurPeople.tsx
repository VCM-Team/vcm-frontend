import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import PersonCard from "@/src/shared/components/ui/PersonCard";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { LEADERSHIP } from "@/src/shared/data/team.data";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HEADING = {
    badge: "Our People",
    title: "Behind the Work",
    titleAccent: "The People",
    description: "Our team is made up of seasoned business professionals with extensive experience in entrepreneurship, finance, analytics, strategy, and consulting. We are dedicated to leveraging our knowledge and skills to support and guide aspiring entrepreneurs, helping them navigate challenges and achieve success.",
};

const GROUPS = {
    leadership: "VCM Team",
    team: "Marketing Area",
};

// Línea divisoria que se dibuja de izquierda a derecha
const LINE_DRAW =
    "origin-left scale-x-0 transition-[scale] duration-700 ease-out group-data-[inview=true]/reveal:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none";

// Los dos grids usan 4 columnas en desktop; el retraso va por columna
const GRID_COLUMNS = 4;
const VCM_TEAM_VARIANTS = [REVEAL.blur, REVEAL.up] as const;
const MARKETING_VARIANTS = [REVEAL.up, REVEAL.zoomIn] as const;

export default function OurPeople() {
    return (
        <section className="overflow-x-clip py-16 lg:py-24 bg-[#F0F0F0]">
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

            <div className="mt-14  py-14 bg-[#F0F0F0] lg:mt-20 lg:py-16">
                <Container>
                    {/* ── VCM Team: grid con enlace a cada perfil ── */}
                    <RevealSection>
                        <div className={cn("w-fit", REVEAL.zoomIn)}>
                            <Badge>{GROUPS.leadership}</Badge>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {LEADERSHIP.map((member, i) => (
                                <div
                                    key={member.slug}
                                    className={cn("h-full", VCM_TEAM_VARIANTS[i % VCM_TEAM_VARIANTS.length])}
                                    style={{ transitionDelay: `${150 + (i % GRID_COLUMNS) * 100}ms` }}
                                >
                                    <PersonCard member={member} href={`/about-us/team/${member.slug}`} />
                                </div>
                            ))}
                        </div>
                    </RevealSection>

                    {/* ── Marketing Area: grid ──
                    <RevealSection>
                        <div className={cn("w-fit", REVEAL.zoomIn)}>
                            <Badge>{GROUPS.team}</Badge>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {TEAM_MEMBERS.map((member, i) => (
                                <div
                                    key={member.slug}
                                    className={cn("h-full", MARKETING_VARIANTS[i % MARKETING_VARIANTS.length])}
                                    style={{ transitionDelay: `${150 + (i % GRID_COLUMNS) * 100}ms` }}
                                >
                                    <PersonCard member={member} />
                                </div>
                            ))}
                        </div>
                    </RevealSection>*/}
                </Container>
            </div>
        </section>
    );
}