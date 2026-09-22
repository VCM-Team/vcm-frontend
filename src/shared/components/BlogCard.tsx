import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import type { BlogPost } from "@/src/shared/data/blog.data";
import { cn } from "@/src/lib/utils";

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article
            className={cn(
                "group relative flex h-full flex-col overflow-hidden",
                "bg-gradient-to-b from-transparent from-[45%] to-black to-[45%]",
                "rounded-bl-2xl rounded-br-2xl rounded-tl-[3rem] rounded-tr-none"
            )}
        >
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>

            <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                    {post.category}
                </p>

                <h3 className="mt-3 max-w-[24ch] text-base font-normal leading-snug text-white">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="after:absolute after:inset-0 focus-visible:outline-none"
                    >
                        {post.title}
                    </Link>
                </h3>

                <div className="mt-auto flex justify-end pt-6">
                    <span className="grid size-10 place-items-center rounded-full bg-brand-400 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="size-4" />
                    </span>
                </div>
            </div>
        </article>
    );
}