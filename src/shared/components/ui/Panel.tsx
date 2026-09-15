import { cn } from "@/src/lib/utils";

export default function Panel({
                                  className,
                                  children,
                              }: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={cn("bg-surface lg:mx-3 lg:rounded-panel", className)}>
            {children}
        </div>
    );
}