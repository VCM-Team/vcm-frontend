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
                "group relative flex h-full flex-col bg-[#DFDFDF] p-4",
                "rounded-bl-[2rem] rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-none",
                className
            )}
        >
            <div className="flex flex-1 items-center justify-center px-2 py-8">
                <span className="relative aspect-square w-full max-w-[13rem] overflow-hidden rounded-full bg-[#EDEDED]">
                    <Image
                        src={member.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 13rem, 50vw"
                        className="object-cover object-top"
                    />
                </span>
            </div>

            <div
                className={cn(
                    "flex min-h-[5rem] items-center justify-between gap-3 bg-[#EDEDED] px-5 py-4",
                    "rounded-bl-2xl rounded-br-2xl rounded-tl-2xl rounded-tr-none"
                )}
            >
                <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-fg">
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
                    <p className="truncate text-sm text-fg-muted">{member.role}</p>
                </div>

                {href && (
                    <span
                        aria-hidden
                        className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-400 text-black transition-transform duration-200 group-hover:-translate-y-0.5"
                    >
                        <ArrowUpRight className="size-4" />
                    </span>
                )}
            </div>
        </article>
    );
}