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
        image: `${TEAM_PHOTOS}/victor.png`,
        bio: "Victor leads VCM’s vision and strategy, helping U.S. construction and roofing companies scale through stronger systems, streamlined operations, and dedicated nearshore talent.",
    },
    {
        slug: "roberto-cordova",
        name: "Roberto Cordova",
        role: "Chief Operating Officer (COO)",
        image: `${TEAM_PHOTOS}/roberto.png`,
        bio: "Roberto oversees operational strategy and execution, optimising systems, workflows, and team performance to build scalable operations that consistently deliver value to VCM and its clients.",
    },
    {
        slug: "yuriko-shiomura",
        name: "Yuriko Shiomura",
        role: "General Manager",
        image: `${TEAM_PHOTOS}/yuriko.png`,
        bio: "Yuriko leads VCM’s day-to-day business operations, aligning people, processes, and priorities to drive efficiency, strengthen performance, and support the company’s continued growth.",
    },
    {
        slug: "angel-passini",
        name: "Angel Passini",
        role: "Sales, Marketing & Key Account Manager",
        image: `${TEAM_PHOTOS}/angel.png`,
        bio: "Angel drives business development, marketing strategy, and client relationships, connecting companies with tailored nearshore talent solutions that strengthen operations, accelerate growth, and build lasting partnerships.",
    },
    {
        slug: "estefania-otero",
        name: "Estefanía Otero",
        role: "Office Administrator", // PLACEHOLDER: poner su cargo
        image: `${TEAM_PHOTOS}/estefania.png`,
        bio: "Estefania oversees office administration and workplace coordination, maintaining organised systems and efficient day-to-day processes that keep VCM’s team productive and operations running smoothly.", // PLACEHOLDER: ajustar a su cargo
    },
    {
        slug: "alejandra-martel",
        name: "Alejandra Martel",
        role: "Executive Assistant",
        image: `${TEAM_PHOTOS}/alejandra.png`,
        bio: "Alejandra supports the CEO and leadership team by managing calendars, coordinating communication, and organising priorities to keep decisions moving forward and operations aligned.",
    },
    {
        slug: "samantha-rios",
        name: "Samantha Rios",
        role: "Hiring & Recruiting Analyst",
        image: `${TEAM_PHOTOS}/samantha.png`,
        bio: "Sammantha drives talent sourcing and recruitment coordination, identifying qualified professionals and matching candidates with client requirements to build reliable, high-performing teams.",
    },
    {
        slug: "alessandro-passini",
        name: "Alessandro Passini",
        role: "Logistics & Administrative Assistant",
        image: `${TEAM_PHOTOS}/alessandro.png`,
        bio: "Alessandro coordinates logistics, resources, and administrative processes, ensuring VCM’s workplace and internal operations remain organised, efficient, and equipped to support business needs.",
    },
    {
        slug: "luzca-izcue",
        name: "Luzca Izcue",
        role: "Selection Assistant",
        image: `${TEAM_PHOTOS}/luska.png`,
        bio: "Luzca supports candidate evaluation and selection, coordinating screening activities and helping identify professionals whose skills and experience align with client expectations and VCM’s quality standards.", // PLACEHOLDER: ajustar a su cargo
    }
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