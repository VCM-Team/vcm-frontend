"use client";

import { ChoiceCard, StepShell } from "./book-demo.ui";
import type { StepProps, Tenure } from "./book-demo.types";

const TENURE = {
    title: "How long have you been in business?",
    description: "Select the range that best applies to your company.",
};

const TENURE_OPTIONS: readonly { value: Tenure; title: string }[] = [
    { value: "under-1", title: "Less than 1 year" },
    { value: "1-3", title: "1–3 years" },
    { value: "3-5", title: "3–5 years" },
    { value: "5-plus", title: "5+ years" },
];

export default function StepTenure({ data, update, next }: StepProps) {
    const select = (tenure: Tenure) => {
        update({ tenure });
        next();
    };

    return (
        <StepShell title={TENURE.title} description={TENURE.description}>
            <div role="radiogroup" className="flex flex-col gap-4">
                {TENURE_OPTIONS.map((option) => (
                    <ChoiceCard
                        key={option.value}
                        title={option.title}
                        selected={data.tenure === option.value}
                        onSelect={() => select(option.value)}
                    />
                ))}
            </div>
        </StepShell>
    );
}