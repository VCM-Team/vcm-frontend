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
    image: "/assets/images/shared/team/team.jpeg",
};

const SERVICES_HEADING = {
    badge: "Business Growth Consulting",
    title: "Six Areas Where We Help",
    titleRest: "Your Business Grow",
};

const SERVICES: readonly ServiceCardItem[] = [
    {
        key: "roofing-specialists",
        title: "Roofing Specialists",
        href: "/services/roofing-specialists",
        image: "/assets/images/shared/services/sales.jpg",
    },
    {
        key: "lead-management",
        title: "Lead Management Specialists",
        href: "/services/lead-management-specialists",
        image: "/assets/images/shared/services/operational.jpeg",
    },
    {
        key: "leadership",
        title: "Leadership & Organizational Development",
        href: "/services/leadership",
        image: "/assets/images/shared/services/leadership.jpeg",
    },
    {
        key: "financial-performance",
        title: "Financial Performance",
        href: "/services/finance",
        image: "/assets/images/shared/services/financial.png",
    },
    {
        key: "marketing",
        title: "Marketing & Customer Acquisition",
        href: "/services/marketing",
        image: "/assets/images/shared/services/IMG_277825.jpg",
    },
    {
        key: "ai-automation",
        title: "AI & Business Automation",
        href: "/services/automation",
        image: "/assets/images/shared/services/automation.jpg",
    },
];

const WHY_US = {
    badge: "Why VCM?",
    title: "We fix the system",
    titleTyped: "before adding people",
    description:
        "Most staffing firms just fill seats. We find the bottleneck, design the process and then add the talent to execute it.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "/assets/images/shared/stickyCard/IMG_31819.jpg",
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
        image: "/assets/images/shared/insights/IMG_2818.jpeg",
    },
    {
        key: "communication-subcontractors",
        label: "Business Development",
        title: "Communication with Subcontractors and Manufacturers",
        href: "/blog/communication-subcontractors",
        image: "/assets/images/shared/insights/building_vcm_2.jpg",
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
