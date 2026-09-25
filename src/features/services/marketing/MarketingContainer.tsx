import PageHero from "@/src/shared/components/ui/PageHero";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import TestimonialsSection from "@/src/shared/components/ui/TestimonialsSection";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";
import { TESTIMONIALS } from "@/src/shared/data/testimonials.data";

const HERO = {
    badge: "Marketing & Customer Acquisition",
    title: "Attract Better Leads,",
    titleAccent: "Win More Customers",
    description:
        "We help construction and roofing companies sharpen their positioning, build a clear funnel and run campaigns that bring in the right customers, with the analytics to know what is working.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/nicolas-2048x961.png",
};

const INTRO = {
    badge: "What We Do",
    title: "Marketing That Feeds Your Sales Pipeline",
    description:
        "More leads don’t help if they are the wrong ones or if nobody follows up. We connect your positioning, campaigns and follow-up into one funnel, so marketing brings in customers your sales team can actually close.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    features: [
        "Positioning",
        "Marketing Funnel",
        "Campaigns",
        "Lead Nurturing",
        "Marketing Analytics",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "positioning",
        title: "Positioning & Messaging",
        content:
            "We clarify who your ideal customer is and what makes you the right choice for them, so every message speaks to the right audience.",
    },
    {
        key: "funnel",
        title: "Funnel & Campaigns",
        content:
            "We design the path from first contact to qualified lead and plan the campaigns that move people through it.",
    },
    {
        key: "nurturing",
        title: "Lead Nurturing & Analytics",
        content:
            "We set up the follow-up that keeps leads engaged and the analytics that show which channels bring the best customers.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "Lead Quality",
    titleRest: "Beats Lead Volume",
    description:
        "Chasing leads that never convert costs time, money and morale. A clear position, a defined funnel and consistent nurturing bring in customers who fit your business, and make every marketing dollar easier to measure.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/DoxJorg.png",
};

const PROCESS = {
    badge: "Our Process",
    title: "How We Improve Your Customer Acquisition",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Marketing Assessment",
        description: "We review your positioning, channels, funnel and how leads are followed up today.",
    },
    {
        number: "02",
        title: "Growth Roadmap",
        description: "We prioritize the campaigns and funnel improvements with the biggest impact.",
    },
    {
        number: "03",
        title: "Guided Implementation",
        description: "We launch the campaigns, nurturing and analytics alongside your team.",
    },
    {
        number: "04",
        title: "Scale with Talent",
        description: "When the funnel is ready, we add dedicated marketing support to keep it running.",
    },
];

const TESTIMONIALS_HEADING = {
    badge: "Testimonials",
    title: "Trusted by Construction",
    titleAccent: "Companies",
    titleRest: "Across North America",
    cta: { label: "See Case Studies", href: "/success-story" },
};

const WHY_US = {
    badge: "Why VCM?",
    title: "Marketing connected",
    titleTyped: "to your sales process",
    description:
        "We align marketing with sales and follow-up first, then add the marketing talent to execute it every day.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/MKTteam-scaled.png",
};

export default function MarketingContainer() {
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

            <AccordionSection
                badge={INTRO.badge}
                title={INTRO.title}
                description={INTRO.description}
                cta={INTRO.cta}
                items={INTRO_ITEMS}
                features={INTRO.features}
            />

            <FeatureSplit
                badge={WHY_IT_MATTERS.badge}
                title={WHY_IT_MATTERS.title}
                titleRest={WHY_IT_MATTERS.titleRest}
                description={WHY_IT_MATTERS.description}
                image={WHY_IT_MATTERS.image}
                imageAspect="lg:aspect-square"
                columns="lg:grid-cols-2"
            />

            <ProcessSection
                badge={PROCESS.badge}
                title={PROCESS.title}
                steps={PROCESS_STEPS}
                cta={PROCESS.cta}
            />

            <TestimonialsSection
                badge={TESTIMONIALS_HEADING.badge}
                title={TESTIMONIALS_HEADING.title}
                titleAccent={TESTIMONIALS_HEADING.titleAccent}
                titleRest={TESTIMONIALS_HEADING.titleRest}
                cta={TESTIMONIALS_HEADING.cta}
                items={TESTIMONIALS}
                variant="dark"
            />

            <StickyCardSection
                badge={WHY_US.badge}
                title={WHY_US.title}
                titleTyped={WHY_US.titleTyped}
                description={WHY_US.description}
                cta={WHY_US.cta}
                image={WHY_US.image}
            />
        </div>
    );
}