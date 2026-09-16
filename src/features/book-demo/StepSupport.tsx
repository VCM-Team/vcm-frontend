"use client";

import type { ComponentType } from "react";
import { StepButton, StepShell, ToggleCard } from "./book-demo.ui";
import type { StepProps } from "./book-demo.types";

const SUPPORT = {
    title: "What support are you looking for?",
    description: "Select all areas where you need the most help scaling.",
    cta: "Continue",
};

const SUPPORT_OPTIONS: readonly {
    key: string;
    label: string;
    Icon: ComponentType<{ className?: string }>;
}[] = [
    { key: "job-scheduling", label: "Job Scheduling", Icon: CalendarIcon },
    { key: "supplements", label: "Supplements", Icon: BoxIcon },
    { key: "lead-management", label: "Lead Management", Icon: PeopleIcon },
    { key: "measurement", label: "Measurement", Icon: RulerIcon },
    { key: "crm-build-out", label: "CRM Build-Out", Icon: DatabaseIcon },
    { key: "not-sure", label: "Not Sure Yet", Icon: QuestionIcon },
];

export default function StepSupport({ data, update, next }: StepProps) {
    const toggle = (key: string) => {
        const support = data.support.includes(key)
            ? data.support.filter((s) => s !== key)
            : [...data.support, key];

        update({ support });
    };

    return (
        <StepShell title={SUPPORT.title} description={SUPPORT.description}>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {SUPPORT_OPTIONS.map((option) => (
                    <ToggleCard
                        key={option.key}
                        label={option.label}
                        Icon={option.Icon}
                        selected={data.support.includes(option.key)}
                        onToggle={() => toggle(option.key)}
                    />
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <StepButton onClick={next} disabled={data.support.length === 0}>
                    {SUPPORT.cta}
                </StepButton>
            </div>
        </StepShell>
    );
}

/* ── Iconos ─────────────────────────────── */

function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function BoxIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="m4 7.5 8 4.5 8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function PeopleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="9.5" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3.5 19c0-3 2.7-5 6-5s6 2 6 5M16 6.5a3 3 0 0 1 0 5.5M17.5 14.5c1.8.7 3 2.2 3 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function RulerIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 19h16L4 7v12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M7 15.5h2M10 15.5h2M7 12.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function DatabaseIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    );
}

function QuestionIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M9.8 9.5a2.2 2.2 0 1 1 2.9 2.1c-.5.2-.7.6-.7 1.1v.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="16.2" r="1" fill="currentColor" />
        </svg>
    );
}