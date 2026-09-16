"use client";

import Image from "next/image";
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

const LOGO = "https://workninjas.com/wp-content/uploads/2025/02/colorWN.svg";

/** El índice 0 es la portada: sin barra de progreso. */
const TOTAL_STEPS = 10;

export default function BookDemoContainer() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<BookDemoData>(INITIAL_DATA);

    const update = (patch: Partial<BookDemoData>) =>
        setData((prev) => ({ ...prev, ...patch }));

    const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    const back = () => setStep((s) => Math.max(s - 1, 0));

    const submit = () => {
        // TODO: enviar a /api/book-demo y luego redirigir al calendario
        console.log("book-demo", data);
    };

    const progress = step * 10;
    const stepProps = { data, update, next };

    return (
        <div className="min-h-dvh bg-surface-soft">
            {step > 0 && (
                <>
                    <div
                        className="fixed inset-x-0 top-0 z-50 h-1 bg-brand-400 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{ width: `${progress}%` }}
                    />

                    <header className="sticky top-0 z-40 border-b border-black/5 bg-surface-soft/95 backdrop-blur">
                        <div className="mx-auto flex max-w-5xl items-center gap-6 px-5 py-4">
                            <Image
                                src={LOGO}
                                alt="WorkNinjas"
                                width={200}
                                height={42}
                                className="h-8 w-auto"
                            />

                            <button
                                type="button"
                                onClick={back}
                                className="inline-flex items-center gap-2 text-sm font-medium text-ink-900 transition-colors duration-200 hover:text-brand-500"
                            >
                                <ArrowLeftIcon className="size-4" />
                                Back
                            </button>

                            <span className="ml-auto text-sm font-medium text-ink-600">
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
            {step === 9 && <StepSummary data={data} onSubmit={submit} />}
        </div>
    );
}

function ArrowLeftIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M19 12H6M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}