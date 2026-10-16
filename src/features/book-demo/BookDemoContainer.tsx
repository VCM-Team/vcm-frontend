"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { INITIAL_DATA, type BookDemoData } from "./book-demo.types";
import StepIntro from "./StepIntro";
import StepContact from "./StepContact";
import { cn } from "@/src/lib/utils";

const LOGO = "/assets/brand/vcm_text_logo.webp";

// Cada pantalla se monta al llegar a ella: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,translate,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";
const ENTER_FORWARD = `${ENTER} starting:translate-x-10 starting:opacity-0`;
const ENTER_BACK = `${ENTER} starting:-translate-x-10 starting:opacity-0`;
const ENTER_DOWN = `${ENTER} starting:-translate-y-full starting:opacity-0`;
const ENTER_UP = `${ENTER} duration-700 starting:translate-y-6 starting:opacity-0`;
const ENTER_ZOOM = `${ENTER} duration-700 starting:scale-50 starting:opacity-0`;
const ENTER_FADE = `${ENTER} duration-700 starting:opacity-0`;

export default function BookDemoContainer() {
    // 0 = portada, 1 = datos de contacto
    const [step, setStep] = useState<0 | 1>(0);
    // Dirección del último cambio de paso: decide desde qué lado entra la pantalla nueva
    const [dir, setDir] = useState<1 | -1>(1);
    const [data, setData] = useState<BookDemoData>(INITIAL_DATA);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState(false);
    const [done, setDone] = useState(false);

    const update = (patch: Partial<BookDemoData>) =>
        setData((prev) => ({ ...prev, ...patch }));

    const goToContact = () => {
        setDir(1);
        setStep(1);
    };

    const back = () => {
        if (sending) return;
        setDir(-1);
        setStep(0);
    };

    // Envía solo los campos que espera /api/contact (el mismo esquema que el formulario de contacto)
    const submit = async () => {
        if (sending) return;
        setSending(true);
        setSendError(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    email: data.email,
                    // Las dos casillas: la API exige privacy: true
                    consent: data.smsConsent,
                    privacy: data.privacy,
                    website: "",
                }),
            });
            if (!res.ok) throw new Error();
            setDone(true);
        } catch {
            setSendError(true);
        } finally {
            setSending(false);
        }
    };

    /* ── Pantalla final: sin header ── */
    if (done) {
        return (
            <div className="flex min-h-dvh flex-col items-center justify-center bg-ink-900 px-5 py-16 text-center">
                <span className={cn("grid size-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-500", ENTER_ZOOM)}>
                    <CheckIcon className="size-7" />
                </span>

                <h1 className={cn("mt-8 text-3xl font-semibold text-white lg:text-[2.5rem]", ENTER_UP, "delay-200")}>
                    Thanks, {data.firstName || "we got it"}!
                </h1>

                <p className={cn("mt-4 max-w-xl text-base text-white/60 lg:text-lg", ENTER_FADE, "delay-300")}>
                    We received your information. Someone from our team will reach out
                    within one business day to schedule your strategy call.
                </p>

                <div className={cn("mt-10", ENTER_UP, "delay-500")}>
                    <Link
                        href="/"
                        className="inline-flex cursor-pointer items-center rounded-full bg-brand-400 px-9 py-4 text-base font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-dvh overflow-x-clip bg-ink-900">
            {step === 1 && (
                <header className={cn("sticky top-0 z-40 border-b border-white/10 bg-ink-900/95 backdrop-blur", ENTER_DOWN)}>
                    <div className="mx-auto flex max-w-5xl items-center gap-6 px-5 py-4">
                        <Image src={LOGO} alt="VCM" width={200} height={42} className="h-8 w-auto" />

                        <button
                            type="button"
                            onClick={back}
                            disabled={sending}
                            className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white transition-colors duration-200 hover:text-brand-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-white"
                        >
                            <ArrowLeftIcon className="size-4" />
                            Back
                        </button>
                    </div>
                </header>
            )}

            {/* key por paso: al cambiar, la pantalla se remonta y entra desde el lado de la dirección */}
            <div key={step} className={dir === 1 ? ENTER_FORWARD : ENTER_BACK}>
                {step === 0 && <StepIntro next={goToContact} />}

                {step === 1 && (
                    <>
                        {/* El botón de StepContact envía, muestra el spinner y se bloquea durante el envío */}
                        <StepContact data={data} update={update} next={submit} sending={sending} />

                        {/* Error del envío: mismo ancho que el formulario */}
                        {sendError && (
                            <div className="mx-auto max-w-[40rem] px-5 pb-12">
                                <div
                                    role="alert"
                                    className="flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/10 p-4"
                                >
                                    <AlertIcon className="mt-0.5 size-5 shrink-0 text-danger" />
                                    <div>
                                        <p className="text-sm font-semibold text-danger">Something went wrong</p>
                                        <p className="mt-1 text-xs leading-relaxed text-white/60">
                                            We couldn’t send your information. Please check your connection and try again.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
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

function AlertIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5v5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="16.5" r="1" fill="currentColor" />
        </svg>
    );
}