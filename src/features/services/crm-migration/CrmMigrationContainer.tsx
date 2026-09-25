import PageHero from "@/src/shared/components/ui/PageHero";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import FeatureGrid, { type FeatureGridItem } from "@/src/shared/components/ui/FeatureGrid";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";

const HERO = {
    badge: "Leadership & Organizational Development",
    title: "Leaders Who Build",
    titleAccent: "Teams That Own Results",
    description:
        "We help construction and roofing companies design the right structure, define clear responsibilities and build the leadership habits that let the business grow beyond its owner.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/08/DoxJeorge-2048x970.webp",
};

const INTRO = {
    badge: "What We Do",
    title: "Clear Ownership, Faster Decisions",
    description:
        "As a company grows, unclear roles and decisions that always wait on the owner become the real bottleneck. We work with your leadership team to define who owns what, how decisions get made and how performance is managed.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    features: [
        "Organizational Design",
        "Leadership Coaching",
        "Accountability",
        "Decision-Making",
        "Performance",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "structure",
        title: "Organizational Design",
        content:
            "We review your structure and roles so every area of the business has a clear owner and responsibilities don’t overlap or fall through the cracks.",
    },
    {
        key: "coaching",
        title: "Leadership Coaching",
        content:
            "We work with owners and managers to strengthen the leadership skills they need at the company’s next stage of growth.",
    },
    {
        key: "performance",
        title: "Meetings, Decisions & Performance",
        content:
            "We set up the meeting rhythm, decision process and performance tracking that keep the team aligned and accountable.",
    },
];

const WHY_IT_MATTERS = {
    badge: "Why It Matters",
    title: "A Business Can’t Outgrow",
    titleRest: "Its Leadership",
    description:
        "When every decision goes through one person, growth slows to the speed of that person’s calendar. Clear roles, defined decision rights and consistent accountability let your team move faster without losing control.",
    image: "https://workninjas.com/wp-content/uploads/2026/02/Scene-24-scaled.jpg",
};

const FOCUS = {
    title: "Where We Help",
    titleAccent: "Your Leadership Team",
};

const FOCUS_ITEMS: readonly FeatureGridItem[] = [
    {
        key: "org-design",
        title: "Organizational Design",
        description: "A structure where every area and role has a clear purpose and owner.",
        Icon: OrgChartIcon,
    },
    {
        key: "coaching",
        title: "Leadership Coaching",
        description: "Support for owners and managers as the business and their roles grow.",
        Icon: ChatIcon,
    },
    {
        key: "responsibilities",
        title: "Clear Responsibilities",
        description: "Defined responsibilities so everyone knows what they own and what is expected.",
        Icon: ChecklistIcon,
    },
    {
        key: "meetings",
        title: "Meeting Rhythm",
        description: "Regular, focused meetings that keep priorities, progress and problems visible.",
        Icon: CalendarIcon,
    },
    {
        key: "decisions",
        title: "Decision-Making",
        description: "Clear decision rights, so decisions get made at the right level, without waiting.",
        Icon: CompassIcon,
    },
    {
        key: "performance",
        title: "Performance Management",
        description: "Goals and follow-up that connect each person’s work to the company’s results.",
        Icon: TargetIcon,
    },
];

const PROCESS = {
    badge: "Our Process",
    title: "How We Develop",
    titleAccent: "Your Organization",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Leadership Assessment",
        description: "We review your structure, roles, meetings and how decisions are made today.",
    },
    {
        number: "02",
        title: "Growth Roadmap",
        description: "We prioritize the organizational changes that unlock the most capacity.",
    },
    {
        number: "03",
        title: "Guided Implementation",
        description: "We work alongside your leaders to put the new structure and routines in place.",
    },
    {
        number: "04",
        title: "Scale with Talent",
        description: "When roles are clear, we recruit the people to fill them and support their integration.",
    },
];

const WHY_US = {
    badge: "Why VCM?",
    title: "Growth that doesn’t",
    titleTyped: "depend on one person",
    description:
        "We define the structure and ownership first, then add the talent to fill each role, so the business can grow beyond its founder.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2026/02/Photo-2-2-scaled.jpg",
};

export default function CrmMigrationContainer() {
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

            <FeatureGrid
                title={FOCUS.title}
                titleAccent={FOCUS.titleAccent}
                items={FOCUS_ITEMS}
            />

            <ProcessSection
                badge={PROCESS.badge}
                title={PROCESS.title}
                titleAccent={PROCESS.titleAccent}
                steps={PROCESS_STEPS}
                cta={PROCESS.cta}
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

/* ── Iconos ─────────────────────────────── */

function OrgChartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="9" y="3" width="6" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.8" />
            <rect x="3" y="16.5" width="6" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.8" />
            <rect x="15" y="16.5" width="6" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5V12M6 16.5V12h12v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function ChatIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-5 4V5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function ChecklistIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M10 6h10M10 12h10M10 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="m3.5 6 1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function CompassIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function TargetIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
    );
}