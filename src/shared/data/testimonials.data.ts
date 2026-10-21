export type Testimonial = {
    key: string;
    quote: string;
    authorName: string;
    authorRole: string;
    company: string;
    /** Logo de la empresa — pendiente */
    logo?: string;
};

// PLACEHOLDER: testimonios de ejemplo (personas y empresas inventadas).
// Reemplazar por testimonios reales y autorizados antes de publicar.
export const TESTIMONIALS: readonly Testimonial[] = [
    {
        key: "testimonio-1",
        quote: "I’m genuinely impressed by what your sales team has accomplished in less than six months. The progress in lead management, customer outreach, and sales development is remarkable, work that many other teams might take three to five years to achieve.",
        authorName: "Sales Team",
        authorRole: "Leader",
        company: "Sales Manager",
    },
    {
        key: "testimonio-2",
        quote: "Looks like you’re doing a great job with the marketing... We haven’t had this many quote requests from the website before. Good job.",
        authorName: "Operations Team",
        authorRole: "Office Manager",
        company: "Office Manager",
    },
];