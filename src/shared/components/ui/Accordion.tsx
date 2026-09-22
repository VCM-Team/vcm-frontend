"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";

export type AccordionItem = {
    key: string;
    title: string;
    content: string;
};

type Props = {
    items: readonly AccordionItem[];
    /** Clave del item abierto al cargar. Por defecto, ninguno. */
    defaultOpen?: string;
    /** "light" (por defecto) o "dark". */
    variant?: "light" | "dark";
    className?: string;
};

export default function Accordion({
                                      items,
                                      defaultOpen,
                                      variant = "light",
                                      className,
                                  }: Props) {
    const [openKey, setOpenKey] = useState<string | null>(defaultOpen ?? null);

    const isDark = variant === "dark";

    return (
        <div className={className}>
            {items.map((item) => {
                const isOpen = item.key === openKey;

                return (
                    <div key={item.key}>
                        <h3>
                            <button
                                type="button"
                                onClick={() => setOpenKey(isOpen ? null : item.key)}
                                aria-expanded={isOpen}
                                aria-controls={`accordion-panel-${item.key}`}
                                id={`accordion-trigger-${item.key}`}
                                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-3.5 text-left"
                            >
                                <span
                                    className={cn(
                                        "text-xl font-medium lg:text-[1.375rem]",
                                        isDark ? "text-white" : "text-fg"
                                    )}
                                >
                                    {item.title}
                                </span>

                                <span
                                    aria-hidden
                                    className={cn(
                                        "grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-200",
                                        isDark
                                            ? "bg-brand-400 text-black group-hover:bg-brand-500"
                                            : "bg-ink-900 text-brand-400 group-hover:bg-black"
                                    )}
                                >
                                    <PlusMinus isOpen={isOpen} />
                                </span>
                            </button>
                        </h3>

                        <div
                            id={`accordion-panel-${item.key}`}
                            role="region"
                            aria-labelledby={`accordion-trigger-${item.key}`}
                            className={cn(
                                "grid transition-[grid-template-rows,opacity,visibility] duration-[400ms]",
                                "motion-reduce:transition-none",
                                isOpen
                                    ? "visible grid-rows-[1fr] opacity-100 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    : "invisible grid-rows-[0fr] opacity-0 ease-[cubic-bezier(0.55,0,1,0.45)]"
                            )}
                        >
                            <div className="overflow-hidden">
                                <p
                                    className={cn(
                                        "max-w-[64ch] pb-5 pr-16 text-[15px] leading-relaxed",
                                        isDark ? "text-white/60" : "text-fg-muted"
                                    )}
                                >
                                    {item.content}
                                </p>
                            </div>
                        </div>

                        {/* Separador: sólido a la izquierda, se desvanece a la derecha */}
                        <span
                            aria-hidden
                            className={cn(
                                "mr-16 block h-px bg-gradient-to-r to-transparent",
                                isDark ? "from-white/30" : "from-ink-900/60"
                            )}
                        />
                    </div>
                );
            })}
        </div>
    );
}

function PlusMinus({ isOpen }: { isOpen: boolean }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 12h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path
                d="M12 4v16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                className={cn("origin-center transition-transform duration-200", isOpen && "scale-y-0")}
            />
        </svg>
    );
}