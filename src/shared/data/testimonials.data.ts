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
        quote: "We had leads everywhere and no real process. VCM helped us define our sales stages, clean up the CRM and set a follow-up routine. Now I can open one dashboard and know exactly where every deal stands.",
        authorName: "Jason Miller",
        authorRole: "Owner",
        company: "Redstone Roofing Co.",
    },
    {
        key: "testimonio-2",
        quote: "Everything used to depend on me. They mapped how we actually work, wrote the SOPs with our team and now things run the same way whether I’m in the office or on a job site.",
        authorName: "Laura Bennett",
        authorRole: "Co-Founder",
        company: "Clearview Exteriors",
    },
    {
        key: "testimonio-3",
        quote: "Our estimator from VCM handles takeoffs and estimates inside our own process. We respond to bids faster and my project managers are back to managing projects.",
        authorName: "Daniel Ortiz",
        authorRole: "Operations Manager",
        company: "Keystone Construction Group",
    },
    {
        key: "testimonio-4",
        quote: "We were growing but didn’t know which jobs were actually profitable. The budgets and dashboards they set up changed how we price our work.",
        authorName: "Rachel Coleman",
        authorRole: "CFO",
        company: "Pioneer Roofing & Restoration",
    },
    {
        key: "testimonio-5",
        quote: "The team in Lima works in our tools and on our schedule. They felt like part of the company from the first weeks, and the support didn’t stop after onboarding.",
        authorName: "Chris Walker",
        authorRole: "President",
        company: "Summit Line Builders",
    },
];