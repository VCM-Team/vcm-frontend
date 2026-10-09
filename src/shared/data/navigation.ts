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
                { label: "Recruitment", href: "/services/recruitment" },
                { label: "Measurements & Takeoffs", href: "/services/measurements-take-offs" },
                { label: "Financial Performance", href: "/services/finance" },
                { label: "Lead Management Specialists", href: "/services/lead-management-specialists" },
                { label: "Marketing", href: "/services/marketing" },
                { label: "IA Automation", href: "/services/automation" },
                { label: "Leadership", href: "/services/leadership" },
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
];