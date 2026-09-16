"use client";

import { useState } from "react";
import { SelectPill, StepButton, StepShell } from "./book-demo.ui";
import type { StepProps } from "./book-demo.types";
import { cn } from "@/src/lib/utils";

const CRM = {
    title: "Do you currently use a CRM or job management platform?",
    subtitle: "Which platforms do you use?",
    placeholder: "Other (type and press Enter)",
    cta: "Continue",
};

const PLATFORMS: readonly string[] = [
    "JobNimbus",
    "AccuLynx",
    "Leap",
    "JobProgress",
    "Roofr",
    "ServiceTitan",
    "Jobber",
    "Salesforce",
    "HubSpot",
];

export default function StepCrm({ data, update, next }: StepProps) {
    const [draft, setDraft] = useState("");

    const setUsesCrm = (usesCrm: boolean) => {
        update({ usesCrm, platforms: usesCrm ? data.platforms : [] });
    };

    const toggle = (platform: string) => {
        const platforms = data.platforms.includes(platform)
            ? data.platforms.filter((p) => p !== platform)
            : [...data.platforms, platform];

        update({ platforms });
    };

    const addOther = () => {
        const value = draft.trim();
        if (!value || data.platforms.includes(value)) return;

        update({ platforms: [...data.platforms, value] });
        setDraft("");
    };

    const isValid = data.usesCrm === false || (data.usesCrm === true && data.platforms.length > 0);

    return (
        <StepShell title={CRM.title}>
            <div className="flex justify-center gap-4">
                {[true, false].map((value) => (
                    <button
                        key={String(value)}
                        type="button"
                        aria-pressed={data.usesCrm === value}
                        onClick={() => setUsesCrm(value)}
                        className={cn(
                            "min-w-[120px] rounded-full border px-8 py-3.5 text-base font-semibold transition-colors duration-200",
                            data.usesCrm === value
                                ? "border-brand-400 bg-brand-400 text-white"
                                : "border-black/10 bg-white/70 text-navy-800 hover:border-brand-400"
                        )}
                    >
                        {value ? "Yes" : "No"}
                    </button>
                ))}
            </div>

            {data.usesCrm === true && (
                <div className="mt-10 border-t border-black/10 pt-8">
                    <p className="text-center text-lg font-semibold text-navy-800">
                        {CRM.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {PLATFORMS.map((platform) => (
                            <SelectPill
                                key={platform}
                                label={platform}
                                selected={data.platforms.includes(platform)}
                                onToggle={() => toggle(platform)}
                            />
                        ))}
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <input
                            value={draft}
                            placeholder={CRM.placeholder}
                            onChange={(e) => setDraft(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key !== "Enter") return;
                                e.preventDefault();
                                addOther();
                            }}
                            className="w-full max-w-sm rounded-full border border-black/10 bg-white px-5 py-3 text-[15px] text-navy-800 outline-none transition-colors duration-200 placeholder:text-ink-600/60 focus:border-brand-400"
                        />
                        <button
                            type="button"
                            onClick={addOther}
                            disabled={draft.trim() === ""}
                            className="shrink-0 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Add
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-10 flex justify-center">
                <StepButton onClick={next} disabled={!isValid}>
                    {CRM.cta}
                </StepButton>
            </div>
        </StepShell>
    );
}