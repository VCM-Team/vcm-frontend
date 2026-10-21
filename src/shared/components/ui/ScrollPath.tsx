"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const LINE_COLOR = "#FEBD17";
const TIP_VIEWPORT = 0.6; // la punta de la línea va al 60% del alto de la pantalla
const CURVE = 90; // alto de cada curva al cruzar entre secciones (px)
const EASE = 0.12; // suavizado del seguimiento (más alto = más pegado al scroll)
const SAMPLE_STEP = 6; // precisión del muestreo del trazado (px)
const CONTAINER_MAX = 1280; // max-w-7xl del Container
const CONTAINER_PAD = 32; // lg:px-8 del Container
const DESKTOP = "(min-width: 1024px)";

type Geometry = { width: number; height: number; d: string };

/** Genera un trazado que baja por un margen y cruza al otro en cada unión entre secciones */
function buildPath(content: HTMLElement): Geometry {
    const width = content.offsetWidth;
    const height = content.offsetHeight;

    // Centro del margen lateral libre, fuera del contenido
    const contentLeft = Math.max(0, (width - CONTAINER_MAX) / 2) + CONTAINER_PAD;
    const xLeft = Math.max(14, contentLeft / 2);
    const xRight = width - xLeft;

    const sections = Array.from(content.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement
    );

    const startY = 40;
    const endY = height - 120;

    let x = xLeft;
    let lastY = startY;
    let d = `M ${x} ${startY}`;

    // Cada unión entre secciones es un cruce de un margen al otro
    for (const section of sections.slice(1)) {
        const boundary = section.offsetTop;
        if (boundary - CURVE <= lastY + 10 || boundary + CURVE >= endY) continue;

        const nextX = x === xLeft ? xRight : xLeft;
        d += ` L ${x} ${boundary - CURVE} C ${x} ${boundary}, ${nextX} ${boundary}, ${nextX} ${boundary + CURVE}`;
        x = nextX;
        lastY = boundary + CURVE;
    }

    d += ` L ${x} ${endY}`;
    return { width, height, d };
}

export default function ScrollPath({ children }: { children: ReactNode }) {
    const contentRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const dotRef = useRef<SVGGElement>(null);
    const [geo, setGeo] = useState<Geometry | null>(null);

    // 1. Generar el trazado y rehacerlo cuando cambie el tamaño (resize, acordeones, imágenes…)
    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        const mq = window.matchMedia(DESKTOP);

        const update = () => setGeo(mq.matches ? buildPath(content) : null);

        const ro = new ResizeObserver(update);
        ro.observe(content);
        mq.addEventListener("change", update);
        update();

        return () => {
            ro.disconnect();
            mq.removeEventListener("change", update);
        };
    }, []);

    // 2. Dibujar la línea y mover el punto según el scroll
    useEffect(() => {
        const content = contentRef.current;
        const path = pathRef.current;
        const dot = dotRef.current;
        if (!geo || !content || !path || !dot) return;

        const total = path.getTotalLength();
        path.style.strokeDasharray = `${total}`;

        // Movimiento reducido: línea completa y sin punto
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            path.style.strokeDashoffset = "0";
            dot.style.display = "none";
            return;
        }

        // Tabla altura → longitud, para saber qué longitud del trazado corresponde a cada altura
        const ys: number[] = [];
        const lens: number[] = [];
        for (let len = 0; len <= total; len += SAMPLE_STEP) {
            ys.push(path.getPointAtLength(len).y);
            lens.push(len);
        }
        ys.push(path.getPointAtLength(total).y);
        lens.push(total);

        const lengthAtY = (y: number) => {
            if (y <= ys[0]) return 0;
            if (y >= ys[ys.length - 1]) return total;
            let lo = 0;
            let hi = ys.length - 1;
            while (hi - lo > 1) {
                const mid = (lo + hi) >> 1;
                if (ys[mid] < y) lo = mid;
                else hi = mid;
            }
            const span = ys[hi] - ys[lo] || 1;
            return lens[lo] + ((y - ys[lo]) / span) * (lens[hi] - lens[lo]);
        };

        let current = 0;
        let raf = 0;

        const apply = () => {
            path.style.strokeDashoffset = `${total - current}`;
            const p = path.getPointAtLength(current);
            dot.setAttribute("transform", `translate(${p.x} ${p.y})`);
        };

        const targetLength = () => {
            const top = content.getBoundingClientRect().top;
            return lengthAtY(window.innerHeight * TIP_VIEWPORT - top);
        };

        const tick = () => {
            const target = targetLength();
            current += (target - current) * EASE;
            apply();
            raf = Math.abs(target - current) > 0.5 ? requestAnimationFrame(tick) : 0;
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(tick);
        };

        // Posición inicial sin animación (por si la página carga ya con scroll)
        current = targetLength();
        apply();

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, [geo]);

    return (
        <div ref={contentRef} className="relative">
            {children}

            {geo && (
                <svg
                    aria-hidden
                    width={geo.width}
                    height={geo.height}
                    viewBox={`0 0 ${geo.width} ${geo.height}`}
                    fill="none"
                    className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
                >
                    {/* Recorrido completo, muy tenue: se lee sobre fondo claro y anticipa el camino */}
                    <path d={geo.d} stroke={LINE_COLOR} strokeOpacity={0.15} strokeWidth={2} />

                    {/* Línea que se dibuja con el scroll */}
                    <path ref={pathRef} d={geo.d} stroke={LINE_COLOR} strokeWidth={2.5} strokeLinecap="round" />

                    {/* Punto en la punta de la línea, con halo */}
                    <g ref={dotRef}>
                        <circle r={14} fill={LINE_COLOR} fillOpacity={0.2} />
                        <circle r={6} fill={LINE_COLOR} />
                    </g>
                </svg>
            )}
        </div>
    );
}