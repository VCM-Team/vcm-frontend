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
    badge: "Operational Excellence",
    title: "Processes That Run",
    titleAccent: "Without You in Every Detail",
    description:
        "We map how your operation really works, document it in clear SOPs and remove the manual steps that slow your team down, so the business keeps moving as it grows.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/CSTMER.png",
};

const INTRO = {
    badge: "What We Do",
    title: "Clear Processes, Fewer Fires",
    description:
        "When processes live in people’s heads, every absence, new hire or busy season turns into a problem. We turn the way your team works into documented, repeatable processes that everyone can follow.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    features: [
        "Process Mapping",
        "SOPs",
        "Documentation",
        "Automation",
        "Team Alignment",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "mapping",
        title: "Process Mapping",
        content:
            "We map how work actually flows through your company today, to find the handoffs, delays and duplicated steps.",
    },
    {
        key: "sops",
        title: "SOPs & Documentation",
        content:
            "We document each key process in clear SOPs, so tasks get done the same way no matter who does them.",
    },
    {
        key: "efficiency",
        title: "Efficiency & Automation",
        content:
            "We streamline the workflow and automate repetitive steps, so your team spends its time on work that matters.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "When Everything Depends on You,",
    titleRest: "Growth Stops",
    description:
        "If every decision and every exception goes through the owner, the business can only grow as fast as one person can work. Documented processes and aligned teams give you coordination today and the capacity to scale tomorrow.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/lauistv.png",
};

const PROCESS = {
    badge: "Our Process",
    title: "How We Improve Your Operations",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Operations Assessment",
        description: "We review how work flows through your team and where it gets stuck.",
    },
    {
        number: "02",
        title: "Growth Roadmap",
        description: "We prioritize the processes to fix first, with clear owners and next steps.",
    },
    {
        number: "03",
        title: "Guided Implementation",
        description: "We document the SOPs and put the improved workflows in place with your team.",
    },
    {
        number: "04",
        title: "Scale with Talent",
        description: "When the processes are ready, we add dedicated support to run them every day.",
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
    title: "Systems that let",
    titleTyped: "your business scale",
    description:
        "We build the processes first, then add the talent to run them, so growth doesn’t depend on putting out fires.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/07/WNroofingexpert.png",
};

export default function LeadManagementContainer() {
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