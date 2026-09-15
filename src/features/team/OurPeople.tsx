import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import Carousel from "@/src/shared/components/ui/Carousel";
import PersonCard from "@/src/shared/components/ui/PersonCard";
import { LEADERSHIP, TEAM_MEMBERS } from "@/src/shared/data/team.data";

const HEADING = {
    badge: "Our People",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    titleRest: "cierre del titular",
    description: "Párrafo de apoyo de la sección — reemplázalo con el texto propio.",
};

const GROUPS = {
    leadership: "Leadership",
    team: "Team",
};

export default function OurPeople() {
    return (
        <section className="py-16 lg:py-24">
            <Container>
                <Badge>{HEADING.badge}</Badge>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                    <h2 className="max-w-[16ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                        <span className="text-accent">{HEADING.titleAccent}</span>{" "}
                        {HEADING.title} {HEADING.titleRest}
                    </h2>

                    <p className="text-[15px] leading-relaxed text-fg-muted lg:pt-2">
                        {HEADING.description}
                    </p>
                </div>
            </Container>

            <div className="mt-14 bg-surface/40 py-14 lg:mt-20 lg:py-16">
                <Container>
                    {/* Leadership — carrusel */}
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-fg-muted">
                        {GROUPS.leadership}
                    </p>

                    <Carousel
                        itemCount={LEADERSHIP.length}
                        label={GROUPS.leadership}
                        className="mt-6"
                    >
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

                    <hr className="my-12 border-border lg:my-16" />

                    {/* Team — grid */}
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-fg-muted">
                        {GROUPS.team}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {TEAM_MEMBERS.map((member) => (
                            <PersonCard key={member.slug} member={member} />
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
}