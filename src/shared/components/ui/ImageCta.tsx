import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

type Props = {
    title: string;
    titleRest?: string;
    cta: { label: string; href: string };
    image: string;
    Icon?: React.ComponentType<{ className?: string }>;
    className?: string;
};

export default function ImageCta({
                                     title,
                                     titleRest,
                                     cta,
                                     image,
                                     Icon,
                                     className,
                                 }: Props) {
    return (
        <section className={cn("pb-16 lg:pb-24", className)}>
            <Container>
                <div className="relative isolate overflow-hidden rounded-card">
                    <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]">
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 72rem, 100vw"
                            className="object-cover object-center"
                        />
                    </div>

                    <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                    />

                    {Icon && (
                        <span
                            aria-hidden
                            className="absolute left-6 top-6 grid size-11 place-items-center rounded-full bg-white text-navy-800"
                        >
              <Icon className="size-5" />
            </span>
                    )}

                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:inset-x-9 lg:bottom-9">
                        <h2 className="max-w-[22ch] text-xl font-semibold leading-snug text-white lg:text-2xl">
                            {title}
                            {titleRest && (
                                <>
                                    <br />
                                    {titleRest}
                                </>
                            )}
                        </h2>

                        <div className="flex shrink-0 items-center gap-2">
                            <Button href={cta.href} size="sm">
                                {cta.label}
                            </Button>
                            <span
                                aria-hidden
                                className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-navy-800"
                            >
                <ArrowUpRight className="size-4" />
              </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}