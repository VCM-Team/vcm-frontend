import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import StoriesGrid from "./StoriesGrid";

const FEATURE = {
    badge: "Etiqueta de la sección",
    title: "Primera línea del titular",
    titleRest: "segunda línea",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/davidbook.png",
};

export default function SuccessStoryContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <StoriesGrid />

            <FeatureSplit
                badge={FEATURE.badge}
                title={FEATURE.title}
                titleRest={FEATURE.titleRest}
                description={FEATURE.description}
                image={FEATURE.image}
                imageAspect="lg:aspect-[5/4]"
            />
        </div>
    );
}