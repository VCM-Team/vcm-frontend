import { cn } from "@/src/lib/utils";

export type StatItem = {
    /** Número principal, en blanco/negro según el fondo. */
    value: string;
    /** Símbolo o texto en amarillo ANTES del número: "$", ">". */
    prefix?: string;
    /** Símbolo o texto en amarillo DESPUÉS del número: " Days", "K+". */
    suffix?: string;
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
                "grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4",
                className
            )}
        >
            {items.map((item) => (
                <div key={item.label} className="border-l border-black pl-5">
                    <dt className="inline-block rounded-xl bg-[#E5E5E5] px-4 py-2 text-2xl font-semibold text-black lg:text-[1.75rem]">
                        {item.prefix && (
                            <span className="text-accent">{item.prefix}</span>
                        )}
                        {item.value}
                        {item.suffix && (
                            <span className="text-accent">{item.suffix}</span>
                        )}
                    </dt>

                    <dd className="mt-4 text-sm text-black">{item.label}</dd>
                </div>
            ))}
        </dl>
    );
}