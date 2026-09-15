"use client";

import { useEffect, useState } from "react";

type Options = {
    /** ms por carácter al escribir */
    typeSpeed?: number;
    /** ms por carácter al borrar */
    deleteSpeed?: number;
    /** pausa con el texto completo antes de borrar */
    holdDuration?: number;
    /** pausa en vacío antes de volver a escribir */
    restDuration?: number;
};

export function useTypewriter(
    text: string,
    {
        typeSpeed = 85,
        deleteSpeed = 45,
        holdDuration = 2200,
        restDuration = 500,
    }: Options = {}
) {
    const [display, setDisplay] = useState(text);
    const [phase, setPhase] = useState<"hold" | "deleting" | "rest" | "typing">("hold");

    useEffect(() => {
        const reduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduced) {
            setDisplay(text);
            return;
        }

        let timer: ReturnType<typeof setTimeout>;

        switch (phase) {
            case "hold":
                timer = setTimeout(() => setPhase("deleting"), holdDuration);
                break;

            case "deleting":
                if (display.length === 0) {
                    setPhase("rest");
                } else {
                    timer = setTimeout(
                        () => setDisplay(text.slice(0, display.length - 1)),
                        deleteSpeed
                    );
                }
                break;

            case "rest":
                timer = setTimeout(() => setPhase("typing"), restDuration);
                break;

            case "typing":
                if (display.length === text.length) {
                    setPhase("hold");
                } else {
                    timer = setTimeout(
                        () => setDisplay(text.slice(0, display.length + 1)),
                        typeSpeed
                    );
                }
                break;
        }

        return () => clearTimeout(timer);
    }, [display, phase, text, typeSpeed, deleteSpeed, holdDuration, restDuration]);

    return display;
}