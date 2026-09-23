import Image from "next/image";
import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";

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
        <section className="bg-ink-900 py-20 lg:py-28">
            <Container>
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
                    <Badge className="border-brand-400 bg-transparent text-brand-400">
                        {INSIGHTS.badge}
                    </Badge>

                    <h2 className="text-4xl font-normal text-white lg:text-5xl">
                        {INSIGHTS.title}
                    </h2>

                    <p className="text-base text-white/70">{INSIGHTS.description}</p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                    {INSIGHTS_ITEMS.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className="group relative isolate flex flex-col gap-5 overflow-hidden rounded-[2rem] bg-[#0F0F0F] p-4 transition-colors duration-300 hover:bg-brand-400 focus-visible:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 sm:min-h-[20rem] sm:flex-row sm:gap-6 sm:p-5 lg:min-h-[22rem]"
                        >
                            {/* Franja superior fija; la parte inferior es el bg del Link y cambia en hover */}
                            <svg
                                aria-hidden
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 -z-10 size-full"
                            >
                                <path d="M0 0 L100 0 L100 12 L0 48 Z" fill="#252525" />
                            </svg>

                            <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden rounded-3xl sm:aspect-auto sm:w-[44%] sm:self-stretch">
                                <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 100vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-3 pb-14 sm:gap-6 sm:pb-16 sm:pr-4 sm:pt-3">
                                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-400 transition-colors duration-300 group-hover:text-black group-focus-visible:text-black sm:group-hover:text-brand-400 sm:group-focus-visible:text-brand-400">
                                    {item.category}
                                </span>

                                {/* Margen fijo: todos los títulos arrancan a la misma altura, bajo la diagonal */}
                                <h3 className="text-xl font-normal leading-snug text-white transition-colors duration-300 group-hover:text-black group-focus-visible:text-black sm:mt-16 lg:mt-20 lg:text-[1.375rem]">
                                    {item.title}
                                </h3>
                            </div>

                            <span
                                aria-hidden
                                className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-brand-400 text-black transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-brand-400 group-focus-visible:bg-ink-900 group-focus-visible:text-brand-400 sm:bottom-5 sm:right-5"
                            >
                                <ArrowUpRight className="size-4" />
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        href={INSIGHTS.cta.href}
                        className="rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 hover:bg-brand-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                    >
                        {INSIGHTS.cta.label}
                    </Link>
                </div>
            </Container>
        </section>
    );
}