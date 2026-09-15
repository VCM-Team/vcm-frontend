"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";
import Button from "./Button";
import { useTypewriter } from "@/src/shared/hooks/useTypewriter";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleTyped: string;
    description: string;
    cta: { label: string; href: string };
    image: string;
    mark?: string;
    height?: string;
    /** Separación respecto al borde inferior mientras va pegada. */
    bottomGap?: number;
    className?: string;
};

export default function StickyCardSection({
                                              badge, title, titleTyped, description, cta, image, mark,
                                              height = "min-h-[110svh]",
                                              bottomGap = 80,
                                              className,
                                          }: Props) {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const typed = useTypewriter(titleTyped);

    useEffect(() => {
        const section = sectionRef.current;
        const card = cardRef.current;
        if (!section || !card) return;

        let frame = 0;
        let current = 0;

        const update = () => {
            frame = 0;

            const desktop = window.matchMedia("(min-width: 1024px)").matches;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (!desktop || reduced) {
                current = 0;
                card.style.transform = "";
                return;
            }

            const cardH = card.offsetHeight;

            // posición natural = posición actual menos el desplazamiento ya aplicado
            const naturalTop = card.getBoundingClientRect().top - current;

            // dónde debe quedar para respetar bottomGap
            const target = window.innerHeight - cardH - bottomGap;

            // tope: no puede pasar del fondo de la sección
            const sectionBottom = section.getBoundingClientRect().bottom;
            const maxDown = sectionBottom - bottomGap - cardH - naturalTop;

            const wanted = Math.max(0, target - naturalTop);
            const next = Math.min(wanted, Math.max(0, maxDown));

            if (Math.abs(next - current) > 0.5) {
                current = next;
                card.style.transform = `translate3d(0, ${next}px, 0)`;
            }
        };

        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        const ro = new ResizeObserver(onScroll);
        ro.observe(card);

        return () => {
            if (frame) cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            ro.disconnect();
        };
    }, [bottomGap]);

    return (
        <section ref={sectionRef} className={cn("relative isolate", height, className)}>
            <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                className="-z-10 object-cover object-center"
            />

            <div className="pt-16 lg:pt-20">
                <Container>
                    <div
                        ref={cardRef}
                        className="flex min-h-[19rem] max-w-xl flex-col rounded-panel bg-white/85 p-7 backdrop-blur-md will-change-transform [backface-visibility:hidden] lg:min-h-[21rem] lg:p-9"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <Badge>{badge}</Badge>
                            {mark && (
                                <Image src={mark} alt="" width={72} height={72}
                                       className="size-14 object-contain lg:size-16" />
                            )}
                        </div>

                        <h2 className="mt-8 text-2xl font-semibold leading-tight text-fg lg:text-3xl">
                            {title}
                            <br />
                            <span className="inline-grid">
                <span aria-hidden className="invisible col-start-1 row-start-1 justify-self-start px-1">
                  {titleTyped}
                </span>
                <span className="col-start-1 row-start-1 inline-flex items-center justify-self-start rounded bg-accent/25 px-1">
                  {typed}
                    <span aria-hidden className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-caret bg-fg" />
                </span>
              </span>
                        </h2>

                        <div className="mt-auto flex flex-col gap-7 pt-7 sm:flex-row sm:items-end sm:justify-between">
                            <p className="max-w-[34ch] text-[15px] leading-relaxed text-fg-muted">
                                {description}
                            </p>
                            <Button href={cta.href} variant="dark" size="sm" className="shrink-0">
                                {cta.label}
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}