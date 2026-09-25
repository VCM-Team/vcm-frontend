import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";

const HEADING = {
    badge: "Our Process",
    title: "How We Help",
    titleAccent: "Your Business Grow",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
};

const STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Business Assessment",
        description:
            "We evaluate your operations, leadership, sales and systems to identify what is holding your growth back.",
    },
    {
        number: "02",
        title: "Strategic Growth Roadmap",
        description:
            "We turn the findings into a prioritized plan, with clear objectives, the right sequence and an owner for every initiative.",
    },
    {
        number: "03",
        title: "Guided Implementation",
        description:
            "We work alongside your leadership team to put the plan in motion, following up and adjusting as the business responds.",
    },
    {
        number: "04",
        title: "Scale with Confidence",
        description:
            "Once your operation is ready, we recruit, onboard and integrate the talent you need to keep growing.",
    },
];

export default function OurProcess() {
    return (
        <ProcessSection
            badge={HEADING.badge}
            title={HEADING.title}
            titleAccent={HEADING.titleAccent}
            steps={STEPS}
            cta={HEADING.cta}
        />
    );
}