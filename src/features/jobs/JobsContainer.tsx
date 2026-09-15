import PageHero from "@/src/shared/components/ui/PageHero";
import Culture from "./Culture";
import Training from "./Training";
import WhoWeLookFor from "./WhoWeLookFor";
import OpenPositions from "./OpenPositions";

const HERO = {
    badge: "Careers",
    title: "Titular de la página",
    titleAccent: "parte resaltada",
    image: "https://workninjas.com/wp-content/uploads/2025/06/Scene-18-2048x1365.jpg",
};

export default function JobsContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                titleAccent={HERO.titleAccent}
                image={HERO.image}
            />

            <Culture />
            <Training />
            <WhoWeLookFor />
            <OpenPositions />
        </div>
    );
}