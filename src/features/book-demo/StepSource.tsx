"use client";

import { StepShell } from "./book-demo.ui";
import type { StepProps } from "./book-demo.types";
import { cn } from "@/src/lib/utils";

const SOURCE = {
    title: "How did you find us?",
};

const SOURCE_OPTIONS: readonly string[] = [
    "Google Search",
    "AI Search",
    "Social Media",
    "Referral",
    "Roofing Insights",
    "Event / Trade Show",
    "Other",
];

export default function StepSource({ data, update, next }: StepProps) {
    const select = (source: string) => {
        update({ source });
        next();
    };

    return (
        <StepShell title={SOURCE.title}>
            <div className="grid gap-5 sm:grid-cols-2">
                {SOURCE_OPTIONS.map((option, index) => (
                    <button
                        key={option}
                        type="button"
                        aria-pressed={data.source === option}
                        onClick={() => select(option)}
                        className={cn(
                            "cursor-pointer rounded-2xl border px-6 py-7 text-base font-medium",
                            "transition-[background-color,border-color,translate] duration-200 hover:-translate-y-0.5",
                            data.source === option
                                ? "border-brand-400 bg-brand-400/10 text-brand-400"
                                : "border-white/10 bg-white/[0.06] text-white/80 hover:border-white/25",
                            // "Other" queda solo en la última fila: lo centramos
                            index === SOURCE_OPTIONS.length - 1 &&
                            SOURCE_OPTIONS.length % 2 === 1 &&
                            "sm:col-span-2 sm:mx-auto sm:w-1/2"
                        )}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </StepShell>
    );
}