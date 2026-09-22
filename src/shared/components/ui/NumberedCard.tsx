import { cn } from "@/src/lib/utils";

export type NumberedCardItem = {
    number: string;
    title: string;
    description: string;
};

type Props = {
    item: NumberedCardItem;
    className?: string;
};

export default function NumberedCard({ item, className }: Props) {
    return (
        <article
            className={cn(
                "flex h-full flex-col bg-[#DFDFDF] p-5",
                "rounded-bl-[2rem] rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-none",
                "transition-shadow duration-300 hover:shadow-md",
                className
            )}
        >
            <span
                aria-hidden
                className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-lg font-bold text-black"
            >
                {item.number}
            </span>

            <div
                className={cn(
                    "mt-19 flex flex-1 flex-col bg-[#EDEDED] p-6",
                    "rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-none"
                )}
            >
                <h3 className="text-lg font-semibold leading-snug text-fg">
                    {item.title}
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-fg-muted">
                    {item.description}
                </p>
            </div>
        </article>
    );
}