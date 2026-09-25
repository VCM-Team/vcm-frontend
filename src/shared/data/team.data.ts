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

// Nombres y cargos: publicados por VCM.
// PLACEHOLDER: las bios describen el rol de forma general; confirmar con cada persona antes de publicar.
export const LEADERSHIP: readonly TeamMember[] = [
    {
        slug: "victor-alvarado",
        name: "Victor Alvarado",
        role: "CEO",
        image: PLACEHOLDER_AVATAR,
        bio: "Victor leads VCM’s vision and strategy, helping U.S. construction and roofing companies grow through better systems and dedicated nearshore talent.",
    },
    {
        slug: "roberto-cordova",
        name: "Roberto Cordova",
        role: "COO",
        image: PLACEHOLDER_AVATAR,
        bio: "Roberto oversees VCM’s operations, making sure every team is set up to deliver consistent work inside each client’s processes.",
    },
    {
        slug: "yuriko-shiomura",
        name: "Yuriko Shiomura",
        role: "General Manager",
        image: PLACEHOLDER_AVATAR,
        bio: "Yuriko manages VCM’s day-to-day business, keeping teams, clients and priorities aligned as the company grows.",
    },
];

export const TEAM_MEMBERS: readonly TeamMember[] = [
    { slug: "alejandra-martel", name: "Alejandra Martel", role: "Executive Assistant", image: PLACEHOLDER_AVATAR },
    { slug: "samantha-rios", name: "Samantha Rios", role: "HR Analyst", image: PLACEHOLDER_AVATAR },
    { slug: "angel-passini", name: "Angel Passini", role: "Key Account Manager", image: PLACEHOLDER_AVATAR },
    { slug: "alessandro-passini", name: "Alessandro Passini", role: "Logistic Assistant", image: PLACEHOLDER_AVATAR },
];

export const getLeaderBySlug = (slug: string) =>
    LEADERSHIP.find((m) => m.slug === slug);