import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { ENTER, enterAt } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HERO = {
    titleLines: ["Scale Smarter. Lead", "with Confidence.", "Grow Without Limits."],
    description:
        "Your next stage of growth doesn’t come from working harder—it comes from building a business that can scale.",
    cta: { label: "Free Consultation", href: "/contact-us" },
    pillars: ["Clarity", "Systems", "Results"],
    image: {
        src: "/assets/images/hero/two_colleagues_golden_.webp",
        alt: "",
    },
} as const;

// Secuencia de entrada (ms): cada pieza arranca cuando la anterior va por la mitad
const T = {
    title: 150,
    titleStep: 120,
    ruleLow: 400,
    ruleRamp: 1100,
    ruleHigh: 1520,
    description: 1750,
    descriptionMobile: 1100,
    ctaPill: 1250,
    ctaCircle: 1450,
    pillars: 1550,
    pillarStep: 160,
} as const;

export default function Hero() {
    return (
        <section className="mx-3 mt-20 lg:mx-3 lg:mt-3">
            <div className="relative isolate flex h-[calc(100svh-1.5rem)] items-end overflow-hidden rounded-3xl pb-10 md:pb-20 lg:h-[calc(100svh-2rem)]">
                {/* Fondo: zoom lento de cámara */}
                <Image
                    src={HERO.image.src}
                    alt={HERO.image.alt}
                    fill
                    priority
                    sizes="100vw"
                    className={cn("-z-10 object-cover object-top", ENTER.kenBurns)}
                />

                {/* Degradado: fade */}
                <div
                    aria-hidden
                    className={cn("absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent", ENTER.fade)}
                    style={enterAt(0, 1200)}
                />

                <div className="mx-auto w-full max-w-7xl px-5 pb-8 lg:px-8 lg:pb-10">
                    {/* Título: cada línea sube desde detrás de su máscara */}
                    <h1 className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.2rem]">
                        {HERO.titleLines.map((line, i) => (
                            <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
                                <span
                                    className={cn("block", ENTER.line)}
                                    style={enterAt(T.title + i * T.titleStep)}
                                >
                                    {line}
                                    {i < HERO.titleLines.length - 1 && " "}
                                </span>
                            </span>
                        ))}
                    </h1>

                    <HeroRule description={HERO.description} />

                    {/* En móvil la descripción va como párrafo bajo la línea: sube */}
                    <p
                        className={cn("mt-6 max-w-[42ch] text-sm leading-relaxed text-white/80 lg:hidden", ENTER.up)}
                        style={enterAt(T.descriptionMobile)}
                    >
                        {HERO.description}
                    </p>

                    {/* CTA: la píldora crece; el círculo aparece con rebote */}
                    <div className="group mt-9 flex w-fit items-center gap-2">
                        <Link
                            href={HERO.cta.href}
                            className={cn(
                                "inline-flex items-center rounded-full bg-accent px-8 py-3 text-lg font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white",
                                ENTER.zoom
                            )}
                            style={enterAt(T.ctaPill)}
                        >
                            {HERO.cta.label}
                        </Link>

                        <Link
                            href={HERO.cta.href}
                            aria-hidden
                            tabIndex={-1}
                            className={cn(
                                "relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-accent text-black transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white",
                                ENTER.pop
                            )}
                            style={enterAt(T.ctaCircle)}
                        >
                            <ArrowUpRight className="col-start-1 row-start-1 size-5 transition-[translate] duration-300 group-hover:-translate-y-12" />
                            <ArrowUpRight
                                aria-hidden
                                className="col-start-1 row-start-1 size-5 translate-y-12 transition-[translate] duration-300 group-hover:translate-y-0"
                            />
                        </Link>
                    </div>

                    {/* Pilares: la línea separadora se dibuja y luego sube la palabra */}
                    <ul className="mt-14 flex flex-wrap items-center gap-4 text-xs text-white/90 lg:mt-16 lg:text-sm">
                        {HERO.pillars.map((pillar, i) => {
                            const at = T.pillars + i * T.pillarStep;
                            return (
                                <li key={pillar} className="flex items-center gap-4">
                                    {i > 0 && (
                                        <span
                                            aria-hidden
                                            className={cn("h-px w-10 bg-white/60 lg:w-14", ENTER.drawX)}
                                            style={enterAt(at - 120, 500)}
                                        />
                                    )}
                                    <span className={cn("inline-block", ENTER.up)} style={enterAt(at)}>
                                        {pillar}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

/* Línea decorativa: tramo bajo, rampa, tramo alto con la descripción debajo a la derecha (lg).
   Se dibuja por tramos: bajo → rampa → alto → descripción. */
function HeroRule({ description }: { description: string }) {
    return (
        <div className="-mr-5 mt-4 flex h-7 items-end text-brand-400 lg:-mr-8 lg:-mt-6 lg:h-[4.5rem]">
            {/* Tramo bajo: se dibuja de izquierda a derecha */}
            <span
                aria-hidden
                className={cn("h-1 w-[min(58%,34rem)] shrink-0 bg-current lg:w-[min(64%,40rem)]", ENTER.drawX)}
                style={enterAt(T.ruleLow)}
            />

            {/* Rampa móvil: se traza como un lápiz */}
            <svg aria-hidden width="44" height="28" viewBox="0 0 44 28" fill="none" className="shrink-0 lg:hidden">
                <path
                    d="M0 26h10l24-24h10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="square"
                    pathLength={1}
                    strokeDasharray="1"
                    className={ENTER.stroke}
                    style={enterAt(T.ruleRamp)}
                />
            </svg>

            {/* Rampa desktop: se traza como un lápiz */}
            <svg aria-hidden width="72" height="72" viewBox="0 0 72 72" fill="none" className="hidden shrink-0 lg:block">
                <path
                    d="M0 70h4L70 2h2"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="square"
                    pathLength={1}
                    strokeDasharray="1"
                    className={ENTER.stroke}
                    style={enterAt(T.ruleRamp)}
                />
            </svg>

            <div className="relative mb-auto h-1 flex-1">
                {/* Tramo alto: se dibuja de izquierda a derecha, más lento porque se desvanece */}
                <span
                    aria-hidden
                    className={cn("block h-full bg-linear-to-r from-current to-transparent", ENTER.drawX)}
                    style={enterAt(T.ruleHigh, 900)}
                />

                {/* Descripción (lg): entra desde la derecha al terminar la línea.
                    right-8 compensa el -mr-8: el texto termina en el borde del contenido */}
                <p
                    className={cn(
                        "absolute right-8 top-full mt-3 hidden max-w-[44ch] text-sm leading-relaxed text-white/85 lg:block",
                        ENTER.right
                    )}
                    style={enterAt(T.description)}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}