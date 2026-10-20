import Image from "next/image";
import Container from "./Container";
import RevealSection from "./RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

export type ProjectScopeItem = {
    key: string;
    title: string;
    description: string;
    /** Tipos de trabajo que cubre, como etiquetas */
    tags: readonly string[];
};

type Props = {
    title: string;
    titleAccent?: string;
    description: string;
    image: string;
    items: readonly ProjectScopeItem[];
    className?: string;
};

// Línea separadora que se dibuja de izquierda a derecha
const LINE_DRAW =
    "origin-left scale-x-0 transition-[scale] duration-700 ease-out group-data-[inview=true]/reveal:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none";

const BLOCK_STEP_MS = 250;

export default function ProjectScopeSplit({ title, titleAccent, description, image, items, className }: Props) {
    return (
        <RevealSection className={cn("overflow-x-clip py-16 lg:py-24", className)}>
            <Container>
                {/* Encabezado centrado, a todo el ancho */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        className={cn(
                            "text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]",
                            REVEAL.blur
                        )}
                    >
                        {title}
                        {titleAccent && (
                            <>
                                {" "}
                                <span className="text-accent">{titleAccent}</span>
                            </>
                        )}
                    </h2>

                    <p className={cn("mx-auto mt-5 max-w-[56ch] text-[15px] leading-relaxed text-fg-muted", REVEAL.fade, "delay-150")}>
                        {description}
                    </p>
                </div>

                <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                    {/* Imagen a la izquierda: entra desde la izquierda con zoom out */}
                    <div className={cn("relative aspect-[4/3]", REVEAL.left, "delay-200")}>
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 55vw, 100vw"
                            className={cn("object-contain", REVEAL.zoomOut, "duration-[1200ms] delay-200")}
                        />
                    </div>

                    {/* Tipos de proyecto: bloques numerados separados por líneas */}
                    <ol className="flex flex-col">
                        {items.map((item, i) => {
                            const at = 350 + i * BLOCK_STEP_MS;

                            return (
                                <li key={item.key} className="py-8 first:pt-0 last:pb-0">
                                    {/* Línea superior (salvo en el primero) */}
                                    {i > 0 && (
                                        <span
                                            aria-hidden
                                            className={cn("-mt-8 mb-8 block h-px bg-border", LINE_DRAW)}
                                            style={{ transitionDelay: `${at - 150}ms` }}
                                        />
                                    )}

                                    <div className="flex gap-6">
                                        {/* Número */}
                                        <span
                                            aria-hidden
                                            className={cn("text-4xl font-semibold leading-none text-accent lg:text-5xl", REVEAL.zoomIn)}
                                            style={{ transitionDelay: `${at}ms` }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        <div className="min-w-0">
                                            <h3
                                                className={cn("text-xl font-semibold text-fg lg:text-2xl", REVEAL.up)}
                                                style={{ transitionDelay: `${at + 80}ms` }}
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className={cn("mt-2 text-[15px] leading-relaxed text-fg-muted", REVEAL.fade)}
                                                style={{ transitionDelay: `${at + 160}ms` }}
                                            >
                                                {item.description}
                                            </p>

                                            {/* Etiquetas: crecen una tras otra */}
                                            <ul className="mt-5 flex flex-wrap gap-2">
                                                {item.tags.map((tag, t) => (
                                                    <li
                                                        key={tag}
                                                        className={cn(
                                                            "rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-fg",
                                                            REVEAL.zoomIn
                                                        )}
                                                        style={{ transitionDelay: `${at + 260 + t * 70}ms` }}
                                                    >
                                                        {tag}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </Container>
        </RevealSection>
    );
}