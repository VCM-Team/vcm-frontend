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
    badge: "Lead Management",
    title: "Every Lead Answered,",
    titleAccent: "Every Opportunity Followed Up",
    description:
        "Dedicated lead management specialists who respond to inquiries, qualify prospects, schedule appointments and keep your CRM up to date, so your sales team spends its time closing.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/CSTMER.png",
};

const INTRO = {
    badge: "What We Do",
    title: "Turn More Inquiries Into Real Projects",
    description:
        "Leads don’t wait. When calls go unanswered, forms sit in an inbox or follow-ups depend on memory, opportunities go to the next contractor. Our specialists make sure every lead gets a fast response and a clear next step.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    features: [
        "Lead Intake",
        "Qualification",
        "Follow-Up",
        "Appointment Setting",
        "CRM Updates",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "response",
        title: "Fast Lead Response",
        content:
            "Our specialists respond to new inquiries from your website, calls and campaigns quickly and professionally, so no lead is left waiting.",
    },
    {
        key: "qualification",
        title: "Qualification & Appointment Setting",
        content:
            "We qualify each lead with your criteria and book appointments directly on your team’s calendar, so your sales reps only meet with real opportunities.",
    },
    {
        key: "crm",
        title: "Follow-Up & CRM Updates",
        content:
            "We run consistent follow-up cadences and keep every contact, note and stage updated in your CRM, so your pipeline always reflects reality.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "Leads Go Cold",
    titleRest: "Faster Than You Think",
    description:
        "Every lead you pay for is an opportunity with an expiration date. When response times slip and follow-up is inconsistent, marketing spend turns into missed projects. A dedicated team keeps every lead moving while your sales team focuses on closing.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/lauistv.png",
};

const PROCESS = {
    badge: "Our Process",
    title: "How We Build Your Lead Management Team",
    cta: { label: "Build Your Team", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Review Your Lead Flow",
        description: "We look at where your leads come from, how they are handled today and where they get lost.",
    },
    {
        number: "02",
        title: "Define the Process",
        description: "We set qualification criteria, follow-up cadences and scripts that match your sales process.",
    },
    {
        number: "03",
        title: "Onboard Your Specialists",
        description: "We select specialists evaluated for communication and English, and train them in your CRM and tools.",
    },
    {
        number: "04",
        title: "Ongoing Support",
        description: "We keep supporting the team and adjust the process as your lead volume and goals change.",
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
    title: "Specialists who work",
    titleTyped: "inside your CRM",
    description:
        "Dedicated professionals from our LATAM team, integrated into your tools and sales process, with ongoing support from day one.",
    cta: { label: "Build Your Team", href: "/book-demo" },
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