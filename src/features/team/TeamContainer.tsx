import PageHero from "@/src/shared/components/ui/PageHero";
import OurPeople from "./OurPeople";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";

const HERO = {
    badge: "Team",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada del titular",
    image: "https://workninjas.com/wp-content/uploads/2025/06/Foto-2.jpg",
};
const WHY_US = {
    badge: "Why us?",
    title: "We focus on solutions",
    titleTyped: "not problems",
    description: "We are Transparent Like that. No Gimmicks.",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3898-scaled.jpg",
};

export default function TeamContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                titleAccent={HERO.titleAccent}
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