import PageHero from "@/src/shared/components/ui/PageHero";
import ServicesGrid from "@/src/shared/components/ui/ServicesGrid";
import type { ServiceCardItem } from "@/src/shared/components/ui/ServiceCard";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";
import InsightsSection, { type InsightItem } from "@/src/shared/components/ui/InsightsSection";

const HERO = {
    badge: "Services",
    title: "Strategy, Systems and Talent to",
    titleAccent: "Grow Your Business",
    description:
        "We diagnose what is holding your business back, prioritize what matters most, implement the systems your team needs and scale with dedicated talent, so growth becomes predictable instead of chaotic.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Hero1.png",
};

const CARD_IMAGE =
    "https://workninjas.com/wp-content/uploads/2025/06/doxjuan-1024x950.png";

const SERVICES_HEADING = {
    badge: "Business Growth Consulting",
    title: "Six Areas Where We Help",
    titleRest: "Your Business Grow",
};

const SERVICES: readonly ServiceCardItem[] = [
    {
        key: "sales-performance",
        title: "Sales Performance",
        href: "/services/sales-performance",
        image: CARD_IMAGE,
        Icon: ChartIcon,
    },
    {
        key: "operational-excellence",
        title: "Operational Excellence",
        href: "/services/operational-excellence",
        image: CARD_IMAGE,
        Icon: LayersIcon,
    },
    {
        key: "leadership",
        title: "Leadership & Organizational Development",
        href: "/services/leadership-organizational-development",
        image: CARD_IMAGE,
        Icon: PeopleIcon,
    },
    {
        key: "financial-performance",
        title: "Financial Performance",
        href: "/services/financial-performance",
        image: CARD_IMAGE,
        Icon: DollarIcon,
    },
    {
        key: "marketing",
        title: "Marketing & Customer Acquisition",
        href: "/services/marketing-customer-acquisition",
        image: CARD_IMAGE,
        Icon: MegaphoneIcon,
    },
    {
        key: "ai-automation",
        title: "AI & Business Automation",
        href: "/services/ai-business-automation",
        image: CARD_IMAGE,
        Icon: SparkIcon,
    },
];

const WHY_US = {
    badge: "Why VCM?",
    title: "We fix the system",
    titleTyped: "before adding people",
    description:
        "Most staffing firms just fill seats. We find the bottleneck, design the process and then add the talent to execute it.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3898-scaled.jpg",
};

const INSIGHTS_HEADING = {
    badge: "Insights",
    title: "Insights from the Field",
    description:
        "Practical ideas on operations, sales and growth for construction and roofing companies.",
    cta: { label: "More Insights", href: "/blog" },
};

const INSIGHTS: readonly InsightItem[] = [
    {
        key: "international-roofing-expo",
        label: "Business Development",
        title: "International Roofing Expo (IRE): What It Is, When It Happens, and Why Roofers Take It Seriously",
        href: "/blog/international-roofing-expo",
        image: "https://workninjas.com/wp-content/uploads/2025/06/DSC01065-Editada-1024x693.jpg",
    },
    {
        key: "communication-subcontractors",
        label: "Business Development",
        title: "Communication with Subcontractors and Manufacturers",
        href: "/blog/communication-subcontractors",
        image: "https://workninjas.com/wp-content/uploads/2025/06/NH-1024x601.png",
    },
];

export default function ServicesContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                titleAccent={HERO.titleAccent}
                description={HERO.description}
                cta={HERO.cta}
                image={HERO.image}
            />

            <ServicesGrid
                badge={SERVICES_HEADING.badge}
                title={SERVICES_HEADING.title}
                titleRest={SERVICES_HEADING.titleRest}
                items={SERVICES}
                variant="light"
            />

            <StickyCardSection
                badge={WHY_US.badge}
                title={WHY_US.title}
                titleTyped={WHY_US.titleTyped}
                description={WHY_US.description}
                cta={WHY_US.cta}
                image={WHY_US.image}
            />

            <InsightsSection
                badge={INSIGHTS_HEADING.badge}
                title={INSIGHTS_HEADING.title}
                description={INSIGHTS_HEADING.description}
                items={INSIGHTS}
                cta={INSIGHTS_HEADING.cta}
            />
        </div>
    );
}

/* ── Iconos ─────────────────────────────── */

function ChartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 19.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="m6 15.5 4-5 3.5 2.5L18 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 7H18v3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function LayersIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="m12 4 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="m4 12 8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m4 16 8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function PeopleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="16.5" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M15.5 14.3a4.5 4.5 0 0 1 5 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function MegaphoneIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 10.5v3a1.5 1.5 0 0 0 1.5 1.5H8l8 4V6.5l-8 4H5.5A1.5 1.5 0 0 0 4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M8 15v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M19 9.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function DollarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7v10M14.5 9.5c0-1-1.1-1.5-2.5-1.5s-2.5.6-2.5 1.8 1.2 1.6 2.5 1.7c1.3.1 2.5.5 2.5 1.7S13.4 16 12 16s-2.5-.5-2.5-1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
    );
}

function SparkIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="m12 8 1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2L12 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}