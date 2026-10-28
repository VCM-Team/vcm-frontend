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
    {
        key: "testimonio-3",
        quote: "Team, I want to start with a simple thank you. In a short time, you’ve taken an idea and made it real. Engineers, designers, analysts, coordinators and partners around the world: you build things that make a hard job simpler for the people in the field. A technician with a phone can now do what used to take hours. That’s your work. We move fast, we fix what’s broken, and we help each other. That is what makes this team special, and I’m proud of every one of you. The best is still ahead. So keep asking “what’s next?”, keep building boldly, and remember: great technology exists to serve people. Let’s go build it, together.",
        authorName: "Technology Team",
        authorRole: "Director",
        company: "Technology Director",
    },
];