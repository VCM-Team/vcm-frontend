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
                "rounded-bl-2xl rounded-br-2xl rounded-tl-[3.5rem] rounded-tr-none",
                className
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden rounded-bl-2xl rounded-br-2xl">
                <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <span
                    aria-hidden
                    className="absolute left-5 top-5 grid size-11 place-items-center rounded-full bg-brand-400 text-black"
                >
                    <Icon className="size-5" />
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
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-400 text-black transition-transform duration-200 group-hover:-translate-y-0.5"
                >
                    <ArrowUpRight className="size-5" />
                </span>
            </div>
        </article>
    );
}