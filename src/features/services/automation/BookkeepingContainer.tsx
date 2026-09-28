import PageHero from "@/src/shared/components/ui/PageHero";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";
import TestimonialsSection from "@/src/shared/components/ui/TestimonialsSection";
import { TESTIMONIALS } from "@/src/shared/data/testimonials.data";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";

const HERO = {
    badge: "AI & Business Automation",
    title: "Less Manual Work,",
    titleAccent: "Smarter Operations",
    description:
        "We help construction and roofing companies put AI and automation to work: connected systems, automated workflows and dashboards that give you answers without chasing spreadsheets.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/07/juanbook-2048x960.png",
};

const INTRO = {
    badge: "What We Do",
    title: "Technology That Works for Your Team",
    description:
        "Most companies already pay for tools that don’t talk to each other, so people fill the gaps by hand. We connect your systems, automate the repetitive steps and bring AI into the workflows where it actually saves time.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    features: [
        "AI Implementation",
        "Workflow Automation",
        "CRM Integrations",
        "Dashboards & BI",
        "Productivity",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "automation",
        title: "Workflow & Process Automation",
        content:
            "We identify the repetitive, manual steps in your operation and automate them, so your team spends its time on work that needs a person.",
    },
    {
        key: "integrations",
        title: "CRM & System Integrations",
        content:
            "We connect your CRM with the rest of your tools, so information flows between them instead of being copied by hand.",
    },
    {
        key: "dashboards",
        title: "Dashboards & Business Intelligence",
        content:
            "We build dashboards that turn your data into a clear, regular view of the business, so reports are ready when you need them.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "Time Spent on Manual Work",
    titleRest: "Is Time Not Spent Growing",
    description:
        "Every hour your team spends copying data, building reports or chasing updates is an hour away from customers and projects. Connected systems and automated workflows give that time back and reduce the errors that come with manual work.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/davidbook.png",
};

const PROCESS = {
    badge: "Our Process",
    title: "How We Automate Your Operation",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Systems Assessment",
        description: "We review your tools, data and the manual work your team does every day.",
    },
    {
        number: "02",
        title: "Automation Roadmap",
        description: "We prioritize the automations and integrations with the biggest time savings.",
    },
    {
        number: "03",
        title: "Guided Implementation",
        description: "We build the integrations, workflows and dashboards with your team.",
    },
    {
        number: "04",
        title: "Scale with Talent",
        description: "We add dedicated support to keep your systems running and improving over time.",
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
    title: "Automation built",
    titleTyped: "around your process",
    description:
        "We fix the process first and automate it second, so technology speeds up work that already makes sense.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/prefooterbook.png",
};

export default function BookkeepingContainer() {
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