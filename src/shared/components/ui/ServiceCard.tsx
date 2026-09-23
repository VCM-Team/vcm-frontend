import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

export type ServiceCardItem = {
    key: string;
    title: string;
    href: string;
    image: string;
    Icon: React.ComponentType<{ className?: string }>;
};

type Props = {
    item: ServiceCardItem;
    className?: string;
};

export default function ServiceCard({ item, className }: Props) {
    const { Icon } = item;

    return (
        <article
            className={cn(
                "group relative flex h-full flex-col overflow-hidden bg-black",
                "rounded-tl-[5.25rem] rounded-tr-none rounded-bl-3xl rounded-br-3xl",
                className
            )}
        >
            <div className="relative aspect-square overflow-hidden rounded-tl-[5.25rem] rounded-tr-none rounded-bl-3xl rounded-br-3xl">
                <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-[scale] duration-500 group-hover:scale-[1.04]"
                />

                <span
                    aria-hidden
                    className="absolute left-7 top-9 grid size-11 place-items-center rounded-full bg-brand-400 text-black"
                >
                    <Icon className="size-6" />
                </span>
            </div>

            <div className="flex flex-1 items-center justify-between gap-4 px-6 py-6">
                <h3 className="max-w-[18ch] text-base font-normal leading-snug text-white">
                    <Link
                        href={item.href}
                        className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                    >
                        {item.title}
                    </Link>
                </h3>

                <span
                    aria-hidden
                    className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-full bg-brand-400 text-black",
                        "transition-[background-color,translate] duration-200",
                        "group-hover:-translate-y-0.5 group-hover:bg-[#F2EBD8]",
                        "group-focus-within:-translate-y-0.5 group-focus-within:bg-[#F2EBD8]"
                    )}
                >
                    <ArrowUpRight className="size-5" />
                </span>
            </div>
        </article>
    );
}