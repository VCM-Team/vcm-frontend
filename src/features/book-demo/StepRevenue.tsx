"use client";

import { ChoiceCard, StepShell } from "./book-demo.ui";
import type { Revenue, StepProps } from "./book-demo.types";

const REVENUE = {
    title: "What is your current annual revenue?",
    description: "This helps us tailor the strategy to your exact business stage.",
};

const REVENUE_OPTIONS: readonly { value: Revenue; title: string; description: string }[] = [
    { value: "under-1m", title: "Under $1M", description: "Just getting started or building the foundation." },
    { value: "1m-3m", title: "$1M – $3M", description: "Established and looking to optimize." },
    { value: "3m-5m", title: "$3M – $5M", description: "Scaling up operations and team." },
    { value: "5m-plus", title: "$5M+", description: "Market leader focused on market share." },
];

export default function StepRevenue({ data, update, next }: StepProps) {
    const select = (revenue: Revenue) => {
        update({ revenue });
        next();
    };

    return (
        <StepShell title={REVENUE.title} description={REVENUE.description}>
            <div role="radiogroup" className="grid gap-5 sm:grid-cols-2">
                {REVENUE_OPTIONS.map((option) => (
                    <ChoiceCard
                        key={option.value}
                        title={option.title}
                        description={option.description}
                        selected={data.revenue === option.value}
                        onSelect={() => select(option.value)}
                    />
                ))}
            </div>
        </StepShell>
    );
}