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
    className?: string;
};

export default function Accordion({ items, defaultOpen, className }: Props) {
    const [openKey, setOpenKey] = useState<string | null>(defaultOpen ?? null);

    return (
        <div className={cn("divide-y divide-border border-b border-border", className)}>
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
                                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                            >
                                <span className="text-lg font-semibold text-fg">{item.title}</span>

                                <span
                                    aria-hidden
                                    className="grid size-8 shrink-0 place-items-center rounded-full bg-surface text-navy-800"
                                >
                  <PlusMinus isOpen={isOpen} />
                </span>
                            </button>
                        </h3>

                        <div
                            id={`accordion-panel-${item.key}`}
                            role="region"
                            aria-labelledby={`accordion-trigger-${item.key}`}
                            hidden={!isOpen}
                            className="pb-7"
                        >
                            <p className="max-w-[64ch] text-[15px] leading-relaxed text-fg-muted">
                                {item.content}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function PlusMinus({ isOpen }: { isOpen: boolean }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
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