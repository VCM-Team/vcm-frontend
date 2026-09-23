import { cn } from "@/src/lib/utils";

export type IconCardItem = {
    key: string;
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
};

type Props = {
    item: IconCardItem;
    className?: string;
};

export default function IconCard({ item, className }: Props) {
    const { Icon } = item;

    return (
        <article
            className={cn(
                "group flex h-full flex-col bg-[#DFDFDF] p-5",
                "rounded-tl-[2.5rem] rounded-tr-none rounded-bl-3xl rounded-br-3xl",
                className
            )}
        >
            <span
                aria-hidden
                className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-black"
            >
                <Icon className="size-6" />
            </span>

            <div
                className={cn(
                    "mt-14 flex flex-1 flex-col bg-[#EDEDED] p-6",
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