import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";

const CONTENT = {
    badge: "Why us?",
    title: "Primera línea del titular.",
    titleTyped: "Segunda línea.",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2026/02/Photo-2-2-scaled.jpg",
};

export default function WhyUs() {
    return (
        <StickyCardSection
            badge={CONTENT.badge}
            title={CONTENT.title}
            titleTyped={CONTENT.titleTyped}
            description={CONTENT.description}
            cta={CONTENT.cta}
            image={CONTENT.image}
        />
    );
}