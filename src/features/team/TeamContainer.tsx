import PageHero from "@/src/shared/components/ui/PageHero";

const HERO = {
    badge: "Team",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada del titular",
    image: "https://workninjas.com/wp-content/uploads/2025/06/Foto-2.jpg",
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

            {/* siguientes secciones */}
        </div>
    );
}