import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
import RevealSection from "./RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleRest?: string;
    description: string;
    image: string;
    /** Proporción de la imagen en desktop. */
    imageAspect?: string;
    /** Reparto de columnas en desktop. Por defecto, imagen más ancha. */
    columns?: string;
    className?: string;
};

export default function FeatureSplit({
                                         badge,
                                         title,
                                         titleRest,
                                         description,
                                         image,
                                         imageAspect = "lg:aspect-[16/10]",
                                         columns = "lg:grid-cols-[1.45fr_1fr]",
                                         className,
                                     }: Props) {
    return (
        <RevealSection className={cn("overflow-x-clip py-16 lg:py-24", className)}>
            <Container>
                <div className={cn("grid gap-6", columns)}>
                    <div
                        className={cn(
                            "relative aspect-[4/3] overflow-hidden rounded-panel",
                            imageAspect,
                            REVEAL.left
                        )}
                    >
                        {/* zoom out lento dentro del panel */}
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 55vw, 100vw"
                            className={cn("object-cover", REVEAL.zoomOut, "duration-[1200ms]")}
                        />
                    </div>

                    <div className={cn("flex flex-col rounded-panel bg-brand-400 p-7 lg:p-10", REVEAL.up, "delay-200")}>
                        <div className="flex items-start justify-between gap-4">
                            <div className={cn(REVEAL.left, "delay-[400ms]")}>
                                <Badge className="border-black bg-transparent text-black">
                                    {badge}
                                </Badge>
                            </div>

                            <span
                                aria-hidden
                                className={cn(
                                    "grid size-12 shrink-0 place-items-center rounded-full bg-accent text-black",
                                    REVEAL.zoomIn,
                                    "delay-500"
                                )}
                            >
                                <ChartIcon className="size-5" />
                            </span>
                        </div>

                        <h2
                            className={cn(
                                "mt-8 max-w-[14ch] text-3xl font-semibold leading-tight text-black lg:text-4xl",
                                REVEAL.blur,
                                "delay-500"
                            )}
                        >
                            {title}
                            {titleRest && (
                                <>
                                    <br />
                                    {titleRest}
                                </>
                            )}
                        </h2>

                        <p
                            className={cn(
                                "mt-10 max-w-[46ch] text-[15px] leading-relaxed text-black/80 lg:mt-auto lg:pt-16",
                                REVEAL.up,
                                "delay-[600ms]"
                            )}
                        >
                            {description}
                        </p>
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