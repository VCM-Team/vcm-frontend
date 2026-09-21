import { cn } from "@/src/lib/utils";

export default function Pill({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <li
            className={cn(
                "inline-flex items-center gap-2.5 rounded-full bg-[#E5E5E5] py-2.5 pl-2.5 pr-6",
                className
            )}
        >
            <span
                aria-hidden
                className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-white"
            >
                <CheckIcon />
            </span>
            <span className="text-sm text-fg">{children}</span>
        </li>
    );
}

function CheckIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="m5 13 4.5 4.5L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}