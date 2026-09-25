import Container from "@/src/shared/components/ui/Container";
import PageHero from "@/src/shared/components/ui/PageHero";
import Stats, { type StatItem } from "@/src/shared/components/ui/Stats";
import OurValues from "./OurValues";
import OurStory from "./OurStory";
import WhyUs from "./WhyUs";
import OurProcess from "@/src/features/services/crm-migration/OurProcess";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HERO = {
    badge: "Who we are",
    title: "What We’ve Built and",
    titleAccent: "Who We Are",
    image: "https://workninjas.com/wp-content/uploads/2025/06/NH.png",
};

const ABOUT_STATS: readonly StatItem[] = [
    { value: "14", suffix: " Days", label: "To fully integrate your Ninja team" },
    { prefix: "$", value: "10M", label: "Supplements client overage last year" },
    { value: "12", suffix: "K+", label: "To fully integrate your Ninja team" },
    { prefix: ">", value: "90", label: "Repeat clients or referrals" },
];


export default function AboutContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                titleAccent={HERO.titleAccent}
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