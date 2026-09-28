import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import type { TeamMember } from "@/src/shared/data/team.data";
import { cn } from "@/src/lib/utils";

type Props = {
    member: TeamMember;
    href?: string;
    className?: string;
};

export default function PersonCard({ member, href, className }: Props) {
    return (
        <article
            className={cn(
                "group relative flex h-full flex-col bg-[#121212] p-4",
                "rounded-tl-[2.5rem] rounded-tr-none rounded-bl-3xl rounded-br-3xl",
                className
            )}
        >
            <div className="flex flex-1 items-center justify-center px-2 py-8">
                {/* Aro: degradado amarillo arriba que se desvanece hacia abajo (1px de grosor) */}
                <span className="block aspect-square w-full max-w-[13rem] rounded-full bg-gradient-to-b from-brand-400 via-brand-400/30 to-transparent p-px">
                    <span className="relative block size-full overflow-hidden rounded-full bg-[#1C1C1C]">
                        <Image
                            src={member.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 13rem, 50vw"
                            className="object-cover object-top"
                        />
                    </span>
                </span>
            </div>

            {/* Misma fila que el texto: la flecha queda abajo a la derecha sin sumar altura */}
            <div
                className={cn(
                    "flex min-h-[5rem] items-end justify-between gap-3 bg-[#262626] px-5 py-4",
                    "rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-none"
                )}
            >
                <div className="min-w-0 self-center">
                    <h3 className="truncate text-base font-semibold text-white">
                        {href ? (
                            <Link
                                href={href}
                                className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                            >
                                {member.name}
                            </Link>
                        ) : (
                            member.name
                        )}
                    </h3>
                    <p className="truncate text-sm text-white/85">{member.role}</p>
                </div>

                {href && (
                    <span
                        aria-hidden
                        className={cn(
                            "grid size-10 shrink-0 place-items-center rounded-full bg-brand-400 text-black",
                            "transition-[background-color,translate] duration-200",
                            "group-hover:-translate-y-0.5 group-hover:bg-[#F2EBD8]",
                            "group-focus-within:-translate-y-0.5 group-focus-within:bg-[#F2EBD8]"
                        )}
                    >
                        <ArrowUpRight className="size-4" />
                    </span>
                )}
            </div>
        </article>
    );
}