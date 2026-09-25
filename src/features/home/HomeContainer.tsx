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
    description:
        "VCM is a growth partner for U.S. construction and roofing companies. We start by finding what is holding your business back, then design the systems and accountability it needs, and only then add the talent to execute, with dedicated professionals working from our offices in Lima, Peru.",
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
        image: "/assets/images/shared/card_roofers.webp",
    },
    {
        key: "careers",
        badge: "Careers",
        title: "Join our team in Lima and help U.S. construction companies grow.",
        href: "/about-us/jobs",
        image: "/assets/images/shared/card_v.webp",
        variant: "accent",
        imagePosition: "top",
    },
    {
        key: "case-study",
        badge: "Case Studies",
        title: "See how we help construction companies build teams that scale.",
        href: "/success-story",
        image: "/assets/images/shared/card_workers.webp",
    },
];

const CARD_IMAGE =
    "https://workninjas.com/wp-content/uploads/2025/06/doxjuan-1024x950.png";

const SERVICES_HEADING = {
    badge: "Business Growth Consulting",
    title: "Six Areas Where We Help",
    titleRest: "Your Business Grow",
    cta: { label: "Explore Services", href: "/services" },
};

const SERVICES: readonly ServiceCardItem[] = [
    {
        key: "sales-performance",
        title: "Sales Performance",
        href: "/services/sales-performance",
        image: CARD_IMAGE,
        Icon: ChartIcon,
    },
    {
        key: "operational-excellence",
        title: "Operational Excellence",
        href: "/services/operational-excellence",
        image: CARD_IMAGE,
        Icon: LayersIcon,
    },
    {
        key: "leadership",
        title: "Leadership & Organizational Development",
        href: "/services/leadership-organizational-development",
        image: CARD_IMAGE,
        Icon: PeopleIcon,
    },
    {
        key: "financial-performance",
        title: "Financial Performance",
        href: "/services/financial-performance",
        image: CARD_IMAGE,
        Icon: DollarIcon,
    },
    {
        key: "marketing",
        title: "Marketing & Customer Acquisition",
        href: "/services/marketing-customer-acquisition",
        image: CARD_IMAGE,
        Icon: MegaphoneIcon,
    },
    {
        key: "ai-automation",
        title: "AI & Business Automation",
        href: "/services/ai-business-automation",
        image: CARD_IMAGE,
        Icon: SparkIcon,
    },
];

const VIDEO = {
    src: "https://res.cloudinary.com/dca79rb3c/video/upload/v1789757625/Work_Ninjas_Scalable_Back_Office_Solutions_for_Roofing_Contractors_Beyond_vnduhs.mp4",
    poster: "/assets/images/video/thumbnail.webp",
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
        title: "Nearshore from Lima",
        description: "A team in time zones close to the U.S., integrated into your day-to-day operations.",
        Icon: LinkIcon,
    },
];

const IMAGE_CTA = {
    title: "Build the Team",
    titleRest: "Your Growth Needs",
    cta: { label: "Build Your Team", href: "/book-demo" },
    image: "https://workninjas.com/wp-content/uploads/2025/09/image-48-1.avif",
};

const TALENT = {
    badge: "Talent Solutions",
    title: "Dedicated Talent",
    titleRest: "for Every Part of",
    titleAccent: "Your Business",
    image: "/assets/images/shared/chart.webp",
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
        content: "Support for bookkeeping, costs, budgets and reporting, so you always know where your numbers stand.",
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

            <ImageAccordionSplit
                badge={TALENT.badge}
                title={TALENT.title}
                titleRest={TALENT.titleRest}
                titleAccent={TALENT.titleAccent}
                image={TALENT.image}
                items={TALENT_ITEMS}
            />

            <VideoTestimonials items={VIDEO_TESTIMONIALS} />
            <Insights />
            <TechStack />
            <DiscoveryCall />
        </>
    );
}

/* ── Iconos ─────────────────────────────── */

function MegaphoneIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 25 25" fill="none" className={className} aria-hidden>
            <path
                d="M18.3753 13.2708V11.2292H22.4587V13.2708H18.3753ZM19.6003 20.4167L16.3337 17.9667L17.5587 16.3333L20.8253 18.7833L19.6003 20.4167ZM17.5587 8.16666L16.3337 6.53333L19.6003 4.08333L20.8253 5.71666L17.5587 8.16666ZM5.10449 19.3958V15.3125H4.08366C3.5222 15.3125 3.04156 15.1126 2.64173 14.7128C2.24191 14.3129 2.04199 13.8323 2.04199 13.2708V11.2292C2.04199 10.6677 2.24191 10.1871 2.64173 9.78723C3.04156 9.38741 3.5222 9.1875 4.08366 9.1875H8.16699L13.2712 6.12499V18.375L8.16699 15.3125H7.14616V19.3958H5.10449ZM14.292 15.6698V8.8302C14.7514 9.23854 15.1214 9.73619 15.4021 10.3232C15.6829 10.9102 15.8232 11.5524 15.8232 12.25C15.8232 12.9476 15.6829 13.5898 15.4021 14.1768C15.1214 14.7638 14.7514 15.2615 14.292 15.6698Z"
                fill="currentColor"
            />
        </svg>
    );
}

function DollarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 25 25" fill="none" className={className} aria-hidden>
            <path
                d="M11.3316 19.3958H13.118V18.1198C13.9687 17.9667 14.7003 17.6349 15.3128 17.1245C15.9253 16.6141 16.2316 15.8569 16.2316 14.8531C16.2316 14.1385 16.0274 13.4835 15.6191 12.888C15.2107 12.2925 14.3941 11.7736 13.1691 11.3313C12.1482 10.991 11.4422 10.6932 11.0508 10.438C10.6595 10.1828 10.4639 9.83403 10.4639 9.39167C10.4639 8.94931 10.6212 8.60053 10.936 8.34532C11.2508 8.09011 11.7059 7.9625 12.3014 7.9625C12.8458 7.9625 13.2712 8.09436 13.5774 8.35808C13.8837 8.62179 14.1048 8.94931 14.2409 9.34063L15.8743 8.67709C15.6871 8.0816 15.3426 7.56268 14.8407 7.12032C14.3388 6.67796 13.7816 6.43125 13.1691 6.38021V5.10417H11.3826V6.38021C10.5319 6.56737 9.86838 6.94167 9.39199 7.50313C8.9156 8.06459 8.67741 8.6941 8.67741 9.39167C8.67741 10.1913 8.91135 10.8379 9.37923 11.3313C9.84711 11.8247 10.583 12.25 11.5868 12.6073C12.6587 12.9986 13.403 13.3474 13.8199 13.6537C14.2367 13.9599 14.4451 14.3597 14.4451 14.8531C14.4451 15.4146 14.2452 15.8272 13.8454 16.0909C13.4455 16.3546 12.9649 16.4865 12.4035 16.4865C11.842 16.4865 11.3443 16.3121 10.9105 15.9633C10.4766 15.6145 10.1576 15.0913 9.95345 14.3938L8.26907 15.0573C8.50727 15.874 8.87732 16.5333 9.37923 17.0352C9.88114 17.5371 10.5319 17.8816 11.3316 18.0688V19.3958ZM12.2503 22.4583C10.8382 22.4583 9.51109 22.1904 8.26907 21.6544C7.02706 21.1185 5.94668 20.3911 5.02793 19.4724C4.10918 18.5536 3.38184 17.4733 2.8459 16.2313C2.30996 14.9892 2.04199 13.6622 2.04199 12.25C2.04199 10.8379 2.30996 9.51077 2.8459 8.26875C3.38184 7.02674 4.10918 5.94636 5.02793 5.02761C5.94668 4.10886 7.02706 3.38152 8.26907 2.84558C9.51109 2.30964 10.8382 2.04167 12.2503 2.04167C13.6625 2.04167 14.9896 2.30964 16.2316 2.84558C17.4736 3.38152 18.554 4.10886 19.4727 5.02761C20.3915 5.94636 21.1188 7.02674 21.6548 8.26875C22.1907 9.51077 22.4587 10.8379 22.4587 12.25C22.4587 13.6622 22.1907 14.9892 21.6548 16.2313C21.1188 17.4733 20.3915 18.5536 19.4727 19.4724C18.554 20.3911 17.4736 21.1185 16.2316 21.6544C14.9896 22.1904 13.6625 22.4583 12.2503 22.4583Z"
                fill="currentColor"
            />
        </svg>
    );
}

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