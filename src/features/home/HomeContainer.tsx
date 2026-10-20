import Hero from "./Hero";
import type { StatItem } from "@/src/shared/components/ui/Stats";
import type { AccordionItem } from "@/src/shared/components/ui/Accordion";
import AccordionSection from "@/src/shared/components/ui/AccordionSection";
import PromoCardsGrid from "@/src/shared/components/ui/PromoCardsGrid";
import type { PromoCardItem } from "@/src/shared/components/ui/PromoCard";
import ServicesGrid from "@/src/shared/components/ui/ServicesGrid";
import type { ServiceCardItem } from "@/src/shared/components/ui/ServiceCard";
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
import RevealSection from "@/src/shared/components/ui/RevealSection";
import ScrollPath from "@/src/shared/components/ui/ScrollPath";
import TalentPerformance from "@/src/features/home/TalentPerformance";

const HOME_STATS: readonly StatItem[] = [
    { value: "4", suffix: " Years", label: "Building nearshore teams for U.S. companies" },
    { value: "50", suffix: "+", label: "Virtual positions built and integrated" },
    { value: "6", suffix: " Areas", label: "Of business growth consulting" },
    { value: "8", suffix: " Roles", label: "Covered by our talent solutions" },
];

const INTRO = {
    badge: "WHO WE ARE",
    title: "Beyond Staffing.",
    titleAccent: "Built for Growth.",
    description: "VCM helps U.S. construction and roofing companies grow with business growth consulting and dedicated nearshore talent from LATAM.",
    cta: { label: "Book a Free Strategy Session", href: "/book-demo" },
    features: [
        "Strategy",
        "Systems",
        "Talent",
        "Nearshore Teams",
        "Construction & Roofing Focus",
    ],
};

const INTRO_ITEMS: readonly AccordionItem[] = [
    {
        key: "assessment",
        title: "Business Assessment",
        content:
            "We evaluate your operations, leadership, sales and systems to identify the obstacles standing between you and your next stage of growth.",
    },
    {
        key: "roadmap",
        title: "Strategic Growth Roadmap",
        content:
            "We turn the assessment into a prioritized plan, with clear objectives, the right sequence and an owner for every initiative.",
    },
    {
        key: "implementation",
        title: "Guided Implementation",
        content:
            "We work alongside your leadership team to put the plan in motion, following up on progress and adjusting as the business responds.",
    },
    {
        key: "scale",
        title: "Scale with Confidence",
        content:
            "Once your operation is ready, we recruit, hire, onboard and train the talent you need to keep growing.",
    },
];

const PROMO_CARDS: readonly PromoCardItem[] = [
    {
        key: "about",
        badge: "About Us",
        title: "Growth consulting and nearshore talent for U.S. construction companies.",
        href: "/about-us",
        image: "/assets/images/shared/v_.webp",
    },
    {
        key: "careers",
        badge: "Careers",
        title: "Join our LATAM team and help U.S. construction companies grow.",
        href: "/about-us/join-us",
        image: "/assets/images/shared/c.webp",
        variant: "accent",
    },
    {
        key: "partnerships",
        badge: "Partnerships",
        title: "Meet the construction and roofing companies growing with VCM.",
        href: "/partnerships",
        image: "/assets/images/shared/m.webp",
    },
];

const SERVICES_HEADING = {
    badge: "Our Services",
    title: "How We Help Your",
    titleRest: "Business Grow",
    cta: { label: "Explore Services", href: "/services" },
};

const SERVICES: readonly ServiceCardItem[] = [
    {
        key: "roofing-specialists",
        title: "Roofing Specialists",
        href: "/services/roofing-specialists",
        image: "/assets/images/shared/services/sales.jpg",
    },
    {
        key: "lead-management",
        title: "Lead Management Specialists",
        href: "/services/lead-management-specialists",
        image: "/assets/images/shared/services/operational.jpeg",
    },
    {
        key: "leadership",
        title: "Leadership & Organizational Development",
        href: "/services/leadership",
        image: "/assets/images/shared/services/leadership.jpeg",
    },
    {
        key: "financial-performance",
        title: "Financial Performance",
        href: "/services/finance",
        image: "/assets/images/shared/services/financial.png",
    },
    {
        key: "marketing",
        title: "Marketing & Customer Acquisition",
        href: "/services/marketing",
        image: "/assets/images/shared/services/IMG_277825.jpg",
    },
    {
        key: "ai-automation",
        title: "AI & Business Automation",
        href: "/services/automation",
        image: "/assets/images/shared/services/automation.jpg",
    },
];

const VIDEO = {
    src: "https://res.cloudinary.com/dca79rb3c/video/upload/v1792531551/Premier_Group-Vcm_omyrjn.mp4",
    poster: "/assets/images/shared/team/team_2.jpeg",
    title: "This is VCM",
};

const EXPERTISE = {
    badge: "Our Approach",
    title: "Strategy, Systems, Talent;",
    titleRest: "In That Order",
};

const EXPERTISE_ITEMS: readonly BubbleFeatureItem[] = [
    {
        key: "strategy",
        title: "Strategy First",
        description: "We diagnose the real cause of the bottleneck before recommending anything.",
        Icon: SparkIcon,
    },
    {
        key: "systems",
        title: "Systems That Scale",
        description: "Clear processes, SOPs and accountability, so growth doesn’t depend on putting out fires.",
        Icon: LayersIcon,
    },
    {
        key: "talent",
        title: "Talent That Executes",
        description: "Dedicated professionals, evaluated for skills and English, who work inside your tools and systems.",
        Icon: PeopleIcon,
    },
    {
        key: "nearshore",
        title: "Nearshore from LATAM",
        description: "A team in time zones close to the U.S., integrated into your day-to-day operations.",
        Icon: LinkIcon,
    },
];

const IMAGE_CTA = {
    title: "Build the Team",
    titleRest: "Your Growth Needs",
    cta: { label: "Build Your Team", href: "/book-demo" },
    image: "/assets/images/shared/team/vcm_tower_.jpg",
};

const TALENT = {
    badge: "Talent Solutions",
    title: "Dedicated Talent",
    titleRest: "for Every Part of",
    titleAccent: "Your Business",
    image: "/assets/images/shared/chart.png",
};

const TALENT_ITEMS: readonly AccordionItem[] = [
    {
        key: "customer-service",
        title: "Customer Service",
        content: "Professionals who answer, route and follow up with your customers, so every call and message gets a timely response.",
    },
    {
        key: "sales",
        title: "Sales",
        content: "Sales support that keeps leads moving, your CRM up to date and your pipeline visible.",
    },
    {
        key: "marketing",
        title: "Marketing",
        content: "Support for campaigns, content and lead nurturing that keeps your brand consistent.",
    },
    {
        key: "estimating",
        title: "Estimating",
        content: "Estimators who work on takeoffs, plan reading and cost estimates for residential and commercial projects.",
    },
    {
        key: "accounting",
        title: "Accounting & Finance",
        content: "Support for automation, costs, budgets and reporting, so you always know where your numbers stand.",
    },
    {
        key: "executive-assistants",
        title: "Executive Assistants",
        content: "Assistants who manage calendars, inboxes and follow-ups, so leadership can focus on what matters most.",
    },
    {
        key: "project-management",
        title: "Project Management",
        content: "Coordinators who track schedules, tasks and communication to help keep projects on track.",
    },
    {
        key: "administrative",
        title: "Administrative Support",
        content: "Help with documentation, data entry, permitting paperwork and the daily tasks that keep operations moving.",
    },
];

export default function HomeContainer() {
    return (
        <>
            <Hero />
            <AccordionSection
                badge={INTRO.badge}
                title={INTRO.title}
                titleAccent={INTRO.titleAccent}
                description={INTRO.description}
                cta={INTRO.cta}
                items={INTRO_ITEMS}
                features={INTRO.features}
            />
            <PromoCardsGrid items={PROMO_CARDS} />
            <ServicesGrid
                badge={SERVICES_HEADING.badge}
                title={SERVICES_HEADING.title}
                titleRest={SERVICES_HEADING.titleRest}
                items={SERVICES}
                cta={SERVICES_HEADING.cta}
                variant="dark"
            />
            {/* video */}
            <RevealSection className="bg-ink-900 py-16 lg:py-20">
                <Container>
                    <VideoEmbed
                        src={VIDEO.src}
                        poster={VIDEO.poster}
                        title={VIDEO.title}
                        className="scale-90 opacity-0 transition-[opacity,scale] duration-1000 ease-out group-data-[inview=true]/reveal:scale-100 group-data-[inview=true]/reveal:opacity-100 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none"
                    />
                </Container>
            </RevealSection>
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

            <TalentPerformance
                badge={TALENT.badge}
                title={TALENT.title}
                titleRest={TALENT.titleRest}
                titleAccent={TALENT.titleAccent}
            />

            <VideoTestimonials items={VIDEO_TESTIMONIALS} />
            <Insights />
            <TechStack />
            <DiscoveryCall />

        </>
    );
}

/* ── Iconos ─────────────────────────────── */

function PeopleIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
            <path
                d="M13.4062 21.8021C12.7743 21.1701 12.4583 20.4028 12.4583 19.5C12.4583 18.5972 12.7743 17.8299 13.4062 17.1979C14.0382 16.566 14.8056 16.25 15.7083 16.25C16.6111 16.25 17.3785 16.566 18.0104 17.1979C18.6424 17.8299 18.9583 18.5972 18.9583 19.5C18.9583 20.4028 18.6424 21.1701 18.0104 21.8021C17.3785 22.434 16.6111 22.75 15.7083 22.75C14.8056 22.75 14.0382 22.434 13.4062 21.8021ZM13.65 13.4333C12.4944 12.2778 11.9167 10.8694 11.9167 9.20833C11.9167 7.54722 12.4944 6.13889 13.65 4.98333C14.8056 3.82778 16.2139 3.25 17.875 3.25C19.5361 3.25 20.9444 3.82778 22.1 4.98333C23.2556 6.13889 23.8333 7.54722 23.8333 9.20833C23.8333 10.8694 23.2556 12.2778 22.1 13.4333C20.9444 14.5889 19.5361 15.1667 17.875 15.1667C16.2139 15.1667 14.8056 14.5889 13.65 13.4333ZM7.58333 19.5C6.39167 19.5 5.37153 19.0757 4.52292 18.2271C3.67431 17.3785 3.25 16.3583 3.25 15.1667C3.25 13.975 3.67431 12.9549 4.52292 12.1063C5.37153 11.2576 6.39167 10.8333 7.58333 10.8333C8.775 10.8333 9.79514 11.2576 10.6438 12.1063C11.4924 12.9549 11.9167 13.975 11.9167 15.1667C11.9167 16.3583 11.4924 17.3785 10.6438 18.2271C9.79514 19.0757 8.775 19.5 7.58333 19.5Z"
                fill="currentColor"
            />
        </svg>
    );
}

function LayersIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
            <path
                d="M12.9997 19.5L1.70592 13.352L3.98092 12.1062L12.9997 17.0354L22.0184 12.1062L24.2934 13.352L12.9997 19.5ZM12.9997 23.8333L1.70592 17.6854L3.98092 16.4395L12.9997 21.3687L22.0184 16.4395L24.2934 17.6854L12.9997 23.8333ZM12.9997 15.1666L1.08301 8.66663L12.9997 2.16663L14.083 2.76246V7.58329H22.9393L24.9163 8.66663L12.9997 15.1666Z"
                fill="currentColor"
            />
        </svg>
    );
}

function SparkIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
            <path
                d="M13.0005 18.3896L14.5984 16.7916H16.7921V14.5979L18.39 13L16.7921 11.4021V9.2083H14.5984L13.0005 7.61038L11.4025 9.2083H9.20879V11.4021L7.61087 13L9.20879 14.5979V16.7916H11.4025L13.0005 18.3896ZM13.0005 25.2416L9.37129 21.6666H4.33379V16.6291L0.758789 13L4.33379 9.3708V4.3333H9.37129L13.0005 0.758301L16.6296 4.3333H21.6671V9.3708L25.2421 13L21.6671 16.6291V21.6666H16.6296L13.0005 25.2416Z"
                fill="currentColor"
            />
        </svg>
    );
}

function LinkIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="6 9.1 21.7 21.7" fill="none" className={className} aria-hidden>
            <path
                d="M9.95801 22.2149L12.2561 19.9168L8.42595 16.0866L21.4485 15.3206L20.6825 28.3432L16.8523 24.513L14.5542 26.8111L9.95801 22.2149ZM12.2561 12.2565L25.2787 11.4904L24.5126 24.513L22.4635 22.4639L22.9806 13.7885L14.3052 14.3056L12.2561 12.2565Z"
                fill="currentColor"
            />
        </svg>
    );
}

function ChartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 30 30" fill="none" className={className} aria-hidden>
            <path
                d="M2.5625 26.25L10.625 15H16.9375L26.25 4.125V26.25H2.5625ZM4.75 18.9688L2.75 17.5312L8.125 10H14.4375L20.3125 3.15625L22.1875 4.78125L15.5625 12.5H9.375L4.75 18.9688Z"
                fill="currentColor"
            />
        </svg>
    );
}