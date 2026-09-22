"use client";

import { StepShell, TextField } from "./book-demo.ui";
import type { StepProps } from "./book-demo.types";
import { cn } from "@/src/lib/utils";

const CONTACT = {
    title: "Let's get to know you",
    description: "Where should we send your custom growth blueprint?",
    consent:
        "I agree to receive SMS and marketing communications. I understand I can opt out at any time.",
    cta: "Continue",
};

export default function StepContact({ data, update, next }: StepProps) {
    const isValid =
        data.firstName.trim() !== "" &&
        data.lastName.trim() !== "" &&
        data.email.includes("@") &&
        data.phone.trim() !== "" &&
        data.company.trim() !== "" &&
        data.smsConsent;

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
                    label="Work Email"
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

                <TextField
                    label="Company Name"
                    placeholder="Acme Roofing"
                    autoComplete="organization"
                    value={data.company}
                    onChange={(company) => update({ company })}
                />

                <label className="flex cursor-pointer items-start gap-3">
                    <input
                        type="checkbox"
                        checked={data.smsConsent}
                        onChange={(e) => update({ smsConsent: e.target.checked })}
                        className="mt-0.5 size-4 shrink-0 accent-brand-400"
                    />
                    <span className="text-sm leading-snug text-white/60">
                        {CONTACT.consent}
                    </span>
                </label>

                <button
                    type="button"
                    onClick={next}
                    disabled={!isValid}
                    className={cn(
                        "mt-2 w-full cursor-pointer  rounded-full px-9 py-4 text-base font-semibold transition-colors duration-200",
                        isValid
                            ? "bg-brand-400 text-black hover:bg-brand-500 hover:text-white"
                            : "cursor-not-allowed bg-white/10 text-white/40"
                    )}
                >
                    {CONTACT.cta}
                </button>
            </div>
        </StepShell>
    );
}