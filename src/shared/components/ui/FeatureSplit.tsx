import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
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
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <div className={cn("grid gap-6", columns)}>
                    <div
                        className={cn(
                            "relative aspect-[4/3] overflow-hidden rounded-card",
                            imageAspect
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 55vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col rounded-card bg-accent-soft p-7 lg:p-10">
                        <div className="flex items-start justify-between gap-4">
                            <Badge className="border-transparent bg-transparent ring-1 ring-navy-800/20">
                                {badge}
                            </Badge>

                            <span
                                aria-hidden
                                className="grid size-12 shrink-0 place-items-center rounded-full bg-navy-800 text-accent"
                            >
                <ChartIcon />
              </span>
                        </div>

                        <h2 className="mt-8 max-w-[14ch] text-3xl font-semibold leading-tight text-navy-800 lg:text-4xl">
                            {title}
                            {titleRest && (
                                <>
                                    <br />
                                    {titleRest}
                                </>
                            )}
                        </h2>

                        <p className="mt-10 max-w-[46ch] text-[15px] leading-relaxed text-navy-800/85 lg:mt-auto lg:pt-16">
                            {description}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ChartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M5 19V11M10 19V5M15 19v-6M20 19V8"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </svg>
    );
}