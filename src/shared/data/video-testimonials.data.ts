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

export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [
    {
        key: "slide-1",
        variant: "story",
        video: {
            src: "https://workninjas.com/wp-content/uploads/2025/07/Testimonial-–-Boss-Hogg-Roofing_1.mp4",
            poster:
                "https://workninjas.com/wp-content/uploads/2025/06/Captura-de-pantalla-2025-06-09-a-las-3.53.14%E2%80%AFp.-m.-2.png",
            title: "Título del video",
        },
        badge: "Success story",
        title: "Título del caso — reemplázalo.",
        statValue: "00%",
        statLabel: "Descripción del indicador — reemplázala.",
        cta: { label: "Read Full Story", href: "/success-story" },
    },
    {
        key: "slide-2",
        variant: "quote",
        video: {
            src: "https://workninjas.com/wp-content/uploads/2025/07/Non-Stop-Roofing.mp4",
            poster: "https://workninjas.com/wp-content/uploads/2025/07/Erick.jpg",
            title: "Título del video",
        },
        quote: "Texto del testimonio — reemplázalo con el de tu cliente.",
        authorName: "Nombre Apellido",
        authorRole: "Cargo",
        company: "Nombre de la empresa",
    },
];