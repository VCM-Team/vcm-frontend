import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import type { SuccessStory } from "@/src/shared/data/success-stories.data";
import { cn } from "@/src/lib/utils";

type Props = {
    story: SuccessStory;
    href: string;
    className?: string;
};

export default function StoryCard({ story, href, className }: Props) {
    return (
        <article
            className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-card bg-surface",
                "transition-shadow duration-300 ",
                className
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={story.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <Badge className="self-start">{story.badge}</Badge>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-fg">
                    <Link
                        href={href}
                        className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
                    >
                        {story.title}
                    </Link>
                </h3>

                <span className="mt-auto flex items-center gap-2.5 pt-8 text-sm text-fg">
          <span
              aria-hidden
              className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-white transition-transform duration-200 group-hover:-translate-y-0.5"
          >
            <ArrowUpRight className="size-3.5" />
          </span>
          Learn more
        </span>
            </div>
        </article>
    );
}