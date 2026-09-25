export type NavLink = { label: string; href: string };

export type NavMenu =
    | { type: "simple"; links: NavLink[] }
    | {
    type: "mega";
    groupLabel: string;
    links: NavLink[];
    promo: { title: string; ctaLabel: string; ctaHref: string };
};

export type NavItem = {
    key: string;
    label: string;
    href: string;
    menu?: NavMenu;
};

export const NAV_ITEMS: NavItem[] = [
    { key: "home", label: "Home", href: "/" },
    {
        key: "services",
        label: "Services",
        href: "/services",
        menu: {
            type: "mega",
            groupLabel: "ROOFING",
            promo: {
                title: "Where Roofing Meets Operational Excellence.",
                ctaLabel: "View All",
                ctaHref: "/services",
            },
            links: [
                { label: "Roofing Specialists", href: "/services/roofing-specialists" },
                { label: "NinjaRecruit", href: "/services/ninjarecruit" },
                { label: "Measurements & Takeoffs", href: "/services/measurements-take-offs" },
                { label: "Supplements & Xactimates", href: "/services/supplements-xactimates-billing" },
                { label: "Lead Management Specialists", href: "/services/lead-management-specialists" },
                { label: "Marketing", href: "/services/marketing" },
                { label: "Bookkeeping", href: "/services/bookkeeping" },
                { label: "CRM Migration", href: "/services/crm-migration" },
            ],
        },
    },
    {
        key: "about",
        label: "About",
        href: "/about-us",
        menu: {
            type: "simple",
            links: [
                { label: "Who we are", href: "/about-us" },
                { label: "Team", href: "/about-us/team" },
                { label: "Careers", href: "/about-us/jobs" },
                { label: "Success story", href: "/success-story" },
                { label: "Partnerships", href: "/partnerships" },
            ],
        },
    },
    { key: "blog", label: "Blog", href: "/blog" },
    { key: "contact", label: "Contact", href: "/contact-us" },
];