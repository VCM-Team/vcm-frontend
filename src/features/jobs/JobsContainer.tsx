import PageHero from "@/src/shared/components/ui/PageHero";
import Culture from "./Culture";
import Training from "./Training";
import WhoWeLookFor from "./WhoWeLookFor";
import OpenPositions from "./OpenPositions";

const HERO = {
    badge: "Careers",
    title: "Grow Your Career",
    titleAccent: "with VCM",
    description:
        "Join our team in Lima, Peru, and work side by side with U.S. construction and roofing companies, building real skills in a team that grows with you.",
    cta: { label: "See Open Positions", href: "#open-positions" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Scene-18-2048x1365.jpg",
};

export default function JobsContainer() {
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

            <Culture />
            <Training />
            <WhoWeLookFor />
            <OpenPositions />
        </div>
    );
}