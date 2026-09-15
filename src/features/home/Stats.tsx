const STATS = [
    { value: "14 Days", label: "Texto del indicador" },
    { value: "$4.2M", label: "Texto del indicador" },
    { value: "12K+", label: "Texto del indicador" },
    { value: "100%", label: "Texto del indicador" },
] as const;

export default function Stats() {
    return (
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
                {STATS.map((s) => (
                    <div key={s.value} className="lg:px-8 lg:first:pl-0">
                        <dt className="inline-block rounded-lg bg-surface-soft px-4 py-2 text-2xl font-semibold text-ink-900 lg:text-3xl">
                            {s.value}
                        </dt>
                        <dd className="mt-4 text-xs uppercase tracking-[0.08em] text-ink-600">
                            {s.label}
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}