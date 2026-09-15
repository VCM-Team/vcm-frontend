import PageHero from "@/src/shared/components/ui/PageHero";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import DataExtraction from "./DataExtraction";
import WhatWeHandle from "@/src/features/services/crm-migration/WhatWeHandle";
import OurProcess from "@/src/features/services/crm-migration/OurProcess";
import WhyUs from "@/src/features/services/crm-migration/WhyUs";

const HERO = {
    badge: "Services",
    title: "Primera línea del titular",
    titleRest: "segunda línea del titular",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Get a Quote", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2025/08/DoxJeorge-2048x970.webp",
};

const WHY_IT_MATTERS = {
    badge: "Why it matters",
    title: "Primera línea del titular",
    titleRest: "segunda línea",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    image: "https://workninjas.com/wp-content/uploads/2026/02/Scene-24-scaled.jpg",
};

export default function CrmMigrationContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                titleRest={HERO.titleRest}
                description={HERO.description}
                cta={HERO.cta}
                image={HERO.image}
            />

            <DataExtraction />

            <FeatureSplit
                badge={WHY_IT_MATTERS.badge}
                title={WHY_IT_MATTERS.title}
                titleRest={WHY_IT_MATTERS.titleRest}
                description={WHY_IT_MATTERS.description}
                image={WHY_IT_MATTERS.image}
                imageAspect="lg:aspect-square"
                columns="lg:grid-cols-2"
            />
            <WhatWeHandle />
            <OurProcess />
            <WhyUs/>

        </div>
    );
}