import Image from "next/image";
import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";

const CONTENT = {
    badge: "Join the team",
    title: "Titular de la sección",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Free Consultation", href: "#open-positions" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Mask-group-2.jpg"
};

export default function Training() {
    return (
        <section className="pb-16 lg:pb-24">
            <Container>
                <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                    {/* imagen */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto lg:min-h-[34rem]">
                        <Image
                            src={CONTENT.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    {/* tarjeta */}
                    <div className="flex flex-col rounded-[2rem] bg-brand-400 p-7 lg:p-9">
                        <div className="flex items-start justify-between gap-4">
                            <Badge className="border-black bg-transparent text-black">
                                {CONTENT.badge}
                            </Badge>

                            <span
                                aria-hidden
                                className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-black"
                            >
                                <ChartIcon className="size-5" />
                            </span>
                        </div>

                        <h2 className="mt-8 max-w-[14ch] text-3xl font-bold leading-tight text-black lg:text-[2.25rem]">
                            {CONTENT.title}
                        </h2>

                        <p className="mt-8 max-w-[38ch] text-[15px] leading-relaxed text-black/80 lg:mt-auto lg:pt-12">
                            {CONTENT.description}
                        </p>

                        <div className="group mt-8 flex w-fit items-center gap-2">
                            <Link
                                href={CONTENT.cta.href}
                                className="inline-flex items-center rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                            >
                                {CONTENT.cta.label}
                            </Link>

                            <Link
                                href={CONTENT.cta.href}
                                aria-hidden
                                tabIndex={-1}
                                className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                            >
                                <ArrowUpRight className="col-start-1 row-start-1 size-4 transition-[translate] duration-300 group-hover:-translate-y-11" />
                                <ArrowUpRight
                                    aria-hidden
                                    className="col-start-1 row-start-1 size-4 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ChartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 30 30" fill="none" className={className} aria-hidden>
            <path
                d="M2.5625 26.25L10.625 15H16.9375L26.25 4.125V26.25H2.5625ZM4.75 18.9688L2.75 17.5312L8.125 10H14.4375L20.3125 3.15625L22.1875 4.78125L15.5625 12.5H9.375L4.75 18.9688Z"
                fill="currentColor"
            />
        </svg>
    );
}