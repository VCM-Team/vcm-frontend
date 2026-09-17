import { cn } from "@/src/lib/utils";

export default function Badge({
                                  className,
                                  children,
                              }: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border  border-black border-solid bg-transparent px-4 py-1",
                "text-xs font-medium uppercase tracking-[0.08em] text-fg",
                className
            )}
        >
      {children}
    </span>
    );
}