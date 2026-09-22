import PageHero from "@/src/shared/components/ui/PageHero";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import FaqSection from "@/src/shared/components/ui/FaqSection";
import TestimonialsSection from "@/src/shared/components/ui/TestimonialsSection";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";
import { TESTIMONIALS } from "@/src/shared/data/testimonials.data";

const HERO = {
    badge: "Services",
    title: "Nombre del servicio",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Free Consultation", href: "/contact-us" },
    image:
        "https://workninjas.com/wp-content/uploads/2025/08/GettyImages-1887449071-1-2-2048x900.jpg-2048x960.webp",
};

const INTRO = {
    badge: "Etiqueta de la sección",
    title: "Titular de la sección",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    features: [
        "Primer atributo",
        "Segundo atributo",
        "Tercer atributo",
        "Cuarto atributo",
        "Quinto atributo",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    { key: "item-1", title: "Título del primer punto", content: "Descripción del punto — reemplázala." },
    { key: "item-2", title: "Título del segundo punto", content: "Descripción del punto — reemplázala." },
    { key: "item-3", title: "Título del tercer punto", content: "Descripción del punto — reemplázala." },
];

const WHY_IT_MATTERS = {
    badge: "Benefit from Proven Expertise",
    title: "Primera línea del titular",
    titleRest: "segunda línea",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    image: "https://workninjas.com/wp-content/uploads/2025/06/Mask-group-2.jpg",
};

const PROCESS = {
    badge: "Our Process",
    title: "Titular de la sección",
    cta: { label: "Free Consultation", href: "/contact-us" },
};

const PROCESS_STEPS: readonly NumberedCardItem[] = [
    { number: "01", title: "Título del primer paso", description: "Descripción del paso — reemplázala." },
    { number: "02", title: "Título del segundo paso", description: "Descripción del paso — reemplázala." },
    { number: "03", title: "Título del tercer paso", description: "Descripción del paso — reemplázala." },
    { number: "04", title: "Título del cuarto paso", description: "Descripción del paso — reemplázala." },
];

const FAQ = {
    badge: "FAQ",
    title: "Frequently Asked Questions",
};

const FAQ_ITEMS: readonly AccordionItem[] = [
    { key: "faq-1", title: "Primera pregunta frecuente", content: "Respuesta — reemplázala con el texto propio." },
    { key: "faq-2", title: "Segunda pregunta frecuente", content: "Respuesta — reemplázala con el texto propio." },
    { key: "faq-3", title: "Tercera pregunta frecuente", content: "Respuesta — reemplázala con el texto propio." },
    { key: "faq-4", title: "Cuarta pregunta frecuente", content: "Respuesta — reemplázala con el texto propio." },
];

const TESTIMONIALS_HEADING = {
    badge: "Testimonials",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    titleRest: "cierre del titular",
    cta: { label: "Read Success Story", href: "/success-story" },
};

const WHY_US = {
    badge: "Why us?",
    title: "Primera línea del titular",
    titleTyped: "segunda línea",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2025/08/DoxJeorge.webp",
};

export default function RecruitContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                description={HERO.description}
                cta={HERO.cta}
                image={HERO.image}
            />

            <AccordionSection
                badge={INTRO.badge}
                title={INTRO.title}
                description={INTRO.description}
                cta={INTRO.cta}
                items={INTRO_ITEMS}
                features={INTRO.features}
            />

            <FeatureSplit
                badge={WHY_IT_MATTERS.badge}
                title={WHY_IT_MATTERS.title}
                titleRest={WHY_IT_MATTERS.titleRest}
                description={WHY_IT_MATTERS.description}
                image={WHY_IT_MATTERS.image}
                imageAspect="lg:aspect-square"
                columns="lg:grid-cols-2"
            />

            <ProcessSection
                badge={PROCESS.badge}
                title={PROCESS.title}
                steps={PROCESS_STEPS}
                cta={PROCESS.cta}
            />

            <FaqSection badge={FAQ.badge} title={FAQ.title} items={FAQ_ITEMS} variant={"dark"} />

            <TestimonialsSection
                badge={TESTIMONIALS_HEADING.badge}
                title={TESTIMONIALS_HEADING.title}
                titleAccent={TESTIMONIALS_HEADING.titleAccent}
                titleRest={TESTIMONIALS_HEADING.titleRest}
                cta={TESTIMONIALS_HEADING.cta}
                items={TESTIMONIALS}
                variant={"dark"}
            />

            <StickyCardSection
                badge={WHY_US.badge}
                title={WHY_US.title}
                titleTyped={WHY_US.titleTyped}
                description={WHY_US.description}
                cta={WHY_US.cta}
                image={WHY_US.image}
            />
        </div>
    );
}