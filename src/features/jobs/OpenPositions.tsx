import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const CONTENT = {
    badge: "Open Positions",
    title: "Join the",
    titleAccent: "VCM Team",
    description:
        "We’re always looking for sharp, reliable people who want to do real work and grow with a team that supports each other. Our roles are full-time and in person at our offices in Lima, working every day with U.S. construction and roofing companies. Take a look, and if one fits, we’d love to hear from you.",
};

const LINKEDIN_JOBS = "https://www.linkedin.com/company/discovervcm/jobs";

// Puestos publicados por VCM; las vacantes caducan, revisar periódicamente
const POSITIONS = [
    {
        key: "junior-estimator",
        title: "Junior Estimator",
        meta: "Santiago de Surco, Lima · Full-time",
        href: "https://pe.linkedin.com/jobs/view/junior-estimator-at-vcm-4466912839",
    },
    {
        key: "back-end-developer",
        title: "Back End Developer",
        meta: "Santiago de Surco, Lima · Full-time",
        href: LINKEDIN_JOBS,
    },
    {
        key: "junior-executive-assistant",
        title: "Junior Executive Assistant",
        meta: "Santiago de Surco, Lima · Full-time",
        href: LINKEDIN_JOBS,
    },
];

const POSITION_STAGGER_MS = 120;

export default function OpenPositions() {
    return (
        <RevealSection
            id="open-positions"
            className="relative isolate mx-3 mb-15 overflow-hidden rounded-panel bg-navy-800 lg:mx-4"
        >
            <Container className="py-14 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* texto */}
                    <div>
                        <div className={REVEAL.left}>
                            <Badge className="border-white/30 bg-transparent text-white">
                                {CONTENT.badge}
                            </Badge>
                        </div>

                        <h2
                            className={cn(
                                "mt-8 max-w-[14ch] text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]",
                                REVEAL.blur,
                                "delay-100"
                            )}
                        >
                            {CONTENT.title}
                            <br />
                            <span className="text-accent">{CONTENT.titleAccent}</span>
                        </h2>

                        <p
                            className={cn(
                                "mt-8 max-w-[52ch] text-[15px] leading-relaxed text-white/85",
                                REVEAL.fade,
                                "delay-200"
                            )}
                        >
                            {CONTENT.description}
                        </p>
                    </div>

                    {/* listado: la animación va en el li, el Link conserva su transition del hover */}
                    <ul className="flex flex-col gap-4 lg:justify-center">
                        {POSITIONS.map((p, i) => (
                            <li
                                key={p.key}
                                className={REVEAL.right}
                                style={{ transitionDelay: `${300 + i * POSITION_STAGGER_MS}ms` }}
                            >
                                <Link
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block rounded-card border border-white/15 px-6 py-5 transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                                >
                                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                                    <p className="mt-1 text-sm text-white/60">{p.meta}</p>
                                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors duration-300 group-hover:text-brand-400">
                                        View position
                                        <ArrowUpRight className="size-3.5 transition-[translate] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </RevealSection>
    );
}