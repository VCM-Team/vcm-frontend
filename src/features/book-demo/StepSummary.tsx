"use client";

import { StepButton } from "./book-demo.ui";
import type { BookDemoData } from "./book-demo.types";

const SUMMARY = {
    title: "You look like a strong fit.",
    heading: "Your Profile Summary",
    cta: "Schedule Strategy Call",
};

const REVENUE_LABELS: Record<string, string> = {
    "under-1m": "Under $1M",
    "1m-3m": "$1M – $3M",
    "3m-5m": "$3M – $5M",
    "5m-plus": "$5M+",
};

const TIMELINE_LABELS: Record<string, string> = {
    now: "Immediately",
    weeks: "Within a few weeks",
    "3-months": "Within 3 months",
    "6-months": "Within 6 months",
};

const SUPPORT_LABELS: Record<string, string> = {
    "job-scheduling": "Job Scheduling",
    supplements: "Supplements",
    "lead-management": "Lead Management",
    measurement: "Measurement",
    "crm-build-out": "CRM Build-Out",
    "not-sure": "Not Sure Yet",
};

export default function StepSummary({
                                        data,
                                        onSubmit,
                                        sending = false,
                                        error = false,
                                    }: {
    data: BookDemoData;
    onSubmit: () => void;
    sending?: boolean;
    error?: boolean;
}) {
    const rows: { label: string; value: string }[] = [
        { label: "Company Stage", value: data.revenue ? REVENUE_LABELS[data.revenue] : "—" },
        { label: "Timeline", value: data.timeline ? TIMELINE_LABELS[data.timeline] : "—" },
        {
            label: "Primary Focus",
            value:
                data.support.length > 0
                    ? data.support.map((s) => SUPPORT_LABELS[s] ?? s).join(" & ")
                    : "—",
        },
        {
            label: "Territory",
            value: `${data.territories.length} ${data.territories.length === 1 ? "region" : "regions"}`,
        },
    ];

    return (
        <div className="mx-auto w-full max-w-2xl px-5 py-12 text-center lg:py-20">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                <CheckIcon className="size-7" />
            </span>

            <h1 className="mt-8 text-3xl font-semibold text-white lg:text-[2.5rem]">
                {SUMMARY.title}
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base text-white/60 lg:text-lg">
                Based on your responses, {data.company || "your company"} is perfectly
                positioned for our scaling system. Let&apos;s schedule your strategy call.
            </p>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] p-7 text-left">
                <p className="text-lg font-semibold text-white">{SUMMARY.heading}</p>

                <dl className="mt-6 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                    {rows.map((row) => (
                        <div key={row.label}>
                            <dt className="text-sm text-white/55">{row.label}</dt>
                            <dd className="mt-1 font-semibold text-white">{row.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            {error && (
                <div
                    role="alert"
                    className="mt-8 flex items-start gap-3 rounded-2xl border border-danger/40 bg-danger/10 p-4 text-left"
                >
                    <AlertIcon className="mt-0.5 size-5 shrink-0 text-danger" />
                    <div>
                        <p className="text-sm font-semibold text-danger">
                            Ups, algo salió mal
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60">
                            No pudimos enviar tu información. Revisa tu conexión e inténtalo
                            de nuevo.
                        </p>
                    </div>
                </div>
            )}

            <div className="mt-10">
                <StepButton onClick={onSubmit} disabled={sending}>
                    {sending ? (
                        <>
                            <SpinnerIcon className="size-4 animate-spin" />
                            Sending…
                        </>
                    ) : (
                        <>
                            {SUMMARY.cta}
                            <ArrowRightIcon className="size-4" />
                        </>
                    )}
                </StepButton>
            </div>
        </div>
    );
}

/* ── Iconos ─────────────────────────────── */

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="m8.5 12 2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function AlertIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5v5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="16.5" r="1" fill="currentColor" />
        </svg>
    );
}

function SpinnerIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
            <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}