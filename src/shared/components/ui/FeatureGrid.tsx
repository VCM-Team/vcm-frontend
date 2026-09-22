import Container from "./Container";
import { cn } from "@/src/lib/utils";

export type FeatureGridItem = {
    key: string;
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
};

type Props = {
    title: string;
    titleAccent?: string;
    items: readonly FeatureGridItem[];
    className?: string;
};

export default function FeatureGrid({
                                        title,
                                        titleAccent,
                                        items,
                                        className,
                                    }: Props) {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <Container>
                <h2 className="max-w-[20ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]">
                    {title}
                    {titleAccent && (
                        <>
                            {" "}
                            <span className="text-accent">{titleAccent}</span>
                        </>
                    )}
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-y-16">
                    {items.map(({ key, title: itemTitle, description, Icon }) => (
                        <article key={key}>
              <span
                  aria-hidden
                  className="grid size-14 place-items-center rounded-full bg-[#F2EAD6] text-navy-800"
              >
                <Icon className="size-6" />
              </span>

                            <h3 className="mt-6 text-lg font-semibold text-fg">{itemTitle}</h3>

                            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-fg-muted">
                                {description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}