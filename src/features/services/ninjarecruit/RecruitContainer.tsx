import PageHero from "@/src/shared/components/ui/PageHero";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import FaqSection from "@/src/shared/components/ui/FaqSection";
import TestimonialsSection from "@/src/shared/components/ui/TestimonialsSection";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";
import { TESTIMONIALS } from "@/src/shared/data/testimonials.data";

const HERO = {
    badge: "Talent Solutions",
    title: "Dedicated Nearshore Talent",
    titleAccent: "Built Around Your Business",
    description:
        "We recruit, evaluate, onboard and integrate professionals who work from our offices in Lima, Peru, as part of your team, inside your tools and your processes.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    image:
        "https://workninjas.com/wp-content/uploads/2025/08/GettyImages-1887449071-1-2-2048x900.jpg-2048x960.webp",
};

const INTRO = {
    badge: "What We Do",
    title: "The Right People, Integrated Into Your Operation",
    description:
        "Hiring is only the start. We define what each role needs to deliver, find and evaluate the right person, and integrate them into your systems, so they add capacity from the beginning instead of adding work for your team.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    features: [
        "Customer Service",
        "Sales",
        "Marketing",
        "Estimating",
        "Accounting & Finance",
        "Executive Assistants",
        "Project Management",
        "Administrative Support",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "role-strategy",
        title: "Role Strategy First",
        content:
            "Before searching, we define the responsibilities, tools and expectations of each role, so we hire for what your business actually needs.",
    },
    {
        key: "evaluation",
        title: "Evaluated for Skills and English",
        content:
            "Every candidate is assessed on the technical skills of the role, communication and English before being selected.",
    },
    {
        key: "integration",
        title: "Integrated Into Your Systems",
        content:
            "We onboard each professional into your processes and tools, and keep supporting the team after they start.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "Talent Works Best",
    titleRest: "When the System Is Ready",
    description:
        "Adding people to a broken process only multiplies the problem. That’s why we work in order: strategy, then systems, then talent. When the process is clear, every new hire can deliver from day one.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/Mask-group-2.jpg",
};

const PROCESS = {
    badge: "Our Process",
    title: "How We Build Your Team",
    cta: { label: "Build Your Team", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Role Strategy",
        description: "We define the responsibilities, skills and tools the role requires.",
    },
    {
        number: "02",
        title: "Sourcing & Evaluation",
        description: "We find candidates and assess their technical skills, communication and English.",
    },
    {
        number: "03",
        title: "Selection & Onboarding",
        description: "We select the best fit and prepare them to work within your processes.",
    },
    {
        number: "04",
        title: "Integration & Support",
        description: "We integrate them into your systems and keep supporting the team over time.",
    },
];

const FAQ = {
    badge: "FAQ",
    title: "Frequently Asked Questions",
};

const FAQ_ITEMS: readonly AccordionItem[] = [
    {
        key: "roles",
        title: "Which roles can you staff?",
        content:
            "We cover Customer Service, Sales, Marketing, Estimating, Accounting & Finance, Executive Assistants, Project Management and Administrative Support.",
    },
    {
        key: "location",
        title: "Where does the team work from?",
        content:
            "Our professionals work from our offices in Lima, Peru, supporting U.S. companies as part of their day-to-day operations.",
    },
    {
        key: "evaluation",
        title: "How do you evaluate candidates?",
        content:
            "We assess each candidate on the technical skills of the role, communication and English before selection.",
    },
    {
        key: "integration",
        title: "Do they work with our tools and processes?",
        content:
            "Yes. We onboard each professional into your systems and processes, so they work the way your team already does.",
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
    title: "We don’t just fill seats,",
    titleTyped: "we build teams",
    description:
        "Every role starts with a clear strategy and ends with a professional integrated into your operation, with ongoing support.",
    cta: { label: "Build Your Team", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/08/DoxJeorge.webp",
};

export default function RecruitContainer() {
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

            <FaqSection badge={FAQ.badge} title={FAQ.title} items={FAQ_ITEMS} variant="dark" />

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