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
const TEAM_PHOTOS = "/assets/images/team";

// VCM Team: nombres y cargos publicados por VCM.
// PLACEHOLDER: las bios describen el rol de forma general; confirmar con cada persona antes de publicar.
export const LEADERSHIP: readonly TeamMember[] = [
    {
        slug: "victor-alvarado",
        name: "Victor Alvarado",
        role: "CEO",
        image: `${TEAM_PHOTOS}/victor.webp`,
        bio: "Victor leads VCM’s vision and strategy, helping U.S. construction and roofing companies grow through better systems and dedicated nearshore talent.",
    },
    {
        slug: "roberto-cordova",
        name: "Roberto Cordova",
        role: "COO",
        image: `${TEAM_PHOTOS}/roberto.webp`,
        bio: "Roberto oversees VCM’s operations, making sure every team is set up to deliver consistent work inside each client’s processes.",
    },
    {
        slug: "yuriko-shiomura",
        name: "Yuriko Shiomura",
        role: "General Manager",
        image: `${TEAM_PHOTOS}/yuriko.webp`,
        bio: "Yuriko manages VCM’s day-to-day business, keeping teams, clients and priorities aligned as the company grows.",
    },
    {
        slug: "angel-passini",
        name: "Angel Passini",
        role: "Key Account Manager",
        image: `${TEAM_PHOTOS}/angel.webp`,
        bio: "Angel works closely with VCM’s clients, making sure each account gets the attention and support it needs to keep growing.",
    },
    {
        slug: "alejandra-martel",
        name: "Alejandra Martel",
        role: "Executive Assistant",
        image: `${TEAM_PHOTOS}/alejandra.webp`,
        bio: "Alejandra supports VCM’s leadership team, keeping calendars, communication and priorities organized so decisions move forward.",
    },
    {
        slug: "samantha-rios",
        name: "Samantha Rios",
        role: "HR Analyst",
        image: `${TEAM_PHOTOS}/samantha.webp`,
        bio: "Samantha supports VCM’s recruiting and people processes, helping bring the right professionals into the team and supporting them as they grow.",
    },
    {
        slug: "alessandro-passini",
        name: "Alessandro Passini",
        role: "Logistic Assistant",
        image: `${TEAM_PHOTOS}/alessandro.webp`,
        bio: "Alessandro supports VCM’s day-to-day logistics, helping keep the office and the team running smoothly.",
    },
];

// Marketing Team: sin atributos extra (sin página de detalle)
export const TEAM_MEMBERS: readonly TeamMember[] = [
    { slug: "boris-balabarca", name: "Boris Balabarca", role: "Marketing Manager", image: PLACEHOLDER_AVATAR },
    { slug: "diego-talledo-sanchez", name: "Diego Talledo Sanchez", role: "Full Stack Developer", image: PLACEHOLDER_AVATAR },
    { slug: "renzo-boza", name: "Renzo Boza", role: "Designer", image: PLACEHOLDER_AVATAR },
    { slug: "karla-torres", name: "Karla Torres", role: "Marketing Assistant", image: PLACEHOLDER_AVATAR },
];

export const getLeaderBySlug = (slug: string) =>
    LEADERSHIP.find((m) => m.slug === slug);