"use client";

import Link from "next/link";
import { StepShell, TextField } from "./book-demo.ui";
import type { StepProps } from "./book-demo.types";
import { cn } from "@/src/lib/utils";

const CONTACT = {
    title: "Let's get to know you",
    description: "We'll use these details to schedule your free strategy call.",
    cta: "Request My Call",
    sending: "Sending…",
};

// Mismas reglas que contactSchema, para que /api/contact no rechace el envío
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LEGAL_LINK =
    "font-semibold text-white underline underline-offset-2 transition-colors hover:text-brand-400";

type Props = StepProps & {
    /** Envío en curso: el botón muestra el spinner y se bloquea */
    sending?: boolean;
};

export default function StepContact({ data, update, next, sending = false }: Props) {
    const isValid =
        data.firstName.trim() !== "" &&
        data.lastName.trim() !== "" &&
        EMAIL_PATTERN.test(data.email.trim()) &&
        data.phone.trim().length >= 7 &&
        data.privacy;

    const canSubmit = isValid && !sending;

    return (
        <StepShell title={CONTACT.title} description={CONTACT.description}>
            <div className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                        label="First Name"
                        placeholder="John"
                        autoComplete="given-name"
                        value={data.firstName}
                        onChange={(firstName) => update({ firstName })}
                    />
                    <TextField
                        label="Last Name"
                        placeholder="Doe"
                        autoComplete="family-name"
                        value={data.lastName}
                        onChange={(lastName) => update({ lastName })}
                    />
                </div>

                <TextField
                    label="Email"
                    type="email"
                    placeholder="john@company.com"
                    autoComplete="email"
                    value={data.email}
                    onChange={(email) => update({ email })}
                />

                <TextField
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 000-0000"
                    autoComplete="tel"
                    value={data.phone}
                    onChange={(phone) => update({ phone })}
                />

                {/* Consentimiento SMS: opcional (TCPA: no puede ser condición para enviar) */}
                <label className="flex cursor-pointer items-start gap-3">
                    <input
                        type="checkbox"
                        checked={data.smsConsent}
                        onChange={(e) => update({ smsConsent: e.target.checked })}
                        className="mt-0.5 size-4 shrink-0 cursor-pointer accent-brand-400"
                    />
                    <span className="text-xs leading-relaxed text-white/60">
                        I agree to receive text messages from VCM about my inquiry and our services at the phone
                        number provided. Message frequency varies. Message and data rates may apply. Reply STOP to
                        opt out or HELP for help. Consent is not a condition of purchase. See our{" "}
                        <Link href="/privacy-policy" target="_blank" className={LEGAL_LINK}>
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms-of-service" target="_blank" className={LEGAL_LINK}>
                            Terms of Service
                        </Link>
                        .
                    </span>
                </label>

                {/* Contacto + política de privacidad: obligatorio para enviar */}
                <label className="flex cursor-pointer items-start gap-3">
                    <input
                        type="checkbox"
                        checked={data.privacy}
                        onChange={(e) => update({ privacy: e.target.checked })}
                        className="mt-0.5 size-4 shrink-0 cursor-pointer accent-brand-400"
                    />
                    <span className="text-xs leading-relaxed text-white/60">
                        By submitting this form, you agree to be contacted by VCM and accept our{" "}
                        <Link href="/privacy-policy" target="_blank" className={LEGAL_LINK}>
                            Privacy Policy
                        </Link>
                        .
                    </span>
                </label>

                {/* Botón: bloqueado si faltan datos o mientras se envía; con spinner durante el envío */}
                <button
                    type="button"
                    onClick={next}
                    disabled={!canSubmit}
                    aria-busy={sending}
                    className={cn(
                        "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-semibold transition-colors duration-200",
                        canSubmit
                            ? "cursor-pointer bg-brand-400 text-black hover:bg-brand-500 hover:text-white"
                            : sending
                                ? "cursor-wait bg-brand-400/70 text-black"
                                : "cursor-not-allowed bg-white/10 text-white/40"
                    )}
                >
                    {sending && <SpinnerIcon className="size-5 animate-spin" />}
                    {sending ? CONTACT.sending : CONTACT.cta}
                </button>
            </div>
        </StepShell>
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