"use client";

import { useEffect, useState, RefObject } from "react";

export function useScrollProgress(containerRef: RefObject<HTMLElement | null>) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!isDesktop || prefersReducedMotion) {
            setProgress(0);
            return;
        }

        let animationFrameId: number;

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // El recorrido total disponible mientras la sección pasa por el viewport
            const totalDistance = rect.height - windowHeight;
            if (totalDistance <= 0) return;

            // Qué tanto hemos escroleado dentro de la sección
            const currentScroll = -rect.top;
            const rawProgress = currentScroll / totalDistance;

            // Clampear valor estricto entre 0 y 1
            const clamped = Math.max(0, Math.min(1, rawProgress));
            setProgress(clamped);
        };

        const onScroll = () => {
            animationFrameId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [containerRef]);

    return progress;
}