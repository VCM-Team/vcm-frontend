export type VideoTestimonial = {
    key: string;
    video: { src: string; poster: string; title: string };
} & (
    | {
    variant: "story";
    badge: string;
    title: string;
    statValue: string;
    statLabel: string;
    cta: { label: string; href: string };
    mark?: string;
}
    | {
    variant: "quote";
    quote: string;
    authorName: string;
    authorRole: string;
    company: string;
    logo?: string;
}
    );

// PLACEHOLDER: contenido de ejemplo (nombres, empresa y cifra inventados).
// Reemplazar por testimonios reales y autorizados antes de publicar.
export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [
    {
        key: "slide-1",
        variant: "story",
        video: {
            src: "https://workninjas.com/wp-content/uploads/2025/07/Testimonial-–-Boss-Hogg-Roofing_1.mp4",
            poster: "/assets/images/shared/testimonials/IMG_28311.jpg",
            title: "From Scattered Leads to a Predictable Pipeline",
        },
        badge: "Case Study",
        title: "From Scattered Leads to a Predictable Pipeline",
        statValue: "2x",
        statLabel:
            "more leads followed up every week after rebuilding the sales process and CRM, with a dedicated sales assistant keeping it running.",
        cta: { label: "Read Full Story", href: "/about-us" },
    },
    {
        key: "slide-2",
        variant: "quote",
        video: {
            src: "https://workninjas.com/wp-content/uploads/2025/07/Non-Stop-Roofing.mp4",
            poster: "/assets/images/shared/testimonials/IMG_27647.jpg",
            title: "A Team That Works Like Part of Ours",
        },
        quote:
            "I’m genuinely impressed by what your sales team has accomplished in less than six months. The progress in lead management, customer outreach, and sales development is remarkable, work that many other teams might take three to five years to achieve.",
        authorName: "Sales Team",
        authorRole: "Leader",
        company: "Sales Manager",
    },
];