import Image from "next/image";
import Link from "next/link";

const HERO = {
    title: "Titular principal del hero",
    titleAccent: "segunda línea del titular",
    cta: { label: "Free Consultation", href: "/contact-us" },
    image: { src: "/hero/hero.jpg", alt: "Descripción de la imagen" },
} as const;

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden lg:min-h-[86svh]">
            <Image
                src={HERO.image.src}
                alt={HERO.image.alt}
                fill
                priority
                sizes="100vw"
                className="-z-10 object-cover object-center"
            />

            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-transparent"
            />

            <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-[calc(var(--spacing-header-sm)+4rem)] lg:px-8 lg:pb-24 lg:pt-[calc(var(--spacing-header)+6rem)]">
                <span aria-hidden className="mb-7 block h-px w-32 bg-white/70" />

                <h1 className="max-w-[18ch] text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
                    {HERO.title}
                    <br />
                    {HERO.titleAccent}
                </h1>

                <div className="mt-9 flex items-center gap-2">
                    <Link
                        href={HERO.cta.href}
                        className="inline-flex items-center rounded-full bg-brand-400 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-brand-500"
                    >
                        {HERO.cta.label}
                    </Link>
                    <Link
                        href={HERO.cta.href}
                        aria-hidden
                        tabIndex={-1}
                        className="grid size-14 shrink-0 place-items-center rounded-full bg-navy-800 text-white transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        <ArrowUpRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ArrowUpRight() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    );
}