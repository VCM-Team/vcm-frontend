"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { INITIAL_DATA, type BookDemoData } from "./book-demo.types";
import StepIntro from "./StepIntro";
import StepContact from "./StepContact";
import StepRevenue from "./StepRevenue";
import StepTerritories from "./StepTerritories";
import StepTenure from "./StepTenure";
import StepSupport from "./StepSupport";
import StepCrm from "./StepCrm";
import StepTimeline from "./StepTimeline";
import StepSource from "./StepSource";
import StepSummary from "./StepSummary";

const LOGO = "/assets/brand/vcm_text_logo.webp";

/** El índice 0 es la portada: sin barra de progreso. */
const TOTAL_STEPS = 10;

export default function BookDemoContainer() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<BookDemoData>(INITIAL_DATA);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState(false);
    const [done, setDone] = useState(false);

    const update = (patch: Partial<BookDemoData>) =>
        setData((prev) => ({ ...prev, ...patch }));

    const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    const back = () => setStep((s) => Math.max(s - 1, 0));

    const submit = async () => {
        setSending(true);
        setSendError(false);
        try {
            const res = await fetch("/api/book-demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            setSending(false);
            setDone(true);
        } catch {
            setSending(false);
            setSendError(true);
        }
    };

    const progress = step * 10;
    const stepProps = { data, update, next };

    /* ── Pantalla final: sin header ni barra de progreso ── */
    if (done) {
        return (
            <div className="flex min-h-dvh flex-col items-center justify-center bg-ink-900 px-5 py-16 text-center">
                <span className="grid size-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <CheckIcon className="size-7" />
                </span>

                <h1 className="mt-8 text-3xl font-semibold text-white lg:text-[2.5rem]">
                    Thanks, {data.firstName || "we got it"}!
                </h1>

                <p className="mt-4 max-w-xl text-base text-white/60 lg:text-lg">
                    We received your assessment. Someone from our team will reach out
                    within one business day to schedule your strategy call.
                </p>

                <Link
                    href="/"
                    className="mt-10 inline-flex cursor-pointer items-center rounded-full bg-brand-400 px-9 py-4 text-base font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white"
                >
                    Back to home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-dvh bg-ink-900">
            {step > 0 && (
                <>
                    <div
                        className="fixed inset-x-0 top-0 z-50 h-1 bg-brand-400 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{ width: `${progress}%` }}
                    />

                    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-900/95 backdrop-blur">
                        <div className="mx-auto flex max-w-5xl items-center gap-6 px-5 py-4">
                            <Image
                                src={LOGO}
                                alt="VCM"
                                width={200}
                                height={42}
                                className="h-8 w-auto"
                            />

                            <button
                                type="button"
                                onClick={back}
                                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-brand-400"
                            >
                                <ArrowLeftIcon className="size-4" />
                                Back
                            </button>

                            <span className="ml-auto text-sm font-medium text-white/60">
                                {progress}% Completed
                            </span>
                        </div>
                    </header>
                </>
            )}

            {step === 0 && <StepIntro next={next} />}
            {step === 1 && <StepContact {...stepProps} />}
            {step === 2 && <StepRevenue {...stepProps} />}
            {step === 3 && <StepTerritories {...stepProps} />}
            {step === 4 && <StepTenure {...stepProps} />}
            {step === 5 && <StepSupport {...stepProps} />}
            {step === 6 && <StepCrm {...stepProps} />}
            {step === 7 && <StepTimeline {...stepProps} />}
            {step === 8 && <StepSource {...stepProps} />}
            {step === 9 && (
                <StepSummary
                    data={data}
                    onSubmit={submit}
                    sending={sending}
                    error={sendError}
                />
            )}
        </div>
    );
}

/* ── Iconos ─────────────────────────────── */

function ArrowLeftIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M19 12H6M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="m8.5 12 2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}