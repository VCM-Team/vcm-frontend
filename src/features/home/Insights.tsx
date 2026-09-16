import Image from "next/image";
import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";

type InsightItem = {
    key: string;
    category: string;
    title: string;
    href: string;
    image: string;
};

const INSIGHTS = {
    badge: "Insights",
    title: "Insights from the Field",
    description:
        "Stay ahead with expert advice and actionable tips to grow your roofing business confidently.",
    cta: { label: "More Insights", href: "/blog" },
};

const INSIGHTS_ITEMS: readonly InsightItem[] = [
    {
        key: "ire",
        category: "Business Development",
        title:
            "International Roofing Expo (IRE): What It Is, When It Happens, and Why Roofers Take It Seriously",
        href: "/blog/international-roofing-expo-ire",
        image:
            "https://workninjas.com/wp-content/uploads/2025/06/DSC01065-Editada-1024x693.jpg",
    },
    {
        key: "subcontractors",
        category: "Business Development",
        title: "Communication with Subcontractors and Manufacturers",
        href: "/blog/communication-with-subcontractors-and-manufacturers",
        image: "https://workninjas.com/wp-content/uploads/2025/06/NH-1024x601.png",
    },
];

export default function Insights() {
    return (
        <section className="bg-gradient-to-b from-surface/40 to-bg py-16 lg:py-24">
            <Container>
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
                    <Badge>{INSIGHTS.badge}</Badge>
                    <h2 className="text-4xl font-semibold text-navy-800 lg:text-5xl">
                        {INSIGHTS.title}
                    </h2>
                    <p className="text-base text-fg-muted lg:text-lg">
                        {INSIGHTS.description}
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {INSIGHTS_ITEMS.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className="group flex flex-col gap-5 rounded-[2rem] bg-accent-subtle p-4 transition-colors hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:flex-row sm:gap-6 sm:p-5"
                        >
                            <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden rounded-3xl sm:w-[44%]">
                                <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 100vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-1 flex-col justify-center gap-3 pb-2 sm:py-8 sm:pr-4">
                                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-navy-800/70">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-semibold leading-snug text-navy-800 lg:text-[1.75rem]">
                                    {item.title}
                                </h3>
                                <span className="mt-4 flex justify-end sm:mt-8">
                                    <ArrowUpRightIcon className="h-5 w-5 text-navy-800 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href={INSIGHTS.cta.href}
                        className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        {INSIGHTS.cta.label}
                    </Link>
                </div>
            </Container>
        </section>
    );
}

/* ── Iconos ─────────────────────────────── */

function ArrowUpRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M7 17 17 7M9 7h8v8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}