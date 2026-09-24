"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Field from "@/src/shared/components/ui/Field";
import { contactSchema, type ContactInput } from "@/src/shared/lib/contact-schema";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<ContactInput>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const onSubmit = async (data: ContactInput) => {
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

    if (status === "sent") {
        return (
            <div className="rounded-card bg-bg p-10 text-center">
                <p className="text-lg font-semibold text-fg">Mensaje enviado</p>
                <p className="mt-2 text-sm text-fg-muted">
                    Texto de confirmación — reemplázalo.
                </p>

                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 cursor-pointer text-sm font-semibold text-brand-500 underline underline-offset-4"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    const isSending = status === "sending";

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
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

            <Field
                id="company"
                label="Company"
                placeholder="Acme Corporation"
                required
                autoComplete="organization"
                error={errors.company?.message}
                {...register("company")}
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

            <div className="flex gap-3">
                <input
                    id="consent"
                    type="checkbox"
                    {...register("consent")}
                    className="mt-0.5 size-4 shrink-0 rounded border-field-border accent-accent"
                />
                <label htmlFor="consent" className="text-xs leading-relaxed text-fg-muted">
                    Texto de consentimiento SMS — redáctalo tú.
                </label>
            </div>
            {errors.consent && <p className="-mt-3 text-xs text-danger">{errors.consent.message}</p>}

            {status === "error" && (
                <div
                    role="alert"
                    className="flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/10 p-4"
                >
                    <AlertIcon className="mt-0.5 size-5 shrink-0 text-danger" />
                    <div>
                        <p className="text-sm font-semibold text-danger">
                            Ups, algo salió mal
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-fg-muted">
                            No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de
                            nuevo, o escríbenos directamente por correo.
                        </p>
                    </div>
                </div>
            )}

            <button
                type="submit"
                disabled={!isValid || isSending}
                className="inline-flex cursor-pointer items-center gap-2 self-end rounded-full bg-brand-400 px-7 py-3 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white disabled:cursor-not-allowed disabled:bg-black/10 disabled:text-black/40 disabled:hover:bg-black/10 disabled:hover:text-black/40"
            >
                {isSending && <SpinnerIcon className="size-4 animate-spin" />}
                {isSending ? "Sending…" : "OK →"}
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