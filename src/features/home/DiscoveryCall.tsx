import Image from "next/image";
import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const DISCOVERY_CALL = {
    badge: "Contact Us",
    title: "Book your Discovery Call",
    cta: { label: "Book a Demo Now!", href: "/book-demo" },
    image: "/assets/images/shared/contact/IMG_27391.webp",
    note: "Fill out our form, and we’ll contact you within one business day.",
};

export default function  DiscoveryCall() {
    return (
        <RevealSection className="overflow-x-clip bg-ink-900 py-20 lg:py-28">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col items-start">
                        <div className={REVEAL.down}>
                            <Badge className="border-brand-400 bg-transparent text-brand-400">
                                {DISCOVERY_CALL.badge}
                            </Badge>
                        </div>

                        <h2
                            className={cn(
                                "mt-8 max-w-[14ch] text-3xl font-normal leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]",
                                REVEAL.left,
                                "delay-100"
                            )}
                        >
                            {DISCOVERY_CALL.title}
                        </h2>

                        <div className={cn("mt-8 lg:mt-10", REVEAL.up, "delay-200")}>
                            <Link
                                href={DISCOVERY_CALL.cta.href}
                                className="inline-flex rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                            >
                                {DISCOVERY_CALL.cta.label}
                            </Link>
                        </div>
                    </div>

                    <div
                        className={cn(
                            "relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[3/2] lg:aspect-[5/6] lg:rounded-[2rem]",
                            REVEAL.right,
                            "delay-200"
                        )}
                    >
                        {/* zoom out lento dentro del marco redondeado */}
                        <Image
                            src={DISCOVERY_CALL.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 45vw, 100vw"
                            className={cn("object-cover", REVEAL.zoomOut, "duration-[1200ms] delay-200")}
                        />

                        <div
                            className={cn(
                                "absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl bg-white/65 p-4 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-5",
                                REVEAL.up,
                                "delay-[600ms]"
                            )}
                        >
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-400 text-black sm:size-12">
                                <FormIcon className="size-5" />
                            </span>
                            <p className="text-sm leading-snug text-black sm:text-base">
                                {DISCOVERY_CALL.note}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </RevealSection>
    );
}

/* ── Iconos ─────────────────────────────── */

function FormIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 2.5h6A1.5 1.5 0 0 1 16.5 4v.5H18A2.5 2.5 0 0 1 20.5 7v12a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 19V7A2.5 2.5 0 0 1 6 4.5h1.5V4A1.5 1.5 0 0 1 9 2.5ZM9.5 4.5v1h5v-1h-5ZM8 10.25a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm0 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H8Z"
                fill="currentColor"
            />
        </svg>
    );
}