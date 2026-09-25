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
            poster:
                "https://workninjas.com/wp-content/uploads/2025/06/Captura-de-pantalla-2025-06-09-a-las-3.53.14%E2%80%AFp.-m.-2.png",
            title: "From Scattered Leads to a Predictable Pipeline",
        },
        badge: "Case Study",
        title: "From Scattered Leads to a Predictable Pipeline",
        statValue: "2x",
        statLabel:
            "more leads followed up every week after rebuilding the sales process and CRM, with a dedicated sales assistant keeping it running.",
        cta: { label: "Read Full Story", href: "/success-story" },
    },
    {
        key: "slide-2",
        variant: "quote",
        video: {
            src: "https://workninjas.com/wp-content/uploads/2025/07/Non-Stop-Roofing.mp4",
            poster: "https://workninjas.com/wp-content/uploads/2025/07/Erick.jpg",
            title: "A Team That Works Like Part of Ours",
        },
        quote:
            "Before VCM, every call, estimate and follow-up went through me. They helped us organize our processes first and then built a team in Lima that works inside our tools like they’ve been here for years. I finally spend my time growing the business instead of running it.",
        authorName: "Michael Turner",
        authorRole: "Owner",
        company: "Northline Roofing & Exteriors",
    },
];