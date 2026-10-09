import type { CSSProperties } from "react";

/* ── REVEAL: entradas al hacer scroll (dentro de un RevealSection) ── */

// Estado final común: se aplica cuando el RevealSection padre tiene data-inview="true"
const IN =
    "group-data-[inview=true]/reveal:opacity-100 group-data-[inview=true]/reveal:scale-100 group-data-[inview=true]/reveal:translate-x-0 group-data-[inview=true]/reveal:translate-y-0 group-data-[inview=true]/reveal:blur-none";

const BASE =
    "transition-[opacity,scale,translate,filter] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:blur-none";

export const REVEAL = {
    fade: `${BASE} ${IN} opacity-0`,
    zoomIn: `${BASE} ${IN} opacity-0 scale-90`,
    zoomOut: `${BASE} ${IN} opacity-0 scale-110`,
    up: `${BASE} ${IN} opacity-0 translate-y-10`,
    down: `${BASE} ${IN} opacity-0 -translate-y-10`,
    left: `${BASE} ${IN} opacity-0 -translate-x-10`,
    right: `${BASE} ${IN} opacity-0 translate-x-10`,
    blur: `${BASE} ${IN} opacity-0 blur-md`,
} as const;

/* ── ENTER: entradas al cargar la página (heros y todo lo visible de inicio) ──
   Usan @keyframes (definidos en globals.css): a diferencia de starting:,
   también se ejecutan en la primera carga y al recargar. */

export const ENTER = {
    fade: "animate-enter-fade motion-reduce:animate-none",
    up: "animate-enter-up motion-reduce:animate-none",
    right: "animate-enter-right motion-reduce:animate-none",
    line: "animate-enter-line motion-reduce:animate-none",
    zoom: "animate-enter-zoom motion-reduce:animate-none",
    pop: "animate-enter-pop motion-reduce:animate-none",
    drawX: "origin-left animate-enter-draw-x motion-reduce:animate-none",
    stroke: "animate-enter-stroke motion-reduce:animate-none",
    kenBurns: "animate-enter-ken-burns motion-reduce:animate-none",
    down: "animate-enter-down motion-reduce:animate-none",
} as const;

/** Retraso (y duración opcional) de una animación ENTER, en ms. Se pasa como `style`. */
export const enterAt = (delay: number, duration?: number): CSSProperties => ({
    animationDelay: `${delay}ms`,
    ...(duration ? { animationDuration: `${duration}ms` } : {}),
});