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
    badge: "Financial Performance",
    title: "Know Your Numbers,",
    titleAccent: "Protect Your Margins",
    description:
        "We help construction and roofing companies get clear visibility into profitability, pricing, costs and cash flow, so every decision is based on real numbers.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/supplementsninja.png",
};

const INTRO = {
    badge: "What We Do",
    title: "Financial Clarity to Make Better Decisions",
    description:
        "Many growing companies sell more every year without knowing which jobs actually make money. We organize your financial information and build the reporting you need to see where profit is made, where it is lost and what to do next.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    features: [
        "Profitability",
        "Pricing",
        "Cost Control",
        "Cash Flow",
        "Forecasting",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "profitability",
        title: "Profitability & Pricing",
        content:
            "We review how you price your work and how profitable each type of job really is, so your prices protect your margin.",
    },
    {
        key: "costs",
        title: "Costs, Budgets & Cash Flow",
        content:
            "We help you track costs against budget and keep an eye on cash flow, so growth doesn’t put pressure on your operation.",
    },
    {
        key: "forecasting",
        title: "Forecasting & Dashboards",
        content:
            "We set up forecasts and financial dashboards that give leadership a clear, regular view of the numbers that matter.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "Growth Without Visibility",
    titleRest: "Is a Risk",
    description:
        "When the numbers arrive late or incomplete, problems show up only when they are expensive to fix. Clear, timely financial information lets you protect margins and plan your growth with confidence.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/chelsSupplements-scaled.jpg",
};

const PROCESS = {
    badge: "Our Process",
    title: "How We Improve Your Financial Performance",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Financial Assessment",
        description: "We review your pricing, costs, cash flow and the reporting you use today.",
    },
    {
        number: "02",
        title: "Growth Roadmap",
        description: "We prioritize the changes that most improve visibility and margins, with clear owners.",
    },
    {
        number: "03",
        title: "Guided Implementation",
        description: "We put budgets, forecasts and dashboards in place alongside your team.",
    },
    {
        number: "04",
        title: "Scale with Talent",
        description: "When the system is ready, we add dedicated accounting and finance support to run it.",
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
    title: "Decisions based on",
    titleTyped: "real numbers",
    description:
        "We bring structure to your financial information first, then add the finance talent to keep it running every day.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/supplementsprefooter.png",
};

export default function SupplementsContainer() {
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