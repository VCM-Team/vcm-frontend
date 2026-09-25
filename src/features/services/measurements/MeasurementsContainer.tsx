import PageHero from "@/src/shared/components/ui/PageHero";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import IconListSplit, { type IconListItem } from "@/src/shared/components/ui/IconListSplit";
import TestimonialsSection from "@/src/shared/components/ui/TestimonialsSection";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";
import { TESTIMONIALS } from "@/src/shared/data/testimonials.data";

const HERO = {
    badge: "Estimating",
    title: "Estimating & Takeoffs",
    titleAccent: "for Construction and Roofing",
    description:
        "Dedicated estimators who handle takeoffs, plan reading and cost estimates, so your team can keep bidding without slowing down the rest of the operation.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Measutements-2048x1366.jpg",
};

const INTRO = {
    badge: "What We Do",
    title: "Accurate Estimates, Without Overloading Your Team",
    description:
        "When estimating depends on the same few people, bids pile up and response times suffer. We add dedicated estimators who work within your process, so every project gets a careful takeoff and a clear cost estimate.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    features: [
        "Takeoffs",
        "Plan Reading",
        "Cost Estimates",
        "Residential Projects",
        "Commercial Projects",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "takeoffs",
        title: "Takeoffs & Plan Reading",
        content:
            "Estimators who read plans and prepare detailed takeoffs, so every bid starts from accurate quantities.",
    },
    {
        key: "estimates",
        title: "Cost Estimates & Budgets",
        content:
            "Support preparing cost estimates and budgets that help you price each project with its profitability in mind.",
    },
    {
        key: "workflow",
        title: "Built Into Your Workflow",
        content:
            "Your estimators work inside your process and tools, following the standards your team already uses.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "Every Estimate",
    titleRest: "Shapes Your Margin",
    description:
        "An estimate that misses quantities or costs puts the margin of the whole project at risk. Dedicated estimating support gives your team the capacity to review every bid with the attention it needs.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/DSC01347-Editada-2.png",
};

const PROCESS = {
    badge: "Our Process",
    title: "How We Build Your Estimating Team",
    cta: { label: "Build Your Team", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Define Your Needs",
        description: "We review your project types, bid volume and the way your team estimates today.",
    },
    {
        number: "02",
        title: "Evaluate Estimators",
        description: "We assess candidates on plan reading, takeoffs, cost estimating and English.",
    },
    {
        number: "03",
        title: "Onboard to Your Process",
        description: "We prepare each estimator to work with your standards, tools and review steps.",
    },
    {
        number: "04",
        title: "Ongoing Support",
        description: "We keep supporting the team as your volume and project mix change.",
    },
];

const SCALE = {
    title: "Residential and Commercial Projects",
    description:
        "Our estimators support both residential and commercial work, adapting to the scope and requirements of each type of project.",
    image: "https://workninjas.com/wp-content/uploads/2025/07/measurements-scaled-e1752185952231.png",
};

const SCALE_ITEMS: readonly IconListItem[] = [
    {
        key: "residential",
        title: "Residential Roofing",
        description: "Takeoffs and estimates for residential projects, from plans to a ready-to-send number.",
        Icon: HouseIcon,
    },
    {
        key: "commercial",
        title: "Commercial Roofing",
        description: "Support for commercial projects, where larger scopes need careful quantities and cost control.",
        Icon: BuildingIcon,
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
    title: "Your estimators,",
    titleTyped: "part of your team",
    description:
        "Dedicated professionals evaluated for estimating skills and English, integrated into your process with ongoing support.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Dani-scaled.jpg",
};

export default function MeasurementsContainer() {
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

            <IconListSplit
                title={SCALE.title}
                description={SCALE.description}
                items={SCALE_ITEMS}
                image={SCALE.image}
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

function HouseIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M4 10.5 12 4l8 6.5V20a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 4 20v-9.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M10 20.5v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function BuildingIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M5 20.5V5.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v15M14 20.5V10h4.5a.5.5 0 0 1 .5.5v10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M8 9h3M8 13h3M16.5 14h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M3.5 20.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}