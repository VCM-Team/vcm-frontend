import Container from "@/src/shared/components/ui/Container";
import PageHero from "@/src/shared/components/ui/PageHero";
import Stats, { type StatItem } from "@/src/shared/components/ui/Stats";
import OurValues from "./OurValues";
import OurStory from "./OurStory";
import WhyUs from "./WhyUs";

const HERO = {
    badge: "Who we are",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    image: "https://workninjas.com/wp-content/uploads/2025/06/NH.png",
};

const ABOUT_STATS: readonly StatItem[] = [
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
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

            <Container className="py-16 lg:py-24">
                <Stats items={ABOUT_STATS} />
            </Container>

            <OurValues />
            <OurStory />
            <WhyUs />
        </div>
    );
}