import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const button = cva(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
    "disabled:pointer-events-none disabled:opacity-60",
    {
        variants: {
            variant: {
                accent: "bg-accent text-accent-fg hover:opacity-90",
                dark: "bg-navy-800 text-white hover:opacity-90",
                outline: "border border-border bg-transparent text-fg hover:bg-surface",
            },
            size: {
                sm: "h-11 px-6 text-sm",
                md: "h-14 px-8 text-[15px]",
            },
        },
        defaultVariants: { variant: "accent", size: "md" },
    }
);

type Props = VariantProps<typeof button> &
    React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: string };

export default function Button({ variant, size, className, href, ...props }: Props) {
    const classes = cn(button({ variant, size }), className);

    if (href) {
        return <Link href={href} className={classes} children={props.children} />;
    }
    return <button className={classes} {...props} />;
}