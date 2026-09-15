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
                "flex h-full flex-col rounded-card border border-border bg-bg p-5",
                "transition-shadow duration-300 hover:shadow-md",
                className
            )}
        >
      <span
          aria-hidden
          className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-sm font-medium text-navy-800"
      >
        {item.number}
      </span>

            <div className="mt-14 flex flex-1 flex-col rounded-card bg-surface p-6">
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