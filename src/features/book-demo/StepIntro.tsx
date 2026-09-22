"use client";

import Image from "next/image";
import { StepButton } from "./book-demo.ui";

const INTRO = {
    logo: "/assets/brand/vcm_text_logo.webp",
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
        <div className="flex min-h-dvh flex-col items-center justify-center bg-ink-900 px-5 py-16 text-center">
            <Image
                src={INTRO.logo}
                alt="VCM"
                width={260}
                height={54}
                priority
                className="h-12 w-auto"
            />

            <span className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2 text-xs font-semibold text-white">
                <span aria-hidden className="size-1.5 rounded-full bg-brand-400" />
                {INTRO.badge}
            </span>

            <h1 className="mt-10 max-w-3xl text-4xl font-bold leading-[1.15] text-white lg:text-6xl">
                {INTRO.title}
                <br />
                <span className="text-brand-400">{INTRO.titleRest}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/60 lg:text-lg">
                {INTRO.description}
            </p>

            <div className="mt-12">
                <StepButton onClick={next}>{INTRO.cta}</StepButton>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
                <CheckIcon className="size-4 text-emerald-500" />
                {INTRO.note}
            </p>
        </div>
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