"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Field from "@/src/shared/components/ui/Field";
import Button from "@/src/shared/components/ui/Button";
import { contactSchema, type ContactInput } from "@/src/shared/lib/contact-schema";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

    const onSubmit = async (data: ContactInput) => {
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
            </div>
        );
    }

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
                <p role="alert" className="text-sm text-danger">
                    No se pudo enviar. Intenta de nuevo.
                </p>
            )}

            <Button type="submit" size="sm" disabled={status === "sending"} className="self-end">
                {status === "sending" ? "Sending…" : "OK →"}
            </Button>
        </form>
    );
}