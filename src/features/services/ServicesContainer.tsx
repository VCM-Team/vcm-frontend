import PageHero from "@/src/shared/components/ui/PageHero";
import ServicesGrid, { } from "@/src/shared/components/ui/ServicesGrid";
import type { ServiceCardItem } from "@/src/shared/components/ui/ServiceCard";
import StickyCardSection from "@/src/shared/components/ui/StickyCardSection";
import InsightsSection, {InsightItem} from "@/src/shared/components/ui/InsightsSection";

const HERO = {
    badge: "Services",
    title: "Titular de la página",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Free Consultation", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Hero1.png",
};

const CARD_IMAGE =
    "https://workninjas.com/wp-content/uploads/2025/06/doxjuan-1024x950.png";

const SERVICES_HEADING = {
    badge: "Services",
    title: "Primera línea del titular,",
    titleRest: "segunda línea del titular",
};

const SERVICES: readonly ServiceCardItem[] = [
    {
        key: "roofing-specialists",
        title: "Nombre del servicio",
        href: "/services/roofing-specialists",
        image: CARD_IMAGE,
        Icon: RoofIcon,
    },
    {
        key: "lead-management",
        title: "Nombre del servicio",
        href: "/services/lead-management-specialists",
        image: CARD_IMAGE,
        Icon: HeadsetIcon,
    },
    {
        key: "supplements",
        title: "Nombre del servicio",
        href: "/services/supplements-xactimates-billing",
        image: CARD_IMAGE,
        Icon: ShieldIcon,
    },
    {
        key: "measurements",
        title: "Nombre del servicio",
        href: "/services/measurements-take-offs",
        image: CARD_IMAGE,
        Icon: RulerIcon,
    },
    {
        key: "marketing",
        title: "Nombre del servicio",
        href: "/services/marketing",
        image: CARD_IMAGE,
        Icon: MegaphoneIcon,
    },
    {
        key: "bookkeeping",
        title: "Nombre del servicio",
        href: "/services/bookkeeping",
        image: CARD_IMAGE,
        Icon: DollarIcon,
    },
];

const WHY_US = {
    badge: "Why us?",
    title: "Primera línea del titular",
    titleTyped: "segunda línea",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3898-scaled.jpg",
};

const INSIGHTS_HEADING = {
    badge: "Insights",
    title: "Titular de la sección",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "More Insights", href: "/success-story" },
};

const INSIGHTS: readonly InsightItem[] = [
    {
        key: "insight-1",
        label: "Success story",
        title: "Becoming Insurance-Ready Without Changing the Business",
        href: "/success-story/historia-uno",
        image: "https://workninjas.com/wp-content/uploads/2026/03/DSC01782.jpg",
    },
    {
        key: "insight-2",
        label: "Success story",
        title: "Título del segundo caso",
        href: "/success-story/historia-dos",
        image: "https://workninjas.com/wp-content/uploads/2026/03/DSC01782.jpg",
    },
];

export default function ServicesContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <PageHero
                badge={HERO.badge}
                title={HERO.title}
                description={HERO.description}
                cta={HERO.cta}
                image={HERO.image}
            />

            <ServicesGrid
                badge={SERVICES_HEADING.badge}
                title={SERVICES_HEADING.title}
                titleRest={SERVICES_HEADING.titleRest}
                items={SERVICES}
            />

            <StickyCardSection
                badge={WHY_US.badge}
                title={WHY_US.title}
                titleTyped={WHY_US.titleTyped}
                description={WHY_US.description}
                cta={WHY_US.cta}
                image={WHY_US.image}
            />

            <InsightsSection
                badge={INSIGHTS_HEADING.badge}
                title={INSIGHTS_HEADING.title}
                description={INSIGHTS_HEADING.description}
                items={INSIGHTS}
                cta={INSIGHTS_HEADING.cta}
            />
        </div>
    );
}

/* ── Iconos ─────────────────────────────── */

function RoofIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M3 12 12 5l9 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 11v8h12v-8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M10.5 19v-4h3v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function HeadsetIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M5 14v-2a7 7 0 0 1 14 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="3" y="13" width="4" height="6" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
            <rect x="17" y="13" width="4" height="6" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
            <path d="M19 19v.5a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function ShieldIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 3.5 19 6v6c0 4-3 7-7 8.5C8 19 5 16 5 12V6l7-2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function RulerIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 19h16L4 7v12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M7 15.5h2M10 15.5h2M7 12.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function MegaphoneIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 10.5v3a1.5 1.5 0 0 0 1.5 1.5H8l8 4V6.5l-8 4H5.5A1.5 1.5 0 0 0 4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M8 15v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M19 9.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function DollarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7v10M14.5 9.5c0-1-1.1-1.5-2.5-1.5s-2.5.6-2.5 1.8 1.2 1.6 2.5 1.7c1.3.1 2.5.5 2.5 1.7S13.4 16 12 16s-2.5-.5-2.5-1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
    );
}