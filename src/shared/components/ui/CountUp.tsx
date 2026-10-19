"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
    to: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    /** Retraso desde que la sección entra en pantalla (ms) */
    delay?: number;
    duration?: number;
};

// Misma sensación que el ease-out de los arcos: rápido al inicio, frena al final
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/** Número que cuenta de 0 a `to` cuando su RevealSection entra en pantalla */
export default function CountUp({ to, decimals = 1, prefix = "", suffix = "%", delay = 0, duration = 1600 }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setValue(to);
            return;
        }

        let raf = 0;
        let timer = 0;

        const start = () => {
            timer = window.setTimeout(() => {
                const t0 = performance.now();
                const tick = (now: number) => {
                    const t = Math.min(1, (now - t0) / duration);
                    setValue(to * easeOutQuart(t));
                    if (t < 1) raf = requestAnimationFrame(tick);
                };
                raf = requestAnimationFrame(tick);
            }, delay);
        };

        // Arranca a la vez que el resto de la sección: cuando su RevealSection pasa a data-inview="true"
        const host = el.closest<HTMLElement>("[data-inview]");
        let observer: MutationObserver | null = null;

        if (!host || host.dataset.inview === "true") {
            start();
        } else {
            observer = new MutationObserver(() => {
                if (host.dataset.inview === "true") {
                    observer?.disconnect();
                    start();
                }
            });
            observer.observe(host, { attributes: true, attributeFilter: ["data-inview"] });
        }

        return () => {
            observer?.disconnect();
            window.clearTimeout(timer);
            cancelAnimationFrame(raf);
        };
    }, [to, delay, duration]);

    const final = `${prefix}${to.toFixed(decimals)}${suffix}`;

    return (
        // El texto final invisible reserva el ancho: el número crece sin mover lo que está alrededor
        <span ref={ref} aria-hidden className="inline-grid tabular-nums">
            <span className="invisible col-start-1 row-start-1">{final}</span>
            <span className="col-start-1 row-start-1 text-center">
                {prefix}
                {value.toFixed(decimals)}
                {suffix}
            </span>
        </span>
    );
}