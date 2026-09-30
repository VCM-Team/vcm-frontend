import Container from "./Container";
import Badge from "./Badge";

// Mismo formato de texto que los posts del blog
const LEGAL_BODY = [
    "text-[15px] leading-relaxed text-fg-muted",
    "[&>*:first-child]:mt-0",
    "[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-fg",
    "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-fg",
    "[&_p]:my-4",
    "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6",
    "[&_li]:pl-1 [&_li::marker]:text-accent",
    "[&_strong]:font-semibold [&_strong]:text-fg",
    "[&_a]:text-accent [&_a]:underline-offset-2 hover:[&_a]:underline",
].join(" ");

type Props = {
    badge: string;
    title: string;
    updated: string;
    children: React.ReactNode;
};

export default function LegalPage({ badge, title, updated, children }: Props) {
    return (
        <div className="pt-header-sm lg:pt-header">
            <section className="mx-3 lg:mt-8">
                <div className="overflow-hidden rounded-panel bg-gradient-to-b from-brand-400/12 to-bg">
                    <Container className="py-14 lg:py-20">
                        <Badge>{badge}</Badge>
                        <h1 className="mt-8 text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                        <p className="mt-4 text-sm text-fg-muted">Last updated: {updated}</p>
                    </Container>
                </div>
            </section>

            <Container className="max-w-3xl py-14 lg:py-20">
                <div className={LEGAL_BODY}>{children}</div>
            </Container>
        </div>
    );
}