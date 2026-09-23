"use client";

import { useState } from "react";
import { StepButton, StepShell } from "./book-demo.ui";
import type { StepProps } from "./book-demo.types";

const TERRITORIES = {
    title: "Which cities or territories do you serve?",
    description: "Add your primary operational areas below.",
    placeholder: "e.g. Austin, TX",
    cta: "Continue",
};

export default function StepTerritories({ data, update, next }: StepProps) {
    const [draft, setDraft] = useState("");

    const add = () => {
        const value = draft.trim();
        if (!value || data.territories.includes(value)) return;

        update({ territories: [...data.territories, value] });
        setDraft("");
    };

    const remove = (value: string) => {
        update({ territories: data.territories.filter((t) => t !== value) });
    };

    return (
        <StepShell
            title={TERRITORIES.title}
            description={TERRITORIES.description}
            icon={<PinIcon className="size-6" />}
        >
            <div className="rounded-3xl border border-white/1 bg-white/[0.06] p-5">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                    <PinIcon className="size-5 shrink-0 text-white/50" />
                    <input
                        value={draft}
                        placeholder={TERRITORIES.placeholder}
                        onChange={(e) => setDraft(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key !== "Enter") return;
                            e.preventDefault();
                            add();
                        }}
                        className="flex-1 bg-transparent py-2 text-[15px] text-white outline-none placeholder:text-white/35"
                    />
                    <button
                        type="button"
                        onClick={add}
                        disabled={draft.trim() === ""}
                        className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-brand-400 transition-colors duration-200 hover:bg-brand-400/15 disabled:cursor-not-allowed disabled:text-white/30 disabled:hover:bg-transparent"
                    >
                        <PlusIcon className="size-4" />
                        Add
                    </button>
                </div>

                {data.territories.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-3">
                        {data.territories.map((territory) => (
                            <li key={territory}>
                                <span className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-4 py-2 text-sm font-medium text-black">
                                    {territory}
                                    <button
                                        type="button"
                                        onClick={() => remove(territory)}
                                        aria-label={`Quitar ${territory}`}
                                        className="cursor-pointer transition-opacity duration-200 hover:opacity-60"
                                    >
                                        <CloseIcon className="size-3.5" />
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mt-8 flex justify-end">
                <StepButton onClick={next} disabled={data.territories.length === 0}>
                    {TERRITORIES.cta}
                </StepButton>
            </div>
        </StepShell>
    );
}

/* ── Iconos ─────────────────────────────── */

function PinIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    );
}

function PlusIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function CloseIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}