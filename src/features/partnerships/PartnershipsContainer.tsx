import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import PartnerOffers from "./PartnerOffers";

const FEATURE = {
    badge: "Industries",
    title: "Built for Construction,",
    titleRest: "Ready for Growth",
    description:
        "Our main focus is U.S. construction and roofing companies with annual revenue from $3M to $20M+. We also support technology and professional services companies that need to scale with the right systems and talent.",
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