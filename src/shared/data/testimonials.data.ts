export type Testimonial = {
    key: string;
    quote: string;
    authorName: string;
    authorRole: string;
    company: string;
    /** Logo de la empresa — pendiente */
    logo?: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
    {
        key: "testimonio-1",
        quote: "Texto del testimonio — reemplázalo con el de tu cliente.",
        authorName: "Nombre Apellido",
        authorRole: "Cargo",
        company: "Nombre de la empresa",
        // logo: "/testimonials/empresa-1.png",
    },
    {
        key: "testimonio-2",
        quote: "Texto del testimonio — reemplázalo con el de tu cliente.",
        authorName: "Nombre Apellido",
        authorRole: "Cargo",
        company: "Nombre de la empresa",
    },
    {
        key: "testimonio-3",
        quote: "Texto del testimonio — reemplázalo con el de tu cliente.",
        authorName: "Nombre Apellido",
        authorRole: "Cargo",
        company: "Nombre de la empresa",
    },
    {
        key: "testimonio-4",
        quote: "Texto del testimonio — reemplázalo con el de tu cliente.",
        authorName: "Nombre Apellido",
        authorRole: "Cargo",
        company: "Nombre de la empresa",
    },
    {
        key: "testimonio-5",
        quote: "Texto del testimonio — reemplázalo con el de tu cliente.",
        authorName: "Nombre Apellido",
        authorRole: "Cargo",
        company: "Nombre de la empresa",
    },
];