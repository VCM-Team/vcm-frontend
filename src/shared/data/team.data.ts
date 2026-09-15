export type TeamMember = {
    slug: string;
    name: string;
    role: string;
    image: string;
    email?: string;
    linkedin?: string;
    bio?: string;
};

const PLACEHOLDER_AVATAR = "/team/placeholder.jpg";

export const LEADERSHIP: readonly TeamMember[] = [
    {
        slug: "persona-uno",
        name: "Nombre Apellido",
        role: "CEO",
        image: PLACEHOLDER_AVATAR,
        email: "correo@dominio.com",
        linkedin: "https://linkedin.com/in/usuario",
        bio: "Texto de presentación — reemplázalo.",
    },
    {
        slug: "persona-dos",
        name: "Nombre Apellido",
        role: "CFO",
        image: PLACEHOLDER_AVATAR,
        email: "correo@dominio.com",
        linkedin: "https://linkedin.com/in/usuario",
        bio: "Texto de presentación — reemplázalo.",
    },
    {
        slug: "persona-tres",
        name: "Nombre Apellido",
        role: "COO",
        image: PLACEHOLDER_AVATAR,
        email: "correo@dominio.com",
        linkedin: "https://linkedin.com/in/usuario",
        bio: "Texto de presentación — reemplázalo.",
    },
    {
        slug: "persona-cuatro",
        name: "Nombre Apellido",
        role: "CMO",
        image: PLACEHOLDER_AVATAR,
        email: "correo@dominio.com",
        linkedin: "https://linkedin.com/in/usuario",
        bio: "Texto de presentación — reemplázalo.",
    },
    {
        slug: "persona-cinco",
        name: "Nombre Apellido",
        role: "CTO",
        image: PLACEHOLDER_AVATAR,
        email: "correo@dominio.com",
        linkedin: "https://linkedin.com/in/usuario",
        bio: "Texto de presentación — reemplázalo.",
    },
];

export const TEAM_MEMBERS: readonly TeamMember[] = [
    { slug: "miembro-1", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "miembro-2", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "miembro-3", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "miembro-4", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "miembro-5", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "miembro-6", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "miembro-7", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "miembro-8", name: "Nombre Apellido", role: "Account Manager", image: PLACEHOLDER_AVATAR },
];

export const getLeaderBySlug = (slug: string) =>
    LEADERSHIP.find((m) => m.slug === slug);