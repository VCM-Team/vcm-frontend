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
                "group flex h-full flex-col rounded-card border border-border bg-bg p-5",
                "transition-colors duration-300 hover:border-transparent hover:bg-accent",
                className
            )}
        >
      <span
          aria-hidden
          className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-navy-800 transition-colors duration-300 group-hover:bg-transparent"
      >
        <Icon className="size-6" />
      </span>

            <div className="mt-14 flex flex-1 flex-col rounded-card bg-surface p-6 transition-colors duration-300 group-hover:bg-white/35">
                <h3 className="text-lg font-semibold leading-snug text-fg">
                    {item.title}
                </h3>
                <p className="mt-6 text-[15px] leading-relaxed text-fg-muted transition-colors duration-300 group-hover:text-navy-800">
                    {item.description}
                </p>
            </div>
        </article>
    );
}