"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Field from "@/src/shared/components/ui/Field";
import { contactSchema } from "@/src/shared/lib/contact-schema";

// Solo en este formulario: el consentimiento SMS es obligatorio.
// contactSchema (compartido con book-demo y la API) no cambia.
const contactFormSchema = contactSchema.extend({
    consent: z.literal(true, "Please accept to continue"),
});

type ContactFormInput = z.infer<typeof contactFormSchema>;

type Status = "idle" | "sending" | "sent" | "error";

// Campos de texto que el navegador puede autocompletar
const TEXT_FIELDS = ["firstName", "lastName", "phone", "email"] as const;

const LEGAL_LINK = "font-semibold text-fg underline underline-offset-2 hover:text-brand-500";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        getValues,
        setValue,
        formState: { errors, isValid },
    } = useForm<ContactFormInput>({
        resolver: zodResolver(contactFormSchema),
        mode: "onTouched",
    });

    // Pasa al formulario los valores que el navegador autocompletó sin avisar.
    // Chrome no expone esos valores hasta que el usuario interactúa con la página.
    const syncAutofill = useCallback(() => {
        const form = formRef.current;
        if (!form) return;

        for (const name of TEXT_FIELDS) {
            const input = form.elements.namedItem(name) as HTMLInputElement | null;
            if (input && input.value !== (getValues(name) ?? "")) {
                setValue(name, input.value, { shouldValidate: true });
            }
        }
    }, [getValues, setValue]);

    // Primera sincronización, por si el autocompletado ya está disponible al cargar
    useEffect(() => {
        const timer = window.setTimeout(syncAutofill, 600);
        return () => window.clearTimeout(timer);
    }, [syncAutofill]);

    const onSubmit = async (data: ContactFormInput) => {
        // honeypot: si viene relleno, es un bot. Fingimos éxito.
        if (data.website) {
            setStatus("sent");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            setStatus("sent");
            reset();
        } catch {
            setStatus("error");
        }
    };

    // Antes de enviar, sincroniza el autocompletado y luego valida con los valores reales
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        syncAutofill();
        return handleSubmit(onSubmit)(e);
    };

    if (status === "sent") {
        return (
            <div className="flex h-full min-h-[28rem] flex-col items-center justify-center text-center">
                {/* Check que confirma el envío */}
                <span className="grid size-14 place-items-center rounded-full bg-brand-400/20 text-brand-500">
                    <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden>
                        <path d="m6 12.5 4 4 8-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>

                <p className="mt-6 text-2xl font-semibold text-fg">Message sent</p>
                <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-fg-muted">
                    Thanks for reaching out. Someone from our team will contact you within one business day.
                </p>

                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 cursor-pointer text-sm font-semibold text-brand-500 underline underline-offset-4"
                >
                    Send another message
                </button>
            </div>
        );
    }

    const isSending = status === "sending";
    // Gris mientras el formulario no está completo (pero el botón sigue respondiendo al clic)
    const looksDisabled = !isValid && !isSending;

    return (
        <form
            ref={formRef}
            onSubmit={submit}
            // Cualquier interacción con el formulario sincroniza el autocompletado
            onPointerDown={syncAutofill}
            onFocus={syncAutofill}
            noValidate
            className="flex flex-col gap-6"
        >
            <p className="text-sm text-fg">Please provide your contact information*</p>

            <Field
                id="firstName"
                label="First Name"
                placeholder="Jane"
                required
                autoComplete="given-name"
                error={errors.firstName?.message}
                {...register("firstName")}
            />

            <Field
                id="lastName"
                label="Last Name"
                placeholder="Smith"
                required
                autoComplete="family-name"
                error={errors.lastName?.message}
                {...register("lastName")}
            />

            <Field
                id="phone"
                label="Phone"
                type="tel"
                placeholder="(201) 555-0123"
                required
                autoComplete="tel"
                error={errors.phone?.message}
                {...register("phone")}
            />

            <Field
                id="email"
                label="Email"
                type="email"
                placeholder="name@example.com"
                required
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
            />

            {/* honeypot */}
            <input
                {...register("website")}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] size-px opacity-0"
            />

            {/* Consentimiento SMS: obligatorio en este formulario */}
            <div>
                <div className="flex gap-3">
                    <input
                        id="consent"
                        type="checkbox"
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "consent-error" : undefined}
                        {...register("consent")}
                        className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-field-border accent-accent"
                    />
                    <label htmlFor="consent" className="text-xs leading-relaxed text-fg-muted">
                        I agree to receive text messages from VCM about my inquiry and our services at the phone
                        number provided. Message frequency varies. Message and data rates may apply. Reply STOP to
                        opt out or HELP for help. See our{" "}
                        <Link href="/privacy-policy" className={LEGAL_LINK}>
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms-of-service" className={LEGAL_LINK}>
                            Terms of Service
                        </Link>
                        .
                    </label>
                </div>
                {errors.consent && (
                    <p id="consent-error" className="mt-1.5 pl-7 text-xs text-danger">
                        {errors.consent.message}
                    </p>
                )}
            </div>

            {/* Aviso general: al enviar se acepta la política (sin casilla) */}
            <p className="text-xs leading-relaxed text-fg-muted">
                By submitting this form, you agree to be contacted by VCM and accept our{" "}
                <Link href="/privacy-policy" className={LEGAL_LINK}>
                    Privacy Policy
                </Link>
                .
            </p>

            {status === "error" && (
                <div
                    role="alert"
                    className="flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/10 p-4"
                >
                    <AlertIcon className="mt-0.5 size-5 shrink-0 text-danger" />
                    <div>
                        <p className="text-sm font-semibold text-danger">Something went wrong</p>
                        <p className="mt-1 text-xs leading-relaxed text-fg-muted">
                            We couldn’t send your message. Please check your connection and try again, or contact
                            us directly by email.
                        </p>
                    </div>
                </div>
            )}

            {/* Se ve gris si falta algo, pero al pulsar valida y muestra los errores */}
            <button
                type="submit"
                disabled={isSending}
                aria-busy={isSending}
                aria-disabled={looksDisabled}
                className={
                    looksDisabled
                        ? "inline-flex cursor-pointer items-center gap-2 self-end rounded-full bg-black/10 px-7 py-3 text-[15px] font-semibold leading-none text-black/40 transition-colors duration-300"
                        : "inline-flex cursor-pointer items-center gap-2 self-end rounded-full bg-brand-400 px-7 py-3 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white disabled:cursor-wait disabled:opacity-70"
                }
            >
                {isSending && <SpinnerIcon className="size-4 animate-spin" />}
                {isSending ? "Sending…" : "Send Message"}
            </button>
        </form>
    );
}

/* ── Iconos ─────────────────────────────── */

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