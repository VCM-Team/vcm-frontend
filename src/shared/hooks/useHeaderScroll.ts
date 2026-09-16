"use client";

import { useEffect, useRef, useState } from "react";

const TOP_OFFSET = 8;   // a partir de aquí ya no estamos arriba del todo
const DELTA = 6;        // movimiento mínimo para registrar dirección

export function useHeaderScroll() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        lastY.current = window.scrollY;

        const update = () => {
            const y = window.scrollY;

            setScrolled(y > TOP_OFFSET);

            if (y <= TOP_OFFSET) {
                setHidden(false);
                lastY.current = y;
            } else {
                const diff = y - lastY.current;
                if (Math.abs(diff) > DELTA) {
                    setHidden(diff > 0);
                    lastY.current = y;
                }
            }

            ticking.current = false;
        };

        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return { hidden, scrolled };
}