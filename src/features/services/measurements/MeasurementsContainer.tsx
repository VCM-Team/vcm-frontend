import PageHero from "@/src/shared/components/ui/PageHero";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import IconListSplit, { type IconListItem } from "@/src/shared/components/ui/IconListSplit";
import TestimonialsSection from "@/src/shared/components/ui/TestimonialsSection";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";
import { TESTIMONIALS } from "@/src/shared/data/testimonials.data";

const HERO = {
    badge: "Services",
    title: "Measurements & Takeoffs",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Free Consultation", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Measutements-2048x1366.jpg",
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
    image: "https://workninjas.com/wp-content/uploads/2025/06/DSC01347-Editada-2.png",
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

const SCALE = {
    title: "Titular de la sección",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    image: "https://workninjas.com/wp-content/uploads/2025/07/measurements-scaled-e1752185952231.png",
};

const SCALE_ITEMS: readonly IconListItem[] = [
    {
        key: "residential",
        title: "Título del primer punto",
        description: "Descripción del punto — reemplázala con el texto propio.",
        Icon: HouseIcon,
    },
    {
        key: "commercial",
        title: "Título del segundo punto",
        description: "Descripción del punto — reemplázala con el texto propio.",
        Icon: BuildingIcon,
    },
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
    image: "https://workninjas.com/wp-content/uploads/2025/06/Dani-scaled.jpg",
};

export default function MeasurementsContainer() {
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

            <IconListSplit
                title={SCALE.title}
                description={SCALE.description}
                items={SCALE_ITEMS}
                image={SCALE.image}
            />

            <TestimonialsSection
                badge={TESTIMONIALS_HEADING.badge}
                title={TESTIMONIALS_HEADING.title}
                titleAccent={TESTIMONIALS_HEADING.titleAccent}
                titleRest={TESTIMONIALS_HEADING.titleRest}
                cta={TESTIMONIALS_HEADING.cta}
                items={TESTIMONIALS}
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

function HouseIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M4 10.5 12 4l8 6.5V20a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 4 20v-9.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M10 20.5v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function BuildingIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M5 20.5V5.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v15M14 20.5V10h4.5a.5.5 0 0 1 .5.5v10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path d="M8 9h3M8 13h3M16.5 14h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M3.5 20.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}