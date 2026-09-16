import Image from "next/image";
import Container from "./Container";
import { cn } from "@/src/lib/utils";

export type IconListItem = {
    key: string;
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
};

type Props = {
    title: string;
    titleAccent?: string;
    description: string;
    items: readonly IconListItem[];
    image: string;
    className?: string;
};

export default function IconListSplit({
                                          title,
                                          titleAccent,
                                          description,
                                          items,
                                          image,
                                          className,
                                      }: Props) {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* texto — segundo en móvil */}
                    <div className="order-last lg:order-first">
                        <h2 className="max-w-[18ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                            {title}
                            {titleAccent && (
                                <>
                                    {" "}
                                    <span className="text-accent">{titleAccent}</span>
                                </>
                            )}
                        </h2>

                        <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-fg-muted">
                            {description}
                        </p>

                        <ul className="mt-10 flex flex-col gap-4">
                            {items.map(({ key, title: itemTitle, description: itemDesc, Icon }) => (
                                <li
                                    key={key}
                                    className="flex items-start gap-5 rounded-card bg-surface p-5 lg:p-6"
                                >
                  <span
                      aria-hidden
                      className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-navy-800"
                  >
                    <Icon className="size-5" />
                  </span>

                                    <div className="min-w-0">
                                        <h3 className="text-base font-semibold text-fg">{itemTitle}</h3>
                                        <p className="mt-1.5 text-[15px] leading-relaxed text-fg-muted">
                                            {itemDesc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* imagen — primera en móvil */}
                    <div className="relative order-first aspect-[4/3] lg:order-last lg:aspect-square">
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}