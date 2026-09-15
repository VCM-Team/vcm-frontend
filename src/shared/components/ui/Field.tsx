import { forwardRef } from "react";
import { cn } from "@/src/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

const Field = forwardRef<HTMLInputElement, Props>(
    ({ label, error, className, id, ...props }, ref) => (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm text-fg">
                {label} {props.required && <span aria-hidden>*</span>}
            </label>

            <input
                ref={ref}
                id={id}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn(
                    "w-full border-b bg-transparent px-1 py-2.5 text-[15px] text-fg",
                    "placeholder:text-fg-muted/60 focus:outline-none focus:border-accent",
                    "transition-colors",
                    error ? "border-danger" : "border-field-border",
                    className
                )}
                {...props}
            />

            {error && (
                <p id={`${id}-error`} className="text-xs text-danger">
                    {error}
                </p>
            )}
        </div>
    )
);

Field.displayName = "Field";
export default Field;