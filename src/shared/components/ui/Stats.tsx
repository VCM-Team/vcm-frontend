import { cn } from "@/src/lib/utils";

export type StatItem = {
    value: string;
    label: string;
};

type Props = {
    items: readonly StatItem[];
    className?: string;
};

export default function Stats({ items, className }: Props) {
    return (
        <dl
            className={cn(
                "grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-border",
                className
            )}
        >
            {items.map((item) => (
                <div key={item.label} className="lg:px-8 lg:first:pl-0">
                    <dt className="inline-block rounded-lg bg-surface px-4 py-2 text-2xl font-semibold text-fg lg:text-3xl">
                        {item.value}
                    </dt>
                    <dd className="mt-4 text-xs uppercase tracking-[0.08em] text-fg-muted">
                        {item.label}
                    </dd>
                </div>
            ))}
        </dl>
    );
}