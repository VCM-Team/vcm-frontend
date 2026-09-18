import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";

const HERO = {
    title: "Expert Back Office Support from a team that knows roofing",
    titleAccent: "",
    cta: { label: "Free Consultation", href: "/contact-us" },
    image: {
        src: "/assets/images/hero/background.webp",
        alt: "",
    },
} as const;

export default function Hero() {
    return (
        <section className="mx-3 mt-3 lg:mx-3 lg:mt-3">
            <div className="relative isolate flex h-[calc(100svh-1.5rem)] items-end overflow-hidden rounded-3xl lg:h-[calc(100svh-2rem)]">
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

                <div className="mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-28">
                    <h1 className="max-w-[18ch] text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
                        {HERO.title}
                        <br />
                        {HERO.titleAccent}
                    </h1>

                    <HeroRule />

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
                </div>
            </div>
        </section>
    );
}

/* Línea decorativa: tramo bajo, rampa, tramo alto hasta el borde */
function HeroRule() {
    return (
        <div
            aria-hidden
            className="-mr-5 mt-8 flex h-7 items-end text-brand-400 lg:-mr-8"
        >
            <span className="h-1 w-[min(58%,34rem)] shrink-0 bg-current" />

            <svg
                width="44"
                height="28"
                viewBox="0 0 44 28"
                fill="none"
                className="shrink-0"
            >
                <path
                    d="M0 26h10l24-24h10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="square"
                />
            </svg>

            <span className="mb-auto h-1 flex-1 bg-linear-to-r from-current to-transparent" />
        </div>
    );
}

function SlotText({ label }: { label: string }) {
    return (
        <span className="relative block overflow-hidden">
            <span className="block transition-[translate] duration-300 group-hover:-translate-y-full">
                {label}
            </span>
            <span
                aria-hidden
                className="absolute inset-0 block translate-y-full transition-[translate] duration-300 group-hover:translate-y-0"
            >
                {label}
            </span>
        </span>
    );
}