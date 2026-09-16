"use client";

import Image from "next/image";
import { StepButton } from "./book-demo.ui";

const INTRO = {
    logo: "https://workninjas.com/wp-content/uploads/2025/02/colorWN.svg",
    badge: "Scale Readiness Diagnostic",
    title: "Ready to scale your",
    titleRest: "roofing company?",
    description:
        "Take our 2-minute growth assessment to see if you qualify for our premium scaling blueprint and a complimentary strategy call.",
    cta: "Start Assessment",
    note: "Takes about 2 minutes",
};

export default function StepIntro({ next }: { next: () => void }) {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-5 py-16 text-center">
            <Image
                src={INTRO.logo}
                alt="WorkNinjas"
                width={260}
                height={54}
                priority
                className="h-12 w-auto"
            />

            <span className="mt-10 rounded-full border border-brand-400/40 bg-white/60 px-5 py-2 text-sm font-semibold text-brand-500">
                {INTRO.badge}
            </span>

            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.1] text-navy-800 lg:text-6xl">
                {INTRO.title}
                <br />
                <span className="text-brand-400">{INTRO.titleRest}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-ink-600 lg:text-lg">
                {INTRO.description}
            </p>

            <div className="mt-12">
                <StepButton onClick={next}>
                    {INTRO.cta}
                    <ArrowRightIcon className="size-4" />
                </StepButton>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-sm text-ink-600">
                <CheckIcon className="size-4 text-emerald-500" />
                {INTRO.note}
            </p>
        </div>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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