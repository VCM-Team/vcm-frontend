import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import StoriesGrid from "./StoriesGrid";

const FEATURE = {
    badge: "Case Studies",
    title: "Real Results,",
    titleRest: "Shared with Permission",
    description:
        "We only publish a client’s story once they authorize it. More case studies from the construction and roofing companies we work with will be added here soon.",
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