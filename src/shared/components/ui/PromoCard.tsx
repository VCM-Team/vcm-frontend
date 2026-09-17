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
    /** "soft" (fondo negro) o "accent" (fondo amarillo) */
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
                "group relative flex min-h-[34.5rem] flex-col overflow-hidden",
                "rounded-bl-xl rounded-br-xl rounded-tl-[3rem] rounded-tr-none",
                "transition-shadow duration-300 hover:shadow-xl",
                isAccent ? "bg-accent" : "bg-black",
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
                            isAccent
                                ? "border-black/70 text-black"
                                : "border-white/50 text-white"
                        )}
                    >
                        {badge}
                    </Badge>

                    <h3
                        className={cn(
                            "mt-6 text-lg font-medium leading-snug lg:text-xl",
                            isAccent ? "text-black font-semibold" : "text-white"
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
                        isAccent ? "bg-ink-900 text-accent" : "bg-accent text-black"
                    )}
                >
                    <ArrowUpRight className="size-4" />
                </span>
            </div>

            {/* imagen */}
            <div
                className={cn(
                    "relative",
                    imageFirst
                        ? "order-first min-h-0 flex-1 w-full"
                        : "mx-7 mt-auto aspect-[4/3] overflow-hidden rounded-tl-2xl rounded-tr-none lg:mx-8"
                )}
            >
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={cn(
                        "object-center",
                        imageFirst ? "object-contain" : "object-cover"
                    )}
                />
            </div>
        </article>
    );
}