import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

const HERO = {
    titleLines: ["Scale Smarter. Lead", "with Confidence.", "Grow Without Limits."],
    description:
        "Your next stage of growth doesn’t come from working harder—it comes from building a business that can scale.",
    cta: { label: "Free Consultation", href: "/contact-us" },
    pillars: ["Strategy", "Systems", "Talent"],
    image: {
        src: "/assets/images/hero/background.webp",
        alt: "",
    },
} as const;

export default function Hero() {
    return (
        <section className="mx-3 mt-20 lg:mx-3 lg:mt-3">
            <div className="relative isolate flex h-[calc(100svh-1.5rem)] items-end pb-10 md:pb-20 overflow-hidden rounded-3xl lg:h-[calc(100svh-2rem)]">
                <Image
                    src={HERO.image.src}
                    alt={HERO.image.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="-z-10 object-cover object-top"
                />

                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
                />

                <div className="mx-auto w-full max-w-7xl px-5 pb-8 lg:px-8 lg:pb-10">
                    <h1 className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.2rem]">
                        {HERO.titleLines.map((line, i) => (
                            <span key={line} className="lg:block">
                                {line}
                                {i < HERO.titleLines.length - 1 && " "}
                            </span>
                        ))}
                    </h1>

                    <HeroRule description={HERO.description} />

                    {/* En móvil la descripción va como párrafo bajo la línea */}
                    <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-white/80 lg:hidden">
                        {HERO.description}
                    </p>

                    <div className="group mt-9 flex w-fit items-center gap-2">
                        <Link
                            href={HERO.cta.href}
                            className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-lg font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white"
                        >
                            {HERO.cta.label}
                        </Link>

                        <Link
                            href={HERO.cta.href}
                            aria-hidden
                            tabIndex={-1}
                            className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-accent text-black transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white"
                        >
                            <ArrowUpRight className="col-start-1 row-start-1 size-5 transition-[translate] duration-300 group-hover:-translate-y-12" />
                            <ArrowUpRight
                                aria-hidden
                                className="col-start-1 row-start-1 size-5 translate-y-12 transition-[translate] duration-300 group-hover:translate-y-0"
                            />
                        </Link>
                    </div>

                    <ul className="mt-14 flex flex-wrap items-center gap-4 text-xs text-white/90 lg:mt-16 lg:text-sm">
                        {HERO.pillars.map((pillar, i) => (
                            <li key={pillar} className="flex items-center gap-4">
                                {i > 0 && (
                                    <span aria-hidden className="h-px w-10 bg-white/60 lg:w-14" />
                                )}
                                {pillar}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

/* Línea decorativa: tramo bajo, rampa, tramo alto con la descripción debajo a la derecha (lg) */
function HeroRule({
                      description,
                      className,
                  }: {
    description: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "-mr-5 mt-4 flex h-7 items-end text-brand-400 lg:-mr-8 lg:-mt-6 lg:h-[4.5rem]",
                className
            )}
        >
            <span
                aria-hidden
                className="h-1 w-[min(58%,34rem)] shrink-0 bg-current lg:w-[min(64%,40rem)]"
            />

            {/* Rampa móvil: horizontales en y=2 y y=26, centradas con los tramos h-1 */}
            <svg
                aria-hidden
                width="44"
                height="28"
                viewBox="0 0 44 28"
                fill="none"
                className="shrink-0 lg:hidden"
            >
                <path
                    d="M0 26h10l24-24h10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="square"
                />
            </svg>

            {/* Rampa desktop: horizontales en y=70 (tramo bajo) y y=2 (tramo alto) */}
            <svg
                aria-hidden
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                className="hidden shrink-0 lg:block"
            >
                <path
                    d="M0 70h4L70 2h2"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="square"
                />
            </svg>

            <div className="relative mb-auto h-1 flex-1">
                <span aria-hidden className="block h-full bg-linear-to-r from-current to-transparent" />
                {/* right-8 compensa el -mr-8: el texto termina en el borde del contenido */}
                <p className="absolute right-8 top-full mt-3 hidden max-w-[44ch] text-sm leading-relaxed text-white/85 lg:block">
                    {description}
                </p>
            </div>
        </div>
    );
}