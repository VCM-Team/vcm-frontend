"use client";

import { cn } from "@/src/lib/utils";

type Props = {
    years: readonly string[];
    active: string;
    onChange: (year: string) => void;
    className?: string;
};

export default function YearTabs({ years, active, onChange, className }: Props) {
    const handleKey = (e: React.KeyboardEvent) => {
        const i = years.indexOf(active);
        if (e.key === "ArrowRight") onChange(years[(i + 1) % years.length]);
        if (e.key === "ArrowLeft") onChange(years[(i - 1 + years.length) % years.length]);
    };

    return (
        <div
            role="tablist"
            aria-label="Timeline"
            onKeyDown={handleKey}
            className={cn("flex items-center gap-2", className)}
        >
            {years.map((year) => {
                const isActive = year === active;
                return (
                    <button
                        key={year}
                        type="button"
                        role="tab"
                        id={`year-tab-${year}`}
                        aria-selected={isActive}
                        aria-controls={`year-panel-${year}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => onChange(year)}
                        className={cn(
                            "rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                            isActive
                                ? "bg-white text-fg"
                                : "bg-white/25 text-white backdrop-blur-sm hover:bg-white/40"
                        )}
                    >
                        {year}
                    </button>
                );
            })}
        </div>
    );
}