"use client";

import type { ComponentType } from "react";
import { ChoiceCard, StepShell } from "./book-demo.ui";
import type { StepProps, Timeline } from "./book-demo.types";

const TIMELINE = {
    title: "How soon are you looking to scale?",
    description: "This helps us prioritize your strategy session.",
};

const TIMELINE_OPTIONS: readonly {
    value: Timeline;
    title: string;
    Icon: ComponentType<{ className?: string }>;
}[] = [
    { value: "now", title: "Immediately", Icon: BoltIcon },
    { value: "weeks", title: "Within a few weeks", Icon: ClockIcon },
    { value: "3-months", title: "Within 3 months", Icon: CalendarIcon },
    { value: "6-months", title: "Within 6 months", Icon: CalendarIcon },
];

export default function StepTimeline({ data, update, next }: StepProps) {
    const select = (timeline: Timeline) => {
        update({ timeline });
        next();
    };

    return (
        <StepShell title={TIMELINE.title} description={TIMELINE.description}>
            <div role="radiogroup" className="flex flex-col gap-4">
                {TIMELINE_OPTIONS.map((option) => (
                    <ChoiceCard
                        key={option.value}
                        title={option.title}
                        Icon={option.Icon}
                        selected={data.timeline === option.value}
                        onSelect={() => select(option.value)}
                    />
                ))}
            </div>
        </StepShell>
    );
}

/* ── Iconos ─────────────────────────────── */

function BoltIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}