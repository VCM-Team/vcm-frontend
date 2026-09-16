import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";

const HERO = {
    title: "Titular principal del hero",
    titleAccent: "segunda línea del titular",
    cta: { label: "Free Consultation", href: "/contact-us" },
    image: {
        src: "https://workninjas.com/wp-content/uploads/2025/09/Hero1.avif",
        alt: "",
    },
} as const;

export default function Hero() {
    return (
        <section className="mx-3 mt-3 lg:mx-3 lg:mt-3">
            <div className="relative isolate flex h-[calc(100svh-1.5rem)] items-center overflow-hidden rounded-3xl lg:h-[calc(100svh-2rem)]">
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
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
                />

                <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
                    <span aria-hidden className="mb-7 block h-px w-32 bg-white/70" />

                    <h1 className="max-w-[18ch] text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
                        {HERO.title}
                        <br />
                        {HERO.titleAccent}
                    </h1>

                    <div className="mt-9 flex items-center gap-2">
                        <Link
                            href={HERO.cta.href}
                            className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
                        >
                            {HERO.cta.label}
                        </Link>
                        <Link
                            href={HERO.cta.href}
                            aria-hidden
                            tabIndex={-1}
                            className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-navy-800 transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            <ArrowUpRight className="size-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}