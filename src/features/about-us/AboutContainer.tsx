import Container from "@/src/shared/components/ui/Container";
import PageHero from "@/src/shared/components/ui/PageHero";
import Stats, { type StatItem } from "@/src/shared/components/ui/Stats";
import OurStory from "./OurStory";
import WhyUs from "./WhyUs";
import OurProcess from "@/src/features/services/crm-migration/OurProcess";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HERO = {
    badge: "About Us",
    title: "Growth Consulting and",
    titleAccent: "Nearshore Talent",
    titleRest: "for U.S. Construction",
    description:
        "Our mission is to help U.S. construction companies recruit, hire, train and scale through reliable nearshore talent, working from our offices in Lima, Peru.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/NH.png",
};

const ABOUT_STATS: readonly StatItem[] = [
    { value: "4", suffix: " Years", label: "Building nearshore teams for U.S. companies" },
    { value: "50", suffix: "+", label: "Virtual positions built and integrated" },
    { value: "6", suffix: " Areas", label: "Of business growth consulting" },
    { value: "8", suffix: " Roles", label: "Covered by our talent solutions" },
];

export default function AboutContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                titleAccent={HERO.titleAccent}
                titleRest={HERO.titleRest}
                description={HERO.description}
                image={HERO.image}
            />

            <RevealSection>
                <Container>
                    <div className={cn(REVEAL.blur, "translate-y-8")}>
                        <Stats items={ABOUT_STATS} />
                    </div>
                </Container>
            </RevealSection>

            <OurProcess />
            <OurStory />
            <WhyUs />
        </div>
    );
}