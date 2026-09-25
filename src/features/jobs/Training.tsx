import Image from "next/image";
import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const CONTENT = {
    badge: "Training & Growth",
    title: "Training That Prepares You for Real Work",
    description:
        "Every new team member is trained with our own SOPs and onboarded into the processes and tools of the U.S. companies we support, with ongoing guidance as you take on more responsibility.",
    cta: { label: "See Open Positions", href: "#open-positions" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Mask-group-2.jpg",
};

export default function Training() {
    return (
        <RevealSection className="overflow-x-clip pb-16 lg:pb-24">
            <Container>
                <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                    {/* imagen: el panel crece hasta su tamaño */}
                    <div
                        className={cn(
                            "relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto lg:min-h-[34rem]",
                            REVEAL.zoomIn,
                            "duration-1000"
                        )}
                    >
                        <Image
                            src={CONTENT.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    {/* tarjeta */}
                    <div className={cn("flex flex-col rounded-[2rem] bg-brand-400 p-7 lg:p-9", REVEAL.right, "delay-200")}>
                        <div className="flex items-start justify-between gap-4">
                            <div className={cn(REVEAL.down, "delay-[400ms]")}>
                                <Badge className="border-black bg-transparent text-black">
                                    {CONTENT.badge}
                                </Badge>
                            </div>

                            <span
                                aria-hidden
                                className={cn(
                                    "grid size-11 shrink-0 place-items-center rounded-full bg-accent text-black",
                                    REVEAL.zoomIn,
                                    "delay-500"
                                )}
                            >
                                <ChartIcon className="size-5" />
                            </span>
                        </div>

                        <h2
                            className={cn(
                                "mt-8 max-w-[14ch] text-3xl font-bold leading-tight text-black lg:text-[2.25rem]",
                                REVEAL.up,
                                "delay-500"
                            )}
                        >
                            {CONTENT.title}
                        </h2>

                        <p
                            className={cn(
                                "mt-8 max-w-[38ch] text-[15px] leading-relaxed text-black/80 lg:mt-auto lg:pt-12",
                                REVEAL.fade,
                                "delay-[600ms]"
                            )}
                        >
                            {CONTENT.description}
                        </p>

                        <div className={cn("group mt-8 flex w-fit items-center gap-2", REVEAL.up, "delay-[700ms]")}>
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
        </RevealSection>
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