import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import PartnerOffers from "./PartnerOffers";

const FEATURE = {
    badge: "Etiqueta de la sección",
    title: "Primera línea del titular",
    titleRest: "segunda línea",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    image: "https://workninjas.com/wp-content/uploads/2025/07/ninjapc.jpg",
};

export default function PartnershipsContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PartnerOffers />

            <FeatureSplit
                badge={FEATURE.badge}
                title={FEATURE.title}
                titleRest={FEATURE.titleRest}
                description={FEATURE.description}
                image={FEATURE.image}
                imageAspect="lg:aspect-[16/10]"
            />
        </div>
    );
}