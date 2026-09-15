import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import type { BlogPost } from "@/src/shared/data/blog.data";

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="group flex h-full flex-col rounded-card bg-bg/60 p-4 transition-shadow duration-300 hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[0.75rem]">
                <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-fg-muted">
                {post.category}
            </p>

            <h3 className="mt-2 text-lg font-semibold leading-snug text-fg">
                <Link
                    href={`/blog/${post.slug}`}
                    className="after:absolute after:inset-0 focus-visible:outline-none"
                >
                    {post.title}
                </Link>
            </h3>

            <div className="mt-auto flex justify-end pt-6">
        <span className="grid size-8 place-items-center text-fg transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-accent">
          <ArrowUpRight className="size-4" />
        </span>
            </div>
        </article>
    );
}