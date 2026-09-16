import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

export type PromoCardItem = {
    key: string;
    badge: string;
    title: string;
    href: string;
    image: string;
    /** "soft" (fondo claro) o "accent" (fondo de acento) */
    variant?: "soft" | "accent";
    /** "bottom" (imagen abajo) o "top" (imagen arriba) */
    imagePosition?: "bottom" | "top";
};

type Props = {
    item: PromoCardItem;
    className?: string;
};

export default function PromoCard({ item, className }: Props) {
    const {
        badge,
        title,
        href,
        image,
        variant = "soft",
        imagePosition = "bottom",
    } = item;

    const isAccent = variant === "accent";
    const imageFirst = imagePosition === "top";

    return (
        <article
            className={cn(
                "group relative flex min-h-[32rem] flex-col overflow-hidden rounded-card",
                "transition-shadow duration-300 hover:shadow-lg",
                isAccent ? "bg-accent-soft" : "bg-surface",
                className
            )}
        >
            {/* bloque de texto */}
            <div
                className={cn(
                    "flex items-start justify-between gap-4 p-7 lg:p-8",
                    imageFirst && "mt-auto"
                )}
            >
                <div className="min-w-0">
                    <Badge
                        className={cn(
                            isAccent && "border-navy-800/20 bg-transparent text-navy-800"
                        )}
                    >
                        {badge}
                    </Badge>

                    <h3
                        className={cn(
                            "mt-6 text-xl font-semibold leading-snug lg:text-[1.375rem]",
                            isAccent ? "text-navy-800" : "text-fg"
                        )}
                    >
                        <Link
                            href={href}
                            className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                        >
                            {title}
                        </Link>
                    </h3>
                </div>

                <span
                    aria-hidden
                    className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-200",
                        "group-hover:-translate-y-0.5",
                        isAccent ? "bg-white text-navy-800" : "bg-transparent text-fg"
                    )}
                >
          <ArrowUpRight className="size-4" />
        </span>
            </div>

            {/* imagen */}
            <div
                className={cn(
                    "relative flex-1",
                    imageFirst ? "order-first" : "mt-auto",
                    !imageFirst && "mx-7 mb-0 overflow-hidden rounded-t-[0.75rem] lg:mx-8"
                )}
            >
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                />
            </div>
        </article>
    );
}