import PageHero from "@/src/shared/components/ui/PageHero";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import FeatureSplit from "@/src/shared/components/ui/FeatureSplit";
import FeatureGrid, { type FeatureGridItem } from "@/src/shared/components/ui/FeatureGrid";
import ProcessSection from "@/src/shared/components/ui/ProcessSection";
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
    image: "https://workninjas.com/wp-content/uploads/2025/06/teamRoofing-2048x961.png",
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
    image: "https://workninjas.com/wp-content/uploads/2025/06/roofing.png",
};

const HANDLES = {
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
};

const HANDLES_ITEMS: readonly FeatureGridItem[] = [
    { key: "item-1", title: "Título del primer punto", description: "Descripción — reemplázala.", Icon: CalculatorIcon },
    { key: "item-2", title: "Título del segundo punto", description: "Descripción — reemplázala.", Icon: CartIcon },
    { key: "item-3", title: "Título del tercer punto", description: "Descripción — reemplázala.", Icon: HandHeartIcon },
    { key: "item-4", title: "Título del cuarto punto", description: "Descripción — reemplázala.", Icon: BadgeHandIcon },
    { key: "item-5", title: "Título del quinto punto", description: "Descripción — reemplázala.", Icon: CoinsIcon },
    { key: "item-6", title: "Título del sexto punto", description: "Descripción — reemplázala.", Icon: CalendarIcon },
    { key: "item-7", title: "Título del séptimo punto", description: "Descripción — reemplázala.", Icon: CashIcon },
    { key: "item-8", title: "Título del octavo punto", description: "Descripción — reemplázala.", Icon: ShieldHomeIcon },
    { key: "item-9", title: "Título del noveno punto", description: "Descripción — reemplázala.", Icon: AwardIcon },
];

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
    image: "https://workninjas.com/wp-content/uploads/2025/06/weknowroofing-scaled.png",
};

export default function RoofingSpecialistsContainer() {
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

            <FeatureGrid
                title={HANDLES.title}
                titleAccent={HANDLES.titleAccent}
                items={HANDLES_ITEMS}
            />

            <ProcessSection
                badge={PROCESS.badge}
                title={PROCESS.title}
                steps={PROCESS_STEPS}
                cta={PROCESS.cta}
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

/* ── Iconos ─────────────────────────────── */

function CalculatorIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <rect x="8" y="6" width="8" height="3.5" rx="1" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 17h.01M12 17h.01M15.5 17h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    );
}

function CartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 7h3l2.5 8h8l2-6H8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="17" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
    );
}

function HandHeartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 10.5s-2.2-1.8-2.2-3.3A1.6 1.6 0 0 1 12 6a1.6 1.6 0 0 1 2.2 1.2c0 1.5-2.2 3.3-2.2 3.3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M3 15c2-1.3 4-1 6 0h4l-3.5-.5M21 13c-2.5 1.5-5 3.5-7 4.5-1.5.8-3.5.5-5-.5L3 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function BadgeHandIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
            <path d="m10.4 10.6-.6 3 2.2-1.2 2.2 1.2-.6-3" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M3 17c2-1.3 4-1 6 0h4M21 15.5c-2.5 1.5-5 3.5-7 4.5-1.5.8-3.5.5-5-.5L3 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CoinsIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <ellipse cx="10" cy="6.5" rx="5" ry="2.2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M5 6.5v4c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-4" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="16" cy="16" r="4.2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M16 14v4M14.8 15.2h2.4M14.8 16.8h2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M7.5 13h.01M11 13h.01M14.5 13h.01M7.5 16.5h.01M11 16.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    );
}

function CashIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.7" />
            <path d="M6 10.5v3M18 10.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
    );
}

function ShieldHomeIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 3.5 19 6v6c0 4-3 7-7 8.5C8 19 5 16 5 12V6l7-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="m9 12 3-2.5 3 2.5v3.5H9V12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
    );
}

function AwardIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.7" />
            <path d="m9 13.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
    );
}