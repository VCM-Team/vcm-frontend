import PageHero from "@/src/shared/components/ui/PageHero";
import OurPeople from "./OurPeople";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";

const HERO = {
    badge: "Our Team",
    title: "The People Behind",
    titleAccent: "VCM",
    description:
        "A team based in Lima, Peru, combining business growth consulting and talent solutions to support U.S. construction and roofing companies.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/Foto-2.jpg",
};

const WHY_US = {
    badge: "Why VCM?",
    title: "One team,",
    titleTyped: "working as part of yours",
    description:
        "Our people integrate into your processes and tools, with the support of a leadership team focused on your growth.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3898-scaled.jpg",
};

export default function TeamContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                titleAccent={HERO.titleAccent}
                description={HERO.description}
                image={HERO.image}
            />

            <OurPeople />

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