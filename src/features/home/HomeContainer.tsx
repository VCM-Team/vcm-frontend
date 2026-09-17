import Hero from "./Hero";
import Stats, {StatItem} from "../../shared/components/ui/Stats";
import type {AccordionItem} from "@/src/shared/components/ui/Accordion";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import PromoCardsGrid from "@/src/shared/components/ui/PromoCardsGrid";
import type { PromoCardItem } from "@/src/shared/components/ui/PromoCard";
import ServicesGrid from "@/src/shared/components/ui/ServicesGrid";
import type {ServiceCardItem} from "@/src/shared/components/ui/ServiceCard";
import VideoEmbed from "@/src/shared/components/ui/VideoEmbed";
import Container from "@/src/shared/components/ui/Container";
import BubbleFeatures, { type BubbleFeatureItem } from "@/src/shared/components/ui/BubbleFeatures";
import ImageCta from "@/src/shared/components/ui/ImageCta";
import ImageAccordionSplit from "@/src/shared/components/ui/ImageAccordionSplit";
import VideoTestimonials from "@/src/shared/components/ui/VideoTestimonials";
import { VIDEO_TESTIMONIALS } from "@/src/shared/data/video-testimonials.data";
import Insights from "@/src/features/home/Insights";
import TechStack from "@/src/features/home/TechStack";
import DiscoveryCall from "@/src/features/home/DiscoveryCall";


const HOME_STATS: readonly StatItem[] = [
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
    { value: "00", label: "Etiqueta del indicador" },
];

const INTRO = {
    badge: "WHO WE ARE",
    title: "For Those Who Build Beyond the Roof",
    description: "We know what it takes to run and grow a roofing business because we've experienced it ourselves. The long days, constant calls, missed moments, and pressure of keeping every part of the business moving. That's why we built a team that takes the weight off your shoulders, so you can spend less time chasing details and more time leading your team, closing jobs, and growing your business.",
    cta: { label: "Schedule a Call", href: "/contact-us" },
    features: [
        "Roofing Experts Support",
        "Supplement Maximization",
        "Opportunity Conversion",
        "Business Growth",
        "Operational Relief",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "item-1",
        title: "Take Control with Roofing Experts",
        content: "Partner with industry specialists who understand the day-to-day operations of your business and provide dedicated support to streamline your workflow.",
    },
    {
        key: "item-2",
        title: "Maximize Every Claim with Supplements",
        content: "Ensure no money is left on the table by letting our expert team handle insurance supplements with precision and thorough documentation.",
    },
    {
        key: "item-3",
        title: "Turn More Leads into Real Opportunities",
        content: "Optimize your sales pipeline with strategic lead follow-ups and management that convert inquiries into profitable roofing projects.",
    },
];

const PROMO_CARDS: readonly PromoCardItem[] = [
    {
        key: "about",
        badge: "About Us",
        title: "Built by roofers. Driven by hard work. Made to make roofing easier.",
        href: "/about-us",
        image: "/assets/images/shared/card_roofers.webp",
    },
    {
        key: "careers",
        badge: "Careers",
        title: "Join a driven team working to change the way roofing support gets done.",
        href: "/about-us/jobs",
        image: "/assets/images/shared/card_v.webp",
        variant: "accent",
        imagePosition: "top",
    },
    {
        key: "partnerships",
        badge: "Partnerships",
        title: "We work alongside CRMs, vendors, and coaches to help roofing businesses grow.",
        href: "/partnerships",
        image:
            "/assets/images/shared/card_workers.webp",
    },
];

const CARD_IMAGE =
    "https://workninjas.com/wp-content/uploads/2025/06/doxjuan-1024x950.png";

const SERVICES_HEADING = {
    badge: "Services",
    title: "Primera línea del titular,",
    titleRest: "segunda línea del titular",
};

const EXPERTISE = {
    badge: "Proven Expertise",
    title: "Primera línea del titular;",
    titleRest: "segunda línea del titular",
};

const EXPERTISE_ITEMS: readonly BubbleFeatureItem[] = [
    {
        key: "item-1",
        title: "Título del primer punto",
        description: "Descripción — reemplázala con el texto propio.",
        Icon: PeopleIcon,
    },
    {
        key: "item-2",
        title: "Título del segundo punto",
        description: "Descripción — reemplázala con el texto propio.",
        Icon: LayersIcon,
    },
    {
        key: "item-3",
        title: "Título del tercer punto",
        description: "Descripción — reemplázala con el texto propio.",
        Icon: SparkIcon,
    },
    {
        key: "item-4",
        title: "Título del cuarto punto",
        description: "Descripción — reemplázala con el texto propio.",
        Icon: LinkIcon,
    },
];

const IMAGE_CTA = {
    title: "Primera línea del titular",
    titleRest: "segunda línea",
    cta: { label: "Set an Appointment", href: "/contact-us" },
    image: "https://workninjas.com/wp-content/uploads/2025/09/image-48-1.avif",
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
const VIDEO = {
    id: "AZzH9Y4uWh4",
    title: "Título del video — reemplázalo",
};

const INDUSTRIES = {
    badge: "Industries",
    title: "Primera línea del titular",
    titleRest: "segunda línea del titular",
    image: "https://workninjas.com/wp-content/uploads/2025/07/Graph-1.png",
};

const INDUSTRIES_ITEMS: readonly AccordionItem[] = [
    { key: "ind-1", title: "Título del primer punto", content: "Descripción — reemplázala con el texto propio." },
    { key: "ind-2", title: "Título del segundo punto", content: "Descripción — reemplázala con el texto propio." },
    { key: "ind-3", title: "Título del tercer punto", content: "Descripción — reemplázala con el texto propio." },
    { key: "ind-4", title: "Título del cuarto punto", content: "Descripción — reemplázala con el texto propio." },
    { key: "ind-5", title: "Título del quinto punto", content: "Descripción — reemplázala con el texto propio." },
    { key: "ind-6", title: "Título del sexto punto", content: "Descripción — reemplázala con el texto propio." },
];

export default function HomeContainer() {
    return (
        <>
            <Hero />
            <AccordionSection
                badge={INTRO.badge}
                title={INTRO.title}
                description={INTRO.description}
                cta={INTRO.cta}
                items={INTRO_ITEMS}
            />
            <PromoCardsGrid items={PROMO_CARDS} />
            <ServicesGrid
                badge={SERVICES_HEADING.badge}
                title={SERVICES_HEADING.title}
                titleRest={SERVICES_HEADING.titleRest}
                items={SERVICES}
            />
            {/* video */}
            <Container className="py-16 lg:py-20">
                <VideoEmbed videoId={VIDEO.id} title={VIDEO.title} />
            </Container>
            <BubbleFeatures
                badge={EXPERTISE.badge}
                title={EXPERTISE.title}
                titleRest={EXPERTISE.titleRest}
                items={EXPERTISE_ITEMS}
                stats={HOME_STATS}
            />

            <ImageCta
                title={IMAGE_CTA.title}
                titleRest={IMAGE_CTA.titleRest}
                cta={IMAGE_CTA.cta}
                image={IMAGE_CTA.image}
                Icon={ChartIcon}
            />

            <ImageAccordionSplit
                badge={INDUSTRIES.badge}
                title={INDUSTRIES.title}
                titleRest={INDUSTRIES.titleRest}
                image={INDUSTRIES.image}
                items={INDUSTRIES_ITEMS}
            />

            <VideoTestimonials items={VIDEO_TESTIMONIALS} />
            <Insights />
            <TechStack />
            <DiscoveryCall/>
        </>
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

function PeopleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M5.5 19c0-3 2.9-5 6.5-5s6.5 2 6.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function LayersIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="m12 4 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="m4 12 8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function SparkIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function LinkIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M10 14a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 1 0-5.7-5.7L11.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M14 10a4 4 0 0 0-5.7 0L5.5 12.8a4 4 0 1 0 5.7 5.7l1.3-1.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

function ChartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M5 19V11M10 19V5M15 19v-6M20 19V8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    );
}